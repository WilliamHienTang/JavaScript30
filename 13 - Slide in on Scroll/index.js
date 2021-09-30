function debounce(func, wait = 20, immediate = true) {
  var timeout;

  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e){
  sliderImages.forEach(sliderImage => { 
    const isScrolledIn = window.scrollY + window.innerHeight > (sliderImage.offsetTop + sliderImage.height/2);

    const isNotScrolledPast = window.scrollY < (sliderImage.offsetTop + sliderImage.height/2);

    if(isScrolledIn && isNotScrolledPast){
      sliderImage.classList.add('active');
    }
    else{
      sliderImage.classList.remove('active'); 
    }
  });
}

window.addEventListener('scroll', debounce(checkSlide));