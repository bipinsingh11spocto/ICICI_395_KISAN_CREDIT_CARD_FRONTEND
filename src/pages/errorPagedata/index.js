import React, { useEffect } from 'react';
import { pageLoading } from '../../util/global';

const ErrorPage = ({ errorMessage }) => {
    useEffect(() => {
        pageLoading(false)
    }, [])
    return (
        <div>
            <div className="txtCenter" style={{ height: "calc(100vh - 305px)" }}>
                <h6 className="txtColor font-24">{errorMessage || "error"}</h6>
            </div>
        </div>
    );
};

export default ErrorPage;