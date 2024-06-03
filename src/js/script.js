//Variáveis
const button_search = document.getElementById('button_search')
const input_search = document.getElementById('search')
const button_theme = document.getElementById('themeSwitcher')
const logo = document.getElementById('logo')
const body = document.querySelector('body')
const root = document.querySelector(':root')

button_search.addEventListener('click', () =>{
    // Evento de click para esvaziar o input ao clicar na lupa
    input_search.value = ""
})

document.getElementById('themeSwitcher').addEventListener('click', () =>{
    // Se o tema estiver como dark, troca para as cores do tema claro
    if(body.dataset.theme === 'dark'){
        logo.src = './src/img/DRM_Light.jpeg'
        root.style.setProperty('--bg-color-1', '#B724FF')
        root.style.setProperty('--bg-color-2', '#FFA0EA')
        root.style.setProperty('--bg-color-3', '#FFA0EA')
        root.style.setProperty('--white', '#000')
        root.style.setProperty('--black', '#fff')
        body.dataset.theme = 'light'
    // Se o tema estiver como light, troca as cores para do tema escuro
    } else{
        logo.src = './src/img/DRM.png'
        root.style.setProperty('--bg-color-1', '#370250')
        root.style.setProperty('--bg-color-2', '#771CA3')
        root.style.setProperty('--bg-color-3', '#860068')
        root.style.setProperty('--white', '#fff')
        root.style.setProperty('--black', '#000')
        body.dataset.theme = 'dark'
    }
})
