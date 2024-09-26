/* eslint-disable react/prop-types */
const ReplyForm = ({
    replyName,
    setReplyName,
    replyText,
    setReplyText,
    replyError,
    handleReplySubmit,
    commentId,
  }) => {
    return (
      <div>
        <input
          type="text"
          className="p-2 border border-gray-300 rounded-lg mb-2"
          placeholder="Your Username"
          value={replyName}
          onChange={(e) => setReplyName(e.target.value)}
          required
        />
        <textarea
          className="w-full p-2 border border-gray-300 rounded-lg"
          rows="2"
          placeholder="Write a reply..."
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
          required
        />
        {replyError && <p className="text-red-500">{replyError}</p>}
        <button
          onClick={(e) => handleReplySubmit(e, commentId)}
          className="mt-2 btn-primary rounded-lg"
        >
          Submit Reply
        </button>
      </div>
    );
  };
  
  export default ReplyForm;
  