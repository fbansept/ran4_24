class Personne :
    def __init__(self, nom, prenom):
        self.nom = nom
        self.prenom = prenom
        self.adresse = prenom

class Etudiant(Personne) :
    def __init__(self, nom, prenom, note):
        self.note = note