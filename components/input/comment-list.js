import classes from './comment-list.module.css';

function CommentList(props) {
  const { items } = props;

  const allComments = items.map(item => (
    <li key={item.id}>
      <p>{item.comment}</p>
      <div>
        By <address>{item.name}</address>
      </div>
    </li>
  ));

  return (
    <ul className={classes.comments}>
      {allComments}
    </ul>
  );
}

export default CommentList;
