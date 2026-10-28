const home = document.body.dataset.home === '1';
const p = home ? '' : 'index.html';
document.body.insertAdjacentHTML('afterbegin', `
<header id="hd"><div class="bar">
<a href="${home ? '#top' : 'index.html'}"><img src="images/logo-bianco.png" alt="Osteria dell'Orsa" onerror="this.src='images/logo-osteria-dell-orsa.png'"></a>
<button class="burger" aria-label="Apri menu" id="bg">☰</button>
<nav id="nv">
<a href="${p}#storia">Storia</a><a href="${p}#cucina">Cucina</a><a href="${p}#stile">Stile</a>
<a href="${p}#bologna">Bologna</a><a href="${p}#locanda">Locanda</a><a href="${p}#bottega">Bottega</a><a href="${p}#contatti">Contatti</a>
<a class="btn" href="menu.html">Scopri il menu</a></nav></div></header>`);
document.body.insertAdjacentHTML('beforeend', `
<footer><div class="wrap">
<div><img src="images/logo-bianco.png" alt="Osteria dell'Orsa"><p>Osteria dell'Orsa s.a.s.<br>Via Mentana, 1 · 40126 Bologna<br>P.IVA 02095460370</p></div>
<div><p>info@osteriadellorsa.com<br>+39 051 231576</p><a href="https://www.facebook.com/osteriadellorsa">Facebook</a><a href="https://www.instagram.com/osteriadellorsa">Instagram</a></div>
<div><a href="legal.html#cookie">Cookie Policy</a><a href="legal.html#privacy">Privacy Policy</a><a href="legal.html#whistle">Whistleblowing</a></div>
</div></footer>`);
const hd = document.getElementById('hd'), nv = document.getElementById('nv');
const sc = () => hd.classList.toggle('solid', scrollY > 40 || !home);
sc(); addEventListener('scroll', sc, {passive: true});
document.getElementById('bg').onclick = () => nv.classList.toggle('open');
nv.onclick = e => e.target.tagName === 'A' && nv.classList.remove('open');
const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && (e.target.classList.add('on'), io.unobserve(e.target))), {threshold: .15});
document.querySelectorAll('.rv').forEach(el => io.observe(el));

