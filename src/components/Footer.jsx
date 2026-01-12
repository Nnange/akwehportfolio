import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';

export default class Footer extends Component {
  static propTypes = {
    resumeData: PropTypes.shape({
      socialLinks: PropTypes.arrayOf(
        PropTypes.shape({
          url: PropTypes.string,
          className: PropTypes.string,
        })
      ),
    }),
  };
  render() {
    let resumeData = this.props.resumeData;
    return (
      <footer>
        <div className="grid grid-rows-1 relative">
          <div className="mt-4">
            <ul className="flex justify-center space-x-8 py-4">
              {
                resumeData.socialLinks.map(item => {
                  return (
                    <li className='' key={item.name}>
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
          <div id="go-top" className="absolute -top-4 right-[10%] rotate-180">
            {/* <a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a> */}
            <a className="" href="#home"><ExpandCircleDownIcon fontSize='large' className='animate-bounce text-cyan-50'/></a>
          </div>
        </div>
      </footer>
    );
  }
}