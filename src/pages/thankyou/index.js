import React, { useEffect, useState } from 'react';
import Header from '../../components/global-components/Header';
import { pageLoading } from '../../util/global';


const Index = () => {

  useEffect(() => {
    pageLoading(false);

  }, [])
  return (
    <>
      <Header />
      <div style={{ paddingTop: '100px' }}>
      <div class="thankyou-div-v2" >
        <div class="row" >
            <div class="col-sm-12">
                <p class="pstyle-thankyou-v2">Thank You!</p>
                <p></p>
            </div>
        </div>  
    </div>
    </div>

    <div style={{ paddingTop: '100px', paddingBottom: '85px' }}>
        <p className="FooterStyle">
          *Disclaimer: This service is for ICICI Bank Kisan Credit Card Customer only.
        </p>
      </div>
      {/* <FooterComponents language={language} /> */}
    </>
  );
};

export default Index;