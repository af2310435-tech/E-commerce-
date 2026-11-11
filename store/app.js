(function () {
  var C = window.STORE_CONFIG;
  var fmt = function (n) { return n.toFixed(2).replace(".", ",") + " €"; };
  var selected = "double";

  // Offres
  var wrap = document.getElementById("offers");
  Object.keys(C.offers).forEach(function (key) {
    var o = C.offers[key];
    var save = Math.round((1 - o.price / o.compareAt) * 100);
    var el = document.createElement("label");
    el.className = "offer-card" + (key === selected ? " selected" : "");
    el.innerHTML =
      (o.badge ? '<span class="badge">' + o.badge + "</span>" : "") +
      '<input type="radio" name="offer" value="' + key + '"' + (key === selected ? " checked" : "") + ">" +
      '<span class="label">' + o.label + '<br><small class="muted">Économisez ' + save + " %</small></span>" +
      '<span class="price">' + fmt(o.price) + '<span class="compare">' + fmt(o.compareAt) + "</span></span>";
    el.querySelector("input").addEventListener("change", function () {
      selected = key;
      document.querySelectorAll(".offer-card").forEach(function (c) { c.classList.remove("selected"); });
      el.classList.add("selected");
    });
    wrap.appendChild(el);
  });

  document.getElementById("from-price").textContent = fmt(C.offers.duo.price);

  // Checkout → Stripe Payment Link
  document.getElementById("checkout").addEventListener("click", function () {
    var link = C.offers[selected].paymentLink;
    if (!link) { alert("Paiement non configuré : ajoute les liens Stripe dans config.js"); return; }
    window.location.href = link;
  });

  // Compte à rebours (vraie date de fin, définie dans config.js)
  var end = new Date(C.promoEnd).getTime();
  var cd = document.getElementById("countdown");
  function tick() {
    var d = end - Date.now();
    if (d <= 0) { cd.textContent = "offre terminée"; return; }
    var j = Math.floor(d / 864e5), h = Math.floor(d / 36e5) % 24, m = Math.floor(d / 6e4) % 60;
    cd.textContent = j + " j " + h + " h " + m + " min";
  }
  tick(); setInterval(tick, 30000);

  document.querySelectorAll(".brand-name").forEach(function (e) { e.textContent = C.brand; });
  document.querySelectorAll(".contact-email").forEach(function (e) { e.textContent = C.contactEmail; e.href = "mailto:" + C.contactEmail; });
})();
