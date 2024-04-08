const imageContainer = document.getElementById('imgContainer')
const circleContainer = document.getElementById('circleContainer')
const leftBtn = document.querySelector('.leftBtn')
const rightBtn = document.querySelector('.rightBtn')

let songIndex = 0

const images = [
    {
        image: "img3.jpg"
    },
    {
        image: "img2.jpg"
    },
    {
        image: "img4.jpg"
    },
    {
        image: "img1.jpg"
    },

]

imageSlide()

function imageSlide(){
    const dotOutputs = images.map((e)=>{
        const {image} = e

        return images.indexOf(e) == songIndex ? `<div class="imgContainer" style="background: url(${image})"></div>` : ''
    
    }).join('')

    imageContainer.innerHTML = dotOutputs
    circleContainer.innerHTML = images.map((e)=>{
        return images.indexOf(e) == songIndex ? `<button class="circles" style="background: #f2f2f2" onclick="incrementIndex(${images.indexOf(e)})"></button>` : `<button class="circles" onclick="incrementIndex(${images.indexOf(e)})"></button>`
    }).join('')
}


function incrementIndex(x){
    songIndex = x
    imageSlide()
    // if(x < )
}

leftBtn.addEventListener('click', decreaseIndex)
rightBtn.addEventListener('click', increaseIndex)

function increaseIndex(){
    // songIndex = songIndex <= images.length ? songIndex + 1 : songIndex > images.length  ? 0 : 0
    if(songIndex >= images.length - 1){
        songIndex = 0
        imageSlide()
    }else{
        songIndex++
        imageSlide()
    }
    // songIndex++
    // imageSlide()
}

function decreaseIndex(){

    if(songIndex <= 0){
        songIndex = images.length - 1
        imageSlide()
    }else{
        songIndex--
        imageSlide()
    }

    // songIndex = songIndex < images.length ? songIndex - 1 : 0
    // songIndex--
}

document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     
                                                                         
function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                
                                                                         
function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
                                                                         
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            /* right swipe */ 
            increaseIndex()
        } else {
            /* left swipe */
            decreaseIndex()
        }                       
    } else {
        if ( yDiff > 0 ) {
            /* down swipe */ 
        } else { 
            /* up swipe */
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                             
};
