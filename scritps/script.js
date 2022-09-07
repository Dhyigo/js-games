let abrir = true
let tema = 'claro'
let html = document.querySelector('html')
let cssVariavel = ['--cor1', '--cor2', '--cor3', '--cor4', '--cor4m', '--cor5']
let temaEscuro = ['#121212', '#181818', '#202020', '#4B4B4B', '#b8b7b7', '#FFFFFF']
let temaClaro = ['#FFFFFF', '#F9F9F9', '#E5E5E5', '#b6b6b6', '#636363', '#030303']

let input = document.querySelector('#caixaTxt')
let berguer = document.querySelector('#burguer')
let botaoLupa = document.querySelector('#lupa')
let botaoTema = document.querySelector('#botaoTema')


berguer.addEventListener('click', mostrarMenu)
botaoTema.addEventListener('click', mudarTema)
botaoLupa.addEventListener('click', pesquisar)

function pesquisar() {
    let pags = ['acao', 'aventura', 'index']

    if (input.value == 'casa') {
        input.value = 'index'
    } 
    
    if (pags.indexOf(input.value) == -1) {
        alert('[ERRO] Página não existe!')

    } else {
        botaoLupa.href = `./${input.value}.html`
    }
    value.value = ''
}

function colocarCor(lista) {
    for (let c in cssVariavel) {
        html.style.setProperty(cssVariavel[c], lista[c])
    }
}

function mudarTema () {
    let imglupa = document.querySelector('img#imgLupa')
    let imgtema = document.querySelector('img#imgTema')

    if (tema == 'claro') {
        colocarCor(temaEscuro)
        tema = 'escuro'
    } else {
        colocarCor(temaClaro)
        tema = 'claro'
    }

    imglupa.src = `imagens/search-${tema}.svg`
    imgtema.src = `imagens/tema-${tema}.svg`

}

function mostrarMenu() {
    let menu = document.getElementById('ulMenu')
    let display = ''

    if (abrir) {
        display = 'block'
        abrir = false
        
    } else {
        display = 'none'
        abrir = true
    }

    menu.style.display = display
}