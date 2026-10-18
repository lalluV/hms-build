import{j as n,m as Y,r as k}from"./index-cc442749.js";import{A as H}from"./api-488bac53.js";import{m as L,p as P,q as K,t as U,w as C,v as M,u as J,b as R,G as X,L as Z,e as D,C as ee,j as re,H as ne,P as te}from"./PrintableDocumentFooter-2409c6fe.js";import"./store-f08bdc5b.js";/* empty css                               */const oe=async()=>(await L.get("/auth/hospital-profile")).data,Te=async e=>(await L.put("/auth/hospital-profile",e)).data,j="/staff",Le=async()=>P(j),le=async e=>K(j,e),se=async e=>P(`${j}/employee/${e}`),Ue=async e=>C(j,e),Ae=async(e,r)=>U(j,e,r),Ie=async(e,r)=>(await L.put(`${j}/${e}/reset-password`,{newPassword:r})).data,Be=async e=>M(j,e),$="/stamps",He=async()=>P($),z=async e=>P(`${$}/department/${e}`),ae=async e=>P(`${$}/category/${e}`),Ce=async e=>C($,e),Me=async(e,r)=>U($,e,r),ze=async e=>M($,e),Ge=async e=>U($,`${e}/toggle`,{}),Ee=async(e,r)=>{const o=new FormData;o.append("stamp",e),o.append("name",r.name),o.append("description",r.description||""),o.append("department",r.department),o.append("category",r.category),o.append("createdBy",r.createdBy);const l=localStorage.getItem("token"),s={};l&&(s["x-auth-token"]=l);const d=await fetch(`${H.BASE_URL}/api/upload/stamp`,{method:"POST",headers:s,body:o});if(!d.ok){const m=await d.json();throw new Error(m.error||"Failed to upload stamp")}return d.json()},T=async e=>{try{let r;try{r=await se(e)}catch{r=await le(e)}return(r==null?void 0:r.signatureUrl)||null}catch(r){return console.error("Error fetching doctor signature:",r),null}},ie=async e=>{try{const r=await z(e);return(r==null?void 0:r.filter(o=>o.isActive!==!1))||[]}catch(r){return console.error("Error fetching department stamps:",r),[]}},me=async()=>{try{const e=await ae("hospital");return(e==null?void 0:e.filter(r=>r.isActive!==!1))||[]}catch(e){console.error("Error fetching hospital stamps:",e);try{const r=await z("General");return(r==null?void 0:r.filter(o=>o.isActive!==!1&&o.category==="hospital"))||[]}catch(r){return console.error("Error fetching hospital stamps fallback:",r),[]}}};function de(e,r="general"){const o=(e==null?void 0:e.settings)||{},l=[],s=r==="pharmacy"&&o.pharmacyGstNumber||o.gstNumber;return s&&l.push({key:"gst",label:"GSTIN",value:s}),o.panNumber&&l.push({key:"pan",label:"PAN",value:o.panNumber}),r==="pharmacy"&&o.drugLicenseNumber&&l.push({key:"dl",label:"DL No.",value:o.drugLicenseNumber}),r==="lab"&&o.labLicenseNumber&&l.push({key:"ll",label:"Lab Lic. No.",value:o.labLicenseNumber}),l}function ce(e,r){if(r.showPatientAgeGender===!1)return"";const o=(e==null?void 0:e.age)||(e==null?void 0:e.patientAge),l=(e==null?void 0:e.gender)||(e==null?void 0:e.patientGender),s=[o?`${o} Y`:null,l].filter(Boolean);return s.length>0?s.join(" / "):""}function ue(e,r){const o=String(e||"").toLowerCase();return!((o.includes("bill")||o.includes("receipt")||o.includes("invoice"))&&r.showBillNumber===!1||(o.includes("date")||o.includes("time"))&&r.showBillDateTime===!1||o.includes("payment")&&r.showPaymentMethod===!1||o.includes("token")&&r.showTokenNumber===!1)}function pe({patientData:e,doctorData:r,extraFields:o=[],extraFieldsHeading:l="Report Details"}){const s=J(),d=(e==null?void 0:e.UMRNo)||(e==null?void 0:e.patientUMRNo)||(e==null?void 0:e.umrNo)||(e==null?void 0:e.patientId)||"",m=(e==null?void 0:e.ipNumber)||(e==null?void 0:e.IPNo)||(e==null?void 0:e.ipNo)||"",a=ce(e,s),t=(e==null?void 0:e.phone)||(e==null?void 0:e.patientPhone),i=(e==null?void 0:e.patient_type)||(e==null?void 0:e.visitType),c=(e==null?void 0:e.address)||(e==null?void 0:e.street_address),p=(e==null?void 0:e.bloodGroup)||(e==null?void 0:e.blood_group),b=(e==null?void 0:e.tokenNumber)||(e==null?void 0:e.token),g=[s.showPatientName!==!1&&{label:"Name",value:(e==null?void 0:e.name)||(e==null?void 0:e.patientName)||"-"},d&&{label:"UMR",value:d},m&&{label:"IP No.",value:m},a&&{label:"Age/Gender",value:a},s.showPatientBloodGroup!==!1&&p&&{label:"Blood Group",value:p},s.showPatientPhone!==!1&&t&&{label:"Phone",value:t},s.showVisitType!==!1&&i&&{label:"Type",value:n.jsx("span",{className:"uppercase",children:i})},s.showTokenNumber!==!1&&b&&{label:"Token",value:b},s.showPatientAddress!==!1&&c&&{label:"Address",value:c}].filter(Boolean),f=String((r==null?void 0:r.name)||(r==null?void 0:r.doctorName)||(r==null?void 0:r.consultantDoctor)||(r==null?void 0:r.consultantName)||"").trim(),w=!!(f&&!["-","N/A","UNDEFINED","NULL"].includes(f.toUpperCase()))?[s.showDoctorName!==!1&&{label:"Doctor",value:f},s.showDoctorQualification!==!1&&(r==null?void 0:r.qualification)&&{label:"Qualification",value:r.qualification},s.showDoctorSpecialization!==!1&&(r==null?void 0:r.specialization)&&{label:"Specialization",value:r.specialization},s.showDepartment!==!1&&(r==null?void 0:r.department)&&r.department!==(r==null?void 0:r.specialization)&&{label:"Department",value:r.department},s.showDoctorRegNo!==!1&&(r==null?void 0:r.regNo)&&{label:"Reg No",value:r.regNo}].filter(Boolean):[],N=o.filter(({label:u,value:h})=>h&&ue(u,s));if(!g.length&&!w.length&&!N.length)return null;const y=u=>u.map(({label:h,value:_})=>n.jsxs("p",{className:"printable-receipt-meta__row",children:[n.jsxs("strong",{children:[h,":"]})," ",_]},h));return n.jsxs("div",{className:"printable-receipt-meta",children:[g.length>0&&n.jsxs("div",{className:"printable-receipt-meta__block",children:[n.jsx("p",{className:"printable-receipt-meta__heading",children:"Patient Details"}),y(g)]}),w.length>0&&n.jsxs("div",{className:"printable-receipt-meta__block",children:[n.jsx("p",{className:"printable-receipt-meta__heading",children:"Doctor / Consultant"}),y(w)]}),N.length>0&&n.jsxs("div",{className:"printable-receipt-meta__block",children:[n.jsx("p",{className:"printable-receipt-meta__heading",children:l}),y(N)]})]})}function I(e=[],r){const o=e.filter(l=>l.isActive!==!1&&l.imageUrl);if(r){const l=o.find(s=>s.category===r);if(l)return l}return o[0]||null}function ge(e){return[e==null?void 0:e.address,[e==null?void 0:e.city,e==null?void 0:e.state].filter(Boolean).join(", "),e==null?void 0:e.zipCode].filter(Boolean).join(", ")}const be=`
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
    box-sizing: border-box;
    margin-bottom: 0.55rem;
    padding: 2mm 8mm 3.5mm 8mm;
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
    flex-wrap: wrap;
    gap: 0.75rem;
    justify-content: flex-start;
    margin-bottom: 0.15rem;
    min-width: 0;
  }
  .printable-document-header__name {
    color: #233e82;
    flex: 1 1 auto;
    font-size: 1.1rem;
    font-weight: 700;
    line-height: 1.2;
    margin: 0;
    min-width: 0;
    overflow-wrap: anywhere;
  }
  .printable-document-header__title {
    background: rgb(255 255 255 / 72%);
    border: 1px solid #b9cbea;
    border-left: 3px solid #233e82;
    border-radius: 4px;
    box-sizing: border-box;
    color: #233e82;
    display: inline-block;
    flex: 0 0 auto;
    font-size: 0.68rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    margin: 0;
    max-width: 100%;
    padding: 0.28rem 0.55rem;
    text-align: left;
    text-transform: uppercase;
    width: auto;
  }
  .printable-document-header--letterhead {
    border-bottom: none;
    text-align: center;
  }
  .printable-document-header__title--letterhead {
    background: rgb(255 255 255 / 72%);
    border: 1px solid #b9cbea;
    border-left: 3px solid #233e82;
    border-radius: 4px;
    box-sizing: border-box;
    color: #233e82;
    display: block;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    margin: 0;
    max-width: 100%;
    padding: 0.35rem 0.75rem;
    text-align: center;
    text-transform: uppercase;
    width: 100%;
  }
  .printable-document-header__meta {
    color: #475569;
    font-size: 0.69rem;
    line-height: 1.35;
    margin: 0.05rem 0 0;
  }
  .printable-document-footer {
    border-top: 1px solid #d6dee9;
    box-sizing: border-box;
    break-inside: avoid;
    margin-top: 1.5rem;
    padding: 3mm 8mm 4mm 8mm;
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
  .print-page-content {
    box-sizing: border-box;
    max-width: 100%;
    min-width: 0;
    padding: 3.5mm 8mm;
    width: 100%;
  }
  /* Footer already lives inside print-page-content for clinical window prints */
  .print-page-content .printable-document-footer {
    padding-left: 0;
    padding-right: 0;
  }
  .cr-meta-grid {
    display: grid;
    gap: 0.65rem 1rem;
    grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
    margin-bottom: 0.65rem;
    max-width: 100%;
    width: 100%;
  }
  .cr-meta-grid > div {
    min-width: 0;
    overflow-wrap: anywhere;
    word-break: break-word;
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
    overflow-wrap: anywhere;
    word-break: break-word;
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
    box-sizing: border-box;
    font-family: ui-monospace, monospace;
    font-size: 0.75rem;
    line-height: 1.5;
    margin-bottom: 0.75rem;
    max-width: 100%;
    min-width: 0;
    overflow-wrap: anywhere;
    padding: 0.55rem 0.7rem;
    white-space: pre-wrap;
    word-break: break-word;
  }
  .cr-report-content table {
    max-width: 100%;
    table-layout: fixed;
    width: 100%;
    word-break: break-word;
  }
  .cr-report-content img {
    height: auto;
    max-width: 100%;
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
`;function G(e,{documentTitle:r,departmentName:o}){const l=R(e);if(l.printOnLetterhead||l.showHeader===!1)return r?`
        <header class="printable-document-header printable-document-header--letterhead" style="border-bottom:none; margin-bottom:1rem; text-align:center;">
          <p class="printable-document-header__title printable-document-header__title--letterhead">${r}</p>
        </header>
      `:"";const s=X(de(e,"lab"),l),d=l.showAddress!==!1?ge(e):null,m=l.showLogo!==!1&&(e==null?void 0:e.logoUrl),a=l.showHospitalName!==!1,t=l.showContactInfo!==!1,i=[t&&(e!=null&&e.phone)?`Phone: ${e.phone}`:null,t&&(e!=null&&e.email)?e.email:null,o||null,...s.map(({label:c,value:p})=>`${c}: ${p}`)].filter(Boolean);return`
    <header class="printable-document-header">
      <div class="printable-document-header__grid">
        ${m?`<div class="printable-document-header__logo-wrap">
                <img src="${e.logoUrl}" alt="${(e==null?void 0:e.name)||"Hospital"}" class="printable-document-header__logo" />
              </div>`:""}
        <div class="printable-document-header__content">
          <div class="printable-document-header__title-row">
            ${a?`<h1 class="printable-document-header__name">${(e==null?void 0:e.name)||"Hospital"}</h1>`:""}
            ${r?`<p class="printable-document-header__title">${r}</p>`:""}
          </div>
          ${d?`<p class="printable-document-header__meta">${d}</p>`:""}
          ${i.length?`<p class="printable-document-header__meta">${i.join(" · ")}</p>`:""}
        </div>
      </div>
    </header>
  `}function he(e,r,o=""){return`
    <div class="printable-document-footer__cell printable-document-footer__cell--signature">
      <div class="printable-document-footer__image-wrap printable-document-footer__image-wrap--signature">
        ${e?`<img src="${e}" alt="${r}" class="printable-document-footer__image printable-document-footer__image--signature" />`:'<div class="printable-document-footer__placeholder">Signature</div>'}
      </div>
      <p class="printable-document-footer__label">${r}</p>
      ${o?`<p class="printable-document-footer__sub">${o}</p>`:""}
    </div>
  `}function fe(e,r){return`
    <div class="printable-document-footer__cell printable-document-footer__cell--stamp">
      <div class="printable-document-footer__image-wrap printable-document-footer__image-wrap--stamp">
        ${e!=null&&e.imageUrl?`<img src="${e.imageUrl}" alt="${e.name||r}" class="printable-document-footer__image printable-document-footer__image--stamp" />`:`<div class="printable-document-footer__placeholder printable-document-footer__placeholder--stamp">${r}</div>`}
      </div>
      <p class="printable-document-footer__label">${r}</p>
    </div>
  `}function E({hospital:e,technicianSignature:r,technicianName:o,reviewerSignature:l,reviewerName:s,departmentStamp:d,hospitalStamp:m,primaryLabel:a="Lab Incharge",secondaryLabel:t="Verified By"}){const i=R(e),c=i.showDoctorSignature!==!1||i.showAuthorizedSignature!==!1,p=i.showStamps!==!1,b=!!i.printOnLetterhead;if(b&&!c&&!p)return"";const g=r||l||null,f=o||s||"",S=r?a:l?t:a,w=!b&&i.showTermsAndConditions!==!1&&!!i.termsAndConditions,N=!b&&(i.showFooterNote!==!1&&i.footerNote||""),y=!b&&i.showPrintTimestamp!==!1,u=!b&&i.showComputerGeneratedDisclaimer!==!1,h=!b&&i.showPoweredBy!==!1,_=new Date().toLocaleString("en-IN",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0});return`
    <footer class="printable-document-footer${b?" printable-document-footer--letterhead":""}">
      ${w?`
          <div class="printable-document-footer__terms">
            <p class="printable-document-footer__terms-title">Terms & Conditions:</p>
            <p class="printable-document-footer__terms-body">${i.termsAndConditions}</p>
          </div>
        `:""}
      ${c||p?`
          <div class="printable-document-footer__grid printable-document-footer__grid--prescription">
            ${c?he(g,S,f):"<div></div>"}
            ${p?fe(m||d,"Hospital Stamp"):"<div></div>"}
          </div>
        `:""}
      ${N?`
          <div class="printable-document-footer__brand">
            <p class="printable-document-footer__note">${N}</p>
          </div>
        `:""}
      ${u?`
          <p class="printable-document-footer__disclaimer">
            This is a computer-generated clinical report. For queries, contact the laboratory or radiology department.${y?` (Printed: ${_})`:""}
          </p>
        `:""}
      ${h?`
          <div class="printable-document-footer__platform">
            <img src="${Z}" alt="HealEka" class="printable-document-footer__platform-logo" />
            <span class="printable-document-footer__platform-copy">
              <span>Powered by HealEka</span>
              <small>Smart hospitals. Connected care.</small>
            </span>
          </div>
        `:""}
    </footer>
  `}function O(e,r,o){const l=R(o),s=t=>(t||[]).filter(({label:i,value:c})=>{const p=c!=null&&String(c).trim()!==""&&String(c)!=="—";return i.includes("UMR")||i.includes("IP No")||i==="IP"?p:!(!p||i.includes("Name")&&l.showPatientName===!1||i.includes("Phone")&&l.showPatientPhone===!1||i.includes("Date")&&l.showBillDateTime===!1)}),d=s(e.rows||[]),m=s(r.rows||[]),a=(t,i)=>i.length?`
      <div>
        <p class="cr-meta-block__heading">${t}</p>
        ${i.map(({label:c,value:p})=>`<p class="cr-meta-block__row"><strong>${c}:</strong> ${p??"—"}</p>`).join("")}
      </div>
    `:"";return`
    <div class="cr-meta-grid">
      ${a(e.heading||"Patient",d)}
      ${a(r.heading||"Report",m)}
    </div>
  `}function F(e){return typeof(e==null?void 0:e.normal_range)=="string"?e.normal_range:e!=null&&e.normal_range?`${e.normal_range.adult_male||"N/A"} (M) / ${e.normal_range.adult_female||"N/A"} (F)`:"N/A"}function _e(e){return!(e==null||typeof e=="string"&&!e.trim())}function xe(e,r={}){var d;const o=e._id||e.code;return`
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
        ${(((d=e.parameters)==null?void 0:d.map(m=>{var p;const a=(p=r[o])==null?void 0:p[m.id||m.name],t=(a==null?void 0:a.value)??m.result;if(!_e(t))return null;const c=(a==null?void 0:a.isAbnormal)??m.isAbnormal?"cr-result-abnormal":"cr-result-normal";return`
        <tr>
          <td><strong>${m.name}</strong></td>
          <td class="${c}">${t}</td>
          <td>${F(m)}</td>
          <td>${m.units||"N/A"}</td>
        </tr>
      `}).filter(Boolean))||[]).join("")||'<tr><td colspan="4" style="text-align:center;padding:1rem;">No results available</td></tr>'}
      </tbody>
    </table>
  `}async function Oe(e,r=[],{department:o="Laboratory",signatureRole:l="LabTechnician"}={}){const[s,d,m]=await Promise.all([oe(),ie(o),me()]);let a=null,t="",i=null,c="";const p=g=>g===l||l==="LabTechnician"&&g==="LabTechnician"||l==="RadiologyTechnician"&&(g==="RadiologyTechnician"||g==="Radiology Technician");if(p(e==null?void 0:e.type)&&(e!=null&&e.id))a=e.signatureUrl||await T(e.id),t=e.name||"";else{const g=r.find(f=>p(f.type)&&f.active!==!1);g!=null&&g.id&&(a=g.signatureUrl||await T(g.id),t=g.name||"")}const b=r.find(g=>g.type==="Doctor"&&g.active!==!1)||null;return b!=null&&b.id&&(i=b.signatureUrl||await T(b.id),c=b.name||""),{hospital:s,technicianSignature:a,technicianName:t,reviewerSignature:i,reviewerName:c,departmentStamp:I(d,"department"),hospitalStamp:I(m,"hospital")}}function V({title:e,headerHtml:r,contentHtml:o,bodyHtml:l,hospital:s}){const d=window.open("","_blank");if(!d)return;const m=R(s),a=D(m),t=r||"",i=o||l||"",c=!!t,p=`<div class="print-page-content">${i}</div>`,b=c?`<table class="print-page-table">
         <thead class="print-page-table__header"><tr><td>${t}</td></tr></thead>
         <tbody><tr><td>${p}</td></tr></tbody>
       </table>`:p;d.document.write(`<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>${e}</title>
        <style>
          ${be}
          ${a}
        </style>
      </head>
      <body>
        <div class="printable-document" style="${m.printOnLetterhead?`padding-top:${m.letterheadTopMarginMm||35}mm; padding-bottom:${m.letterheadBottomMarginMm||20}mm;`:""}">
          ${b}
        </div>
        <div class="no-print" style="text-align:center; margin: 1.5rem auto;">
          <button class="cr-print-btn" onclick="window.print()">Print Report</button>
        </div>
      </body>
    </html>
  `),d.document.close()}function q(e){var r,o;return(e==null?void 0:e.UMRNo)||(e==null?void 0:e.patientUMRNo)||((r=e==null?void 0:e.patientData)==null?void 0:r.UMRNo)||((o=e==null?void 0:e.patientData)==null?void 0:o.umrNo)||(e==null?void 0:e.patientId)||""}function W(e){var r;return(e==null?void 0:e.ipNumber)||((r=e==null?void 0:e.patientData)==null?void 0:r.ipNumber)||(e==null?void 0:e.IPNo)||""}function Fe({hospital:e,assets:r,receipt:o,test:l,reportContent:s}){const d=new Date,m=G(e,{documentTitle:"Radiology Report",departmentName:"Department of Radiology"}),a=`
    ${O({heading:"Patient",rows:[{label:"Name",value:o==null?void 0:o.patientName},{label:"Phone",value:o==null?void 0:o.patientPhone},{label:"UMR",value:q(o)},{label:"IP No.",value:W(o)}]},{heading:"Study",rows:[{label:"Test",value:l==null?void 0:l.name},{label:"Date",value:d.toLocaleDateString("en-IN")},{label:"Time",value:d.toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit"})}]},e)}
    <div class="cr-report-content">${s||"No report content available."}</div>
    ${E({hospital:e,...r,primaryLabel:"Radiology Technician",secondaryLabel:"Verified By"})}
  `;V({title:`Radiology Report - ${(l==null?void 0:l.name)||"Report"}`,headerHtml:m,contentHtml:a,hospital:e})}function Ve({hospital:e,assets:r,receipt:o,test:l,resultsMap:s}){const d=new Date,m=G(e,{documentTitle:"Laboratory Report",departmentName:"Department of Laboratory Medicine"}),a=`
    ${O({heading:"Patient",rows:[{label:"Name",value:o==null?void 0:o.patientName},{label:"Phone",value:o==null?void 0:o.patientPhone},{label:"UMR",value:q(o)},{label:"IP No.",value:W(o)}]},{heading:"Test",rows:[{label:"Test",value:l==null?void 0:l.name},{label:"Department",value:l==null?void 0:l.deptname},{label:"Date",value:d.toLocaleDateString("en-IN")}]},e)}
    ${xe(l,s)}
    ${E({hospital:e,...r})}
  `;V({title:`Laboratory Report - ${(l==null?void 0:l.name)||"Report"}`,headerHtml:m,contentHtml:a,hospital:e})}function Q(e){if(!e)return"—";const r=new Date(e);return Number.isNaN(r.getTime())?"—":r.toLocaleDateString("en-IN")+" "+r.toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit"})}function Ne(e){return[e==null?void 0:e.address,[e==null?void 0:e.city,e==null?void 0:e.state].filter(Boolean).join(", "),e==null?void 0:e.zipCode].filter(Boolean).join(", ")}function we(e){return e.isAbnormal?"Abnormal":"Normal"}function ye(e){var r;return e.resultStatus==="completed"||(r=e.parameters)!=null&&r.some(o=>o.result!=null&&String(o.result).trim()!=="")?"Completed":e.resultStatus==="in-progress"?"In progress":"Pending"}function ve({reports:e}){return e!=null&&e.length?n.jsxs("section",{className:"plr-results-card",children:[n.jsx("div",{className:"plr-results-card__head",children:n.jsx("h2",{className:"plr-results-card__title",children:"Radiology report"})}),e.map(r=>n.jsxs("article",{className:"plr-radiology",children:[n.jsx("h3",{className:"plr-radiology__name",children:r.name}),r.reportHtml?n.jsx("div",{className:"plr-radiology__body",dangerouslySetInnerHTML:{__html:r.reportHtml}}):null,r.reportUrl?n.jsx("p",{className:"plr-radiology__file",children:n.jsx("a",{href:r.reportUrl,target:"_blank",rel:"noreferrer",children:"Open attached PDF"})}):null]},r.code||r.name))]}):null}function B({printableItems:e}){return e.length?n.jsxs("table",{className:"printable-table lab-report-print-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{style:{width:"34%"},children:"Parameter"}),n.jsx("th",{style:{width:"24%"},children:"Result"}),n.jsx("th",{style:{width:"28%"},children:"Reference"}),n.jsx("th",{style:{width:"14%"},children:"Unit"})]})}),e.map(r=>{const o=r.parameters||[],l=[r.deptname,ye(r),r.completedAt?Q(r.completedAt):null].filter(Boolean).join(" · ");return n.jsxs("tbody",{className:"lab-report-test-group",children:[n.jsx("tr",{className:"lab-report-print-table__test-row",children:n.jsxs("td",{colSpan:4,children:[n.jsx("span",{className:"lab-report-print-table__test-name",children:r.name}),l?n.jsxs("span",{className:"lab-report-print-table__test-meta",children:[" ","· ",l]}):null]})}),o.map(s=>{const m=we(s)==="Abnormal"?"cr-result-abnormal":"cr-result-normal";return n.jsxs("tr",{children:[n.jsx("td",{children:s.name}),n.jsx("td",{className:m,children:s.result}),n.jsx("td",{children:F(s)}),n.jsx("td",{children:s.units||"—"})]},`${r.code||r.name}-${s.name}`)})]},r.code||r.name)})]}):n.jsx("p",{className:"lab-report-test-block__empty",children:"No laboratory results available."})}function je(){var N,y;const{token:e}=Y(),[r,o]=k.useState(null),[l,s]=k.useState(!0),[d,m]=k.useState("");if(k.useEffect(()=>{let u=!1;return(async()=>{if(e)try{s(!0),m("");const _=await fetch(H.getApiUrl(`/diagnostics-receipts/public/${e}`)),v=await _.json().catch(()=>({}));if(!_.ok)throw new Error((v==null?void 0:v.message)||"This lab report link is invalid or has expired.");u||o(v)}catch(_){u||m(_.message||"This lab report link is invalid or has expired.")}finally{u||s(!1)}})(),()=>{u=!0}},[e]),ee(!!r,{mobileOnly:!0}),l)return n.jsx("div",{className:"ppv-shell ppv-shell--state",children:n.jsxs("div",{className:"ppv-state",children:[n.jsx("div",{className:"ppv-state__spinner","aria-hidden":!0}),n.jsx("p",{children:"Loading report…"})]})});if(d||!r)return n.jsx("div",{className:"ppv-shell ppv-shell--state",children:n.jsxs("div",{className:"ppv-state",children:[n.jsx("h1",{children:"Report unavailable"}),n.jsx("p",{children:d||"This report link is invalid or has expired."})]})});const{hospital:a,receipt:t}=r,i=(t==null?void 0:t.items)||[],c=(t==null?void 0:t.radiologyReports)||[],p=c.length>0&&i.length===0,b=i.length&&c.length?"Diagnostics Report":p?"Radiology Report":"Laboratory Test Report",g=r.signatureLabel||(p?"Radiology Technician":"Lab Incharge"),f=i.flatMap(u=>(u.parameters||[]).filter(h=>h.remarks).map(h=>({testName:u.name,paramName:h.name,remarks:h.remarks,key:`${u.code||u.name}-${h.name}`}))),S=Ne(a),w=Q(t==null?void 0:t.createdAt);return n.jsxs("div",{className:"ppv-shell ppv-shell--lab",children:[n.jsx("header",{className:"ppv-topbar no-print plr-topbar",children:n.jsxs("div",{className:"ppv-topbar__brand",children:[a!=null&&a.logoUrl?n.jsx("img",{src:a.logoUrl,alt:"",className:"ppv-topbar__logo"}):null,n.jsxs("div",{className:"ppv-topbar__text",children:[n.jsx("p",{className:"ppv-topbar__name",children:(a==null?void 0:a.name)||b}),n.jsx("p",{className:"ppv-topbar__sub",children:b})]})]})}),n.jsxs("div",{className:"ppv-page plr-page",children:[n.jsxs("div",{className:"ppv-screen-only",children:[n.jsxs("section",{className:"ppv-summary plr-details-card",children:[n.jsxs("div",{className:"ppv-summary__block",children:[n.jsx("p",{className:"ppv-summary__label",children:"Patient"}),n.jsx("p",{className:"ppv-summary__value",children:(t==null?void 0:t.patientName)||"—"}),t!=null&&t.patientPhone?n.jsxs("p",{className:"ppv-summary__muted",children:["Ph: ",t.patientPhone]}):null]}),n.jsxs("div",{className:"ppv-summary__block",children:[n.jsx("p",{className:"ppv-summary__label",children:"Report"}),n.jsx("p",{className:"ppv-summary__value",children:w}),n.jsxs("p",{className:"ppv-summary__muted",children:[i.length+c.length," test",i.length+c.length===1?"":"s"]}),t!=null&&t.receiptId?n.jsx("p",{className:"ppv-summary__muted",children:t.receiptId}):null]})]}),i.length>0?n.jsxs("section",{className:"plr-results-card",children:[n.jsx("div",{className:"plr-results-card__head",children:n.jsx("h2",{className:"plr-results-card__title",children:"Test Results"})}),n.jsx("div",{className:"plr-table-scroll",children:n.jsx(B,{printableItems:i})}),n.jsx("p",{className:"plr-table-hint",children:"Swipe left to see all columns"})]}):c.length===0?n.jsx("p",{className:"plr-empty",children:"No laboratory results available."}):null,n.jsx(ve,{reports:c}),f.length>0?n.jsxs("section",{className:"plr-remarks",children:[n.jsx("p",{className:"plr-remarks__title",children:"Remarks"}),f.map(u=>n.jsxs("p",{className:"plr-remarks__row",children:[n.jsxs("strong",{children:[u.testName," · ",u.paramName,":"]})," ",u.remarks]},u.key))]}):null,(r.signatureUrl||r.signerName||((N=r.hospitalStamp)==null?void 0:N.imageUrl))&&n.jsxs("div",{className:"flex items-center justify-between gap-4 pt-4 mt-6 border-t border-slate-200",children:[(y=r.hospitalStamp)!=null&&y.imageUrl?n.jsxs("div",{className:"text-center",children:[n.jsx("img",{src:r.hospitalStamp.imageUrl,alt:r.hospitalStamp.name||"Hospital Stamp",className:"object-contain max-h-16 max-w-[140px] mx-auto"}),n.jsx("p",{className:"text-[11px] font-semibold text-slate-700 mt-1",children:"Hospital Stamp"})]}):null,r.signatureUrl||r.signerName?n.jsxs("div",{className:"text-center ml-auto",children:[r.signatureUrl?n.jsx("img",{src:r.signatureUrl,alt:r.signerName||g,className:"object-contain max-h-14 max-w-[130px] mx-auto"}):null,n.jsx("p",{className:"text-[11px] font-semibold text-slate-700 mt-1",children:r.signerName||g}),n.jsx("p",{className:"text-[10px] text-slate-500 mt-0.5 mb-0",children:g})]}):null]}),(S||(a==null?void 0:a.phone))&&n.jsx("p",{className:"ppv-clinic plr-clinic",children:[S,a==null?void 0:a.phone].filter(Boolean).join(" · ")})]}),(()=>{var h,_,v,A;const u=R(a);return n.jsx("div",{className:"ppv-print-only prescription-print-sheet lab-report-print-sheet",children:n.jsx(re.Provider,{value:u,children:n.jsxs("div",{className:"printable-document",style:u.printOnLetterhead?{paddingTop:`${u.letterheadTopMarginMm||35}mm`,paddingBottom:`${u.letterheadBottomMarginMm||20}mm`}:void 0,children:[n.jsx(ne,{hospital:a,documentTitle:b,settings:u}),n.jsxs("div",{className:"lab-report-print-body",children:[n.jsx(pe,{patientData:{name:t==null?void 0:t.patientName,phone:t==null?void 0:t.patientPhone,UMRNo:(t==null?void 0:t.UMRNo)||(t==null?void 0:t.patientUMRNo)||((h=t==null?void 0:t.patientData)==null?void 0:h.UMRNo)||(t==null?void 0:t.patientId)||"",ipNumber:(t==null?void 0:t.ipNumber)||((_=t==null?void 0:t.patientData)==null?void 0:_.ipNumber)||"",gender:(t==null?void 0:t.gender)||(t==null?void 0:t.patientGender),age:(t==null?void 0:t.age)||(t==null?void 0:t.patientAge)},doctorData:t!=null&&t.doctorName||(v=t==null?void 0:t.doctor)!=null&&v.name?{name:(t==null?void 0:t.doctorName)||((A=t==null?void 0:t.doctor)==null?void 0:A.name),specialization:t==null?void 0:t.doctorSpecialization}:null,extraFields:[{label:"Report Date",value:w},{label:"Total Tests",value:i.length+c.length}]}),i.length>0?n.jsx(B,{printableItems:i}):null,c.map(x=>n.jsxs("article",{className:"plr-radiology",children:[n.jsx("h3",{className:"plr-radiology__name",children:x.name}),x.reportHtml?n.jsx("div",{className:"plr-radiology__body",dangerouslySetInnerHTML:{__html:x.reportHtml}}):null]},`print-${x.code||x.name}`)),f.length>0?n.jsxs("div",{className:"lab-report-remarks",children:[n.jsx("p",{className:"lab-report-remarks__title",children:"Remarks"}),f.map(x=>n.jsxs("p",{className:"lab-report-remarks__row",children:[n.jsxs("strong",{children:[x.testName," · ",x.paramName,":"]})," ",x.remarks]},x.key))]}):null]}),n.jsx(te,{documentType:p?"radiologyReport":"labReport",signatureLabel:g,hospitalStamp:r.hospitalStamp,signatureUrl:r.signatureUrl,signerName:r.signerName,hospitalName:a==null?void 0:a.name,settings:u,showDepartmentStamp:!1})]})})})})()]})]})}const qe=Object.freeze(Object.defineProperty({__proto__:null,default:je},Symbol.toStringTag,{value:"Module"}));export{pe as P,Te as a,Le as b,Ae as c,Be as d,me as e,T as f,ie as g,de as h,F as i,Ve as j,Ie as k,Oe as l,oe as m,Ue as n,se as o,Fe as p,le as q,He as r,Ee as s,Me as t,Ce as u,ze as v,Ge as w,je as x,qe as y};
