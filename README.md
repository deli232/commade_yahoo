# 🚀 Déploiement sur Vercel - Bon de commande

## 📋 Fichiers du projet

```
vercel/
├── index.html    → Page principale
├── style.css     → Styles
├── app.js        → Logique JavaScript
└── config.js     → Configuration API (à modifier)
```

---

## 🔧 ÉTAPE 1 : Déployer le backend (Google Apps Script)

1. Ouvrez votre Google Sheets : `1pMm05dcG7WffCSvaGtHvoagMDdRxKB-JAmizixZP-mk`
2. Extensions → Apps Script
3. Copiez le contenu de **Code_ADAPTED.gs**
4. **Déployer** :
   - Déployer → Nouveau déploiement
   - Type : Application Web
   - **Exécuter en tant que : MOI**
   - **Qui a accès : N'importe qui** ⚠️ IMPORTANT
   - Déployer
5. **Copiez l'URL générée**

---

## 🌐 ÉTAPE 2 : Configurer l'URL API

Dans le fichier **config.js**, remplacez :

```javascript
const API_URL = 'VOTRE_URL_GOOGLE_APPS_SCRIPT_ICI';
```

Par votre URL réelle :

```javascript
const API_URL = 'https://script.google.com/macros/s/AKfycbxxxxx/exec';
```

---

## 📤 ÉTAPE 3 : Déployer sur Vercel

### Méthode 1 : Via Interface Web (Recommandé)

1. Allez sur [vercel.com](https://vercel.com)
2. Créez un compte gratuit (avec GitHub, GitLab ou email)
3. Cliquez sur **"Add New..."** → **"Project"**
4. Uploadez les 4 fichiers du dossier `vercel/` :
   - index.html
   - style.css
   - app.js
   - config.js (avec l'URL configurée)
5. Cliquez sur **"Deploy"**
6. Attendez 30 secondes
7. ✅ Votre site est en ligne !

**URL générée** : `https://votre-projet.vercel.app`

---

### Méthode 2 : Via CLI Vercel

Si vous préférez utiliser le terminal :

```bash
# Installer Vercel CLI
npm install -g vercel

# Aller dans le dossier
cd vercel/

# Déployer
vercel
```

Suivez les instructions à l'écran.

---

## ✅ VÉRIFICATION

1. Ouvrez votre URL Vercel : `https://votre-projet.vercel.app`
2. Testez le formulaire :
   - Ajoutez un produit
   - Soumettez
   - Vérifiez le numéro de commande
3. Vérifiez dans votre Google Sheets (onglet "commande")

---

## 🔐 Mots de passe par défaut

Dans **Code_ADAPTED.gs**, les mots de passe sont :

```
prince2024 → LABO PRINCE IMAGE
safari2024 → LABO SAFARI
shell2024 → LABO SHELL
tsinga2024 → LABO TSINGA
yahoo2024 → LABO YAHOO
mballa2024 → LABO MBALLA 2
admin2024 → TOUS LES LABOS
```

---

## 🎨 Personnalisation

### Changer les couleurs
Modifiez dans **style.css** :
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Ajouter des produits
Modifiez dans **index.html** :
```html
<option>Nouveau produit</option>
```

### Modifier les labos
Modifiez dans **index.html** :
```html
<option>NOUVEAU LABO</option>
```

---

## 🔄 Mise à jour

Pour mettre à jour le site :

1. Modifiez les fichiers localement
2. Allez sur [vercel.com](https://vercel.com) → Votre projet
3. Settings → Git → Reconnect
4. OU uploadez les nouveaux fichiers manuellement

---

## 📊 Avantages Vercel

✅ **Gratuit** pour toujours
✅ **HTTPS automatique**
✅ **CDN mondial** (ultra rapide)
✅ **Déploiement en 30 secondes**
✅ **URL personnalisée** possible
✅ **99.9% uptime**
✅ **Bande passante illimitée**

---

## 🐛 Dépannage

**Problème : "API_URL not configured"**
→ Vérifiez config.js, l'URL doit être correcte

**Problème : "Mot de passe incorrect"**
→ Vérifiez les mots de passe dans Code_ADAPTED.gs

**Problème : Rien ne s'enregistre**
→ Vérifiez que le déploiement Apps Script a "Qui a accès : N'importe qui"

**Problème : CORS Error**
→ Redéployez le backend Apps Script avec les bonnes permissions

---

## 📞 Support

- Documentation Vercel : [vercel.com/docs](https://vercel.com/docs)
- Vérifier les logs : Console du navigateur (F12)

---

**Temps total : 10 minutes** ⚡
