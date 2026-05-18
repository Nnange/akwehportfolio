import PropTypes from 'prop-types';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';

const iconMap = {
  LinkedInIcon: (url) => <a href={url} target="_blank" rel="noreferrer"><LinkedInIcon className='hover:text-cyan-500' /></a>,
  GitHubIcon:   (url) => <a href={url} target="_blank" rel="noreferrer"><GitHubIcon   className='hover:text-cyan-500' /></a>,
  FacebookIcon: (url) => <a href={url} target="_blank" rel="noreferrer"><FacebookIcon  className='hover:text-cyan-500' /></a>,
};

export default function Header({ resumeData }) {
  return (
    <>
      <nav className='bg-cyan-700 text-white py-4 border-b sticky top-0 z-50 shadow-md'>
        <ul className="flex justify-center space-x-10">
          <li><a className="border-b p-2 rounded headerItems" href="#home">Home</a></li>
          <li><a className="border-b p-2 rounded headerItems" href="#about">About</a></li>
          <li><a className="border-b p-2 rounded headerItems" href="#resume">Resume</a></li>
          <li><a className="border-b p-2 rounded headerItems" href="#portfolio">Works</a></li>
        </ul>
      </nav>

      <header id="home" className='w-full relative'>
        <div className="mt-[8%]">
          <div className="banner-text">
            <p className="responsive-headline font-bold text-[3rem] sm:text-[5.7rem]">I am {resumeData.name}</p>
            <p className="text-white font-sans w-1/2 mx-auto leading-9">
              I am a {resumeData.role}.{resumeData.roleDescription}
            </p>
            <ul className="flex justify-center space-x-6 mt-6">
              {resumeData.socialLinks.map((item) => (
                <li key={item.name}>
                  {iconMap[item.className]?.(item.url)}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="scrolldown absolute bottom-5 left-1/2 transform -translate-x-1/2">
          <a href="#about"><ExpandCircleDownIcon fontSize='large' className='animate-bounce' /></a>
        </p>
      </header>
    </>
  );
}

Header.propTypes = {
  resumeData: PropTypes.shape({
    name: PropTypes.string,
    role: PropTypes.string,
    roleDescription: PropTypes.string,
    socialLinks: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      className: PropTypes.string,
      url: PropTypes.string,
    })),
  }),
};
