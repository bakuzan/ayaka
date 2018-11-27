import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import styles from './SVGLogo.scss';

const cx = classNames.bind(styles);

class SvgLogo extends Component {
  constructor() {
    super();

    this.letterClass = cx('letter');
    this.animate = cx('hideshow');
    this.sideLength = 50;
  }
  componentDidMount() {
    const container = findDOMNode(this);
    this.characters = container.querySelectorAll(`text.${this.letterClass}`);
    this.cycleCharacters();
  }
  cycleCharacters() {
    clearInterval(this.interval);
    this.interval = setInterval(() => {
      const letterIndex = Array.from(this.characters).findIndex((x) => {
        return x.getAttribute('class').indexOf(this.animate) > -1;
      });

      const nextLetterIndex =
        letterIndex + 1 < this.characters.length ? letterIndex + 1 : 0;

      if (letterIndex !== -1 && this.characters[letterIndex]) {
        this.characters[letterIndex].setAttribute('class', this.letterClass);
      }

      const nextLetter = this.characters[nextLetterIndex];
      if (!nextLetter) return;
      nextLetter.setAttribute('class', `${this.letterClass} ${this.animate}`);
    }, 3000);
  }
  renderLetters(word) {
    const characters = word
      .toUpperCase()
      .split('')
      .map((item, index) => {
        return (
          <text key={index} className={cx('letter')} x="50%" y="50%" dy="0.3em">
            {item}
          </text>
        );
      });
    return characters;
  }
  render() {
    const letters = this.renderLetters(this.props.text);

    return (
      <div id={this.props.id} className={cx('svg-logo', 'center-contents')}>
        <svg xmlns="http://www.w3.org/2000/svg">
          {letters}
          <text
            className={cx('word', 'diagonal')}
            x="50%"
            y="50%"
            dy="0.3em"
            textLength={this.sideLength}
            lengthAdjust="spacingAndGlyphs"
          >
            {this.props.text.toUpperCase()}
          </text>
        </svg>
      </div>
    );
  }
}

SvgLogo.propTypes = {
  id: PropTypes.string,
  text: PropTypes.string.isRequired
};

export default SvgLogo;