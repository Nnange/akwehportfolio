import React, { Component } from 'react';
import "../CSS/Portfolio.css";

export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <h2>Double tap image to see project description on mobile devices</h2>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item, i)=>{
              return(
                <div className="columns portfolio-item" key={i}>
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
                </div>
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