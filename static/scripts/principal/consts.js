//constantes de gráfico
const main_graphic = document.getElementById("main_graphic")

//constante de curso no h2
const h2_curso = document.getElementById("h2_curso")

//botão create gráfico
const create = document.getElementById("create")

//constantes de checkbox de cursos
const curso_selecionado = document.getElementById("curso_selecionado")

//constantes de checkbox de causas
const taxa_de_evasao = document.getElementById("TaxadeEvasao")
const total_de_evadidos = document.getElementById("TotaldeEvadidos")
const dispensado_periodo_anterior = document.getElementById("DispensadosPeriodoAnterior")
const trancados_periodo_anterior = document.getElementById("TrancadosPeriodoAnterior")
const matriculados_global_periodo_anterior = document.getElementById("MatriculadosGlobalPeriodoAnterior")
const matriculados_periodo_anterior = document.getElementById("MatriculadosPeriodoAnterior")
const retidos = document.getElementById("Retidos")
const taxa_de_retencao = document.getElementById("TaxadeRetencao")
const matriculados = document.getElementById("Matriculados")
const lista_causas_checkbox = [taxa_de_evasao,taxa_de_retencao,total_de_evadidos,dispensado_periodo_anterior,trancados_periodo_anterior,matriculados,matriculados_global_periodo_anterior,matriculados_periodo_anterior,retidos]

//constantes de períodos
const periodo_inicial = document.getElementById("periodo_inicial")
const periodo_final = document.getElementById("periodo_final")

//cores dos dados
const lista_cores = ['lime', 'dodgerblue', 'red', 'purple', 'yellow', 'pink', 'orange', 'violet', 'anil']

//constantes médias estatísticas

const media_taxa_evasao = document.getElementById('media_taxa_evasao')
const media_total_evadidos = document.getElementById('media_total_evadidos')
const media_dispensados_periodos_anterior = document.getElementById('media_dispensados_periodos_anterior')
const media_trancados_periodo_anterior = document.getElementById('media_trancados_periodo_anterior')
const media_matriculados_global_periodo_anterior = document.getElementById('media_matriculados_global_periodo_anterior')
const media_matriculados_periodo_anterior = document.getElementById('media_matriculados_periodo_anterior')
const media_retidos = document.getElementById('media_retidos')
const media_taxa_retencao = document.getElementById('media_taxa_retencao')
const media_matriculados = document.getElementById('media_matriculados')
media_taxa_evasao.value = "TaxadeEvasao"
media_total_evadidos.value = "TotaldeEvadidos"
media_dispensados_periodos_anterior.value = "DispensadosPeriodoAnterior"
media_trancados_periodo_anterior.value = "TrancadosPeriodoAnterior"
media_matriculados_global_periodo_anterior.value = "MatriculadosGlobalPeriodoAnterior"
media_matriculados_periodo_anterior.value = "MatriculadosPeriodoAnterior"
media_retidos.value = "Retidos"
media_taxa_retencao.value = "TaxadeRetencao"
media_matriculados.value = "Matriculados" 
const lista_media = [media_taxa_evasao, media_total_evadidos, media_dispensados_periodos_anterior, media_trancados_periodo_anterior, media_matriculados_global_periodo_anterior, media_matriculados_periodo_anterior, media_retidos, media_taxa_retencao, media_matriculados]

//constantes desvio padrão

const desvio_taxa_evasao = document.getElementById('desvio_taxa_evasao')
const desvio_total_evadidos = document.getElementById('desvio_total_evadidos')
const desvio_dispensados_periodos_anterior = document.getElementById('desvio_dispensados_periodos_anterior')
const desvio_trancados_periodo_anterior = document.getElementById('desvio_trancados_periodo_anterior')
const desvio_matriculados_global_periodo_anterior = document.getElementById('desvio_matriculados_global_periodo_anterior')
const desvio_matriculados_periodo_anterior = document.getElementById('desvio_matriculados_periodo_anterior')
const desvio_retidos = document.getElementById('desvio_retidos')
const desvio_taxa_retencao = document.getElementById('desvio_taxa_retencao')
const desvio_matriculados = document.getElementById('desvio_matriculados')
desvio_taxa_evasao.value = "TaxadeEvasao"
desvio_total_evadidos.value = "TotaldeEvadidos"
desvio_dispensados_periodos_anterior.value = "DispensadosPeriodoAnterior"
desvio_trancados_periodo_anterior.value = "TrancadosPeriodoAnterior"
desvio_matriculados_global_periodo_anterior.value = "MatriculadosGlobalPeriodoAnterior"
desvio_matriculados_periodo_anterior.value = "MatriculadosPeriodoAnterior"
desvio_retidos.value = "Retidos"
desvio_taxa_retencao.value = "TaxadeRetencao"
desvio_matriculados.value = "Matriculados" 
const lista_desvio = [desvio_taxa_evasao, desvio_total_evadidos, desvio_dispensados_periodos_anterior, desvio_trancados_periodo_anterior, desvio_matriculados_global_periodo_anterior, desvio_matriculados_periodo_anterior, desvio_retidos, desvio_taxa_retencao, desvio_matriculados]