// MENU
const M = {
'Crostini caldi': [['Balanzone',5.5,'Mortadella e squacquerone','1, 7'],['Birichino',7,'Salame dolce, aceto balsamico, grana padano a scaglie','1,3,7,10'],['Boterino',5.5,'Mozzarella, rucola, grana padano a scaglie','1,3,7'],['Crostino pugliese',4,'Olio EVO, aglio, pomodoro fresco, origano','1'],['Cromagnon',6,'Salame picc., ricotta stagionata, salsa tartara','1,3,4,7,8,9,10'],['Dotto',6,'Ragù bolognese e grana','1,3,7,8'],['Funghi e formaggio',5.5,'Champignon freschi e formaggio Monte San Pietro','1,7'],['Marcone',8,'Crema di funghi porcini, champignon, edamer, crudo di Parma','1,7,8'],['Orgasmico',6,'Taleggio, miele, noci','1,7,13'],['Pizzaiola',4.5,'Mozzarella, salsa di pomodoro, origano','1,7'],['Saraceno',6,'Mozzarella, pomodoro fresco, grana, origano','1,3,7'],['Special',8,'Salame picc., scamorza aff., salsa cocktail, tabasco','1,3,7,8,9,10'],['Vegetariano',5.5,'Con verdure cotte del giorno','1'],['Misto',12,'2 crostini con 4 gusti a scelta dello chef','tutti'],['Crostone',25,'5 crostini a scelta dello chef su un unico tagliere','tutti']],
'Piatti freddi': [['Affettato misto',15,'Con 3 tigelle e pesto modenese',''],['1/2 Affettato misto',8,'Prosciutto e mortadella con 2 tigelle',''],['Formaggi misti',10,'','3,7,13'],['Piatto di mortadella DOP',5,'',''],['Pesto modenese',4.5,'',''],['Ciotola di squacquerone',4.5,'','7'],['Ciaccio bolognese',3,'L\'uno','1,7'],['Crescentine',2.5,'L\'una','1,7'],['Tigelle',1,'L\'una','1']],
'Insalatone': [['Caprese',9,'Mozzarella, pomodoro fresco, olive, origano','7'],['Funghi',9,'Insalata verde, mozzarella, funghi freschi, ricotta stagionata','7'],['Estiva',9,'Insalata verde, tonno, uova sode','3,4'],['Fantasia',10,'Insalata verde, pomodoro, funghi, mais, mozzarella, olive, uova sode','1,3,7'],['Fantasia + tonno',11,'','1,3,4,7'],['Greca',10,'Feta, pomodoro, cetrioli, cipolla, olive, peperoni','7'],['Rape rosse per te',10,'Insalata verde, rucola, rapa rossa, feta','7']],
'Ciaccio': [['Bologna',8,'Mortadella, squacquerone, granella di pistacchio','1,7,13'],['Scamorza e verdure',6.5,'Verdure stufate, scamorza affumicata','1,7'],['Macchia',8,'Monte San Pietro, crema di porcini, funghi freschi','1,7,8,9'],['Semplice',7.5,'Squacquerone e rucola','1,7'],['Polpetta',10,'Polpette bolognesi e parmigiano reggiano','1,3,7,8'],['Piccante',8,'Salame piccante, edamer','1,7'],['Pizzaiola',7.5,'Mozzarella, salsa di pomodoro, origano','1,7'],['Ciaccio dell\'Orsa',8.5,'Crudo, mozzarella, pomodoro fresco, rucola','1,7']],
'Contorni e bevande': [['Patate fritte / al forno',4.5,'','1'],['Insalata verde / mista','4,00 / 5,50','',''],['Bibite in lattina o bottiglia',4,'Chinotto, coca zero, lemonsoda, fanta, sprite, tonica',''],['Succhi di frutta',3.5,'Ananas, arancia, pesca, ace',''],['Coca Cola alla spina 0,3 l',4,'1 litro 11,00',''],['Acqua microfiltrata 0,75 l',2,'Naturale o frizzante',''],['Caffè, orzo, deca',1.2,'',''],['Cappuccino',2.2,'',''],['Tè e infusi',3,'',''],['Grappe e amari',4,'',''],['Spritz dell\'Orsa',5,'','']]};
const mt = document.getElementById('mtabs'), mb = document.getElementById('mbody');
if (mt) {
  const f = v => typeof v === 'number' ? '€ ' + v.toFixed(2).replace('.', ',') : '€ ' + v;
  const show = k => {
    mt.querySelectorAll('button').forEach(b => b.classList.toggle('on', b.textContent === k));
    mb.innerHTML = M[k].map(([n, pr, d, a]) => `<div class="item"><b>${n}</b><span class="pr">${f(pr)}</span><p>${d}${a ? ` <small>(${a})</small>` : ''}</p></div>`).join('');
    mb.animate([{opacity: 0, transform: 'translateY(14px)'}, {opacity: 1, transform: 'none'}], {duration: 450, easing: 'ease-out'});
  };
  Object.keys(M).forEach(k => { const b = document.createElement('button'); b.textContent = k; b.onclick = () => show(k); mt.appendChild(b); });
  show(Object.keys(M)[0]);
}
// RICERCA nel testo legale
const q = document.getElementById('q');
if (q) q.oninput = () => {
  const t = q.value.trim().toLowerCase();
  document.querySelectorAll('.legal [data-s]').forEach(el => {
    const raw = el.dataset.raw || (el.dataset.raw = el.innerHTML);
    el.innerHTML = raw;
    const hit = !t || el.textContent.toLowerCase().includes(t);
    el.style.display = hit ? '' : 'none';
    if (t && hit) el.innerHTML = raw.replace(new RegExp('(' + t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')(?![^<]*>)', 'gi'), '<mark>$1</mark>');
  });
};
