class Personne :
    def __init__(self, nom, prenom):
        self.nom = nom.upper()
        self.prenom = prenom.capitalize()

    def bonjour(self) :
        return f'Bonjour {self.nom} {self.prenom}'

class Etudiant(Personne) :
    def __init__(self, nom, prenom, note):
        super().__init__(nom,prenom)
        self.note = note


john.age = 17 = Etudiant("doe","john",20)
john.age = 17


print(john.bonjour())