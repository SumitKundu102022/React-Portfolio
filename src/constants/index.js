import project1 from "../assets/projects/project-0.png";
import project2 from "../assets/projects/project-0-1.png";
import project3 from "../assets/projects/project-0-2.png";
import project4 from "../assets/projects/project-0-3.png";
import project5 from "../assets/projects/project-0-4.png";
import project6 from "../assets/projects/project-0-5.png";
import project7 from "../assets/projects/project-0-6.png";
import project8 from "../assets/projects/project-0-7.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 1-2 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 1-2 years of professional experience, I have worked with a variety of technologies, including React, Node.js, MySQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
 {
    year: "Aug 2024 - Oct 2024",
    role: "Summer Training Programme 2024",
    company: "Ardent Computech Pvt. Ltd.",
    description: `Gained hands-on experience in developing supervised and unsupervised machine learning models using techniques like Linear Regression, Decision Trees, and K-Means. Explored cloud infrastructure by working with AWS services such as EC2, S3, RDS, Lambda, and IAM, culminating in the successful completion of a cloud-based project.`,
    technologies: ["Python", "Machine Learning", "AWS"],
}
,
  {
    year: "Jan 2024 - Feb 2024",
    role: "Full Stack Developer Intern",
    company: "Bharat Intern",
    description: `Developed a blog website enabling users to read and write posts, leveraging Node.js and MongoDB for backend and data storage. Designed a registration form to allow users to sign up and securely store their information in the database. Utilized React for dynamic front-end functionality and Tailwind CSS for responsive styling.`,
    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "JWT",
      "MongoDB",
    ],
  },
  // {
  //   year: "2021 - 2022",
  //   role: "Full Stack Developer",
  //   company: "Facebook",
  //   description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
  //   technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  // },
  {
    year: "Feb 2024 - Mar 2024",
    role: "Web Development and Designing Intern",
    company: "Oasis Infobyte",
    description: `Designed and developed responsive web interfaces using HTML, CSS, and JavaScript. Contributed to front-end development and ensured cross-browser compatibility. Collaborated with team members to improve user experience and optimize website performance.`,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
];

