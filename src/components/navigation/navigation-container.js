import React from 'react';
import axios from 'axios';
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const NavigationComponent = (props) => {
    const dynamicLink = (route, linkText) => {
        return (
            <div className="nav-link-wrapper" activeclassname="nav-link-active">
                <NavLink to={route}>{linkText}</NavLink>
            </div>
        );
    }

    const handleSignOut = () => {
        axios
            .delete("https://api.devcamp.space/logout", { withCredentials: true })
            .then(response => {
                if (response.status === 200) {
                    props.history.push("/");
                    props.handleSuccessfulLogout();
                }
                return response.data;
            })
            .catch(error => {
                console.log("Error signing out", error);
            });
    };

    return (
        <div className="nav-wrapper">
            <div className="left-side">
                <div className="nav-link-wrapper">
                    <NavLink exact to="/" activeClassName="nav-link-active">Home</NavLink>
                </div>

                <div className="nav-link-wrapper">
                    <NavLink to="/about-me" activeClassName="nav-link-active">About</NavLink>
                </div>

                <div className="nav-link-wrapper">
                    <NavLink to="/contact" activeClassName="nav-link-active">Contact</NavLink>
                </div>

                {props.loggedInStatus === "LOGGED_IN" ? (
                    dynamicLink("/portfolio-manager", "Portfolio Manager")
                ) : null}
            </div>

            <div className="right-side">
                <a className="social-icon" href="https://github.com/Danielle-Smith">
                    <FontAwesomeIcon icon={['fab', 'github']} />
                </a>
                <a className="social-icon" href="https://www.linkedin.com/in/danielle-smith-972039197">
                    <FontAwesomeIcon icon={['fab', 'linkedin']} />
                </a>

                <NavLink to="/about-me" className="name">DANIELLE SMITH</NavLink>

                {props.loggedInStatus === "LOGGED_IN" ? (<a onClick={handleSignOut}>
                    <FontAwesomeIcon icon="sign-out-alt" />
                </a>) : null}
            </div>
        </div>
    );
}

export default withRouter(NavigationComponent);
