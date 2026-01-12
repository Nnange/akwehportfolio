import React, { Component } from 'react';
import "../CSS/Portfolio.css";
import PropTypes from 'prop-types';

export default class Portfolio extends Component {
  static propTypes = {
    resumeData: PropTypes.shape({
      portfolio: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string,
          description: PropTypes.string,
          imgurl: PropTypes.string,
          projectImg: PropTypes.string,
        })
      ),
    }),
  };

  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio" className='py-20 bg-[#ebeeee] text-gray-600'>
        <div className="grid grid-rows-1 w-3/4 mx-auto justify-items-center">
            <span className='font-bold text-center text-2xl w-full'>Check Out Some of My Works.</span>
          <div className="twelve columns collapsed">
            <div id="" className="grid grid-rows-1 gap-4">
            {
              resumeData.portfolio.map((item, i)=>{
                return(
                  <>
                    <div className='' key={i}>
                      <span>{item.name}</span>
                      <div className='border rounded-sm grid grid-cols-12 mt-2 bg-white hover:shadow-lg hover:scale-105 ease-in-out duration-300'>
                        <img src={`${item.imgurl}`} alt={item.name} className="col-span-12 mx-auto md:col-span-4 item-img w-full md:w-[300px] h-[150px] object-auto"/>
                        <p className='text-sm text-justify p-2 col-span-12 md:col-span-8'>{item.description}</p>
                        <a className="text-center p-4 bg-blue-500 text-white hover:bg-blue-600 hover:text-black col-span-12" target="_blank" href={`${item.projectImg}`}>View Project</a>
                      </div>
                    </div>

                    {/* <div className="columns portfolio-item" key={i}>
                      <h1 className="projectName">{item.name}</h1>
                      <div className="item-wrap">
                        <a href="#modal-01">
                          <img src={`${item.imgurl}`} className="item-img"/>
                          <div className="overlay">
                            <div className="portfolio-item-meta" >
                              <h5>{item.name}</h5>
                              <p className="description">{item.description}</p>
                            </div>
                          </div>
                        </a>
                      </div>
                      <a className="button" target="_blank" href={`${item.projectImg}`}>View Project</a>
                    </div> */}
                  
                  </>
                )
              })
            }
            </div>
          </div>
        </div>
      </section>
    );
  }
}