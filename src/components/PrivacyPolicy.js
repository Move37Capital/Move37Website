import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 text-gray-800">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Privacy Notice</h1>
      <p className="text-sm mb-8 text-gray-600 italic">Effective Date: 6th May 2025</p>

      <div className="space-y-6 text-lg leading-relaxed">
        <p>
          At <strong>Move37 Capital</strong>, we are committed to protecting your personal data and respecting your privacy in accordance with the UK General Data Protection Regulation (UK GDPR), the Data Protection Act 2018, and the expectations set by the Financial Conduct Authority (FCA).
        </p>
        <p>
          This Privacy Notice explains how we collect, use, store, and protect your personal information when you visit our website or engage with us.
        </p>

        <h2 className="text-xl font-semibold text-blue-800 mt-10">1. Who We Are</h2>
        <p>
          Move37 Capital Limited is a limited company registered in England and Wales with registered number 14593595 with registered office at Spaces - The Charter Building, Charter Place, Uxbridge, England, UB8 1JG. For the purposes of data protection law, we are the data controller of your personal information.
        </p>

        <h2 className="text-xl font-semibold text-blue-800 mt-10">2. What Information We Collect</h2>
        <p>We may collect and process the following personal data:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Contact Information:</strong> Name, email address, and other information you provide when you contact us.</li>
          <li><strong>Technical Data:</strong> IP address, browser type, operating system, pages visited, and usage behavior — collected via cookies and similar technologies.</li>
          <li><strong>Business Information:</strong> If you are a client or potential client, we may also collect company name and role/title.</li>
        </ul>

        <h2 className="text-xl font-semibold text-blue-800 mt-10">3. How We Use Your Information</h2>
        <p>We process your personal data to:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Respond to your enquiries and requests.</li>
          <li>Provide you with information about our services.</li>
          <li>Improve our website and services.</li>
          <li>Ensure compliance with legal and regulatory obligations, including FCA requirements.</li>
        </ul>
        <p className="mt-4">We rely on the following legal bases:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Consent:</strong> where you have actively provided your information.</li>
          <li><strong>Legitimate interests:</strong> to run and improve our business, unless your rights override those interests.</li>
          <li><strong>Legal obligations:</strong> to comply with regulations or authorities.</li>
        </ul>

        <h2 className="text-xl font-semibold text-blue-800 mt-10">4. Data Sharing and Transfers</h2>
        <p>We do not sell your personal data. We may share it with:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Service providers (e.g. IT or analytics services) under appropriate contractual safeguards.</li>
          <li>Regulators such as the FCA, where legally required.</li>
          <li>Other third parties if required by law or legal proceedings.</li>
        </ul>
        <p>We do not transfer your data outside the UK unless adequate safeguards are in place.</p>

        <h2 className="text-xl font-semibold text-blue-800 mt-10">5. Data Security and Retention</h2>
        <p>
          We implement robust technical and organizational measures to protect your data. We retain personal data only as long as necessary to fulfill the purposes described or to comply with legal obligations.
        </p>

        <h2 className="text-xl font-semibold text-blue-800 mt-10">6. Your Rights</h2>
        <p>You have the right to:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Access the personal data we hold about you.</li>
          <li>Request correction or deletion of your data.</li>
          <li>Object to or restrict processing in certain circumstances.</li>
          <li>Withdraw consent at any time, where applicable.</li>
          <li>Lodge a complaint with the Information Commissioner’s Office (ICO): <a href="https://www.ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">www.ico.org.uk</a></li>
        </ul>
        <p>To exercise your rights, contact us at <a href="mailto:contact-us@move37capital.com" className="text-blue-600 underline">contact-us@move37capital.com</a>.</p>

        <h2 className="text-xl font-semibold text-blue-800 mt-10">7. Cookies</h2>
        <p>
          Our website uses cookies to collect technical data and enhance functionality. You can adjust your browser settings to refuse or manage cookies.
        </p>
        <p>For more details, see our<Link
          to="/cookies"
          className="underline text-blue-500 hover:text-blue-900 ml-1"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cookie Policy
        </Link>.</p>

        <h2 className="text-xl font-semibold text-blue-800 mt-10">8. Changes to This Notice</h2>
        <p>
          We may update this Privacy Notice from time to time. Changes will be posted on this page with a revised effective date.
        </p>

        <h2 className="text-xl font-semibold text-blue-800 mt-10">Contact Us</h2>
        <p>If you have any questions about this Privacy Notice or your data, please contact:</p>
        <p className="mt-2">
          <strong>Move37 Capital</strong><br />
          Email: <a href="mailto:contact-us@move37capital.com" className="text-blue-600 underline">contact-us@move37capital.com</a><br />
          Address:<br />
          Move37 Capital,<br />
          Spaces, The Charter Building,<br />
          Uxbridge UB8 1JG
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
