// Lingua: scelta salvata, altrimenti lingua del browser (non italiano = inglese)
const en = (() => {
  try { const v = localStorage.getItem('lang'); if (v) return v === 'en'; } catch (e) {}
  return !(navigator.language || 'it').toLowerCase().startsWith('it');
})();
document.documentElement.lang = en ? 'en' : 'it';

// Testi fissi delle pagine: [inizio del testo italiano, traduzione]. Chiavi corte = testo esatto.
const D = [
['Cucina autentica bolognese',`Authentic Bolognese cooking, in the heart of Bologna since 1979.`],
['Scopri il menu','Discover the menu'],['Dove siamo','Find us'],
['Lasagne al forno','Baked lasagne'],['Crostini caldi','Hot crostini'],['Cotolette','Cutlets'],
['La storia','Our story'],
[`L'Osteria dell'Orsa, in via Mentana`,`Osteria dell'Orsa, on Via Mentana 1 in Bologna, opened in 1979 in place of «Dal Francese», where sandwiches were sold. From the start it was also a cultural meeting point: for years it hosted concerts of every kind, from punk to jazz, with local and above all international guests.`],
['Oggi è uno dei posti',`Today it is one of the most loved places among locals and tourists, for dishes that bring back the essence of Bolognese cooking and a welcome attentive to every detail.`],
['Cucina e cantina','Kitchen & cellar'],
['La qualità prima della quantità','Quality before quantity. We prefer a smaller menu, but one cared for in every detail, for the wellbeing of every guest.'],
['Il menu cambia di continuo','The menu changes all the time, with a few fixed points: Bolognese specialities always made in-house, such as tagliatelle, tortellini and baked lasagne. First and second courses change every day: ask in the osteria for the latest.'],
['Niente coperto','No cover charge'],
['Service charge free','Service charge free: you only pay for what you eat.'],
['Verdure a km 0','Zero-mile vegetables'],
['Da agricoltura biologica','From local organic farming.'],
['Pasta fatta in casa','Homemade pasta'],
['Anche con farina Senatore','Also with Senatore Cappelli flour from the Lodi Corazza farm in Zola Predosa.'],
['Tra i secondi, le celebri','Among the main courses, the famous cutlets with a nice big salad. Then spianate, tigelle montanare, fried crescentine, crostoni and mixed cold cuts with mortadella. To finish, homemade desserts. With the meal, high-quality wines from the hills near Imola: our menu is zero-mile.'],
['Lo stile','Our style'],
[`L'ambiente`,'The atmosphere'],['Il nostro staff','Our staff'],
[`Oltre alla cucina, all'Orsa`,`Besides the food, at the Orsa you breathe the air of a place made famous in Bologna also by its style. Our staff welcomes every guest to make them feel at home.`],
['Tutti i commensali sono',`All guests are treated the same. And there is a tradition we know well: you can sit at a table with people you don't know, and the meal becomes conversation and company.`],
['Siediti accanto a uno','Sit next to a stranger. You will leave with a friend.'],
['Bologna intorno a noi','Bologna around us'],
['Siamo nel mezzo della zona',`We are in the middle of the university district, on Via Mentana 1, in the San Vitale – San Donato quarter. The street name is recent: it dates from the 1873-1878 renaming of Bologna's streets, when this stretch was still part of Borgo di San Pietro.`],
['A pochi metri ci sono via','A few metres away are Via delle Moline and Via Marsala, favourite haunts of students, and the historic Via Zamboni. Both lead to Via Indipendenza, which links the Central Station to Piazza Maggiore, lined with shops of every kind.'],
['La Locanda','The Locanda'],
['Dopo un buon piatto e un',`After a good meal and a glass from our cellar, you can stay the night at Locanda dell'Orsa, a guesthouse on Via Marsala 18: in the university district, a few metres from Via Indipendenza and Piazza Maggiore.`],
['Le 4 camere hanno bagno','The 4 rooms have a private bathroom with shower and are furnished with care for a pleasant, relaxing stay.'],
['Visita il sito della Locanda','Visit the Locanda website'],
['La Bottega','The Pasta Shop'],
['Il laboratorio della pasta fresca','The fresh pasta workshop: great tradition and superb ingredients.'],
['Nati per il brodo','Born for broth, but good all year round. In December the craving for tortellini goes beyond all understanding.'],
['Nascono al ragù','Born for ragù, with a precise size: 8 millimetres wide when cooked. For broth, the thin taglioline.'],
['Più grandi, con ricotta','Larger, with ricotta and parsley. Butter and sage, or butter and tomato. Also in vegan and vegetarian versions.'],
[`L'arte della pasta fresca`,'The art of fresh pasta'],
['Il colore dipende dagli','The colour depends on the ingredients: after months of testing we vary the doughs, for example with pumpkin for orange. For vegan friends, the sheet is only water and durum wheat flour; the short extruded pastas use semolina and oil.'],
['In biscotteria: raviole','Biscuits: raviole with Bolognese mostarda (quince and plum) or with Nutella, tarts with jam or custard.'],
['Un luogo di apprendimento','A place of learning'],
['Biscotteria','Biscuits & bakes'],
['Collaboriamo con scuole','We work with schools in the sector, including in Padua and Asti, for training internships. Students from Boston and South Korea have come to learn here, and many tour guides bring visitors to see how Bolognese pasta is made.'],
['La Bottega è nata perché',`The shop was born because customers kept asking where to buy the pasta they had eaten. It is at Via Mentana 3A, Monday to Saturday, 8:30–14:00 (pick-up until 19:00). If you can't make it, ask at the osteria: we will bring you your order, already prepared.`],
['Parlano di noi','What people say'],
['Le recensioni dei nostri','Reviews from our guests on Tripadvisor (in the original language).'],
['Aggiungi una recensione','Add a review'],
['Dove siamo e contatti','Find us & contact'],
['Indirizzo','Address'],['Telefono','Phone'],['Aperti tutti i giorni','Open every day'],
['dalle 12:30 alle 23:00','from 12:30 to 23:00, non-stop'],
['Non accettiamo prenotazioni','We do not take bookings: the venue is large and the wait is never long.'],
['Chiusi il 24, 25, 26','Closed on 24, 25, 26, 31 December and 1 January.'],
['Il menu','The menu'],
['Nessun coperto. Verdure','No cover charge. Zero-mile vegetables, homemade pasta. First and second courses change every day: ask in the osteria.'],
['Allergeni: 1 glutine','Allergens: 1 gluten, 2 crustaceans, 3 eggs, 4 fish, 5 peanuts, 6 soy, 7 milk, 8 celery, 9 mustard, 10 sulphur dioxide, 11 sesame, 12 lupin, 13 tree nuts, 14 molluscs. If in doubt, ask our staff.'],
['Scarica il PDF','Download the PDF'],
['Note legali','Legal notes']
];

