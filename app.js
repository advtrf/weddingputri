/* =========================================================
   app.js — kode & data BERSAMA untuk semua versi undangan.
   Data yang berbeda per versi (tanggal, tempat, maps, denah)
   ada di index.html (versi A) dan b.html (versi B) → window.VER
   ========================================================= */
document.body.insertAdjacentHTML('afterbegin',`
<!-- Aset SVG bunga buatan sendiri -->
<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>
<symbol id="fl" viewBox="-50 -50 100 100"><g fill="currentColor" opacity=".9"><ellipse rx="15" ry="30" cy="-22"/><ellipse rx="15" ry="30" cy="-22" transform="rotate(72)"/><ellipse rx="15" ry="30" cy="-22" transform="rotate(144)"/><ellipse rx="15" ry="30" cy="-22" transform="rotate(216)"/><ellipse rx="15" ry="30" cy="-22" transform="rotate(288)"/></g><circle r="11" fill="#f6d576"/><circle r="5" fill="#c79a35"/></symbol>
<symbol id="lf" viewBox="0 0 40 100"><path d="M20 98C-6 60 2 20 20 2c18 18 26 58 0 96z" fill="currentColor"/></symbol>
<symbol id="cl" viewBox="0 0 200 200">
<g style="color:#5f7d5c"><use href="#lf" x="10" y="50" width="40" height="100" transform="rotate(-50 30 100)"/><use href="#lf" x="70" y="10" width="40" height="100" transform="rotate(8 90 60)"/><use href="#lf" x="125" y="60" width="40" height="100" transform="rotate(55 145 110)"/></g>
<g style="color:#a13a5f"><use href="#fl" x="25" y="70" width="80" height="80"/></g>
<g style="color:#e89aa2"><use href="#fl" x="95" y="30" width="60" height="60"/><use href="#fl" x="110" y="105" width="52" height="52"/></g></symbol>
<symbol id="dv" viewBox="0 0 180 14"><path d="M0 7h70M110 7h70" stroke="currentColor" fill="none"/><use href="#fl" x="76" y="0" width="28" height="14"/></symbol>
</defs></svg>

<!-- Cover -->
<div id="cover">
  <div>
    <p class="sm">THE WEDDING OF</p>
    <h1 class="wr" id="cv-n"></h1>
    <p class="sm">Kepada Yth.</p>
    <p class="to" id="to">Tamu Undangan</p><br>
    <button class="btn" id="open" style="background:#fff;color:var(--w);border-color:#fff">BUKA UNDANGAN</button>
  </div>
</div>

<audio id="au" loop preload="none" src="assets/music.mp3"></audio>
<button id="mu" aria-label="Putar atau jeda musik">♪</button>

<main>
<section id="hero">
  <img class="orn hg l" src="assets/hero-grass.png" alt="" onerror="this.remove()"><img class="orn hg r" src="assets/hero-grass.png" alt="" onerror="this.remove()">
  <div class="in-w frame" id="frame">
    <img class="fb ff" src="assets/frame-card-fill.png" alt="" onerror="this.remove()">
    <img class="fb fo" src="assets/frame-card.png" alt="" onerror="this.remove()">
    <img class="bf" src="assets/butterfly.png" alt="" style="top:calc(13% - var(--w)/2);left:calc(86% - var(--w)/2);--w:clamp(150px,56cqw,280px);--r:6deg" onerror="this.remove()"><img class="fr b" src="assets/frame-bottom.png" alt="" onerror="this.remove()">
    <div class="fc">
      <p class="sm">THE WEDDING OF</p>
      <div class="nmz"><p class="n rv a" id="h-a"></p><p class="amp rv" style="transition-delay:.6s">&amp;</p><p class="n rv b" id="h-b" style="transition-delay:1.1s"></p></div>
      <p class="hd">♥</p>
      <p style="font-weight:600;font-size:1.25rem;letter-spacing:.14em;color:var(--w)" id="h-d"></p>
      <p class="sm" style="margin-top:.7rem">Gulir ke bawah ↓</p>
    </div>
  </div>
</section>

<section id="salam" class="lt"><img class="orn sd l" src="assets/flower-side.png" alt="" onerror="this.remove()">
  <div class="in-w wide">
    <p class="rv" style="font:400 2rem var(--s)">Assalamu’alaikum Wr. Wb.</p>
    <p class="rv">Ya Allah, kami mengucapkan syukur atas kehendak-Mu, yang telah mengukuhkan kasih dalam kehidupan berkeluarga bagi putra-putri kami :</p>
    <div class="pair">
      <div><figure class="arch rv"><img src="assets/bride.jpg" alt="Mempelai wanita" onerror="this.remove()"></figure><p class="nm rv" id="b-n"></p><p class="rv" id="b-p"></p></div>
      <div class="dg rv">dengan</div>
      <div style="position:relative"><img class="bf m" src="assets/butterfly.png" alt="" style="top:-6px;left:calc(50% + 48px);--w:38px;--r:-10deg" onerror="this.remove()"><figure class="arch rv"><img src="assets/groom.jpg" alt="Mempelai pria" onerror="this.remove()"></figure><p class="nm rv" id="g-n"></p><p class="rv" id="g-p"></p><p class="rv" id="g-p2"></p></div>
    </div>
  </div>
</section>

<section id="story" class="lt"><img class="orn sd r" src="assets/flower-side.png" alt="" onerror="this.remove()">
  <div class="in-w"><h2 class="wr">Love Story</h2><div class="tm" id="tl"></div></div>
</section>

<section id="acara" class="lt"><img class="orn sd l" src="assets/flower-side.png" alt="" onerror="this.remove()">
  <div class="in-w"><h2 class="wr">Hari Bahagia</h2>
    <p class="rv">Sebagai rasa syukur atas berkat rahmat Allah SWT dan kemurahan kasih-Nya, kami bermaksud menyelenggarakan acara pernikahan putra-putri kami yang Insya Allah akan dilaksanakan pada :</p>
    <div class="ev" id="ev"></div>
    <p><b id="v-n" style="font-size:1.5rem"></b></p><p class="sm" id="v-a"></p><br>
    <a class="btn" id="map" target="_blank" rel="noopener">LIHAT LOKASI</a>
    <p class="rv" style="margin-top:2rem">Suatu kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan do’a restu kepada kedua putra-putri kami.</p>
    <div id="dnh">
    <h2 class="wr" style="font-size:2.6rem;margin:2.4rem 0 1rem">Denah Lokasi</h2>
    <button class="den rv" id="den" aria-label="Perbesar denah lokasi"><img alt="Denah lokasi" onerror="var d=document.getElementById('dnh');d&&d.remove()"></button>
    <p class="sm" style="margin-top:.6rem;opacity:.8">Ketuk denah untuk memperbesar</p>
    </div>
  </div>
</section>

<section id="hitung"><img class="orn sd r" src="assets/flower-side.png" alt="" onerror="this.remove()">
  <div class="in-w"><h2 class="wr">Menghitung Hari</h2>
    <div style="position:relative"><div class="cd" id="cd" aria-live="off"></div><img class="bf m" src="assets/butterfly.png" alt="" style="top:-28px;left:calc(50% + 40px);--w:38px;--r:-6deg" onerror="this.remove()"></div>
    <a class="btn o" id="cal" target="_blank" rel="noopener">SIMPAN TANGGAL</a>
  </div>
</section>

<section id="galeri"><img class="orn sd l" src="assets/flower-side.png" alt="" onerror="this.remove()">
  <h2 class="wr">Our Moment</h2>
  <div class="gal-wrap"><div class="gal-track" id="gal"></div></div>
  <p class="sm" style="margin-top:1rem;opacity:.6">Ketuk salah satu foto untuk memperbesar</p>
</section>


<section id="hadiah"><img class="orn sd r" src="assets/flower-side.png" alt="" onerror="this.remove()">
  <div class="in-w"><h2 class="wr">Hadiah</h2>
    <p>Doa restu Anda sudah lebih dari cukup. Bila berkenan berbagi kado, kami sediakan pilihan berikut.</p>
    <div id="bk"></div><p class="sm" id="ad"></p>
  </div>
</section>

<section id="rsvp"><img class="orn sd l" src="assets/flower-side.png" alt="" onerror="this.remove()">
  <div class="in-w"><h2 class="wr">Konfirmasi Kehadiran</h2>
    <form id="f">
      <label>Nama<input name="nama" id="nama" required maxlength="60"></label>
      <label>Kehadiran<select name="hadir" required><option value="">Pilih</option><option>Hadir</option><option>Tidak hadir</option></select></label>
      <label>Jumlah tamu<select name="jml"><option>1</option><option>2</option><option>3</option></select></label>
      <label>Ucapan dan doa<textarea name="ucap" rows="4" required maxlength="400"></textarea></label>
      <button class="btn" type="submit">KIRIM KONFIRMASI</button><p id="msg" role="status"></p>
    </form>
    <h2 class="wr" style="margin-top:3rem;font-size:2.4rem">Ucapan dan Doa</h2><div id="wl"></div>
  </div>
</section>
</main>

<footer>
  <img class="orn fb" src="assets/flower-base.png" alt="" onerror="this.remove()">
  <p class="ay">Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang.</p>
  <p class="sm" style="margin:.6rem 0 0;opacity:.8">QS Ar-Rum: 21</p>
  <p class="hd">♥</p>
  <p class="tmh">Turut Mengundang</p>
  <div class="cols" id="f-tm"></div>
  <p class="hd" style="margin-top:2.6rem">♥</p>
  <p class="sub">Kami yang berbahagia</p>
  <div style="position:relative;display:inline-block"><p class="n" id="f-n"></p><img class="bf" src="assets/butterfly.png" alt="" style="top:-14px;right:-30px;--w:42px;--r:10deg" onerror="this.remove()"></div>
  <div class="cols">
    <div><p class="fam" id="f-b"></p></div>
    <div><p class="fam" id="f-g"></p><p class="fam" id="f-g2" style="opacity:.8;margin-top:.3rem"></p></div>
  </div>
  <p class="sm" style="margin-top:3rem;opacity:.8">Wassalamu’alaikum Wr. Wb.</p>
</footer>
<div id="dz" role="dialog" aria-label="Denah lokasi"><button class="x" aria-label="Tutup">×</button><div class="dzs"><img alt="Denah lokasi"></div></div>
<div id="lb" role="dialog" aria-label="Foto"><button class="x" aria-label="Tutup">×</button><button class="nv p" aria-label="Foto sebelumnya">‹</button><img alt=""><button class="nv n" aria-label="Foto berikutnya">›</button></div>
`);

