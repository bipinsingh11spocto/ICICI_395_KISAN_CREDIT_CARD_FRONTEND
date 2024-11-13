import React from 'react';
import Content from '../../constants/Content.json'

const FooterComponents = ({ language }) => {
    return (
        <div>
            {language && <div className="footer-body fsz-12" >
                <p>*{Content[language]['content8']}</p>
            </div>}
        </div>
    );
}


export default FooterComponents