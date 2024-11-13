import React from 'react';
import { imagePath } from '../../../constants/variableConst';

const BannerImage = () => {
    return (
        <>
            <div>
                <img className="bannerImage" src={imagePath.KISAN_CREDIT_CARD_BANNER} alt="banner" />
            </div>
        </>
    );
};

export default BannerImage;