/* ====== DATA BERSAMA ====== */
const BASE={
 a:"Annisa",b:"Rifki",   // urutan tampil: a = mempelai wanita, b = mempelai pria

 gFull:"Moch. Rifky Fahrezi",bFull:"Annisa Putri Azzahra, S.Ak.",
 gPar:"Putra dari Bapak Mohammad Irfan (Alm.) & Ibu Emma Cintasih Amalia",gPar2:"Bapak Utep Dedi Sutardi, SP",bPar:"Putri dari Bapak Dindin Sungkawa & Ibu Iim Imaswati",
 famB:"Keluarga Bpk. Dindin Sungkawa & Ibu Iim Imaswati",famG:"Keluarga Bpk. Mohammad Irfan (Alm.) & Ibu Emma Cintasih Amalia",famG2:"Bapak Utep Dedi Sutardi, SP",
 tm:["Kel. Besar Bapak Pendi (Alm.) & Ibu Irah (Almh.)","Kel. Besar Bapak Tholib & Ibu Mae (Almh.)"],   // daftar "Turut Mengundang"

 story:[["Pertemuan Awal (2023)","Semuanya bermula dari sebuah pesan sederhana di Instagram. Dari obrolan ringan, kami saling mengenal, lalu perlahan tumbuh rasa nyaman yang membawa kami menjalin hubungan."],["Mengikat Janji (2025)","Kami memantapkan hati untuk saling mengikat. Sebuah promise ring menjadi saksi janji kecil kami, bahwa kami akan terus berjalan bersama dengan setia."],["Memutuskan Menikah (2026)","Dengan restu keluarga dan hati yang mantap, kami memutuskan melangkah ke jenjang yang lebih suci. Pada 6 Desember 2026, kami akan mengucap janji di hadapan Allah SWT, keluarga, dan orang-orang tersayang."]],
 gallery:6,
 banks:[{bank:"Bank Mandiri",no:"1320031943120",an:"Annisa Putri Azzahra"},{bank:"Bank BCA",no:"7753248511",an:"Annisa Putri Azzahra"}],
 address:"",   // alamat kirim kado (opsional, kosongkan jika tidak dipakai)
 // Isi ini agar RSVP & ucapan tersimpan di server dan terlihat semua tamu.
 // Kosongkan semua untuk mode demo (hanya tersimpan di HP masing-masing tamu).
 // Cara mendapatkannya ada di panduan yang menyertai file ini.
 bgTint:0.55,   // 0 = foto bg-texture.png tampil penuh, 1 = hanya gradasi biru (tanpa foto)
 eventId:"ikky-putri-2026",
 firebase:{apiKey:"AIzaSyBkfgwsNwRQayRF7h6z5D3dywwKqofIVxg",authDomain:"wedding-putri.firebaseapp.com",projectId:"wedding-putri",storageBucket:"wedding-putri.firebasestorage.app",messagingSenderId:"585133718790",appId:"1:585133718790:web:53ca7d3fc369e0cfe9f287",measurementId:"G-19YEGEEVYF"}
};
const C={...BASE,...(window.VER||{})};   // data versi (VER) menimpa/menambah data bersama
/* ========================== */
const $=s=>document.querySelector(s),T=(s,v)=>$(s).textContent=v;
function typeReveal(el){const t=el.textContent;el.textContent='';
 [...t].forEach((ch,i)=>{if(ch===' '){el.appendChild(document.createTextNode(' '));return}
  const s=document.createElement('span');s.className='wc';s.textContent=ch;
  s.style.transitionDelay=Math.min(i*48,1100)+'ms';el.appendChild(s)})}
