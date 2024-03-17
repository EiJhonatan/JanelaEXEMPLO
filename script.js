let bt = document.querySelector('.botao')
let janela = document.querySelector('.janela')
let fecha = document.querySelector('.fecha')

function abri_janela(){
    janela.style.left = '400px'
    janela.style.top = '10px'

}

function fecha_janela(){
    janela.style.left = '400px'
    janela.style.top = '-500px'

}

bt.addEventListener('click', abri_janela)

fecha.addEventListener('click', fecha_janela)