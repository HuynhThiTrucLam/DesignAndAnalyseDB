import { FeedBack } from "@/types/Product";
import React, { useEffect, useState } from "react";
import {
  Typography,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Chip,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import FeedbackItem from "@/components/Feedback/FeedbackItem";

interface ProductIdProps {
  prodID?: string;
  prodName?: string;
  handleOpenFeedBack: () => void;
}
const mockFeedbacks: FeedBack[] = [
  {
    id: "fb1",
    name: "John Doe",
    createAt: "2025-01-01",
    message: "Great quality, fits perfectly! Highly recommend.",
    image: ["https://via.placeholder.com/100x100.png?text=John+Feedback+1"],
    rating: 4.5,
  },
  {
    id: "fb2",
    name: "Jane Smith",
    createAt: "2025-01-02",
    message: "The color is a bit brighter than expected, but still love it.",
    image: ["https://via.placeholder.com/100x100.png?text=Jane+Feedback+2"],
    rating: 5,
  },
  {
    id: "fb3",
    name: "Michael Lee",
    createAt: "2025-01-03",
    message: "Great product, but the size is a little too big for me.",
    image: ["https://via.placeholder.com/100x100.png?text=Michael+Feedback+1"],
    rating: 5,
  },
  {
    id: "fb4",
    name: "Emily Clark",
    createAt: "2025-01-04",
    message: "Super comfortable and great for running.",
    image: ["https://via.placeholder.com/100x100.png?text=Emily+Feedback+1"],
    rating: 3,
  },
  {
    id: "fb5",
    name: "Sophia Green",
    createAt: "2025-01-05",
    message: "Love the smartwatch, especially the fitness features.",
    image: ["https://via.placeholder.com/100x100.png?text=Sophia+Feedback+1"],
    rating: 5,
  },
  {
    id: "fb6",
    name: "Liam Brown",
    createAt: "2025-01-06",
    message: "Good performance, but a bit heavy for my wrist.",
    image: ["https://via.placeholder.com/100x100.png?text=Liam+Feedback+1"],
    rating: 4.5,
  },
  {
    id: "fb7",
    name: "Lucas White",
    createAt: "2025-01-07",
    message:
      "The leather feels premium, but I had some issues with the zipper.",
    image: ["https://via.placeholder.com/100x100.png?text=Lucas+Feedback+1"],
    rating: 4.5,
  },
  {
    id: "fb8",
    name: "Olivia Black",
    createAt: "2025-01-08",
    message:
      "Amazing quality, the fit is perfect and the color is exactly what I wanted.",
    image: ["https://via.placeholder.com/100x100.png?text=Olivia+Feedback+1"],
    rating: 5,
  },
  {
    id: "fb9",
    name: "Ethan Gray",
    createAt: "2025-01-09",
    message: "Comfortable shoes, but the sole wore down faster than expected.",
    image: ["https://via.placeholder.com/100x100.png?text=Ethan+Feedback+1"],
    rating: 4.5,
  },
  {
    id: "fb10",
    name: "Chloe Adams",
    createAt: "2025-01-10",
    message: "Great product overall, but I wish there were more color options.",
    image: ["https://via.placeholder.com/100x100.png?text=Chloe+Feedback+1"],
    rating: 4.5,
  },
];

const ModelFeedback = ({
  prodID,
  handleOpenFeedBack,
  prodName,
}: ProductIdProps) => {
  //Call the API to get the feedback of the product with the prodID
  const [feedbacks, setFeedbacks] = useState<FeedBack[]>([]);
  useEffect(() => {
    //API call
    setFeedbacks(mockFeedbacks);
  }, [prodID]);

  return (
    <div>
      <div
        className="Feedback-container"
        style={{ fontFamily: "DM Sans, sans-serif" }}
      >
        <h6 className="text-[12px] mb-[20px]">Bình luận về sản phẩm</h6>
        <div className="Feedback-title flex items-center justify-between pb-[20px] border-b-[1px] border-[lightgrey]">
          <h1 className="text-[30px] font-[600]">{prodName}</h1>
          <p
            className="Detail-feedback text-[13px] font-[500] cursor-pointer"
            onClick={handleOpenFeedBack}
          >
            Xem thông tin sản phẩm
          </p>
        </div>
        <div className="flex my-[20px]  place-items-end">
          <div className=" flex gap-[10px] text-lg font-semibold text-gray-700">
            Tổng số bình luận: <p className="font-[400]">{feedbacks?.length}</p>
          </div>
          <div className=" flex items-center gap-2 ml-auto">
            <input
              type="text"
              placeholder="Tìm kiếm..."
              // value={value}
              // onChange={onChange}
              className="px-4 py-2 border rounded-md w-64"
            />
          </div>
        </div>
        <div className="Detail-listfeed-content">
          <div className="flex flex-col gap-4 mt-4 h-[500px] overflow-y-auto">
            {feedbacks?.map((feedback) => (
              <FeedbackItem feedback={feedback} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelFeedback;
