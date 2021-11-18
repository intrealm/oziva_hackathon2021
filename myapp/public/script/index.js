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
    if (event.code === 'Space') {
        jump();
      }
})

document.addEventListener("touchstart", touchHandler, false);

function touchHandler(){
    jump()
}

let isJunk = setInterval(function () {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'))
    console.log('top:', characterTop);

    let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue('left'))

    let coinLeft = parseInt(window.getComputedStyle(coin).getPropertyValue('left'));
    console.log("coin left", coinLeft);

  
    if ((obstacleLeft <= -230  && obstacleLeft >= -360) && characterTop > 160) {
      console.log('Game over');
    }

    if((coinLeft <= -70  && coinLeft >= -100) && characterTop < 160){
        console.log('coin hit');
    }
  }, 100);