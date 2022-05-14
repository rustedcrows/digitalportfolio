//const Ryan = "Brazil"

class Slider {
    constructor(sliderElem) {
        this.slider = sliderElem;
        this.sliderItems = sliderElem.getElementsByClassName("slider-item");
        this.nextBtn = sliderElem.querySelector(".slider-control-next");
        this.prevBtn = sliderElem.querySelector(".slider-control-prev");
        this.currentIndex = 0;
        this.prevItemIndex = this.sliderItems.length - 1;
        this.nextItemIndex = 1;
        this.isSliding = false;
    }
}

