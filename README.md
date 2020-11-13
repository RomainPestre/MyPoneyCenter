# README

## Sommaire
1. Lancement de l'application
2. Initialisation
3. Liste des node_modules ajout�s
4. Tpes d'utilisateurs
5. Principaux probl�mes rencontr�s
6. Am�liorations

## Lancement de l'application
1. Ouvrir le projet `"MyPoneyCenter/back"` dans Eclipse.
2. Faire clic droit sur `"MyPoneyCenter/back/src/main/java/com.example.back/BackApplication"` puis `Run As` `Java Application`.
3. Dans un terminal, aller dans le dossier `"MyPoneyCenter/ui"` et taper la commande `ng serve`.
4. L'application web est disponible � l'adresse [http://localhost:4200/](http://localhost:4200/).
5. La base de donn�es H2 est accessible � l'adresse [http://localhost:8080/h2-console](http://localhost:8080/h2-console). (User Name : sa | Password : )

##Initialisation
1. Se connecter � [la base H2](http://localhost:8080/h2-console). (User Name : sa | Password : SuperUser$MyPoneyCenter)
2. Ajouter un super utilisateur (email : superuser@myponeycenter.com | mot de passe : SuperUser$MyPoneyCenter)
	```
	INSERT INTO user VALUES (0, NULL, NULL, 'superuser@myponeycenter.com', NULL, 'Super', 'License', 'Utilisateur', '22274a49d31a5e3349a644a885580e31e6902150de5547871297ea83da70d078', '0600000000', 4, NULL);
	```
3. Acc�der � [l'application web](http://localhost:4200/)
4. Se connecter avec les identifiants du super utilisateur
5. Enjoy !

## Liste des node_modules ajout�s
- bootstrap
- jquery
- js-sha256

## Types d'utilisateurs
### Cavalier
Modifier sa fiche de renseignement pour mettre � jours ses informations de contact
S'inscrire � des cours et connaitre le cheval qu'il va monter

### Super user
Identification : super mot de passe
R�le : g�rer les compte administrateur
Acc�s apr�s connexion : page de gestion des comptes administrateurs

### Administrateur
Identification : classique
R�le : acc�der aux fonctions d�administration
Acc�s apr�s connexion : page d'administration

Modifier sa fiche de renseignement pour mettre � jours ses informations de contact

Fonctions d'administration : 
- cr�ation de comptes administrateur 
- cr�ation de comptes moniteur
- cr�ation de fiches cheval

Page d'administration : liste des cavaliers et administrateurs ainsi que leur fiche de renseignement (fonctions de recherche)


### Moniteur
Modifier sa fiche de renseignement pour mettre � jours ses informations de contact
Associer un cheval � un cavalier
Cr�er et modifier le planning des s�ance de cours qu'il dispense pour permettre aux cavaliers de s'inscrire
Acc�s aux personnes inscrites pour les cours, assignation de chevaux, annulation, ajout de cheval

## Principaux probl�mes rencontr�s
- Mise � jour d'un �l�ment en base de donn�es c�t� back-end
- Synchronisation TypeScript : attendre le r�sultat d'une fonction avant de passer � la suite
- Difficult� de gestion des listes en base de donn�es

## Am�liorations
Avec plus de temps sur le projet j'aimerais am�liorer les points suivants :
- Design : ajout d'images, de couleurs, revoir les marges de chaque �l�ment, avoir un menu plus clair...
- Meilleure prise en compte de l'impossibilit� de r�aliser certaines actions en affichant des messages informatifs � l'utilisateur ou en rendant certaines actions immpossibles
- Meilleure d�curit� des actions en anticipant l'apparition d'erreurs
- Restructuration de l'architecture back-end en s�parant les services respectifs li�s aux utilisateurs, aux cours, aux chevaux...
- Restructuration de l'architecture front-end en r�pertoriant par sous-dossier les fonctionnalit�s respectives li�es aux utilisateurs, aux cours, aux chevaux...
- Pourquoi pas basculer sur une base de donn�es PostgresSQL