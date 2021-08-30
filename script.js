// Colocamos um evento no body para escutar as teclas digitadas
document.body.addEventListener('keyup', (event) => {
    playSound(event.code.toLowerCase())
})

//colocando um evento de clique ao botão
document.querySelector('.composer button').addEventListener('click', () => {
    let song = document.querySelector('#input').value

    if(song !== ''){
        let songArray = song.split('') //Criamos um array com as teclas digitadas
        playComposition(songArray)
    }
})

//para facilitar deixamos os audios com os mesmos códigos das teclas
function playSound(sound){
    let audioElement = document.querySelector(`#s_${sound}`)//selecionando o elemento de audio
    let keyElement = document.querySelector(`div[data-key="${sound}"]`)//selecionando visualmente a tecla digitada

    //Não aguarda o áudio finalizar para iniciar novamente
    if(audioElement){
        audioElement.currentTime = 0 
        audioElement.play()
    }

    //efeito visual no elemento
    if(keyElement){
        keyElement.classList.add('active')

        setTimeout(() => {
            keyElement.classList.remove('active')
        }, 300)
    }
}

function playComposition(songArray){
    let wait = 0

    //itera sobre o array de teclas digitadas
    for(let songItem of songArray){
        setTimeout(() => {
            playSound(`key${songItem}`)
        }, wait)

        wait += 250
    }
}
