import { useState } from "react";
import {
  Outlet,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { TopbarHeight } from "../src/assets/global/Theme-variable";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Home from "./pages/Home";
import Policy from "./pages/Policy";
import Size from "./pages/Size";
import Store from "./pages/Store";
import "./Reponsive.css";

// import { Box, Container, ThemeProvider, useMediaQuery } from "@mui/material";

import {
  Box,
  Container,
  experimentalStyled,
  useMediaQuery,
} from "@mui/material";
import FooterAdmin from "./components/FooterAdmin.tsx/FooterAdmin";
import HeaderAdmin from "./components/HeaderAdmin/HeaderAdmin";
import Sidebar from "./components/Sidebar/Sidebar";
import { Toaster } from "./components/ui/toaster";
import AdminHome from "./pages/AdminHome/AdminHome";
import Analyze from "./pages/Analyze/Analyze";
import Checkout from "./pages/Checkout/Checkout";
import ManageAccount from "./pages/ManageAccount/ManageAccount";
import ManageOrder from "./pages/ManageOrder/ManageOrder";
import ManageVoucher from "./pages/ManageVoucher/ManageVoucher";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import ProductListByType from "./pages/ProductListByType/ProductListByType";
import SignInAdmin from "./pages/SignInAdmin/SignInAdmin";

function App() {
  // const [count, setCount] = useState(0);
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const lgUp = useMediaQuery("(min-width: 1200px)");

  const MainWrapper = experimentalStyled("div")(({}) => ({
    display: "flex",
    minHeight: "100vh",
    overflow: "hidden",
    width: "100%",
  }));
  const PageWrapper = experimentalStyled("div")(({ theme }) => ({
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",

    backgroundColor: theme.palette.background.default,
    [theme.breakpoints.up("lg")]: {
      paddingTop: TopbarHeight,
    },
    [theme.breakpoints.down("lg")]: {
      paddingTop: "64px",
    },
  }));
  return (
    <Router>
      <ScrollToTop>
        <Routes>
          <Route
            path="/*"
            element={
              <Routes>
                <Route
                  element={
                    <div className="flex flex-col min-h-screen">
                      <Header />
                      <Outlet />
                      <Footer />
                    </div>
                  }
                >
                  <Route path="/" element={<Home />} />
                  <Route path="/policy" element={<Policy />} />
                  <Route path="/size" element={<Size />} />
                  <Route path="/store" element={<Store />} />
                  <Route path="/product-detail" element={<ProductDetail />} />
                  <Route path="/checkout" element={<Checkout />} />
                  <Route
                    path="/product-byType/:type"
                    element={<ProductListByType />}
                  />
                </Route>

                <Route
                  element={
                    <div>
                      <MainWrapper>
                        <HeaderAdmin
                          sx={{
                            paddingLeft: isSidebarOpen && lgUp ? "265px" : "",
                            backgroundColor: "#ffffff",
                          }}
                          toggleSidebar={() => setSidebarOpen(!isSidebarOpen)}
                          toggleMobileSidebar={() => setMobileSidebarOpen(true)}
                        ></HeaderAdmin>

                        <Sidebar
                          isSidebarOpen={isSidebarOpen}
                          isMobileSidebarOpen={isMobileSidebarOpen}
                          onSidebarClose={() => setMobileSidebarOpen(false)}
                        />

                        <PageWrapper>
                          <Container
                            maxWidth={false}
                            sx={{
                              paddingTop: "20px",
                              paddingLeft:
                                isSidebarOpen && lgUp ? "280px!important" : "",
                            }}
                          >
                            <Box sx={{ minHeight: "calc(100vh - 170px)" }}>
                              <Outlet />
                            </Box>
                            <FooterAdmin></FooterAdmin>
                          </Container>
                        </PageWrapper>
                      </MainWrapper>
                    </div>
                  }
                >
                  <Route path="/admin" element={<AdminHome />} />
                  <Route path="/admin/manage-order" element={<ManageOrder />} />
                  <Route
                    path="/admin/manage-voucher"
                    element={<ManageVoucher />}
                  />
                  <Route path="/admin/analyze-revenue" element={<Analyze />} />
                  <Route
                    path="/admin/manage-account"
                    element={<ManageAccount />}
                  />
                </Route>
              </Routes>
            }
          />
          <Route path="/admin/sign-in" element={<SignInAdmin />} />
        </Routes>
        <Toaster />
      </ScrollToTop>
    </Router>
  );
}

export default App;
