class Element :
    def __init__(self, valeur):
        self.valeur = valeur
        self.suivant = None


class Liste :
    def __init__(self):
        self.premier_element = None
        self.dernier_element = None

    def ajout(self, valeur_element) :
        nouvel_element = Element(valeur_element)

        if self.premier_element == None :
            self.premier_element = nouvel_element
        else : 
            self.dernier_element.suivant = nouvel_element

        self.dernier_element = nouvel_element

    def afficher_tout(self) :

        element_actuel = self.premier_element
        
        while element_actuel != None :
            element_actuel = element_actuel.suivant
        
    def supprimer_dernier(self) :
        element_actuel = self.premier_element
        
        while element_actuel.suivant != self.dernier_element :
            element_actuel = element_actuel.suivant

        element_actuel.suivant = None
        self.dernier_element = element_actuel

    def supprimer_element(self, index_element_a_supprimer) :

        element_actuel = self.premier_element
        compteur = 0
        
        while compteur != index_element_a_supprimer - 1 :
            element_actuel = element_actuel.suivant
            compteur += 1

        element_actuel.suivant = element_actuel.suivant.suivant

        

    # retourner une nouvelle liste qui contient les élément de index_debut à index_fin
    def sous_tableau(self, index_debut, index_fin) :
        
        