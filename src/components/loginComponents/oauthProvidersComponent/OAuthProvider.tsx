import React from 'react';
import { useLocation } from 'react-router-dom';
import { OAuthProvider } from '../../../classes/oauthProvider';
import { credentialAxiosInstance } from '../../../utils/axiosInstance';
import { ErrorHandler } from '../../../utils/ErrorHandler';
import { targetUrlLocalStorageKey } from '../../../utils/Keys';
import { Page } from '../../../utils/Page';
import { Url } from '../../../utils/Url';
import "./OAuthProvider.css"

interface QueryParams {
    targetUrl?: string;
}

interface Props {
    oauthProvider: OAuthProvider;
}

const OAuthProviderComponent = (props: Props) => {

    const location = useLocation();

    const handleLogin = async () => {
        const api = props.oauthProvider.api.trim();
        if (api.length <= 0) {
            alert("Not implemented yet");
            return;
        }
        try {
            const result = await credentialAxiosInstance.get(api);
            localStorage.setItem(targetUrlLocalStorageKey, getTargetUrlFromQueryParams());
            const googleOAuthUrl = result.data;
            Page.redirect(googleOAuthUrl);
        } catch (error) {
            ErrorHandler.handle(error);
        }
    }

    const getTargetUrlFromQueryParams = (): string => {
        const queryParams: QueryParams = Url.searchQueryToObject(location.search);
        if (queryParams.targetUrl === undefined) return '';
        return queryParams.targetUrl;
    }

    const isWhiteBackground = (): boolean => {
        return (props.oauthProvider.backgroundColorHex === "#fff" || props.oauthProvider.backgroundColorHex === "#ffffff")
    }

    const getBorder = (): string => {
        if (!isWhiteBackground()) return "None";
        return "1px solid #252525";
    }

    const getTextColor = (): string => {
        if (isWhiteBackground()) return "black"
        return "white";
    }

    return (
        <button className="oauthProviderContainer" onClick={handleLogin}
            style={{
                backgroundColor: props.oauthProvider.backgroundColorHex,
                border: getBorder(),
                color: getTextColor(),
            }}>
            <img src={props.oauthProvider.imageUrl} alt={props.oauthProvider.name} />
            <h4>Login with {props.oauthProvider.name}</h4>
        </button>
    );
}

export default OAuthProviderComponent;
