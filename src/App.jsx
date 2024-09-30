/* eslint-disable react/prop-types */
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import { lazy, useState, Suspense } from "react";
// import { Helmet } from "react-helmet-async";
import Loaders from "./components/Loader";
// import FacebookPixel from "./components/Facebook";

// Fallback component for lazy loading
const Loader = () => (
  <div>
    <Loaders />
  </div>
);

// Components (lazy-loaded imports)
const Heart = lazy(() => import("./components/Heart"));
const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/footer/Footer"));
const SideIcons = lazy(() => import("./components/SideIcons"));
const FloatingIcon = lazy(() => import("./components/FloatingIcon"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop"));
const CookieBanner = lazy(() => import("./components/CookieBanner"));

// Service Pages (lazy-loaded imports)
const ServiceList = lazy(() => import("./components/services/ServiceList"));
const HR_Service = lazy(() =>
  import("./components/services/hr_service/HR_Service")
);
const IT_Development = lazy(() =>
  import("./components/services/it_development/IT_Development")
);
const Digital_Marketing = lazy(() =>
  import("./components/services/digital_marketing/Digital_Marketing")
);
const Business_Consulting = lazy(() =>
  import("./components/services/bussiness_consulting/Business_Consulting")
);

// About Page (lazy-loaded imports)
const About_Full = lazy(() => import("./components/about/About_Full"));

// Contact Page (lazy-loaded imports)
const ContactFull = lazy(() =>
  import("./components/contact & faq/ContactFull")
);

// Product Page (lazy-loaded imports)
const Allproduct = lazy(() => import("./components/features/products/Allprod"));

// Blog Pages (lazy-loaded imports)
const BlogPage = lazy(() => import("./components/features/blog/BlogPage"));
const BlogDetail = lazy(() => import("./components/features/blog/BlogDetails"));

// Admin Pages (lazy-loaded imports)
const Admindashboard = lazy(() => import("./components/Admin/Admindashboard"));
const Login = lazy(() => import("./components/Admin/Login"));
const ForgotPassword = lazy(() => import("./components/Admin/ForgotPassword"));
const ResetPassword = lazy(() => import("./components/Admin/resetPassword"));

// 404Error (lazy-loaded imports)
const NotFound = lazy(() => import("./components/NotFound"));
const CookiePolicy = lazy(() => import("./components/Cookie-policy"));

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
    <>
      {/* <Helmet>
        <meta
          name="description"
          content="Discover innovative solutions with us."
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="https://twitter.com/evvisolutions" />
        <meta name="twitter:title" content="Evvi Solutions" />
        <FacebookPixel />
      </Helmet> */}
      <ThemeProvider theme={theme}>
        {!hideHeaderAndFooter && (
          <Suspense fallback={<Loader />}>
            <SideIcons />
            <FloatingIcon />
            <Header onOpenPolicy={handleOpenPolicy} />
          </Suspense>
        )}
        {!hideHeaderAndFooter && (
          <Suspense fallback={<Loader />}>
            <CookieBanner />
          </Suspense>
        )}
        <ScrollToTop />

        {/* Modal for Cookie Policy */}
        {showCookiePolicy && (
          <div className="modal fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Suspense fallback={<Loader />}>
                <CookiePolicy />
              </Suspense>
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
          <Suspense fallback={<Loader />}>
            <Routes location={location} key={location.pathname}>
              <Route index path="/" element={<Heart />} />

              {/* About Page */}
              <Route path="/About" element={<About_Full />} />

              {/* Service Pages */}
              <Route path="/Service" element={<ServiceList />} />
              <Route path="/HRService" element={<HR_Service />} />
              <Route path="/DigitalMarketing" element={<Digital_Marketing />} />
              <Route path="/ITDevelopment" element={<IT_Development />} />
              <Route
                path="/BusinessConsulting"
                element={<Business_Consulting />}
              />
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
          </Suspense>
        </AnimatePresence>

        {!hideHeaderAndFooter && (
          <Suspense fallback={<Loader />}>
            <Footer />
          </Suspense>
        )}
      </ThemeProvider>
    </>
  );
};

export default App;
