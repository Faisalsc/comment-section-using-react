/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './commentStyles.css';

const propTypes = {
  value: PropTypes.string,
  commentId: PropTypes.string,
  actions: PropTypes.oneOfType([PropTypes.obj]),
};
const defaultProps = {
  actions: {},
  value: '',
  commentId: ''
};
class ActionButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      isReply: false,
      isEdit: false
    };
  }

  render() {
    return (
      <>
        <div className="actions">
          <div
            className="reply"
            aria-label="Reply comment"
            onClick={() => {
              this.setState({ value: '', isReply: !this.state.isReply, isEdit: false });
            }
            }
          >
            Reply

          </div>
          <div
            className="reply"
            aria-label="Edit comment"
            onClick={() => {
              this.setState({ value: this.props.value, isReply: false, isEdit: !this.state.isEdit });
            }}
          >
            Edit

          </div>
          <div
            className="reply"
            aria-label="Delete comment"
            onClick={() => {
              this.props.actions.onDeleteAction({ comIdToDelete: this.props.commentId });
            }}
          >
            Delete

          </div>
        </div>
        {(this.state.isReply || this.state.isEdit) && (
          <div>
            <textarea
              rows="2"
              value={this.state.value}
              onChange={(e) => {
                this.setState({
                  value: e.target.value
                });
              }}
            />
            <button
              type="button"
              className="primary-btn"
              onClick={() => {
                if(this.state.isReply) {
                  this.props.actions.onReplyAction({
                    repliedToCommentId: this.props.commentId,
                    text: this.state.value
                  });
                }
                if(this.state.isEdit) {
                  this.props.actions.onEditAction({
                    comId: this.props.commentId,
                    text: this.state.value
                  });
                }
                this.setState({ value: '', isEdit: false, isReply: false });
              }}
            >
              Post
            </button>
          </div>
        )}
      </>

    );
  }
}

ActionButton.propTypes = propTypes;
ActionButton.defaultProps = defaultProps;

export default ActionButton;
