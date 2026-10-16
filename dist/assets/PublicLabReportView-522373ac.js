import{j as n,m as Q,r as L}from"./index-db8c9d01.js";import{A as C}from"./api-488bac53.js";import{m as A,o as T,p as Y,q as B,v as z,t as I,u as K,b as P,G as J,L as X,e as Z,A as D,j as ee,H as re,P as ne}from"./PrintableDocumentFooter-b26ac34a.js";import"./store-f08bdc5b.js";/* empty css                               */const te=async()=>(await A.get("/auth/hospital-profile")).data,Pe=async e=>(await A.put("/auth/hospital-profile",e)).data,j="/staff",ke=async()=>T(j),le=async e=>Y(j,e),oe=async e=>T(`${j}/employee/${e}`),Le=async e=>z(j,e),Te=async(e,r)=>B(j,e,r),Ue=async(e,r)=>(await A.put(`${j}/${e}/reset-password`,{newPassword:r})).data,Ae=async e=>I(j,e),$="/stamps",Be=async()=>T($),G=async e=>T(`${$}/department/${e}`),He=async e=>z($,e),Me=async(e,r)=>B($,e,r),Ce=async e=>I($,e),ze=async e=>B($,`${e}/toggle`,{}),Ie=async(e,r)=>{const t=new FormData;t.append("stamp",e),t.append("name",r.name),t.append("description",r.description||""),t.append("department",r.department),t.append("category",r.category),t.append("createdBy",r.createdBy);const o=localStorage.getItem("token"),s={};o&&(s["x-auth-token"]=o);const c=await fetch(`${C.BASE_URL}/api/upload/stamp`,{method:"POST",headers:s,body:t});if(!c.ok){const m=await c.json();throw new Error(m.error||"Failed to upload stamp")}return c.json()},U=async e=>{try{let r;try{r=await oe(e)}catch{r=await le(e)}return(r==null?void 0:r.signatureUrl)||null}catch(r){return console.error("Error fetching doctor signature:",r),null}},se=async e=>{try{const r=await G(e);return(r==null?void 0:r.filter(t=>t.isActive))||[]}catch(r){return console.error("Error fetching department stamps:",r),[]}},ae=async()=>{try{const e=await G("General");return(e==null?void 0:e.filter(r=>r.isActive&&r.category==="hospital"))||[]}catch(e){return console.error("Error fetching hospital stamps:",e),[]}};function ie(e,r="general"){const t=(e==null?void 0:e.settings)||{},o=[],s=r==="pharmacy"&&t.pharmacyGstNumber||t.gstNumber;return s&&o.push({key:"gst",label:"GSTIN",value:s}),t.panNumber&&o.push({key:"pan",label:"PAN",value:t.panNumber}),r==="pharmacy"&&t.drugLicenseNumber&&o.push({key:"dl",label:"DL No.",value:t.drugLicenseNumber}),r==="lab"&&t.labLicenseNumber&&o.push({key:"ll",label:"Lab Lic. No.",value:t.labLicenseNumber}),o}function me(e,r){if(r.showPatientAgeGender===!1)return"";const t=(e==null?void 0:e.age)||(e==null?void 0:e.patientAge),o=(e==null?void 0:e.gender)||(e==null?void 0:e.patientGender),s=[t?`${t} Y`:null,o].filter(Boolean);return s.length>0?s.join(" / "):""}function ce(e,r){const t=String(e||"").toLowerCase();return!((t.includes("bill")||t.includes("receipt")||t.includes("invoice"))&&r.showBillNumber===!1||(t.includes("date")||t.includes("time"))&&r.showBillDateTime===!1||t.includes("payment")&&r.showPaymentMethod===!1||t.includes("token")&&r.showTokenNumber===!1)}function de({patientData:e,doctorData:r,extraFields:t=[],extraFieldsHeading:o="Report Details"}){const s=K(),c=(e==null?void 0:e.UMRNo)||(e==null?void 0:e.patientUMRNo)||(e==null?void 0:e.umrNo)||"",m=me(e,s),i=(e==null?void 0:e.phone)||(e==null?void 0:e.patientPhone),l=(e==null?void 0:e.patient_type)||(e==null?void 0:e.visitType),a=(e==null?void 0:e.address)||(e==null?void 0:e.street_address),d=(e==null?void 0:e.bloodGroup)||(e==null?void 0:e.blood_group),p=(e==null?void 0:e.tokenNumber)||(e==null?void 0:e.token),g=[s.showPatientName!==!1&&{label:"Name",value:(e==null?void 0:e.name)||(e==null?void 0:e.patientName)||"-"},s.showPatientUMR!==!1&&c&&{label:"UMR",value:c},m&&{label:"Age/Gender",value:m},s.showPatientBloodGroup!==!1&&d&&{label:"Blood Group",value:d},s.showPatientPhone!==!1&&i&&{label:"Phone",value:i},s.showVisitType!==!1&&l&&{label:"Type",value:n.jsx("span",{className:"uppercase",children:l})},s.showTokenNumber!==!1&&p&&{label:"Token",value:p},s.showPatientAddress!==!1&&a&&{label:"Address",value:a}].filter(Boolean),h=String((r==null?void 0:r.name)||(r==null?void 0:r.doctorName)||(r==null?void 0:r.consultantDoctor)||(r==null?void 0:r.consultantName)||"").trim(),f=!!(h&&!["-","N/A","UNDEFINED","NULL"].includes(h.toUpperCase()))?[s.showDoctorName!==!1&&{label:"Doctor",value:h},s.showDoctorQualification!==!1&&(r==null?void 0:r.qualification)&&{label:"Qualification",value:r.qualification},s.showDoctorSpecialization!==!1&&(r==null?void 0:r.specialization)&&{label:"Specialization",value:r.specialization},s.showDepartment!==!1&&(r==null?void 0:r.department)&&r.department!==(r==null?void 0:r.specialization)&&{label:"Department",value:r.department},s.showDoctorRegNo!==!1&&(r==null?void 0:r.regNo)&&{label:"Reg No",value:r.regNo}].filter(Boolean):[],y=t.filter(({label:v,value:x})=>x&&ce(v,s));if(!g.length&&!f.length&&!y.length)return null;const _=v=>v.map(({label:x,value:S})=>n.jsxs("p",{className:"printable-receipt-meta__row",children:[n.jsxs("strong",{children:[x,":"]})," ",S]},x));return n.jsxs("div",{className:"printable-receipt-meta",children:[g.length>0&&n.jsxs("div",{className:"printable-receipt-meta__block",children:[n.jsx("p",{className:"printable-receipt-meta__heading",children:"Patient Details"}),_(g)]}),f.length>0&&n.jsxs("div",{className:"printable-receipt-meta__block",children:[n.jsx("p",{className:"printable-receipt-meta__heading",children:"Doctor / Consultant"}),_(f)]}),y.length>0&&n.jsxs("div",{className:"printable-receipt-meta__block",children:[n.jsx("p",{className:"printable-receipt-meta__heading",children:o}),_(y)]})]})}function H(e=[]){return e.filter(t=>t.isActive!==!1&&t.imageUrl)[0]||null}function pe(e){return[e==null?void 0:e.address,[e==null?void 0:e.city,e==null?void 0:e.state].filter(Boolean).join(", "),e==null?void 0:e.zipCode].filter(Boolean).join(", ")}const ue=`
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
    justify-content: flex-start;
    width: auto;
    max-width: 260px;
  }
  .printable-document-header__logo {
    display: block;
    height: auto;
    max-height: 80px;
    max-width: 240px;
    object-fit: contain;
    width: auto;
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
    break-inside: avoid;
    margin-top: 1.5rem;
    padding-top: 1rem;
    page-break-inside: avoid;
  }
  .printable-document-footer__grid {
    display: grid;
    gap: 0.75rem;
    grid-template-columns: repeat(2, minmax(0, 220px));
    justify-content: space-between;
  }
  .printable-document-footer__cell {
    min-height: 60px;
    text-align: center;
  }
  .printable-document-footer__image-wrap {
    align-items: center;
    display: flex;
    height: 46px;
    justify-content: center;
    margin: 0 auto 0.25rem;
    width: 100%;
  }
  .printable-document-footer__image {
    max-height: 44px;
    max-width: 130px;
    object-fit: contain;
  }
  .printable-document-footer__image-wrap--stamp {
    height: 60px;
  }
  .printable-document-footer__image--stamp {
    max-height: 58px;
    max-width: 140px;
    object-fit: contain;
  }
  .printable-document-footer__image-wrap--signature {
    height: 48px;
  }
  .printable-document-footer__image--signature {
    max-height: 46px;
    max-width: 130px;
    object-fit: contain;
  }
  .printable-document-footer__placeholder {
    align-items: center;
    border: 1px dashed #d1d5db;
    border-radius: 0.35rem;
    color: #9ca3af;
    display: flex;
    font-size: 10px;
    height: 40px;
    justify-content: center;
    margin: 0 auto 0.25rem;
    width: 90px;
  }
  .printable-document-footer__placeholder--stamp {
    height: 52px;
    width: 110px;
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
    font-size: 0.78rem;
    margin-bottom: 0.65rem;
    width: 100%;
  }
  .cr-table th, .cr-table td {
    border: 1px solid #d1d5db;
    padding: 0.22rem 0.35rem;
    vertical-align: top;
  }
  .cr-table th {
    background: #f3f4f6;
    font-size: 0.72rem;
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
  /* Print Page Table: header repeats on every printed page */
  .print-page-table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
  }
  .print-page-table,
  .print-page-table thead,
  .print-page-table tbody,
  .print-page-table tr,
  .print-page-table td {
    border: 0 !important;
    margin: 0;
    padding: 0;
  }
  .print-page-table td {
    vertical-align: top;
  }
  @media print {
    .print-page-table__header {
      display: table-header-group;
    }
  }
`;function E(e,{documentTitle:r,departmentName:t}){const o=P(e);if(o.printOnLetterhead||o.showHeader===!1)return r?`
        <header class="printable-document-header printable-document-header--letterhead" style="border-bottom:none; margin-bottom:1rem; text-align:center;">
          <p class="printable-document-header__title" style="display:inline-block; font-size:0.85rem; font-weight:700;">${r}</p>
        </header>
      `:"";const s=J(ie(e,"lab"),o),c=o.showAddress!==!1?pe(e):null,m=o.showLogo!==!1&&(e==null?void 0:e.logoUrl),i=o.showHospitalName!==!1,l=o.showContactInfo!==!1,a=[l&&(e!=null&&e.phone)?`Phone: ${e.phone}`:null,l&&(e!=null&&e.email)?e.email:null,t||null,...s.map(({label:d,value:p})=>`${d}: ${p}`)].filter(Boolean);return`
    <header class="printable-document-header">
      <div class="printable-document-header__grid">
        ${m?`<div class="printable-document-header__logo-wrap">
                <img src="${e.logoUrl}" alt="${(e==null?void 0:e.name)||"Hospital"}" class="printable-document-header__logo" />
              </div>`:""}
        <div class="printable-document-header__content">
          <div class="printable-document-header__title-row">
            ${i?`<h1 class="printable-document-header__name">${(e==null?void 0:e.name)||"Hospital"}</h1>`:"<div></div>"}
            ${r?`<p class="printable-document-header__title">${r}</p>`:""}
          </div>
          ${c?`<p class="printable-document-header__meta">${c}</p>`:""}
          ${a.length?`<p class="printable-document-header__meta">${a.join(" · ")}</p>`:""}
        </div>
      </div>
    </header>
  `}function ge(e,r,t=""){return`
    <div class="printable-document-footer__cell printable-document-footer__cell--signature">
      <div class="printable-document-footer__image-wrap printable-document-footer__image-wrap--signature">
        ${e?`<img src="${e}" alt="${r}" class="printable-document-footer__image printable-document-footer__image--signature" />`:'<div class="printable-document-footer__placeholder">Signature</div>'}
      </div>
      <p class="printable-document-footer__label">${r}</p>
      ${t?`<p class="printable-document-footer__sub">${t}</p>`:""}
    </div>
  `}function be(e,r){return`
    <div class="printable-document-footer__cell printable-document-footer__cell--stamp">
      <div class="printable-document-footer__image-wrap printable-document-footer__image-wrap--stamp">
        ${e!=null&&e.imageUrl?`<img src="${e.imageUrl}" alt="${e.name||r}" class="printable-document-footer__image printable-document-footer__image--stamp" />`:`<div class="printable-document-footer__placeholder printable-document-footer__placeholder--stamp">${r}</div>`}
      </div>
      <p class="printable-document-footer__label">${r}</p>
    </div>
  `}function O({hospital:e,technicianSignature:r,technicianName:t,reviewerSignature:o,reviewerName:s,departmentStamp:c,hospitalStamp:m,primaryLabel:i="Lab Incharge",secondaryLabel:l="Verified By"}){const a=P(e),d=a.showDoctorSignature!==!1||a.showAuthorizedSignature!==!1,p=a.showStamps!==!1,g=!!a.printOnLetterhead;if(g&&!d&&!p)return"";const h=r||o||null,R=t||s||"",f=r?i:o?l:i,y=!g&&a.showTermsAndConditions!==!1&&!!a.termsAndConditions,_=!g&&(a.showFooterNote!==!1&&a.footerNote||""),v=!g&&a.showPrintTimestamp!==!1,x=!g&&a.showComputerGeneratedDisclaimer!==!1,S=!g&&a.showPoweredBy!==!1,k=new Date().toLocaleString("en-IN",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0});return`
    <footer class="printable-document-footer${g?" printable-document-footer--letterhead":""}">
      ${y?`
          <div class="printable-document-footer__terms">
            <p class="printable-document-footer__terms-title">Terms & Conditions:</p>
            <p class="printable-document-footer__terms-body">${a.termsAndConditions}</p>
          </div>
        `:""}
      ${d||p?`
          <div class="printable-document-footer__grid">
            ${d?ge(h,f,R):"<div></div>"}
            ${p?be(m||c,"Hospital Stamp"):"<div></div>"}
          </div>
        `:""}
      ${_?`
          <div class="printable-document-footer__brand">
            <p class="printable-document-footer__note">${_}</p>
          </div>
        `:""}
      ${x?`
          <p class="printable-document-footer__disclaimer">
            This is a computer-generated clinical report. For queries, contact the laboratory or radiology department.${v?` (Printed: ${k})`:""}
          </p>
        `:""}
      ${S?`
          <div class="printable-document-footer__platform">
            <img src="${X}" alt="HealEka" class="printable-document-footer__platform-logo" />
            <span class="printable-document-footer__platform-copy">
              <span>Powered by HealEka</span>
              <small>Smart hospitals. Connected care.</small>
            </span>
          </div>
        `:""}
    </footer>
  `}function F(e,r,t){const o=P(t),s=l=>l.filter(({label:a})=>!(a.includes("Name")&&o.showPatientName===!1||a.includes("Phone")&&o.showPatientPhone===!1||a.includes("UMR")&&o.showPatientUMR===!1||a.includes("Date")&&o.showBillDateTime===!1)),c=s(e.rows||[]),m=s(r.rows||[]),i=(l,a)=>a.length?`
      <div>
        <p class="cr-meta-block__heading">${l}</p>
        ${a.map(({label:d,value:p})=>`<p class="cr-meta-block__row"><strong>${d}:</strong> ${p??"—"}</p>`).join("")}
      </div>
    `:"";return`
    <div class="cr-meta-grid">
      ${i(e.heading||"Patient",c)}
      ${i(r.heading||"Report",m)}
    </div>
  `}function V(e){return typeof(e==null?void 0:e.normal_range)=="string"?e.normal_range:e!=null&&e.normal_range?`${e.normal_range.adult_male||"N/A"} (M) / ${e.normal_range.adult_female||"N/A"} (F)`:"N/A"}function he(e){return!(e==null||typeof e=="string"&&!e.trim())}function fe(e,r={}){var c;const t=e._id||e.code;return`
    <table class="cr-table">
      <thead>
        <tr>
          <th style="width:38%;">Parameter</th>
          <th style="width:22%;">Result</th>
          <th style="width:25%;">Reference Range</th>
          <th style="width:15%;">Unit</th>
        </tr>
      </thead>
      <tbody>
        ${(((c=e.parameters)==null?void 0:c.map(m=>{var p;const i=(p=r[t])==null?void 0:p[m.id||m.name],l=(i==null?void 0:i.value)??m.result;if(!he(l))return null;const d=(i==null?void 0:i.isAbnormal)??m.isAbnormal?"cr-result-abnormal":"cr-result-normal";return`
        <tr>
          <td><strong>${m.name}</strong></td>
          <td class="${d}">${l}</td>
          <td>${V(m)}</td>
          <td>${m.units||"N/A"}</td>
        </tr>
      `}).filter(Boolean))||[]).join("")||'<tr><td colspan="4" style="text-align:center;padding:1rem;">No results available</td></tr>'}
      </tbody>
    </table>
  `}async function Ge(e,r=[]){const[t,o,s]=await Promise.all([te(),se("Laboratory"),ae()]);let c=null,m="",i=null,l="";if((e==null?void 0:e.type)==="LabTechnician"&&(e!=null&&e.id))c=e.signatureUrl||await U(e.id),m=e.name||"";else{const d=r.find(p=>p.type==="LabTechnician"&&p.active!==!1);d!=null&&d.id&&(c=d.signatureUrl||await U(d.id),m=d.name||"")}const a=r.find(d=>d.type==="Doctor"&&d.active!==!1)||null;return a!=null&&a.id&&(i=a.signatureUrl||await U(a.id),l=a.name||""),{hospital:t,technicianSignature:c,technicianName:m,reviewerSignature:i,reviewerName:l,departmentStamp:H(o),hospitalStamp:H(s)}}function q({title:e,headerHtml:r,contentHtml:t,bodyHtml:o,hospital:s}){const c=window.open("","_blank");if(!c)return;const m=P(s),i=Z(m),l=r||"",a=t||o||"",p=!!l?`<table class="print-page-table">
         <thead class="print-page-table__header"><tr><td>${l}</td></tr></thead>
         <tbody><tr><td>${a}</td></tr></tbody>
       </table>`:a;c.document.write(`<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>${e}</title>
        <style>
          ${ue}
          ${i}
        </style>
      </head>
      <body>
        <div class="printable-document" style="${m.printOnLetterhead?`padding-top:${m.letterheadTopMarginMm||35}mm; padding-bottom:${m.letterheadBottomMarginMm||20}mm;`:""}">
          ${p}
        </div>
        <div class="no-print" style="text-align:center; margin: 1.5rem auto;">
          <button class="cr-print-btn" onclick="window.print()">Print Report</button>
        </div>
      </body>
    </html>
  `),c.document.close()}function Ee({hospital:e,assets:r,receipt:t,test:o,reportContent:s}){const c=new Date,m=E(e,{documentTitle:"Radiology Report",departmentName:"Department of Radiology"}),i=`
    ${F({heading:"Patient",rows:[{label:"Name",value:t==null?void 0:t.patientName},{label:"Phone",value:t==null?void 0:t.patientPhone},{label:"UMR",value:(t==null?void 0:t.UMRNo)||(t==null?void 0:t.patientUMRNo)}]},{heading:"Study",rows:[{label:"Test",value:o==null?void 0:o.name},{label:"Date",value:c.toLocaleDateString("en-IN")},{label:"Time",value:c.toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit"})}]},e)}
    <div class="cr-report-content">${s||"No report content available."}</div>
    ${O({hospital:e,...r,primaryLabel:"Radiologist",secondaryLabel:"Verified By"})}
  `;q({title:`Radiology Report - ${(o==null?void 0:o.name)||"Report"}`,headerHtml:m,contentHtml:i,hospital:e})}function Oe({hospital:e,assets:r,receipt:t,test:o,resultsMap:s}){const c=new Date,m=E(e,{documentTitle:"Laboratory Report",departmentName:"Department of Laboratory Medicine"}),i=`
    ${F({heading:"Patient",rows:[{label:"Name",value:t==null?void 0:t.patientName},{label:"Phone",value:t==null?void 0:t.patientPhone},{label:"UMR",value:(t==null?void 0:t.UMRNo)||(t==null?void 0:t.patientUMRNo)}]},{heading:"Test",rows:[{label:"Test",value:o==null?void 0:o.name},{label:"Department",value:o==null?void 0:o.deptname},{label:"Date",value:c.toLocaleDateString("en-IN")}]},e)}
    ${fe(o,s)}
    ${O({hospital:e,...r})}
  `;q({title:`Laboratory Report - ${(o==null?void 0:o.name)||"Report"}`,headerHtml:m,contentHtml:i,hospital:e})}function W(e){if(!e)return"—";const r=new Date(e);return Number.isNaN(r.getTime())?"—":r.toLocaleDateString("en-IN")+" "+r.toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit"})}function _e(e){return[e==null?void 0:e.address,[e==null?void 0:e.city,e==null?void 0:e.state].filter(Boolean).join(", "),e==null?void 0:e.zipCode].filter(Boolean).join(", ")}function xe(e){return e.isAbnormal?"Abnormal":"Normal"}function Ne(e){var r;return e.resultStatus==="completed"||(r=e.parameters)!=null&&r.some(t=>t.result!=null&&String(t.result).trim()!=="")?"Completed":e.resultStatus==="in-progress"?"In progress":"Pending"}function ye({reports:e}){return e!=null&&e.length?n.jsxs("section",{className:"plr-results-card",children:[n.jsx("div",{className:"plr-results-card__head",children:n.jsx("h2",{className:"plr-results-card__title",children:"Radiology report"})}),e.map(r=>n.jsxs("article",{className:"plr-radiology",children:[n.jsx("h3",{className:"plr-radiology__name",children:r.name}),r.reportHtml?n.jsx("div",{className:"plr-radiology__body",dangerouslySetInnerHTML:{__html:r.reportHtml}}):null,r.reportUrl?n.jsx("p",{className:"plr-radiology__file",children:n.jsx("a",{href:r.reportUrl,target:"_blank",rel:"noreferrer",children:"Open attached PDF"})}):null]},r.code||r.name))]}):null}function M({printableItems:e}){return e.length?n.jsxs("table",{className:"printable-table lab-report-print-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{style:{width:"34%"},children:"Parameter"}),n.jsx("th",{style:{width:"24%"},children:"Result"}),n.jsx("th",{style:{width:"28%"},children:"Reference"}),n.jsx("th",{style:{width:"14%"},children:"Unit"})]})}),e.map(r=>{const t=r.parameters||[],o=[r.deptname,Ne(r),r.completedAt?W(r.completedAt):null].filter(Boolean).join(" · ");return n.jsxs("tbody",{className:"lab-report-test-group",children:[n.jsx("tr",{className:"lab-report-print-table__test-row",children:n.jsxs("td",{colSpan:4,children:[n.jsx("span",{className:"lab-report-print-table__test-name",children:r.name}),o?n.jsxs("span",{className:"lab-report-print-table__test-meta",children:[" ","· ",o]}):null]})}),t.map(s=>{const m=xe(s)==="Abnormal"?"cr-result-abnormal":"cr-result-normal";return n.jsxs("tr",{children:[n.jsx("td",{children:s.name}),n.jsx("td",{className:m,children:s.result}),n.jsx("td",{children:V(s)}),n.jsx("td",{children:s.units||"—"})]},`${r.code||r.name}-${s.name}`)})]},r.code||r.name)})]}):n.jsx("p",{className:"lab-report-test-block__empty",children:"No laboratory results available."})}function ve(){var v,x,S,k;const{token:e}=Q(),[r,t]=L.useState(null),[o,s]=L.useState(!0),[c,m]=L.useState("");if(L.useEffect(()=>{let u=!1;return(async()=>{if(e)try{s(!0),m("");const w=await fetch(C.getApiUrl(`/diagnostics-receipts/public/${e}`)),b=await w.json().catch(()=>({}));if(!w.ok)throw new Error((b==null?void 0:b.message)||"This lab report link is invalid or has expired.");u||t(b)}catch(w){u||m(w.message||"This lab report link is invalid or has expired.")}finally{u||s(!1)}})(),()=>{u=!0}},[e]),D(!!r,{mobileOnly:!0}),o)return n.jsx("div",{className:"ppv-shell ppv-shell--state",children:n.jsxs("div",{className:"ppv-state",children:[n.jsx("div",{className:"ppv-state__spinner","aria-hidden":!0}),n.jsx("p",{children:"Loading report…"})]})});if(c||!r)return n.jsx("div",{className:"ppv-shell ppv-shell--state",children:n.jsxs("div",{className:"ppv-state",children:[n.jsx("h1",{children:"Report unavailable"}),n.jsx("p",{children:c||"This report link is invalid or has expired."})]})});const{hospital:i,receipt:l}=r,a=(l==null?void 0:l.items)||[],d=(l==null?void 0:l.radiologyReports)||[],p=d.length>0&&a.length===0,g=a.length&&d.length?"Diagnostics Report":p?"Radiology Report":"Laboratory Test Report",h=r.signatureLabel||(p?"Radiology Technician":"Lab Incharge"),R=r.departmentStampLabel||(p?"Radiology Stamp":"Laboratory Stamp"),f=a.flatMap(u=>(u.parameters||[]).filter(N=>N.remarks).map(N=>({testName:u.name,paramName:N.name,remarks:N.remarks,key:`${u.code||u.name}-${N.name}`}))),y=_e(i),_=W(l==null?void 0:l.createdAt);return n.jsxs("div",{className:"ppv-shell ppv-shell--lab",children:[n.jsx("header",{className:"ppv-topbar no-print plr-topbar",children:n.jsxs("div",{className:"ppv-topbar__brand",children:[i!=null&&i.logoUrl?n.jsx("img",{src:i.logoUrl,alt:"",className:"ppv-topbar__logo"}):null,n.jsxs("div",{className:"ppv-topbar__text",children:[n.jsx("p",{className:"ppv-topbar__name",children:(i==null?void 0:i.name)||g}),n.jsx("p",{className:"ppv-topbar__sub",children:g})]})]})}),n.jsxs("div",{className:"ppv-page plr-page",children:[n.jsxs("div",{className:"ppv-screen-only",children:[n.jsxs("section",{className:"ppv-summary plr-details-card",children:[n.jsxs("div",{className:"ppv-summary__block",children:[n.jsx("p",{className:"ppv-summary__label",children:"Patient"}),n.jsx("p",{className:"ppv-summary__value",children:(l==null?void 0:l.patientName)||"—"}),l!=null&&l.patientPhone?n.jsxs("p",{className:"ppv-summary__muted",children:["Ph: ",l.patientPhone]}):null]}),n.jsxs("div",{className:"ppv-summary__block",children:[n.jsx("p",{className:"ppv-summary__label",children:"Report"}),n.jsx("p",{className:"ppv-summary__value",children:_}),n.jsxs("p",{className:"ppv-summary__muted",children:[a.length+d.length," test",a.length+d.length===1?"":"s"]}),l!=null&&l.receiptId?n.jsx("p",{className:"ppv-summary__muted",children:l.receiptId}):null]})]}),a.length>0?n.jsxs("section",{className:"plr-results-card",children:[n.jsx("div",{className:"plr-results-card__head",children:n.jsx("h2",{className:"plr-results-card__title",children:"Test Results"})}),n.jsx("div",{className:"plr-table-scroll",children:n.jsx(M,{printableItems:a})}),n.jsx("p",{className:"plr-table-hint",children:"Swipe left to see all columns"})]}):d.length===0?n.jsx("p",{className:"plr-empty",children:"No laboratory results available."}):null,n.jsx(ye,{reports:d}),f.length>0?n.jsxs("section",{className:"plr-remarks",children:[n.jsx("p",{className:"plr-remarks__title",children:"Remarks"}),f.map(u=>n.jsxs("p",{className:"plr-remarks__row",children:[n.jsxs("strong",{children:[u.testName," · ",u.paramName,":"]})," ",u.remarks]},u.key))]}):null,(r.signatureUrl||r.signerName||((v=r.hospitalStamp)==null?void 0:v.imageUrl)||((x=r.departmentStamp)==null?void 0:x.imageUrl))&&n.jsxs("div",{className:"flex items-center justify-between gap-4 pt-4 mt-6 border-t border-slate-200",children:[(S=r.departmentStamp)!=null&&S.imageUrl?n.jsxs("div",{className:"text-center",children:[n.jsx("img",{src:r.departmentStamp.imageUrl,alt:r.departmentStamp.name||R,className:"object-contain max-h-16 max-w-[140px] mx-auto"}),n.jsx("p",{className:"text-[11px] font-semibold text-slate-700 mt-1",children:R})]}):null,(k=r.hospitalStamp)!=null&&k.imageUrl?n.jsxs("div",{className:"text-center",children:[n.jsx("img",{src:r.hospitalStamp.imageUrl,alt:r.hospitalStamp.name||"Hospital Stamp",className:"object-contain max-h-16 max-w-[140px] mx-auto"}),n.jsx("p",{className:"text-[11px] font-semibold text-slate-700 mt-1",children:"Hospital Stamp"})]}):null,r.signatureUrl||r.signerName?n.jsxs("div",{className:"text-center ml-auto",children:[r.signatureUrl?n.jsx("img",{src:r.signatureUrl,alt:r.signerName||h,className:"object-contain max-h-14 max-w-[130px] mx-auto"}):null,n.jsx("p",{className:"text-[11px] font-semibold text-slate-700 mt-1",children:r.signerName||h}),n.jsx("p",{className:"text-[10px] text-slate-500 mt-0.5 mb-0",children:h})]}):null]}),(y||(i==null?void 0:i.phone))&&n.jsx("p",{className:"ppv-clinic plr-clinic",children:[y,i==null?void 0:i.phone].filter(Boolean).join(" · ")})]}),(()=>{var N,w;const u=P(i);return n.jsx("div",{className:"ppv-print-only prescription-print-sheet lab-report-print-sheet",children:n.jsx(ee.Provider,{value:u,children:n.jsxs("div",{className:"printable-document",style:u.printOnLetterhead?{paddingTop:`${u.letterheadTopMarginMm||35}mm`,paddingBottom:`${u.letterheadBottomMarginMm||20}mm`}:void 0,children:[n.jsx(re,{hospital:i,documentTitle:g,settings:u}),n.jsxs("div",{className:"lab-report-print-body",children:[n.jsx(de,{patientData:{name:l==null?void 0:l.patientName,phone:l==null?void 0:l.patientPhone,UMRNo:(l==null?void 0:l.UMRNo)||(l==null?void 0:l.patientUMRNo),gender:(l==null?void 0:l.gender)||(l==null?void 0:l.patientGender),age:(l==null?void 0:l.age)||(l==null?void 0:l.patientAge)},doctorData:l!=null&&l.doctorName||(N=l==null?void 0:l.doctor)!=null&&N.name?{name:(l==null?void 0:l.doctorName)||((w=l==null?void 0:l.doctor)==null?void 0:w.name),specialization:l==null?void 0:l.doctorSpecialization}:null,extraFields:[{label:"Report Date",value:_},{label:"Total Tests",value:a.length+d.length}]}),a.length>0?n.jsx(M,{printableItems:a}):null,d.map(b=>n.jsxs("article",{className:"plr-radiology",children:[n.jsx("h3",{className:"plr-radiology__name",children:b.name}),b.reportHtml?n.jsx("div",{className:"plr-radiology__body",dangerouslySetInnerHTML:{__html:b.reportHtml}}):null]},`print-${b.code||b.name}`)),f.length>0?n.jsxs("div",{className:"lab-report-remarks",children:[n.jsx("p",{className:"lab-report-remarks__title",children:"Remarks"}),f.map(b=>n.jsxs("p",{className:"lab-report-remarks__row",children:[n.jsxs("strong",{children:[b.testName," · ",b.paramName,":"]})," ",b.remarks]},b.key))]}):null]}),n.jsx(ne,{documentType:p?"radiologyReport":"labReport",signatureLabel:h,departmentStamp:r.departmentStamp,hospitalStamp:r.hospitalStamp,signatureUrl:r.signatureUrl,signerName:r.signerName,hospitalName:i==null?void 0:i.name,settings:u})]})})})})()]})]})}const Fe=Object.freeze(Object.defineProperty({__proto__:null,default:ve},Symbol.toStringTag,{value:"Module"}));export{de as P,Pe as a,ke as b,Te as c,Ae as d,ae as e,U as f,se as g,ie as h,V as i,Oe as j,Ue as k,Ge as l,te as m,Le as n,oe as o,Ee as p,le as q,Be as r,Ie as s,Me as t,He as u,Ce as v,ze as w,ve as x,Fe as y};
