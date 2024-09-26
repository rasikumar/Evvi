/* eslint-disable react/prop-types */
import ReplyForm from './ReplyForm';

const Comment = ({
  cmt,
  setCommentToReply,
  handleReplySubmit,
  replies,
  replyName,
  setReplyName,
  replyText,
  setReplyText,
  replyError,
  commentToReply,
//   username,
}) => {
  return (
    <div className="mb-4 p-4 bg-slate-300/20 rounded-lg border border-gray-200 duration-300">
      <div className="flex items-center gap-4 mb-2">
        <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0">
          <img
            src={`https://ui-avatars.com/api/?name=${cmt.comment_username}&background=random`}
            alt={cmt.comment_username}
            className="rounded-full w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col">
          <p className="font-semibold text-lg">{cmt.comment_username}</p>
          <p className="text-sm text-gray-500">
            {new Date(cmt.comment_created_at).toLocaleString("en-IN", {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "numeric",
              minute: "numeric",
            })}
          </p>
        </div>
      </div>

      <p className="text-gray-800 text-base leading-relaxed">{cmt.comment}</p>

      <button
        onClick={() => setCommentToReply((prev) => (prev === cmt.comment_id ? null : cmt.comment_id))}
        className="text-teal-500 hover:text-teal-700"
      >
        Reply
      </button>

      {commentToReply === cmt.comment_id && (
        <ReplyForm
          replyName={replyName}
          setReplyName={setReplyName}
          replyText={replyText}
          setReplyText={setReplyText}
          replyError={replyError}
          handleReplySubmit={handleReplySubmit}
          commentId={cmt.comment_id}
        />
      )}

      {replies[cmt.comment_id] && replies[cmt.comment_id].length > 0 && (
        <div className="mt-4 ml-4">
          {replies[cmt.comment_id].map((reply) => (
            <div key={reply.reply_id} className="p-2 bg-gray-100 rounded border mb-2">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0">
                  <img
                    src={`https://ui-avatars.com/api/?name=${reply.reply_username}&background=random`}
                    alt={reply.reply_username}
                    className="rounded-full w-full h-full object-cover"
                  />
                </div>

                <div className="flex items-end gap-2">
                  <p className="font-medium">{reply.reply_username}</p>
                  <p className="text-sm text-gray-500">{reply.reply_created_at}</p>
                </div>
              </div>
              <p>{reply.reply}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;
