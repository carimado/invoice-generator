import './App.css';
import React from 'react';
import { useState } from 'react';

const styles = {

}

function App() {
  const [formData, setFormData] = useState({
    description: '',
  });

  return (
    <div className="App">
      <form className={styles.form}>
        <div className={styles.header}>
          <h1>Invoice</h1>
          <div className={styles.description}>
            <input 
              type="text" 
              name="description" 
              id="description" 
              placeholder="Job Description"
              onChange={(e) => {setFormData(e.target.value)}}
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

    </div>
  );
}

export default App;