document.querySelectorAll('h2.wr').forEach(typeReveal);
const BF=(st,c='')=>`<img class="bf ${c}" src="assets/butterfly.png" alt="" style="${st}" onerror="this.remove()">`;
const q=new URLSearchParams(location.search).get('to');
if(q){T('#to',q);$('#nama').value=q}
document.documentElement.style.setProperty('--tint',C.bgTint);
document.title=`The Wedding of ${C.a} & ${C.b}`;
T('#cv-n',`${C.a} & ${C.b}`);typeReveal($('#cv-n'));T('#h-a',C.a);T('#h-b',C.b);T('#h-d',C.dateText);T('#f-n',`${C.a} & ${C.b}`);T('#f-b',C.famB);T('#f-g',C.famG);T('#f-g2',C.famG2);T('#g-p2',C.gPar2);C.tm.forEach(t=>{const p=document.createElement('p');p.className='tmi';p.textContent=t;$('#f-tm').append(p)});
T('#g-n',C.gFull);T('#g-p',C.gPar);T('#b-n',C.bFull);T('#b-p',C.bPar);
T('#v-n',C.venue);T('#v-a',C.addr);$('#map').href=C.map;
if(C.denah){$('#den img').src=C.denah;$('#dz img').src=C.denah}else{$('#dnh').remove()}
$('#tl').innerHTML=C.story.map(s=>`<div class="rv"><b></b><span></span></div>`).join('');
document.querySelectorAll('#tl div').forEach((d,i)=>{d.firstChild.textContent=C.story[i][0];d.lastChild.textContent=C.story[i][1]});
$('#ev').innerHTML=C.events.map((e,i)=>`<div class="card rv">${i?'':BF('top:-22px;right:18px;--w:38px;--r:12deg')}<h3>${e.t}</h3><strong>${C.dateText}</strong><span>${e.h}</span></div>`).join('');
{const srcs=Array.from({length:C.gallery},(_,i)=>`assets/gallery-${i+1}.jpg`);
 const item=(s,i)=>`<button class="gal-item rv" data-i="${i}" aria-label="Perbesar foto ${i+1}"><img loading="lazy" src="${s}" alt="Galeri ${i+1}" onerror="this.closest('button').remove()"></button>`;
 $('#gal').innerHTML=srcs.map(item).join('')+srcs.map(item).join(''); // dobel untuk loop mulus
 $('#gal').style.setProperty('--dur',(C.gallery*6)+'s');
 window.__galSrcs=srcs;}
