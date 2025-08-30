'use client';
import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// ✅ Use correct worker from CDN (auto-matches version)
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PDFViewer = ({ file }: { file: string }) => {
  const [numPages, setNumPages] = useState<number | null>(null);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <Document
      file={file}
      onLoadSuccess={onDocumentLoadSuccess}
      loading={<div className="p-8 text-center">Loading Resume...</div>}
      error={<div className="p-8 text-center text-red-500">Failed to load resume.</div>}
    >
      {Array.from(new Array(numPages), (_, index) => (
        <Page
          key={`page_${index + 1}`}
          pageNumber={index + 1}
          width={600}
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
      ))}
    </Document>
  );
};

export default PDFViewer;