//constantes maiores

const maior_taxa_evasao = document.getElementById('maior_taxa_evasao')
const maior_total_evadidos = document.getElementById('maior_total_evadidos')
const maior_dispensados_periodos_anterior = document.getElementById('maior_dispensados_periodos_anterior')
const maior_trancados_periodo_anterior = document.getElementById('maior_trancados_periodo_anterior')
const maior_matriculados_global_periodo_anterior = document.getElementById('maior_matriculados_global_periodo_anterior')
const maior_matriculados_periodo_anterior = document.getElementById('maior_matriculados_periodo_anterior')
const maior_retidos = document.getElementById('maior_retidos')
const maior_taxa_retencao = document.getElementById('maior_taxa_retencao')
const maior_matriculados = document.getElementById('maior_matriculados')
maior_taxa_evasao.value = "TaxadeEvasao"
maior_total_evadidos.value = "TotaldeEvadidos"
maior_dispensados_periodos_anterior.value = "DispensadosPeriodoAnterior"
maior_trancados_periodo_anterior.value = "TrancadosPeriodoAnterior"
maior_matriculados_global_periodo_anterior.value = "MatriculadosGlobalPeriodoAnterior"
maior_matriculados_periodo_anterior.value = "MatriculadosPeriodoAnterior"
maior_retidos.value = "Retidos"
maior_taxa_retencao.value = "TaxadeRetencao"
maior_matriculados.value = "Matriculados" 
const lista_maior = [maior_taxa_evasao, maior_total_evadidos, maior_dispensados_periodos_anterior, maior_trancados_periodo_anterior, maior_matriculados_global_periodo_anterior, maior_matriculados_periodo_anterior, maior_retidos, maior_taxa_retencao, maior_matriculados]

//constantes menores

const menor_taxa_evasao = document.getElementById('menor_taxa_evasao')
const menor_total_evadidos = document.getElementById('menor_total_evadidos')
const menor_dispensados_periodos_anterior = document.getElementById('menor_dispensados_periodos_anterior')
const menor_trancados_periodo_anterior = document.getElementById('menor_trancados_periodo_anterior')
const menor_matriculados_global_periodo_anterior = document.getElementById('menor_matriculados_global_periodo_anterior')
const menor_matriculados_periodo_anterior = document.getElementById('menor_matriculados_periodo_anterior')
const menor_retidos = document.getElementById('menor_retidos')
const menor_taxa_retencao = document.getElementById('menor_taxa_retencao')
const menor_matriculados = document.getElementById('menor_matriculados')
menor_taxa_evasao.value = "TaxadeEvasao"
menor_total_evadidos.value = "TotaldeEvadidos"
menor_dispensados_periodos_anterior.value = "DispensadosPeriodoAnterior"
menor_trancados_periodo_anterior.value = "TrancadosPeriodoAnterior"
menor_matriculados_global_periodo_anterior.value = "MatriculadosGlobalPeriodoAnterior"
menor_matriculados_periodo_anterior.value = "MatriculadosPeriodoAnterior"
menor_retidos.value = "Retidos"
menor_taxa_retencao.value = "TaxadeRetencao"
menor_matriculados.value = "Matriculados" 
const lista_menor = [menor_taxa_evasao, menor_total_evadidos, menor_dispensados_periodos_anterior, menor_trancados_periodo_anterior, menor_matriculados_global_periodo_anterior, menor_matriculados_periodo_anterior, menor_retidos, menor_taxa_retencao, menor_matriculados]

