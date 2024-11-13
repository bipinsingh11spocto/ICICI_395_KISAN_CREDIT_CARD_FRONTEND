import React, { useEffect, useState } from 'react';
import FooterComponents from '../../components/global-components/Footer';
import Header from '../../components/global-components/Header';
import { decrypt, decryptlink } from '../../util/crypto';
import { addEvents, getPrevData } from '../../service/kisancreditcardServiceApi';
import { dateSeperated, getLanguageFromCode, maskAccountId, pageLoading } from '../../util/global';
import ErrorPage from '../errorPagedata';
import CallingPage from '../step-two/CallingPage';
import LandingPage from './LandingPage';
import { logStepMessage, sessionVariable } from '../../constants/variableConst';
import Content from '../../constants/Content.json'

const Index = () => {
  const [param, setParam] = useState({});
  const [customerPrevDetails, setCustomerPrevDetails] = useState({});
  const [pageShow, setPageShow] = useState(1);
  const [errorMessage, setErrorMessage] = useState("");
  const [modalMessageShow, setModalMessage] = useState(false);
  const [language, setLanguage] = useState("English");

  useEffect(() => {
    const parameters = window.location.href;
    let new_parameters;
    let new_refined = "";
    let languageCode = "";
    try {
      const url = parameters.split("?");
      // url contains array of URL and hashcode
      // extract proper hashlink from the url
      if (url[1]) {
        const cleaned_url = url[1].split("&");
        const details = cleaned_url[0];
        const refined = details.replace("#/", "");
        new_refined = refined.replace("=", "");
        const hashCode = new_refined.split('_')[0];
        const sessionId = new_refined.split('_')[1];
        languageCode = new_refined.split('_')[2] || null;
        setLanguage(getLanguageFromCode(languageCode));
        new_refined = hashCode;
        sessionStorage.setItem(sessionVariable.URL_HASH, hashCode)
        sessionStorage.setItem(sessionVariable.SESSION_ID, sessionId)
      }
      new_parameters = decryptlink(new_refined);
      // new_parameter contains customerid, batchno and spoctoid in pipe seperated.
      if (new_refined !== undefined) {
        let param = new_parameters.split("|");
        const paramData = {
          "spoctoId": param[2],
          "batchNo": param[1],
          "customerId": param[0]
        };
        setParam(paramData);
        // calling API to get Customer data from sp_leads table.
        getPrevData(paramData).then((res) => {
          const resData = decrypt(res.data.data);
          console.log(resData);
          const maskedAccNo = maskAccountId(resData['gold_loan_acc_no']);
          const expiryDateFormated = dateSeperated(resData['expiry_date']);
          sessionStorage.setItem("mask", maskedAccNo);
          setCustomerPrevDetails({
            "maskLoanAccountNo": maskedAccNo,
            "outstandingAmount": resData['total_outstanding_amount'],
            "expiryDate": expiryDateFormated,
            "name": resData['name'],
            "mobile": resData['mobile'],
            "email": resData["email"],
            "accountNo": resData['gold_loan_acc_no'],
            "rmMobileNo": resData['rm_mobile_no'],
            "videoFlag": resData['videoFlag'],
            "imobileTagging": resData['imobileTagging'],
            "branchAddressSolId": resData['branchAddress']
          })
          pageLoading(false);
          const logData = {
            ...paramData,
            step: logStepMessage.ONE.STEPID,
            stepText: logStepMessage.ONE.STEPTEXT,
            accountNo: maskedAccNo,
            outstandingAmount: resData['total_outstanding_amount'],
            expiryDate: resData['expiry_date'],
            languageTag: Content[getLanguageFromCode(languageCode)].tag || ""
          };
          addEvents(logData);
        }).catch((err) => {
          setPageShow(3);
          setErrorMessage("some error occured");
        })

      } else {
        setPageShow(3);
        setErrorMessage("Invalid URL");
      }
    } catch (err) {
      new_parameters = undefined;
      setPageShow(3);
      setErrorMessage("Invalid URL");
    }
    // eslint-disable-next-line
  }, [])
  return (
    <>
      <Header />
      <div>
      </div>
      <div >
        {pageShow === 1 && <LandingPage prevData={[param, customerPrevDetails, setPageShow, modalMessageShow, setModalMessage, setErrorMessage, language, setLanguage]} />}
        {pageShow === 2 && <CallingPage setPageShow={[setPageShow, param, setModalMessage]} />}
        {pageShow === 3 && <ErrorPage errorMessage={errorMessage} />}
      </div>
      {/* <FooterComponents language={language} /> */}
    </>
  );
};

export default Index;