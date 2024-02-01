const myElement = document.getElementById("change-color");

myElement.addEventListener("click", function () {
  const posts = document.getElementsByClassName("post_content");
  console.log(posts);
   [...posts].forEach(post=>post.style.background = 
 ` rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`);
});


// function changeColor(){
//   const myElement = document.getElementById('change-color');
//   myElement.style.background = "rgb(100, 100, 100)";
// }

// const posts = document.getElementsByClassName("post_content");
// [...posts].forEach(card=>{
//   const changeButton=card.getElementById("change-color");
//   changeButton.addEventListener("click",e=>{
//     card.style.background = "rgb(100, 100, 100)";
//   })
// })
