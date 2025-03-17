import { FeedBack } from "@/types/Product";
import { Input } from "@mui/material";
import renderStars from "../Star/star";

interface FeedbacksProps {
  feedback: FeedBack;
}
const FeedbackItem = ({ feedback }: FeedbacksProps) => {
  const handleAddReply = () => {
    // Add reply to feedback
    console.log("Add reply to feedback");
  };
  return (
    <div className="feedback-card p-6 w-full mx-auto  bg-white rounded-lg border-[1px] transition-shadow">
      <div className="flex  gap-4 items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div>
            <h3 className="text-lg font-semibold">{feedback.name}</h3>
            <div className="text-sm text-gray-500">{feedback.createAt}</div>
          </div>
        </div>
        <div className=" flex text-xl">
          {renderStars(feedback?.rating || 0)}
          <p> / {feedback?.rating}</p>
        </div>
      </div>
      {/* Message */}
      <p className="text-gray-700 mb-4 ">{feedback.message}</p>
      {/* Image */}

      <img
        src={feedback.image[0]} // Giả sử chỉ có một hình ảnh đại diện
        alt={feedback.message}
        className="w-[50px] h-[50px] object-cover"
      />
      {/* Footer (Action buttons, etc.) */}
      <div className=" flex justify-between items-center mt-[24px]">
        <Input
          type="string"
          placeholder="Phản hồi tại đây"
          className="w-[90%] "
        />

        <div className="flex justify-end space-x-3">
          <button
            onClick={handleAddReply}
            className="px-4 py-2 text-white bg-red-700 rounded-md hover:bg-blue-700 transition-colors"
          >
            Reply
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackItem;
