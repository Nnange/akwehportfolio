import { useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";

export default function PrivacyPolicyModal({ onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
      onClick={onClose}
    >
      <div
        className="relative bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 rounded-xl shadow-2xl w-full max-w-2xl max-h-[80vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 flex items-center justify-between bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-6 py-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Privacy Policy</h2>
          <button onClick={onClose} aria-label="Close" className="text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors">
            <CloseIcon />
          </button>
        </div>

        <div className="px-6 py-5 flex flex-col gap-5 text-sm leading-7">
          <p className="text-gray-500 dark:text-gray-400">Last updated: May 2026</p>

          <section>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">1. Who We Are</h3>
            <p>This is the personal portfolio website of Nnange Awong, a software developer based in Duisburg, Germany. This site exists to showcase projects, experience, and skills.</p>
          </section>

          <section>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">2. Data We Collect</h3>
            <p>This site does <strong>not</strong> collect, store, or process any personal data on a server. There are no analytics trackers, no sign-up forms, and no databases storing visitor information.</p>
          </section>

          <section>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">3. Local Storage</h3>
            <p>We store two small values in your browser's <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">localStorage</code> to improve your experience:</p>
            <ul className="list-disc list-inside mt-1 space-y-1 text-gray-600 dark:text-gray-400">
              <li><strong>theme</strong> — remembers your light/dark mode preference.</li>
              <li><strong>cookieConsent</strong> — remembers that you have seen this notice.</li>
            </ul>
            <p className="mt-1">These values never leave your device and can be cleared at any time through your browser settings.</p>
          </section>

          <section>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">4. Contact Form</h3>
            <p>The contact form opens your local email client via a <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">mailto:</code> link. No data is submitted to this website — your message is sent directly from your own email account.</p>
          </section>

          <section>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">5. Third-Party Links</h3>
            <p>This site links to external platforms including GitHub, LinkedIn, and Facebook. Once you leave this site, their own privacy policies apply.</p>
          </section>

          <section>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">6. Contact</h3>
            <p>For any privacy-related questions, reach out at <a href="mailto:awong.nnange@yahoo.com" className="text-cyan-600 dark:text-cyan-400 hover:underline">awong.nnange@yahoo.com</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
