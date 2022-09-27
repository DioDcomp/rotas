
// funções relacionadas a causas

const lista_causa_checked = () => {
    return lista_causas_checkbox.filter((causa) => causa.checked)
}

const lista_active_causa = () => {
    lista = []
    lista_auxiliar = lista_causa_checked()
    for(index in lista_auxiliar){
      lista.push(lista_auxiliar[index].value)
    }
    return lista
  }

//#######################################################


// funções relacionadas a períodos

const verifica_periodo = (periodo) => {
    ano = periodo.slice(0, 4)
    semestre = periodo[5]
    if(semestre == 2) return (Number(ano)+1)+".1"
    else return ano+".2"
}

const lista_periodos = () => {
    tamanho = 24
    lista = []
    periodo_atual = "2009.1"
    for(index = 0; index <= tamanho; index++){
        lista[index] = verifica_periodo(periodo_atual)
        periodo_atual = verifica_periodo(periodo_atual)
    }
    return lista
}

const lista_intervalo_periodo = (inicial, final) => {
    lista = lista_periodos()
    indexInicio = lista.indexOf(inicial)
    indexFinal = lista.indexOf(final)
    return lista.slice(indexInicio, indexFinal+1)
}

//#######################################################


// funções relacionadas a curso

const muda_h2_curso = () => {
    switch(curso_selecionado.value){
        case "cc":
            h2_curso.innerText = "Ciência da Computação"
            break
        case "si":
            h2_curso.innerText = "Sistemas de Informação"
            break
        case "ecm":
            h2_curso.innerText = "Engenharia da Computação (M)"
            break
        case "ecv":
            h2_curso.innerText = "Engenharia da Computação (V)"
            break
    }
}

// funções estatísitcas

const media = (lista) => {
    tamanho = lista.length
    soma = 0
    for(index in lista){
        soma+=lista[index]
    }
    if(tamanho == 0){
        return 'erro'
    }else{
        return soma/tamanho
    }
}

const variancia = (lista) => {
    tamanho = lista.length
    soma = 0
    mediaValores = media(lista)
    for(index in lista){
        soma+=(mediaValores-lista[index])**2
    }
    return soma/tamanho
}

const desvio = (n) => n**(1/2)

const indexMaior = (valores) => {
    var valor = 0
    if(valores.length == 0){
        return 0
    }else{
        for(index in valores){
            if(valores[index] >= valor){
                valor = valores[index]
            }
        }
    }
    return valor
}

const indexMenor = (valores) => {
    var valor = valores[0]
    if(valores.length == 0){
        return 0
    }else{
        for(index in valores){
            if(valores[index] <= valor){
                valor = valores[index]
            }
        }
    }
    return valor
}

// função de atualizar tamanho do gráfico

window.addEventListener("resize", () => {
    if(document.documentElement.clientWidth > "1400"){
        main_graphic.style.width = "80"
    }else if(document.documentElement.clientWidth > "600"){
        main_graphic.style.width = "60"
    }else if(document.documentElement.clientWidth > "400"){
        main_graphic.style.width = "40"
    }else if(document.documentElement.clientWidth > "300"){
        main_graphic.style.width = "20"
        main_graphic.style.height = "30"
    }
})