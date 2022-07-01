# On va au préalable installer les dépendances par défaut - Fait
# On va installer les dépendances redux et react-redux - Fait 
# On va créer notre store
# On crée nos actions - Dans notre exemple on veut interagir avec une API de météo
# Nous créons les reducers adéquats
# On crée un rootReducer (important au cas où au fur et à mesure du developpement de notre application nous avons d'autres reducers à créer)

# Maintenant place à Saga 
# Nous importons le package redux-saga

# Saga a deux fonctions principales : un dit "watcher" qui est une fonction génératrice
 
 # Son rôle consiste pour chaque action que nous voulons executer de les "observer" en retour elle renverra une fonction dîte "worker"

 # La fonction "Worker" fera le travail asynchron (dans notre cas l'appel à l'API)

 # on va créer un dossier saga (juste pour ordonner on aurait pu créer un dossier thunk quand on bossait avec redux-thunk)

 # Le service d'appel à l'API aurait pu être crée dans le fichier saga ca n'a rien à voir avec saga.
 # on le crée juste à part pour un soucis d'organisation du code
 # l'objectif d'utiliser saga c'est de pouvoir gérer les opérations asynchrones de facon plus efficaces comme on l'a fait dans thunk

 # Maintenant il faudrait appliquer notre middleware saga à notre application comme on l'a fait pour thunk
 # C'est tout ce qu'il y'a à faire pour configurer redux-saga

 # En guise d'exercice, ajoutez le service de météo et créez le composant qui affichera la météo

 # Je vous envoi le projet 