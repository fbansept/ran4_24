from flask import Flask, render_template

app = Flask(__name__)

articles = ("article 1", "article 2", "article 3")

@app.route("/")
def accueil():

    contenu = "<ul>"

    for article in  articles :
        contenu = "<ul>"

    contenu += "</ul>"

    return contenu
