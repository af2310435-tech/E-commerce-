# Moulin Gravity — boutique e-commerce

Produit choisi : **set de 2 moulins électriques à gravité (sel & poivre)**, avec lumière LED et rechargeables par USB.
Marché visé : France et Belgique, pour les ventes de Black Friday et de Noël 2026.

| Dossier | Contenu |
|---|---|
| `store/` | Boutique statique, prête à déployer (HTML, CSS et JS, sans build) |
| `docs/01-recherche-produit.md` | Pourquoi ce produit et les autres options écartées |
| `docs/02-sourcing-et-marges.md` | Fournisseurs, coûts, prix et seuil de rentabilité |
| `docs/03-publicites.md` | Scripts TikTok/Reels, accroches, ciblage et budget de test |
| `docs/04-checklist-lancement.md` | Les étapes **à faire par toi** pour mettre en ligne |

## Voir la boutique en local
```bash
cd store && python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

## Mise en ligne rapide
1. Crée un lien de paiement Stripe (ou Shopify), puis colle-le dans `store/config.js`.
2. Déploie le dossier `store/` sur Netlify Drop, Vercel ou GitHub Pages.
3. Suis `docs/04-checklist-lancement.md`.
