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
            role="presentation"
            aria-label="Reply comment"
            onClick={() => {
              this.setState((prevState) => ({ value: '', isEdit: false, isReply: !prevState.isReply }));
            }
            }
          >
            Reply
          </div>
          <div
            className="reply"
            role="presentation"
            aria-label="Edit comment"
            onClick={() => {
              this.setState((prevState) => ({ value: this.props.value, isEdit: !prevState.isEdit, isReply: false }));
            }}
          >
            Edit

          </div>
          <div
            className="reply"
            role="presentation"
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
              className="textarea"
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
