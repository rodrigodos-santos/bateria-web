//observando o eveto de digitar, keyup(quando solta a tecla)
//essa função recebe os dados do próprios evento
document.body.addEventListener('keyup', (event) => {
    playSound(event.code.toLowerCase())//pegando o código da tecla que foi pressionada
})

//colocando um evento de clique ao botão
document.querySelector('.composer button').addEventListener('click', () => {
    let song = document.querySelector('#input').value //até aqui sabemos o que o usuário digitou no input

    if(song !== ''){
        let songArray = song.split('')// separando cada letra em um item do array
        playComposition(songArray)
    }
})

//para facilitar deixamos os audios com os mesmos códigos das teclas
function playSound(sound){
    let audioElement = document.querySelector(`#s_${sound}`)//selecionando o elemento de som
    let keyElement = document.querySelector(`div[data-key="${sound}"]`)//selecionando visualmente a tecla digitada

    if(audioElement){
        audioElement.currentTime = 0 //caso o audio esteja em execução ele zera o audio e executa novamente
        audioElement.play()
    }

    //caso exista, adicionamos uma classe para estilizar o elemento
    if(keyElement){
        keyElement.classList.add('active')

        setTimeout(() => {
            keyElement.classList.remove('active')
        }, 300)
    }
}

function playComposition(songArray){
    let wait = 0

    // pega o array de teclas digitadas e itera sobre elas tocando o som com um intervalo
    for(let songItem of songArray){
        setTimeout(() => {
            playSound(`key${songItem}`)
        }, wait)

        wait += 250
    }
}