import{j as n,m as Z,r as k}from"./index-bb7ae87d.js";import{A as z}from"./api-9d2b8de3.js";import{m as P,b as D,c as A,a as U,e as E,d as G,u as ee,g as R,G as re,L as ne,k as te,C as oe,p as le,H as ae,P as se}from"./useScreenWakeLock-0a7ef8d0.js";import"./store-f08bdc5b.js";/* empty css                               */const S="/staff",Oe=async()=>P(S),ie=async e=>D(S,e),me=async e=>P(`${S}/employee/${e}`),Fe=async e=>E(S,e),Ve=async(e,r)=>A(S,e,r),qe=async(e,r)=>(await U.put(`${S}/${e}/reset-password`,{newPassword:r})).data,We=async e=>G(S,e),de=async()=>(await U.get("/auth/hospital-profile")).data,Ye=async e=>(await U.put("/auth/hospital-profile",e)).data,$="/stamps",Ke=async()=>P($),O=async e=>P(`${$}/department/${e}`),ce=async e=>P(`${$}/category/${e}`),Qe=async e=>E($,e),Je=async(e,r)=>A($,e,r),Xe=async e=>G($,e),Ze=async e=>A($,`${e}/toggle`,{}),De=async(e,r)=>{const o=new FormData;o.append("stamp",e),o.append("name",r.name),o.append("description",r.description||""),o.append("department",r.department),o.append("category",r.category),o.append("createdBy",r.createdBy);const l=localStorage.getItem("token"),a={};l&&(a["x-auth-token"]=l);const d=await fetch(`${z.BASE_URL}/api/upload/stamp`,{method:"POST",headers:a,body:o});if(!d.ok){const m=await d.json();throw new Error(m.error||"Failed to upload stamp")}return d.json()},T=async e=>{try{let r;try{r=await me(e)}catch{r=await ie(e)}return(r==null?void 0:r.signatureUrl)||null}catch(r){return console.error("Error fetching doctor signature:",r),null}},ue=async e=>{try{const r=await O(e);return(r==null?void 0:r.filter(o=>o.isActive!==!1))||[]}catch(r){return console.error("Error fetching department stamps:",r),[]}},pe=async()=>{try{const e=await ce("hospital");return(e==null?void 0:e.filter(r=>r.isActive!==!1))||[]}catch(e){console.error("Error fetching hospital stamps:",e);try{const r=await O("General");return(r==null?void 0:r.filter(o=>o.isActive!==!1&&o.category==="hospital"))||[]}catch(r){return console.error("Error fetching hospital stamps fallback:",r),[]}}},ge="MO";function L(e){return e===ge}function er(e){return e==="Nurse"||L(e)}function fe(e){return L(e)?"Medical Officer":e||"Staff"}function rr(e){const r=e==null?void 0:e.type;return r==="Doctor"||L(r)}function nr(e){if(L(e==null?void 0:e.type))return!0;if((e==null?void 0:e.type)!=="Doctor")return!1;const r=String((e==null?void 0:e.position)||(e==null?void 0:e.designation)||"").toLowerCase();return r.includes("dmo")||r.includes("duty")||r.includes("resident")||r.includes("junior")||r.includes("medical officer")}function be(e,r="general"){const o=(e==null?void 0:e.settings)||{},l=[],a=r==="pharmacy"&&o.pharmacyGstNumber||o.gstNumber;return a&&l.push({key:"gst",label:"GSTIN",value:a}),o.panNumber&&l.push({key:"pan",label:"PAN",value:o.panNumber}),r==="pharmacy"&&o.drugLicenseNumber&&l.push({key:"dl",label:"DL No.",value:o.drugLicenseNumber}),r==="lab"&&o.labLicenseNumber&&l.push({key:"ll",label:"Lab Lic. No.",value:o.labLicenseNumber}),l}function he(e,r){if(r.showPatientAgeGender===!1)return"";const o=(e==null?void 0:e.age)||(e==null?void 0:e.patientAge),l=(e==null?void 0:e.gender)||(e==null?void 0:e.patientGender),a=[o?`${o} Y`:null,l].filter(Boolean);return a.length>0?a.join(" / "):""}function _e(e,r){const o=String(e||"").toLowerCase();return!((o.includes("bill")||o.includes("receipt")||o.includes("invoice"))&&r.showBillNumber===!1||(o.includes("date")||o.includes("time"))&&r.showBillDateTime===!1||o.includes("payment")&&r.showPaymentMethod===!1||o.includes("token")&&r.showTokenNumber===!1)}function xe({patientData:e,doctorData:r,extraFields:o=[],extraFieldsHeading:l="Report Details"}){const a=ee(),d=(e==null?void 0:e.UMRNo)||(e==null?void 0:e.patientUMRNo)||(e==null?void 0:e.umrNo)||(e==null?void 0:e.patientId)||"",m=(e==null?void 0:e.ipNumber)||(e==null?void 0:e.IPNo)||(e==null?void 0:e.ipNo)||"",i=he(e,a),t=(e==null?void 0:e.phone)||(e==null?void 0:e.patientPhone),s=(e==null?void 0:e.patient_type)||(e==null?void 0:e.visitType),c=(e==null?void 0:e.address)||(e==null?void 0:e.street_address),p=(e==null?void 0:e.bloodGroup)||(e==null?void 0:e.blood_group),f=(e==null?void 0:e.tokenNumber)||(e==null?void 0:e.token),b=[a.showPatientName!==!1&&{label:"Name",value:(e==null?void 0:e.name)||(e==null?void 0:e.patientName)||"-"},d&&{label:"UMR",value:d},m&&{label:"IP No.",value:m},i&&{label:"Age/Gender",value:i},a.showPatientBloodGroup!==!1&&p&&{label:"Blood Group",value:p},a.showPatientPhone!==!1&&t&&{label:"Phone",value:t},a.showVisitType!==!1&&s&&{label:"Type",value:n.jsx("span",{className:"uppercase",children:s})},a.showTokenNumber!==!1&&f&&{label:"Token",value:f},a.showPatientAddress!==!1&&c&&{label:"Address",value:c}].filter(Boolean),g=String((r==null?void 0:r.name)||(r==null?void 0:r.doctorName)||(r==null?void 0:r.consultantDoctor)||(r==null?void 0:r.consultantName)||"").trim(),N=!!(g&&!["-","N/A","UNDEFINED","NULL"].includes(g.toUpperCase()))?[a.showDoctorName!==!1&&{label:"Doctor",value:g},a.showDoctorQualification!==!1&&(r==null?void 0:r.qualification)&&{label:"Qualification",value:r.qualification},a.showDoctorSpecialization!==!1&&(r==null?void 0:r.specialization)&&{label:"Specialization",value:r.specialization},a.showDepartment!==!1&&(r==null?void 0:r.department)&&r.department!==(r==null?void 0:r.specialization)&&{label:"Department",value:r.department},a.showDoctorRegNo!==!1&&(r==null?void 0:r.regNo)&&{label:"Reg No",value:r.regNo}].filter(Boolean):[],y=o.filter(({label:u,value:h})=>h&&_e(u,a));if(!b.length&&!N.length&&!y.length)return null;const v=u=>u.map(({label:h,value:_})=>n.jsxs("p",{className:"printable-receipt-meta__row",children:[n.jsxs("strong",{children:[h,":"]})," ",_]},h));return n.jsxs("div",{className:"printable-receipt-meta",children:[b.length>0&&n.jsxs("div",{className:"printable-receipt-meta__block",children:[n.jsx("p",{className:"printable-receipt-meta__heading",children:"Patient Details"}),v(b)]}),N.length>0&&n.jsxs("div",{className:"printable-receipt-meta__block",children:[n.jsx("p",{className:"printable-receipt-meta__heading",children:"Doctor / Consultant"}),v(N)]}),y.length>0&&n.jsxs("div",{className:"printable-receipt-meta__block",children:[n.jsx("p",{className:"printable-receipt-meta__heading",children:l}),v(y)]})]})}const F=["Radiology","Cardiology","Neurology","Pulmonology","Gastroenterology","ENT & Audiology","Ophthalmology"],ye=new Set(F.map(e=>e.toLowerCase()));function we(e){return ye.has(String(e||"").trim().toLowerCase())}function Ne(e){return we(e)}function I(e){const r=String(e||"").trim().toLowerCase();return F.find(o=>o.toLowerCase()===r)||e||"Radiology"}function ve(e){return`${I(e)} Technician`}function M(e){return`${I(e)} Report`}function je(e){return(e==null?void 0:e.deptname)||(e==null?void 0:e.department)||""}function Se(e,r){if(!r||r==="all")return!0;const o=Ne(je(e));return r==="radiology"?o:r==="lab"?!o:!0}function tr(e,r){return Array.isArray(e)?!r||r==="all"?e:e.filter(o=>Se(o,r)):[]}function or(e,r=!1){return e==="radiology"?r?"studies":"study":r?"tests":"test"}function lr(e){return e==="LabTechnician"||e==="Phlebotomist"?"lab":e==="RadiologyTechnician"?"radiology":"all"}function ar(e){return e!=="Receptionist"}function B(e=[],r){const o=e.filter(l=>l.isActive!==!1&&l.imageUrl);if(r){const l=o.find(a=>a.category===r);if(l)return l}return o[0]||null}function $e(e){return[e==null?void 0:e.address,[e==null?void 0:e.city,e==null?void 0:e.state].filter(Boolean).join(", "),e==null?void 0:e.zipCode].filter(Boolean).join(", ")}const Pe=`
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
  .cr-result-normal { color: #111827; font-weight: 600; }
  .cr-result-abnormal { color: #991b1b; font-weight: 700; }
  .cr-result-pending { color: #111827; font-style: italic; }
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
  .printable-document,
  .printable-document * {
    color: #111827 !important;
  }
  .cr-result-abnormal,
  .cr-result-abnormal * {
    color: #991b1b !important;
    font-weight: 700 !important;
  }
  .cr-print-btn,
  .cr-print-btn * {
    color: #fff !important;
  }
  .printable-document-header__meta,
  .printable-document-footer__disclaimer,
  .printable-document-footer__sub,
  .printable-document-footer__platform,
  .printable-document-footer__platform-copy small {
    font-size: 11px !important;
    font-weight: 600 !important;
  }
`;function V(e,{documentTitle:r,departmentName:o}){const l=R(e);if(l.printOnLetterhead||l.showHeader===!1)return r?`
        <header class="printable-document-header printable-document-header--letterhead" style="border-bottom:none; margin-bottom:1rem; text-align:center;">
          <p class="printable-document-header__title printable-document-header__title--letterhead">${r}</p>
        </header>
      `:"";const a=re(be(e,"lab"),l),d=l.showAddress!==!1?$e(e):null,m=l.showLogo!==!1&&(e==null?void 0:e.logoUrl),i=l.showHospitalName!==!1,t=l.showContactInfo!==!1,s=[t&&(e!=null&&e.phone)?`Phone: ${e.phone}`:null,t&&(e!=null&&e.email)?e.email:null,o||null,...a.map(({label:c,value:p})=>`${c}: ${p}`)].filter(Boolean);return`
    <header class="printable-document-header">
      <div class="printable-document-header__grid">
        ${m?`<div class="printable-document-header__logo-wrap">
                <img src="${e.logoUrl}" alt="${(e==null?void 0:e.name)||"Hospital"}" class="printable-document-header__logo" />
              </div>`:""}
        <div class="printable-document-header__content">
          <div class="printable-document-header__title-row">
            ${i?`<h1 class="printable-document-header__name">${(e==null?void 0:e.name)||"Hospital"}</h1>`:""}
            ${r?`<p class="printable-document-header__title">${r}</p>`:""}
          </div>
          ${d?`<p class="printable-document-header__meta">${d}</p>`:""}
          ${s.length?`<p class="printable-document-header__meta">${s.join(" · ")}</p>`:""}
        </div>
      </div>
    </header>
  `}function Re(e,r,o=""){return`
    <div class="printable-document-footer__cell printable-document-footer__cell--signature">
      <div class="printable-document-footer__image-wrap printable-document-footer__image-wrap--signature">
        ${e?`<img src="${e}" alt="${r}" class="printable-document-footer__image printable-document-footer__image--signature" />`:'<div class="printable-document-footer__placeholder">Signature</div>'}
      </div>
      <p class="printable-document-footer__label">${r}</p>
      ${o?`<p class="printable-document-footer__sub">${o}</p>`:""}
    </div>
  `}function ke(e,r){return`
    <div class="printable-document-footer__cell printable-document-footer__cell--stamp">
      <div class="printable-document-footer__image-wrap printable-document-footer__image-wrap--stamp">
        ${e!=null&&e.imageUrl?`<img src="${e.imageUrl}" alt="${e.name||r}" class="printable-document-footer__image printable-document-footer__image--stamp" />`:`<div class="printable-document-footer__placeholder printable-document-footer__placeholder--stamp">${r}</div>`}
      </div>
      <p class="printable-document-footer__label">${r}</p>
    </div>
  `}function q({hospital:e,technicianSignature:r,technicianName:o,reviewerSignature:l,reviewerName:a,departmentStamp:d,hospitalStamp:m,primaryLabel:i="Lab Incharge",secondaryLabel:t="Verified By"}){const s=R(e),c=s.showDoctorSignature!==!1||s.showAuthorizedSignature!==!1,p=s.showStamps!==!1,f=!!s.printOnLetterhead;if(f&&!c&&!p)return"";const b=r||l||null,g=o||a||"",w=r?i:l?t:i,N=!f&&s.showTermsAndConditions!==!1&&!!s.termsAndConditions,y=!f&&(s.showFooterNote!==!1&&s.footerNote||""),v=!f&&s.showPrintTimestamp!==!1,u=!f&&s.showComputerGeneratedDisclaimer!==!1,h=!f&&s.showPoweredBy!==!1,_=new Date().toLocaleString("en-IN",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0});return`
    <footer class="printable-document-footer${f?" printable-document-footer--letterhead":""}">
      ${N?`
          <div class="printable-document-footer__terms">
            <p class="printable-document-footer__terms-title">Terms & Conditions:</p>
            <p class="printable-document-footer__terms-body">${s.termsAndConditions}</p>
          </div>
        `:""}
      ${c||p?`
          <div class="printable-document-footer__grid printable-document-footer__grid--prescription">
            ${c?Re(b,w,g):"<div></div>"}
            ${p?ke(m||d,"Hospital Stamp"):"<div></div>"}
          </div>
        `:""}
      ${y?`
          <div class="printable-document-footer__brand">
            <p class="printable-document-footer__note">${y}</p>
          </div>
        `:""}
      ${u?`
          <p class="printable-document-footer__disclaimer">
            This is a computer-generated clinical report. For queries, contact the laboratory or the reporting department.${v?` (Printed: ${_})`:""}
          </p>
        `:""}
      ${h?`
          <div class="printable-document-footer__platform">
            <img src="${ne}" alt="HealEka" class="printable-document-footer__platform-logo" />
            <span class="printable-document-footer__platform-copy">
              <span>Powered by HealEka</span>
              <small>Smart hospitals. Connected care.</small>
            </span>
          </div>
        `:""}
    </footer>
  `}function W(e,r,o){const l=R(o),a=t=>(t||[]).filter(({label:s,value:c})=>{const p=c!=null&&String(c).trim()!==""&&String(c)!=="—";return s.includes("UMR")||s.includes("IP No")||s==="IP"?p:!(!p||s.includes("Name")&&l.showPatientName===!1||s.includes("Phone")&&l.showPatientPhone===!1||s.includes("Date")&&l.showBillDateTime===!1)}),d=a(e.rows||[]),m=a(r.rows||[]),i=(t,s)=>s.length?`
      <div>
        <p class="cr-meta-block__heading">${t}</p>
        ${s.map(({label:c,value:p})=>`<p class="cr-meta-block__row"><strong>${c}:</strong> ${p??"—"}</p>`).join("")}
      </div>
    `:"";return`
    <div class="cr-meta-grid">
      ${i(e.heading||"Patient",d)}
      ${i(r.heading||"Report",m)}
    </div>
  `}function Y(e){return typeof(e==null?void 0:e.normal_range)=="string"?e.normal_range:e!=null&&e.normal_range?`${e.normal_range.adult_male||"N/A"} (M) / ${e.normal_range.adult_female||"N/A"} (F)`:"N/A"}function Te(e){return!(e==null||typeof e=="string"&&!e.trim())}function Le(e,r={}){var d;const o=e._id||e.code;return`
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
        ${(((d=e.parameters)==null?void 0:d.map(m=>{var p;const i=(p=r[o])==null?void 0:p[m.id||m.name],t=(i==null?void 0:i.value)??m.result;if(!Te(t))return null;const c=(i==null?void 0:i.isAbnormal)??m.isAbnormal?"cr-result-abnormal":"cr-result-normal";return`
        <tr>
          <td><strong>${m.name}</strong></td>
          <td class="${c}">${t}</td>
          <td>${Y(m)}</td>
          <td>${m.units||"N/A"}</td>
        </tr>
      `}).filter(Boolean))||[]).join("")||'<tr><td colspan="4" style="text-align:center;padding:1rem;">No results available</td></tr>'}
      </tbody>
    </table>
  `}async function sr(e,r=[],{department:o="Laboratory",signatureRole:l="LabTechnician",currentUser:a=!1}={}){const[d,m,i]=await Promise.all([de(),ue(o),pe()]);let t=null,s="",c=null,p="";a&&e&&(t=e.signatureUrl||(e.id?await T(e.id):null),s=e.name||"");const f=g=>a?!1:g===l||l==="LabTechnician"&&g==="LabTechnician"||l==="RadiologyTechnician"&&(g==="RadiologyTechnician"||g==="Radiology Technician");if(!a&&f(e==null?void 0:e.type)&&(e!=null&&e.id))t=e.signatureUrl||await T(e.id),s=e.name||"";else{const g=a?null:r.find(w=>f(w.type)&&w.active!==!1);g!=null&&g.id&&(t=g.signatureUrl||await T(g.id),s=g.name||"")}const b=a?null:r.find(g=>g.type==="Doctor"&&g.active!==!1)||null;return b!=null&&b.id&&(c=b.signatureUrl||await T(b.id),p=b.name||""),{hospital:d,signerLabel:a?fe(e==null?void 0:e.type):null,technicianSignature:t,technicianName:s,reviewerSignature:c,reviewerName:p,departmentStamp:B(m,"department"),hospitalStamp:B(i,"hospital")}}function K({title:e,headerHtml:r,contentHtml:o,bodyHtml:l,hospital:a}){const d=window.open("","_blank");if(!d)return;const m=R(a),i=te(m),t=r||"",s=o||l||"",c=!!t,p=`<div class="print-page-content">${s}</div>`,f=c?`<table class="print-page-table">
         <thead class="print-page-table__header"><tr><td>${t}</td></tr></thead>
         <tbody><tr><td>${p}</td></tr></tbody>
       </table>`:p;d.document.write(`<!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>${e}</title>
        <style>
          ${Pe}
          ${i}
        </style>
      </head>
      <body>
        <div class="printable-document" style="${m.printOnLetterhead?`padding-top:${m.letterheadTopMarginMm||35}mm; padding-bottom:${m.letterheadBottomMarginMm||20}mm;`:""}">
          ${f}
        </div>
        <div class="no-print" style="text-align:center; margin: 1.5rem auto;">
          <button class="cr-print-btn" onclick="window.print()">Print Report</button>
        </div>
      </body>
    </html>
  `),d.document.close()}function Q(e){var r,o;return(e==null?void 0:e.UMRNo)||(e==null?void 0:e.patientUMRNo)||((r=e==null?void 0:e.patientData)==null?void 0:r.UMRNo)||((o=e==null?void 0:e.patientData)==null?void 0:o.umrNo)||(e==null?void 0:e.patientId)||""}function J(e){var r;return(e==null?void 0:e.ipNumber)||((r=e==null?void 0:e.patientData)==null?void 0:r.ipNumber)||(e==null?void 0:e.IPNo)||""}function ir({hospital:e,assets:r,receipt:o,test:l,reportContent:a}){const d=new Date,m=V(e,{documentTitle:M(l==null?void 0:l.deptname),departmentName:`Department of ${I(l==null?void 0:l.deptname)}`}),i=`
    ${W({heading:"Patient",rows:[{label:"Name",value:o==null?void 0:o.patientName},{label:"Phone",value:o==null?void 0:o.patientPhone},{label:"UMR",value:Q(o)},{label:"IP No.",value:J(o)}]},{heading:"Study",rows:[{label:"Test",value:l==null?void 0:l.name},{label:"Date",value:d.toLocaleDateString("en-IN")},{label:"Time",value:d.toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit"})}]},e)}
    <div class="cr-report-content">${a||"No report content available."}</div>
    ${q({hospital:e,...r,primaryLabel:(r==null?void 0:r.signerLabel)||ve(l==null?void 0:l.deptname),secondaryLabel:"Verified By"})}
  `;K({title:`${M(l==null?void 0:l.deptname)} - ${(l==null?void 0:l.name)||"Report"}`,headerHtml:m,contentHtml:i,hospital:e})}function mr({hospital:e,assets:r,receipt:o,test:l,resultsMap:a}){const d=new Date,m=V(e,{documentTitle:"Laboratory Report",departmentName:"Department of Laboratory Medicine"}),i=`
    ${W({heading:"Patient",rows:[{label:"Name",value:o==null?void 0:o.patientName},{label:"Phone",value:o==null?void 0:o.patientPhone},{label:"UMR",value:Q(o)},{label:"IP No.",value:J(o)}]},{heading:"Test",rows:[{label:"Test",value:l==null?void 0:l.name},{label:"Department",value:l==null?void 0:l.deptname},{label:"Date",value:d.toLocaleDateString("en-IN")}]},e)}
    ${Le(l,a)}
    ${q({hospital:e,...r})}
  `;K({title:`Laboratory Report - ${(l==null?void 0:l.name)||"Report"}`,headerHtml:m,contentHtml:i,hospital:e})}function X(e){if(!e)return"—";const r=new Date(e);return Number.isNaN(r.getTime())?"—":r.toLocaleDateString("en-IN")+" "+r.toLocaleTimeString("en-IN",{hour:"2-digit",minute:"2-digit"})}function Ae(e){return[e==null?void 0:e.address,[e==null?void 0:e.city,e==null?void 0:e.state].filter(Boolean).join(", "),e==null?void 0:e.zipCode].filter(Boolean).join(", ")}function Ue(e){return e.isAbnormal?"Abnormal":"Normal"}function Ie(e){var r;return e.resultStatus==="completed"||(r=e.parameters)!=null&&r.some(o=>o.result!=null&&String(o.result).trim()!=="")?"Completed":e.resultStatus==="in-progress"?"In progress":"Pending"}function Ce({reports:e}){return e!=null&&e.length?n.jsxs("section",{className:"plr-results-card",children:[n.jsx("div",{className:"plr-results-card__head",children:n.jsx("h2",{className:"plr-results-card__title",children:"Radiology report"})}),e.map(r=>n.jsxs("article",{className:"plr-radiology",children:[n.jsx("h3",{className:"plr-radiology__name",children:r.name}),r.reportHtml?n.jsx("div",{className:"plr-radiology__body",dangerouslySetInnerHTML:{__html:r.reportHtml}}):null,r.reportUrl?n.jsx("p",{className:"plr-radiology__file",children:n.jsx("a",{href:r.reportUrl,target:"_blank",rel:"noreferrer",children:"Open attached PDF"})}):null]},r.code||r.name))]}):null}function H({printableItems:e}){return e.length?n.jsxs("table",{className:"printable-table lab-report-print-table",children:[n.jsx("thead",{children:n.jsxs("tr",{children:[n.jsx("th",{style:{width:"34%"},children:"Parameter"}),n.jsx("th",{style:{width:"24%"},children:"Result"}),n.jsx("th",{style:{width:"28%"},children:"Reference"}),n.jsx("th",{style:{width:"14%"},children:"Unit"})]})}),e.map(r=>{const o=r.parameters||[],l=[r.deptname,Ie(r),r.completedAt?X(r.completedAt):null].filter(Boolean).join(" · ");return n.jsxs("tbody",{className:"lab-report-test-group",children:[n.jsx("tr",{className:"lab-report-print-table__test-row",children:n.jsxs("td",{colSpan:4,children:[n.jsx("span",{className:"lab-report-print-table__test-name",children:r.name}),l?n.jsxs("span",{className:"lab-report-print-table__test-meta",children:[" ","· ",l]}):null]})}),o.map(a=>{const m=Ue(a)==="Abnormal"?"cr-result-abnormal":"cr-result-normal";return n.jsxs("tr",{children:[n.jsx("td",{children:a.name}),n.jsx("td",{className:m,children:a.result}),n.jsx("td",{children:Y(a)}),n.jsx("td",{children:a.units||"—"})]},`${r.code||r.name}-${a.name}`)})]},r.code||r.name)})]}):n.jsx("p",{className:"lab-report-test-block__empty",children:"No laboratory results available."})}function Me(){var y,v;const{token:e}=Z(),[r,o]=k.useState(null),[l,a]=k.useState(!0),[d,m]=k.useState("");if(k.useEffect(()=>{let u=!1;return(async()=>{if(e)try{a(!0),m("");const _=await fetch(z.getApiUrl(`/diagnostics-receipts/public/${e}`)),j=await _.json().catch(()=>({}));if(!_.ok)throw new Error((j==null?void 0:j.message)||"This lab report link is invalid or has expired.");u||o(j)}catch(_){u||m(_.message||"This lab report link is invalid or has expired.")}finally{u||a(!1)}})(),()=>{u=!0}},[e]),oe(!!r,{mobileOnly:!0}),l)return n.jsx("div",{className:"ppv-shell ppv-shell--state",children:n.jsxs("div",{className:"ppv-state",children:[n.jsx("div",{className:"ppv-state__spinner","aria-hidden":!0}),n.jsx("p",{children:"Loading report…"})]})});if(d||!r)return n.jsx("div",{className:"ppv-shell ppv-shell--state",children:n.jsxs("div",{className:"ppv-state",children:[n.jsx("h1",{children:"Report unavailable"}),n.jsx("p",{children:d||"This report link is invalid or has expired."})]})});const{hospital:i,receipt:t}=r,s=(t==null?void 0:t.items)||[],c=(t==null?void 0:t.radiologyReports)||[],p=c.length>0&&s.length===0,f=s.length&&c.length?"Diagnostics Report":p?"Radiology Report":"Laboratory Test Report",b=r.signatureLabel||(p?"Radiology Technician":"Lab Incharge"),g=s.flatMap(u=>(u.parameters||[]).filter(h=>h.remarks).map(h=>({testName:u.name,paramName:h.name,remarks:h.remarks,key:`${u.code||u.name}-${h.name}`}))),w=Ae(i),N=X(t==null?void 0:t.createdAt);return n.jsxs("div",{className:"ppv-shell ppv-shell--lab",children:[n.jsx("header",{className:"ppv-topbar no-print plr-topbar",children:n.jsxs("div",{className:"ppv-topbar__brand",children:[i!=null&&i.logoUrl?n.jsx("img",{src:i.logoUrl,alt:"",className:"ppv-topbar__logo"}):null,n.jsxs("div",{className:"ppv-topbar__text",children:[n.jsx("p",{className:"ppv-topbar__name",children:(i==null?void 0:i.name)||f}),n.jsx("p",{className:"ppv-topbar__sub",children:f})]})]})}),n.jsxs("div",{className:"ppv-page plr-page",children:[n.jsxs("div",{className:"ppv-screen-only",children:[n.jsxs("section",{className:"ppv-summary plr-details-card",children:[n.jsxs("div",{className:"ppv-summary__block",children:[n.jsx("p",{className:"ppv-summary__label",children:"Patient"}),n.jsx("p",{className:"ppv-summary__value",children:(t==null?void 0:t.patientName)||"—"}),t!=null&&t.patientPhone?n.jsxs("p",{className:"ppv-summary__muted",children:["Ph: ",t.patientPhone]}):null]}),n.jsxs("div",{className:"ppv-summary__block",children:[n.jsx("p",{className:"ppv-summary__label",children:"Report"}),n.jsx("p",{className:"ppv-summary__value",children:N}),n.jsxs("p",{className:"ppv-summary__muted",children:[s.length+c.length," test",s.length+c.length===1?"":"s"]}),t!=null&&t.receiptId?n.jsx("p",{className:"ppv-summary__muted",children:t.receiptId}):null]})]}),s.length>0?n.jsxs("section",{className:"plr-results-card",children:[n.jsx("div",{className:"plr-results-card__head",children:n.jsx("h2",{className:"plr-results-card__title",children:"Test Results"})}),n.jsx("div",{className:"plr-table-scroll",children:n.jsx(H,{printableItems:s})}),n.jsx("p",{className:"plr-table-hint",children:"Swipe left to see all columns"})]}):c.length===0?n.jsx("p",{className:"plr-empty",children:"No laboratory results available."}):null,n.jsx(Ce,{reports:c}),g.length>0?n.jsxs("section",{className:"plr-remarks",children:[n.jsx("p",{className:"plr-remarks__title",children:"Remarks"}),g.map(u=>n.jsxs("p",{className:"plr-remarks__row",children:[n.jsxs("strong",{children:[u.testName," · ",u.paramName,":"]})," ",u.remarks]},u.key))]}):null,(r.signatureUrl||r.signerName||((y=r.hospitalStamp)==null?void 0:y.imageUrl))&&n.jsxs("div",{className:"flex items-center justify-between gap-4 pt-4 mt-6 border-t border-slate-200",children:[(v=r.hospitalStamp)!=null&&v.imageUrl?n.jsxs("div",{className:"text-center",children:[n.jsx("img",{src:r.hospitalStamp.imageUrl,alt:r.hospitalStamp.name||"Hospital Stamp",className:"object-contain max-h-16 max-w-[140px] mx-auto"}),n.jsx("p",{className:"text-[11px] font-semibold text-slate-700 mt-1",children:"Hospital Stamp"})]}):null,r.signatureUrl||r.signerName?n.jsxs("div",{className:"text-center ml-auto",children:[r.signatureUrl?n.jsx("img",{src:r.signatureUrl,alt:r.signerName||b,className:"object-contain max-h-14 max-w-[130px] mx-auto"}):null,n.jsx("p",{className:"text-[11px] font-semibold text-slate-700 mt-1",children:r.signerName||b}),n.jsx("p",{className:"text-[10px] text-slate-500 mt-0.5 mb-0",children:b})]}):null]}),(w||(i==null?void 0:i.phone))&&n.jsx("p",{className:"ppv-clinic plr-clinic",children:[w,i==null?void 0:i.phone].filter(Boolean).join(" · ")})]}),(()=>{var h,_,j,C;const u=R(i);return n.jsx("div",{className:"ppv-print-only prescription-print-sheet lab-report-print-sheet",children:n.jsx(le.Provider,{value:u,children:n.jsxs("div",{className:"printable-document",style:u.printOnLetterhead?{paddingTop:`${u.letterheadTopMarginMm||35}mm`,paddingBottom:`${u.letterheadBottomMarginMm||20}mm`}:void 0,children:[n.jsx(ae,{hospital:i,documentTitle:f,settings:u}),n.jsxs("div",{className:"lab-report-print-body",children:[n.jsx(xe,{patientData:{name:t==null?void 0:t.patientName,phone:t==null?void 0:t.patientPhone,UMRNo:(t==null?void 0:t.UMRNo)||(t==null?void 0:t.patientUMRNo)||((h=t==null?void 0:t.patientData)==null?void 0:h.UMRNo)||(t==null?void 0:t.patientId)||"",ipNumber:(t==null?void 0:t.ipNumber)||((_=t==null?void 0:t.patientData)==null?void 0:_.ipNumber)||"",gender:(t==null?void 0:t.gender)||(t==null?void 0:t.patientGender),age:(t==null?void 0:t.age)||(t==null?void 0:t.patientAge)},doctorData:t!=null&&t.doctorName||(j=t==null?void 0:t.doctor)!=null&&j.name?{name:(t==null?void 0:t.doctorName)||((C=t==null?void 0:t.doctor)==null?void 0:C.name),specialization:t==null?void 0:t.doctorSpecialization}:null,extraFields:[{label:"Report Date",value:N},{label:"Total Tests",value:s.length+c.length}]}),s.length>0?n.jsx(H,{printableItems:s}):null,c.map(x=>n.jsxs("article",{className:"plr-radiology",children:[n.jsx("h3",{className:"plr-radiology__name",children:x.name}),x.reportHtml?n.jsx("div",{className:"plr-radiology__body",dangerouslySetInnerHTML:{__html:x.reportHtml}}):null]},`print-${x.code||x.name}`)),g.length>0?n.jsxs("div",{className:"lab-report-remarks",children:[n.jsx("p",{className:"lab-report-remarks__title",children:"Remarks"}),g.map(x=>n.jsxs("p",{className:"lab-report-remarks__row",children:[n.jsxs("strong",{children:[x.testName," · ",x.paramName,":"]})," ",x.remarks]},x.key))]}):null]}),n.jsx(se,{documentType:p?"radiologyReport":"labReport",signatureLabel:b,hospitalStamp:r.hospitalStamp,signatureUrl:r.signatureUrl,signerName:r.signerName,hospitalName:i==null?void 0:i.name,settings:u,showDepartmentStamp:!1})]})})})})()]})]})}const dr=Object.freeze(Object.defineProperty({__proto__:null,default:Me},Symbol.toStringTag,{value:"Module"}));export{nr as A,er as B,rr as C,ie as D,Ke as E,De as F,Je as G,Qe as H,Xe as I,Ze as J,Me as K,dr as L,xe as P,F as R,Ve as a,We as b,de as c,Ye as d,pe as e,T as f,ue as g,be as h,Ne as i,Y as j,Se as k,sr as l,Oe as m,mr as n,M as o,ir as p,lr as q,I as r,fe as s,ar as t,tr as u,or as v,qe as w,Fe as x,me as y,L as z};
