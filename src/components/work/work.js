// import { React, useEffect, useState } from 'react'
// import Card from '../Card/card'
// import './work.css'
// // import Singleproject from '../Projectttt/singleproject'
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import Project from '../Project/project';

// const Work = () => {
//   const [isActive, setIsActive] = useState(false);
//   const [selectedProject, setSelectedProject] = useState(null);

//   // Function to toggle the active state
//   const toggleActive = (projectData) => {
//     setIsActive(!isActive);
//     setSelectedProject(projectData);
//   };

//   useEffect(() => {
//     AOS.init({ duration: "500", once: true });
//   }, [])
//   return (
//     <>
//       <div className="workpage">
//         <Project
//           isActive={isActive}
//           toggleActive={toggleActive}
//           name={selectedProject?.name}
//           about={selectedProject?.about}
//           codelink={selectedProject?.codelink}
//           imgsource={selectedProject?.imgsource}
//           isweb={selectedProject?.isweb}
//         />
//         <div className="title">
//           Projects {">"}
//         </div>
//         <div className='work'>
//           {/* <div className="custom-card" onClick={toggleActive} data-aos =  "fade-right"  > */}
//           <div className="custom-card" onClick={() =>
//             toggleActive({
//               name: "Algo Visualizer",
//               about: "Algo Visualizer is a web application for visualizing various sorting algorithms.THis algorithm consist of various sorting algprothm like bubble sort, heap sort, quick sort, merge sort that shows hwo the algorithm works by using visual animation.",
//               codelink: "https://github.com/RamKoirala1123/Algo_Visualizer",
//               imgsource: "./assets/image/project/algovisualizer.jpg",
//               isweb:true,
//             })
//           } data-aos="fade-right">
//             <Card
//               title="Algo Visualizer"
//               content=""
//               view="web "
//               backgroundImage="./assets/image/project/algovisualizer.jpg"
//             />
//           </div>

//           <div className="custom-card" onClick={() =>
//             toggleActive({
//               name: "Horoscope",
//               about: "Crafted with precision using Flutter and Dart, Stellar Visions is the ultimate horoscope app designed to provide you with daily, weekly, and yearly astrological guidance. Seamlessly blending intuitive design with powerful functionality, this app brings the mystique of the cosmos right to your fingertips.",
//               codelink: "https://github.com/d1-biduu/Horoscopes",
//               imgsource: "./assets/image/horoscope.jpg",
//               isweb:false,
//             })} data-aos="fade-right" data-aos-anchor-placement="top-center">
//             <Card
//               title="Horoscope"
//               content=""
//               view="mobile"
//               backgroundImage="./assets/image/project/horoscope.jpg"
//             />
//           </div>

//           <div className="custom-card" onClick={() =>
//             toggleActive({
//               name: "Financial Calculator",
//               about: "The Financial Calculator app, developed with Flutter for the frontend and Django for the backend, offers a comprehensive suite of financial tools. Users can calculate interest rates, EMIs, depreciation, income tax, payback periods, and more. The app also includes dynamic graphing capabilities, allowing users to visualize their financial data for deeper insights. With a focus on user experience, the app ensures seamless navigation and responsiveness across devices, making it an essential tool for financial planning and analysis.",
//               codelink: "https://github.com/Bibek-Dahal/financial_calculator",
//               imgsource: "./assets/image/calc.jpg",
//               isweb:false,
//             })} data-aos="fade-right">
//             <Card
//               title="Financial Calculator"
//               content=""
//               view="mobile"
//               backgroundImage="./assets/image/project/calculator.jpg"
//             ></Card>
//           </div>

//           <div className="custom-card" onClick={() =>
//             toggleActive({
//               name: "Survey App",
//               about: "A survey app designed for the Dhulikhel Municipality to collect the data about the youth residing in Dhulikhel Municipality build with flutter andd jango.This app works in offline also and has the feature to take an survey, update the survey if need, send the servey data to the database, viewed send surveys functionalities and so on." ,
//               codelink: "https://github.com/RamKoirala1123/Flutter_Survey",
//               imgsource: "./assets/image/survey.jpg",
//               isweb:false,
//             })} data-aos="fade-right">
//             <Card
//               title="Survey App"
//               content=""
//               view="mobile"
//               backgroundImage="./assets/image/project/survey.jpg"
//             ></Card>
//           </div>
//           <div className="custom-card" onClick={() =>
//             toggleActive({
//               name: "SLR parser",
//               about: "A website to parse the given grammar using SLR parsing algorithm and get the parsing table.THis website help user learn more about how the parsing algorithm works with the help of parsing table, stack table etc. Build with the help of flask framework in python.",
//               codelink: "https://github.com/RamKoirala1123/slrparser",
//               imgsource: "./assets/image/project/algovisualizer.jpg",
//               isweb:true,
//             })} data-aos="fade-right" >
//             <Card
//               title="SLR Parser"
//               content=""
//               view="web "
//               backgroundImage="./assets/image/project/slrparser.jpg"
//             />
//           </div>

//           {/* <div className="custom-card">
//           <Card
//             title="Horoscope"
//             content=""
//             view="mobile"
//             backgroundImage="./assets/image/project/imgone.jpg"
//           />
//         </div> */}
//         </div>
//       </div>

//     </>
//   )
// }

// export default Work



import { React, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card/card';
import './work.css';
// import Singleproject from '../Projectttt/singleproject'
import AOS from 'aos';
import 'aos/dist/aos.css';
import database from '../database/project.json';

const Work = () => {
  // const [isActive, setIsActive] = useState(false);
  // const [selectedProject, setSelectedProject] = useState(null);

  // Function to toggle the active state
  // const toggleActive = (projectData) => {
  //   setIsActive(!isActive);
  //   setSelectedProject(projectData);
  // };

  useEffect(() => {
    AOS.init({ duration: "500", once: true });
  }, [])
  return (
    <>
      <div className="workpage" id="project">
        <div className="title">
          Projects {'>'}
        </div>
        <div className='work'>
        {database.project.map(project =>  (
          <div className="custom-card"  data-aos={project.animation}>
            <Link to={`/project/${project.id}`}>
            <Card
            key={project.id}
              title={project.title}
              content=""
              view={project.isweb}
              backgroundImage={project.backgroundImage}
            />
            </Link>
          </div>
        ))}
        </div>
      </div>

    </>
  )
}

export default Work
