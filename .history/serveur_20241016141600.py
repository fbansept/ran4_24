from flask import Flask, render_template

app = Flask(__name__)

articles = ("article 1", é)

@app.route("/")
def hello_world():
    return render_template("accueil.html")
