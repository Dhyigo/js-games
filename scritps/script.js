function myScope() {
    let abrir = true
    let tema = 'claro'
    const html = document.querySelector('html')
    const cssVariavel = ['--cor1', '--cor2', '--cor3', '--cor4', '--cor4m', '--cor5']
    const temaEscuro = ['#121212', '#181818', '#202020', '#4B4B4B', '#b8b7b7', '#FFFFFF']
    const temaClaro = ['#FFFFFF', '#F9F9F9', '#E5E5E5', '#b6b6b6', '#636363', '#030303']

    const input = document.querySelector('#caixaTxt')
    const botaoLupa = document.querySelector('#lupa')


    window.addEventListener('resize', function () {
        let menu = document.querySelector('ul#ulMenu')

        if (window.innerWidth >= 768) {
            menu.style.display = 'flex'
        } else {
            menu.style.display = 'none'
        }
    })


    document.addEventListener('click', function (event) {
        const element = event.target;
        console.log(element, element.id);

        if (element.id === 'burguer') {
            const menu = document.getElementById('ulMenu')
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

        if (element.id === 'imgTema') {
            const imglupa = document.querySelector('img#imgLupa')
            const imgtema = document.querySelector('img#imgTema')

            if (tema == 'claro') {
                colocarCor(temaEscuro)
                tema = 'escuro'

            } else {
                colocarCor(temaClaro)
                tema = 'claro'
            }

            imglupa.src = `imagens/search-${tema}.svg`;
            imgtema.src = `imagens/tema-${tema}.svg`;
        }

        if (element.id === 'imgLupa') {
            const pags = ['acao', 'aventura', 'index']
            let pag = input.value.toLowerCase()

            if (pag == 'casa') {
                pag = 'index'
            } else if (pag == 'ação') {
                pag = 'acao'
            }

            if (pags.indexOf(pag) == -1) {
                alert('[ERRO] Página não existe!')

            } else {
                botaoLupa.href = `./${pag}.html`
            }
        }
    });


    function colocarCor(lista) {
        for (let c in cssVariavel) {
            html.style.setProperty(cssVariavel[c], lista[c])
        }
    }
}

myScope()
