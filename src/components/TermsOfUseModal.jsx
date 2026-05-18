import { useEffect } from "react";
import CloseIcon from "@mui/icons-material/Close";

export default function TermsOfUseModal({ onClose }) {
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
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">Terms of Use</h2>
          <button onClick={onClose} aria-label="Close" className="text-gray-400 hover:text-gray-700 dark:hover:text-white transition-colors">
            <CloseIcon />
          </button>
        </div>

        <div className="px-6 py-5 flex flex-col gap-5 text-sm leading-7">
          <p className="text-gray-500 dark:text-gray-400">Last updated: May 2026</p>

          <section>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">1. Acceptance of Terms</h3>
            <p>By accessing this website, you agree to be bound by these Terms of Use. If you do not agree, please do not use this site. These terms apply to all visitors of the portfolio of Nnange Awong.</p>
          </section>

          <section>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">2. Purpose of This Site</h3>
            <p>This is a personal portfolio website intended to showcase the professional work, projects, and skills of Nnange Awong. It is not a commercial service, and no goods or services are sold through it.</p>
          </section>

          <section>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">3. Intellectual Property</h3>
            <p>All content on this site — including text, project descriptions, design, and code — is the property of Nnange Awong unless otherwise stated. You may not reproduce, distribute, or use any content without prior written permission.</p>
          </section>

          <section>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">4. No Warranties</h3>
            <p>This site is provided on an &ldquo;as is&rdquo; basis without warranties of any kind. While every effort is made to keep information accurate and up to date, no guarantees are made regarding the completeness or accuracy of any content.</p>
          </section>

          <section>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">5. External Links</h3>
            <p>This site contains links to external platforms such as GitHub and LinkedIn. These links are provided for convenience only. I am not responsible for the content or privacy practices of any external sites.</p>
          </section>

          <section>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">6. Limitation of Liability</h3>
            <p>To the fullest extent permitted by law, Nnange Awong shall not be liable for any direct, indirect, or incidental damages arising from your use of this website or its content.</p>
          </section>

          <section>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">7. Changes to These Terms</h3>
            <p>These terms may be updated at any time without prior notice. Continued use of the site after any changes constitutes your acceptance of the revised terms.</p>
          </section>

          <section>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">8. Contact</h3>
            <p>For any questions about these terms, reach out at <a href="mailto:awong.nnange@yahoo.com" className="text-cyan-600 dark:text-cyan-400 hover:underline">awong.nnange@yahoo.com</a>.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
