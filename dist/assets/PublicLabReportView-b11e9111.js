import{j as n,m as F,r as S}from"./index-986925bf.js";import{A as T}from"./api-aee67127.js";import{m as R,e as V,d as $,j as L,k as A,i as B,u as q,g as w,L as Q,b as W,w as Y,B as K,H as J,P as X}from"./PublicPrescriptionView-bc9d8dab.js";import"./store-adc85da8.js";const Z=async()=>(await R.get("/auth/hospital-profile")).data,we=async e=>(await R.put("/auth/hospital-profile",e)).data,_="/staff",ye=async()=>$(_),D=async e=>V(_,e),ee=async e=>$(`${_}/employee/${e}`),Ne=async e=>A(_,e),ve=async(e,r)=>L(_,e,r),je=async(e,r)=>(await R.put(`${_}/${e}/reset-password`,{newPassword:r})).data,Se=async e=>B(_,e),x="/stamps",$e=async()=>$(x),C=async e=>$(`${x}/department/${e}`),Pe=async e=>A(x,e),Re=async(e,r)=>L(x,e,r),Le=async e=>B(x,e),ke=async e=>L(x,`${e}/toggle`,{}),Ue=async(e,r)=>{const o=new FormData;o.append("stamp",e),o.append("name",r.name),o.append("description",r.description||""),o.append("department",r.department),o.append("category",r.category),o.append("createdBy",r.createdBy);const t=localStorage.getItem("token"),m={};t&&(m["x-auth-token"]=t);const i=await fetch(`${T.BASE_URL}/api/upload/stamp`,{method:"POST",headers:m,body:o});if(!i.ok){const c=await i.json();throw new Error(c.error||"Failed to upload stamp")}return i.json()},P=async e=>{try{let r;try{r=await ee(e)}catch{r=await D(e)}return(r==null?void 0:r.signatureUrl)||null}catch(r){return console.error("Error fetching doctor signature:",r),null}},re=async e=>{try{const r=await C(e);return(r==null?void 0:r.filter(o=>o.isActive))||[]}catch(r){return console.error("Error fetching department stamps:",r),[]}},ne=async()=>{try{const e=await C("General");return(e==null?void 0:e.filter(r=>r.isActive&&r.category==="hospital"))||[]}catch(e){return console.error("Error fetching hospital stamps:",e),[]}};function te(e,r="general"){const o=(e==null?void 0:e.settings)||{},t=[];return r==="pharmacy"&&o.drugLicenseNumber&&t.push({label:"DL No.",value:o.drugLicenseNumber}),t}function Te(e){var r;return((r=e==null?void 0:e.settings)==null?void 0:r.receiptFooterNote)||""}function se(e,r){if(r.showPatientAgeGender===!1)return"";const o=(e==null?void 0:e.age)||(e==null?void 0:e.patientAge),t=(e==null?void 0:e.gender)||(e==null?void 0:e.patientGender),m=[o?`${o} Y`:null,t].filter(Boolean);return m.length>0?m.join(" / "):""}function oe({patientData:e,doctorData:r,extraFields:o=[]}){const t=q(),m=t.showPatientName!==!1||t.showPatientUMR!==!1||t.showPatientPhone!==!1||t.showVisitType!==!1||t.showPatientAgeGender!==!1,i=(r==null?void 0:r.name)||(r==null?void 0:r.doctorName)||(r==null?void 0:r.consultantDoctor)||(r==null?void 0:r.consultantName)||"",a=!!(i&&i.trim()!==""&&i.trim()!=="-"&&i.trim().toUpperCase()!=="N/A"&&i.trim()!=="undefined"&&i.trim()!=="null")&&(t.showDoctorName!==!1||t.showDoctorQualification!==!1||t.showDoctorSpecialization!==!1||t.showDoctorRegNo!==!1);if(!m&&!a&&!o.length)return null;const s=(e==null?void 0:e.UMRNo)||(e==null?void 0:e.patientUMRNo)||(e==null?void 0:e.umrNo)||"",l=se(e,t);return n.jsxs("div",{className:"printable-receipt-meta",children:[m&&n.jsxs("div",{className:"printable-receipt-meta__block",children:[n.jsx("p",{className:"printable-receipt-meta__heading",children:"Patient Details"}),t.showPatientName!==!1&&n.jsxs("p",{className:"printable-receipt-meta__row",children:[n.jsx("strong",{children:"Name:"})," ",(e==null?void 0:e.name)||(e==null?void 0:e.patientName)||"-"]}),t.showPatientUMR!==!1&&s?n.jsxs("p",{className:"printable-receipt-meta__row",children:[n.jsx("strong",{children:"UMR:"})," ",s]}):null,t.showPatientAgeGender!==!1&&l?n.jsxs("p",{className:"printable-receipt-meta__row",children:[n.jsx("strong",{children:"Age/Gender:"})," ",l]}):null,t.showPatientPhone!==!1&&(e!=null&&e.phone||e!=null&&e.patientPhone)?n.jsxs("p",{className:"printable-receipt-meta__row",children:[n.jsx("strong",{children:"Phone:"})," ",(e==null?void 0:e.phone)||(e==null?void 0:e.patientPhone)]}):null,t.showVisitType!==!1&&(e!=null&&e.patient_type||e!=null&&e.visitType)?n.jsxs("p",{className:"printable-receipt-meta__row",children:[n.jsx("strong",{children:"Type:"})," ",n.jsx("span",{className:"uppercase",children:(e==null?void 0:e.patient_type)||(e==null?void 0:e.visitType)})]}):null,t.showPatientAddress!==!1&&(e!=null&&e.address||e!=null&&e.street_address)?n.jsxs("p",{className:"printable-receipt-meta__row",children:[n.jsx("strong",{children:"Address:"})," ",e.address||e.street_address]}):null]}),a&&n.jsxs("div",{className:"printable-receipt-meta__block",children:[n.jsx("p",{className:"printable-receipt-meta__heading",children:"Doctor / Consultant"}),t.showDoctorName!==!1&&n.jsxs("p",{className:"printable-receipt-meta__row",children:[n.jsx("strong",{children:"Doctor:"})," ",(r==null?void 0:r.name)||"-"]}),t.showDoctorQualification!==!1&&(r!=null&&r.qualification)?n.jsxs("p",{className:"printable-receipt-meta__row",children:[n.jsx("strong",{children:"Qualification:"})," ",r.qualification]}):null,t.showDoctorSpecialization!==!1&&(r!=null&&r.specialization||r!=null&&r.department)?n.jsxs("p",{className:"printable-receipt-meta__row",children:[n.jsx("strong",{children:"Dept / Spec:"})," ",r.specialization||r.department]}):null,t.showDoctorRegNo!==!1&&(r!=null&&r.regNo)?n.jsxs("p",{className:"printable-receipt-meta__row",children:[n.jsx("strong",{children:"Reg No:"})," ",r.regNo]}):null]}),o.length>0&&n.jsxs("div",{className:"printable-receipt-meta__block",children:[n.jsx("p",{className:"printable-receipt-meta__heading",children:"Report Details"}),o.map(({label:d,value:u})=>d.includes("Bill")&&t.showBillNumber===!1||d.includes("Date")&&t.showBillDateTime===!1||d.includes("Payment")&&t.showPaymentMethod===!1||!u?null:n.jsxs("p",{className:"printable-receipt-meta__row",children:[n.jsxs("strong",{children:[d,":"]})," ",u]},d))]})]})}function k(e=[]){return e.filter(o=>o.isActive!==!1&&o.imageUrl)[0]||null}function ae(e){return[e==null?void 0:e.address,[e==null?void 0:e.city,e==null?void 0:e.state].filter(Boolean).join(", "),e==null?void 0:e.zipCode].filter(Boolean).join(", ")}const le=`
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
`;function M(e,{documentTitle:r,departmentName:o}){const t=w(e);if(t.printOnLetterhead||t.showHeader===!1)return r?`
        <header class="printable-document-header printable-document-header--letterhead" style="border-bottom:none; margin-bottom:1rem; text-align:center;">
          <p class="printable-document-header__title" style="display:inline-block; font-size:0.85rem; font-weight:700;">${r}</p>
        </header>
      `:"";const m=te(e,"lab"),i=t.showAddress!==!1?ae(e):null,c=t.showLogo!==!1&&(e==null?void 0:e.logoUrl),a=t.showHospitalName!==!1,s=t.showContactInfo!==!1,l=[s&&(e!=null&&e.phone)?`Phone: ${e.phone}`:null,s&&(e!=null&&e.email)?e.email:null,o||null,...m.map(({label:d,value:u})=>d.includes("GST")&&t.showGstNumber===!1||d.includes("DL")&&t.showDrugLicense===!1||d.includes("LL")&&t.showLabLicense===!1?null:`${d}: ${u}`)].filter(Boolean);return`
    <header class="printable-document-header">
      <div class="printable-document-header__grid">
        ${c?`<div class="printable-document-header__logo-wrap">
                <img src="${e.logoUrl}" alt="${(e==null?void 0:e.name)||"Hospital"}" class="printable-document-header__logo" />
              </div>`:""}
        <div class="printable-document-header__content">
          <div class="printable-document-header__title-row">
            ${a?`<h1 class="printable-document-header__name">${(e==null?void 0:e.name)||"Sri Chakra Diagnostics"}</h1>`:"<div></div>"}
            ${r?`<p class="printable-document-header__title">${r}</p>`:""}
          </div>
          ${i?`<p class="printable-document-header__meta">${i}</p>`:""}
          ${l.length?`<p class="printable-document-header__meta">${l.join(" · ")}</p>`:""}
        </div>
      </div>
    </header>
  `}function ie(e,r,o=""){return`
    <div class="printable-document-footer__cell printable-document-footer__cell--signature">
      <div class="printable-document-footer__image-wrap printable-document-footer__image-wrap--signature">
        ${e?`<img src="${e}" alt="${r}" class="printable-document-footer__image printable-document-footer__image--signature" />`:'<div class="printable-document-footer__placeholder">Signature</div>'}
      </div>
      <p class="printable-document-footer__label">${r}</p>
      ${o?`<p class="printable-document-footer__sub">${o}</p>`:""}
    </div>
  `}function me(e,r){return`
    <div class="printable-document-footer__cell printable-document-footer__cell--stamp">
      <div class="printable-document-footer__image-wrap printable-document-footer__image-wrap--stamp">
        ${e!=null&&e.imageUrl?`<img src="${e.imageUrl}" alt="${e.name||r}" class="printable-document-footer__image printable-document-footer__image--stamp" />`:`<div class="printable-document-footer__placeholder printable-document-footer__placeholder--stamp">${r}</div>`}
      </div>
      <p class="printable-document-footer__label">${r}</p>
    </div>
  `}function H({hospital:e,technicianSignature:r,technicianName:o,reviewerSignature:t,reviewerName:m,departmentStamp:i,hospitalStamp:c,primaryLabel:a="Lab Incharge",secondaryLabel:s="Verified By"}){const l=w(e),d=l.showDoctorSignature!==!1||l.showAuthorizedSignature!==!1,u=l.showStamps!==!1,h=!!l.printOnLetterhead;if(h&&!d&&!u)return"";const y=r||t||null,N=o||m||"",v=r?a:t?s:a,j=!h&&l.showTermsAndConditions!==!1&&!!l.termsAndConditions,p=!h&&(l.showFooterNote!==!1&&l.footerNote||""),g=!h&&l.showPrintTimestamp!==!1,b=!h&&l.showComputerGeneratedDisclaimer!==!1,f=!h&&l.showPoweredBy!==!1,O=new Date().toLocaleString("en-IN",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0});return`
    <footer class="printable-document-footer${h?" printable-document-footer--letterhead":""}">
      ${j?`
          <div class="printable-document-footer__terms">
            <p class="printable-document-footer__terms-title">Terms & Conditions:</p>
            <p class="printable-document-footer__terms-body">${l.termsAndConditions}</p>
          </div>
        `:""}
      ${d||u?`
          <div class="printable-document-footer__grid">
            ${d?ie(y,v,N):"<div></div>"}
            ${u?me(c||i,"Hospital Stamp"):"<div></div>"}
          </div>
        `:""}
      ${p?`
          <div class="printable-document-footer__brand">
            <p class="printable-document-footer__note">${p}</p>
          </div>
        `:""}
      ${b?`
          <p class="printable-document-footer__disclaimer">
            This is a computer-generated clinical report. For queries, contact the laboratory or radiology department.${g?` (Printed: ${O})`:""}
          </p>
        `:""}
      ${f?`
          <div class="printable-document-footer__platform">
            <img src="${Q}" alt="HealEka" class="printable-document-footer__platform-logo" />
            <span class="printable-document-footer__platform-copy">
              <span>Powered by HealEka</span>
              <small>Smart hospitals. Connected care.</small>
            </span>
          </div>
        `:""}
    </footer>
  `}function z(e,r,o){const t=w(o),m=s=>s.filter(({label:l})=>!(l.includes("Name")&&t.showPatientName===!1||l.includes("Phone")&&t.showPatientPhone===!1||l.includes("UMR")&&t.showPatientUMR===!1||l.includes("Date")&&t.showBillDateTime===!1)),i=m(e.rows||[]),c=m(r.rows||[]),a=(s,l)=>l.length?`
      <div>
        <p class="cr-meta-block__heading">${s}</p>
        ${l.map(({label:d,value:u})=>`<p class="cr-meta-block__row"><strong>${d}:</strong> ${u??"—"}</p>`).join("")}
      </div>
    `:"";return`
    <div class="cr-meta-grid">
      ${a(e.heading||"Patient",i)}
      ${a(r.heading||"Report",c)}
    </div>
  `}function I(e){return typeof(e==null?void 0:e.normal_range)=="string"?e.normal_range:e!=null&&e.normal_range?`${e.normal_range.adult_male||"N/A"} (M) / ${e.normal_range.adult_female||"N/A"} (F)`:"N/A"}function ce(e){return!(e==null||typeof e=="string"&&!e.trim())}function de(e,r={}){var i;const o=e._id||e.code;return`
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
        ${(((i=e.parameters)==null?void 0:i.map(c=>{var u;const a=(u=r[o])==null?void 0:u[c.id||c.name],s=(a==null?void 0:a.value)??c.result;if(!ce(s))return null;const d=(a==null?void 0:a.isAbnormal)??c.isAbnormal?"cr-result-abnormal":"cr-result-normal";return`
        <tr>
          <td><strong>${c.name}</strong></td>
          <td class="${d}">${s}</td>
          <td>${I(c)}</td>
          <td>${c.units||"N/A"}</td>
        </tr>
      `}).filter(Boolean))||[]).join("")||'<tr><td colspan="4" style="text-align:center;padding:1rem;">No results available</td></tr>'}
      </tbody>
    </table>
  `}async function Ae(e,r=[]){const[o,t,m]=await Promise.all([Z(),re("Laboratory"),ne()]);let i=null,c="",a=null,s="";if((e==null?void 0:e.type)==="LabTechnician"&&(e!=null&&e.id))i=e.signatureUrl||await P(e.id),c=e.name||"";else{const d=r.find(u=>u.type==="LabTechnician"&&u.active!==!1);d!=null&&d.id&&(i=d.signatureUrl||await P(d.id),c=d.name||"")}const l=r.find(d=>d.type==="Doctor"&&d.active!==!1)||null;return l!=null&&l.id&&(a=l.signatureUrl||await P(l.id),s=l.name||""),{hospital:o,technicianSignature:i,technicianName:c,reviewerSignature:a,reviewerName:s,departmentStamp:k(t),hospitalStamp:k(m)}}function G({title:e,headerHtml:r,contentHtml:o,bodyHtml:t,hospital:m}){const i=window.open("","_blank");if(!i)return;const c=w(m),a=W(c),s=r||"",l=o||t||"",u=!!s?`<table class="print-page-table">
         <thead class="print-page-table__header"><tr><td>${s}</td></tr></thead>
         <tbody><tr><td>${l}</td></tr></tbody>
       </table>`:l;i.document.write(`<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>${e}</title>
        <style>
          ${le}
          ${a}
        </style>
      </head>
      <body>
        <div class="printable-document" style="${c.printOnLetterhead?`padding-top:${c.letterheadTopMarginMm||35}mm; padding-bottom:${c.letterheadBottomMarginMm||20}mm;`:""}">
          ${u}
        </div>
        <div class="no-print" style="text-align:center; margin: 1.5rem auto;">
          <button class="cr-print-btn" onclick="window.print()">Print Report</button>
        </div>
      </body>
    </html>
  `),i.document.close()}function Be({hospital:e,assets:r,receipt:o,test:t,reportContent:m}){const i=new Date,c=M(e,{documentTitle:"Radiology Report",departmentName:"Department of Radiology"}),a=`
    ${z({heading:"Patient",rows:[{label:"Name",value:o==null?void 0:o.patientName},{label:"Phone",value:o==null?void 0:o.patientPhone},{label:"UMR",value:(o==null?void 0:o.UMRNo)||(o==null?void 0:o.patientUMRNo)}]},{heading:"Study",rows:[{label:"Test",value:t==null?void 0:t.name},{label:"Date",value:i.toLocaleDateString("en-IN")},{label:"Time",value:i.toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit"})}]},e)}
    <div class="cr-report-content">${m||"No report content available."}</div>
    ${H({hospital:e,...r,primaryLabel:"Radiologist",secondaryLabel:"Verified By"})}
  `;G({title:`Radiology Report - ${(t==null?void 0:t.name)||"Report"}`,headerHtml:c,contentHtml:a,hospital:e})}function Ce({hospital:e,assets:r,receipt:o,test:t,resultsMap:m}){const i=new Date,c=M(e,{documentTitle:"Laboratory Report",departmentName:"Department of Laboratory Medicine"}),a=`
    ${z({heading:"Patient",rows:[{label:"Name",value:o==null?void 0:o.patientName},{label:"Phone",value:o==null?void 0:o.patientPhone},{label:"UMR",value:(o==null?void 0:o.UMRNo)||(o==null?void 0:o.patientUMRNo)}]},{heading:"Test",rows:[{label:"Test",value:t==null?void 0:t.name},{label:"Department",value:t==null?void 0:t.deptname},{label:"Date",value:i.toLocaleDateString("en-IN")}]},e)}
    ${de(t,m)}
    ${H({hospital:e,...r})}
  `;G({title:`Laboratory Report - ${(t==null?void 0:t.name)||"Report"}`,headerHtml:c,contentHtml:a,hospital:e})}function E(e){if(!e)return"—";const r=new Date(e);return Number.isNaN(r.getTime())?"—":r.toLocaleDateString("en-IN")+" "+r.toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit"})}function pe(e){return[e==null?void 0:e.address,[e==null?void 0:e.city,e==null?void 0:e.state].filter(Boolean).join(", "),e==null?void 0:e.zipCode].filter(Boolean).join(", ")}function ue(e){return e.isAbnormal?"Abnormal":"Normal"}function ge(e){var r;return e.resultStatus==="completed"||(r=e.parameters)!=null&&r.some(o=>o.result!=null&&String(o.result).trim()!=="")?"Completed":e.resultStatus==="in-progress"?"In progress":"Pending"}function U({printableItems:e}){return e.length?n.jsxs("table",{className:"printable-table lab-report-print-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{style:{width:"34%"},children:"Parameter"}),n.jsx("th",{style:{width:"24%"},children:"Result"}),n.jsx("th",{style:{width:"28%"},children:"Reference"}),n.jsx("th",{style:{width:"14%"},children:"Unit"})]})}),e.map(r=>{const o=r.parameters||[],t=[r.deptname,ge(r),r.completedAt?E(r.completedAt):null].filter(Boolean).join(" · ");return n.jsxs("tbody",{className:"lab-report-test-group",children:[n.jsx("tr",{className:"lab-report-print-table__test-row",children:n.jsxs("td",{colSpan:4,children:[n.jsx("span",{className:"lab-report-print-table__test-name",children:r.name}),t?n.jsxs("span",{className:"lab-report-print-table__test-meta",children:[" ","· ",t]}):null]})}),o.map(m=>{const c=ue(m)==="Abnormal"?"cr-result-abnormal":"cr-result-normal";return n.jsxs("tr",{children:[n.jsx("td",{children:m.name}),n.jsx("td",{className:c,children:m.result}),n.jsx("td",{children:I(m)}),n.jsx("td",{children:m.units||"—"})]},`${r.code||r.name}-${m.name}`)})]},r.code||r.name)})]}):n.jsx("p",{className:"lab-report-test-block__empty",children:"No laboratory results available."})}function fe(){var y,N,v,j;const{token:e}=F(),[r,o]=S.useState(null),[t,m]=S.useState(!0),[i,c]=S.useState("");if(S.useEffect(()=>{let p=!1;return(async()=>{if(e)try{m(!0),c("");const b=await fetch(T.getApiUrl(`/diagnostics-receipts/public/${e}`)),f=await b.json().catch(()=>({}));if(!b.ok)throw new Error((f==null?void 0:f.message)||"This lab report link is invalid or has expired.");p||o(f)}catch(b){p||c(b.message||"This lab report link is invalid or has expired.")}finally{p||m(!1)}})(),()=>{p=!0}},[e]),Y(!!r,{mobileOnly:!0}),t)return n.jsx("div",{className:"ppv-shell ppv-shell--state",children:n.jsxs("div",{className:"ppv-state",children:[n.jsx("div",{className:"ppv-state__spinner","aria-hidden":!0}),n.jsx("p",{children:"Loading lab report…"})]})});if(i||!r)return n.jsx("div",{className:"ppv-shell ppv-shell--state",children:n.jsxs("div",{className:"ppv-state",children:[n.jsx("h1",{children:"Lab report unavailable"}),n.jsx("p",{children:i||"This lab report link is invalid or has expired."})]})});const{hospital:a,receipt:s}=r,l=(s==null?void 0:s.items)||[],d=l.flatMap(p=>(p.parameters||[]).filter(g=>g.remarks).map(g=>({testName:p.name,paramName:g.name,remarks:g.remarks,key:`${p.code||p.name}-${g.name}`}))),u=pe(a),h=E(s==null?void 0:s.createdAt);return n.jsxs("div",{className:"ppv-shell ppv-shell--lab",children:[n.jsx("header",{className:"ppv-topbar no-print plr-topbar",children:n.jsxs("div",{className:"ppv-topbar__brand",children:[a!=null&&a.logoUrl?n.jsx("img",{src:a.logoUrl,alt:"",className:"ppv-topbar__logo"}):null,n.jsxs("div",{className:"ppv-topbar__text",children:[n.jsx("p",{className:"ppv-topbar__name",children:(a==null?void 0:a.name)||"Lab Report"}),n.jsx("p",{className:"ppv-topbar__sub",children:"Laboratory Test Report"})]})]})}),n.jsxs("div",{className:"ppv-page plr-page",children:[n.jsxs("div",{className:"ppv-screen-only",children:[n.jsxs("section",{className:"ppv-summary plr-details-card",children:[n.jsxs("div",{className:"ppv-summary__block",children:[n.jsx("p",{className:"ppv-summary__label",children:"Patient"}),n.jsx("p",{className:"ppv-summary__value",children:(s==null?void 0:s.patientName)||"—"}),s!=null&&s.patientPhone?n.jsxs("p",{className:"ppv-summary__muted",children:["Ph: ",s.patientPhone]}):null]}),n.jsxs("div",{className:"ppv-summary__block",children:[n.jsx("p",{className:"ppv-summary__label",children:"Report"}),n.jsx("p",{className:"ppv-summary__value",children:h}),n.jsxs("p",{className:"ppv-summary__muted",children:[l.length," test",l.length===1?"":"s"]}),s!=null&&s.receiptId?n.jsx("p",{className:"ppv-summary__muted",children:s.receiptId}):null]})]}),l.length>0?n.jsxs("section",{className:"plr-results-card",children:[n.jsx("div",{className:"plr-results-card__head",children:n.jsx("h2",{className:"plr-results-card__title",children:"Test Results"})}),n.jsx("div",{className:"plr-table-scroll",children:n.jsx(U,{printableItems:l})}),n.jsx("p",{className:"plr-table-hint",children:"Swipe left to see all columns"})]}):n.jsx("p",{className:"plr-empty",children:"No laboratory results available."}),d.length>0?n.jsxs("section",{className:"plr-remarks",children:[n.jsx("p",{className:"plr-remarks__title",children:"Remarks"}),d.map(p=>n.jsxs("p",{className:"plr-remarks__row",children:[n.jsxs("strong",{children:[p.testName," · ",p.paramName,":"]})," ",p.remarks]},p.key))]}):null,(r.signatureUrl||((y=r.hospitalStamp)==null?void 0:y.imageUrl)||((N=r.departmentStamp)==null?void 0:N.imageUrl))&&n.jsxs("div",{className:"flex items-center justify-between gap-4 pt-4 mt-6 border-t border-slate-200",children:[(v=r.departmentStamp)!=null&&v.imageUrl?n.jsxs("div",{className:"text-center",children:[n.jsx("img",{src:r.departmentStamp.imageUrl,alt:r.departmentStamp.name||"Laboratory Stamp",className:"object-contain max-h-16 max-w-[140px] mx-auto"}),n.jsx("p",{className:"text-[11px] font-semibold text-slate-700 mt-1",children:"Laboratory Stamp"})]}):null,(j=r.hospitalStamp)!=null&&j.imageUrl?n.jsxs("div",{className:"text-center",children:[n.jsx("img",{src:r.hospitalStamp.imageUrl,alt:r.hospitalStamp.name||"Hospital Stamp",className:"object-contain max-h-16 max-w-[140px] mx-auto"}),n.jsx("p",{className:"text-[11px] font-semibold text-slate-700 mt-1",children:"Hospital Stamp"})]}):null,r.signatureUrl?n.jsxs("div",{className:"text-center ml-auto",children:[n.jsx("img",{src:r.signatureUrl,alt:r.signerName||"Lab Incharge",className:"object-contain max-h-14 max-w-[130px] mx-auto"}),n.jsx("p",{className:"text-[11px] font-semibold text-slate-700 mt-1",children:r.signerName||"Lab Incharge"})]}):null]}),(u||(a==null?void 0:a.phone))&&n.jsx("p",{className:"ppv-clinic plr-clinic",children:[u,a==null?void 0:a.phone].filter(Boolean).join(" · ")})]}),(()=>{var g,b;const p=w(a);return n.jsx("div",{className:"ppv-print-only prescription-print-sheet lab-report-print-sheet",children:n.jsx(K.Provider,{value:p,children:n.jsxs("div",{className:"printable-document",style:p.printOnLetterhead?{paddingTop:`${p.letterheadTopMarginMm||35}mm`,paddingBottom:`${p.letterheadBottomMarginMm||20}mm`}:void 0,children:[n.jsx(J,{hospital:a,documentTitle:"Laboratory Test Report",settings:p}),n.jsxs("div",{className:"lab-report-print-body",children:[n.jsx(oe,{patientData:{name:s==null?void 0:s.patientName,phone:s==null?void 0:s.patientPhone,UMRNo:(s==null?void 0:s.UMRNo)||(s==null?void 0:s.patientUMRNo),gender:(s==null?void 0:s.gender)||(s==null?void 0:s.patientGender),age:(s==null?void 0:s.age)||(s==null?void 0:s.patientAge)},doctorData:s!=null&&s.doctorName||(g=s==null?void 0:s.doctor)!=null&&g.name?{name:(s==null?void 0:s.doctorName)||((b=s==null?void 0:s.doctor)==null?void 0:b.name),specialization:s==null?void 0:s.doctorSpecialization}:null,extraFields:[{label:"Report Date",value:h},{label:"Total Tests",value:l.length}]}),n.jsx(U,{printableItems:l}),d.length>0?n.jsxs("div",{className:"lab-report-remarks",children:[n.jsx("p",{className:"lab-report-remarks__title",children:"Remarks"}),d.map(f=>n.jsxs("p",{className:"lab-report-remarks__row",children:[n.jsxs("strong",{children:[f.testName," · ",f.paramName,":"]})," ",f.remarks]},f.key))]}):null]}),n.jsx(X,{documentType:"labReport",signatureLabel:r.signatureLabel||"Lab Incharge",departmentStamp:r.departmentStamp,hospitalStamp:r.hospitalStamp,signatureUrl:r.signatureUrl,signerName:r.signerName,hospitalName:a==null?void 0:a.name,settings:p})]})})})})()]})]})}const Me=Object.freeze(Object.defineProperty({__proto__:null,default:fe},Symbol.toStringTag,{value:"Module"}));export{oe as P,we as a,ye as b,ve as c,Se as d,ne as e,P as f,re as g,te as h,Te as i,I as j,Ce as k,Ae as l,Z as m,je as n,Ne as o,Be as p,ee as q,D as r,$e as s,Ue as t,Re as u,Pe as v,Le as w,ke as x,fe as y,Me as z};
