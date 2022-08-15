import React from 'react';
import PropTypes from 'prop-types';
import css from './FeedbackButton.module.css';

const FeedbackButton = ({ reactions, onButtonClick }) => {
  return reactions.map(reaction => {
    return (
      <button
        type="button"
        key={reaction}
        className={css.reactionButton}
        name={reaction}
        onClick={() => {
          onButtonClick(reaction);
        }}
      >
        {reaction}
      </button>
    );
  });
};

FeedbackButton.propTypes = {
  reactions: PropTypes.arrayOf(PropTypes.string),
  onButoonClick: PropTypes.func,
};

export default FeedbackButton;
