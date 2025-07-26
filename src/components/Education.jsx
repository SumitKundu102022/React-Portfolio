import { EDUCATIONS } from "../constants";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Education
      </motion.h2>
      <div>
        {EDUCATIONS.map((edu, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-neutral-400">{edu.year}</p>
            </motion.div>

            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold flex items-center gap-2">
                <img
                  src={edu.logo}
                  alt={edu.institution}
                  className="w-12 h-12 rounded-full object-cover"
                />
                {edu.degree} -{" "}
                <span className="text-sm text-purple-100 cursor-pointer">
                  <a
                href={edu.organizationLink}
                target="_blank"
                rel="noopener noreferrer"
              > {edu.institution} </a>          
                  
                </span>
              </h6>

              {edu.score && (
                <p className="text-sm text-neutral-400 mb-1">
                  {edu.score.type}:{" "}
                  <span className="text-white">{edu.score.value}</span>
                </p>
              )}

              <p className="mb-4 text-neutral-400">{edu.description}</p>
              {edu.subjects.map((subject, index) => (
                <span
                  key={index}
                  className="inline-block bg-neutral-900 text-purple-500 rounded px-2 py-1 text-sm font-medium mr-2 mb-0 mt-4 cursor-pointer"
                >
                  {subject}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
