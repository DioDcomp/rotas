from crypt import methods
from flask import Flask, render_template, request

app = Flask("__name__")

@app.route('/')
@app.route('/login')
def index():
    return render_template('login.html')

@app.route('/autentica', methods=["POST", "GET"])
def autentica():
    usuario = request.form.get("usuario")
    senha = request.form.get("senha")
    entrar = request.form.get("entrar")
    criar = request.form.get("criar")
    if entrar:
        return render_template('dashboard_adm.html', usuario=usuario)
    if criar:
        return render_template('cadastro.html')

@app.route('/grafico/<nome>', methods=["POST", "GET"])
def grafico(nome):
    usuario = nome
    return render_template('dashboard_adm.html', usuario=usuario)

@app.route('/evolucao/<nome>', methods=["POST", "GET"])
def evolucao(nome):
    usuario = nome
    return render_template('evolucao.html', usuario=usuario)

if __name__ == "__main__":
    app.run(host='0.0.0.0', port = '5000')