export const PROJECTS = [
  {
    title: "Job Description Analyzer",
    image: project7, // Replace with actual image reference
    description:
      "Job Description Analyzer is a full-stack application that compares job descriptions against candidate resumes or CVs, highlights matched and missing skills, and calculates a skill match percentage. It supports skill categorization, feedback for accuracy improvement, and provides a clean user interface built with React and Tailwind CSS.",
    technologies: [
      "Python",
      "Flask",
      "NLTK",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "Render",
      "Vercel"
    ],
    githubLink: "https://github.com/SumitKundu102022/job-description-analyzer",
    deploymentLink: "https://job-description-analyzer.vercel.app",
  },

  {
    title: "Air Quality Report – Power BI Dashboard",
    image: project8, // Replace with actual image reference like an import: import project8 from '../assets/project8.png'
    description:
      "This Power BI Dashboard presents an analytical report on air quality data across Indian cities. It includes visual insights such as top polluted cities, AQI trends (2015–2020), pollutant breakdowns, and geographical mapping using Bing Maps. Ideal for environmental analysis, policy-making, and awareness campaigns.",
    technologies: [
      "Power BI Desktop",
      "Power Query",
      "DAX",
      "Bing Maps"
    ],
    githubLink: "https://github.com/SumitKundu102022/Air-Quality-Report.git",
    // deploymentLink: "https://sumit-kundu.vercel.app", // If hosted separately, replace with specific deployment URL
  },
  
  
  {
    title: "EcoBuddy: Personalized Carbon Footprint Tracker",
    image: project6,
    description:
      "EcoBuddy is a personalized carbon footprint tracker that helps users calculate their carbon footprint, track their progress, and receive actionable tips to reduce their environmental impact. The application is built using Streamlit, Pandas, and Plotly for data visualization.",
    technologies: [
      "Python",
      "Streamlit",
      "Pandas",
      "Plotly",
      "numpy",
      "MongoDB",
    ],
    githubLink: "https://github.com/SumitKundu102022/EcoBuddy",
    deploymentLink:
      "https://ecobuddy-personalized-carbon-footprint-tracker.streamlit.app",
  },
  {
    title: "College Management System",
    image: project5,
    description:
      "A console-based College Management System for managing student data and administrative operations. Features include inserting, updating, searching, and deleting student records, as well as handling backlogs and placements. A simple and efficient solution for educational data management.",
    technologies: ["C++", "Data Structures", "MySQL", "Dev C++"],
    githubLink: "https://github.com/SumitKundu102022/College_Management_System",
    // deploymentLink:
    //   "https://ecommerce-website-1-z9u4.onrender.com/shopping/home",
  },
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication and an integrated PayPal payment system for smooth and secure transactions.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Express",
      "JWT",
      "Node.js",
      "MongoDB",
      "PayPal API",
    ],
    githubLink: "https://github.com/SumitKundu102022/Ecommerce_website.git",
    deploymentLink:
      "https://ecommerce-website-1-z9u4.onrender.com/shopping/home",
  },
  // {
  //   title: "Task Management App",
  //   image: project2,
  //   description:
  //     "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
  //   technologies: ["HTML", "CSS", "Angular", "Firebase"],
  //   githubLink: "https://github.com/SumitKundu102022/Bharat_Intern_Res_Form",
  //   deploymentLink: "https://forecast-flex.vercel.app/",
  // },
  {
    title: "Crop Recommendation System",
    image: project2,
    description:
      "A machine learning-based application that provides crop recommendations based on various input parameters like soil composition, weather conditions, and more. Built with Flask for the backend and Bootstrap for responsive design.",
    technologies: ["Flask", "Bootstrap", "Machine Learning", "Python"],
    githubLink:
      "https://github.com/SumitKundu102022/ML-Crop-Recommendation-System.git",
    deploymentLink:
      "https://ml-crop-recommendation-system.onrender.com/predict",
  },
  // {
  //   title: "Portfolio Website",
  //   image: project3,
  //   description:
  //     "A personal portfolio website showcasing projects, skills, and contact information.",
  //   technologies: ["HTML", "CSS", "React", "Bootstrap"],
  //   githubLink: "https://github.com/SumitKundu102022/Bharat_Intern_Res_Form",
  //   deploymentLink: "https://my-portfolio-sumit-kundu.netlify.app/",
  // },
  {
    title: "ForecastFlex: Weather App",
    image: project3,
    description:
      "ForecastFlex is a sleek and user-friendly weather application designed to provide real-time weather updates for any location. Built with React and styled using Tailwind CSS, the app leverages the OpenWeatherMap API to deliver accurate weather data. With intuitive navigation powered by React hooks, users can effortlessly explore current conditions, forecasts, and more.",
    technologies: [
      "React",
      "Tailwind CSS",
      "OpenWeatherMap API",
      "React-hooks",
    ],
    githubLink: "https://github.com/SumitKundu102022/ForecastFlex.git",
    deploymentLink: "https://forecast-flex.vercel.app/",
  },
  // {
  //   title: "Blogging Platform",
  //   image: project4,
  //   description:
  //     "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
  //   technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  //   githubLink: "https://github.com/SumitKundu102022/Bharat_Intern_Res_Form",
  //   deploymentLink: "https://forecast-flex.vercel.app/",
  // },
  {
    title: "To-Do List App",
    image: project4,
    description:
      "A simple and interactive To-Do List application that allows users to add, move up/down , and delete tasks. Built with React and styled using CSS for a responsive and intuitive UI.",
    technologies: ["React", "CSS", "React-hooks"],
    githubLink: "https://github.com/SumitKundu102022/To-Do-List-React-App.git",
    deploymentLink: "https://whimsical-list.surge.sh/",
  },
];

export const CONTACT = {
  address: "Sunrise Tower, Flat G D, Nawadhi, Dhanbad,Jharkhand IN 828130 ",
  phoneNo: "+91 6299871682",
  email: "sumitkundu10012001@gmail.com",
};
