/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './commentStyles.css';
import PersonaCard from './src/comments-section/personaCard';

const propTypes = {
  onSubmitAction: PropTypes.func,
  onEditAction: PropTypes.func,
  onReplyAction: PropTypes.func,
  onDeleteAction: PropTypes.func,
  commentData: PropTypes.oneOfType([PropTypes.array]),
  currentUserId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  classNameProps: PropTypes.oneOfType([PropTypes.object])
};
const defaultProps = {
  commentData: [],
  onSubmitAction: () => {},
  onEditAction: () => {},
  onReplyAction: () => {},
  onDeleteAction: () => {},
  classNameProps: {}
};
class CommentSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentValue: ''
    };
  }

  renderCard(m, card = [], actions) {
    card.push(<div key={m.comId} className={m.userId === this.props.currentUserId ? 'current-user' : ''}><PersonaCard key={m.comId} data={m} actions={actions} /></div>);
    if(m.replies && m.replies.length > 0) {
      m.replies.forEach((mr) => {
        const margin = m.marginLeft || 0;
        this.renderCard({ ...mr, marginLeft: margin + 35 }, card, actions);
      });
    }
    return card;
  }

  render() {
    const { classNameProps } = this.props;
    return (
      <div>
        <div className={classNameProps ? (classNameProps.repliesContainer || 'replies-container' ) : 'replies-container'}>
          {this.props.commentData.map((m) => {
            return this.renderCard(m, [], {
              onEditAction: this.props.onEditAction,
              onReplyAction: this.props.onReplyAction,
              onSubmitAction: this.props.onSubmitAction,
              onDeleteAction: this.props.onDeleteAction,
            });
          })}
        </div>

        <div className={classNameProps ? (classNameProps.commentsContainer || 'comments-container') : 'comments-container'} aria-label="comment">
          <textarea
            rows="3"
            aria-label="Edit comment"
            onChange={(e) => { this.setState({ commentValue: e.target.value }); }}
            value={this.state.commentValue}
          />
          <button
            type="button"
            className="primary-btn"
            aria-label="Save edit"
            onClick={() => {
              this.props.onSubmitAction({
                text: this.state.commentValue,
              });
              this.setState({
                commentValue: ''
              });
            }}
          >
            Post

          </button>
        </div>
      </div>

    );
  }
}

CommentSection.propTypes = propTypes;
CommentSection.defaultProps = defaultProps;

export default CommentSection;
