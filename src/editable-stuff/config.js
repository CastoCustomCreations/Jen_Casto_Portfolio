// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  imageLink: require("../editable-stuff/JenCasto.png"),
  firstName: "Jen",
  middleName: "",
  lastName: "Casto",
  message: " Passionate about changing the world with technology. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/CastoCustomCreations",
    },
    
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/jencasto/",
    },
    {
      image: "fa-upwork",
      url: "https://www.upwork.com/freelancers/~0150f7dacff6dedd80?viewMode=1",
    },
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/hashirshoaeb.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/JenCasto.png"),
  imageSize: 375,
  message:"Recent Kent State University graduate with two degrees in Information Technology and experience as a Full Stack Developer and Multimedia Editor. Strongly skilled in programming languages such as Java, Javascript, and C#. Deep understanding of data structures, algorithms, and software design principles. Proficient in Agile methodologies and version control systems. Strong problem-solving skills and ability to work well in a team environment. Looking to leverage my skills and knowledge to contribute to a dynamic software development team.",
  resume: "https://drive.google.com/file/d/1r5WYPtQEA7Y-rsE_2boqycLVykvE0RJ3/view?usp=sharing",
};
//      My name is Jen Casto. I graduated Kent State University with two Bachelors of Science in Information Technology with honors in Dec 2022. I'm most passionate about automobiles and robots, and my goal is to pursue this passion within the field of software engineering. In my free time I like working on open source projects."

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "CastoCustomCreations", //i.e."johnDoe12Gh"
  reposLength: 0,
  specificRepos: ["storetemplate_frontend","storetemplate_backend","store1","blackjack-react-app","Minesweeper-Game-in-React","react-tetris"],
};
// Live Pages Carousel SECTION
const liveprojectscarousel = {
  show: false,
  heading: "Live Project Demos",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/BlackJackLg.png"), 
      label: "BlackJack", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/TetrisLg.png"), 
      label: "Tetris", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/Minesweeper1.png"), 
      label: "MineSweeper", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    // { 
    //   img: require("../editable-stuff/TetrisLg.png"), 
    //   label: "Second slide label", 
    //   paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    // },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};
// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/JenCasto.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/JenCasto.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "HTML/CSS", value: 100 },
    { name: "JavaScript", value: 95 },
    { name: "Java", value: 95},
    { name: "C#", value: 95 },
    { name: "SQL", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "Python", value: 50 },
    { name: "Visual Basic Applications for Microsoft Office", value: 100 },
    { name: "Data Structures", value: 100 },
    { name: "React", value: 85 },
    { name: "Angular", value: 75 },   
    { name: "Vue", value: 65 },
    { name: "Adobe Photoshop", value: 95 },
    { name: "Adobe Premiere", value: 95 },
    { name: "Adobe After Effects", value: 60 },
  ],
  softSkills: [

    { name: "Problem Solving", value: 95 },
    { name: "Creativity", value: 90 },
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time entry-level remote front-end or back-end developer opportunities! If you know of any positions available, or if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "CastoCustomCreations@gmail.com",
};

const experiences = {
  show: true,
  heading: "Education",
  data: [
    {
      role: '(2) Bachelor of Science in Information Technology',// Here Add Company Name
      role1:'Software Application Development',
      role2:'Internet and Multimedia',
      companylogo: require('../assets/img/Kent_State_seal.png'),
      date: 'June 2017 – 2022',
    },
    {
      role: 'Google Developer',
      role1:'Android Developer Certification',
      companylogo: require('../assets/img/google-developer.png'),
      date: 'May 2018 – May 2023',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills,  liveprojectscarousel, leadership, getInTouch, experiences };