function applyText() {
  if (!en) return;
  document.title = document.title.replace('Cucina bolognese dal', 'Bolognese cooking since').replace('Note legali', 'Legal notes').replace('Menu ·', 'Menu ·');
  const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT), ns = [];
  while (w.nextNode()) ns.push(w.currentNode);
  ns.forEach(n => {
    const t = n.nodeValue.trim();
    if (!t || ['SCRIPT', 'STYLE'].includes(n.parentElement.tagName)) return;
    for (const [k, v] of D) if (t === k || (k.length >= 18 && t.startsWith(k))) { n.nodeValue = n.nodeValue.replace(t, v); break; }
  });
  const lg = document.getElementById('q');
  if (lg) lg.insertAdjacentHTML('beforebegin', '<p class="note">The legal documents are available in Italian only.</p>');
}

// Menu: categorie, nomi e descrizioni in inglese (i nomi dei piatti restano italiani, tranne quelli descrittivi)
const CEN = {'Crostini caldi':'Hot crostini','Piatti freddi':'Cold dishes','Insalatone':'Big salads','Ciaccio':`Ciaccio (it's not a piadina!)`,'Contorni e bevande':'Sides & drinks'};
const NEN = {'Piatto di mortadella DOP':'Mortadella DOP plate','Affettato misto':'Mixed cold cuts','1/2 Affettato misto':'Half mixed cold cuts','Formaggi misti':'Mixed cheeses','Pesto modenese':'Pesto modenese (lard spread)','Ciotola di squacquerone':'Bowl of squacquerone','Ciaccio bolognese':'Bolognese ciaccio','Patate fritte / al forno':'Fries / roast potatoes','Insalata verde / mista':'Green / mixed salad','Bibite in lattina o bottiglia':'Soft drinks (can or bottle)','Succhi di frutta':'Fruit juices','Coca Cola alla spina 0,3 l':'Coca-Cola on tap 0.3 l','Acqua microfiltrata 0,75 l':'Filtered water 0.75 l','Caffè, orzo, deca':'Coffee, barley, decaf','Tè e infusi':'Tea & infusions','Grappe e amari':'Grappa & bitters','Rape rosse per te':'Red beets for you','Funghi e formaggio':'Mushrooms & cheese','Funghi':'Mushrooms','Estiva':'Summer','Fantasia':'Fantasy','Fantasia + tonno':'Fantasy + tuna','Greca':'Greek','Scamorza e verdure':'Scamorza & vegetables','Semplice':'Simple','Piccante':'Spicy','Vegetariano':'Vegetarian','Crostino pugliese':'Apulian crostino','Polpetta':'Meatball'};
const DEN = {'Balanzone':'Mortadella and squacquerone','Birichino':'Sweet salami, balsamic vinegar, shaved grana padano','Boterino':'Mozzarella, arugula, shaved grana padano','Crostino pugliese':'Extra virgin olive oil, garlic, fresh tomato, oregano','Cromagnon':'Spicy salami, aged ricotta, tartar sauce','Dotto':'Bolognese ragù and grana','Funghi e formaggio':'Fresh mushrooms and Monte San Pietro cheese','Marcone':'Porcini cream, fresh mushrooms, Edam, Parma ham','Orgasmico':'Taleggio, honey, walnuts','Pizzaiola':'Mozzarella, tomato sauce, oregano','Saraceno':'Mozzarella, fresh tomato, grana, oregano','Special':'Spicy salami, smoked scamorza, cocktail sauce, Tabasco','Vegetariano':`With the day's cooked vegetables`,'Misto':'2 crostini with 4 flavours chosen by the chef','Crostone':'5 crostini chosen by the chef on one board','Affettato misto':'With 3 tigelle and pesto modenese','1/2 Affettato misto':'Prosciutto and mortadella with 2 tigelle','Ciaccio bolognese':'Each','Crescentine':'Each','Tigelle':'Each','Caprese':'Mozzarella, fresh tomato, olives, oregano','Funghi':'Green salad, mozzarella, fresh mushrooms, aged ricotta','Estiva':'Green salad, tuna, boiled eggs','Fantasia':'Green salad, tomato, mushrooms, corn, mozzarella, olives, boiled eggs','Greca':'Feta, tomato, cucumbers, onion, olives, peppers','Rape rosse per te':'Green salad, arugula, red beet, feta','Bologna':'Mortadella, squacquerone, pistachio crumble','Scamorza e verdure':'Stewed vegetables, smoked scamorza','Macchia':'Monte San Pietro cheese, porcini cream, fresh mushrooms','Semplice':'Squacquerone and arugula','Polpetta':'Bolognese meatballs and Parmigiano Reggiano','Piccante':'Spicy salami, Edam',"Ciaccio dell'Orsa":'Raw ham, mozzarella, fresh tomato, arugula','Bibite in lattina o bottiglia':'Chinotto, Coke Zero, lemon soda, Fanta, Sprite, tonic','Succhi di frutta':'Pineapple, orange, peach, ACE','Coca Cola alla spina 0,3 l':'1 litre 11,00','Acqua microfiltrata 0,75 l':'Still or sparkling'};
const ALE = {1:'Gluten',2:'Crustaceans',3:'Eggs',4:'Fish',5:'Peanuts',6:'Soy',7:'Milk',8:'Celery',9:'Mustard',10:'Sulphur dioxide',11:'Sesame',12:'Lupin',13:'Tree nuts',14:'Molluscs'};

