(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const t of s)if(t.type==="childList")for(const u of t.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function e(s){const t={};return s.integrity&&(t.integrity=s.integrity),s.referrerPolicy&&(t.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?t.credentials="include":s.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(s){if(s.ep)return;s.ep=!0;const t=e(s);fetch(s.href,t)}})();const a=[{id:1,icon:"🛋️",name:"Sofa",value:120,loaded:!1},{id:2,icon:"🪑",name:"Stuhl",value:45,loaded:!1},{id:3,icon:"📺",name:"Fernseher",value:180,loaded:!1},{id:4,icon:"📦",name:"Umzugskiste",value:35,loaded:!1},{id:5,icon:"🌱",name:"Pflanze",value:60,loaded:!1}];let d=250,o=1,c=!1;const p=document.querySelector("#app");function l(){const r=a.filter(e=>e.loaded).length,n=a.reduce((e,i)=>e+i.value,0);p.innerHTML=`
    <header class="topbar">
      <div class="brand"><span class="brand-mark">M</span> MOVECRAFT</div>
      <div class="stats">
        <span>Unternehmenskasse <strong>${d.toLocaleString("de-DE")} €</strong></span>
        <span>LKW <strong>Stufe ${o}</strong></span>
      </div>
    </header>

    <main>
      <section class="hero">
        <p class="eyebrow">ERSTER ARBEITSTAG</p>
        <h1>Aus wenig Platz<br><em>viel Geschäft</em> machen.</h1>
        <p>Packe clever, liefere sicher und baue dein eigenes Umzugsimperium auf.</p>
        ${c?"":'<button class="primary" id="start-job">Ersten Auftrag starten</button>'}
      </section>

      <section class="job-card ${c?"active":""}">
        <div class="job-heading">
          <div>
            <p class="eyebrow">AUFTRAG #001</p>
            <h2>Altbau → neues Zuhause</h2>
          </div>
          <div class="reward">+${n} €</div>
        </div>

        <div class="workspace">
          <div class="room">
            <div class="zone-label">WOHNZIMMER</div>
            <div class="items">
              ${a.filter(e=>!e.loaded).map(e=>`
                <button class="cargo-item" data-id="${e.id}" aria-label="${e.name} verladen">
                  <span>${e.icon}</span><small>${e.name}</small>
                </button>
              `).join("")||'<p class="empty">Alles verladen!</p>'}
            </div>
          </div>

          <div class="truck">
            <div class="truck-cab">🚚</div>
            <div class="truck-hold">
              <div class="zone-label">LADERAUM ${r}/${a.length}</div>
              <div class="loaded-items">
                ${a.filter(e=>e.loaded).map(e=>`<button class="loaded-item" data-id="${e.id}" title="Zurückstellen">${e.icon}</button>`).join("")}
              </div>
            </div>
          </div>
        </div>

        <div class="job-footer">
          <div class="progress"><span style="width:${r/a.length*100}%"></span></div>
          <span>${r} von ${a.length} Gegenständen verladen</span>
          <button class="primary" id="finish-job" ${r!==a.length?"disabled":""}>Lieferung abschließen</button>
        </div>
      </section>

      <section class="garage">
        <div><p class="eyebrow">GARAGE</p><h2>Deine Flotte wächst mit dir.</h2></div>
        <button class="upgrade" id="upgrade" ${d<o*500?"disabled":""}>
          <span>Nächstes LKW-Upgrade</span><strong>${o*500} €</strong>
        </button>
      </section>
    </main>
  `,document.querySelector("#start-job")?.addEventListener("click",()=>{c=!0,l(),document.querySelector(".job-card")?.scrollIntoView({behavior:"smooth"})}),document.querySelectorAll("[data-id]").forEach(e=>{e.addEventListener("click",()=>{const i=a.find(s=>s.id===Number(e.dataset.id));i&&(i.loaded=!i.loaded),l()})}),document.querySelector("#finish-job")?.addEventListener("click",()=>{d+=n,a.forEach(e=>{e.loaded=!1}),c=!1,l()}),document.querySelector("#upgrade")?.addEventListener("click",()=>{const e=o*500;d>=e&&(d-=e,o+=1,l())})}l();
