import * as React from 'react';
import './underlinebutton.css'

function UnderlineButton({ text, number, click_func }) {
    return (
        <a onClick={click_func} className="underline-button">
            <p style={{ "--categories-number": parseInt(number, 10)}}>{text}</p>
        </a>
    );
  }

export default UnderlineButton;