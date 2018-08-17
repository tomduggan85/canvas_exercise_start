//dom elements and related
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
const fileInput = document.querySelector('input[type="file"]')
const zoomIn = document.querySelector('.zoom-in')
const zoomOut = document.querySelector('.zoom-out')

//state variables
let image;

const onImageLoaded = () => {
};

fileInput.addEventListener('change', (e) => {
  image = new Image();
  image.onload = onImageLoaded;
  image.src = URL.createObjectURL(e.target.files[0]);
});