$('#bk').innerHTML=C.banks.map((b,i)=>`<div class="bank rv"><span></span><b></b><span></span><br><br><button class="btn" data-c="${i}">SALIN NOMOR</button>${i?'':BF('top:-22px;left:20px;--w:36px;--r:-12deg','m')}</div>`).join('');
document.querySelectorAll('.bank').forEach((e,i)=>{const b=C.banks[i],n=e.children;n[0].textContent=b.bank;n[1].textContent=b.no;n[2].textContent="a.n. "+b.an});
T('#ad',C.address);if(!C.address)$('#ad').remove();
/* kalender */
const st=new Date(C.date),z=d=>d.toISOString().replace(/[-:]|\.\d+/g,'');
$('#cal').href=`https://calendar.google.com/calendar/r/eventedit?text=${encodeURIComponent('Pernikahan '+C.a+' & '+C.b)}&dates=${z(st)}/${z(new Date(+st+(C.dur||5)*36e5))}&location=${encodeURIComponent(C.venue)}`;
/* hitung mundur (tidak pernah negatif) */
function tick(){const s=Math.max(0,Math.floor((st-Date.now())/1000)),v=[['HARI',s/86400],['JAM',s%86400/3600],['MENIT',s%3600/60],['DETIK',s%60]];
 $('#cd').innerHTML=s||Date.now()<st+(C.dur||5)*36e5?v.map(([l,n])=>`<div><b>${String(Math.floor(n)).padStart(2,'0')}</b><span>${l}</span></div>`).join(''):'<p>Acara telah berlangsung. Terima kasih.</p>'}
