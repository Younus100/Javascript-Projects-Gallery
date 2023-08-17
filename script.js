let images = [
  "assets/1.jpg",
  "assets/2.jpg",
  "assets/3.jpg",
  "assets/4.jpg",
  "assets/5.jpg",
  "assets/6.jpg",
  "assets/7.jpg",
  "assets/8.jpg",
  "assets/9.jpg",
  "assets/10.jpg",
  "assets/11.jpg",
  "assets/12.jpg",
];

let tags = [
  "Galaxies Sky",
  "Red Clouds",
  "Deserts",
  "Mountains",
  "Oceans",
  "Galaxies Sky",
  "Red Clouds",
  "Deserts",
  "Mountains",
  "Oceans",
  "India",
  "Rangers",
];

let block = document.querySelector(".flex");

for (let i = 0; i < images.length; i++) {
  let div = document.createElement("div");
  let img = document.createElement("img");
  let h = document.createElement("h5");
  div.className = "flex-item";
  h.className = "img-dis";
  img.setAttribute("src", images[i]);
  h.innerHTML = tags[i];
  div.appendChild(img);
  div.appendChild(h);
  block.appendChild(div);
}
