import './App.css';
import React from 'react';
import { useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import Invoice from './Invoice';


function App() {


  return (
    <div className="App">
      <PDFDownloadLink document={<Invoice />} fileName="invoice.pdf">
        {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
      </PDFDownloadLink>
    </div>
  );
}

export default App;