tick();setInterval(tick,1000);
/* buka undangan + musik */
const au=$('#au'),mu=$('#mu');
{const f=$('#frame'),im=new Image();im.onload=()=>f.style.setProperty('--ar',im.naturalWidth+'/'+im.naturalHeight);im.onerror=()=>f.classList.add('nopng');im.src='assets/frame-card-fill.png'}
$('#open').onclick=()=>{
 $('#cover').classList.add('off');document.body.classList.remove('lock');
 mu.classList.add('on');au.play().then(()=>mu.classList.add('play')).catch(()=>{});
 setTimeout(()=>$('#frame').classList.add('draw'),500);   // 1. frame-card.png tersapu dari atas ke bawah
 setTimeout(()=>$('#frame').classList.add('fill'),2000);  // 2. frame-card-fill.png fade + blur
 setTimeout(()=>document.querySelectorAll('#hero,#hero .rv,#frame').forEach(e=>e.classList.add('in')),3400); // 3. teks & bunga frame
};
mu.onclick=()=>{au.paused?(au.play(),mu.classList.add('play')):(au.pause(),mu.classList.remove('play'))};
/* zoom denah */
{const dz=$('#dz');$('#den')&&($('#den').onclick=()=>dz.classList.add('on'));
 dz.querySelector('.x').onclick=()=>dz.classList.remove('on');
 dz.addEventListener('click',e=>{if(e.target===dz||e.target.classList.contains('dzs'))dz.classList.remove('on')});
 addEventListener('keydown',e=>e.key==='Escape'&&dz.classList.remove('on'))}
/* galeri lightbox dengan navigasi kiri-kanan */
const lb=$('#lb'),lbImg=lb.querySelector('img');
let lbIdx=0;
function showLb(i){const s=window.__galSrcs||[];if(!s.length)return;lbIdx=(i+s.length)%s.length;lbImg.src=s[lbIdx]}
$('#gal').onclick=e=>{const b=e.target.closest('button');if(!b)return;showLb(+b.dataset.i);lb.classList.add('on');$('#gal').classList.add('paused')};
const closeLb=()=>{lb.classList.remove('on');$('#gal').classList.remove('paused')};
lb.querySelector('.x').onclick=closeLb;
lb.querySelector('.p').onclick=()=>showLb(lbIdx-1);
lb.querySelector('.n').onclick=()=>showLb(lbIdx+1);
lb.addEventListener('click',e=>{if(e.target===lb)closeLb()});
addEventListener('keydown',e=>{if(!lb.classList.contains('on'))return;
 if(e.key==='Escape')closeLb();if(e.key==='ArrowLeft')showLb(lbIdx-1);if(e.key==='ArrowRight')showLb(lbIdx+1)});
