import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DisclaimerPopup = ({ onAgree }) => {
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-4">
      <div className="bg-[#072e4d] text-white rounded-lg shadow-xl w-[90vw] h-[90vh] p-8 px-6 sm:px-10 flex flex-col justify-between">
        {/* Header */}
        <header>
          <h2 className="text-3xl font-bold mb-2 text-[#d7b774]">Disclaimer and Notices</h2>
          <p className="text-base text-gray-300">
            Please read and accept our disclaimer to continue using the site.
            <Link
              to="/privacy"
              className="underline text-blue-200 hover:text-blue-100 ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read our Privacy Policy
            </Link>
          </p>
        </header>

        {/* Scrollable Content */}
        <section className="overflow-y-auto mt-6 mb-8 pr-2 space-y-6 text-[15px] leading-relaxed flex-1">
          <ol className="list-decimal pl-4 space-y-4">
            <li>
              The information on our site is only directed at professional clients and eligible counterparties and the
              services or investments referred to on our site are only available to professional clients and eligible
              counterparties. Retail clients should not rely on the information herein. If you have any doubts about
              your status you must not access our site.
            </li>
            <li>
              This website is for information purposes only. Nothing herein shall be construed (i) as an official
              confirmation of any transaction and/or (ii) as investment advice or a recommendation. Any offer of
              securities may be made only by means of formal offering documents.
            </li>
            <li>
              Risks are inherent to investments and engaging in any investment activity may expose you to a significant
              risk of losing all of the assets invested.
            </li>
            <li>
              Please note that you are required to have read and accepted the terms of our{" "}
              <Link to="/privacy" className="underline text-blue-200" target="_blank">
                Privacy Policy
              </Link>{" "}
              &{" "}
              <Link to="/disclaimer" className="underline text-blue-200" target="_blank">
                Terms of Use
              </Link>{" "}
              before you are able to access our website.
            </li>
            <li>
              By clicking “ACCEPT” you have confirmed that you have read, understood and agreed to the legal terms and
              conditions of this website. You also:
              <br />
              (i) Agree that such information will apply to any subsequent access to this website by you, and that all
              such subsequent access will be subject to the disclaimers, risk warnings and other information set out
              herein; and <br />
              (ii) Warrant that no other person will access this website from the same computer and logon as you are
              currently using.
            </li>
          </ol>
        </section>

        {/* Footer */}
        <footer>
          {showError && (
            <p className="text-red-700 text-sm mb-2 text-left">
              Please accept disclaimer in order to view the website.
            </p>
          )}
          <div className="flex justify-between items-center">
            <button
              onClick={() => setShowError(true)}
              className="border border-white px-4 py-2 rounded hover:bg-white hover:text-[#072e4d] transition"
            >
              Do not accept
            </button>
            <button
              onClick={onAgree}
              className="bg-[#d7b774] text-[#072e4d] font-semibold px-4 py-2 rounded hover:bg-[#e5c88c] transition"
            >
              Accept
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default DisclaimerPopup;
