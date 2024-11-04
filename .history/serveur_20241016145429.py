from flask import Flask, render_template

app = Flask(__name__)

articles = (
    ("https://placehold.co/600x400?text=natation", "natation", " Finale 400m 4 nages (H) | Natation | Jeux Olympiques de Paris 2024"), 
    ("article 2"), 
    ("article 3")
)

@app.route("/")
def accueil():
    return render_template("accueil.html", articles = articles)
