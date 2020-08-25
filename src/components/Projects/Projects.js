import React, { Component } from 'react';


const Projects = (props) => {
	return (
    <section className="site-section site-standard" id="project">
      <div className="container">
          <div className="site-section__icon">
          </div>        
        <h1 className="site-heading"> Recent Projects </h1>
        <div className="row">
			   { props.children }   
        </div>        
      </div>
    </section>
		)
}

export default Projects;