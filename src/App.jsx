import Heart from "./components/Heart";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/footer/Footer";

// Pages
// Service pages
import HR_Service from "./components/services/hr_service/HR_Service";
import IT_Development from "./components/services/it_development/IT_Development";
import Digital_Marketing from "./components/services/digital_marketing/Digital_Marketing";

// About Page
import About_Full from "./components/about/About_Full";

import { createTheme, ThemeProvider } from "@mui/material";

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
        <Header />

        <Routes location={location}>
          <Route index path="/" element={<Heart />} />

          {/* AboutFullpage */}
          <Route path="/About" element={<About_Full />} />

          {/* Service Pages */}
          <Route path="/HR_Service" element={<HR_Service />} />
          <Route path="/Digital_Marketing" element={<Digital_Marketing />} />
          <Route path="/IT_Development" element={<IT_Development />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default App;
