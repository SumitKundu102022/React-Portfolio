import { PROJECTS } from "../constants";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <img
                src={project.image}
                alt={project.title}
                width={300}
                height={300}
                className="mb-6 rounded cursor-pointer"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mb-0 px-2 py-1 bg-neutral-900 text-purple-700 rounded text-sm font-medium cursor-pointer"
                >
                  {tech}
                </span>
              ))}
              <div className="flex justify-between mt-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-4"
                >
                  <motion.button
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0px 0px 20px 5px rgba(156, 39, 176, 0.8)", // Purple glow
                      background: "linear-gradient(to right, #6b46c1, #b83280)",
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex items-center px-4 py-2 bg-transparent text-pink-100 rounded-lg text-sm font-medium border border-purple-500"
                  >
                    <FaGithub className="mr-2" />
                    View on GitHub →
                  </motion.button>
                </a>

                <a
                  href={project.deploymentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <motion.button
                    whileHover={{
                      scale: 1.1,
                      boxShadow: "0px 0px 20px 5px rgba(128, 90, 213, 0.8)", // Purple glow
                      background: "linear-gradient(to right, #6b46c1, #d53f8c)",
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="px-4 py-2 bg-transparent text-purple-100 rounded-lg text-sm font-medium border border-purple-500"
                  >
                    Visit Site →
                  </motion.button>
                </a>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
