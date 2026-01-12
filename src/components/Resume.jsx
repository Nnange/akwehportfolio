import React, { Component } from "react";
import PropTypes from 'prop-types';


export default class Resume extends Component {
  static propTypes = {
    resumeData: PropTypes.shape({
    work: PropTypes.arrayOf(
      PropTypes.shape({
        CompanyName: PropTypes.string,
        specialization: PropTypes.string,
        MonthOfLeaving: PropTypes.string,
        YearOfLeaving: PropTypes.string,
        Tasks: PropTypes.arrayOf(PropTypes.string),
      })
    ),
    education: PropTypes.arrayOf(
      PropTypes.shape({
        UniversityName: PropTypes.string,
        specialization: PropTypes.string,
        MonthOfPassing: PropTypes.string,
        YearOfPassing: PropTypes.string,
        Achievements: PropTypes.string,
        duration: PropTypes.string,
      })
    ),
    }),
    };


  DisplayMonthYear(a) {
    if (a === "Present") return "Present";
    const date = new Date(a);
    const month = date.toLocaleString("default", { month: "short" });
    const year = date.getFullYear();
    return `${month} ${year} `;
  } 

  getDuration(startDate, endDate) {
    const start = new Date(startDate);
    let end;
    if (endDate === "Present") {
      end = new Date();
    } else {
      end = new Date(endDate);
    }
    const months =
      (end.getFullYear() - start.getFullYear()) * 12 +
      (end.getMonth() - start.getMonth()) + 1;
      if (months > 12) {
        const years = Math.floor(months / 12);
        const remMonths = months % 12;
        if (remMonths === 0) {
          return `${years} yr${years > 1 ? "s" : ""}`;
        }
        return `${years} yr${years > 1 ? "s" : ""} ${remMonths} mo${remMonths > 1 ? "s" : ""}`;
      }
    return `${months} mo${months > 1 ? "s" : ""}`;
  }
  render() {
    let resumeData = this.props.resumeData;

  
    return (
      <section id="resume" className="bg-white text-gray-800 py-20">
        
        <div className="md:grid md:grid-cols-12 gap-6 py-7 w-3/4 mx-auto">
          <div className="col-span-3 text-center pb-5">
            <span className="font-bold text-2xl border-b-4 border-cyan-700">Work</span>
          </div>

          <div className="col-span-9">
            { resumeData.work.map((item, i) => {
                return (
                  <div className="" key={i}>
                    <div className="">
                      <span className="font-bold text-3xl">{item.specialization}</span>
                      <p className="text-lg mb-2">
                        {item.CompanyName}
                        <span>&bull;</span>{" "}
                        <em className="date">
                          { this.DisplayMonthYear(item.MonthOfLeaving) }
                          – {this.DisplayMonthYear(item.YearOfLeaving)} • {this.getDuration(item.MonthOfLeaving, item.YearOfLeaving)}
                        </em>
                      </p>
                      <i className="">
                        { item.Tasks.map((i) => {
                            return <span key={i} className="leading-7"> {i} <br /> </span>
                          }) 
                        }
                      </i>
                    </div>
                    <hr className="my-6 border border-gray-400" />
                  </div>
                );
              })}
          </div>
        </div>

        <hr className="my-6 border border-gray-400" />

        <div className="md:grid md:grid-cols-12 gap-6 py-7 w-3/4 mx-auto">
          <div className="col-span-3 text-center pb-5">
            <span className="font-bold text-2xl border-b-4 border-cyan-700">Education</span> 
          </div>

          <div className="col-span-9">
            { resumeData.education.map((item, i) => {
                return (
                  <div className="row item" key={i}>
                    <div className="twelve columns">
                      <span className="font-bold text-3xl">{item.UniversityName}</span>
                      <p className="text-md mb-2">
                        {item.specialization}
                        <span>&bull;</span>{" "} 
                        <em className="date">
                          {item.MonthOfPassing} – {item.YearOfPassing} • {item.duration}
                        </em>
                      </p>
                      <span>{item.Achievements}</span> 
                    </div>
                    <hr className="my-6 border border-gray-400" />
                  </div>
                );
              })}
          </div>
        </div>

        <hr className="my-6 border border-gray-400" />

        <div className="md:grid md:grid-cols-12 gap-6 py-7 w-3/4 mx-auto">
          <div className="col-span-3 text-center pb-5">
            <span className="font-bold text-2xl border-b-4 border-cyan-700">Skills</span>
          </div>

          <div className="col-span-9">
            <div className="flex flex-col space-y-4">
              <ul className="">
                <strong>Languages:</strong> English (Native), German (B2), French (fluent)
              </ul>
              <ul className="">
                <strong>Programming Languages:</strong> Java, SpringBoot, SQL, JavaScript, Typescript, Svelte, React, Swift
              </ul>
              <ul className="">
                <strong>Hobbies/Interests:</strong> Football, Table tennis, Video Games, Driving, Astrology/Cosmology
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
