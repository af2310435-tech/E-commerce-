// ⚠️ À REMPLIR AVANT LE LANCEMENT
// Crée un "Payment Link" par offre dans Stripe (dashboard.stripe.com > Payment Links)
// et colle les URL ici. Tant que c'est vide, le bouton affiche une alerte.
window.STORE_CONFIG = {
  brand: "Moulin Gravity",
  contactEmail: "contact@exemple.fr", // à remplacer
  offers: {
    duo:    { label: "1 set (sel + poivre)",            price: 34.90, compareAt: 59.90, paymentLink: "" },
    double: { label: "2 sets — idéal à offrir",          price: 54.90, compareAt: 119.80, paymentLink: "", badge: "Le plus choisi" },
    family: { label: "3 sets — cadeaux de Noël réglés",  price: 69.90, compareAt: 179.70, paymentLink: "" }
  },
  // Date de fin de l'offre Black Friday (affichée dans le bandeau)
  promoEnd: "2026-12-01T23:59:00+01:00"
};
