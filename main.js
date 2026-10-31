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
<div><p><a class="mail" href="mailto:info@osteriadellorsa.com" style="display:inline">info@osteriadellorsa.com</a><br>+39 051 231576</p><a href="https://www.facebook.com/osteriadellorsa/" target="_blank" rel="noopener">Facebook</a><a href="https://www.instagram.com/osteria_dellorsa/" target="_blank" rel="noopener">Instagram</a></div>
<div><a href="legal.html#cookie">Cookie Policy</a><a href="legal.html#privacy">Privacy Policy</a><a href="legal.html#whistle">Whistleblowing</a></div>
</div></footer>`);
const hd = document.getElementById('hd'), nv = document.getElementById('nv');
const sc = () => hd.classList.toggle('solid', scrollY > 40 || !home);
sc(); addEventListener('scroll', sc, {passive: true});
const bgb = document.getElementById('bg');
const tg = o => { nv.classList.toggle('open', o); document.body.classList.toggle('lock', o); bgb.textContent = o ? '✕' : '☰'; };
bgb.onclick = () => tg(!nv.classList.contains('open'));
nv.onclick = e => e.target.tagName === 'A' && tg(false);
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
    mb.innerHTML = M[k].map(([n, pr, d, a]) => `<div class="item"><b>${n}</b><span class="pr">${f(pr)}</span><p>${d}${a ? ` <small>(${a})</small><button class="inf" data-n="${n}" data-a="${a}" aria-label="Allergeni: ${n}">i</button>` : ''}</p></div>`).join('');
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

// RECENSIONI
const R=[['Mikedelaney111','Ottimo ristorante con un ottimo personale','mag 2026 · In coppia','Ottimo cibo e servizio, personale davvero gentile, veloce e disponibile. Ambiente confortevole nel centro storico, con spazi all\'aperto e al chiuso. Buon rapporto qualità-prezzo e nessun tempo di attesa.'],
['Simona P.','Ottima scelta','apr 2026 · In famiglia','Pasta veramente ottima, di qualità e prezzo giusto, porzioni abbondanti, locale e servizio informale ma autentico.'],
['Eugenio','Cena bolognese','ago 2026 · Per affari','Senza prenotazione abbiamo atteso 10 minuti. Ottimi primi (tagliatelle al ragù e tortellini in brodo), polpette al sugo stupende con contorni. Compresa birra abbiamo speso 30 euro. Consigliatissimo!'],
['MariVerona_Italy','Che bello tornare all\'Osteria dell\'Orsa!','set 2026 · In coppia','L\'Orsa è sempre una certezza. Per meno di 15 euro a testa abbiamo mangiato due ciacci ricchi di ripieno, due dolci e un quarto di vino. Ampia scelta di piatti tipici: la consigliamo sempre a chi ospitiamo.'],
['Gloria H.','La capitale del cibo non ha deluso','set 2026 · In coppia','Le tagliatelle al ragù erano superbe e il servizio eccellente. Vivace, autentico e vale la coda.'],
['Lara Tritoli','Tappa obbligatoria','feb 2026 · In famiglia','Locale rustico, servizio veloce, piatti abbondanti e molto buoni. Ottimo rapporto qualità-prezzo. Mi ha stupito che non si paga il coperto.'],
['Samuele P.','Cena di gita','feb 2026 · Con amici','Una piccola fila, ma grazie alla super organizzazione siamo entrati dopo meno di 10 minuti. Qualità del cibo altissima, prezzi nella norma. Una vera osteria!'],
['Vane M.','Tutto ottimo','feb 2026 · In coppia','Piatti buoni e abbondanti. Qualità-prezzo decisamente ottima. Personale gentile e simpatico, ottima atmosfera.'],
['Rogério C.','Posto incredibile a Bologna!','gen 2026 · Da solo','Tagliatelle al ragù buonissime, servizio cordiale e veloce, vino rosso della casa buono, cheesecake con caramello salato generosa. Se viaggi da solo ti ritrovi a tavola con altre persone, e va benissimo!'],
['Luca','Assolutamente sì','gen 2026 · In famiglia','La coda fuori ci sarà per un motivo. Un\'osteria verace, calda e tipica, con camerieri giovani e con voglia di fare. Tutto fatto in casa, dalle lasagne ai tortellini. Bravi ragazzi!'],
['GeC','Osteria storica','mag 2026 · Con amici','Ambiente semplice, tavoli in condivisione, personale giovane e veloce. Non si prenota, ma l\'attesa vale la pena. Consigliate le tagliatelle al ragù e la cotoletta alla bolognese.'],
['Roberta L.','Pranzo','apr 2026 · In famiglia','Niente prenotazioni, ma l\'attesa è breve. Piatti tipici buoni, prezzi accessibili. Ottimo per chi visita la città e vuole pranzare con disimpegno.'],
['Jade L.','Cibo semplice con autentico sapore locale','gen 2026 · Con amici','Piatti della tradizione bolognese senza fronzoli. Pasta fresca e piena di sapore, porzioni generose, atmosfera genuinamente locale e rilassata.'],
['Carla F.','Lo consiglio','gen 2026 · In coppia','Personale gentile e presente, cibo buono e veloce, prezzi nella norma e niente coperto. Ottime le tagliatelle al ragù.'],
['Francesca S.','Osteria tipica da provare','apr 2026 · In famiglia','Ambiente caratteristico, semplice e pulito. Servizio veloce e cortese. Lo consiglio.']];

const st=document.getElementById('track');
if(st){
  st.innerHTML=R.map(([n,t,m,x])=>`<article class="rc"><span class="st" aria-label="5 stelle su 5">●●●●●</span><h3>${t}</h3><small>${m}</small><p>${x}</p><b>${n}</b></article>`).join('');
  const cs=[...st.children],n=cs.length,gap=24;let cur=0,W=300,pair=false,timer,sx=null;
  const place=()=>{const sw=st.offsetWidth,step=W+gap;cs.forEach((c,i)=>{let d=((i-cur)%n+n)%n;if(d>n/2)d-=n;
    const e=pair?d-.5:d,x=sw/2-W/2+e*step;
    const v=pair?(d>=0&&d<=1?1:(d===-1||d===2?.55:0)):(d===0?1:(Math.abs(d)===1?.55:0));
    c.style.transform=`translateX(${x}px) scale(${v===1?1:.93})`;c.style.opacity=v;c.style.pointerEvents=v===1?'auto':'none';c.setAttribute('aria-hidden',v!==1)})};
  const layout=()=>{const sw=st.offsetWidth;pair=sw>=820;W=pair?Math.min(430,(sw-200-gap)/2):Math.min(340,sw*.72);
    cs.forEach(c=>{c.style.width=W+'px';c.style.height='auto'});
    const h=Math.max(...cs.map(c=>c.offsetHeight));st.style.height=h+'px';cs.forEach(c=>c.style.height=h+'px');place()};
  const go=k=>{cur=((cur+k)%n+n)%n;place()};
  const rst=()=>{clearInterval(timer);timer=setInterval(()=>go(1),6000)};
  document.getElementById('rp').onclick=()=>{go(-1);rst()};
  document.getElementById('rn').onclick=()=>{go(1);rst()};
  st.addEventListener('pointerdown',e=>sx=e.clientX);
  addEventListener('pointerup',e=>{if(sx==null)return;const dx=e.clientX-sx;sx=null;if(Math.abs(dx)>40){go(dx<0?1:-1);rst()}});
  const car=st.parentElement;car.onmouseenter=()=>clearInterval(timer);car.onmouseleave=rst;
  addEventListener('resize',layout);layout();rst();document.fonts&&document.fonts.ready.then(layout);
}
// ALLERGENI
if(mb){
  const AL={1:'Glutine',2:'Crostacei',3:'Uova',4:'Pesce',5:'Arachidi',6:'Soia',7:'Latte',8:'Sedano',9:'Senape',10:'Anidride solforosa',11:'Sesamo',12:'Lupini',13:'Frutta a guscio',14:'Molluschi'};
  document.body.insertAdjacentHTML('beforeend','<div class="modal" id="md" role="dialog" aria-modal="true" aria-labelledby="mt"><div class="mcard"><button class="x" aria-label="Chiudi">✕</button><p class="eyebrow">Allergeni</p><h3 id="mt"></h3><ul id="ml"></ul></div></div>');
  const md=document.getElementById('md'),close=()=>md.classList.remove('on');
  mb.addEventListener('click',e=>{const b=e.target.closest('.inf');if(!b)return;
    const a=b.dataset.a==='tutti'?Object.keys(AL):b.dataset.a.split(',').map(v=>v.trim());
    document.getElementById('mt').textContent=b.dataset.n;
    document.getElementById('ml').innerHTML=(b.dataset.a==='tutti'?'<li class="all">Contiene tutti gli allergeni</li>':'')+a.map(k=>`<li><span>${k}</span>${AL[k]||''}</li>`).join('');
    md.classList.add('on');md.querySelector('.x').focus()});
  md.onclick=e=>(e.target===md||e.target.classList.contains('x'))&&close();
  addEventListener('keydown',e=>e.key==='Escape'&&close());
}
// MAPPE
document.querySelectorAll('.lmap').forEach(el=>{
  if(!window.L)return;
  const c=[44.4982,11.3507];
  const m=L.map(el,{scrollWheelZoom:false,dragging:!L.Browser.mobile,zoomControl:false}).setView(c,17);
  L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',{attribution:'Tiles © Esri — Esri, HERE, Garmin, © OpenStreetMap contributors',maxZoom:19}).addTo(m);
  L.control.zoom({position:'bottomright'}).addTo(m);
  L.marker(c,{icon:L.divIcon({className:'',html:'<span class="pin"></span>',iconSize:[22,22],iconAnchor:[11,11]})}).addTo(m)
   .bindPopup("<b>Osteria dell'Orsa</b><br>Via Mentana 1, Bologna").openPopup();
  el.insertAdjacentHTML('beforeend','<a class="mlink" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=Osteria+dell%27Orsa+Via+Mentana+1+Bologna">Indicazioni <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M8 7h9v9"/></svg></a>');
  setTimeout(()=>m.invalidateSize(),700);
});

// EMAIL precompilata (Gmail su computer, app di posta predefinita su telefono)
(()=>{
  const TO='info@osteriadellorsa.com',SU='Richiesta di informazioni',
  BODY='Buongiorno,\n\nsono [Il tuo nome] e vorrei chiedere le seguenti informazioni:\n\n\n\nRimango in attesa di un vostro riscontro.\nGrazie e cordiali saluti,\n[Il tuo nome]',
  e=encodeURIComponent;
  document.querySelectorAll('a.mail').forEach(a=>{
    a.href=`mailto:${TO}?subject=${e(SU)}&body=${e(BODY)}`;
    a.addEventListener('click',ev=>{
      const ios=/iPad|iPhone|iPod/.test(navigator.userAgent)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1);
      if(ios){
        ev.preventDefault();
        let opened=false;const on=()=>{if(document.hidden)opened=true};
        document.addEventListener('visibilitychange',on);addEventListener('pagehide',()=>opened=true,{once:true});
        const f=document.createElement('iframe');f.style.display='none';
        f.src=`googlegmail:///co?to=${TO}&subject=${e(SU)}&body=${e(BODY)}`;document.body.appendChild(f);
        setTimeout(()=>{document.removeEventListener('visibilitychange',on);f.remove();if(!opened)location.href=a.href},1200);
        return;
      }
      if(matchMedia('(pointer:coarse)').matches)return;
      ev.preventDefault();
      open(`https://mail.google.com/mail/?view=cm&fs=1&to=${TO}&su=${e(SU)}&body=${e(BODY)}`,'_blank','noopener');
    });
  });
})();
