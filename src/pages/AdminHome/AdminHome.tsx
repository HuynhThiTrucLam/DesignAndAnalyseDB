import React, { useEffect } from "react";
import { Grid, Box, Card, Typography } from "@mui/material";
import "./AdminHome.scss";
import ProductPerformance from "./components/feature/ProductPerformance";
import { Input } from "@/components/ui/input";
import { DatabaseBackup, SearchIcon } from "lucide-react";
import ProductList from "./components/ProductList";
import { Product, Type } from "@/types/Product";
import ModelAdd from "./components/feature/ModelAdd";

export const mockTypes: Type[] = [
  { id: "1", value: "T-Shirt" },
  { id: "2", value: "Dép" },
  { id: "3", value: "Phụ kiện" },
  { id: "4", value: "Jacket" },
  { id: "5", value: "Shoes" },
];
export const mockSizes: string[] = ["S", "M", "L", "XL", "XXL"];

const mockProducts: Product[] = [
  {
    id: "1",
    name: "Classic T-Shirt",
    typeOf: { id: "1", value: "T-Shirt" },
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
    typeOf: { id: "1", value: "Jacket" },
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
    typeOf: { id: "1", value: "Shoes" },
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
    typeOf: { id: "1", value: "Smartwatch" },
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
];

const AdminHome = () => {
  const [productList, setProducts] = React.useState<Product[]>([]);

  const handleSearchChange = (event: any) => {
    const searchQuery = event.target.value;

    //Nen thay bang goi api
    const filteredProductList = mockProducts.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setProducts(filteredProductList);
    console.log(searchQuery);
    console.log(filteredProductList);
  };

  // Handle list products here
  // const getListProducts = async () => {
  //   const API_URL = "localhost:3000/products";
  //   const response = await axios.get(API_URL);
  //   setProducts(response.data);
  // };

  useEffect(() => {
    setProducts(mockProducts);
  }, []);

  return (
    <Box>
      <Grid container spacing={0}>
        {/* ------------------------- row 1 ------------------------- */}
        <Grid item xs={12} lg={12}>
          <ProductPerformance />
        </Grid>
        <Grid item xs={12} lg={12}>
          <Card variant="outlined">
            <div className="">
              <Box>
                <div className="flex items-center justify-between">
                  <Typography
                    variant="h3"
                    sx={{
                      paddingLeft: "18px",
                      paddingTop: "20px",
                      paddingBottom: "10px",
                      fontWeight: "600",
                      color: "text.primary",
                      fontSize: "18px",
                    }}
                    gutterBottom
                  >
                    <ModelAdd></ModelAdd>
                    DANH SÁCH SẢN PHẨM
                  </Typography>
                  <div className="flex w-full max-w-sm items-center border border-gray-300 rounded-lg px-2.5 py-1.5">
                    <SearchIcon className="h-4 w-4 mr-2.5" />

                    <Input
                      type="search"
                      placeholder="Search..."
                      className="w-full border-0 focus:outline-none"
                      onChange={handleSearchChange}
                    />
                  </div>
                </div>
              </Box>
            </div>
            {productList.length != 0 ? (
              <ProductList data={productList}></ProductList>
            ) : (
              <div className="flex flex-col gap-[10px] items-center justify-center h-[200px]">
                <DatabaseBackup></DatabaseBackup>
                <p>Không tìm thấy dữ liệu</p>
              </div>
            )}
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdminHome;
