import React, { useEffect, useState } from 'react';
import './LoginPage.css';

import googleIcon from '../../static/icons/google.svg';
import facebookIcon from '../../static/icons/facebook.svg';
import appleIcon from '../../static/icons/apple.svg';

import OAuthProviderComponent from './oauthProvidersComponent/OAuthProvider';
import { OAuthProvider } from '../../classes/oauthProvider';

const LoginPage = () => {

    const [oauthProviders, setOAuthProviders] = useState<OAuthProvider[]>([]);

    useEffect(() => {
        //TODO: add the apis below
        setOAuthProviders([
            new OAuthProvider("Facebook", facebookIcon, "", "#1877f2"),
            new OAuthProvider("Google", googleIcon, "/googleGenerateUserOAuthCode", "#fff"),
            new OAuthProvider("Apple", appleIcon, "", "#000"),
        ]);
    }, []);

    return (
        <div className='loginPageContainer'>
            <h2>Welcome to 2 click login</h2>
            <div className="loginOAuthProvidersContainer">
                {oauthProviders.map((oauthProvider: OAuthProvider) => {
                    return <OAuthProviderComponent key={oauthProvider.name} oauthProvider={oauthProvider} />
                })}
            </div>
        </div>
    );
}

export default LoginPage;
