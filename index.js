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


