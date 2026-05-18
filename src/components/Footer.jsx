import { useState } from 'react';
import PropTypes from 'prop-types';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';
import PrivacyPolicyModal from './PrivacyPolicyModal';
import TermsOfUseModal from './TermsOfUseModal';

const iconMap = {
  LinkedInIcon: (url) => <a href={url} target="_blank" rel="noreferrer"><LinkedInIcon className="hover:text-cyan-400 transition-colors" /></a>,
  GitHubIcon:   (url) => <a href={url} target="_blank" rel="noreferrer"><GitHubIcon   className="hover:text-cyan-400 transition-colors" /></a>,
  FacebookIcon: (url) => <a href={url} target="_blank" rel="noreferrer"><FacebookIcon  className="hover:text-cyan-400 transition-colors" /></a>,
};

export default function Footer({ resumeData }) {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  return (
    <>
      {showPrivacy && <PrivacyPolicyModal onClose={() => setShowPrivacy(false)} />}
      {showTerms && <TermsOfUseModal onClose={() => setShowTerms(false)} />}

      <footer className="bg-gray-800 dark:bg-gray-950 text-gray-300">
        <div className="grid grid-rows-1 relative">
          <div className="mt-4">
            <ul className="flex justify-center space-x-8 py-4">
              {resumeData.socialLinks.map((item) => (
                <li key={item.name}>
                  {iconMap[item.className]?.(item.url)}
                </li>
              ))}
            </ul>
          </div>
          <div id="go-top" className="absolute -top-4 right-[10%] rotate-180">
            <a href="#home"><ExpandCircleDownIcon fontSize='large' className='animate-bounce text-cyan-400' /></a>
          </div>
        </div>
        <p className="text-center text-xs text-gray-500 dark:text-gray-600 pb-2">
          Self-hosted on my home server &mdash; deployed via Jenkins CI/CD, containerised with Docker, and served through Nginx.
        </p>
        <div className="flex justify-center gap-4 pb-4 text-xs text-gray-600 dark:text-gray-700">
          <button onClick={() => setShowPrivacy(true)} className="hover:text-gray-400 transition-colors cursor-pointer">Privacy Policy</button>
          <span aria-hidden="true">&middot;</span>
          <button onClick={() => setShowTerms(true)} className="hover:text-gray-400 transition-colors cursor-pointer">Terms of Use</button>
        </div>
      </footer>
    </>
  );
}

Footer.propTypes = {
  resumeData: PropTypes.shape({
    socialLinks: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      url: PropTypes.string,
      className: PropTypes.string,
    })),
  }),
};
