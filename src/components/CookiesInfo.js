import React from 'react';

const CookiesInfo = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Cookies Policy</h1>
      <p className="text-sm mb-10 text-gray-600 italic">
        This page outlines the types of cookies we use on our website and how they function.
      </p>

      <div className="space-y-6 text-lg leading-relaxed">
        <div>
          <h2 className="text-xl font-semibold text-blue-800">1. What Are Cookies?</h2>
          <p>
            Cookies are small text files placed on your device by websites you visit. They are widely used to make websites work more efficiently, as well as to provide information to the site owners.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-blue-800">2. Types of Cookies We Use</h2>
          <p>We use two types of cookies on our website:</p>
          <ul className="list-disc pl-6 space-y-4 mt-4">
            <li>
              <strong>Session cookies</strong> – These are temporary cookies that remain in the cookie file of your browser until you close the browser. This is to ensure connections to our servers are distributed evenly to provide optimal performance.
            </li>
            <li>
              <strong>Analytical cookies</strong> – Our website uses Google Analytics cookies (third-party cookies) in order to:
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Record the time of your first visit to the website</li>
                <li>Record the time of your most recent visit to the website</li>
                <li>Record the duration of your visit</li>
                <li>Record how you located our website (e.g. Google search, referral links)</li>
              </ul>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-blue-800">3. Data Sharing & Privacy</h2>
          <p>
            We only share the information obtained through the use of Google Analytics with Google. The cookies we use for these purposes do not track your Internet usage after leaving our website and do not store your personal information. They will not be used in connection with any other information to identify you in any way.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-blue-800">4. Technical Information</h2>
          <p>
            We may collect information about your computer, including where available your IP address, operating system, and browser type, for system administration. This is statistical data about our users’ browsing actions and patterns, and does not identify any individual.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-blue-800">5. Managing Cookies</h2>
          <p>
            You may refuse to accept cookies by activating the setting on your browser which allows you to refuse the setting of cookies. However, if you select this setting you may be unable to access certain parts of our site. Unless you have adjusted your browser setting so that it will refuse cookies, our system will issue the cookies described above when you log on to our site.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-blue-800">6. Contact</h2>
          <p>
            If you have any questions or doubts about our cookie policy, feel free to reach out:
          </p>
          <p className="mt-2">
            <strong>Move37 Capital</strong><br />
            Spaces, The Charter Building,<br />
            Uxbridge UB8 1JG, United Kingdom<br />
            Email: <a href="mailto:contact-us@move37capital.com" className="text-blue-600 underline">contact-us@move37capital.com</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CookiesInfo;
