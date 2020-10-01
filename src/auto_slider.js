class AutoSlider {

    static sliderClassPrefix = "auto-slider-";
    static defaultSlideSpeed = "3000"; // ms
    static settingsRegexp = new RegExp(this.sliderClassPrefix + "([\\d\-]+)");

    constructor(node) {
        this.node = node;
        this.direction = 'right';
        this.active = 0;

        this.elementWrapper = null;
        this.itemsToShow = 0;
        this.itemsCount = 0;
        this.firstElement = null;

        this.speed = null;
        this.timer = null;

        this.bound = false;
    }

    static initAll() {
        let sliders = document.querySelectorAll(`[class*='${this.sliderClassPrefix}'`);
        sliders.forEach(function(node) {
            new AutoSlider(node).bind();
        });
    }

    bind() {
        if (this.bound) return;

        this.setElementWrapper();
        if (this.elementWrapper == null) return;
        this.firstElement = this.elementWrapper.children[0];
        this.firstElement.style.marginLeft = "0%";
        this.itemsCount = this.elementWrapper.children.length;

        let settings = this.node.getAttribute('class')
            .match(AutoSlider.settingsRegexp)[1].split('-');
        this.itemsToShow = parseInt(settings[0]);
        this.speed = parseInt(settings[1] || AutoSlider.defaultSlideSpeed);

        this.elementWrapper.classList.add('auto-slider-item-wrapper');
        this.elementWrapper.style.setProperty('--slide-items', this.itemsToShow);

        this.startSlider();
        this.bindMouseHandler();

        this.bound = true;
    }

    bindMouseHandler() {
        let as = this;

        this.elementWrapper.addEventListener('mouseover', function() {
            as.stopSlider();
        });
        this.elementWrapper.addEventListener('mouseout', function() {
            as.startSlider();
        });
        this.elementWrapper.addEventListener('click', function() {
            as.doSlide();
        });
    }

    setElementWrapper() {
        this.elementWrapper = this.node;

        for(let i = 0; i < 10; i++) {
            if (this.elementWrapper.children.length > 1) return;

            if (this.elementWrapper.children.length == 1) {
                this.elementWrapper = this.elementWrapper.children[0];
            }
        }
        this.elementWrapper = null;
    }

    doSlide() {
        if (this.direction == 'right' && this.active + this.itemsToShow >= this.itemsCount) {
            this.direction = 'left';
        } else if (this.direction == 'left' && this.active == 0) {
            this.direction = 'right';
        }

        if (this.direction == 'left') {
            this.active -= 1;
        } else {
            this.active += 1;
        }

        let margin = 100 / this.itemsToShow  * this.active;
        this.firstElement.style.marginLeft = "-" + margin + "%";
    }

    startSlider() {
        let as = this;
        this.timer = window.setInterval(function() { as.doSlide(); }, this.speed);
    }

    stopSlider() {
        if (this.timer != null) window.clearInterval(this.timer);
        this.timer = null;
    }
}

AutoSlider.initAll();