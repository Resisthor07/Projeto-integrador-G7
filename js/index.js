//Seção de imagens
let sliderPai = document.querySelector(".slider");
let textoItemSlider = document.querySelector(".carrossel .slider li").innerHTML;

for (i = 0; i < 5; i++) {
    let itemSlider = document.createElement("li");
    sliderPai.appendChild(itemSlider);
    itemSlider.innerHTML = textoItemSlider;
    console.log(`../img/carrossel/panoramica-${i + 1}.jpg`);
    document.getElementsByClassName("slider-img")[i].setAttribute("src", `../img/carrossel/panoramica-${i + 1}.jpg`);
}
