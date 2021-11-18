const character = document.querySelector('.character img')
const obstacle = document.querySelector('.obstacle img')
const coin = document.querySelector('.coin')

function jump(){
    if(character.classList != 'jump'){
        character.classList.add("jump");

        setTimeout(()=>{
            character.classList.remove("jump");
        }, 400)
    }
}

document.addEventListener("keydown", (event)=> {
    jump();
})

let isJunk = setInterval(function () {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'))
    console.log('top:', characterTop);

    let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue('left'))
    console.log('left:',obstacleLeft);
  
    if ((obstacleLeft <= -230  && obstacleLeft >= -360) && characterTop > 160) {
      alert("Game Over!");
    }
  }, 100);