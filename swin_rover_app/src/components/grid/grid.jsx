import * as React from 'react';
import './grid.css'
import LinkRoundButton from '../roundbutton/linkroundbutton';

function ProjectsGridCell({image_url, title, subtext, button_url}) {
    return (  
      <div className="container">
            <img src={image_url} alt=""></img>
            <div className="span_text_and_button">
              <div className="text_wrapper">
                <h3 className="inter-paragraph">{title}</h3>
                <p className="inter-links">{subtext}</p>
            </div>
              <LinkRoundButton text="View project" />
            </div>
     
    </div>
  );
}
  export default ProjectsGridCell;