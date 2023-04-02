document.querySelector('.main-link a').addEventListener('click',()=>{
    document.querySelector('.main-link.active').classList.remove('active')
    document.querySelectorAll('.main-link')[1].classList.add('active')
})

async function getImages(){
    response = await fetch('images/1.jpg')
    result = await response.blob();
    img = URL.createObjectURL(result);
    document.querySelector('.imgOne').src = img
}

userId = ''

function postNewBackground(x){
    document.querySelector('main').style.backgroundColor  = x
}
