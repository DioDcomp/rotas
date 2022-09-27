from flask import Flask, render_template, request

app = Flask("__name__")

from flask import render_template

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

app.run(debug=True)