import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';

export default class Header extends Component {
  static propTypes = {
    resumeData: PropTypes.shape({
      name: PropTypes.string,
      role: PropTypes.string,
      roleDescription: PropTypes.string,
      socialLinks: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          className: PropTypes.string,
          url: PropTypes.string,
        })
      ),
    }),
  };
  render() {
    let resumeData = this.props.resumeData;
    return (
      <header id="home" className='w-full relative'>
         <nav id="nav-wrap" className='bg-gray-900/90 py-4'>
            {/* <a className="" href="#nav-wrap" title="Show navigation">Show navigation</a> */}
            {/* <a className="" href="#" title="Hide navigation">Hide navigation</a> */}
            <ul id="nav" className="flex justify-center space-x-10">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#about">About</a></li>
               <li><a className="smoothscroll" href="#resume">Resume</a></li>
               <li><a className="smoothscroll" href="#portfolio">Works</a></li>
               {/* <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li> */}
               {/* <li><a className="smoothscroll" href="#contact">Contact</a></li> */}
            </ul>
         </nav>

         <div className="mt-[8%]">
            <div className="banner-text">
               <p className="responsive-headline font-bold text-[5.7rem]">I am {resumeData.name}</p>
               <p className="text-white font-sans w-1/2 mx-auto leading-9 ">
                I am a {resumeData.role}.{resumeData.roleDescription}
               </p>

               <ul className="flex justify-center space-x-6 mt-6">
                  {
                    resumeData.socialLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                {item.className === "LinkedInIcon" ? (
                                  <a href={item.url} target="_blank" rel="noreferrer"><LinkedInIcon /></a>
                                ) : null}
                                {item.className === "GitHubIcon" ? (
                                  <a href={item.url} target="_blank" rel="noreferrer"><GitHubIcon /></a>
                                ) : null}
                                {item.className === "FacebookIcon" ? (
                                  <a href={item.url} target="_blank" rel="noreferrer"><FacebookIcon /></a>
                                ) : null}
                              </li>
                            )
                          }
                    )
                  }
               </ul>
            </div>
         </div>

         <p className="scrolldown absolute bottom-5 left-1/2 transform -translate-x-1/2">
            <a className="scroll-smooth" href="#about"><ExpandCircleDownIcon fontSize='large' className='animate-bounce' /></a>
         </p>

      </header>
    );
  }
}