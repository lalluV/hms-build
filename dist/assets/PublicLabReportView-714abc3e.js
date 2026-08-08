import{m as I,r as x,j as r}from"./index-e1e1133f.js";import{A as S}from"./api-aee67127.js";import{m as N,b as C,d as v,g as w,e as k,i as P,u as D,H as E}from"./PublicPrescriptionView-b9686dcb.js";import"./store-adc85da8.js";const B="/assets/logo-7f0cd0bc.png",O=async()=>(await N.get("/auth/hospital-profile")).data,ie=async e=>(await N.put("/auth/hospital-profile",e)).data,_="/staff",ce=async()=>v(_),G=async e=>C(_,e),F=async e=>v(`${_}/employee/${e}`),me=async e=>k(_,e),de=async(e,t)=>w(_,e,t),pe=async(e,t)=>(await N.put(`${_}/${e}/reset-password`,{newPassword:t})).data,ue=async e=>P(_,e),h="/stamps",ge=async()=>v(h),R=async e=>v(`${h}/department/${e}`),be=async e=>k(h,e),fe=async(e,t)=>w(h,e,t),_e=async e=>P(h,e),he=async e=>w(h,`${e}/toggle`,{}),xe=async(e,t)=>{const n=new FormData;n.append("stamp",e),n.append("name",t.name),n.append("description",t.description||""),n.append("department",t.department),n.append("category",t.category),n.append("createdBy",t.createdBy);const o=localStorage.getItem("token"),m={};o&&(m["x-auth-token"]=o);const l=await fetch(`${S.BASE_URL}/api/upload/stamp`,{method:"POST",headers:m,body:n});if(!l.ok){const s=await l.json();throw new Error(s.error||"Failed to upload stamp")}return l.json()},j=async e=>{try{let t;try{t=await F(e)}catch{t=await G(e)}return(t==null?void 0:t.signatureUrl)||null}catch(t){return console.error("Error fetching doctor signature:",t),null}},M=async e=>{try{const t=await R(e);return(t==null?void 0:t.filter(n=>n.isActive))||[]}catch(t){return console.error("Error fetching department stamps:",t),[]}},V=async()=>{try{const e=await R("General");return(e==null?void 0:e.filter(t=>t.isActive&&t.category==="hospital"))||[]}catch(e){return console.error("Error fetching hospital stamps:",e),[]}};function W(e,t="general"){const n=(e==null?void 0:e.settings)||{},o=[];return t==="pharmacy"&&n.drugLicenseNumber&&o.push({label:"DL No.",value:n.drugLicenseNumber}),o}function ye(e){var t;return((t=e==null?void 0:e.settings)==null?void 0:t.receiptFooterNote)||""}function $(e=[]){return e.filter(n=>n.isActive!==!1&&n.imageUrl)[0]||null}function q(e){return[e==null?void 0:e.address,[e==null?void 0:e.city,e==null?void 0:e.state].filter(Boolean).join(", "),e==null?void 0:e.zipCode].filter(Boolean).join(", ")}const K=`
  @page {
    size: A4 portrait;
    margin: 8mm 8mm 14mm 8mm;
  }
  @media print {
    body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    .no-print { display: none !important; }
  }
  body {
    color: #111827;
    font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
    font-size: 13px;
    line-height: 1.45;
    margin: 0;
    padding: 0;
  }
  .printable-document {
    color: #111827;
    font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
    font-size: 13px;
    line-height: 1.45;
    padding: 6mm 10mm;
  }
  .printable-document-header {
    border-bottom: 1px solid #e5e7eb;
    margin-bottom: 0.55rem;
    padding-bottom: 0.45rem;
  }
  .printable-document-header__grid {
    align-items: center;
    display: flex;
    gap: 0.85rem;
  }
  .printable-document-header__logo-wrap {
    align-items: center;
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    width: 72px;
  }
  .printable-document-header__logo {
    max-height: 48px;
    max-width: 72px;
    object-fit: contain;
  }
  .printable-document-header__content { flex: 1; min-width: 0; }
  .printable-document-header__title-row {
    align-items: baseline;
    display: flex;
    gap: 0.75rem;
    justify-content: space-between;
    margin-bottom: 0.15rem;
  }
  .printable-document-header__name {
    color: #233e82;
    font-size: 1.1rem;
    font-weight: 700;
    line-height: 1.2;
    margin: 0;
  }
  .printable-document-header__title {
    background: rgb(255 255 255 / 72%);
    border: 1px solid #b9cbea;
    border-left: 3px solid #233e82;
    color: #233e82;
    flex-shrink: 0;
    font-size: 0.68rem;
    font-weight: 600;
    letter-spacing: 0.05em;
    margin: 0;
    padding: 0.28rem 0.5rem;
    text-align: right;
    text-transform: uppercase;
  }
  .printable-document-header__meta {
    color: #475569;
    font-size: 0.69rem;
    line-height: 1.35;
    margin: 0.05rem 0 0;
  }
  .printable-document-footer {
    border-top: 1px solid #d6dee9;
    margin-top: 1.5rem;
    padding-top: 1rem;
  }
  .printable-document-footer__grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(2, minmax(0, 180px));
    justify-content: space-between;
  }
  .printable-document-footer__cell {
    min-height: 88px;
    text-align: center;
  }
  .printable-document-footer__image-wrap {
    align-items: center;
    display: flex;
    height: 56px;
    justify-content: center;
    margin: 0 auto 0.35rem;
  }
  .printable-document-footer__image {
    max-height: 52px;
    max-width: 100px;
    object-fit: contain;
  }
  .printable-document-footer__placeholder {
    align-items: center;
    border: 1px dashed #d1d5db;
    border-radius: 0.5rem;
    color: #9ca3af;
    display: flex;
    font-size: 10px;
    height: 52px;
    justify-content: center;
    margin: 0 auto 0.35rem;
    width: 88px;
  }
  .printable-document-footer__label {
    font-size: 0.75rem;
    font-weight: 600;
    margin: 0;
  }
  .printable-document-footer__sub {
    color: #6b7280;
    font-size: 0.65rem;
    margin: 0.15rem 0 0;
  }
  .printable-document-footer__disclaimer {
    color: #718096;
    font-size: 0.65rem;
    margin: 0.75rem 0 0;
    text-align: center;
  }
  .printable-document-footer__platform {
    align-items: center;
    border-top: 1px solid rgb(35 62 130 / 12%);
    color: #64748b;
    display: flex;
    font-size: 0.64rem;
    gap: 0.45rem;
    justify-content: center;
    margin-top: 0.5rem;
    padding-top: 0.45rem;
  }
  .printable-document-footer__platform-logo {
    display: block;
    height: auto;
    max-height: 24px;
    object-fit: contain;
    width: 72px;
  }
  .printable-document-footer__platform-copy {
    display: flex;
    flex-direction: column;
    line-height: 1.15;
    text-align: left;
  }
  .printable-document-footer__platform-copy > span {
    color: #334155;
    font-weight: 600;
  }
  .printable-document-footer__platform-copy small {
    color: #7c8798;
    font-size: 0.5rem;
    letter-spacing: 0.015em;
    margin-top: 0.08rem;
  }
  .cr-meta-grid {
    display: grid;
    gap: 0.65rem 1rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    margin-bottom: 0.65rem;
  }
  .cr-meta-block__heading {
    color: #233e82;
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    margin: 0 0 0.2rem;
    text-transform: uppercase;
  }
  .cr-meta-block__row {
    font-size: 0.7rem;
    margin: 0.05rem 0;
  }
  .cr-table {
    border: 1px solid #d1d5db;
    border-collapse: collapse;
    font-size: 0.65rem;
    margin-bottom: 0.65rem;
    width: 100%;
  }
  .cr-table th, .cr-table td {
    border: 1px solid #d1d5db;
    padding: 0.12rem 0.28rem;
    vertical-align: top;
  }
  .cr-table th {
    background: #f3f4f6;
    font-size: 0.6rem;
    font-weight: 600;
    letter-spacing: 0.01em;
    text-align: left;
    text-transform: uppercase;
  }
  .cr-result-normal { color: #059669; font-weight: 600; }
  .cr-result-abnormal { color: #dc2626; font-weight: 600; }
  .cr-result-pending { color: #6b7280; font-style: italic; }
  .cr-report-content {
    background: #f9fafb;
    border: 1px solid #e5e7eb;
    border-radius: 0.35rem;
    font-family: ui-monospace, monospace;
    font-size: 0.75rem;
    line-height: 1.5;
    margin-bottom: 0.75rem;
    padding: 0.55rem 0.7rem;
    white-space: pre-wrap;
  }
  .cr-print-btn {
    background: #233e82;
    border: none;
    border-radius: 0.5rem;
    color: white;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    margin: 1rem auto;
    padding: 0.6rem 1.25rem;
  }
`;function L(e,{documentTitle:t,departmentName:n}){const o=W(e,"lab"),m=q(e),l=[e!=null&&e.phone?`Phone: ${e.phone}`:null,(e==null?void 0:e.email)||null,n||null,...o.map(({label:s,value:c})=>`${s}: ${c}`)].filter(Boolean);return`
    <header class="printable-document-header">
      <div class="printable-document-header__grid">
        ${e!=null&&e.logoUrl?`<div class="printable-document-header__logo-wrap">
                <img src="${e.logoUrl}" alt="${e.name||"Hospital"}" class="printable-document-header__logo" />
              </div>`:""}
        <div class="printable-document-header__content">
          <div class="printable-document-header__title-row">
            <h1 class="printable-document-header__name">${(e==null?void 0:e.name)||"Hospital"}</h1>
            ${t?`<p class="printable-document-header__title">${t}</p>`:""}
          </div>
          ${m?`<p class="printable-document-header__meta">${m}</p>`:""}
          ${l.length?`<p class="printable-document-header__meta">${l.join(" · ")}</p>`:""}
        </div>
      </div>
    </header>
  `}function Y(e,t,n=""){return`
    <div class="printable-document-footer__cell">
      <div class="printable-document-footer__image-wrap">
        ${e?`<img src="${e}" alt="${t}" class="printable-document-footer__image" />`:'<div class="printable-document-footer__placeholder">Signature</div>'}
      </div>
      <p class="printable-document-footer__label">${t}</p>
      ${n?`<p class="printable-document-footer__sub">${n}</p>`:""}
    </div>
  `}function J(e,t){return`
    <div class="printable-document-footer__cell">
      <div class="printable-document-footer__image-wrap">
        ${e!=null&&e.imageUrl?`<img src="${e.imageUrl}" alt="${e.name||t}" class="printable-document-footer__image" />`:`<div class="printable-document-footer__placeholder">${t}</div>`}
      </div>
      <p class="printable-document-footer__label">${t}</p>
      ${e!=null&&e.name?`<p class="printable-document-footer__sub">${e.name}</p>`:""}
    </div>
  `}function A({technicianSignature:e,technicianName:t,reviewerSignature:n,reviewerName:o,departmentStamp:m,hospitalStamp:l,primaryLabel:s="Lab Technician",secondaryLabel:c="Verified By"}){return`
    <footer class="printable-document-footer">
      <div class="printable-document-footer__grid">
        ${Y(e||n||null,e?s:n?c:s,t||o||"")}
        ${J(l||m,"Hospital Stamp")}
      </div>
      <p class="printable-document-footer__disclaimer">
        This is a computer-generated clinical report. For queries, contact the laboratory or radiology department.
      </p>
      <div class="printable-document-footer__platform">
        <img src="${B}" alt="HealEka" class="printable-document-footer__platform-logo" />
        <span class="printable-document-footer__platform-copy">
          <span>Powered by HealEka</span>
          <small>Smart hospitals. Connected care.</small>
        </span>
      </div>
    </footer>
  `}function T(e,t){const n=(o,m)=>`
    <div>
      <p class="cr-meta-block__heading">${o}</p>
      ${m.map(({label:l,value:s})=>`<p class="cr-meta-block__row"><strong>${l}:</strong> ${s??"—"}</p>`).join("")}
    </div>
  `;return`
    <div class="cr-meta-grid">
      ${n(e.heading||"Patient",e.rows)}
      ${n(t.heading||"Report",t.rows)}
    </div>
  `}function U(e){return typeof(e==null?void 0:e.normal_range)=="string"?e.normal_range:e!=null&&e.normal_range?`${e.normal_range.adult_male||"N/A"} (M) / ${e.normal_range.adult_female||"N/A"} (F)`:"N/A"}function Q(e){return!(e==null||typeof e=="string"&&!e.trim())}function X(e,t={}){var l;const n=e._id||e.code;return`
    <table class="cr-table">
      <thead>
        <tr>
          <th>Parameter</th>
          <th>Result</th>
          <th>Reference Range</th>
          <th>Unit</th>
        </tr>
      </thead>
      <tbody>${(((l=e.parameters)==null?void 0:l.map(s=>{var g;const c=(g=t[n])==null?void 0:g[s.id||s.name],a=(c==null?void 0:c.value)??s.result;if(!Q(a))return null;const d=(c==null?void 0:c.isAbnormal)??s.isAbnormal?"cr-result-abnormal":"cr-result-normal";return`
        <tr>
          <td><strong>${s.name}</strong></td>
          <td class="${d}">${a}</td>
          <td>${U(s)}</td>
          <td>${s.units||"N/A"}</td>
        </tr>
      `}).filter(Boolean))||[]).join("")||'<tr><td colspan="4" style="text-align:center;padding:1rem;">No results available</td></tr>'}</tbody>
    </table>
  `}async function ve(e,t=[]){const[n,o,m]=await Promise.all([O(),M("Laboratory"),V()]);let l=null,s="",c=null,a="";if((e==null?void 0:e.type)==="LabTechnician"&&(e!=null&&e.id))l=e.signatureUrl||await j(e.id),s=e.name||"";else{const d=t.find(g=>g.type==="LabTechnician"&&g.active!==!1);d!=null&&d.id&&(l=d.signatureUrl||await j(d.id),s=d.name||"")}const p=t.find(d=>d.type==="Doctor"&&d.active!==!1)||null;return p!=null&&p.id&&(c=p.signatureUrl||await j(p.id),a=p.name||""),{hospital:n,technicianSignature:l,technicianName:s,reviewerSignature:c,reviewerName:a,departmentStamp:$(o),hospitalStamp:$(m)}}function H({title:e,bodyHtml:t}){const n=window.open("","_blank");n&&(n.document.write(`<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>${e}</title>
        <style>${K}</style>
      </head>
      <body>
        <div class="printable-document">
          ${t}
        </div>
        <div class="no-print" style="text-align:center;">
          <button class="cr-print-btn" onclick="window.print()">Print Report</button>
        </div>
      </body>
    </html>
  `),n.document.close())}function je({hospital:e,assets:t,receipt:n,test:o,reportContent:m}){const l=new Date,s=`
    ${L(e,{documentTitle:"Radiology Report",departmentName:"Department of Radiology"})}
    ${T({heading:"Patient",rows:[{label:"Name",value:n==null?void 0:n.patientName},{label:"Phone",value:n==null?void 0:n.patientPhone}]},{heading:"Study",rows:[{label:"Test",value:o==null?void 0:o.name},{label:"Date",value:l.toLocaleDateString("en-IN")},{label:"Time",value:l.toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit"})}]})}
    <div class="cr-report-content">${m||"No report content available."}</div>
    ${A({hospital:e,...t,primaryLabel:"Radiologist",secondaryLabel:"Verified By"})}
  `;H({title:`Radiology Report - ${(o==null?void 0:o.name)||"Report"}`,bodyHtml:s})}function Ne({hospital:e,assets:t,receipt:n,test:o,resultsMap:m}){const l=new Date,s=`
    ${L(e,{documentTitle:"Laboratory Report",departmentName:"Department of Laboratory Medicine"})}
    ${T({heading:"Patient",rows:[{label:"Name",value:n==null?void 0:n.patientName},{label:"Phone",value:n==null?void 0:n.patientPhone}]},{heading:"Test",rows:[{label:"Test",value:o==null?void 0:o.name},{label:"Department",value:o==null?void 0:o.deptname},{label:"Date",value:l.toLocaleDateString("en-IN")}]})}
    ${X(o,m)}
    ${A({hospital:e,...t})}
  `;H({title:`Laboratory Report - ${(o==null?void 0:o.name)||"Report"}`,bodyHtml:s})}function y(e){if(!e)return"—";const t=new Date(e);return Number.isNaN(t.getTime())?"—":t.toLocaleDateString("en-IN")+" "+t.toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit"})}function Z(e){return[e==null?void 0:e.address,[e==null?void 0:e.city,e==null?void 0:e.state].filter(Boolean).join(", "),e==null?void 0:e.zipCode].filter(Boolean).join(", ")}function ee(e){return e.isAbnormal?"Abnormal":"Normal"}function te(e){var t;return e.resultStatus==="completed"?"Completed":(t=e.parameters)!=null&&t.length?"In progress":"Pending"}function re(){const{token:e}=I(),[t,n]=x.useState(null),[o,m]=x.useState(!0),[l,s]=x.useState("");if(x.useEffect(()=>{let i=!1;return(async()=>{if(e)try{m(!0),s("");const f=await fetch(S.getApiUrl(`/diagnostics-receipts/public/${e}`)),u=await f.json().catch(()=>({}));if(!f.ok)throw new Error((u==null?void 0:u.message)||"This lab report link is invalid or has expired.");i||n(u)}catch(f){i||s(f.message||"This lab report link is invalid or has expired.")}finally{i||m(!1)}})(),()=>{i=!0}},[e]),D(!!t,{mobileOnly:!0}),o)return r.jsx("div",{className:"ppv-shell ppv-shell--state",children:r.jsxs("div",{className:"ppv-state",children:[r.jsx("div",{className:"ppv-state__spinner","aria-hidden":!0}),r.jsx("p",{children:"Loading lab report…"})]})});if(l||!t)return r.jsx("div",{className:"ppv-shell ppv-shell--state",children:r.jsxs("div",{className:"ppv-state",children:[r.jsx("h1",{children:"Lab report unavailable"}),r.jsx("p",{children:l||"This lab report link is invalid or has expired."})]})});const{hospital:c,receipt:a}=t,p=(a==null?void 0:a.items)||[],d=p.flatMap(i=>(i.parameters||[]).filter(b=>b.remarks).map(b=>({testName:i.name,paramName:b.name,remarks:b.remarks,key:`${i.code||i.name}-${b.name}`}))),g=Z(c);return r.jsxs("div",{className:"ppv-shell",children:[r.jsx("header",{className:"ppv-topbar no-print",children:r.jsxs("div",{className:"ppv-topbar__brand",children:[c!=null&&c.logoUrl?r.jsx("img",{src:c.logoUrl,alt:"",className:"ppv-topbar__logo"}):null,r.jsxs("div",{className:"ppv-topbar__text",children:[r.jsx("p",{className:"ppv-topbar__name",children:(c==null?void 0:c.name)||"Lab Report"}),r.jsxs("p",{className:"ppv-topbar__sub",children:["Laboratory Report · ",y(a==null?void 0:a.createdAt)]})]})]})}),r.jsxs("div",{className:"ppv-page",children:[r.jsxs("div",{className:"ppv-screen-only",children:[r.jsxs("section",{className:"ppv-summary",children:[r.jsxs("div",{className:"ppv-summary__block",children:[r.jsx("p",{className:"ppv-summary__label",children:"Patient"}),r.jsx("p",{className:"ppv-summary__value",children:(a==null?void 0:a.patientName)||"—"}),a!=null&&a.patientPhone?r.jsx("p",{className:"ppv-summary__meta",children:a.patientPhone}):null]}),r.jsxs("div",{className:"ppv-summary__block",children:[r.jsx("p",{className:"ppv-summary__label",children:"Report"}),r.jsx("p",{className:"ppv-summary__value",children:(a==null?void 0:a.receiptId)||"Lab results"}),r.jsx("p",{className:"ppv-summary__meta",children:y(a==null?void 0:a.createdAt)})]})]}),g?r.jsx("p",{className:"ppv-summary__meta",style:{margin:"0 1rem 1rem"},children:g}):null]}),r.jsx("div",{className:"ppv-print-area",children:r.jsx("div",{className:"prescription-print-sheet lab-report-print-sheet",children:r.jsxs("div",{className:"printable-document",children:[r.jsx(E,{hospital:c,documentTitle:"Laboratory Test Report"}),r.jsxs("div",{className:"lab-report-print-body",children:[r.jsxs("div",{className:"printable-receipt-meta lab-report-print-meta",children:[r.jsxs("div",{className:"printable-receipt-meta__block",children:[r.jsx("p",{className:"printable-receipt-meta__heading",children:"Patient"}),r.jsxs("p",{className:"printable-receipt-meta__row",children:[r.jsx("strong",{children:"Name:"})," ",(a==null?void 0:a.patientName)||"—"]}),r.jsxs("p",{className:"printable-receipt-meta__row",children:[r.jsx("strong",{children:"Phone:"})," ",(a==null?void 0:a.patientPhone)||"N/A"]})]}),r.jsxs("div",{className:"printable-receipt-meta__block",children:[r.jsx("p",{className:"printable-receipt-meta__heading",children:"Report"}),r.jsxs("p",{className:"printable-receipt-meta__row",children:[r.jsx("strong",{children:"Date:"})," ",y(a==null?void 0:a.createdAt)]}),r.jsxs("p",{className:"printable-receipt-meta__row",children:[r.jsx("strong",{children:"Total tests:"})," ",p.length]})]})]}),p.length>0?r.jsxs("table",{className:"printable-table lab-report-print-table",children:[r.jsx("thead",{children:r.jsxs("tr",{children:[r.jsx("th",{children:"Parameter"}),r.jsx("th",{children:"Result"}),r.jsx("th",{children:"Reference"}),r.jsx("th",{children:"Unit"})]})}),r.jsx("tbody",{children:p.map(i=>{const b=i.parameters||[],f=[i.deptname,te(i),i.completedAt?y(i.completedAt):null].filter(Boolean).join(" · ");return r.jsxs(x.Fragment,{children:[r.jsx("tr",{className:"lab-report-print-table__test-row",children:r.jsxs("td",{colSpan:4,children:[r.jsx("span",{className:"lab-report-print-table__test-name",children:i.name}),f?r.jsxs("span",{className:"lab-report-print-table__test-meta",children:[" ","· ",f]}):null]})}),b.map(u=>{const z=ee(u)==="Abnormal"?"cr-result-abnormal":"cr-result-normal";return r.jsxs("tr",{children:[r.jsx("td",{children:u.name}),r.jsx("td",{className:z,children:u.result}),r.jsx("td",{children:U(u)}),r.jsx("td",{children:u.units||"—"})]},`${i.code||i.name}-${u.name}`)})]},i.code||i.name)})})]}):r.jsx("p",{className:"lab-report-test-block__empty",children:"No laboratory results available."}),d.length>0?r.jsxs("div",{className:"lab-report-remarks",children:[r.jsx("p",{className:"lab-report-remarks__title",children:"Remarks"}),d.map(i=>r.jsxs("p",{className:"lab-report-remarks__row",children:[r.jsxs("strong",{children:[i.testName," · ",i.paramName,":"]})," ",i.remarks]},i.key))]}):null]})]})})})]})]})}const we=Object.freeze(Object.defineProperty({__proto__:null,default:re},Symbol.toStringTag,{value:"Module"}));export{B as L,re as P,ie as a,ce as b,de as c,ue as d,V as e,j as f,M as g,W as h,ye as i,U as j,Ne as k,ve as l,O as m,pe as n,me as o,je as p,F as q,G as r,ge as s,xe as t,fe as u,be as v,_e as w,he as x,we as y};
