// ⚠️ À REMPLIR AVANT LE LANCEMENT
// Crée un "Payment Link" par offre dans Stripe (dashboard.stripe.com > Payment Links)
// et colle les URL ici. Tant que c'est vide, le bouton affiche une alerte.
window.STORE_CONFIG = {
  brand: "Chaleo",
  contactEmail: "contact@exemple.fr", // à remplacer
  offers: {
    one:   { label: "1 chauffe-mains",                     price: 29.90, compareAt: 49.90,  paymentLink: "" },
    two:   { label: "2 chauffe-mains : un pour vous, un à offrir", price: 49.90, compareAt: 99.80,  paymentLink: "", badge: "Le plus choisi" },
    three: { label: "3 chauffe-mains : cadeaux de Noël réglés",    price: 64.90, compareAt: 149.70, paymentLink: "" }
  },
  defaultOffer: "two",
  // VRAIES PHOTOS DU PRODUIT : dépose-les dans store/assets/ puis liste-les ici.
  // Dès qu'il y a au moins une photo, elle remplace l'emplacement en haut de page.
  // Ex. : photos: ["assets/photo-1.jpg", "assets/photo-2.jpg", "assets/photo-3.jpg"]
  photos: [],
  // Date de fin de l'offre (affichée dans le bandeau)
  promoEnd: "2026-12-24T23:59:00+01:00"
};
