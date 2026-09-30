// Chargement du SDK Firebase (notifications de la version Web).
// Le module Flutter firebase_core_web insère sinon un script « en ligne »,
// interdit par la politique de sécurité de la page (index.html). Chargé ici
// depuis un fichier du site, il est autorisé ; Flutter détecte
// window.firebase_core et n'insère plus rien.
// Version : celle attendue par firebase_core_web (supportedFirebaseJsSdkVersion).
import * as core from 'https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js';
import * as messaging from 'https://www.gstatic.com/firebasejs/12.19.0/firebase-messaging.js';

window.firebase_core = core;
window.firebase_messaging = messaging;
