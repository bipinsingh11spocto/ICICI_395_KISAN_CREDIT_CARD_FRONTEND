import React from 'react';
import Content from '../../../constants/Content.json'
import { logStepMessage } from '../../../constants/variableConst';
import { addEvents } from '../../../service/kisancreditcardServiceApi';

const LanguageSelModel = ({ closeHandlar, setLanguage, param, maskLoanAccountNo }) => {
    const languageSelectHandlar = (lan) => {
        setLanguage(lan)
        closeHandlar(false)
        const logData = {
            ...param,
            "step": logStepMessage.TWO.STEPID,
            "stepText": logStepMessage.TWO.STEPTEXT,
            "languages": lan,
            "accountNo": maskLoanAccountNo
        }
        addEvents(logData);
    }
    return (
        <div>
            <div className="modal_theme modal-content col-xl-6 offset-xl-4" style={{ zIndex: "2" }}>
                <div className='model-body'>
                    <div className="modalHeader" justify="center">
                        <label className="modalHeaderHeading"><b>Please Select Language</b></label>
                        <label className="modalCrox"></label>
                    </div>
                    <div className='model-container'>
                        <div className='language-row'>
                            {
                                Object.keys(Content).map((data, index) => (
                                    <div className='language-div' key={data + index} onClick={() => languageSelectHandlar(data)}>
                                        <label>{data}</label>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LanguageSelModel;