import * as React from 'react';
import './roundbutton.css'
import linkIconBlack from '../../assets/left-icon-black.svg'
import linkIconWhite from '../../assets/left-icon-white.svg'

function LeftRoundButton({ text, style, click_func}) {
    return (
      <a className="round-button" style={style} onClick={click_func}>
        <div className="button-info">
          <div className="button-icon-container left">
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

export default LeftRoundButton;