import React from "react";
import GoogleLogin from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import {
    selectSignedIn,
    setSignedIn,
    setUserData,
} from "../features/userSlice";

import "../styling/home.css";

const Homepage = () => {
    const isSignedIn = useSelector(selectSignedIn);

    const dispatch = useDispatch();
    const login = (response) => {
        console.log(response);
        dispatch(setSignedIn(true));
        dispatch(setUserData(response.profileObj));
    };

    return (<
        div className="home__page"
        style={
            { display: isSignedIn ? "none" : "" }} > {!isSignedIn ? (<
                div className="login__message" >
                <
                h2 > 👓 < /h2> <
                h1 > Feed The Brain < /h1> <
                p >
                            Click and Read: Just sign in and start reading some quality blogs. <
                /p> <
                                GoogleLogin clientId="662484064879-r90lk0cu40luonem1t4ugt9rbvpe6fa5.apps.googleusercontent.com"
                                render={
                                    (renderProps) => (<
                        button onClick={renderProps.onClick}
                                        disabled={renderProps.disabled}
                                        className="login__button" >
                                        Login with Google <
                        /button>
                                        )
                }
                                        onSuccess = {login}
                                        onFailure = {login}
                                        isSignedIn = {true}
                                        cookiePolicy = {"single_host_origin"}
                /> <
                /div>
                                        ) : (
                                        ""
                                        )
        } <
        /div>
                                        );
};

                                        export default Homepage;