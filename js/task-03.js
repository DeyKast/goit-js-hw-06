const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const listEl = document.querySelector(".gallery");

const createElement = ({ url, alt }) =>
  `<li>
    <img width=550px src="${url}" alt="${alt}">
  </li>`;

const imagesMarkup = images.map((image) => createElement(image)).join("");

listEl.insertAdjacentHTML("afterbegin", imagesMarkup);

listEl.style.cssText =
  "display: flex; gap: 50px; list-style: none; flex-wrap: wrap";