// Badge aperto / chiuso (orario di Bologna: 12:30-23:00, chiusi 24-25-26-31/12 e 1/1)
function badges() {
  const els = document.querySelectorAll('[data-open]');
  if (!els.length) return;
  const OPEN = 750, CLOSE = 1380, shut = (m, d) => (m === 12 && [24, 25, 26, 31].includes(d)) || (m === 1 && d === 1);
  const draw = () => {
    const p = {};
    new Intl.DateTimeFormat('en-CA', {timeZone: 'Europe/Rome', year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', hourCycle: 'h23'})
      .formatToParts(new Date()).forEach(x => { if (x.type !== 'literal') p[x.type] = +x.value; });
    const mins = p.hour * 60 + p.minute, isOpen = !shut(p.month, p.day) && mins >= OPEN && mins < CLOSE;
    let sub;
    if (isOpen) sub = en ? 'Closes at 23:00' : 'Chiude alle 23:00';
    else {
      let when;
      if (!shut(p.month, p.day) && mins < OPEN) when = en ? 'today' : 'oggi';
      else for (let k = 1; k < 9; k++) {
        const dt = new Date(Date.UTC(p.year, p.month - 1, p.day + k));
        if (!shut(dt.getUTCMonth() + 1, dt.getUTCDate())) {
          when = k === 1 ? (en ? 'tomorrow' : 'domani') : dt.toLocaleDateString(en ? 'en-GB' : 'it-IT', {weekday: 'long', day: 'numeric', month: 'long', timeZone: 'UTC'}).replace(',', '');
          break;
        }
      }
      sub = en ? `Opens ${when} at 12:30` : `Aprirà ${when} alle 12:30`;
    }
    const st = isOpen ? (en ? 'Open now' : 'Aperto ora') : (en ? 'Closed now' : 'Chiuso ora');
    els.forEach(el => el.innerHTML = `<span class="st2"><i class="od ${isOpen ? 'on' : 'off'}"></i><b>${st}</b></span><small>${sub}</small>`);
  };
  draw(); setInterval(draw, 60000);
}
