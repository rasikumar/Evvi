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

// Admin Pages
import Admindashboard from "./components/Admin/Admindashboard";
import Login from "./components/Admin/Login";

// 404Error (your imports)
import NotFound from "./components/NotFound";
import ForgotPassword from "./components/Admin/ForgotPassword";
import ResetPassword from "./components/Admin/resetPassword";
import CookieBanner from "./components/CookieBanner";
import CookiePolicy from "./components/Cookie-policy"; // Import your Cookie Policy component

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
  const hideHeaderAndFooter =
    location.pathname.startsWith("/admin") ||
    location.pathname.startsWith("/forgotpassword") ||
    location.pathname.startsWith("/resetPassword");

  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem("jwtToken") ? true : false;
  });

  const handleLogin = () => setIsAuthenticated(true);

  // Cookie Policy state
  const [showCookiePolicy, setShowCookiePolicy] = useState(false);

  const handleOpenPolicy = () => setShowCookiePolicy(true);
  const handleClosePolicy = () => setShowCookiePolicy(false);

  return (
    <ThemeProvider theme={theme}>
      {!hideHeaderAndFooter && <SideIcons />}
      {!hideHeaderAndFooter && <FloatingIcon />}
      {!hideHeaderAndFooter && <Header onOpenPolicy={handleOpenPolicy} />}{" "}
      {/* Pass function to open the policy */}
      {!hideHeaderAndFooter && <CookieBanner />}
      <ScrollToTop />
      {/* Modal for Cookie Policy */}
      {showCookiePolicy && (
        <div className="modal fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <CookiePolicy />
            <button
              className="mt-4 p-2 bg-primary text-white rounded"
              onClick={handleClosePolicy}
            >
              Close
            </button>
          </div>
        </div>
      )}
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
          <Route path="/cookie-policy" element={<CookiePolicy />} />

          {/* Blog Pages */}
          <Route path="/Blog" element={<BlogPage />} />
          <Route path="/blog/:id" element={<BlogDetail />} />

          {/* Contact Page */}
          <Route path="/ContactUs" element={<ContactFull />} />

          {/* Products Page */}
          <Route path="/Products" element={<Allproduct />} />

          {/* Admin Routes */}
          <Route
            path="/admin"
            element={
              isAuthenticated ? (
                <Navigate to="/admindashboard" />
              ) : (
                <Login onLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/admindashboard"
            element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Admindashboard />
              </ProtectedRoute>
            }
          />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/resetPassword" element={<ResetPassword />} />

          {/* Catch-all route for 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
      {!hideHeaderAndFooter && <Footer />}
    </ThemeProvider>
  );
};

export default App;
