import React, { useState } from 'react';

import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'column',
        backgroundColor: 'red',
    },
    header: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
        color: 'red',
    },

})

export default function Invoice() {
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
        <Document>
            <Page size="A4" style={styles.page}>
            <form className={styles.form} onSubmit={handleDownload}>
            <div className={styles.header}>
                <Text className={styles.header}>Invoice</Text>
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
            </Page>
        </Document>
    );
}