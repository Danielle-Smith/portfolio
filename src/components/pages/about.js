import React from "react";
import aboutImg from "../../../static/assets/images/about.jpg";

export default function () {
    return (
        <div className="about-page-wrapper">
            <div
                className="about-image"
                style={{
                    backgroundImage: `url(${aboutImg})`
                }}
            />
            <div className="about-bio">
                <p>Hi! I am a junior level developer with experience with HTML, CSS/SCSS, JavaScript, React, Python, Git, MySQL. I love new challenges, problem solving, and bringing ideas to life. I am a task-driven, team player, proficient in creating user interfaces, writing and testing code, troubleshooting, and implementing new features. <br></br>I love the outdoors! Mountain biking and trail running with my dog are some of my favorite activities. I enjoy playing sports, volleyball being my favorite. I like to create and build a wide variety of things with web development, construction, art, etc.</p>
            </div>
        </div >
    );
}