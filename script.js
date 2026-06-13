// ===============================
// TRUE FARMER JAVASCRIPT
// ===============================

// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener('click', function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        if(target){

            target.scrollIntoView({
                behavior: 'smooth'
            });

        }

    });

});


// ===============================
// NAVBAR SHADOW ON SCROLL
// ===============================

window.addEventListener('scroll', () => {

    const navbar = document.querySelector('header');

    if(window.scrollY > 50){

        navbar.style.boxShadow =
        "0 10px 30px rgba(0,0,0,0.1)";

    }
    else{

        navbar.style.boxShadow =
        "0 2px 10px rgba(0,0,0,0.05)";

    }

});


// ===============================
// STATS COUNTER ANIMATION
// ===============================

const counters = document.querySelectorAll('.stat-box h2');

const speed = 200;

counters.forEach(counter => {

    const animate = () => {

        const value =
        +counter.innerText.replace(/[^\d]/g,'');

        const data =
        +counter.getAttribute('data-count') || value;

        const time = data / speed;

        if(value < data){

            counter.innerText =
            Math.ceil(value + time);

            setTimeout(animate, 20);

        }

    };

});


// ===============================
// SCROLL REVEAL ANIMATION
// ===============================

const revealElements = document.querySelectorAll(
'.feature-card, .stat-box, .hero-content, .hero-image'
);

function revealOnScroll(){

    revealElements.forEach(element => {

        const windowHeight =
        window.innerHeight;

        const revealTop =
        element.getBoundingClientRect().top;

        const revealPoint = 100;

        if(revealTop < windowHeight - revealPoint){

            element.classList.add('active');

        }

    });

}

window.addEventListener('scroll', revealOnScroll);

revealOnScroll();


// ===============================
// HERO BUTTON EFFECT
// ===============================

const buttons = document.querySelectorAll(
'.primary-btn, .secondary-btn'
);

buttons.forEach(button => {

    button.addEventListener('mouseenter', () => {

        button.style.transform =
        'translateY(-3px)';

    });

    button.addEventListener('mouseleave', () => {

        button.style.transform =
        'translateY(0px)';

    });

});


// ===============================
// FEATURE CARD HOVER EFFECT
// ===============================

const cards =
document.querySelectorAll('.feature-card');

cards.forEach(card => {

    card.addEventListener('mouseenter', () => {

        card.style.transform =
        'translateY(-10px)';

    });

    card.addEventListener('mouseleave', () => {

        card.style.transform =
        'translateY(0px)';

    });

});


// ===============================
// LOADING ANIMATION
// ===============================

window.addEventListener('load', () => {

    document.body.style.opacity = "1";

});


// ===============================
// CONSOLE MESSAGE
// ===============================

console.log(
"🌱 True Farmer Website Loaded Successfully"
);




function getRecommendation() {

    const soil = document.getElementById("soilType").value;
    const water = document.getElementById("waterLevel").value;

    let crop = "";
    let profit = "";

    if (soil === "Sandy Soil" && water === "Low") {

        crop = "🌾 Jeera";
        profit = "₹1,80,000";

    } else if (soil === "Loamy Soil" && water === "High") {

        crop = "🍅 Tomato";
        profit = "₹2,20,000";

    } else {

        crop = "🌾 Wheat";
        profit = "₹1,00,000";

    }

    document.getElementById("cropName").innerText = crop;
    document.getElementById("profitValue").innerText = profit;
}



// ===============================
// PROFIT CALCULATOR
// ===============================

function calculateProfit(){

    const acre =
    parseFloat(
        document.getElementById("acre").value
    );

    const crop =
    document.getElementById("crop").value;

    let revenue = 0;
    let profit = 0;
    let cropName = "";

    if(crop === "jeera"){

        revenue = acre * 80000;
        profit = acre * 60000;
        cropName = "🌾 Jeera";

    }

    else if(crop === "tomato"){

        revenue = acre * 120000;
        profit = acre * 85000;
        cropName = "🍅 Tomato";

    }

    else if(crop === "chilli"){

        revenue = acre * 100000;
        profit = acre * 70000;
        cropName = "🌶 Chilli";

    }

    document.getElementById(
        "profitCrop"
    ).innerText = cropName;

    document.getElementById(
        "revenue"
    ).innerText =
    "₹" + revenue.toLocaleString();

    document.getElementById(
        "profit"
    ).innerText =
    "₹" + profit.toLocaleString();

}




// ===============================
// MANDI PRICE DEMO UPDATE
// ===============================

setInterval(() => {

    console.log(
        "Updating mandi prices..."
    );

}, 10000);




// ===============================
// WEATHER DEMO UPDATE
// ===============================

function updateWeather(){

    const temp =
    Math.floor(Math.random() * 8) + 28;

    const humidity =
    Math.floor(Math.random() * 30) + 50;

    const rain =
    Math.floor(Math.random() * 80);

    document.getElementById(
        "temperature"
    ).innerText = temp + "°C";

    document.getElementById(
        "humidity"
    ).innerText = humidity + "%";

    document.getElementById(
        "rain"
    ).innerText = rain + "%";

}

setInterval(updateWeather, 10000);



// ===============================
// CONTACT FORM
// ===============================

const sendBtn =
document.querySelector(".send-btn");

if(sendBtn){

    sendBtn.addEventListener("click", () => {

        alert(
            "Thank you! Your message has been sent."
        );

    });

}




// ===============================
// LOGIN SYSTEM
// ===============================

function showSignup(){

    document.getElementById(
        "signupBox"
    ).style.display = "block";

}

function signupUser(){

    const name =
    document.getElementById(
        "signupName"
    ).value;

    localStorage.setItem(
        "farmerName",
        name
    );

    alert(
        "Account Created Successfully!"
    );

}

function loginUser(){

    const name =
    localStorage.getItem(
        "farmerName"
    );

    if(name){

        alert(
            "Welcome " + name
        );

    }

    else{

        alert(
            "Please Create Account First"
        );

    }

}