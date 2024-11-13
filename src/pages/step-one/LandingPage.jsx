import React, { useEffect } from 'react';
import { pageLoading } from '../../util/global';
import { Card, Row, Select, Col } from 'antd'
import { addEvents, srGeneration } from '../../service/kisancreditcardServiceApi';
import { decrypt, encrypt } from '../../util/crypto';
import KisancreditcardModalMessage from './components/KisancreditcardModalMessage';
import { useState } from 'react';
import { BRANCH_LINK, BRANCH_LINK2, clientUrl, customerStatus, INTERNAL_ERROR_MESSAGE, KaleryaFlag, logStepMessage, RM_AVAILABLE_END_TIME, RM_AVAILABLE_START_TIME, sessionVariable, TRUE_BOOL_STR } from '../../constants/variableConst';
import Content from '../../constants/Content.json'
import bankAddressData from '../../constants/bankAddressData.json'

import { useHistory } from "react-router-dom";


const LandingPage = (props) => {
  const [showUPIOptions, setShowUPIOptions] = useState(false);
  const [showRecordFound, setShowRecordFound] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const history = useHistory();
  // const cname=props.customerPrevDetails.name


  const [param, prevDetails, setPageShow, modalMessageShow, setModalMessage, setErrorMessage, language, setLanguage] = props.prevData
  const [messageType, setMessageType] = useState();
  const [srNo, setSrNo] = useState("");
  const filteredOptions = Object.keys(Content).filter((o) => !language.includes(o));

  const srGenerate = () => {
    const nameSep = prevDetails['name'].split(" ")
    const payload = {
      ...param,
      "loanAmount": prevDetails['outstandingAmount'],
      "email": prevDetails['email'],
      "mobile": prevDetails['mobile'],
      "firstName": nameSep[0],
      "lastName": nameSep[1],
      "accountNo": prevDetails['accountNo']
    }
    srGeneration(payload)
      .then((res) => {
        const resData = decrypt(res.data.data);
        pageLoading(false);
        if (resData.IsSuccess === TRUE_BOOL_STR) {
          setSrNo(resData.ItemKey)
          const date = new Date();
          const time = date.getHours()
          if (time > RM_AVAILABLE_END_TIME || time <= RM_AVAILABLE_START_TIME) {
            setModalMessage(true)
            setMessageType(KaleryaFlag.RMTIME_OUT)
            const logData = {
              ...param,
              "step": logStepMessage.NINE.STEPID,
              "stepText": logStepMessage.NINE.STEPTEXT,
              "languages": language
            }
            addEvents(logData)
          }
          else {
            const logData = {
              ...param,
              "step": logStepMessage.TEN.STEPID,
              "stepText": logStepMessage.TEN.STEPTEXT,
              "srNo": resData.ItemKey,
              "languages": language
            }
            addEvents(logData)
          }
        }
        else {
          pageLoading(false)
          setPageShow(3);
          setErrorMessage(resData.Message)
        }

      })
      .catch((err) => {
        pageLoading(false)
        setPageShow(3);
        setErrorMessage(INTERNAL_ERROR_MESSAGE)
      })
  }

  const iMobileClickHandlar = (data) => {
    pageLoading(true)
    const logData = {
      ...param,
      "step": logStepMessage.FOUR.STEPID,
      "stepText": logStepMessage.FOUR.STEPTEXT,
      "languages": language
    }
    if (data === customerStatus['CUSTOMER_HAVE_IPAY']) {
      logData['step'] = logStepMessage.THREE.STEPID
      logData['stepText'] = logStepMessage.THREE.STEPTEXT
      logData['languages'] = language
    }
    addEvents(logData)
      .then((res) => {
        pageLoading(false)
        if (data === customerStatus['CUSTOMER_HAVE_IPAY']) {  // conditions where iMObile is Active and add deep link of app
          window.location.href = clientUrl.IMOBILE_DEEP_LINK
        } else {
          window.location.href = clientUrl.MERA_MOBILE
        }
      })
  }

  const visitBranchButtonHandlar = () => {
    pageLoading(true)
    const logData = {
      ...param,
      "step": logStepMessage.THIRTEEN.STEPID,
      "stepText": logStepMessage.THIRTEEN.STEPTEXT,
      "languages": language
    }
    addEvents(logData)
      .then((res) => {
        pageLoading(false)
        const bankAddress = `${bankAddressData[prevDetails['branchAddressSolId']].latitude || '0'},${bankAddressData[prevDetails['branchAddressSolId']].longitude || '0'}`;
        const redirectLink = BRANCH_LINK + bankAddress
        const redirectLink2 = BRANCH_LINK2 + bankAddress
        window.open(redirectLink, '_blank')
        window.open(redirectLink2, '_blank')
      })
  }

  const rmManagerHandlar = () => {
    pageLoading(true)
    const date = new Date();
    const time = date.getHours()
    if (time > RM_AVAILABLE_END_TIME || time <= RM_AVAILABLE_START_TIME) {
      const logData = {
        ...param,
        "step": logStepMessage.TEN.STEPID,
        "stepText": logStepMessage.TEN.STEPTEXT,
        "languages": language
      }
      addEvents(logData)
      srGenerate();
      return;
    }
    // here we are calling API here that connect call to customer and rm Manager
    // const callPayload = {
    //   "caller": prevDetails['mobile'],
    //   "rmMobile": prevDetails['rmMobileNo'],
    //   "method": KALERYA_METGHOD_DIAL,
    //   ...param
    // }
    pageLoading(false);
    setPageShow(2);
    sessionStorage.setItem(sessionVariable.CALLER_ID, encrypt('23456789o'))//dummy
    const logData = {
      ...param,
      "step": logStepMessage.FIVE.STEPID,
      "stepText": logStepMessage.FIVE.STEPTEXT,
      "languages": language
    }
    addEvents(logData)
    setTimeout(() => {
      logData['step'] = logStepMessage.EIGHT.STEPID
      logData['stepText'] = logStepMessage.EIGHT.STEPTEXT
      addEvents(logData)
    }, 3000)
    // SRCallConnect(callPayload).then((res) => {
    //   const resCallData = res.data
    //   if (resCallData.status === OK_STR) {
    //     pageLoading(false);
    //     setPageShow(2);
    //     sessionStorage.setItem(sessionVariable.CALLER_ID, encrypt(resCallData.data.id))
    //     const logData = {
    //       ...param,
    //       "step": logStepMessage.FIVE.STEPID,
    //       "stepText": logStepMessage.FIVE.STEPTEXT,
    //       "callInitiateId": resCallData.data.id,
    //       "callConnectionStatus": resCallData.status
    //     }
    //     addEvents(logData)
    //   }
    //   else {
    //     srGenerate();
    //     setModalMessage(true);
    //     sessionStorage.setItem(sessionVariable.RM_NOT_AVAILABLE, encrypt(KaleryaFlag.RM_NOT_AVAILABLE));
    //     const logData = {
    //       ...param,
    //       "step": logStepMessage.SIX.STEPID,
    //       "stepText": logStepMessage.SIX.STEPTEXT,
    //       "callConnectionStatus": resCallData.status
    //     }
    //     addEvents(logData);
    //   }
    // }).catch(() => {
    //   const logData = {
    //     ...param,
    //     "step": logStepMessage.FIVE.STEPID,
    //     "stepText": logStepMessage.FIVE.STEPTEXT,
    //   }
    //   addEvents(logData);
    // })
  }

  const handleUPIClick = () => {
    setShowUPIOptions(!showUPIOptions); // Toggle the visibility of UPI options
  };

  const handlePayClick = () => {
    setIsButtonClicked(true);
    handlePayButtonClick();
    const logData = {
      ...param,
      "step": logStepMessage.FIFTEEN.STEPID,
      "stepText": logStepMessage.FIFTEEN.STEPTEXT,
      "languages": language
    }
    addEvents(logData)

    // Use requestAnimationFrame to ensure the DOM has updated before scrolling
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const recordFoundElement = document.getElementById('record-found');
        if (recordFoundElement) {
          recordFoundElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
        } else {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth'
          });
        }
      });
    });
  };

  const languageSelectHandlar = (data, option) => {
    setLanguage(data)
    const logData = {
      ...param,
      "step": logStepMessage.TWO.STEPID,
      "stepText": `${logStepMessage.TWO.STEPTEXT} - ${Content[data].tag || ''}`,
      "languages": data,
      "languageTag": Content[data].tag || ''
    }
    sessionStorage.setItem("lan", data);
    addEvents(logData);
  }

  const handlePayButtonClick = () => {
    setShowRecordFound(true);
  };

  const handleIMPSclick = () => {

    const logData = {
      ...param,
      "step": logStepMessage.NINETEEN.STEPID,
      "stepText": logStepMessage.NINETEEN.STEPTEXT,
      "languages": language
    }
    addEvents(logData)
    history.push('/thankyou');
  }

  const handleNEFTclick = () => {

    const logData = {
      ...param,
      "step": logStepMessage.TWENTY.STEPID,
      "stepText": logStepMessage.TWENTY.STEPTEXT,
      "languages": language
    }
    addEvents(logData)
    history.push('/thankyou');


  }



  const handleUPIOptionClick = (option) => {
    let url;
    
    var logData ;
    

    switch(option) {
      case 'G Pay':
        url = 'https://pay.google.com/';
         logData = {
          ...param,
          "step": logStepMessage.SIXTEEN.STEPID,
          "stepText": logStepMessage.SIXTEEN.STEPTEXT,
          "languages": language
        }
        break;
      case 'Phone pe':
         logData = {
          ...param,
          "step": logStepMessage.SEVENTEEN.STEPID,
          "stepText": logStepMessage.SEVENTEEN.STEPTEXT,
          "languages": language
        }
        url = 'https://www.phonepe.com/';
        break;
      case 'PayTm':
        url = 'https://paytm.com/';
        logData = {
          ...param,
          "step": logStepMessage.EIGHTEEN.STEPID,
          "stepText": logStepMessage.EIGHTEEN.STEPTEXT,
          "languages": language
        }
        break;
      default:
        url = '';
    }
    if (url) {
      addEvents(logData);
      window.open(url, '_blank');
    }
  };

  useEffect(() => {
    let modalMessage;
    try {
      let data = sessionStorage.getItem(sessionVariable.RMCALL_FLAG);
      if (data) {
        modalMessage = decrypt(data)
      }
    }
    catch (err) {
      pageLoading(false)
    }
    if (modalMessageShow && modalMessage !== KaleryaFlag.RMCALL_SUCCESS_FLAG) {
      srGenerate();
      pageLoading(true)
      setMessageType(modalMessage)
    }
    else if (modalMessageShow && modalMessage === KaleryaFlag.RMCALL_SUCCESS_FLAG) {
      setMessageType(modalMessage)
    }
    // eslint-disable-next-line
  }, [modalMessageShow])

  return (
    <div>
      <div className='landing-page-content' >
        {/* Replace GoldLoanVedioFrame with an image */}
        <div className="rounded-image-container">
          <img 
            src="assets/img/farmer.png"
            alt="Kisan Credit Card"
            className="rounded-image"
          />
        </div>
        {/* {selectedPaymentOption === 'UPI' && <UPIPage />} */}
        <div id="userDetails">
      <div style={{ margin: '2px', padding: '10px', borderRadius: '8px' }}>
        <p className="UserContentStyle" style={{ lineHeight: '0' }}>
          Dear {prevDetails.name ||  'Valued Customer'},
        </p>
        <p className="UserContentStyle" style={{ lineHeight: '1.5' }}>
          An interest amount will be charged on your <strong>Kisan Credit Card</strong>
        </p>
        <p className="UserContentStyle" style={{ lineHeight: '1.5' }}>
          Please deposit the interest amount in your linked Savings Account.
        </p>
      </div>
      <p className="AccountDetailsStyle">Account Details:</p>
      <div className="AccountDetailsGStyle">
        <p className="AccountDetailsTStyle">Savings Account number:</p>
        <p className="AccountDetailsVStyle">{prevDetails.maskLoanAccountNo}</p>
        <p className="AccountDetailsHStyle">Kisan Credit Card:</p>
        <p className="AccountDetailsVStyle">{prevDetails.accountNo}</p>
        <p className="AccountDetailsHStyle">Approximate Interest amount:</p>
        <p className="AccountDetailsVStyle">₹{prevDetails.outstandingAmount}</p>
        <p className="AccountDetailsBStyle">⎯⎯</p>
      </div>
      <p className="Make-a-simple">Transfer funds to your Savings Account</p>
      <div className="div_btn">
      {!isButtonClicked && (
        <a className="button_icici enablebtn" id="pay_now" onClick={handlePayClick} >
          PAY
        </a>
      )}
        {/* Second button (Visible after the first button is clicked) */}
      {isButtonClicked && (
        <a className="button_disable_icici disabledbtn" >
          PAY
        </a>
      )} 
      </div>
      <div>
{/* record found */}
{showRecordFound && (<div id="record-found">
      <div id="select_pay_option">
        <p className="Make-a-payment">Make a Payment</p>
        <div id="paymentOptions">
      {/* UPI Payment Option */}
      <p
        className="PaymentOptions_Active optionId"
        data-key="UPI"
        onClick={handleUPIClick} // Trigger toggle on click
        style={{ cursor: 'pointer' }} // Add pointer cursor to indicate clickability
      >
        UPI (Unified Payments Interface)
      </p>

      {/* UPI Sub-options (conditionally rendered) */}
      {showUPIOptions && (
        <div className="view_UPI_option" style={{ transition: '0.4s all' }}>
          <p className="UPIOptions_Active optionId" data-key="G Pay" onClick={() => handleUPIOptionClick('G Pay')}>G Pay</p>
          <p className="UPIOptions_Active optionId" data-key="Phone pe" onClick={() => handleUPIOptionClick('Phone pe')}>Phone pe</p>
          <p className="UPIOptions_Active optionId" data-key="PayTm" onClick={() => handleUPIOptionClick('PayTm')}>PayTm</p>
        </div>
      )}

      {/* IMPS Payment Option */}
      <p className="PaymentOptions_Active optionId" data-key="IMPS" onClick={handleIMPSclick}>
        IMPS (Immediate Payment Service)
      </p>

      {/* NEFT/RTGS Payment Option */}
      <p className="PaymentOptions_Active optionId" data-key="NEFT/RTGS" onClick={handleNEFTclick}>
        NEFT (National Electronic Funds Transfer)/RTGS (Real-Time Gross Settlement)
      </p>
    </div>
      </div>
      <div style={{ paddingTop: '100px', paddingBottom: '85px' }}>
        <p className="FooterStyle">
          *Disclaimer: This service is for ICICI Bank Kisan Credit Card Customer only.
        </p>
      </div>
    </div>)}
{/* record found end */}
      </div>
    </div>
        {modalMessageShow && <KisancreditcardModalMessage srNo={srNo} setVisibleCloserModal={setModalMessage} messageType={messageType} />}
        <div className="landing-page-containetr">
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
