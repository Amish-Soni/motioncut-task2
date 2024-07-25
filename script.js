const imgSrcs = [
  "images/b1.webp",
  "images/b2.jpg",
  "images/b3.jpg",
  "images/b4.jpg",
  "images/b5.jpg",
];

const container = document.querySelector(".container");
const prevImg = document.querySelector(".prev-img");
const currImg = document.querySelector(".curr-img");
const nextImg = document.querySelector(".next-img");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const noOfImages = imgSrcs.length;
let prev = 0,
  curr = 1,
  next = 2;
prevImg.src = imgSrcs[prev];
currImg.src = imgSrcs[curr];
nextImg.src = imgSrcs[next];
container.style.backgroundImage = `url("${currImg.src}")`;

const nextImgFunc = () => {
  prev = curr;
  curr = next;
  next = (next + 1) % noOfImages;
  prevImg.src = imgSrcs[prev];
  currImg.src = imgSrcs[curr];
  nextImg.src = imgSrcs[next];
  container.style.backgroundImage = `url("${currImg.src}")`;
  console.log(prev, curr, next);
};
const prevImgFunc = () => {
  next = curr;
  curr = prev;
  prev = prev - 1 >= 0 ? prev - 1 : noOfImages - 1;
  prevImg.src = imgSrcs[prev];
  currImg.src = imgSrcs[curr];
  nextImg.src = imgSrcs[next];
  container.style.backgroundImage = `url("${currImg.src}")`;
  console.log(prev, curr, next);
};

prevImg.addEventListener("click", prevImgFunc);
prevBtn.addEventListener("click", prevImgFunc);
nextImg.addEventListener("click", nextImgFunc);
nextBtn.addEventListener("click", nextImgFunc);

setInterval(nextImgFunc, 2000);
