const feux1 = document.querySelector(".lumière1")
const feux2 = document.querySelector(".div2")
const feux3 = document.querySelector(".div3")
const feux4 = document.querySelector(".div4")
const lumière = document.querySelectorAll(".feux")


// setInterval(()=>{
  
//   setTimeout(()=>{
//    feux1.classList.toggle('vert')
//     },1000)
    
//   setTimeout(()=>{
//     feux2.classList.toggle('vert')
//     },2000)
    
//   setTimeout(()=>{
//     feux3.classList.toggle('vert')
//     },3000)

//   setTimeout(()=>{
//     feux4.classList.toggle('vert')
//     },4000)
// },4000)

  let counter = 0 
  setInterval(()=>{
      lumière[counter%lumière.length].children[0].classList.toggle('vert')
      lumière[counter%lumière.length].children[1].classList.toggle('vert')
      counter++
  },1000)
