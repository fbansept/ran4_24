class Personne :
    def __init__(self, nom, prenom):
        self.nom = nom.upper()
        self.prenom = prenom.capitalize()

    def bonjour(self) -> str :
        return 42

class Etudiant(Personne) :
    def __init__(self, nom, prenom, note):
        super().__init__(nom,prenom)
        self.note = note


john = Etudiant("doe","john",20)


print(john.bonjour())