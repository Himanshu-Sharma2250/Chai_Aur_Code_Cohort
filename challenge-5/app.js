// Image data
const images = [
  {
    url: 'https://plus.unsplash.com/premium_photo-1666863909125-3a01f038e71f?q=80&w=1986&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Beautiful Mountain Landscape',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1690576837108-3c8343a1fc83?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Ocean Sunset View',
  },
  {
    url: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=2041&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Autumn Forest Path',
  },
  {
    url: 'https://plus.unsplash.com/premium_photo-1680466057202-4aa3c6329758?q=80&w=2138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    caption: 'Urban City Skyline',
  },
];

const carouselTrack = document.getElementById('carouselTrack')
const caption = document.getElementById('caption')
const carouselNav = document.getElementById('carouselNav')
const nextButton = document.getElementById('nextButton')
const prevButton = document.getElementById('prevButton')
const autoPlayButton = document.getElementById('autoPlayButton')
const timerDisplay = document.getElementById('timerDisplay')

const spanList = []
let span = ""

for (let i = 0; i < images.length; i++) {
  span = document.createElement('span')
  span.className = "carousel-indicator"
  carouselNav.appendChild(span)
  spanList.push(span)
}

let slideNumber = 0;

function showSlides(number, btn) {
  if (btn == "next") {
    slideNumber += Number(number)
    if (slideNumber == images.length) {
      slideNumber = 0;
    }
  }
  else if (btn == "prev") {
    slideNumber -= Number(number)
    if (slideNumber < 0) {
      slideNumber = images.length-1;
    }
  }

  if (carouselTrack.hasChildNodes()) {
    carouselTrack.innerHTML = ""

    const image = document.createElement('img')
    image.setAttribute("src", images[slideNumber].url)
    image.className = "carousel-slide"

    carouselTrack.appendChild(image)

    caption.innerText = images[slideNumber].caption
  }
  else {
    const image = document.createElement('img')
    image.setAttribute("src", images[slideNumber].url)
    image.className = "carousel-slide"

    carouselTrack.appendChild(image)

    caption.innerText = images[slideNumber].caption
  }

  if (btn == "next") {
    const slide = slideNumber - 1
    if (slide < 0) {
      spanList[images.length-1].classList.remove("active")
    }
    else {
      spanList[slide].classList.remove("active")
    }
    spanList[slideNumber].classList.add("active")
  }
  else {
    const slide = (slideNumber + 1) % images.length
    spanList[slide].classList.remove("active")
    spanList[slideNumber].classList.add("active")
  }
}

showSlides(0, "next")

nextButton.addEventListener('click', () => {
  showSlides(1, "next")
})

prevButton.addEventListener('click', () => {
  showSlides(1, "prev")
})

autoPlayButton.addEventListener('click', () => {
  showSlidesInAnimation()
  // startCountdown(30)
})

let animationSlideIndex = 0
function showSlidesInAnimation() {
  animationSlideIndex++
  if (animationSlideIndex == images.length) {
    animationSlideIndex = 0
  }

  if (carouselTrack.hasChildNodes()) {
    carouselTrack.innerHTML = ""
    
    const image = document.createElement('img')
    image.setAttribute("src", images[animationSlideIndex].url)
    image.className = "carousel-slide"
    
    carouselTrack.appendChild(image)
    
    caption.innerText = images[animationSlideIndex].caption
  }
  else {
    const image = document.createElement('img')
    image.setAttribute("src", images[animationSlideIndex].url)
    image.className = "carousel-slide"
    
    carouselTrack.appendChild(image)
    
    caption.innerText = images[animationSlideIndex].caption
  }
  
  
  const slide = animationSlideIndex - 1
  if (slide < 0) {
    spanList[images.length-1].classList.remove("active")
  }
  else {
    spanList[slide].classList.remove("active")
  }
  spanList[animationSlideIndex].classList.add("active")

  startCountdown(3)
  
  setTimeout(showSlidesInAnimation, 3000)  
}

function startCountdown(durationInSeconds) {
  let timer = durationInSeconds;
  const timerDisplay = document.getElementById("timerDisplay"); 
  
  function updateCountdown() {
    let seconds = timer % 60;
    timerDisplay.innerText = `Next slide in ${seconds} sec`;
  
    if (timer > 0) {
      timer--; // Decrease time
    } else {
      clearInterval(countdownInterval); // Stop countdown when it reaches 0
    }
  }
  
  // Initial call to display the countdown immediately
  updateCountdown();
  
  // Correctly set interval to update countdown every second
  const countdownInterval = setInterval(updateCountdown, 1000);
}
