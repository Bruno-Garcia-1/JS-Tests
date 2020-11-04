
function load(){
    
    let msg = document.getElementById('msg')
    let image = document.getElementById('image')
    let date = new Date()
    let hour = date.getHours()
    let minutes = date.getMinutes()
    msg.innerHTML = `Agora são ${hour} horas e ${minutes} minutos.`


    if(hour >= 0 && hour < 12){
        //Bom dia
        image.src = 'img/manha.png'
        document.body.style.background = '#e2cd9f'
    }else if (hour >=12 && hour <= 18){
        //Boa tarde
        image.src = 'img/tarde.jpg'
        document.body.style.background = '#b9846f'
    }else {
        //Boa noite
        image.src = 'img/noite.jpg'
        document.body.style.background = '#515154'
    }

    
}


