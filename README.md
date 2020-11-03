# README

## Sommaire
...

## Lancement de l'application
1. Ouvrir le projet `"MyPoneyCenter/back"` dans Eclipse.
2. Faire clic droit sur `"MyPoneyCenter/back/src/main/java/com.example.back/BackApplication"` puis `Run As` `Java Application`.
3. Dans un terminal, aller dans le dossier `"MyPoneyCenter/ui"` et taper la commande `ng serve`.
4. L'application web est disponible à l'adresse [http://localhost:4200/].
5. La base de données H2 est accessible à l'adresse [http://localhost:8080/h2-console]. (User Name : sa | Password : )

## Liste des node_modules ajoutés
- bootstrap
- jquery

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


## Scripts SQL
### Création de la table "user"
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

### Création de la table "session"
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