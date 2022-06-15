# Broken Authentication - OWASP Top 10

## Objectif

Ce git est un projet associé à la vidéo que l'on retrouve au lien suivant : https://youtu.be/e67ofWPodXo

L'objectif est d'illustrer l'authentification cassée avec une application simple et de voir ce que l'on peut mettre en place assez facilement pour se défendre contre cette vulnérabilité très présente sur le Web.

## Appliquer chez vous !

Pour ceux qui ont suivi la vidéo et qui veulent voir l'application de plus près, voici la marche à suivre dans un terminal bash :
1. git clone https://github.com/Chacky1/broken-authentication.git
2. cd frontend
3. npm install
4. ng serve
5. cd ../backend
6. npm install
7. npm install -g nodemon
8. nodemon server.js

Les deux serveurs seront alors lancés et vous pourrez vous amuser à condition de mettre votre chaîne de connexion MongoDB Atlas dans le backend de l'application !