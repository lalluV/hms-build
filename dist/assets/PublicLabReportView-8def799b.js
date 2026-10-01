import{j as n,m as F,r as S}from"./index-91e15ed1.js";import{A as U}from"./api-aee67127.js";import{m as R,o as $,p as V,t as k,v as A,q as B,u as q,b as j,G as W,L as Q,e as Y,A as K,j as J,H as X,P as Z}from"./PublicPrescriptionView-d5795162.js";import"./store-f08bdc5b.js";const D=async()=>(await R.get("/auth/hospital-profile")).data,Ne=async e=>(await R.put("/auth/hospital-profile",e)).data,v="/staff",we=async()=>$(v),ee=async e=>V(v,e),re=async e=>$(`${v}/employee/${e}`),je=async e=>A(v,e),Se=async(e,r)=>k(v,e,r),$e=async(e,r)=>(await R.put(`${v}/${e}/reset-password`,{newPassword:r})).data,Pe=async e=>B(v,e),N="/stamps",Re=async()=>$(N),M=async e=>$(`${N}/department/${e}`),ke=async e=>A(N,e),Le=async(e,r)=>k(N,e,r),Te=async e=>B(N,e),Ue=async e=>k(N,`${e}/toggle`,{}),Ae=async(e,r)=>{const t=new FormData;t.append("stamp",e),t.append("name",r.name),t.append("description",r.description||""),t.append("department",r.department),t.append("category",r.category),t.append("createdBy",r.createdBy);const o=localStorage.getItem("token"),l={};o&&(l["x-auth-token"]=o);const c=await fetch(`${U.BASE_URL}/api/upload/stamp`,{method:"POST",headers:l,body:t});if(!c.ok){const m=await c.json();throw new Error(m.error||"Failed to upload stamp")}return c.json()},P=async e=>{try{let r;try{r=await re(e)}catch{r=await ee(e)}return(r==null?void 0:r.signatureUrl)||null}catch(r){return console.error("Error fetching doctor signature:",r),null}},ne=async e=>{try{const r=await M(e);return(r==null?void 0:r.filter(t=>t.isActive))||[]}catch(r){return console.error("Error fetching department stamps:",r),[]}},te=async()=>{try{const e=await M("General");return(e==null?void 0:e.filter(r=>r.isActive&&r.category==="hospital"))||[]}catch(e){return console.error("Error fetching hospital stamps:",e),[]}};function se(e,r="general"){const t=(e==null?void 0:e.settings)||{},o=[],l=r==="pharmacy"&&t.pharmacyGstNumber||t.gstNumber;return l&&o.push({key:"gst",label:"GSTIN",value:l}),t.panNumber&&o.push({key:"pan",label:"PAN",value:t.panNumber}),r==="pharmacy"&&t.drugLicenseNumber&&o.push({key:"dl",label:"DL No.",value:t.drugLicenseNumber}),r==="lab"&&t.labLicenseNumber&&o.push({key:"ll",label:"Lab Lic. No.",value:t.labLicenseNumber}),o}function oe(e,r){if(r.showPatientAgeGender===!1)return"";const t=(e==null?void 0:e.age)||(e==null?void 0:e.patientAge),o=(e==null?void 0:e.gender)||(e==null?void 0:e.patientGender),l=[t?`${t} Y`:null,o].filter(Boolean);return l.length>0?l.join(" / "):""}function le(e,r){const t=String(e||"").toLowerCase();return!((t.includes("bill")||t.includes("receipt")||t.includes("invoice"))&&r.showBillNumber===!1||(t.includes("date")||t.includes("time"))&&r.showBillDateTime===!1||t.includes("payment")&&r.showPaymentMethod===!1||t.includes("token")&&r.showTokenNumber===!1)}function ae({patientData:e,doctorData:r,extraFields:t=[],extraFieldsHeading:o="Report Details"}){const l=q(),c=(e==null?void 0:e.UMRNo)||(e==null?void 0:e.patientUMRNo)||(e==null?void 0:e.umrNo)||"",m=oe(e,l),a=(e==null?void 0:e.phone)||(e==null?void 0:e.patientPhone),s=(e==null?void 0:e.patient_type)||(e==null?void 0:e.visitType),i=(e==null?void 0:e.address)||(e==null?void 0:e.street_address),d=(e==null?void 0:e.bloodGroup)||(e==null?void 0:e.blood_group),p=(e==null?void 0:e.tokenNumber)||(e==null?void 0:e.token),b=[l.showPatientName!==!1&&{label:"Name",value:(e==null?void 0:e.name)||(e==null?void 0:e.patientName)||"-"},l.showPatientUMR!==!1&&c&&{label:"UMR",value:c},m&&{label:"Age/Gender",value:m},l.showPatientBloodGroup!==!1&&d&&{label:"Blood Group",value:d},l.showPatientPhone!==!1&&a&&{label:"Phone",value:a},l.showVisitType!==!1&&s&&{label:"Type",value:n.jsx("span",{className:"uppercase",children:s})},l.showTokenNumber!==!1&&p&&{label:"Token",value:p},l.showPatientAddress!==!1&&i&&{label:"Address",value:i}].filter(Boolean),_=String((r==null?void 0:r.name)||(r==null?void 0:r.doctorName)||(r==null?void 0:r.consultantDoctor)||(r==null?void 0:r.consultantName)||"").trim(),x=!!(_&&!["-","N/A","UNDEFINED","NULL"].includes(_.toUpperCase()))?[l.showDoctorName!==!1&&{label:"Doctor",value:_},l.showDoctorQualification!==!1&&(r==null?void 0:r.qualification)&&{label:"Qualification",value:r.qualification},l.showDoctorSpecialization!==!1&&(r==null?void 0:r.specialization)&&{label:"Specialization",value:r.specialization},l.showDepartment!==!1&&(r==null?void 0:r.department)&&r.department!==(r==null?void 0:r.specialization)&&{label:"Department",value:r.department},l.showDoctorRegNo!==!1&&(r==null?void 0:r.regNo)&&{label:"Reg No",value:r.regNo}].filter(Boolean):[],y=t.filter(({label:g,value:f})=>f&&le(g,l));if(!b.length&&!x.length&&!y.length)return null;const u=g=>g.map(({label:f,value:h})=>n.jsxs("p",{className:"printable-receipt-meta__row",children:[n.jsxs("strong",{children:[f,":"]})," ",h]},f));return n.jsxs("div",{className:"printable-receipt-meta",children:[b.length>0&&n.jsxs("div",{className:"printable-receipt-meta__block",children:[n.jsx("p",{className:"printable-receipt-meta__heading",children:"Patient Details"}),u(b)]}),x.length>0&&n.jsxs("div",{className:"printable-receipt-meta__block",children:[n.jsx("p",{className:"printable-receipt-meta__heading",children:"Doctor / Consultant"}),u(x)]}),y.length>0&&n.jsxs("div",{className:"printable-receipt-meta__block",children:[n.jsx("p",{className:"printable-receipt-meta__heading",children:o}),u(y)]})]})}function L(e=[]){return e.filter(t=>t.isActive!==!1&&t.imageUrl)[0]||null}function ie(e){return[e==null?void 0:e.address,[e==null?void 0:e.city,e==null?void 0:e.state].filter(Boolean).join(", "),e==null?void 0:e.zipCode].filter(Boolean).join(", ")}const me=`
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
`;function C(e,{documentTitle:r,departmentName:t}){const o=j(e);if(o.printOnLetterhead||o.showHeader===!1)return r?`
        <header class="printable-document-header printable-document-header--letterhead" style="border-bottom:none; margin-bottom:1rem; text-align:center;">
          <p class="printable-document-header__title" style="display:inline-block; font-size:0.85rem; font-weight:700;">${r}</p>
        </header>
      `:"";const l=W(se(e,"lab"),o),c=o.showAddress!==!1?ie(e):null,m=o.showLogo!==!1&&(e==null?void 0:e.logoUrl),a=o.showHospitalName!==!1,s=o.showContactInfo!==!1,i=[s&&(e!=null&&e.phone)?`Phone: ${e.phone}`:null,s&&(e!=null&&e.email)?e.email:null,t||null,...l.map(({label:d,value:p})=>`${d}: ${p}`)].filter(Boolean);return`
    <header class="printable-document-header">
      <div class="printable-document-header__grid">
        ${m?`<div class="printable-document-header__logo-wrap">
                <img src="${e.logoUrl}" alt="${(e==null?void 0:e.name)||"Hospital"}" class="printable-document-header__logo" />
              </div>`:""}
        <div class="printable-document-header__content">
          <div class="printable-document-header__title-row">
            ${a?`<h1 class="printable-document-header__name">${(e==null?void 0:e.name)||"Hospital"}</h1>`:"<div></div>"}
            ${r?`<p class="printable-document-header__title">${r}</p>`:""}
          </div>
          ${c?`<p class="printable-document-header__meta">${c}</p>`:""}
          ${i.length?`<p class="printable-document-header__meta">${i.join(" · ")}</p>`:""}
        </div>
      </div>
    </header>
  `}function ce(e,r,t=""){return`
    <div class="printable-document-footer__cell printable-document-footer__cell--signature">
      <div class="printable-document-footer__image-wrap printable-document-footer__image-wrap--signature">
        ${e?`<img src="${e}" alt="${r}" class="printable-document-footer__image printable-document-footer__image--signature" />`:'<div class="printable-document-footer__placeholder">Signature</div>'}
      </div>
      <p class="printable-document-footer__label">${r}</p>
      ${t?`<p class="printable-document-footer__sub">${t}</p>`:""}
    </div>
  `}function de(e,r){return`
    <div class="printable-document-footer__cell printable-document-footer__cell--stamp">
      <div class="printable-document-footer__image-wrap printable-document-footer__image-wrap--stamp">
        ${e!=null&&e.imageUrl?`<img src="${e.imageUrl}" alt="${e.name||r}" class="printable-document-footer__image printable-document-footer__image--stamp" />`:`<div class="printable-document-footer__placeholder printable-document-footer__placeholder--stamp">${r}</div>`}
      </div>
      <p class="printable-document-footer__label">${r}</p>
    </div>
  `}function H({hospital:e,technicianSignature:r,technicianName:t,reviewerSignature:o,reviewerName:l,departmentStamp:c,hospitalStamp:m,primaryLabel:a="Lab Incharge",secondaryLabel:s="Verified By"}){const i=j(e),d=i.showDoctorSignature!==!1||i.showAuthorizedSignature!==!1,p=i.showStamps!==!1,b=!!i.printOnLetterhead;if(b&&!d&&!p)return"";const _=r||o||null,w=t||l||"",x=r?a:o?s:a,y=!b&&i.showTermsAndConditions!==!1&&!!i.termsAndConditions,u=!b&&(i.showFooterNote!==!1&&i.footerNote||""),g=!b&&i.showPrintTimestamp!==!1,f=!b&&i.showComputerGeneratedDisclaimer!==!1,h=!b&&i.showPoweredBy!==!1,O=new Date().toLocaleString("en-IN",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0});return`
    <footer class="printable-document-footer${b?" printable-document-footer--letterhead":""}">
      ${y?`
          <div class="printable-document-footer__terms">
            <p class="printable-document-footer__terms-title">Terms & Conditions:</p>
            <p class="printable-document-footer__terms-body">${i.termsAndConditions}</p>
          </div>
        `:""}
      ${d||p?`
          <div class="printable-document-footer__grid">
            ${d?ce(_,x,w):"<div></div>"}
            ${p?de(m||c,"Hospital Stamp"):"<div></div>"}
          </div>
        `:""}
      ${u?`
          <div class="printable-document-footer__brand">
            <p class="printable-document-footer__note">${u}</p>
          </div>
        `:""}
      ${f?`
          <p class="printable-document-footer__disclaimer">
            This is a computer-generated clinical report. For queries, contact the laboratory or radiology department.${g?` (Printed: ${O})`:""}
          </p>
        `:""}
      ${h?`
          <div class="printable-document-footer__platform">
            <img src="${Q}" alt="HealEka" class="printable-document-footer__platform-logo" />
            <span class="printable-document-footer__platform-copy">
              <span>Powered by HealEka</span>
              <small>Smart hospitals. Connected care.</small>
            </span>
          </div>
        `:""}
    </footer>
  `}function z(e,r,t){const o=j(t),l=s=>s.filter(({label:i})=>!(i.includes("Name")&&o.showPatientName===!1||i.includes("Phone")&&o.showPatientPhone===!1||i.includes("UMR")&&o.showPatientUMR===!1||i.includes("Date")&&o.showBillDateTime===!1)),c=l(e.rows||[]),m=l(r.rows||[]),a=(s,i)=>i.length?`
      <div>
        <p class="cr-meta-block__heading">${s}</p>
        ${i.map(({label:d,value:p})=>`<p class="cr-meta-block__row"><strong>${d}:</strong> ${p??"—"}</p>`).join("")}
      </div>
    `:"";return`
    <div class="cr-meta-grid">
      ${a(e.heading||"Patient",c)}
      ${a(r.heading||"Report",m)}
    </div>
  `}function I(e){return typeof(e==null?void 0:e.normal_range)=="string"?e.normal_range:e!=null&&e.normal_range?`${e.normal_range.adult_male||"N/A"} (M) / ${e.normal_range.adult_female||"N/A"} (F)`:"N/A"}function ue(e){return!(e==null||typeof e=="string"&&!e.trim())}function pe(e,r={}){var c;const t=e._id||e.code;return`
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
        ${(((c=e.parameters)==null?void 0:c.map(m=>{var p;const a=(p=r[t])==null?void 0:p[m.id||m.name],s=(a==null?void 0:a.value)??m.result;if(!ue(s))return null;const d=(a==null?void 0:a.isAbnormal)??m.isAbnormal?"cr-result-abnormal":"cr-result-normal";return`
        <tr>
          <td><strong>${m.name}</strong></td>
          <td class="${d}">${s}</td>
          <td>${I(m)}</td>
          <td>${m.units||"N/A"}</td>
        </tr>
      `}).filter(Boolean))||[]).join("")||'<tr><td colspan="4" style="text-align:center;padding:1rem;">No results available</td></tr>'}
      </tbody>
    </table>
  `}async function Be(e,r=[]){const[t,o,l]=await Promise.all([D(),ne("Laboratory"),te()]);let c=null,m="",a=null,s="";if((e==null?void 0:e.type)==="LabTechnician"&&(e!=null&&e.id))c=e.signatureUrl||await P(e.id),m=e.name||"";else{const d=r.find(p=>p.type==="LabTechnician"&&p.active!==!1);d!=null&&d.id&&(c=d.signatureUrl||await P(d.id),m=d.name||"")}const i=r.find(d=>d.type==="Doctor"&&d.active!==!1)||null;return i!=null&&i.id&&(a=i.signatureUrl||await P(i.id),s=i.name||""),{hospital:t,technicianSignature:c,technicianName:m,reviewerSignature:a,reviewerName:s,departmentStamp:L(o),hospitalStamp:L(l)}}function G({title:e,headerHtml:r,contentHtml:t,bodyHtml:o,hospital:l}){const c=window.open("","_blank");if(!c)return;const m=j(l),a=Y(m),s=r||"",i=t||o||"",p=!!s?`<table class="print-page-table">
         <thead class="print-page-table__header"><tr><td>${s}</td></tr></thead>
         <tbody><tr><td>${i}</td></tr></tbody>
       </table>`:i;c.document.write(`<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>${e}</title>
        <style>
          ${me}
          ${a}
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
  `),c.document.close()}function Me({hospital:e,assets:r,receipt:t,test:o,reportContent:l}){const c=new Date,m=C(e,{documentTitle:"Radiology Report",departmentName:"Department of Radiology"}),a=`
    ${z({heading:"Patient",rows:[{label:"Name",value:t==null?void 0:t.patientName},{label:"Phone",value:t==null?void 0:t.patientPhone},{label:"UMR",value:(t==null?void 0:t.UMRNo)||(t==null?void 0:t.patientUMRNo)}]},{heading:"Study",rows:[{label:"Test",value:o==null?void 0:o.name},{label:"Date",value:c.toLocaleDateString("en-IN")},{label:"Time",value:c.toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit"})}]},e)}
    <div class="cr-report-content">${l||"No report content available."}</div>
    ${H({hospital:e,...r,primaryLabel:"Radiologist",secondaryLabel:"Verified By"})}
  `;G({title:`Radiology Report - ${(o==null?void 0:o.name)||"Report"}`,headerHtml:m,contentHtml:a,hospital:e})}function Ce({hospital:e,assets:r,receipt:t,test:o,resultsMap:l}){const c=new Date,m=C(e,{documentTitle:"Laboratory Report",departmentName:"Department of Laboratory Medicine"}),a=`
    ${z({heading:"Patient",rows:[{label:"Name",value:t==null?void 0:t.patientName},{label:"Phone",value:t==null?void 0:t.patientPhone},{label:"UMR",value:(t==null?void 0:t.UMRNo)||(t==null?void 0:t.patientUMRNo)}]},{heading:"Test",rows:[{label:"Test",value:o==null?void 0:o.name},{label:"Department",value:o==null?void 0:o.deptname},{label:"Date",value:c.toLocaleDateString("en-IN")}]},e)}
    ${pe(o,l)}
    ${H({hospital:e,...r})}
  `;G({title:`Laboratory Report - ${(o==null?void 0:o.name)||"Report"}`,headerHtml:m,contentHtml:a,hospital:e})}function E(e){if(!e)return"—";const r=new Date(e);return Number.isNaN(r.getTime())?"—":r.toLocaleDateString("en-IN")+" "+r.toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit"})}function ge(e){return[e==null?void 0:e.address,[e==null?void 0:e.city,e==null?void 0:e.state].filter(Boolean).join(", "),e==null?void 0:e.zipCode].filter(Boolean).join(", ")}function be(e){return e.isAbnormal?"Abnormal":"Normal"}function fe(e){var r;return e.resultStatus==="completed"||(r=e.parameters)!=null&&r.some(t=>t.result!=null&&String(t.result).trim()!=="")?"Completed":e.resultStatus==="in-progress"?"In progress":"Pending"}function T({printableItems:e}){return e.length?n.jsxs("table",{className:"printable-table lab-report-print-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{style:{width:"34%"},children:"Parameter"}),n.jsx("th",{style:{width:"24%"},children:"Result"}),n.jsx("th",{style:{width:"28%"},children:"Reference"}),n.jsx("th",{style:{width:"14%"},children:"Unit"})]})}),e.map(r=>{const t=r.parameters||[],o=[r.deptname,fe(r),r.completedAt?E(r.completedAt):null].filter(Boolean).join(" · ");return n.jsxs("tbody",{className:"lab-report-test-group",children:[n.jsx("tr",{className:"lab-report-print-table__test-row",children:n.jsxs("td",{colSpan:4,children:[n.jsx("span",{className:"lab-report-print-table__test-name",children:r.name}),o?n.jsxs("span",{className:"lab-report-print-table__test-meta",children:[" ","· ",o]}):null]})}),t.map(l=>{const m=be(l)==="Abnormal"?"cr-result-abnormal":"cr-result-normal";return n.jsxs("tr",{children:[n.jsx("td",{children:l.name}),n.jsx("td",{className:m,children:l.result}),n.jsx("td",{children:I(l)}),n.jsx("td",{children:l.units||"—"})]},`${r.code||r.name}-${l.name}`)})]},r.code||r.name)})]}):n.jsx("p",{className:"lab-report-test-block__empty",children:"No laboratory results available."})}function he(){var _,w,x,y;const{token:e}=F(),[r,t]=S.useState(null),[o,l]=S.useState(!0),[c,m]=S.useState("");if(S.useEffect(()=>{let u=!1;return(async()=>{if(e)try{l(!0),m("");const f=await fetch(U.getApiUrl(`/diagnostics-receipts/public/${e}`)),h=await f.json().catch(()=>({}));if(!f.ok)throw new Error((h==null?void 0:h.message)||"This lab report link is invalid or has expired.");u||t(h)}catch(f){u||m(f.message||"This lab report link is invalid or has expired.")}finally{u||l(!1)}})(),()=>{u=!0}},[e]),K(!!r,{mobileOnly:!0}),o)return n.jsx("div",{className:"ppv-shell ppv-shell--state",children:n.jsxs("div",{className:"ppv-state",children:[n.jsx("div",{className:"ppv-state__spinner","aria-hidden":!0}),n.jsx("p",{children:"Loading lab report…"})]})});if(c||!r)return n.jsx("div",{className:"ppv-shell ppv-shell--state",children:n.jsxs("div",{className:"ppv-state",children:[n.jsx("h1",{children:"Lab report unavailable"}),n.jsx("p",{children:c||"This lab report link is invalid or has expired."})]})});const{hospital:a,receipt:s}=r,i=(s==null?void 0:s.items)||[],d=i.flatMap(u=>(u.parameters||[]).filter(g=>g.remarks).map(g=>({testName:u.name,paramName:g.name,remarks:g.remarks,key:`${u.code||u.name}-${g.name}`}))),p=ge(a),b=E(s==null?void 0:s.createdAt);return n.jsxs("div",{className:"ppv-shell ppv-shell--lab",children:[n.jsx("header",{className:"ppv-topbar no-print plr-topbar",children:n.jsxs("div",{className:"ppv-topbar__brand",children:[a!=null&&a.logoUrl?n.jsx("img",{src:a.logoUrl,alt:"",className:"ppv-topbar__logo"}):null,n.jsxs("div",{className:"ppv-topbar__text",children:[n.jsx("p",{className:"ppv-topbar__name",children:(a==null?void 0:a.name)||"Lab Report"}),n.jsx("p",{className:"ppv-topbar__sub",children:"Laboratory Test Report"})]})]})}),n.jsxs("div",{className:"ppv-page plr-page",children:[n.jsxs("div",{className:"ppv-screen-only",children:[n.jsxs("section",{className:"ppv-summary plr-details-card",children:[n.jsxs("div",{className:"ppv-summary__block",children:[n.jsx("p",{className:"ppv-summary__label",children:"Patient"}),n.jsx("p",{className:"ppv-summary__value",children:(s==null?void 0:s.patientName)||"—"}),s!=null&&s.patientPhone?n.jsxs("p",{className:"ppv-summary__muted",children:["Ph: ",s.patientPhone]}):null]}),n.jsxs("div",{className:"ppv-summary__block",children:[n.jsx("p",{className:"ppv-summary__label",children:"Report"}),n.jsx("p",{className:"ppv-summary__value",children:b}),n.jsxs("p",{className:"ppv-summary__muted",children:[i.length," test",i.length===1?"":"s"]}),s!=null&&s.receiptId?n.jsx("p",{className:"ppv-summary__muted",children:s.receiptId}):null]})]}),i.length>0?n.jsxs("section",{className:"plr-results-card",children:[n.jsx("div",{className:"plr-results-card__head",children:n.jsx("h2",{className:"plr-results-card__title",children:"Test Results"})}),n.jsx("div",{className:"plr-table-scroll",children:n.jsx(T,{printableItems:i})}),n.jsx("p",{className:"plr-table-hint",children:"Swipe left to see all columns"})]}):n.jsx("p",{className:"plr-empty",children:"No laboratory results available."}),d.length>0?n.jsxs("section",{className:"plr-remarks",children:[n.jsx("p",{className:"plr-remarks__title",children:"Remarks"}),d.map(u=>n.jsxs("p",{className:"plr-remarks__row",children:[n.jsxs("strong",{children:[u.testName," · ",u.paramName,":"]})," ",u.remarks]},u.key))]}):null,(r.signatureUrl||((_=r.hospitalStamp)==null?void 0:_.imageUrl)||((w=r.departmentStamp)==null?void 0:w.imageUrl))&&n.jsxs("div",{className:"flex items-center justify-between gap-4 pt-4 mt-6 border-t border-slate-200",children:[(x=r.departmentStamp)!=null&&x.imageUrl?n.jsxs("div",{className:"text-center",children:[n.jsx("img",{src:r.departmentStamp.imageUrl,alt:r.departmentStamp.name||"Laboratory Stamp",className:"object-contain max-h-16 max-w-[140px] mx-auto"}),n.jsx("p",{className:"text-[11px] font-semibold text-slate-700 mt-1",children:"Laboratory Stamp"})]}):null,(y=r.hospitalStamp)!=null&&y.imageUrl?n.jsxs("div",{className:"text-center",children:[n.jsx("img",{src:r.hospitalStamp.imageUrl,alt:r.hospitalStamp.name||"Hospital Stamp",className:"object-contain max-h-16 max-w-[140px] mx-auto"}),n.jsx("p",{className:"text-[11px] font-semibold text-slate-700 mt-1",children:"Hospital Stamp"})]}):null,r.signatureUrl?n.jsxs("div",{className:"text-center ml-auto",children:[n.jsx("img",{src:r.signatureUrl,alt:r.signerName||"Lab Incharge",className:"object-contain max-h-14 max-w-[130px] mx-auto"}),n.jsx("p",{className:"text-[11px] font-semibold text-slate-700 mt-1",children:r.signerName||"Lab Incharge"})]}):null]}),(p||(a==null?void 0:a.phone))&&n.jsx("p",{className:"ppv-clinic plr-clinic",children:[p,a==null?void 0:a.phone].filter(Boolean).join(" · ")})]}),(()=>{var g,f;const u=j(a);return n.jsx("div",{className:"ppv-print-only prescription-print-sheet lab-report-print-sheet",children:n.jsx(J.Provider,{value:u,children:n.jsxs("div",{className:"printable-document",style:u.printOnLetterhead?{paddingTop:`${u.letterheadTopMarginMm||35}mm`,paddingBottom:`${u.letterheadBottomMarginMm||20}mm`}:void 0,children:[n.jsx(X,{hospital:a,documentTitle:"Laboratory Test Report",settings:u}),n.jsxs("div",{className:"lab-report-print-body",children:[n.jsx(ae,{patientData:{name:s==null?void 0:s.patientName,phone:s==null?void 0:s.patientPhone,UMRNo:(s==null?void 0:s.UMRNo)||(s==null?void 0:s.patientUMRNo),gender:(s==null?void 0:s.gender)||(s==null?void 0:s.patientGender),age:(s==null?void 0:s.age)||(s==null?void 0:s.patientAge)},doctorData:s!=null&&s.doctorName||(g=s==null?void 0:s.doctor)!=null&&g.name?{name:(s==null?void 0:s.doctorName)||((f=s==null?void 0:s.doctor)==null?void 0:f.name),specialization:s==null?void 0:s.doctorSpecialization}:null,extraFields:[{label:"Report Date",value:b},{label:"Total Tests",value:i.length}]}),n.jsx(T,{printableItems:i}),d.length>0?n.jsxs("div",{className:"lab-report-remarks",children:[n.jsx("p",{className:"lab-report-remarks__title",children:"Remarks"}),d.map(h=>n.jsxs("p",{className:"lab-report-remarks__row",children:[n.jsxs("strong",{children:[h.testName," · ",h.paramName,":"]})," ",h.remarks]},h.key))]}):null]}),n.jsx(Z,{documentType:"labReport",signatureLabel:r.signatureLabel||"Lab Incharge",departmentStamp:r.departmentStamp,hospitalStamp:r.hospitalStamp,signatureUrl:r.signatureUrl,signerName:r.signerName,hospitalName:a==null?void 0:a.name,settings:u})]})})})})()]})]})}const He=Object.freeze(Object.defineProperty({__proto__:null,default:he},Symbol.toStringTag,{value:"Module"}));export{ae as P,Ne as a,we as b,Se as c,Pe as d,te as e,P as f,ne as g,se as h,I as i,Ce as j,$e as k,Be as l,D as m,je as n,re as o,Me as p,ee as q,Re as r,Ae as s,Le as t,ke as u,Te as v,Ue as w,he as x,He as y};
