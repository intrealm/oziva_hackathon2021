const character = document.querySelector('.character img')
const obstacle = document.querySelector('.obstacle img')
const coin = document.querySelector('.coin-one img')


function jump(){
    if(character.classList != 'jump'){
        character.classList.add("jump");

        setTimeout(()=>{
            character.classList.remove("jump");
        }, 400)
    }
}

document.addEventListener("keydown", (event)=> {
    event.preventDefault();
    if (e.keyCode == 0 || e.keyCode == 32) {
        jump();
      }
})

document.addEventListener("touchstart", touchHandler, false);

function touchHandler(){
    jump()
}

let isJunk = setInterval(function () {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'))
    // console.log('top:', characterTop);

    let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue('left'))
    // console.log("burger left", obstacleLeft);

    let coinLeft = parseInt(window.getComputedStyle(coin).getPropertyValue('left'));
    // console.log("coin left", coinLeft);

  
    if ((obstacleLeft <= 190   && obstacleLeft >= 100) && characterTop > 800) {
        alert('game over')
    }

    if((coinLeft <= -300  && coinLeft >= -330) && characterTop < 800){
        console.log('coin hit');
    }
  }, 100);