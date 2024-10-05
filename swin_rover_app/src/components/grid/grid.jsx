import * as React from 'react';
import './grid.css'
import LinkRoundButton from '../roundbutton/linkroundbutton';

function goToUrl(url) {
  window.location.href = url;
}

function ProjectsGridCell({ image_url, title, subtext, button_url }) {
  return (
    <div className="projects-grid-container">
      <img src={image_url} alt=""></img>
      <div className="span_text_and_button">
        <div className="text_wrapper">
          <h3 className="inter-paragraph">{title}</h3>
          <p className="inter-links">{subtext}</p>
        </div>
        <LinkRoundButton text="View project" click_func={() => goToUrl(button_url)} />
      </div>

    </div>
  );
}
export default ProjectsGridCell;