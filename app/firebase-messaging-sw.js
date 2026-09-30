// Notifications de la version Web d'Immo (Firebase Cloud Messaging).
// Ce script tourne en arrière-plan dans le navigateur : il affiche les
// rappels quand l'onglet d'Immo est fermé ou masqué. La configuration
// (valeurs PUBLIQUES du projet Firebase) est passée dans l'adresse du script
// par l'application (lib/services/push_service.dart).
importScripts('https://www.gstatic.com/firebasejs/12.19.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/12.19.0/firebase-messaging-compat.js');

const params = new URL(self.location.href).searchParams;
firebase.initializeApp({
  apiKey: params.get('apiKey'),
  projectId: params.get('projectId'),
  messagingSenderId: params.get('senderId'),
  appId: params.get('appId'),
});
// Les messages portant une notification sont affichés par Firebase ; un clic
// ouvre Immo sur la notification (lien fourni par la fonction send-push).
firebase.messaging();
