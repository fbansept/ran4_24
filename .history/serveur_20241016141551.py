from flask import Flask, render_template

app = Flask(__name__)

articles = ()

@app.route("/")
def hello_world():
    return render_template("accueil.html")
