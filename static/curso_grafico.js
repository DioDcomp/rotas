class Curso_Grafico{
    #curso
    #causa
    #data
    #cor
    constructor(curso, causa, data, cor){
        this.#curso = curso
        this.#causa = causa
        this.#data = data
        this.#cor = cor
    }
    
    get getCurso(){
        return this.#curso
    }

    get getCausa(){
        return this.#causa
    }

    get getData(){
        return this.#data
    }

    get getCor(){
        return this.#cor
    }

    get getCreateGrafico(){
        return {
            label: this.#causa,
            backgroundColor: this.#cor,
            borderColor: this.#cor,
            data: this.#data
        }    
    }
}