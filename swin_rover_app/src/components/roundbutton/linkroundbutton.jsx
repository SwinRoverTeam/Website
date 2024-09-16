import * as React from 'react';
import './roundbutton.css'
import linkIconBlack from '../../assets/link-icon-black.svg'
import linkIconWhite from '../../assets/link-icon-white.svg'

function LinkRoundButton({ text, link, style }) {
    return (
      <a href={link} className="round-button" style={style}>
        <div className="button-info">
          <div className="button-icon-container diagonal">
            <img className="button-icon" src={linkIconBlack} alt="Link Icon Black" />
            <img className="button-icon" src={linkIconWhite} alt="Link Icon White" />
          </div>
          <div className="button-text-container">
            <p className="button-text">{text}</p>
            <p className="button-text">{text}</p>
          </div>
        </div>
      </a>
    );
  }

export default LinkRoundButton;