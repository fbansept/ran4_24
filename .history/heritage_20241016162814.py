class Personne :
    def __init__(self, nom, prenom):
        self.nom = nom
        self.prenom = prenom

class Etudiant(Personne) :
    def __init__(self, nom, prenom, note):
        self.nom = nom
        self.prenom = prenom
        self.note = note