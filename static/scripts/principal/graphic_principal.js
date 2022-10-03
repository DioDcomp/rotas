const url = 'https://icausas.herokuapp.com/curso/'

fetch(url+"curso").then(response => {
  response.json().then(information => {

    const search_dados = (curso, causa) => {
      lista_dados = []
      lista_aux_periodos = lista_intervalo_periodo(periodo_inicial.value, periodo_final.value)
      for(index in lista_aux_periodos){
        if(information[curso][lista_aux_periodos[index]][causa] == null){
          lista_dados.push(0)
        }else{
          lista_dados.push(information[curso][lista_aux_periodos[index]][causa])
        }
      }
      return lista_dados
    }

    const gera_grafico = (curso, causa, cor) => {
      dados = search_dados(curso, causa)
      objeto_dado = new Curso_Grafico(curso, causa, dados, cor)
      data.datasets.push(objeto_dado.getCreateGrafico)
    }

    const gera_all_grafico_curso = (curso) => {
      data.datasets = []
      lista_aux_cores = lista_cores
      lista_aux_causas = lista_active_causa()
      for(index in lista_aux_causas){
        gera_grafico(curso, lista_aux_causas[index], lista_aux_cores[index])
      }
    }

    const gera_all_informations_media = () => {
      lista_aux_causas = lista_active_causa()
      lista_medias = lista_media
      for(element in lista_medias){
        lista_medias[element].innerText = 0
      }
      for(index in lista_aux_causas){
        for(element in lista_medias){
          if(lista_medias[element].value == lista_aux_causas[index]){
            lista_medias[element].innerText = media(data.datasets[index].data).toFixed(2)
          }
        }
      }
    }

    const gera_all_informations_desvio = () => {
      lista_aux_causas = lista_active_causa()
      lista_desvios = lista_desvio
      for(element in lista_desvios){
        lista_desvios[element].innerText = 0
      }
      for(index in lista_aux_causas){
        for(element in lista_desvios){
          if(lista_desvios[element].value == lista_aux_causas[index]){
            lista_desvios[element].innerText = desvio(variancia(data.datasets[index].data)).toFixed(2)
          }
        }
      }
    }

    const gera_all_informations_maior = () => {
      lista_aux_causas = lista_active_causa()
      lista_maiores = lista_maior
      for(element in lista_maiores){
        lista_maiores[element].innerText = 0
      }
      for(index in lista_aux_causas){
        for(element in lista_maiores){
          if(lista_maiores[element].value == lista_aux_causas[index]){
            lista_maiores[element].innerText = indexMaior(data.datasets[index].data).toFixed(2)
          }
        }
      }
    }

    const gera_all_informations_menor = () => {
      lista_aux_causas = lista_active_causa()
      lista_menores = lista_menor
      for(element in lista_menores){
        lista_menores[element].innerText = 0
      }
      for(index in lista_aux_causas){
        for(element in lista_menores){
          if(lista_menores[element].value == lista_aux_causas[index]){
            lista_menores[element].innerText = indexMenor(data.datasets[index].data).toFixed(2)
          }
        }
      }
    }

    const maior_periodo = (causa) => {
      intervalo_periodos = lista_intervalo_periodo(periodo_inicial.value, periodo_final.value)
      lista_aux_dados = []
      for(index in intervalo_periodos){
        lista_aux_dados.push(information[curso_selecionado.value][intervalo_periodos[index]][causa])
      }
      return intervalo_periodos[lista_aux_dados.indexOf(indexMaior(lista_aux_dados))]
    }

    const gera_all_informations_periodo_maior = () => {
      intervalo_periodos = lista_intervalo_periodo(periodo_inicial.value, periodo_final.value)
      lista_aux_periodos = lista_periodo_maior
      lista_aux_causas = lista_active_causa()
      for(element in lista_aux_periodos){
        lista_aux_periodos[element].innerText = 0
      }
      for(index in lista_aux_causas){
        for(element in lista_aux_periodos){
          if(lista_aux_periodos[element].value == lista_aux_causas[index]){
            lista_aux_periodos[element].innerText = maior_periodo(lista_aux_periodos[element].value)
          }
        }
      }
    }

    const menor_periodo = (causa) => {
      intervalo_periodos = lista_intervalo_periodo(periodo_inicial.value, periodo_final.value)
      lista_aux_dados = []
      for(index in intervalo_periodos){
        lista_aux_dados.push(information[curso_selecionado.value][intervalo_periodos[index]][causa])
      }
      return intervalo_periodos[lista_aux_dados.indexOf(indexMenor(lista_aux_dados))]
    }

    const gera_all_informations_periodo_menor = () => {
      intervalo_periodos = lista_intervalo_periodo(periodo_inicial.value, periodo_final.value)
      lista_aux_periodos = lista_periodo_menor
      lista_aux_causas = lista_active_causa()
      for(element in lista_aux_periodos){
        lista_aux_periodos[element].innerText = 0
      }
      for(index in lista_aux_causas){
        for(element in lista_aux_periodos){
          if(lista_aux_periodos[element].value == lista_aux_causas[index]){
            lista_aux_periodos[element].innerText = menor_periodo(lista_aux_periodos[element].value)
          }
        }
      }
    }

    const intervalo_periodo_curso = (curso) => {
      lista = []
      for(index in information[curso]){
        lista.push(index)
      }
      return lista
    }

    const validate_periodo = () => {
      lista_aux_periodos = intervalo_periodo_curso(curso_selecionado.value)
      lista_periodos_selecionados = lista_intervalo_periodo(periodo_inicial.value, periodo_final.value)
      menor_aux_periodo = lista_aux_periodos[0]
      menor_selecionado = lista_periodos_selecionados[0]
      if(lista_periodos_selecionados.indexOf(menor_aux_periodo) > lista_periodos_selecionados.indexOf(menor_selecionado)){
        return false
      }
      return true 
    }

    const menor_data_possivel = () => {
      lista_aux_periodos = intervalo_periodo_curso(curso_selecionado.value)
      return lista_aux_periodos[0]
    } 

    const validade_intervalo_periodo = () => {
      lista_aux_periodos = intervalo_periodo_curso(curso_selecionado.value)
      if(lista_aux_periodos.indexOf(periodo_inicial.value) > lista_aux_periodos.indexOf(periodo_final.value)){
        return false
      }
      return true
    }

    const update = () => {
      myChart.destroy()
      if(validate_periodo() && validade_intervalo_periodo()){
        h2_curso.innerText = ""
        muda_h2_curso()
        data.labels = lista_intervalo_periodo(periodo_inicial.value, periodo_final.value)
        gera_all_grafico_curso(curso_selecionado.value)
        gera_all_informations_media()
        gera_all_informations_desvio()
        gera_all_informations_maior()
        gera_all_informations_menor()
        gera_all_informations_periodo_maior()
        gera_all_informations_periodo_menor()
        periodo_inicial.style.border = ""
        periodo_final.style.border = ""
        myChart = new Chart(document.getElementById('main_graphic'),config)
      }else{
        if(validade_intervalo_periodo() == false){
          alert('Erro na seleção de data, período inicial maior que o final')
        }else{
          alert('Erro na seleção de data, menor data possível: '+menor_data_possivel())
        }
        periodo_inicial.style.border = "2px solid red"
        periodo_final.style.border = "2px solid red"
        h2_curso.innerText = h2_curso.innerText + " - (Desatualizado)"
      }
        
    }

    create.addEventListener('click', update)
  
    var data = {
        labels: [],
        datasets: []
    }
  
    var config = {type: 'line',data: data, options: {}}
  
    var myChart = new Chart(document.getElementById('main_graphic'),config)

  })
})