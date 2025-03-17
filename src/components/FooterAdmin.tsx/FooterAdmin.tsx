import { Box, Link, Typography } from "@mui/material";
const FooterAdmin = () => {
  return (
    <Box sx={{ p: 3, textAlign: "center" }}>
      <Typography>
        © 2023 All rights reserved by{" "}
        <Link href="https://www.wrappixel.com">Wrappixel.com</Link>{" "}
      </Typography>
    </Box>
  );
};

export default FooterAdmin;
