import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ProductListSell from "../Home/component/ProductList";
import { Product } from "@/types/Product";
import ProductItemSell from "../Home/component/ProductItemSell";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";

const mockData: Product[] = [
  {
    id: "1",
    name: "Classic T-Shirt",
    typeOf: { id: "1", value: "SHOES" },
    desc: "A comfortable and stylish classic t-shirt made from 100% cotton.Giày Thể Thao GAT Shoes Nam Nữ Second Sunday White Wind  Đế Tăng Chiều Cao SK62",
    material: "Cotton",
    policy: ` - Đổi trả dễ dàng trong thời gian như trên phiếu bảo hành, áp dụng cho sản phẩm mới, chưa qua sử dụng và đầy đủ tem mác.Nếu gặp bất kỳ vấn đề gì, vui lòng liên hệ với chúng mình qua Chat để được hỗ trợ tốt nhất.
      - Lưu ý rằng, chính sách đổi trả chỉ áp dụng cho sản phẩm còn mới, có lỗi kỹ thuật hoặc gửi sai hàng. Sản phẩm đổi mới có giá trị bằng hoặc cao hơn sản phẩm cũ, với những sản phẩm có giá trị thấp hơn, chính sách như trên phiếu bảo hành.`,
    care_instructrion: "Machine wash cold, tumble dry low.",
    colorList: [
      {
        id: "red",
        value: "#545457",
        sizeList: [
          { id: "6", value: "XL", inventory: 40 },
          { id: "7", value: "S", inventory: 50 },
          { id: "8", value: "M", inventory: 60 },
        ],
        img: [
          "https://bizweb.dktcdn.net/thumb/large/100/466/874/products/2-jpeg-1733209833850.jpg?v=1733243084457",
          "https://via.placeholder.com/400x400.png?text=Red+T-Shirt+2",
        ],
      },
      {
        id: "blue",
        value: "#545457",
        sizeList: [
          { id: "9", value: "L", inventory: 40 },
          { id: "7", value: "S", inventory: 50 },
          // { id: "8", value: "M", inventory: 60 },
        ],
        img: [
          "https://bizweb.dktcdn.net/100/466/874/products/1-jpeg-1729760529494.jpg?v=1729772029267",
          "https://via.placeholder.com/400x400.png?text=Blue+T-Shirt+2",
        ],
      },
    ],
    totalSold: 200,
    unitPrice: 19.99,
    rating: 4.5,
    discount: 15, // Added discount field
    feedback: [
      {
        id: "fb1",
        name: "John Doe",

        createAt: "2025-01-01",
        message: "Great quality, fits perfectly!",
        image: ["https://via.placeholder.com/100x100.png?text=John+Feedback+1"],
        rating: 4.5,
      },
      {
        id: "fb2",
        name: "Jane Smith",

        createAt: "2025-01-02",
        message:
          "The color is a bit brighter than expected, but still love it.",
        image: ["https://via.placeholder.com/100x100.png?text=Jane+Feedback+1"],
        rating: 5,
      },
    ],
  },
  {
    id: "2",
    name: "Leather Jacket",
    typeOf: { id: "1", value: "SHOES" },
    desc: "A high-quality leather jacket perfect for cool weather.",
    material: "Leather",
    policy: "14-day return policy",
    care_instructrion: "Spot clean only, do not machine wash.",
    colorList: [
      {
        id: "black",
        value: "#000",
        sizeList: [
          { id: "6", value: "XL", inventory: 40 },
          { id: "7", value: "S", inventory: 50 },
          { id: "8", value: "M", inventory: 60 },
        ],
        img: [
          "https://bizweb.dktcdn.net/thumb/large/100/466/874/products/2-jpeg-1733209833850.jpg?v=1733243084457",
          "https://via.placeholder.com/400x400.png?text=Black+Jacket+2",
        ],
      },
      {
        id: "brown",
        value: "#545457",
        sizeList: [
          { id: "6", value: "XL", inventory: 40 },
          { id: "7", value: "S", inventory: 50 },
          { id: "8", value: "M", inventory: 60 },
        ],
        img: [
          "https://bizweb.dktcdn.net/thumb/large/100/466/874/products/2-jpeg-1733209833850.jpg?v=1733243084457",
          "https://bizweb.dktcdn.net/thumb/large/100/466/874/products/2-jpeg-1733209833850.jpg?v=1733243084457",
        ],
      },
    ],
    totalSold: 120,
    unitPrice: 149.99,
    rating: 4.8,
    discount: 15, // Added discount field
    feedback: [
      {
        id: "fb3",
        name: "Michael Lee",

        createAt: "2025-01-03",
        message: "The leather feels premium and the fit is great!",
        image: [
          "https://bizweb.dktcdn.net/thumb/large/100/466/874/products/2-jpeg-1733209833850.jpg?v=1733243084457",
        ],
        rating: 4,
      },
    ],
  },
  {
    id: "3",
    name: "Running Shoes",
    typeOf: { id: "1", value: "SHOES" },
    desc: "Lightweight running shoes designed for comfort and speed.",
    material: "Mesh, Rubber",
    policy: "30-day return policy",
    care_instructrion: "Clean with a damp cloth, air dry.",
    colorList: [
      {
        id: "black",
        value: "#545457",
        sizeList: [
          { id: "6", value: "XL", inventory: 40 },
          { id: "7", value: "S", inventory: 50 },
          { id: "8", value: "M", inventory: 60 },
        ],
        img: [
          "https://bizweb.dktcdn.net/thumb/large/100/466/874/products/2-jpeg-1733209833850.jpg?v=1733243084457",
          "https://via.placeholder.com/400x400.png?text=Black+Shoes+2",
        ],
      },
      {
        id: "white",
        value: "#545457",
        sizeList: [
          { id: "6", value: "XL", inventory: 30 },
          { id: "7", value: "S", inventory: 40 },
          { id: "8", value: "M", inventory: 50 },
        ],
        img: [
          "https://bizweb.dktcdn.net/thumb/large/100/466/874/products/2-jpeg-1733209833850.jpg?v=1733243084457",
          "https://via.placeholder.com/400x400.png?text=White+Shoes+2",
        ],
      },
    ],
    totalSold: 250,
    unitPrice: 89.99,
    rating: 4.3,
    discount: 10, // Added discount field
    feedback: [
      {
        id: "fb4",
        name: "Emily Clark",

        createAt: "2025-01-04",
        message: "Super comfortable and great for running.",
        image: [
          "https://via.placeholder.com/100x100.png?text=Emily+Feedback+1",
        ],
        rating: 4.5,
      },
    ],
  },
  {
    id: "4",
    name: "Smartwatch",
    typeOf: { id: "1", value: "SHOES" },
    desc: "A feature-packed smartwatch with fitness tracking and notifications.",
    material: "Aluminum, Silicone",
    policy: "1-year warranty",
    care_instructrion: "Wipe with a soft cloth, avoid water exposure.",
    colorList: [
      {
        id: "black",
        value: "#545457",
        sizeList: [{ id: "one_size", value: "One Size", inventory: 100 }],
        img: [
          "https://bizweb.dktcdn.net/thumb/large/100/466/874/products/2-jpeg-1733209833850.jpg?v=1733243084457",
          "https://via.placeholder.com/400x400.png?text=Black+Smartwatch+2",
        ],
      },
      {
        id: "silver",
        value: "#545457",
        sizeList: [{ id: "one_size", value: "One Size", inventory: 120 }],
        img: [
          "https://via.placeholder.com/400x400.png?text=Silver+Smartwatch+1",
          "https://via.placeholder.com/400x400.png?text=Silver+Smartwatch+2",
        ],
      },
    ],
    totalSold: 350,
    unitPrice: 199.99,
    rating: 4.7,
    discount: 25, // Added discount field
    feedback: [
      {
        id: "fb5",
        name: "Sophia Green",

        createAt: "2025-01-05",
        message: "I love the fitness tracking features!",
        image: [
          "https://via.placeholder.com/100x100.png?text=Sophia+Feedback+1",
        ],
        rating: 4,
      },
      {
        id: "fb6",
        name: "Liam Brown",

        createAt: "2025-01-06",
        message: "Good performance, but a bit heavy for my wrist.",
        image: ["https://via.placeholder.com/100x100.png?text=Liam+Feedback+1"],
        rating: 5,
      },
    ],
  },
  {
    id: "5",
    name: "Wireless Earbuds",
    typeOf: { id: "2", value: "DEP" },
    desc: "Sweatproof wireless earbuds with noise-cancelling technology.",
    material: "Plastic, Silicone",
    policy: "30-day return policy",
    care_instructrion: "Clean with a damp cloth, avoid water exposure.",
    colorList: [
      {
        id: "black",
        value: "#545457",
        sizeList: [{ id: "one_size", value: "One Size", inventory: 100 }],
        img: [
          "https://bizweb.dktcdn.netthumb/large/100/466/874/products/2-jpeg-1733209833850.jpg?v=1733243084457",
          "https://via.placeholder.com/400x400.png?text=Black+Earbuds+2",
        ],
      },
      {
        id: "silver",
        value: "#545457",
        sizeList: [{ id: "one_size", value: "One Size", inventory: 120 }],
        img: [
          "https://via.placeholder.com/400x400.png?text=Silver+Smartwatch+1",
          "https://via.placeholder.com/400x400.png?text=Silver+Smartwatch+2",
        ],
      },
    ],
    totalSold: 350,
    unitPrice: 199.99,
    rating: 4.7,
    discount: 25, // Added discount field
    feedback: [
      {
        id: "fb5",
        name: "Sophia Green",

        createAt: "2025-01-05",
        message: "I love the fitness tracking features!",
        image: [
          "https://via.placeholder.com/100x100.png?text=Sophia+Feedback+1",
        ],
        rating: 4,
      },
    ],
  },
];

