import React from 'react';
import { KaleryaFlag } from '../../../constants/variableConst';
import { CallerNotAvailable, RMAvailableWithLessThankten, RMCallSuccess, RMNotAvailable, RMTimeOut } from './Contents';

const KisancreditcardModalMessage = ({ setVisibleCloserModal, messageType, title = "Important Notice", srNo }) => {
    const closeHandlar = () => {
        setVisibleCloserModal(() => false)
    }
    return (
        <div className="modal_theme modal-content col-xl-6 offset-xl-4" style={{ zIndex: "2" }}>
            <div className='model-body'>
                <div className="modalHeader" justify="center">
                    <label className="modalHeaderHeading"><b>{title}</b></label>
                    <label className="modalCrox" onClick={closeHandlar}>X</label>
                </div>
                <div className='model-contents'>
                    {
                        messageType === KaleryaFlag.RM_NOT_AVAILABLE && <RMNotAvailable srNo={srNo} />
                    }
                    {
                        messageType === KaleryaFlag.CALLER_NOT_AVAILABLE && <CallerNotAvailable srNo={srNo} />
                    }
                    {
                        messageType === KaleryaFlag.RM_AVAILABLE_LESS_THAN_TEN && <RMAvailableWithLessThankten srNo={srNo} />
                    }
                    {
                        messageType === KaleryaFlag.RMTIME_OUT && <RMTimeOut srNo={srNo} />
                    }
                    {
                        messageType === KaleryaFlag.RMCALL_SUCCESS_FLAG && <RMCallSuccess srNo={srNo} />
                    }
                </div>
            </div>
        </div>
    );
};

export default KisancreditcardModalMessage;