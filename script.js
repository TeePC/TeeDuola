const header = document.querySelector("header");
const sectionOne= document.querySelector(".hero");
const ownerText = document.querySelector(".owner-text");
const ownerPic = document.querySelector(".owner-pic");
const ownerCard1 = document.querySelector(".owner-card1");

const sectionOneOptions = { 
    threshold: 0,
    rootMargin: "-130px"
    
};

const sectionOneObserver = new IntersectionObserver(function(entries, sectionOne) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            header.classList.add("header-scrolled");

        } else {
            header.classList.remove("header-scrolled")
        }
    })
}, sectionOneOptions );

sectionOneObserver.observe(sectionOne);

const ownerTextObserverOptions = {
    threshold: 0,
    rootMargin: "-80px"

}

const ownerTextObserver = new IntersectionObserver(function(entries, ownerTextObserver) {
    entries.forEach(entry => {
        //console.log(entry);
        if(!entry.isIntersecting) {
            return;
        }
        entry.target.classList.add("show-owner-text");
    })
}, ownerTextObserverOptions);

ownerTextObserver.observe(ownerText);


const ownerPicObserverOptions = {
    threshold: 0,
    rootMargin: "-1px"

}


const ownerPicObserver = new IntersectionObserver(function(entries, ownerPicObserver) {
    entries.forEach(entry => {
        //console.log(entry.target)
        if(!entry.isIntersecting) {
            return;
        }
        entry.target.classList.add("bounce-in-right");
        
    })
}, ownerPicObserverOptions)

ownerPicObserver.observe(ownerPic);


const ownerCard1Options = {
    threshold: 0,
    rootMargin: "-1px"

}


const ownerCard1Observer = new IntersectionObserver(function(entries, ownerCard1Observer) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        }

        entry.target.classList.add("show-owner-text");
    })

}, ownerCard1Options)

ownerCard1Observer.observe(ownerCard1);










var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};