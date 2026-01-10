import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import "../CSS/About.css"
import profilepic from "../assets/profilepic.jpg";


export default class About extends Component {
   static propTypes = {
      resumeData: PropTypes.shape({
      name: PropTypes.string,
      role: PropTypes.string,
      roleDescription: PropTypes.string,
      aboutme: PropTypes.string,
      address: PropTypes.string,
      website: PropTypes.string,
      }),
   };
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about" className=''>
         <div className="grid grid-cols-12 gap-6 py-7 w-3/4 mx-auto">
            <div className="col-span-4 bg-cover">
               <img className="h-[25rem] w-full object-cover"  src={profilepic} alt="profilepic" />
            </div>

            <div className="col-span-8 p-4">
               <h2 className='text-xl font-bold'>About Me</h2>
               <p className='mt-4 leading-9 text-sm text-gray-400'>
               {
                 resumeData.aboutme
               }
               </p>

               <div className="mt-3 flex flex-col space-y-3">
                  <h2 className='text-xl font-bold'>Contact Details</h2>
                  <p className="space-y-2">
                     <span className="location">
                        <LocationOnOutlinedIcon />{resumeData.address}
                     </span>
                     <span>{resumeData.website}</span>
                  </p>
               </div>
            </div>
         </div>
      </section>
    );
  }
}