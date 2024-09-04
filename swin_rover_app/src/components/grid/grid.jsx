import * as React from 'react';
import './grid.css'

function Grid({image_url, image_alt, title, subtext, button_url, button_name}) {
    return (  
      <div class="container">
       
          <section class="content">
            <img src={image_url} alt={image_alt}></img>
            <div className="span_text_and_button">
              <div className="text_wrapper">
                <h3 className="inter-paragraph">{title}</h3>
                <p className="inter-links">{subtext}</p>
            </div>
              <a href={button_url} >
                <button className="inter-links">{button_name}</button>
              </a>
            </div>
          </section>
     
    </div>
  );
}
  export default Grid;