# README

## Sommaire
...

## Lancement de l'application
1. Ouvrir le projet `"MyPoneyCenter/back"` dans Eclipse.
2. Faire clic droit sur `"MyPoneyCenter/back/src/main/java/com.example.back/BackApplication"` puis `Run As` `Java Application`.
3. Dans un terminal, aller dans le dossier `"MyPoneyCenter/ui"` et taper la commande `ng serve`.
4. L'application web est disponible � l'adresse [http://localhost:4200/].
5. La base de donn�es H2 est accessible � l'adresse [http://localhost:8080/h2-console]. (User Name : sa | Password : )

## Liste des node_modules ajout�s
- bootstrap
- jquery

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


## Scripts SQL
### Cr�ation de la table "user"
```
create table user (
	id int,
	email varchar(255),
	password varchar(255),
	name varchar(255),
	firstname varchar(255),
	phone varchar(255),
	license varchar(255),
	privileges int
);
```

### Cr�ation de la table "session"
```
create table session (
	id int,
	user_id int,
	token varchar(255),
	date varchar(255)
);
```

### Ajout d'un utilisateur
```
INSERT INTO user VALUES (0, 'pestre@et.esiea.fr', 'Romain', 'License', 'Pestre', '967520ae23e8ee14888bae72809031b98398ae4a636773e18fff917d77679334', '0606060606', 0)

967520ae23e8ee14888bae72809031b98398ae4a636773e18fff917d77679334 = motdepasse
```