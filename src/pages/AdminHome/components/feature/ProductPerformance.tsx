import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  FormControl,
  MenuItem,
  Select,
} from "@mui/material";

import ExTable from "../ExTable";

const ProductPerformance = () => {
  const [age, setAge] = React.useState("10");

  const handleChange = (event: any) => {
    setAge(event.target.value);
  };
  return (
    <Card variant="outlined">
      <CardContent>
        <Box
          sx={{
            display: {
              sm: "flex",
              xs: "block",
            },
            alignItems: "flex-start",
          }}
        >
          <Box>
            <Typography
              variant="h3"
              sx={{
                paddingLeft: "18px",
                paddingTop: "10px",
                fontWeight: "600",
                color: "text.primary",
                fontSize: "18px",
              }}
              gutterBottom
            >
              SẢN PHẨM BÁN CHẠY NHẤT
            </Typography>
          </Box>

          <Box
            sx={{
              marginLeft: "auto",
              mt: {
                lg: 0,
                xs: 2,
              },
            }}
          >
            <FormControl variant="standard" sx={{ minWidth: 120 }}>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={age}
                onChange={handleChange}
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>March 2021</MenuItem>
                <MenuItem value={20}>April 2021</MenuItem>
                <MenuItem value={30}>Jun 2021</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>

        <Box
          sx={{
            overflow: "auto",
            mt: 3,
          }}
        >
          <ExTable />
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductPerformance;
