import React from 'react';

import styles from "./style";


import { Test, Placement, Result, Client, CTA, Footer, Navbar, Stats, Hero } from "./Components";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
         <Hero/>
        </div>
      </div>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
         <Stats/>
         <Placement/>
         <Test/>
         <Result/>
        
         <Client/>
         <CTA/>
         <Footer />
         
        </div>
      </div>
    </div>
    )
    
}

export default App;
