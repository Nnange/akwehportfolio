import PropTypes from 'prop-types';
import { displayMonthYear, getDuration } from '../utils/resumeUtils';

export default function Resume({ resumeData }) {
  return (
    <section id="resume" className="bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-20">

      <div className="w-3/4 mx-auto flex justify-end pb-4">
        <a
          href="/assets/Nnange_Awong_CV.pdf"
          download
          className="px-5 py-2 bg-cyan-700 text-white rounded hover:bg-cyan-800 active:bg-cyan-900 text-sm font-medium transition-colors"
        >
          Download CV
        </a>
      </div>

      <div className="md:grid md:grid-cols-12 gap-6 py-7 w-3/4 mx-auto">
        <div className="col-span-3 text-center pb-5">
          <span className="font-bold text-2xl border-b-4 border-cyan-700">Work</span>
        </div>
        <div className="col-span-9">
          {resumeData.work.map((item) => (
            <div key={`${item.CompanyName}-${item.MonthOfLeaving}`}>
              <span className="font-bold text-3xl">{item.specialization}</span>
              <p className="text-lg mb-2 dark:text-gray-300">
                {item.CompanyName} <span>&bull;</span>{" "}
                <em className="date">
                  {displayMonthYear(item.MonthOfLeaving)} – {displayMonthYear(item.YearOfLeaving)} &bull; {getDuration(item.MonthOfLeaving, item.YearOfLeaving)}
                </em>
              </p>
              <div className="text-justify">
                <i className="dark:text-gray-400">
                  {item.Tasks.map((t) => (
                    <span key={t} className="leading-7">{t}<br /></span>
                  ))}
                </i>
              </div>
              <hr className="my-6 border border-gray-200 dark:border-gray-700" />
            </div>
          ))}
        </div>
      </div>

      <hr className="my-6 border border-gray-200 dark:border-gray-700" />

      <div className="md:grid md:grid-cols-12 gap-6 py-7 w-3/4 mx-auto">
        <div className="col-span-3 text-center pb-5">
          <span className="font-bold text-2xl border-b-4 border-cyan-700">Education</span>
        </div>
        <div className="col-span-9">
          {resumeData.education.map((item) => (
            <div key={`${item.UniversityName}-${item.YearOfPassing}`}>
              <span className="font-bold text-3xl">{item.UniversityName}</span>
              <p className="text-md mb-2 dark:text-gray-300">
                {item.specialization} <span>&bull;</span>{" "}
                <em className="date">
                  {item.MonthOfPassing} – {item.YearOfPassing} &bull; {item.duration}
                </em>
              </p>
              <span className="dark:text-gray-400">{item.Achievements}</span>
              <hr className="my-6 border border-gray-200 dark:border-gray-700" />
            </div>
          ))}
        </div>
      </div>

      <hr className="my-6 border border-gray-200 dark:border-gray-700" />

      <div className="md:grid md:grid-cols-12 gap-6 py-7 w-3/4 mx-auto">
        <div className="col-span-3 text-center pb-5">
          <span className="font-bold text-2xl border-b-4 border-cyan-700">Skills</span>
        </div>
        <div className="col-span-9">
          <div className="flex flex-col space-y-6">
            {resumeData.skills.map((group) => (
              <div key={group.category}>
                <p className="font-semibold mb-2 dark:text-gray-200">{group.category}</p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="px-3 py-1 bg-cyan-50 dark:bg-cyan-900/30 border border-cyan-200 dark:border-cyan-700 text-cyan-800 dark:text-cyan-300 rounded-full text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

Resume.propTypes = {
  resumeData: PropTypes.shape({
    work: PropTypes.arrayOf(PropTypes.shape({
      CompanyName: PropTypes.string,
      specialization: PropTypes.string,
      MonthOfLeaving: PropTypes.string,
      YearOfLeaving: PropTypes.string,
      Tasks: PropTypes.arrayOf(PropTypes.string),
    })),
    education: PropTypes.arrayOf(PropTypes.shape({
      UniversityName: PropTypes.string,
      specialization: PropTypes.string,
      MonthOfPassing: PropTypes.string,
      YearOfPassing: PropTypes.string,
      Achievements: PropTypes.string,
      duration: PropTypes.string,
    })),
    skills: PropTypes.arrayOf(PropTypes.shape({
      category: PropTypes.string,
      items: PropTypes.arrayOf(PropTypes.string),
    })),
  }),
};
