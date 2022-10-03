const nome = document.getElementById('nome')

const icon_grafico = document.getElementById("icon_grafico")
icon_grafico.addEventListener('click', () => {
    window.location = "/grafico/"+nome.innerText
})


const evolucao = document.getElementById("evolucao")
evolucao.addEventListener('click', () => {
    window.location = "/evolucao/"+nome.innerText
})