//constantes maior periodo

const periodo_maior_taxa_evasao = document.getElementById('periodo_maior_taxa_evasao')
const periodo_maior_total_evadidos = document.getElementById('periodo_maior_total_evadidos')
const periodo_maior_dispensados_periodos_anterior = document.getElementById('periodo_maior_dispensados_periodos_anterior')
const periodo_maior_trancados_periodo_anterior = document.getElementById('periodo_maior_trancados_periodo_anterior')
const periodo_maior_matriculados_global_periodo_anterior = document.getElementById('periodo_maior_matriculados_global_periodo_anterior')
const periodo_maior_matriculados_periodo_anterior = document.getElementById('periodo_maior_matriculados_periodo_anterior')
const periodo_maior_retidos = document.getElementById('periodo_maior_retidos')
const periodo_maior_taxa_retencao = document.getElementById('periodo_maior_taxa_retencao')
const periodo_maior_matriculados = document.getElementById('periodo_maior_matriculados')
periodo_maior_taxa_evasao.value = "TaxadeEvasao"
periodo_maior_total_evadidos.value = "TotaldeEvadidos"
periodo_maior_dispensados_periodos_anterior.value = "DispensadosPeriodoAnterior"
periodo_maior_trancados_periodo_anterior.value = "TrancadosPeriodoAnterior"
periodo_maior_matriculados_global_periodo_anterior.value = "MatriculadosGlobalPeriodoAnterior"
periodo_maior_matriculados_periodo_anterior.value = "MatriculadosPeriodoAnterior"
periodo_maior_retidos.value = "Retidos"
periodo_maior_taxa_retencao.value = "TaxadeRetencao"
periodo_maior_matriculados.value = "Matriculados" 
const lista_periodo_maior = [periodo_maior_taxa_evasao, periodo_maior_total_evadidos, periodo_maior_dispensados_periodos_anterior, periodo_maior_trancados_periodo_anterior, periodo_maior_matriculados_global_periodo_anterior, periodo_maior_matriculados_periodo_anterior, periodo_maior_retidos, periodo_maior_taxa_retencao, periodo_maior_matriculados]

//constantes menor periodo

const periodo_menor_taxa_evasao = document.getElementById('periodo_menor_taxa_evasao')
const periodo_menor_total_evadidos = document.getElementById('periodo_menor_total_evadidos')
const periodo_menor_dispensados_periodos_anterior = document.getElementById('periodo_menor_dispensados_periodos_anterior')
const periodo_menor_trancados_periodo_anterior = document.getElementById('periodo_menor_trancados_periodo_anterior')
const periodo_menor_matriculados_global_periodo_anterior = document.getElementById('periodo_menor_matriculados_global_periodo_anterior')
const periodo_menor_matriculados_periodo_anterior = document.getElementById('periodo_menor_matriculados_periodo_anterior')
const periodo_menor_retidos = document.getElementById('periodo_menor_retidos')
const periodo_menor_taxa_retencao = document.getElementById('periodo_menor_taxa_retencao')
const periodo_menor_matriculados = document.getElementById('periodo_menor_matriculados')
periodo_menor_taxa_evasao.value = "TaxadeEvasao"
periodo_menor_total_evadidos.value = "TotaldeEvadidos"
periodo_menor_dispensados_periodos_anterior.value = "DispensadosPeriodoAnterior"
periodo_menor_trancados_periodo_anterior.value = "TrancadosPeriodoAnterior"
periodo_menor_matriculados_global_periodo_anterior.value = "MatriculadosGlobalPeriodoAnterior"
periodo_menor_matriculados_periodo_anterior.value = "MatriculadosPeriodoAnterior"
periodo_menor_retidos.value = "Retidos"
periodo_menor_taxa_retencao.value = "TaxadeRetencao"
periodo_menor_matriculados.value = "Matriculados" 
const lista_periodo_menor = [periodo_menor_taxa_evasao, periodo_menor_total_evadidos, periodo_menor_dispensados_periodos_anterior, periodo_menor_trancados_periodo_anterior, periodo_menor_matriculados_global_periodo_anterior, periodo_menor_matriculados_periodo_anterior, periodo_menor_retidos, periodo_menor_taxa_retencao, periodo_menor_matriculados]