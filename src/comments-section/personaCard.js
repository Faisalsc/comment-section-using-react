/* eslint-disable react/no-danger */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './commentStyles.css';
import ActionButton from './actionButton';

function createMarkup(text) {
  return {
    __html: text
  };
}

const propTypes = {

  data: PropTypes.oneOfType([PropTypes.obj]),
  actions: PropTypes.oneOfType([PropTypes.obj]),
};

const defaultProps = {
  data: {},
  actions: {},
};

class PersonaCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      avatarUrl, fullName, text, comId
    } = this.props.data;
    return (
      <div className="card">

        <div className="avatar">
          <img src={avatarUrl} alt="Annie Lindqvist, status is online" />
        </div>
        <div className="content">
          {fullName}
          <div className="text">

            <span dangerouslySetInnerHTML={createMarkup(text)} />
            <ActionButton value={text} commentId={comId} actions={this.props.actions} />
          </div>
        </div>
      </div>

    );
  }
}

PersonaCard.propTypes = propTypes;
PersonaCard.defaultProps = defaultProps;

export default PersonaCard;