const ProductListByType: React.FC = () => {
  const location = useLocation();
  const [productList, setProductList] = React.useState<Product[]>([]);
  const [type, setType] = React.useState<string>("");
  useEffect(() => {
    const pathName = location.pathname;
    const type = pathName.split("/")[2].toUpperCase();
    setType(type);
  }, [location.pathname]);

  useEffect(() => {
    // Fetch products based on the type
    if (type) {
      const products = handleListProdByType(type);
      setProductList(products || []);
    }
  }, [type]);

  const handleListProdByType = (type: string) => {
    // call api with param type
    if (type === "ALL") {
      return mockData;
    }
    if (type === "GIAY") {
      return mockData;
    }
    if (type === "DEP") {
      return mockData;
    }
  };

  return (
    <div className="mt-6 py-[10px] px-[11%] border-b-[1px] border-[#e5e5e5] mb-6">
      <div className="flex justify-between items-end mb-10">
        <div className="text-[20px]  font-[600]">
          {type === "GIAY"
            ? "GIÀY"
            : type === "DEP"
            ? "DÉP"
            : type === "PHUKIEN"
            ? "PHỤ KIỆN"
            : "TẤT CẢ SẢN PHẨM"}
        </div>
        <div className="flex w-full max-w-sm items-center border border-gray-300 rounded-lg px-2.5 py-1.5">
          <SearchIcon className="h-4 w-4 mr-2.5" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-full border-0 focus:outline-none"
            //   onChange={handleSearchChange}
          />
        </div>
      </div>

      <div className="flex flex-col">
        <div className="productListSell-shoes">
          {productList.map((productList, index) => (
            <ProductItemSell key={index} product={productList} />
          ))}
        </div>
        <div className="mb-5">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default ProductListByType;
