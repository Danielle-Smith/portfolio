import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import loginImg from "../../../static/assets/images/auth/login.jpg";

export default function () {
    return (
        <div className="contact-page-wrapper">
            <div
                className="contact-image"
                style={{
                    backgroundImage: `url(${loginImg})`
                }}
            />
            <div className="right-column">
                <div className="contact-bullet-points">
                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="phone" />
                        </div>

                        <div className="text">555-555-5555</div>
                    </div>

                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="envelope" />
                        </div>

                        <div className="text">danielle@example.com</div>
                    </div>

                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="map-marker-alt" />
                        </div>

                        <div className="text">Lehi, UT</div>
                    </div>
                </div>
            </div>
        </div>
    );
}