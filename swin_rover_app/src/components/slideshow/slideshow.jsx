import * as React from 'react';
import './slideshow.css'

function Slideshow(){
    return (
        <div class="slideshow">
            <div class="indicator">
                <div class="indicator-dot red-indicator" onclick="setNumber(0);"></div>
                <div class="indicator-dot" onclick="setNumber(1);"></div>
                <div class="indicator-dot" onclick="setNumber(2);"></div>
            </div>
            <div class="image-container">
                <div class="image"></div>
                <div class="image"></div>
                <div class="image"></div>
            </div>
            <div class="controls">
                <a onclick="previousImage();" class="round-button .previous-button">
                    <div class="button-info">
                        <div class="button-icon-container left">
                            <img class="button-icon" src="left-icon-black.svg" alt=""/>
                            <img class="button-icon" src="left-icon-white.svg" alt=""/>
                        </div>
                        <div class="button-text-container">
                            <p class="button-text">Previous photo</p>
                            <p class="button-text">Previous photo</p>
                        </div>
                    </div>
                </a>
                <a onclick="nextImage();" class="round-button next-button">
                    <div class="button-info">
                        <div class="button-icon-container right">
                            <img class="button-icon" src="right-icon-black.svg" alt=""/>
                            <img class="button-icon" src="right-icon-white.svg" alt=""/>
                        </div>
                        <div class="button-text-container">
                            <p class="button-text">Next photo</p>
                            <p class="button-text">Next photo</p>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    )
}