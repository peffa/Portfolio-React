import React, { Component, Fragment } from 'react';
import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import VisibilitySensor from "react-visibility-sensor";

 const Skills = (props) => {

    const data = props.portfolioData;
    let skillList;
    skillList = data.skills.map((s, i) => (
          <div className="col-2" key={i}>
            <div className="site-skill">
              <div className="site-skill__canvas-wrapper">
          <VisibilitySensor>
            {({ isVisible }) => {
              const percentage = isVisible ? s.percentage : 0;
              return (
                <CircularProgressbar
                  value={ percentage } 
                  text={`${ percentage }%`} 
                  className="site-skill__canvas" 
                  styles={buildStyles({                 
                    // Text size
                    textSize: '2rem',
                    // How long animation takes to go from one percentage to another, in seconds
                    pathTransitionDuration: 1,
                  })}                                
                 />  
                  );
            }}
            </VisibilitySensor> 
              </div>
              <div className="site-skill__text"> {s.name}</div>
            </div>           
          </div>          
    ));

 	return (
    <section className="site-section" id="skills">
      <div className="container">
          <div className="site-section__icon">
          </div>        
        <h1 className="site-heading"> Skills  </h1>
        <div className="row">
    
              { skillList } 
                        
        </div>
      </div>
    </section>

 		)
 }

 export default Skills;