// Next-Fetch

import { useContext, useState, useEffect } from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';

import NotificationContext from '../../store/notification-context';

function Comments(props) {
  const { eventId } = props;

  const notificationCtx = useContext(NotificationContext);

  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [isFetchingComments, setIsFetchingComments] = useState(false);

  useEffect(() => {
    if (showComments) {
      setIsFetchingComments(true);
      fetch(`/api/comments/${eventId}}`).then(res => res.json()).then(data => {
        setComments(data.comments);
        setIsFetchingComments(false);
      });
    }
  }, [showComments]);

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  const addCommentHandler = async (commentData) => {
    notificationCtx.showNotification({
      title: 'Sending comment...',
      message: 'Your comment is current being stored into a database.',
      status: 'pending'
    });

    await fetch(`/api/comments/${eventId}`, {
      method: 'POST',
      body: JSON.stringify(commentData),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      if (res.ok) {
        return res.json();
      }

      return res.json().then(data => {
        throw new Error(data.message) || 'Something went wrong!';
      });
    }).then(data => {
      notificationCtx.showNotification({
        title: 'Success!',
        message: 'Your comment is saved!',
        status: 'success'
      });
    }).catch(err => {
      notificationCtx.showNotification({
        title: 'Error!',
        message: err.message || 'Something went wrong!',
        status: 'error'
      });
    });
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && !isFetchingComments && <CommentList items={comments} />}
      {showComments && isFetchingComments && <p>Loading...</p>}
    </section>
  );
}

export default Comments;
