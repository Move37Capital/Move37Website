import React, { useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home";

import ContactPage from "./pages/ContactPage";
import DisclaimerPopup from "./components/DisclaimerPopup";
import ScrollToTop from "./components/ScrollToTop";
import PrivacyPage from "./pages/PrivacyPage";
import DisclaimerPage from "./pages/DisclaimerPage";
import CookiesPage from "./pages/CookiesPage";

function App() {
  const location = useLocation();
  const isUnrestrictedPath =
    location.pathname === "/privacy" || location.pathname === "/disclaimer" || location.pathname==="/cookies";

  const [showDisclaimer, setShowDisclaimer] = useState(() => {
    const agreed = localStorage.getItem("userAgreed");
    return agreed !== "true";
  });

  const handleDisagree = () => {
    // Optional: You can redirect them or just leave the site
    alert("You must accept the disclaimer to proceed.");
    // For example, redirect to /disclaimer or close the tab
    window.location.href = "/disclaimer"; // or you can use navigate("/disclaimer")
  };

  const handleAgree = () => {
    localStorage.setItem("userAgreed", "true");
    setShowDisclaimer(false);
  };

  return (
    <div className={showDisclaimer && !isUnrestrictedPath ? "overflow-hidden h-screen" : ""}>
      {/* Always render routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<AboutPage />} /> */}
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/disclaimer" element={<DisclaimerPage />} />
        <Route path="/cookies" element={<CookiesPage />} />
      </Routes>

     

    {showDisclaimer && !isUnrestrictedPath && (
      <DisclaimerPopup onAgree={handleAgree} onDisagree={handleDisagree} />
    )}
    </div>
  );
}

export default function WrappedApp() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <App />
    </BrowserRouter>
  );
}
