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
            print(element_actuel.valeur)
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

        


    # retourner une nouvelle liste qui contient les éléments de index_debut à index_fin
    def sous_liste(self, index_debut, index_fin) :
        
        nouvelle_liste = Liste()

        element_actuel = self.premier_element

        index_actuel = 0



        while index_actuel <= index_fin and element_actuel != None:
            
    
                nouvelle_liste.ajout(element_actuel.valeur)

            element_actuel = element_actuel.suivant
            index_actuel += 1

        return nouvelle_liste

    #      #map                                    callback    ->   une variable peut contenir une fonction
    # def appliquer_un_traitement_sur_chacun(self, ?????) :
    #     pass

ma_liste = Liste()
ma_liste.ajout("A") #0
ma_liste.ajout("B") #1
ma_liste.ajout("C") #2
ma_liste.ajout("D") #3
ma_liste.ajout("E") #4
ma_liste.ajout("F") #5

sous_liste = ma_liste.sous_liste(2,10)

sous_liste.afficher_tout() # C D E

