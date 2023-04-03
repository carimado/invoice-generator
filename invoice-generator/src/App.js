import './App.css';
import React from 'react';
import { useState } from 'react';
import { Page, Text, View, Document, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';


const styles = {

}

function App() {
  const [formData, setFormData] = useState({
    description: "",
  });

  function handleInputChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   console.log(formData);
  // }

  function handleDownload() {
    console.log(formData);
  }

  return (
    <div className="App">
      <form className={styles.form} onSubmit={handleDownload}>
        <div className={styles.header}>
          <h1>Invoice</h1>
          <div className={styles.description}>
            <input 
              type="text" 
              name="description" 
              id="description" 
              placeholder="Job Description"
              onChange={handleInputChange}
              value={formData.description}
            />
          </div>
        </div>
        <div className={styles.billingInfo}>

        </div>
        <div className={styles.itemInfo}>

        </div>
        <div className={styles.total}>
        </div>
        <button type="submit">Download Invoice</button>
      </form>
      <PDFDownloadLink document={<Document><Page><Text>Invoice</Text></Page></Document>} fileName="invoice.pdf">
        {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
      </PDFDownloadLink>

    </div>
  );
}

export default App;
