let main = document.getElementById("main");
let s = " ";
image = [
  "https://i.pinimg.com/736x/54/94/bd/5494bd33caf16faf6de8aad555016599.jpg",
  "https://i.pinimg.com/1200x/81/60/5e/81605e77565564c36a62eb8c3c829997.jpg",
  "https://i.pinimg.com/1200x/6b/ad/0a/6bad0a2e2030654e412de345dcfee202.jpg",
  "https://i.pinimg.com/1200x/12/33/90/1233900222c171c6e6a17e2e5d92dc6e.jpg",
  "https://i.pinimg.com/736x/7a/dc/15/7adc1598af5609de056f2f8e53402f9c.jpg",
];

for(let i=1;i<=44;i++){
    let imageIndex=Math.floor(Math.random()*image.length);
    s += `<div class="card"><img src="${image[imageIndex]}"></div>`;
}
main.innerHTML=s;