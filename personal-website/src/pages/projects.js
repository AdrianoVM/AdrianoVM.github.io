import React from 'react';
import { proofGuideImg, bsp1, acg } from '../images';
import ProjectCard from '../components/card/projectCard';
import { Button } from 'react-bootstrap';
import {motion} from 'framer-motion';
import { faVrCardboard, faTree, faLink, faEllipsisV, faUtensils, faMountainSun, faNewspaper} from '@fortawesome/free-solid-svg-icons';
import {faWindowMaximize} from '@fortawesome/free-regular-svg-icons';
import { faUnity } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Projects = () => {
    return (
      <div className="container-fluid mt-2">
      <div className="row flex-xl-nowrap justify-content-center">
        
        <main className="col-lg-11 col-xl-9 col-xxl-8 py-md-3 ps-xl-5 text-center" role="main">

          <h1 className="display-1 hello pb-5 link-target" id="intro">Projects</h1>

          <p className="my-3 m-md-3">
            Here is a list of projects I worked on in the past years, or I am currently working on.
            Currently all projects shown were worked on as part of university projects, Those before 2021 are from the Bachelor Semester Projects (BSP) of the Bachelor in Computer Science at the University of Luxembourg.
            From 2021 to 2023, the projects where made in the context of a Master at EPFL.

          </p>

          <ProjectCard title={<div>Cybersickness Assessment Framework&nbsp;<FontAwesomeIcon icon={faVrCardboard}/></div>}
          subtitle={<p className="lead">An open source Unity framework to assist cybersickness research.</p>}
          id={"csaf"} media={<div  className="ratio ratio-16x9 my-3"><iframe src="https://www.youtube.com/embed/3boUl46NIeg" title="Cybersickness Assessment Framework (CSAF) Trailer" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>}>
          The Cybersickness Assessment Framework (CSAF) was developed as a semester project for the Immersive Interaction Group at EPFL.
          The objective was to create the first version of a Unity tool to assist cybersickness researchers.<br/><br/>
          Studies of virtual reality caused cybersickness (CS) often require a significant investment in creating the primary VR environment and other experiment-related features.
          CSAF aims to facilitate the development of CS-related experiments by providing often recreated elements, such as a structure, locomotion techniques, and a customizable environment.<br/><br/>
          The first version of this project <b>resulted in a published paper</b> presented during the 2023 IEEE Conference on Virtual Reality and 3D User Interfaces. Paper available <a href='https://ieeexplore.ieee.org/abstract/document/10108853'>here <FontAwesomeIcon icon={faNewspaper}/></a>.<br/>
          A second version of this project is being developed by other students.<br/><br/>
          - Version showed was made in 2022, then published in 2023, as part of a semester project with the Immersive Interaction Group at EPFL.
          </ProjectCard>

          <ProjectCard title={<div>Ray Tracing Project&nbsp;<FontAwesomeIcon icon={faMountainSun}/></div>}
          subtitle={<p className="lead">A Nori extension, for the Advanced Computer Graphics course at EPFL.</p>}
          id={"acg"} media={<img src={acg} className="img-fluid my-3" alt="Final Render for competition"/>}>
          This image is the result of a self-directed final project from the advanced computer graphics course at EPFL.
          This project extended a basic rendering software named Nori, with additional features of our own choosing.
          The objective of the final project was to create a single image of both technical and artistic merit that was entered into a rendering competition with the theme "Change",
          and judged by an independent panel of computer graphics experts. The competition results are available <a href="http://rgl.epfl.ch/pages/courses/cs440/sp23/competition2023">here</a>.<br/><br/>

          
          The image itself represents the evolution of a forest through time and human interaction.
          With portals in the middle showing other versions of the forest.
          Features implemented include Volumetric rendering, image-based lighting, and portals.<br/><br/>
          - Made in 2023, as part of the Advanced Computer Graphics course at EPFL.
          </ProjectCard>

          <ProjectCard title={<div>Hunger Slayer: Grand Banquet&nbsp;<FontAwesomeIcon icon={faVrCardboard}/></div>}
          subtitle={<p className="lead">A virtual-reality cooking game&nbsp;<FontAwesomeIcon icon={faUtensils}/>.</p>}
          id={"hunger-slayer"} media={<div  className="ratio ratio-16x9 my-3"><iframe src="https://www.youtube.com/embed/3EUrt8cDPWE" title="EPFL VR Project - Hunger Slayer: Grand Banquet" frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>}>
          Hunger Slayer: Grand Banquet was developed as the main deliverable of the Virtual Reality course in the Computer Science Master at EPFL.
          The objective with this project was to implement various interaction techniques of VR applications in a fun environment.
          The game was created with the assistance of Paul Oliver and Noé De Santo and was selected as a honorable mention for best game of the year.<br/><br/>
          - Made in 2022, as part of the Virtual Reality course at EPFL.
          </ProjectCard>

          <ProjectCard title={<div>Forest SaVR 0.1 <FontAwesomeIcon icon={faVrCardboard}/> </div>} 
          subtitle={<p className="lead">A Virtual-Reality application to raise awareness of deforestation&nbsp;<FontAwesomeIcon icon={faTree}/>.</p>}
          id={"forest-savr"} media={<div  className="ratio ratio-16x9 my-3"><iframe src="https://www.youtube.com/embed/E93NYJ476wk" title="Uni.lu Project Forest SaVR" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></div>}>
            Forest SaVR 0.1 is developed as the first part of a multi-semester project for the Bachelor in Computer Science of the University of Luxembourg.
            This project is made as part of the <a href="https://vrarlab.uni.lu/">VR/AR LAB</a> with Jean Botev and is developed with <a href="https://unity.com/">Unity <FontAwesomeIcon icon={faUnity}/></a>.
            Forest SaVR received the <b>best demo/poster award</b> at the 2020 GI VR/AR Workshop in Trier, Germany.
            A newer version is in development, as part of BSP5 and BSP6, and our objective is to transform it into a playable, enjoyable, and educative serious game. <br/><br/>
            - Version showed was made in 2019, as part of BSP3.
          </ProjectCard>
        

          <ProjectCard  title={<div>Proof Guide <FontAwesomeIcon icon={faWindowMaximize}/></div>}
          subtitle={<p className="lead">Proof Guide is a responsive website with interactive lessons on mathematical proofs and their applications.</p>}
          id={"proof-guide"} media={<img src={proofGuideImg} className="img-fluid my-3" alt="Screenshot of website"/>}
          extra={<a href="https://dridrar.github.io/BSP2/"><Button variant="outline-secondary" className="my-3" as={motion.button}  
                whileHover={{ scale: [null, 1.15, 1.1] }}
                transition={{ duration: 0.2 }}>
                See Website <FontAwesomeIcon icon={faLink}/>
                </Button></a>}>
            The objective was to make an interactive, enjoyable, and understandable learning experience for students starting discrete mathematics.
                The philosophy behind this project was that students learn better when they are in an enjoyable environment,
                so instead of discovering how to write proofs through a simple pdf,
                they could read the lesson, and solve simple exercises in a responsive (and beautiful) website. <br/><br/>
                - Made in 2019, as part of BSP2.
          </ProjectCard>
          
          <ProjectCard title={"Visual Representation of Legal Concepts"}
          subtitle={<p className="lead">A visual user interface for a concept recognition system in European and national legislation</p>}
          id={"bsp1"} media={<img src={bsp1} className="img-fluid my-3" alt="Screenshot of the visual user interface"/>}>
            The objective was to create a visual user interface, available as a locally hosted website,
            for a more user-friendly version of an automatic concept recognition tool which annotates legal documents.
            This interface allows users to upload their own documents, annotate them with the tool and see the recognized concepts as categorized tooltips. <br/><br/>

            - Made in 2018, as part of BSP1
          </ProjectCard>

          <ProjectCard title={<FontAwesomeIcon icon={faEllipsisV}/>}
          subtitle={<div>New projects will be added soon <sup>TM</sup></div>}/>
          
        </main>
      </div>
    </div>
    );
  };
    
  export default Projects;