window.addEventListener('load', function () {
  viewSlide('.slide img');
});

function viewSlide(className, slideNo = -1) {
  const imgArray = document.querySelectorAll(className);

  if (slideNo >= 0) {
    imgArray[slideNo].style.opacity = 0;
  }

  slideNo++;
  if (slideNo >= imgArray.length) {
    slideNo = 0;
  }
  imgArray[slideNo].style.opacity = 1;

  setTimeout(function () {
    viewSlide(className, slideNo);
  }, 2000);
}
