import{j as n,m as V,r as k}from"./index-2933cee4.js";import{A as B}from"./api-488bac53.js";import{m as T,o as S,p as q,q as L,v as H,t as M,u as W,b as R,G as Q,L as Y,e as K,A as J,j as X,H as Z,P as D}from"./PrintableDocumentFooter-6e0f779c.js";import"./store-f08bdc5b.js";/* empty css                               */const ee=async()=>(await T.get("/auth/hospital-profile")).data,Se=async e=>(await T.put("/auth/hospital-profile",e)).data,j="/staff",Re=async()=>S(j),re=async e=>q(j,e),ne=async e=>S(`${j}/employee/${e}`),ke=async e=>H(j,e),Pe=async(e,r)=>L(j,e,r),Te=async(e,r)=>(await T.put(`${j}/${e}/reset-password`,{newPassword:r})).data,Le=async e=>M(j,e),$="/stamps",Ue=async()=>S($),C=async e=>S(`${$}/department/${e}`),te=async e=>S(`${$}/category/${e}`),Ae=async e=>H($,e),Be=async(e,r)=>L($,e,r),He=async e=>M($,e),Me=async e=>L($,`${e}/toggle`,{}),Ce=async(e,r)=>{const t=new FormData;t.append("stamp",e),t.append("name",r.name),t.append("description",r.description||""),t.append("department",r.department),t.append("category",r.category),t.append("createdBy",r.createdBy);const l=localStorage.getItem("token"),a={};l&&(a["x-auth-token"]=l);const c=await fetch(`${B.BASE_URL}/api/upload/stamp`,{method:"POST",headers:a,body:t});if(!c.ok){const m=await c.json();throw new Error(m.error||"Failed to upload stamp")}return c.json()},P=async e=>{try{let r;try{r=await ne(e)}catch{r=await re(e)}return(r==null?void 0:r.signatureUrl)||null}catch(r){return console.error("Error fetching doctor signature:",r),null}},oe=async e=>{try{const r=await C(e);return(r==null?void 0:r.filter(t=>t.isActive!==!1))||[]}catch(r){return console.error("Error fetching department stamps:",r),[]}},le=async()=>{try{const e=await te("hospital");return(e==null?void 0:e.filter(r=>r.isActive!==!1))||[]}catch(e){console.error("Error fetching hospital stamps:",e);try{const r=await C("General");return(r==null?void 0:r.filter(t=>t.isActive!==!1&&t.category==="hospital"))||[]}catch(r){return console.error("Error fetching hospital stamps fallback:",r),[]}}};function ae(e,r="general"){const t=(e==null?void 0:e.settings)||{},l=[],a=r==="pharmacy"&&t.pharmacyGstNumber||t.gstNumber;return a&&l.push({key:"gst",label:"GSTIN",value:a}),t.panNumber&&l.push({key:"pan",label:"PAN",value:t.panNumber}),r==="pharmacy"&&t.drugLicenseNumber&&l.push({key:"dl",label:"DL No.",value:t.drugLicenseNumber}),r==="lab"&&t.labLicenseNumber&&l.push({key:"ll",label:"Lab Lic. No.",value:t.labLicenseNumber}),l}function se(e,r){if(r.showPatientAgeGender===!1)return"";const t=(e==null?void 0:e.age)||(e==null?void 0:e.patientAge),l=(e==null?void 0:e.gender)||(e==null?void 0:e.patientGender),a=[t?`${t} Y`:null,l].filter(Boolean);return a.length>0?a.join(" / "):""}function ie(e,r){const t=String(e||"").toLowerCase();return!((t.includes("bill")||t.includes("receipt")||t.includes("invoice"))&&r.showBillNumber===!1||(t.includes("date")||t.includes("time"))&&r.showBillDateTime===!1||t.includes("payment")&&r.showPaymentMethod===!1||t.includes("token")&&r.showTokenNumber===!1)}function me({patientData:e,doctorData:r,extraFields:t=[],extraFieldsHeading:l="Report Details"}){const a=W(),c=(e==null?void 0:e.UMRNo)||(e==null?void 0:e.patientUMRNo)||(e==null?void 0:e.umrNo)||"",m=se(e,a),s=(e==null?void 0:e.phone)||(e==null?void 0:e.patientPhone),o=(e==null?void 0:e.patient_type)||(e==null?void 0:e.visitType),i=(e==null?void 0:e.address)||(e==null?void 0:e.street_address),p=(e==null?void 0:e.bloodGroup)||(e==null?void 0:e.blood_group),h=(e==null?void 0:e.tokenNumber)||(e==null?void 0:e.token),g=[a.showPatientName!==!1&&{label:"Name",value:(e==null?void 0:e.name)||(e==null?void 0:e.patientName)||"-"},a.showPatientUMR!==!1&&c&&{label:"UMR",value:c},m&&{label:"Age/Gender",value:m},a.showPatientBloodGroup!==!1&&p&&{label:"Blood Group",value:p},a.showPatientPhone!==!1&&s&&{label:"Phone",value:s},a.showVisitType!==!1&&o&&{label:"Type",value:n.jsx("span",{className:"uppercase",children:o})},a.showTokenNumber!==!1&&h&&{label:"Token",value:h},a.showPatientAddress!==!1&&i&&{label:"Address",value:i}].filter(Boolean),u=String((r==null?void 0:r.name)||(r==null?void 0:r.doctorName)||(r==null?void 0:r.consultantDoctor)||(r==null?void 0:r.consultantName)||"").trim(),y=!!(u&&!["-","N/A","UNDEFINED","NULL"].includes(u.toUpperCase()))?[a.showDoctorName!==!1&&{label:"Doctor",value:u},a.showDoctorQualification!==!1&&(r==null?void 0:r.qualification)&&{label:"Qualification",value:r.qualification},a.showDoctorSpecialization!==!1&&(r==null?void 0:r.specialization)&&{label:"Specialization",value:r.specialization},a.showDepartment!==!1&&(r==null?void 0:r.department)&&r.department!==(r==null?void 0:r.specialization)&&{label:"Department",value:r.department},a.showDoctorRegNo!==!1&&(r==null?void 0:r.regNo)&&{label:"Reg No",value:r.regNo}].filter(Boolean):[],v=t.filter(({label:N,value:d})=>d&&ie(N,a));if(!g.length&&!y.length&&!v.length)return null;const x=N=>N.map(({label:d,value:f})=>n.jsxs("p",{className:"printable-receipt-meta__row",children:[n.jsxs("strong",{children:[d,":"]})," ",f]},d));return n.jsxs("div",{className:"printable-receipt-meta",children:[g.length>0&&n.jsxs("div",{className:"printable-receipt-meta__block",children:[n.jsx("p",{className:"printable-receipt-meta__heading",children:"Patient Details"}),x(g)]}),y.length>0&&n.jsxs("div",{className:"printable-receipt-meta__block",children:[n.jsx("p",{className:"printable-receipt-meta__heading",children:"Doctor / Consultant"}),x(y)]}),v.length>0&&n.jsxs("div",{className:"printable-receipt-meta__block",children:[n.jsx("p",{className:"printable-receipt-meta__heading",children:l}),x(v)]})]})}function U(e=[],r){const t=e.filter(l=>l.isActive!==!1&&l.imageUrl);if(r){const l=t.find(a=>a.category===r);if(l)return l}return t[0]||null}function ce(e){return[e==null?void 0:e.address,[e==null?void 0:e.city,e==null?void 0:e.state].filter(Boolean).join(", "),e==null?void 0:e.zipCode].filter(Boolean).join(", ")}const de=`
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
    justify-content: space-between;
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
    color: #233e82;
    flex: 0 1 auto;
    font-size: 0.68rem;
    font-weight: 600;
    letter-spacing: 0.05em;
    margin: 0;
    max-width: 100%;
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
`;function z(e,{documentTitle:r,departmentName:t}){const l=R(e);if(l.printOnLetterhead||l.showHeader===!1)return r?`
        <header class="printable-document-header printable-document-header--letterhead" style="border-bottom:none; margin-bottom:1rem; text-align:center;">
          <p class="printable-document-header__title" style="display:inline-block; font-size:0.85rem; font-weight:700;">${r}</p>
        </header>
      `:"";const a=Q(ae(e,"lab"),l),c=l.showAddress!==!1?ce(e):null,m=l.showLogo!==!1&&(e==null?void 0:e.logoUrl),s=l.showHospitalName!==!1,o=l.showContactInfo!==!1,i=[o&&(e!=null&&e.phone)?`Phone: ${e.phone}`:null,o&&(e!=null&&e.email)?e.email:null,t||null,...a.map(({label:p,value:h})=>`${p}: ${h}`)].filter(Boolean);return`
    <header class="printable-document-header">
      <div class="printable-document-header__grid">
        ${m?`<div class="printable-document-header__logo-wrap">
                <img src="${e.logoUrl}" alt="${(e==null?void 0:e.name)||"Hospital"}" class="printable-document-header__logo" />
              </div>`:""}
        <div class="printable-document-header__content">
          <div class="printable-document-header__title-row">
            ${s?`<h1 class="printable-document-header__name">${(e==null?void 0:e.name)||"Hospital"}</h1>`:"<div></div>"}
            ${r?`<p class="printable-document-header__title">${r}</p>`:""}
          </div>
          ${c?`<p class="printable-document-header__meta">${c}</p>`:""}
          ${i.length?`<p class="printable-document-header__meta">${i.join(" · ")}</p>`:""}
        </div>
      </div>
    </header>
  `}function pe(e,r,t=""){return`
    <div class="printable-document-footer__cell printable-document-footer__cell--signature">
      <div class="printable-document-footer__image-wrap printable-document-footer__image-wrap--signature">
        ${e?`<img src="${e}" alt="${r}" class="printable-document-footer__image printable-document-footer__image--signature" />`:'<div class="printable-document-footer__placeholder">Signature</div>'}
      </div>
      <p class="printable-document-footer__label">${r}</p>
      ${t?`<p class="printable-document-footer__sub">${t}</p>`:""}
    </div>
  `}function ue(e,r){return`
    <div class="printable-document-footer__cell printable-document-footer__cell--stamp">
      <div class="printable-document-footer__image-wrap printable-document-footer__image-wrap--stamp">
        ${e!=null&&e.imageUrl?`<img src="${e.imageUrl}" alt="${e.name||r}" class="printable-document-footer__image printable-document-footer__image--stamp" />`:`<div class="printable-document-footer__placeholder printable-document-footer__placeholder--stamp">${r}</div>`}
      </div>
      <p class="printable-document-footer__label">${r}</p>
    </div>
  `}function I({hospital:e,technicianSignature:r,technicianName:t,reviewerSignature:l,reviewerName:a,departmentStamp:c,hospitalStamp:m,primaryLabel:s="Lab Incharge",secondaryLabel:o="Verified By"}){const i=R(e),p=i.showDoctorSignature!==!1||i.showAuthorizedSignature!==!1,h=i.showStamps!==!1,g=!!i.printOnLetterhead;if(g&&!p&&!h)return"";const u=r||l||null,_=t||a||"",y=r?s:l?o:s,v=!g&&i.showTermsAndConditions!==!1&&!!i.termsAndConditions,x=!g&&(i.showFooterNote!==!1&&i.footerNote||""),N=!g&&i.showPrintTimestamp!==!1,d=!g&&i.showComputerGeneratedDisclaimer!==!1,f=!g&&i.showPoweredBy!==!1,w=new Date().toLocaleString("en-IN",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0});return`
    <footer class="printable-document-footer${g?" printable-document-footer--letterhead":""}">
      ${v?`
          <div class="printable-document-footer__terms">
            <p class="printable-document-footer__terms-title">Terms & Conditions:</p>
            <p class="printable-document-footer__terms-body">${i.termsAndConditions}</p>
          </div>
        `:""}
      ${p||h?`
          <div class="printable-document-footer__grid printable-document-footer__grid--prescription">
            ${p?pe(u,y,_):"<div></div>"}
            ${h?ue(m||c,"Hospital Stamp"):"<div></div>"}
          </div>
        `:""}
      ${x?`
          <div class="printable-document-footer__brand">
            <p class="printable-document-footer__note">${x}</p>
          </div>
        `:""}
      ${d?`
          <p class="printable-document-footer__disclaimer">
            This is a computer-generated clinical report. For queries, contact the laboratory or radiology department.${N?` (Printed: ${w})`:""}
          </p>
        `:""}
      ${f?`
          <div class="printable-document-footer__platform">
            <img src="${Y}" alt="HealEka" class="printable-document-footer__platform-logo" />
            <span class="printable-document-footer__platform-copy">
              <span>Powered by HealEka</span>
              <small>Smart hospitals. Connected care.</small>
            </span>
          </div>
        `:""}
    </footer>
  `}function G(e,r,t){const l=R(t),a=o=>o.filter(({label:i})=>!(i.includes("Name")&&l.showPatientName===!1||i.includes("Phone")&&l.showPatientPhone===!1||i.includes("UMR")&&l.showPatientUMR===!1||i.includes("Date")&&l.showBillDateTime===!1)),c=a(e.rows||[]),m=a(r.rows||[]),s=(o,i)=>i.length?`
      <div>
        <p class="cr-meta-block__heading">${o}</p>
        ${i.map(({label:p,value:h})=>`<p class="cr-meta-block__row"><strong>${p}:</strong> ${h??"—"}</p>`).join("")}
      </div>
    `:"";return`
    <div class="cr-meta-grid">
      ${s(e.heading||"Patient",c)}
      ${s(r.heading||"Report",m)}
    </div>
  `}function E(e){return typeof(e==null?void 0:e.normal_range)=="string"?e.normal_range:e!=null&&e.normal_range?`${e.normal_range.adult_male||"N/A"} (M) / ${e.normal_range.adult_female||"N/A"} (F)`:"N/A"}function ge(e){return!(e==null||typeof e=="string"&&!e.trim())}function he(e,r={}){var c;const t=e._id||e.code;return`
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
        ${(((c=e.parameters)==null?void 0:c.map(m=>{var h;const s=(h=r[t])==null?void 0:h[m.id||m.name],o=(s==null?void 0:s.value)??m.result;if(!ge(o))return null;const p=(s==null?void 0:s.isAbnormal)??m.isAbnormal?"cr-result-abnormal":"cr-result-normal";return`
        <tr>
          <td><strong>${m.name}</strong></td>
          <td class="${p}">${o}</td>
          <td>${E(m)}</td>
          <td>${m.units||"N/A"}</td>
        </tr>
      `}).filter(Boolean))||[]).join("")||'<tr><td colspan="4" style="text-align:center;padding:1rem;">No results available</td></tr>'}
      </tbody>
    </table>
  `}async function ze(e,r=[],{department:t="Laboratory",signatureRole:l="LabTechnician"}={}){const[a,c,m]=await Promise.all([ee(),oe(t),le()]);let s=null,o="",i=null,p="";const h=u=>u===l||l==="LabTechnician"&&u==="LabTechnician"||l==="RadiologyTechnician"&&(u==="RadiologyTechnician"||u==="Radiology Technician");if(h(e==null?void 0:e.type)&&(e!=null&&e.id))s=e.signatureUrl||await P(e.id),o=e.name||"";else{const u=r.find(_=>h(_.type)&&_.active!==!1);u!=null&&u.id&&(s=u.signatureUrl||await P(u.id),o=u.name||"")}const g=r.find(u=>u.type==="Doctor"&&u.active!==!1)||null;return g!=null&&g.id&&(i=g.signatureUrl||await P(g.id),p=g.name||""),{hospital:a,technicianSignature:s,technicianName:o,reviewerSignature:i,reviewerName:p,departmentStamp:U(c,"department"),hospitalStamp:U(m,"hospital")}}function O({title:e,headerHtml:r,contentHtml:t,bodyHtml:l,hospital:a}){const c=window.open("","_blank");if(!c)return;const m=R(a),s=K(m),o=r||"",i=t||l||"",p=!!o,h=`<div class="print-page-content">${i}</div>`,g=p?`<table class="print-page-table">
         <thead class="print-page-table__header"><tr><td>${o}</td></tr></thead>
         <tbody><tr><td>${h}</td></tr></tbody>
       </table>`:h;c.document.write(`<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>${e}</title>
        <style>
          ${de}
          ${s}
        </style>
      </head>
      <body>
        <div class="printable-document" style="${m.printOnLetterhead?`padding-top:${m.letterheadTopMarginMm||35}mm; padding-bottom:${m.letterheadBottomMarginMm||20}mm;`:""}">
          ${g}
        </div>
        <div class="no-print" style="text-align:center; margin: 1.5rem auto;">
          <button class="cr-print-btn" onclick="window.print()">Print Report</button>
        </div>
      </body>
    </html>
  `),c.document.close()}function Ie({hospital:e,assets:r,receipt:t,test:l,reportContent:a}){const c=new Date,m=z(e,{documentTitle:"Radiology Report",departmentName:"Department of Radiology"}),s=`
    ${G({heading:"Patient",rows:[{label:"Name",value:t==null?void 0:t.patientName},{label:"Phone",value:t==null?void 0:t.patientPhone},{label:"UMR",value:(t==null?void 0:t.UMRNo)||(t==null?void 0:t.patientUMRNo)}]},{heading:"Study",rows:[{label:"Test",value:l==null?void 0:l.name},{label:"Date",value:c.toLocaleDateString("en-IN")},{label:"Time",value:c.toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit"})}]},e)}
    <div class="cr-report-content">${a||"No report content available."}</div>
    ${I({hospital:e,...r,primaryLabel:"Radiology Technician",secondaryLabel:"Verified By"})}
  `;O({title:`Radiology Report - ${(l==null?void 0:l.name)||"Report"}`,headerHtml:m,contentHtml:s,hospital:e})}function Ge({hospital:e,assets:r,receipt:t,test:l,resultsMap:a}){const c=new Date,m=z(e,{documentTitle:"Laboratory Report",departmentName:"Department of Laboratory Medicine"}),s=`
    ${G({heading:"Patient",rows:[{label:"Name",value:t==null?void 0:t.patientName},{label:"Phone",value:t==null?void 0:t.patientPhone},{label:"UMR",value:(t==null?void 0:t.UMRNo)||(t==null?void 0:t.patientUMRNo)}]},{heading:"Test",rows:[{label:"Test",value:l==null?void 0:l.name},{label:"Department",value:l==null?void 0:l.deptname},{label:"Date",value:c.toLocaleDateString("en-IN")}]},e)}
    ${he(l,a)}
    ${I({hospital:e,...r})}
  `;O({title:`Laboratory Report - ${(l==null?void 0:l.name)||"Report"}`,headerHtml:m,contentHtml:s,hospital:e})}function F(e){if(!e)return"—";const r=new Date(e);return Number.isNaN(r.getTime())?"—":r.toLocaleDateString("en-IN")+" "+r.toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit"})}function be(e){return[e==null?void 0:e.address,[e==null?void 0:e.city,e==null?void 0:e.state].filter(Boolean).join(", "),e==null?void 0:e.zipCode].filter(Boolean).join(", ")}function fe(e){return e.isAbnormal?"Abnormal":"Normal"}function _e(e){var r;return e.resultStatus==="completed"||(r=e.parameters)!=null&&r.some(t=>t.result!=null&&String(t.result).trim()!=="")?"Completed":e.resultStatus==="in-progress"?"In progress":"Pending"}function xe({reports:e}){return e!=null&&e.length?n.jsxs("section",{className:"plr-results-card",children:[n.jsx("div",{className:"plr-results-card__head",children:n.jsx("h2",{className:"plr-results-card__title",children:"Radiology report"})}),e.map(r=>n.jsxs("article",{className:"plr-radiology",children:[n.jsx("h3",{className:"plr-radiology__name",children:r.name}),r.reportHtml?n.jsx("div",{className:"plr-radiology__body",dangerouslySetInnerHTML:{__html:r.reportHtml}}):null,r.reportUrl?n.jsx("p",{className:"plr-radiology__file",children:n.jsx("a",{href:r.reportUrl,target:"_blank",rel:"noreferrer",children:"Open attached PDF"})}):null]},r.code||r.name))]}):null}function A({printableItems:e}){return e.length?n.jsxs("table",{className:"printable-table lab-report-print-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{style:{width:"34%"},children:"Parameter"}),n.jsx("th",{style:{width:"24%"},children:"Result"}),n.jsx("th",{style:{width:"28%"},children:"Reference"}),n.jsx("th",{style:{width:"14%"},children:"Unit"})]})}),e.map(r=>{const t=r.parameters||[],l=[r.deptname,_e(r),r.completedAt?F(r.completedAt):null].filter(Boolean).join(" · ");return n.jsxs("tbody",{className:"lab-report-test-group",children:[n.jsx("tr",{className:"lab-report-print-table__test-row",children:n.jsxs("td",{colSpan:4,children:[n.jsx("span",{className:"lab-report-print-table__test-name",children:r.name}),l?n.jsxs("span",{className:"lab-report-print-table__test-meta",children:[" ","· ",l]}):null]})}),t.map(a=>{const m=fe(a)==="Abnormal"?"cr-result-abnormal":"cr-result-normal";return n.jsxs("tr",{children:[n.jsx("td",{children:a.name}),n.jsx("td",{className:m,children:a.result}),n.jsx("td",{children:E(a)}),n.jsx("td",{children:a.units||"—"})]},`${r.code||r.name}-${a.name}`)})]},r.code||r.name)})]}):n.jsx("p",{className:"lab-report-test-block__empty",children:"No laboratory results available."})}function we(){var x,N;const{token:e}=V(),[r,t]=k.useState(null),[l,a]=k.useState(!0),[c,m]=k.useState("");if(k.useEffect(()=>{let d=!1;return(async()=>{if(e)try{a(!0),m("");const w=await fetch(B.getApiUrl(`/diagnostics-receipts/public/${e}`)),b=await w.json().catch(()=>({}));if(!w.ok)throw new Error((b==null?void 0:b.message)||"This lab report link is invalid or has expired.");d||t(b)}catch(w){d||m(w.message||"This lab report link is invalid or has expired.")}finally{d||a(!1)}})(),()=>{d=!0}},[e]),J(!!r,{mobileOnly:!0}),l)return n.jsx("div",{className:"ppv-shell ppv-shell--state",children:n.jsxs("div",{className:"ppv-state",children:[n.jsx("div",{className:"ppv-state__spinner","aria-hidden":!0}),n.jsx("p",{children:"Loading report…"})]})});if(c||!r)return n.jsx("div",{className:"ppv-shell ppv-shell--state",children:n.jsxs("div",{className:"ppv-state",children:[n.jsx("h1",{children:"Report unavailable"}),n.jsx("p",{children:c||"This report link is invalid or has expired."})]})});const{hospital:s,receipt:o}=r,i=(o==null?void 0:o.items)||[],p=(o==null?void 0:o.radiologyReports)||[],h=p.length>0&&i.length===0,g=i.length&&p.length?"Diagnostics Report":h?"Radiology Report":"Laboratory Test Report",u=r.signatureLabel||(h?"Radiology Technician":"Lab Incharge"),_=i.flatMap(d=>(d.parameters||[]).filter(f=>f.remarks).map(f=>({testName:d.name,paramName:f.name,remarks:f.remarks,key:`${d.code||d.name}-${f.name}`}))),y=be(s),v=F(o==null?void 0:o.createdAt);return n.jsxs("div",{className:"ppv-shell ppv-shell--lab",children:[n.jsx("header",{className:"ppv-topbar no-print plr-topbar",children:n.jsxs("div",{className:"ppv-topbar__brand",children:[s!=null&&s.logoUrl?n.jsx("img",{src:s.logoUrl,alt:"",className:"ppv-topbar__logo"}):null,n.jsxs("div",{className:"ppv-topbar__text",children:[n.jsx("p",{className:"ppv-topbar__name",children:(s==null?void 0:s.name)||g}),n.jsx("p",{className:"ppv-topbar__sub",children:g})]})]})}),n.jsxs("div",{className:"ppv-page plr-page",children:[n.jsxs("div",{className:"ppv-screen-only",children:[n.jsxs("section",{className:"ppv-summary plr-details-card",children:[n.jsxs("div",{className:"ppv-summary__block",children:[n.jsx("p",{className:"ppv-summary__label",children:"Patient"}),n.jsx("p",{className:"ppv-summary__value",children:(o==null?void 0:o.patientName)||"—"}),o!=null&&o.patientPhone?n.jsxs("p",{className:"ppv-summary__muted",children:["Ph: ",o.patientPhone]}):null]}),n.jsxs("div",{className:"ppv-summary__block",children:[n.jsx("p",{className:"ppv-summary__label",children:"Report"}),n.jsx("p",{className:"ppv-summary__value",children:v}),n.jsxs("p",{className:"ppv-summary__muted",children:[i.length+p.length," test",i.length+p.length===1?"":"s"]}),o!=null&&o.receiptId?n.jsx("p",{className:"ppv-summary__muted",children:o.receiptId}):null]})]}),i.length>0?n.jsxs("section",{className:"plr-results-card",children:[n.jsx("div",{className:"plr-results-card__head",children:n.jsx("h2",{className:"plr-results-card__title",children:"Test Results"})}),n.jsx("div",{className:"plr-table-scroll",children:n.jsx(A,{printableItems:i})}),n.jsx("p",{className:"plr-table-hint",children:"Swipe left to see all columns"})]}):p.length===0?n.jsx("p",{className:"plr-empty",children:"No laboratory results available."}):null,n.jsx(xe,{reports:p}),_.length>0?n.jsxs("section",{className:"plr-remarks",children:[n.jsx("p",{className:"plr-remarks__title",children:"Remarks"}),_.map(d=>n.jsxs("p",{className:"plr-remarks__row",children:[n.jsxs("strong",{children:[d.testName," · ",d.paramName,":"]})," ",d.remarks]},d.key))]}):null,(r.signatureUrl||r.signerName||((x=r.hospitalStamp)==null?void 0:x.imageUrl))&&n.jsxs("div",{className:"flex items-center justify-between gap-4 pt-4 mt-6 border-t border-slate-200",children:[(N=r.hospitalStamp)!=null&&N.imageUrl?n.jsxs("div",{className:"text-center",children:[n.jsx("img",{src:r.hospitalStamp.imageUrl,alt:r.hospitalStamp.name||"Hospital Stamp",className:"object-contain max-h-16 max-w-[140px] mx-auto"}),n.jsx("p",{className:"text-[11px] font-semibold text-slate-700 mt-1",children:"Hospital Stamp"})]}):null,r.signatureUrl||r.signerName?n.jsxs("div",{className:"text-center ml-auto",children:[r.signatureUrl?n.jsx("img",{src:r.signatureUrl,alt:r.signerName||u,className:"object-contain max-h-14 max-w-[130px] mx-auto"}):null,n.jsx("p",{className:"text-[11px] font-semibold text-slate-700 mt-1",children:r.signerName||u}),n.jsx("p",{className:"text-[10px] text-slate-500 mt-0.5 mb-0",children:u})]}):null]}),(y||(s==null?void 0:s.phone))&&n.jsx("p",{className:"ppv-clinic plr-clinic",children:[y,s==null?void 0:s.phone].filter(Boolean).join(" · ")})]}),(()=>{var f,w;const d=R(s);return n.jsx("div",{className:"ppv-print-only prescription-print-sheet lab-report-print-sheet",children:n.jsx(X.Provider,{value:d,children:n.jsxs("div",{className:"printable-document",style:d.printOnLetterhead?{paddingTop:`${d.letterheadTopMarginMm||35}mm`,paddingBottom:`${d.letterheadBottomMarginMm||20}mm`}:void 0,children:[n.jsx(Z,{hospital:s,documentTitle:g,settings:d}),n.jsxs("div",{className:"lab-report-print-body",children:[n.jsx(me,{patientData:{name:o==null?void 0:o.patientName,phone:o==null?void 0:o.patientPhone,UMRNo:(o==null?void 0:o.UMRNo)||(o==null?void 0:o.patientUMRNo),gender:(o==null?void 0:o.gender)||(o==null?void 0:o.patientGender),age:(o==null?void 0:o.age)||(o==null?void 0:o.patientAge)},doctorData:o!=null&&o.doctorName||(f=o==null?void 0:o.doctor)!=null&&f.name?{name:(o==null?void 0:o.doctorName)||((w=o==null?void 0:o.doctor)==null?void 0:w.name),specialization:o==null?void 0:o.doctorSpecialization}:null,extraFields:[{label:"Report Date",value:v},{label:"Total Tests",value:i.length+p.length}]}),i.length>0?n.jsx(A,{printableItems:i}):null,p.map(b=>n.jsxs("article",{className:"plr-radiology",children:[n.jsx("h3",{className:"plr-radiology__name",children:b.name}),b.reportHtml?n.jsx("div",{className:"plr-radiology__body",dangerouslySetInnerHTML:{__html:b.reportHtml}}):null]},`print-${b.code||b.name}`)),_.length>0?n.jsxs("div",{className:"lab-report-remarks",children:[n.jsx("p",{className:"lab-report-remarks__title",children:"Remarks"}),_.map(b=>n.jsxs("p",{className:"lab-report-remarks__row",children:[n.jsxs("strong",{children:[b.testName," · ",b.paramName,":"]})," ",b.remarks]},b.key))]}):null]}),n.jsx(D,{documentType:h?"radiologyReport":"labReport",signatureLabel:u,hospitalStamp:r.hospitalStamp,signatureUrl:r.signatureUrl,signerName:r.signerName,hospitalName:s==null?void 0:s.name,settings:d,showDepartmentStamp:!1})]})})})})()]})]})}const Ee=Object.freeze(Object.defineProperty({__proto__:null,default:we},Symbol.toStringTag,{value:"Module"}));export{me as P,Se as a,Re as b,Pe as c,Le as d,le as e,P as f,oe as g,ae as h,E as i,Ge as j,Te as k,ze as l,ee as m,ke as n,ne as o,Ie as p,re as q,Ue as r,Ce as s,Be as t,Ae as u,He as v,Me as w,we as x,Ee as y};
