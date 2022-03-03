const selectorName = 'img';
const imgArray = document.querySelectorAll(selectorName);
const imgNo = 0;
const time = 2000;

window.onload = () => {
  bgSlide(imgNo);
};

function bgSlide(imgNo) {
  if (imgNo >= 0) {
    imgArray[imgNo].style.opacity = 0;
  }

  imgNo++;

  if (imgNo >= imgArray.length) {
    imgNo = 0;
  }

  imgArray[imgNo].style.opacity = 1;

  setTimeout(() => {
    bgSlide(imgNo);
  }, time);
}
