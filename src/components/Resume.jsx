import React, { Component } from "react";
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;

    function DisplayMonthYear(a) {
      if (a === "Present") return "Present";
      const date = new Date(a);
      const month = date.toLocaleString("default", { month: "short" });
      const year = date.getFullYear();
      return `${month} ${year} `;
    } 

    function getDuration(startDate, endDate) {
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
      
  
    return (
      <section id="resume">
        
        <div className="row work">
          <div className="three columns header-col">
            <h1>
              <span>Work</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.work &&
              resumeData.work.map((item, i) => {
                return (
                  <div className="row item" key={i}>
                    <div className="twelve columns">
                      <h3>{item.specialization}</h3>
                      <p className="info">
                        {item.CompanyName}
                        <span>&bull;</span>{" "}
                        <em className="date">
                          { DisplayMonthYear(item.MonthOfLeaving) }
                          – {DisplayMonthYear(item.YearOfLeaving)} • {getDuration(item.MonthOfLeaving, item.YearOfLeaving)}
                        </em>
                      </p>
                      <i>
                        { item.Tasks.map((i) => {
                            return <span key={i}> {i} <br /> </span>
                          }) 
                        }
                        <hr />
                      </i>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.education &&
              resumeData.education.map((item, i) => {
                return (
                  <div className="row item" key={i}>
                    <div className="twelve columns">
                      <h3>{item.UniversityName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span>{" "} 
                        <em className="date">
                          {item.MonthOfPassing} – {item.YearOfPassing} • {item.duration}
                        </em>
                      </p>
                      <span>{item.Achievements}</span> 
                    </div>
                    <hr />
                  </div>
                );
              })}
          </div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Skills</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            <div className="">
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
