import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames/bind';

import AutocompleteInput from 'components/AutocompleteInput';
import Loaders from 'components/Loaders';
import MalSearchSuggestionItem from './MalSearchSuggestionItem';

import {
  getEventValue,
  getTimeoutSeconds,
  debounce,
  capitalise
} from 'utils/common';
import MeikoFetch from 'utils/fetch';
import Urls from 'constants/urls';
import styles from './MalSearch.scss';
import { isArray } from 'util';

const cx = classNames.bind(styles);

const getFilters = (props) => ({
  title: props.search,
  id: props.itemId,
  malId: props.id
});

const hasMalError = (data) => !data || !data.success || !isArray(data);

const checkIfItemExistsAlready = (query) => (props) =>
  MeikoFetch(`${Urls.graphql.base}${query(getFilters(props))}`);

const searchMyAnimeList = (type) => (search) =>
  MeikoFetch(Urls.build(Urls.malSearch, { type, search }));

const Errors = {
  failed: () => 'Mal Search failed to get a response.',
  missing: (type) => `Mal Search failed to find the ${type}.`,
  exists: (type) => `${capitalise(type)} already exists.`
};

const initialState = {
  results: [],
  isFirstQuery: true,
  isFetching: false,
  hasSelected: false,
  error: null
};

class MalSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState
    };

    this.timer = null;
    this.queryMal = searchMyAnimeList(props.type);
    this.checkIfExists = !!props.asyncCheckIfExists
      ? checkIfItemExistsAlready(props.asyncCheckIfExists)
      : () => Promise.resolve({});

    this.handleMalSearch = this.handleMalSearch.bind(this);
    this.selectAutocompleteSuggestion = this.selectAutocompleteSuggestion.bind(
      this
    );
  }

  componentDidMount() {
    if (!this.props.id) return;
    this.handleQueries();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.hasSelected !== this.state.hasSelected ||
      this.props.search !== prevProps.search
    ) {
      if (!!this.props.search) this.fetchMalResults();
      if (!this.props.search) this.setState(initialState);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
    this.timer = null;
  }

  fetchMalResults() {
    this.timer = debounce(() => {
      this.setState({ isFetching: true }, this.handleQueries);
    }, getTimeoutSeconds(2));
  }

  async handleQueries() {
    const response = await this.checkIfExists(this.props);
    const alreadyExists = response.data && response.data.alreadyExists;
    const results = await this.queryMal(this.props.search);

    const malError = hasMalError(results);
    const error = alreadyExists
      ? Errors.exists
      : malError ? Errors.failed : null;

    this.setState(
      {
        alreadyExists,
        results: !malError ? results : [],
        error,
        isFetching: false,
        isFirstQuery: false
      },
      () => {
        if (this.props.id && !this.state.hasSelected) {
          this.selectAutocompleteSuggestion(this.props.id);
        }
      }
    );
  }

  selectAutocompleteSuggestion(selectedId, forceRemove = false) {
    const item = this.state.results.find((x) => x.id === selectedId);
    if (forceRemove || item) {
      this.props.selectMalItem(item);
    }
    this.setState((prev) => ({
      hasSelected: !!item,
      error: !item ? Errors.missing : prev.error
    }));
  }

  handleMalSearch(event) {
    const search = getEventValue(event.target);
    this.props.onUserInput(event);
    if (!search) return this.selectAutocompleteSuggestion(null, true);
  }

  render() {
    const { type, search, menuClassName } = this.props;
    const malSearchClasses = cx('mal-search-container', {
      fresh: this.state.isFirstQuery,
      fetching: this.state.isFetching,
      selected: this.state.hasSelected,
      exists: this.state.alreadyExists
    });
    const menuCompleteClasses = cx('mal-results', menuClassName);
    const clearableInputClasses = {
      clearInputButtonClass: cx('mal-clear-input')
    };

    return (
      <div className={malSearchClasses}>
        <AutocompleteInput
          attr="title"
          items={this.state.results}
          filter={search}
          onChange={this.handleMalSearch}
          onSelect={this.selectAutocompleteSuggestion}
          disableLocalFilter={true}
          suggestionTemplate={MalSearchSuggestionItem}
          menuClassName={menuCompleteClasses}
          clearableInputProps={clearableInputClasses}
        />
        <span className={cx('mal-search-messages')}>
          {!!this.state.error && this.state.error(type)}
        </span>
        {this.state.isFetching && <Loaders.LoadingSpinner size="control" />}
      </div>
    );
  }
}

MalSearch.propTypes = {
  id: PropTypes.number,
  itemId: PropTypes.string,
  type: PropTypes.string.isRequired,
  search: PropTypes.string,
  onUserInput: PropTypes.func.isRequired,
  selectMalItem: PropTypes.func.isRequired,
  asyncCheckIfExists: PropTypes.func,
  menuClassName: PropTypes.string
};

export default MalSearch;
