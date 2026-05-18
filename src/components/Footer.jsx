import PropTypes from 'prop-types';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';

const iconMap = {
  LinkedInIcon: (url) => <a href={url} target="_blank" rel="noreferrer"><LinkedInIcon /></a>,
  GitHubIcon:   (url) => <a href={url} target="_blank" rel="noreferrer"><GitHubIcon /></a>,
  FacebookIcon: (url) => <a href={url} target="_blank" rel="noreferrer"><FacebookIcon /></a>,
};

export default function Footer({ resumeData }) {
  return (
    <footer>
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
          <a href="#home"><ExpandCircleDownIcon fontSize='large' className='animate-bounce text-cyan-50' /></a>
        </div>
      </div>
      <p className="text-center text-xs text-gray-400 pb-4">
        Self-hosted on my home server &mdash; deployed via Jenkins CI/CD, containerised with Docker, and served through Nginx.
      </p>
    </footer>
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
