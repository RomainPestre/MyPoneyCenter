# README

## Sommaire
1. Lancement de l'application
2. Initialisation
3. Liste des node_modules ajoutés
4. Tpes d'utilisateurs
5. Principaux problèmes rencontrés
6. Améliorations

## Lancement de l'application
1. Ouvrir le projet `"MyPoneyCenter/back"` dans Eclipse.
2. Faire clic droit sur `"MyPoneyCenter/back/src/main/java/com.example.back/BackApplication"` puis `Run As` `Java Application`.
3. Dans un terminal, aller dans le dossier `"MyPoneyCenter/ui"` et taper la commande `ng serve`.
4. L'application web est disponible à l'adresse [http://localhost:4200/](http://localhost:4200/).
5. La base de données H2 est accessible à l'adresse [http://localhost:8080/h2-console](http://localhost:8080/h2-console). (User Name : sa | Password : )

##Initialisation
1. Se connecter à [la base H2](http://localhost:8080/h2-console). (User Name : sa | Password : SuperUser$MyPoneyCenter)
2. Ajouter un super utilisateur (email : superuser@myponeycenter.com | mot de passe : SuperUser$MyPoneyCenter)
	```
	INSERT INTO user VALUES (0, NULL, NULL, 'superuser@myponeycenter.com', NULL, 'Super', 'License', 'Utilisateur', '22274a49d31a5e3349a644a885580e31e6902150de5547871297ea83da70d078', '0600000000', 4, NULL);
	```
3. Accéder à [l'application web](http://localhost:4200/)
4. Se connecter avec les identifiants du super utilisateur
5. Enjoy !

## Liste des node_modules ajoutés
- bootstrap
- jquery
- js-sha256

## Types d'utilisateurs
### Cavalier
Modifier sa fiche de renseignement pour mettre à jours ses informations de contact
S'inscrire à des cours et connaitre le cheval qu'il va monter

### Super user
Identification : super mot de passe
Rôle : gérer les compte administrateur
Accès après connexion : page de gestion des comptes administrateurs

### Administrateur
Identification : classique
Rôle : accéder aux fonctions d’administration
Accès après connexion : page d'administration

Modifier sa fiche de renseignement pour mettre à jours ses informations de contact

Fonctions d'administration : 
- création de comptes administrateur 
- création de comptes moniteur
- création de fiches cheval

Page d'administration : liste des cavaliers et administrateurs ainsi que leur fiche de renseignement (fonctions de recherche)


### Moniteur
Modifier sa fiche de renseignement pour mettre à jours ses informations de contact
Associer un cheval à un cavalier
Créer et modifier le planning des séance de cours qu'il dispense pour permettre aux cavaliers de s'inscrire
Accès aux personnes inscrites pour les cours, assignation de chevaux, annulation, ajout de cheval

## Principaux problèmes rencontrés
- Mise à jour d'un élément en base de données côté back-end
- Synchronisation TypeScript : attendre le résultat d'une fonction avant de passer à la suite
- Difficulté de gestion des listes en base de données

## Améliorations
Avec plus de temps sur le projet j'aimerais améliorer les points suivants :
- Design : ajout d'images, de couleurs, revoir les marges de chaque élément, avoir un menu plus clair...
- Meilleure prise en compte de l'impossibilité de réaliser certaines actions en affichant des messages informatifs à l'utilisateur ou en rendant certaines actions immpossibles
- Meilleure décurité des actions en anticipant l'apparition d'erreurs
- Restructuration de l'architecture back-end en séparant les services respectifs liés aux utilisateurs, aux cours, aux chevaux...
- Restructuration de l'architecture front-end en répertoriant par sous-dossier les fonctionnalités respectives liées aux utilisateurs, aux cours, aux chevaux...
- Pourquoi pas basculer sur une base de données PostgresSQL