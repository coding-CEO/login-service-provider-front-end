import React, { useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { credentialAxiosInstance } from '../../utils/axiosInstance';
import { ErrorHandler } from '../../utils/ErrorHandler';
import { Page } from '../../utils/Page';

interface Params {
    oauthProviderName: string;
}

const AuthenticationCallbackPage = () => {
    const params: Params = JSON.parse(JSON.stringify(useParams()));
    const location = useLocation();

    useEffect(() => {
        const search = location.search.trim();
        if (search.length <= 0) {
            // no search parameters in url
            return Page.redirect('/');
        }
        getUserInfoJWT();
    }, []);

    const getUserInfoJWT = () => {
        switch (params.oauthProviderName) {
            case 'google':
                return getUserInfoJWTGoogle();
            case 'facebook':
                return getUserInfoJWTFacebook();
            case 'apple':
                return getUserInfoJWTApple();
            default:
                return Page.redirect(`/404`);
        }
    }

    const getUserInfoJWTGoogle = async () => {
        try {
            const result = await credentialAxiosInstance.get(`/auth/google/verifyUserOAuthCode${location.search}`);
            //TODO: push the token to target_url in params
            console.log(result.data);
        } catch (error) {
            ErrorHandler.handle(error);
        }
    }
    const getUserInfoJWTFacebook = () => {
        //TODO: implement this
        alert('not implemented yet');
    }
    const getUserInfoJWTApple = () => {
        //TODO: implement this
        alert('not implemented yet');
    }

    return (
        <div className="authenticationCallbackPageContainer">
        </div>
    );
}

export default AuthenticationCallbackPage;
