# Checklist de lancement (à faire par toi)

Ce que j'ai fait : recherche produit, boutique complète, textes, stratégie publicitaire et modèles légaux.
Ce que je **ne peux pas** faire à ta place : créer des comptes, payer, signer, ou dépenser un budget pub.

## Jour 1 (environ 2 h)
- [ ] Valider la demande : Creative Center, Ad Library et Google Trends (voir `01-recherche-produit.md`)
- [ ] Commander 1 échantillon et choisir le fournisseur
- [ ] Statut juridique : micro-entreprise sur autoentrepreneur.urssaf.fr, gratuit
- [ ] Compte **Stripe** → créer 3 Payment Links (29,90 / 49,90 / 64,90 €) en **collectant l'adresse de livraison**
- [ ] Coller les liens et ton email dans `store/config.js`
- [ ] Compléter les pages de `store/legal/` (SIRET, adresse, médiateur de la consommation)

## Jour 2
- [ ] Ajouter les vraies photos dans `store/assets/` et les lister dans `config.js` (`photos`)
- [ ] Déployer : glisser le dossier `store/` sur app.netlify.com/drop, ou activer GitHub Pages
- [ ] Nom de domaine (environ 10 €/an) relié à Netlify
- [ ] Faire une commande test avec la carte de test Stripe `4242 4242 4242 4242`

## Jour 3 et suivants
- [ ] Filmer 3 à 5 vidéos avec l'échantillon (scripts dans `03-publicites.md`)
- [ ] Installer le pixel Meta et TikTok, avec un bandeau cookies (RGPD)
- [ ] Lancer les tests publicitaires à 20 €/jour et appliquer les règles de coupe et de montée en budget
- [ ] Traiter chaque commande Stripe en la passant chez le fournisseur, puis envoyer le suivi au client
- [ ] Activer de vrais avis clients (Judge.me ou Trustpilot). **Jamais de faux avis.**

## Si ça décolle
Passer sur Shopify (avec automatisation via DSers ou AutoDS), acheter du stock en entrepôt UE et ajouter un upsell (étui, gants tactiles).
