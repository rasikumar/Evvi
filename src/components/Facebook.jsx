// FacebookPixel.js
import { useEffect } from "react";
import ReactPixel from "react-facebook-pixel";

const FacebookPixel = () => {
  useEffect(() => {
    // Initialize Facebook Pixel
    const options = {
      autoConfig: true, // Set to true to automatically configure settings
      debug: false, // Set to true for debugging
    };
    ReactPixel.init("1038217278045716", null, options); // Replace with your Pixel ID
    ReactPixel.pageView(); // Log the initial page view

    // If you want to track more events, you can do it here
  }, []);

  return null; // No UI component to render
};

export default FacebookPixel;
