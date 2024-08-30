import Heart from "./components/Heart";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/footer/Footer";
import SideIcons from "./components/SideIcons"
import FloatingIcon from "./components/FloatingIcon"
import FloatingIcon2 from "./components/FloatingIcon2";


// Pages
// Service pages
import ServiceList from "./components/services/ServiceList"
import HR_Service from "./components/services/hr_service/HR_Service";
import IT_Development from "./components/services/it_development/IT_Development";
import Digital_Marketing from "./components/services/digital_marketing/Digital_Marketing";
import Business_Consulting from "./components/services/bussiness_consulting/Business_Consulting"

// About Page
import About_Full from "./components/about/About_Full";

// ContactFullPage
import ContactFull from "./components/contact & faq/ContactFull";

// productPage
import Allproduct from "./components/features/products/Allprod";

import { createTheme, ThemeProvider } from "@mui/material";
import ScrollToTop from "./components/ScrollToTop";
import { AnimatePresence } from "framer-motion";
const theme = createTheme({
  palette: {
    primary: {
      main: "#0b1a5f",
    },
    secondary: {
      main: "#F67629",
    },
  },
  typography: {
    fontWeight: 600,
  },
});

const App = () => {
  const location = useLocation();

  return (
    <>
      <ThemeProvider theme={theme}>
      <SideIcons/>
      <FloatingIcon/>
      <FloatingIcon2/>
        <Header />
        <ScrollToTop/>
        <AnimatePresence mode="wait">
        
        <Routes location={location} key={location.key}>
          <Route index path="/" element={<Heart />} />

          {/* AboutFullpage */}
          <Route path="/About" element={<About_Full />} />

          {/* Service Pages */}
          <Route path="/Service" element={<ServiceList/>} />
          <Route path="/HR_Service" element={<HR_Service />} />
          <Route path="/Digital_Marketing" element={<Digital_Marketing />} />
          <Route path="/IT_Development" element={<IT_Development />} />
          <Route path="/Business_Consulting" element={<Business_Consulting />} />

          {/* BlogPages */}

          {/* ContactFullPage */}
          <Route path="/Contact_Us" element={<ContactFull/>}/>

          {/* Products page */}
          <Route path="/Products" element={<Allproduct/>}/>

        </Routes>
        </AnimatePresence>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
