import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import "../CSS/About.css"
import profilepic from "../assets/profilepic1.jpg";


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
      <section id="about" className='py-20'>
         <div className="md:grid md:grid-cols-12 gap-6 py-7 w-3/4 mx-auto">
            <div className="col-span-4">
               <img className="h-[20rem] w-[20rem] md:hidden rounded-3xl object-contain mx-auto"  src={profilepic} alt="profilepic" />
               <img className="h-[25rem] hidden md:block rounded-3xl w-full object-contain"  src={profilepic} alt="profilepic" />
            </div>

            <div className="col-span-8 p-4">
               <h2 className='text-xl font-bold'>About Me</h2>
               <p className='mt-4 leading-9 text-sm text-gray-400 text-justify'>
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
                     {/* <span>{resumeData.website}</span> */}
                  </p>
               </div>
            </div>
         </div>
      </section>
    );
  }
}