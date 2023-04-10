// document.querySelector("button").addEventListener("click",handleClick)
//
// function handleClick(){
//   alert("I got clicked!")
// }

let numOfDrumButton = document.querySelectorAll(".drum").length
for(let i = 0; i<numOfDrumButton;i++){

  document.querySelectorAll(".drum")[i].addEventListener("click",function (){
    //alert("I got clicked!")
    //console.log(this)

    //this.style.color="white"
    let buttonInnerHTML = this.innerHTML
    makeSound(buttonInnerHTML)

    buttonAnimation(buttonInnerHTML)

  })

}

document.addEventListener("keypress", function (event) {
  //alert("keyboard is pressed!")
  console.log(event)


  let buttonInnerHTML = event.key;
  makeSound(buttonInnerHTML)

  buttonAnimation(buttonInnerHTML)








})







function makeSound(key) {



  switch(key){
    case "w":
            let tom1 = new Audio('sounds/tom-1.mp3')
            tom1.play()
            break;

    case "a":
            let tom2 = new Audio('sounds/tom-2.mp3')
            tom2.play()
            break;

    case "s":
            let tom3 = new Audio('sounds/tom-3.mp3')
            tom3.play()
            break;


    case "d":
            let tom4 = new Audio('sounds/tom-4.mp3')
            tom4.play()
            break;


    case "j":
            let snare = new Audio('sounds/snare.mp3')
            snare.play()
            break;


    case "k":
            let crash = new Audio('sounds/crash.mp3')
            crash.play()
            break;

    case "l":
            let kick = new Audio('sounds/kick-bass.mp3')
            kick.play()
            break;

    default: console.log(key)
  }



}



function buttonAnimation(currentKey){
  let activeButton = document.querySelector("."+currentKey)
  activeButton.classList.add("pressed")

  setTimeout(function (){
    activeButton.classList.remove("pressed")
  },100)
}




// document.querySelector(".a").addEventListener("click",function (){
//   alert("I got clicked!")
// })
//
// document.querySelector(".s").addEventListener("click",function (){
//   alert("I got clicked!")
// })
//
// document.querySelector(".d").addEventListener("click",function (){
//   alert("I got clicked!")
// })
//
// document.querySelector(".j").addEventListener("click",function (){
//   alert("I got clicked!")
// })
//
// document.querySelector(".k").addEventListener("click",function (){
//   alert("I got clicked!")
// })
//
// document.querySelector(".l").addEventListener("click",function (){
//   alert("I got clicked!")
// })
