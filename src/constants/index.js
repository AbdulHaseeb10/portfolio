import {
    web,
    javascript,
    codebot,
    aicanvas,
    fakenews,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    carrent,
    stakesmen,
    salesforce,
    creator,
    jobit,
    tripguide,
    threejs,
    java,
    python,
    backend,
    cpp
} from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "ReactNative Developer",
      icon: backend,
    },
    {
      title: "Salesforce Developer",
      icon: creator,
    }
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name:"Java",
      icon:java,
    },
    {
      name:"C++",
      icon: cpp,
    },
    {
      name:"Python",
      icon: python,
    },
    {
      name: "git",
      icon: git,
    },

    
  ];
  
  const experiences = [
    {
      title: "Technical Engineer",
      company_name: "Salesforce",
      icon: salesforce,
      iconBg: "#fff",
      date: "October 2023 - Present",
      points: [
        "Led technical support during Spring’24 and Summer’24 releases, ensuring seamless transitions and minimal customer disruptions.",
        "Collaborated with Software Engineering and CIC Teams to troubleshoot and resolve issues using Apex and AppExchange, enhancing customer satisfaction.",
        "Supported the migration of Tableau and MuleSoft into the Salesforce Help Portal, improving platform integration and user experience",  
      ],
    },
    {
      title: "Web Developer",
      company_name: "stakesmen.com",
      icon: stakesmen,
      iconBg: "#fff",
      date: "September 2022 - February 2023",
      points: [
        "Creating responsive frontend components using react.",
        "Configuring the state of the application using redux-toolkit.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Writing unit test-cases using react testing library.",
      ],
    }
  ];
  
  
  const projects = [
    {
      name: "Fake News Detection",
      description:
        "Fake news detection system that examines whether a given news article is real or fake. Preprocessed and cleaned the dataset using Natural language processing methods. Trained the dataset using LSTM deep learning model with 97% accuracy",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "tensorflow",
          color: "green-text-gradient",
        },
        {
          name: "deep learning",
          color: "pink-text-gradient",
        },
      ],
      image: fakenews,
      source_code_link: "https://github.com/AbdulHaseeb10/Fake-News-Detection",
    },
    {
      name: "CodeBot",
      description:
        "A chatgpt like application that understands natural language and responds with intelligent answers. Used the openai gpt-3’s text-davinci-003 model. Integrated the application with nodejs backend and html,css and javscript frontend.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "gpt-3",
          color: "green-text-gradient",
        },
        {
          name: "openai",
          color: "pink-text-gradient",
        },
      ],
      image: codebot,
      source_code_link: "https://github.com/AbdulHaseeb10/CodeBot",
    },
    {
      name: "AI-Canvas",
      description:"A MERN AI application that generates images to your queries and let you showcase the images to community. Used Reactjs for frontend and Nodejs for backend, MongoDB as a database and cloudinary for storage.",
        tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "dalle",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
      ],
      image: aicanvas,
      source_code_link: "https://github.com/AbdulHaseeb10/AI-Canvas",
    },
  ];
  
  export { services, technologies, experiences, projects };
  