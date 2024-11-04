from flask import Flask, render_template

app = Flask(__name__)

articles = (
    ("https://placehold.co/600x400?text"), 
    ("article 2"), 
    ("article 3")
)

@app.route("/")
def accueil():
    return render_template("accueil.html", articles = articles)
