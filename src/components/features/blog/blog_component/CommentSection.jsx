/* eslint-disable react/prop-types */
import Comment from './Comment';

const CommentSection = ({
  comments,
  setCommentToReply,
  handleReplySubmit,
  replies,
  replyName,
  setReplyName,
  replyText,
  setReplyText,
  replyError,
  commentToReply,
  username,
}) => {
  return (
    <section className="mt-10">
      <h3 className="text-2xl font-semibold mb-4">Comments</h3>
      <div className="mb-6">
        {comments.length > 0 ? (
          comments.map((cmt) => (
            <Comment
              key={cmt.comment_id}
              cmt={cmt}
              setCommentToReply={setCommentToReply}
              handleReplySubmit={handleReplySubmit}
              replies={replies}
              replyName={replyName}
              setReplyName={setReplyName}
              replyText={replyText}
              setReplyText={setReplyText}
              replyError={replyError}
              commentToReply={commentToReply}
              username={username}
            />
          ))
        ) : (
          <p>No comments yet.</p>
        )}
      </div>
    </section>
  );
};

export default CommentSection;
