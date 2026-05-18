import PropTypes from 'prop-types';

export default function Portfolio({ resumeData }) {
  return (
    <section id="portfolio" className="py-20 bg-[#ebeeee] text-gray-600">
      <div className="w-3/4 mx-auto">
        <h2 className="font-bold text-2xl text-center mb-10">Check Out Some of My Works.</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resumeData.portfolio.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              <img
                src={item.imgurl}
                alt={item.name}
                className="w-full h-52 object-cover"
              />

              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold text-gray-800 text-lg mb-2">{item.name}</h3>
                <p className="text-sm text-gray-500 leading-6 line-clamp-4 flex-1">
                  {item.description}
                </p>

                <div className="mt-5 flex gap-3">
                  {item.githubUrl && (
                    <a
                      href={item.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 text-center py-2 rounded-lg bg-gray-800 text-white text-sm font-medium hover:bg-gray-900 transition-colors"
                    >
                      GitHub
                    </a>
                  )}
                  <a
                    href={item.projectImg}
                    target="_blank"
                    rel="noreferrer"
                    className={`text-center py-2 rounded-lg bg-cyan-600 text-white text-sm font-medium hover:bg-cyan-800 transition-colors ${item.githubUrl ? "flex-1" : "w-full"}`}
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Portfolio.propTypes = {
  resumeData: PropTypes.shape({
    portfolio: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      description: PropTypes.string,
      imgurl: PropTypes.string,
      projectImg: PropTypes.string,
      githubUrl: PropTypes.string,
    })),
  }),
};
