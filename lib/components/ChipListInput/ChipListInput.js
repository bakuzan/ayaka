import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AutocompleteInput from 'components/AutocompleteInput/AutocompleteInput';
import { Enums, Icons } from 'constants';
import './ChipListInput.css';

class ChipListInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      [props.attr]: '',
      readyRemoval: false
    };

    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.selectAutocompleteSuggestion = this.selectAutocompleteSuggestion.bind(
      this
    );
    this.handleCreateNew = this.handleCreateNew.bind(this);
  }

  handleCreateNew() {
    if (!this.props.createNew) return;
    const { attr, createNew } = this.props;
    createNew({ [attr]: this.state[attr] });
  }

  selectAutocompleteSuggestion(id) {
    const item = this.props.chipOptions.find(x => x._id === id);
    if (!item) return this.handleCreateNew();

    const alreadyExists = this.props.chipsSelected.find(
      x => x._id === item._id
    );
    if (alreadyExists) return;

    this.updateList(item);
    this.setState({ [this.props.attr]: '' });
  }

  persistListState(list) {
    this.props.updateChipList(this.props.name, list);
    this.setStateRemoval(false);
  }

  updateList(item) {
    const list = [...this.props.chipsSelected, item];
    this.persistListState(list);
  }

  removeInputItem(name) {
    const list = this.props.chipsSelected.filter(
      x => x[this.props.attr] !== name
    );
    this.persistListState(list);
  }

  removeLastInputItem() {
    const list = this.props.chipsSelected.slice(
      0,
      this.props.chipsSelected.length - 1
    );
    this.persistListState(list);
  }

  setStateRemoval(value) {
    this.setState({ readyRemoval: value });
  }

  handleUserInput(event) {
    const { value } = event.target;
    this.setState({
      [this.props.attr]: value.toLowerCase(),
      readyRemoval: false
    });
  }

  handleKeyDown(event) {
    const { keyCode } = event;
    if (keyCode === Enums.keyCode.backspace && !this.state[this.props.attr]) {
      event.preventDefault();
      if (!this.state.readyRemoval) return this.setStateRemoval(true);
      if (this.state.readyRemoval) return this.removeLastInputItem();
    }
  }

  render() {
    const { attr, chipOptions, chipsSelected, createNew } = this.props;
    const chips = chipsSelected
      .filter(x => x !== undefined)
      .map((item, index, array) => {
        const readyRemoval =
          this.state.readyRemoval && index === array.length - 1;
        return (
          <span
            key={index}
            className={`input-chip input-chip-deletable${
              readyRemoval ? ' active' : ''
            }`}
          >
            <span className="input-chip-text">{item[attr]}</span>
            <button
              type="button"
              className="button-icon small input-chip-delete"
              title="remove"
              icon={Icons.cross}
              onClick={() => this.removeInputItem(item[attr])}
            />
          </span>
        );
      });
    const hasChips = chips.length > 0;

    return (
      <div className="chip-list-input-container">
        <AutocompleteInput
          label="tags"
          attr={attr}
          items={chipOptions}
          filter={this.state[attr]}
          onChange={this.handleUserInput}
          onSelect={this.selectAutocompleteSuggestion}
          onKeyDown={this.handleKeyDown}
          noSuggestionsItem={
            !!createNew && (
              <button
                type="button"
                className="button ripple"
                onClick={this.handleCreateNew}
              >
                Create New Tag
              </button>
            )
          }
        />
        {!!hasChips && (
          <div className="chip-list-wrapper">
            <div className="chip-list-inner">{chips}</div>
          </div>
        )}
      </div>
    );
  }
}

ChipListInput.propTypes = {
  attr: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  chipsSelected: PropTypes.arrayOf(PropTypes.object).isRequired,
  chipOptions: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateChipList: PropTypes.func.isRequired,
  createNew: PropTypes.func
};

export default ChipListInput;
