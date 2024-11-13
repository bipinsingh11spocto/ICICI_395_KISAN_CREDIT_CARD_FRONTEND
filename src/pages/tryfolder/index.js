import React, { useEffect, useState } from 'react';
import { pageLoading } from '../../util/global';

const Tryfolder = () => {

  useEffect(() => {
    pageLoading(false);


  }, [])
  return (
    <>
      <div >
        Hello bipin
      </div>
      {/* <FooterComponents language={language} /> */}
    </>
  );
};

export default Tryfolder;