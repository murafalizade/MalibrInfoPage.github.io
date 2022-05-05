var i = 0;
var txt = "Join NFT world to earn!";
var speed = 200;

function typeWriter() {
  if (i < txt.length) {
    document.getElementsByClassName("typing_effect")[0].innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    console.log(speed);
  }
  // else{
  //   document.getElementsByClassName("typing_effect")[0].innerHTML.charAt(i) = "";
  //   i--;
  //   setTimeout(typeWriter, speed);
  //   console.log(speed);
  // }
}


setTimeout(typeWriter,300);