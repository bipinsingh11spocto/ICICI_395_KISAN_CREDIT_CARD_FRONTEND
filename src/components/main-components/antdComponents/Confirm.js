
import React from 'react';


const ConfirmButton = ({ setVisibleCloserModal }) => {
    const closeHandlar = () => {
        setVisibleCloserModal(() => false)
    }
    return (
        <div className="modal_theme modal-content col-xl-6 offset-xl-4" style={{ zIndex: "2" }}>
            <div className='model-body'>
                <div className="modalHeader" justify="center">
                    <label className="modalHeaderHeading"><b>Please confirm</b></label>
                    <label className="modalCrox" onClick={closeHandlar}>X</label>
                </div>
                <div className='model-contents'>
                    <label><b>Do you Want to call Our executive? </b></label>
                </div>
                <br />
                <div className='confirm-button-group'>
                    <div >
                        <button>Cancel</button>
                        <button>Ok</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ConfirmButton;