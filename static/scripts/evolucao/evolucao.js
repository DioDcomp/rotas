const url = 'https://icausas.herokuapp.com/curso/'

const select_materia = document.getElementById("select_materia")
const list_materias = document.getElementById("list_materias")
const inicial_periodo = document.getElementById("inicial_periodo")
const final_periodo = document.getElementById("final_periodo")
const lista_materia = document.getElementById("list_materias")
const select_curso = document.getElementById("select_curso")
const select_causa = document.getElementById("select_causa")
const list_causa = document.getElementById("list_causa")


fetch(url+"desempenho").then(response => {
    response.json().then(information => {

        const lista_de_materias = () => {
            lista_materia.innerHTML = ""
            for(materia in information[select_curso.value]["2018.2"]){
                lista_materia.innerHTML = lista_materia.innerHTML +
                "<div class='materias'>"+ 
                "<input type='checkbox' name="+materia+" id="+materia+
                "><label for="+materia+
                " id="+"nome_"+materia+">"+materia+"</label><div>"
            }
        }

        const lista_de_causas = () => {
            list_causa.innerHTML = ""
            for(causas in information[select_curso.value]["2018.2"]["pf"]){
                list_causa.innerHTML = list_causa.innerHTML + 
                "<div class='causas'>"+
                "<input type='checkbox' name="+causas+" id="+causas+
                "><label for="+causas+
                " id="+"nome_"+causas+">"+causas+"</label></div>"
            }
        }

        const lista_periodos = () => {
            inicial_periodo.innerHTML = ""
            final_periodo.innerHTML = ""
            for(data in information[select_curso.value]){
                inicial_periodo.innerHTML = inicial_periodo.innerHTML + "<option id="+data+">"+data+"</option>"
            }
            for(data in information[select_curso.value]){
                final_periodo.innerHTML = final_periodo.innerHTML + "<option id="+data+">"+data+"</option>"
            }
        }

        select_curso.addEventListener("click", () => {
            lista_de_materias()
            lista_periodos()
            lista_de_causas()
        })

        select_materia.addEventListener("click", () => {
            if(list_materias.style.zIndex == 1){
                list_materias.style.zIndex = -1
            }else{
                list_materias.style.zIndex = 1
            }
        })
        
        inicial_periodo.addEventListener("click", () => {

        })
        
        final_periodo.addEventListener("click", () => {

        })

        select_causa.addEventListener("click", () => {
            if(list_causa.style.zIndex == 1){
                list_causa.style.zIndex = -1
            }else{
                list_causa.style.zIndex = 1
            }
        })

    })
})