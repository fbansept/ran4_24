class Personne :
    def __init__(self, nom, prenom) -> None:
        self.nom = nom.upper()
        self.prenom = prenom.capitalize()

    def bonjour(self) -> str :
        return f'Bonjour {self.nom} {self.prenom}'

class Etudiant(Personne) :
    def __init__(self, nom, prenom, note):
        super().__init__(nom,prenom)
        self.note = note


john = Etudiant("doe","john",20)


print(john.bonjour())