<<<<<<< HEAD
# Configuration du Formulaire de Contact - Netlify + Gmail

## ✅ Configuration Effectuée

Le formulaire de contact a été configuré pour fonctionner avec **Netlify Forms**. Voici les étapes pour le mettre en ligne :

### Étape 1: Déployer sur Netlify

1. **Créer un compte Netlify** (si pas encore fait):
   - Allez sur [netlify.com](https://netlify.com)
   - Inscrivez-vous avec votre compte GitHub

2. **Connecter votre repository GitHub**:
   - Dans Netlify Dashboard, cliquez sur "Add new site"
   - Sélectionnez "Import an existing project"
   - Connectez votre repository GitHub contenant le site

3. **Déployer le site**:
   - Netlify détectera automatiquement la configuration
   - Le site sera déployé automatiquement

### Étape 2: Configurer les Notifications par Email

1. **Accédez à Netlify Dashboard**
2. **Site settings** → **Forms**
3. **Cliquez sur "Enable forms"** (si pas encore activé)
4. **Dans la section "Form notifications"**:
   - Cliquez sur **"Add notification"**
   - Sélectionnez **"Email notification"**
   - Entrez votre adresse Gmail
   - Sauvegardez

### Étape 3: Configurer Gmail (Facultatif - Pour Plus de Détails)

Pour mieux gérer les emails:

1. **Créer un label Gmail** (optionnel):
   - Dans Gmail, créez un label "Portfolio Contact"
   - Cela vous aidera à organiser les messages

2. **Activer les filtres** (optionnel):
   - Créez un filtre pour les emails de Netlify
   - Appliquez automatiquement le label

### Comment ça fonctionne

- **Formulaire utilisateur** → **Soumis via Netlify Forms** → **Email vers Gmail** → **Page de confirmation**

### Fichiers Importants

```
.
├── index.html           ← Formulaire modifié (attribut netlify)
├── success.html         ← Page de confirmation après soumission
├── netlify.toml         ← Configuration Netlify
└── css/style.css        ← Styles pour la page de succès
```

### Fonctionnalités du Formulaire

✅ **Netlify Forms intégré nativement**
✅ **Spam filter automatique** (Netlify détecte les spams)
✅ **Page de succès personnalisée** avec redirection
✅ **Validations côté client et serveur**
✅ **Notifications email vers Gmail**
✅ **Responsive sur tous les appareils**

### URL Netlify

Votre site sera accessible à:

```
https://[votre-subdomain].netlify.app
```

Vous pouvez personnaliser le domaine dans:
Site settings → Domain management

### Notes

- Netlify Forms est **gratuit jusqu'à 100 soumissions par mois**
- Après 100 soumissions, le plan démarre à $11/mois
- Vous recevrez tous les messages dans votre boîte de réception Gmail
- Les données des formulaires sont stockées dans Netlify Dashboard

### Support Netlify

Pour plus d'aide:

- Documentation: [netlify.com/docs/forms](https://docs.netlify.com/forms/setup)
- Dashboard Netlify: Accès direct à tous les messages soumis

---

**Le formulaire est maintenant prêt pour la production! 🚀**
=======
# Configuration du Formulaire de Contact - Netlify + Gmail

## ✅ Configuration Effectuée

Le formulaire de contact a été configuré pour fonctionner avec **Netlify Forms**. Voici les étapes pour le mettre en ligne :

### Étape 1: Déployer sur Netlify

1. **Créer un compte Netlify** (si pas encore fait):
   - Allez sur [netlify.com](https://netlify.com)
   - Inscrivez-vous avec votre compte GitHub

2. **Connecter votre repository GitHub**:
   - Dans Netlify Dashboard, cliquez sur "Add new site"
   - Sélectionnez "Import an existing project"
   - Connectez votre repository GitHub contenant le site

3. **Déployer le site**:
   - Netlify détectera automatiquement la configuration
   - Le site sera déployé automatiquement

### Étape 2: Configurer les Notifications par Email

1. **Accédez à Netlify Dashboard**
2. **Site settings** → **Forms**
3. **Cliquez sur "Enable forms"** (si pas encore activé)
4. **Dans la section "Form notifications"**:
   - Cliquez sur **"Add notification"**
   - Sélectionnez **"Email notification"**
   - Entrez votre adresse Gmail
   - Sauvegardez

### Étape 3: Configurer Gmail (Facultatif - Pour Plus de Détails)

Pour mieux gérer les emails:

1. **Créer un label Gmail** (optionnel):
   - Dans Gmail, créez un label "Portfolio Contact"
   - Cela vous aidera à organiser les messages

2. **Activer les filtres** (optionnel):
   - Créez un filtre pour les emails de Netlify
   - Appliquez automatiquement le label

### Comment ça fonctionne

- **Formulaire utilisateur** → **Soumis via Netlify Forms** → **Email vers Gmail** → **Page de confirmation**

### Fichiers Importants

```
.
├── index.html           ← Formulaire modifié (attribut netlify)
├── success.html         ← Page de confirmation après soumission
├── netlify.toml         ← Configuration Netlify
└── css/style.css        ← Styles pour la page de succès
```

### Fonctionnalités du Formulaire

✅ **Netlify Forms intégré nativement**
✅ **Spam filter automatique** (Netlify détecte les spams)
✅ **Page de succès personnalisée** avec redirection
✅ **Validations côté client et serveur**
✅ **Notifications email vers Gmail**
✅ **Responsive sur tous les appareils**

### URL Netlify

Votre site sera accessible à:

```
https://[votre-subdomain].netlify.app
```

Vous pouvez personnaliser le domaine dans:
Site settings → Domain management

### Notes

- Netlify Forms est **gratuit jusqu'à 100 soumissions par mois**
- Après 100 soumissions, le plan démarre à $11/mois
- Vous recevrez tous les messages dans votre boîte de réception Gmail
- Les données des formulaires sont stockées dans Netlify Dashboard

### Support Netlify

Pour plus d'aide:

- Documentation: [netlify.com/docs/forms](https://docs.netlify.com/forms/setup)
- Dashboard Netlify: Accès direct à tous les messages soumis

---

**Le formulaire est maintenant prêt pour la production! 🚀**
>>>>>>> c9c310e7a3c6542f82ed6586888f27128efb8ccf
