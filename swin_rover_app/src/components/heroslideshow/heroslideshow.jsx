import * as React from 'react';
import './heroslideshow.css'
import RightRoundButton from '../roundbutton/rightroundbutton';
import LeftRoundButton from '../roundbutton/leftroundbutton';

let slideshow_img_number = 0;
let numImages = 3;

function nextImage() {
    slideshow_img_number = slideshow_img_number + 1;
    displayImages();
    setIndicatorColour();
}

function previousImage() {
    slideshow_img_number = slideshow_img_number - 1;
    displayImages();
    setIndicatorColour();
}

function displayImages() {
    if (slideshow_img_number < 0) {
        slideshow_img_number = slideshow_img_number * -1;
        slideshow_img_number = slideshow_img_number % numImages;
        slideshow_img_number = numImages - slideshow_img_number;
    }
    else {
        slideshow_img_number = slideshow_img_number % numImages;
    }
    let counter = 0;
    let transform_amount = slideshow_img_number * -100;
    document.querySelectorAll('.slideshow .image').forEach(image => {
        image.style.transform = 'translateX(' + transform_amount + '%)';
        let object_position_amount = 50 - ((slideshow_img_number - counter) * 100);
        image.style.backgroundPosition = '' + object_position_amount + '% 50%';
        counter++;
    })
}

function setIndicatorColour() {
    let indicator_counter = 0;
    if (document.querySelector('.slideshow .red-indicator') != null) {
        document.querySelector('.slideshow .red-indicator').classList.remove('red-indicator');
    }
    document.querySelectorAll('.slideshow .indicator-dot').forEach(indicator => {
        if (indicator_counter === slideshow_img_number) {
            indicator.classList.add('red-indicator');
        }
        indicator_counter++;
    })
}

function setNumber(number) {
    slideshow_img_number = number;
    displayImages();
    setIndicatorColour();
}

function HeroSlideshow() {
    return (
        <div className="slideshow">
            <div className="indicator">
                <div className="indicator-dot red-indicator" onClick={() => setNumber(0)}></div>
                <div className="indicator-dot" onClick={() => setNumber(1)}></div>
                <div className="indicator-dot" onClick={() => setNumber(2)}></div>
            </div>
            <div className="image-container">
                <div className="image"></div>
                <div className="image"></div>
                <div className="image"></div>
            </div>
            <div className="controls">
                <LeftRoundButton text="Previous photo" click_func={previousImage} />
                <RightRoundButton text="Next photo" click_func={nextImage} />
            </div>
        </div>
    );
}
export default HeroSlideshow;
