import { useState } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(() => !localStorage.getItem("cookieConsent"));

  if (!visible) return null;

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setVisible(false);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 dark:bg-gray-950 text-gray-200 shadow-lg border-t border-gray-700">
      <div className="w-3/4 mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 py-4">
        <p className="text-sm text-center sm:text-left">
          {"This site uses local storage to remember your theme and consent preferences."}
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={handleDecline}
            className="px-5 py-2 text-sm rounded-lg border border-gray-500 text-gray-300 hover:bg-gray-700 transition-colors"
          >
            Decline
          </button>
          <button
            onClick={handleAccept}
            className="px-5 py-2 text-sm rounded-lg bg-cyan-600 text-white font-medium hover:bg-cyan-800 transition-colors"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
