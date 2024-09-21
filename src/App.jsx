/* eslint-disable react/prop-types */
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

// Components (your imports)
import Heart from "./components/Heart";
import Header from "./components/Header";
import Footer from "./components/footer/Footer";
import SideIcons from "./components/SideIcons";
import FloatingIcon from "./components/FloatingIcon";
import ScrollToTop from "./components/ScrollToTop";

// Service Pages (your imports)
import ServiceList from "./components/services/ServiceList";
import HR_Service from "./components/services/hr_service/HR_Service";
import IT_Development from "./components/services/it_development/IT_Development";
import Digital_Marketing from "./components/services/digital_marketing/Digital_Marketing";
import Business_Consulting from "./components/services/bussiness_consulting/Business_Consulting";

// About Page (your imports)
import About_Full from "./components/about/About_Full";

// Contact Page (your imports)
import ContactFull from "./components/contact & faq/ContactFull";

// Product Page (your imports)
import Allproduct from "./components/features/products/Allprod";

// Blog Pages (your imports)
import BlogPage from "./components/features/blog/BlogPage";
import BlogDetail from "./components/features/blog/BlogDetails";
// import Blog_1 from "./components/features/blog/blogs/Blog_1";
// import Blog_2 from "./components/features/blog/blogs/Blog_2";
// import Blog_3 from "./components/features/blog/blogs/Blog_3";
// import Blog_4 from "./components/features/blog/blogs/Blog_4";

// Admin Pages
import Admindashboard from "./components/Admin/Admindashboard";
import Login from "./components/Admin/Login";

// 404Error (your imports)
import NotFound from "./components/NotFound";

// Theme
const theme = createTheme({
  palette: {
    primary: { main: "#0b1a5f" },
    secondary: { main: "#F67629" },
  },
  typography: { fontWeight: 600 },
});

// Protected Route Component
const ProtectedRoute = ({ isAuthenticated, children }) => {
  return isAuthenticated ? children : <Navigate to="/admin" />;
};

const App = () => {
  const location = useLocation();
  const hideHeaderAndFooter = location.pathname.startsWith("/admin");

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("jwtToken") ? true : false;
  });

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem("jwtToken");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("jwtToken");
    window.location.reload();
  };

  return (
    <ThemeProvider theme={theme}>
      {!hideHeaderAndFooter && <SideIcons />}
      {!hideHeaderAndFooter && <FloatingIcon />}
      {!hideHeaderAndFooter && <Header />}
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index path="/" element={<Heart />} />

          {/* About Page */}
          <Route path="/About" element={<About_Full />} />

          {/* Service Pages */}
          <Route path="/Service" element={<ServiceList />} />
          <Route path="/HRService" element={<HR_Service />} />
          <Route path="/DigitalMarketing" element={<Digital_Marketing />} />
          <Route path="/ITDevelopment" element={<IT_Development />} />
          <Route path="/BusinessConsulting" element={<Business_Consulting />} />

          {/* Blog Pages */}
          <Route path="/Blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogDetail />}/>
          {/* <Route path="/Blog1" element={<Blog_1 />} />
          <Route path="/Blog2" element={<Blog_2 />} />
          <Route path="/Blog3" element={<Blog_3 />} />
          <Route path="/Blog4" element={<Blog_4 />} /> */}

          {/* Contact Page */}
          <Route path="/ContactUs" element={<ContactFull />} />

          {/* Products Page */}
          <Route path="/Products" element={<Allproduct />} />

          {/* Admin Routes */}
          <Route
            path="/admin"
            element={
              isAuthenticated ? <Navigate to="/admindashboard" /> : <Login onLogin={handleLogin} />
            }
          />
          <Route
            path="/admindashboard"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Admindashboard onLogout={handleLogout} />
              </ProtectedRoute>
            }
          />

          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
      {!hideHeaderAndFooter && <Footer />}
    </ThemeProvider>
  );
};

export default App;
