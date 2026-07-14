# 🔴🔵 Mon Hub — Guide d'installation

Ton application perso (Profil, Sport, To-Do, Infos utiles, Courses, Documents, Animes),
à installer sur l'écran d'accueil de ton iPhone, avec des **rappels via le Calendrier**
qui fonctionnent **même téléphone verrouillé et app fermée**.

## 📦 Ce que contient ce dossier

- `index.html` — l'application (tes apps Sport et To-Do sont intégrées à l'identique)
- `manifest.webmanifest` — la fiche d'installation PWA
- `sw.js` — le service worker (installation + usage hors-ligne)
- `icon-180.png`, `icon-192.png`, `icon-512.png` — les icônes de l'appli

⚠️ **Garde les 6 fichiers ensemble**, au même endroit. L'app ne s'installe pas depuis un simple fichier local : il faut la mettre en ligne (HTTPS). Ci-dessous la méthode la plus simple.

---

## 🚀 Étape 1 — Mettre en ligne (GitHub Pages)

Tu utilises déjà GitHub pour ton app Sport, donc c'est le plus simple.

1. Va sur **github.com** → **New repository** → nomme-le par exemple `mon-hub` → coche **Public** → **Create**.
2. Sur la page du repo : **Add file → Upload files**.
3. **Glisse les 6 fichiers** de ce dossier (index.html, manifest.webmanifest, sw.js, et les 3 icônes) → **Commit changes**.
4. Onglet **Settings → Pages** → sous *Branch*, choisis **main** puis **/(root)** → **Save**.
5. Attends ~1 minute, rafraîchis : GitHub affiche ton adresse, du type
   **`https://<ton-pseudo>.github.io/mon-hub/`**

> 💡 Alternative encore plus rapide sans compte technique : va sur **app.netlify.com/drop**, glisse le dossier entier, et tu obtiens une adresse HTTPS instantanément.

---

## 📲 Étape 2 — Installer sur l'écran d'accueil de l'iPhone

1. Ouvre ton adresse dans **Safari** (⚠️ pas Chrome).
2. Touche le bouton **Partager** (le carré avec la flèche ↑).
3. Descends et touche **« Sur l'écran d'accueil »** → **Ajouter**.
4. Ouvre l'appli **depuis sa nouvelle icône** 🔴🔵 (et plus depuis Safari).

---

## 🗓️ Étape 3 — Les rappels (le point important)

Les notifications passent par ton **Calendrier iPhone** : c'est la méthode la plus fiable, elle marche **verrouillé** et **app fermée**, sans compte ni serveur.

**Comment créer un rappel :**
- **Infos utiles** → touche ✏️ sur une note → choisis un rappel *« Chaque semaine »* (ex : poubelles chaque mardi 20h) ou *« Une date précise »* → enregistre → touche **« Ajouter le rappel au calendrier »**.
- **Animes** → sur un anime dont tu as renseigné la **date de prochaine saison**, touche **« Rappel calendrier »**.

**À faire une seule fois :**
- La première fois, iOS demande d'**autoriser l'ajout au Calendrier** → **Autoriser**.
- Vérifie que les alertes du Calendrier sont actives : **Réglages iPhone → Calendrier → (ou Notifications → Calendrier)**.

Le rappel « poubelles » est déjà pré-réglé sur **mardi 20h** en exemple — modifie-le avec tes vrais jours.

---

## 🔐 Tes données

Tout (profil, abonnements, infos, courses, documents, animes) est stocké **localement sur ton iPhone**. Rien n'est envoyé ailleurs.

**Important pour l'app Sport :** comme le hub est une nouvelle adresse, le Sport intégré démarre vide. Va dans son onglet **Réglages → Sauvegarde cloud (Firebase)** et **connecte-toi** : tes données redescendent automatiquement. La To-Do (pas de cloud) repart à zéro dans le hub.

---

## ♻️ Mettre à jour l'app plus tard

Réuploade simplement le nouveau `index.html` au même endroit (GitHub → Upload files → Commit). L'app se met à jour toute seule à la prochaine ouverture.

Bon match ⚽ — Ici c'est Paris.
