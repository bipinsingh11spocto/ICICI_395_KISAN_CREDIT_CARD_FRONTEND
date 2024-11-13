import React, { useEffect } from 'react';
import { encrypt } from '../../util/crypto';
import { KaleryaFlag, sessionVariable } from '../../constants/variableConst';

const CallingPage = (props) => {
    const [setPageShow, param, setModalMessag] = props.setPageShow;
    const publicUrl = process.env.PUBLIC_URL + '/'

    useEffect(() => {
        const caller_id = sessionStorage.getItem(sessionVariable.CALLER_ID);
        if (caller_id) {
            // const payload = {
            //     "id": decrypt(caller_id),
            //     "method": KALERYA_METGHOD_DIAL_TO_STATUS,
            //     ...param
            // }
            setPageShow(1)
            setModalMessag(true)
            sessionStorage.setItem(sessionVariable.RMCALL_FLAG, encrypt(KaleryaFlag.RM_NOT_AVAILABLE))
            // SRCallStatus(payload).then((res) => {
            //     const resStatusData = res.data;
            //     if (resStatusData.status === KaleryaFlag.ANSWER && resStatusData.status2 === KaleryaFlag.ANSWER) {
            //         if (resStatusData.duration <= 20) {
            //             setPageShow(1);
            //             setModalMessag(true);
            //             sessionStorage.setItem(sessionVariable.RMCALL_FLAG, encrypt(KaleryaFlag.RM_AVAILABLE_LESS_THAN_TEN));
            //             return;
            //         }
            //         setPageShow(1);
            //         setModalMessag(true)
            //         sessionStorage.setItem(sessionVariable.RMCALL_FLAG, encrypt(KaleryaFlag.RMCALL_SUCCESS_FLAG));
            //     }
            //     else if (resStatusData.status === KaleryaFlag.ANSWER && resStatusData.status2 !== KaleryaFlag.ANSWER) {
            //         setPageShow(1)
            //         setModalMessag(true)
            //         sessionStorage.setItem(sessionVariable.RMCALL_FLAG, encrypt(KaleryaFlag.RM_NOT_AVAILABLE))
            //     }
            //     else if (resStatusData.status !== KaleryaFlag.ANSWER) {
            //         setPageShow(1)
            //         setModalMessag(true)
            //         sessionStorage.setItem(sessionVariable.RMCALL_FLAG, encrypt(KaleryaFlag.CALLER_NOT_AVAILABLE))
            //     }
            //     pageLoading(false);
            // }).catch((err) => {
            //     pageLoading(false);
            // })
        }
        // eslint-disable-next-line
    }, [])
    return (
        <div>
            <div className="calling-page-content" >
                <img className='calling-log' src={publicUrl + 'assets/img/call-logo.png'} alt="logo" /><br />
                <div className="card-title-content">
                    <label>We are connecting you with your</label><br />
                    <label>Relationship Manager...</label>
                </div>
            </div>
        </div>
    );
};

export default CallingPage;