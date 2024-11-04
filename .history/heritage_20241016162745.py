class Personne :
    def __init__(self, nom, prenom, adresse):
        self.nom = nom
        self.prenom = prenom
        self.adresse = adresse

class Etudiant(Personne) :
    def __init__(self, nom, prenom, note):
        self.note = note