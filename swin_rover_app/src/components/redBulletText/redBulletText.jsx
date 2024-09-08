{/* This is the component to create a red bullet point with any text */}

import * as React from 'react';
import './redBulletText.css';

// You can either use a pre-existing class for the font styles (using fontClassName),
// or you can use a custom font size (using textSize). If you use both, the textSize
// prop will override the font-size property in your fontClassName class.
function RedBulletText({text, textSize = '', fontClassName=''}) {
    return(
        <div className={`red-bullet-outer ${fontClassName}`} style={{fontSize: textSize}}>
            <span className='red-bullet-inner'>
                <span>&#8226;</span>
            </span>
            <span className='red-bullet-text'>{text}</span>
        </div>
    );
};

export default RedBulletText;

