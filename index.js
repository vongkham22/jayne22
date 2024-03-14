const randomNumber1 = Math.floor(Math.random() * 6) + 1;


/* console.log(randomNumber1); */ 

/* const randomDiceImage1 = ./images/dice${randomNumber1}.png;
document.querySelector('.img1').setAttribute('src', randomDiceImage1);
const randomNumber2 = ./images/dice${randomNumber2}.png;
document.querySelector(.img2).setAttribute(src,randomDiceImage2); */
const randomDiceImage ="dice"+ randomNumber1 +".png";
/* console.log(randomDiceImage); */
const randomImageSource ="images/"+randomDiceImage;
/* console.log(randomImageSource); */
let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);


const randomNumber2 = Math.floor(Math.random() * 6) + 1;
const randomDiceImage2 ="dice"+ randomNumber2 +".png";
/* console.log(randomDiceImage); */
const randomImageSource2 ="images/"+randomDiceImage2;
/* console.log(randomImageSource); */
let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource2);

function reload(){
    location.reload();
}

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "😎 ຜູ້ຫຼີ້ນທີ່1ຊະນະ";}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = " ຜູ້ຫຼີ້ນທີ່2ຊະນະ 😒"
}
else {
     document.querySelector("h1").innerHTML = "ສະເໝີ! 🤝";
}