let tsx=0;
lb.addEventListener('touchstart',e=>tsx=e.touches[0].clientX,{passive:true});
lb.addEventListener('touchend',e=>{const dx=e.changedTouches[0].clientX-tsx;if(Math.abs(dx)>40)showLb(lbIdx+(dx<0?1:-1))});
/* salin rekening */
$('#bk').onclick=async e=>{const c=e.target.dataset.c;if(c==null)return;const n=C.banks[c].no;
 try{await navigator.clipboard.writeText(n)}catch{const t=document.createElement('textarea');t.value=n;document.body.append(t);t.select();document.execCommand('copy');t.remove()}
 e.target.textContent='TERSALIN ✓';setTimeout(()=>e.target.textContent='SALIN NOMOR',1800)};
/* RSVP + ucapan — Firestore bersama (semua tamu lihat), atau mode demo lokal (hanya HP sendiri) */
const wl=$('#wl'),noteEl=document.createElement('p');
noteEl.className='sm';noteEl.style.cssText='margin-top:.8rem;opacity:.65';
wl.after(noteEl);
const useServer=!!C.firebase.projectId;
let col=null,W=[];
function render(list){wl.replaceChildren(...list.map(w=>{const d=document.createElement('div');d.className='wish';
 const b=document.createElement('b'),p=document.createElement('span'),m=document.createElement('span');
 b.textContent=w.nama;p.textContent=w.ucap;
 m.className='sm';m.style.cssText='display:block;margin-top:.4rem;opacity:.75';
 m.textContent=w.hadir?`${w.hadir}${w.jml?' · '+w.jml+' orang':''}`:'';
 d.append(b,p,m.textContent?m:'');return d}));
 if(!list.length)wl.innerHTML='<p class="sm">Jadilah yang pertama mengirim ucapan.</p>'}
if(useServer){
 noteEl.textContent='Ucapan tersimpan di server dan terlihat oleh semua tamu.';
 try{
  firebase.initializeApp(C.firebase);
  col=firebase.firestore().collection('wishes_'+C.eventId);
  col.orderBy('time','desc').limit(100).onSnapshot(
   snap=>render(snap.docs.map(d=>d.data())),
   ()=>noteEl.textContent='Gagal memuat ucapan dari server. Memuat ulang halaman dapat membantu.'
  );
 }catch{noteEl.textContent='Konfigurasi server bermasalah. Ucapan sementara tidak dapat dimuat.';col=null}
}else{
 noteEl.textContent='Mode demo: ucapan ini hanya tersimpan di perangkat Anda sendiri. Aktifkan Firebase agar semua tamu bisa saling melihat ucapan (lihat panduan).';
 try{W=JSON.parse(localStorage.getItem('wishes')||'[]')}catch{}
 render(W);
}
$('#f').onsubmit=async e=>{e.preventDefault();const btn=e.target.querySelector('button[type=submit]');
 const d=Object.fromEntries(new FormData(e.target));btn.disabled=true;
 const entry={nama:d.nama,ucap:d.ucap,hadir:d.hadir,jml:d.jml};
 try{
  if(col){await col.add({...entry,time:firebase.firestore.FieldValue.serverTimestamp()})}
  else{W.unshift(entry);try{localStorage.setItem('wishes',JSON.stringify(W.slice(0,50)))}catch{}render(W)}
  e.target.reset();T('#msg','Terima kasih, konfirmasi Anda sudah tercatat.');
 }catch{T('#msg','Gagal terkirim. Periksa koneksi lalu coba lagi.')}
 finally{btn.disabled=false}};
/* animasi muncul */
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.15});
document.querySelectorAll('.rv,.wr,section,footer').forEach(e=>{if(!e.closest('#hero,#cover'))io.observe(e)});
setTimeout(()=>$('#cv-n').classList.add('in'),400);
/* kupu-kupu: fase kepakan diacak agar tidak serempak */
document.querySelectorAll('.bf').forEach(b=>b.style.setProperty('--ad',-(Math.random()*2.6).toFixed(2)+'s'));
