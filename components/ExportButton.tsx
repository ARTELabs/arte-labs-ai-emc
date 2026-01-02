
"use client";
import { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType } from "docx";

async function fetchAsBuffer(url:string){ const res = await fetch(url); return await res.arrayBuffer(); }

export default function ExportButton({ payload }:{ payload:any }) {
  async function exportDocx(){
    const logo = await fetchAsBuffer("/arte-labs-logo.png");
    const { Media } = await import("docx");

    const doc = new Document({
      sections: [{
        properties: {},
        headers: { default: { children: [ new Paragraph({ alignment: AlignmentType.LEFT, children: [ Media.addImage(doc, Buffer.from(logo), 140, 28) ] }) ] } },
        children: [
          new Paragraph({ text: "Consumer Radio Compliance Report", heading: HeadingLevel.TITLE }),
          new Paragraph({ text: `Market: ${payload.market} • Radio: ${payload.radio}` }),
          new Paragraph({ text: "Standards Selected", heading: HeadingLevel.HEADING_1 }),
          ...payload.radioStandards.map((s:string)=>new Paragraph({ text: `Radio: ${s}` })),
          ...payload.emc.map((s:string)=>new Paragraph({ text: `EMC: ${s}` })),
          ...payload.safety.map((s:string)=>new Paragraph({ text: `Safety: ${s}` })),
          ...payload.rfExposure.map((s:string)=>new Paragraph({ text: `RF Exposure: ${s}` })),
          new Paragraph({ text: "References", heading: HeadingLevel.HEADING_2 }),
          ...payload.citations.map((u:string)=>new Paragraph({ children:[ new TextRun({ text:u, style:"Hyperlink" }) ] }))
        ]
      }]
    });

    const blob = await Packer.toBlob(doc);
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "arte-labs_compliance_report.docx";
    a.click();
  }

  return (
    <button onClick={exportDocx} className="mt-4 rounded-md px-4 py-2 text-white" style={{ background: "linear-gradient(90deg,var(--arte-from),var(--arte-to))" }}>
      Export Word
    </button>
  );
}
