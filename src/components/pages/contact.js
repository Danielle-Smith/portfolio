import React from "react";
import ContactForm from "../contact-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contactImg from "../../../static/assets/images/contact.jpg";

export default function () {
    return (
        <div className="contact-page-wrapper">
            <div
                className="contact-image"
                style={{
                    backgroundImage: `url(${contactImg})`
                }}
            />
            <div className="right-column">
                <div className="contact-bullet-points">
                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="phone" />
                        </div>

                        <div className="text">801.898.3573</div>
                    </div>

                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="envelope" />
                        </div>

                        <div className="text">danielle@natesdesign.com</div>
                    </div>

                    <div className="bullet-point-group">
                        <div className="icon">
                            <FontAwesomeIcon icon="map-marker-alt" />
                        </div>

                        <div className="text">Lehi, UT</div>
                    </div>
                </div>
                <div>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}