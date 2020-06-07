import React, { Component } from "react";
import ReactModal from "react-modal";

import BlogForm from "../blog/blog-form";

ReactModal.setAppElement(".app-wrapper");

export default class BlogModal extends Component {
    constructor(props) {
        super(props); 

        this.customStyles = {
            content: {
                top: "8%",
                left: "30%",
                right: "30%",
                bottom: "auto",
                width: "800px",
                height: "80%"
            },

            overlay: {
                backgroundColor: "rgba(1, 1, 1, 0.75)"
            }
        };
    }

    handleSuccessfulFormSubmission = (blog) => {
        this.props.handleSuccessfulNewBlogSubmission(blog);
    }

    render() {
        return(
            <ReactModal 
                style={this.customStyles}
                onRequestClose={() => {
                    this.props.handleModalClose();
                }}
                isOpen={this.props.modalIsOpen}>
                <BlogForm handleSuccessfulFormSubmission={this.handleSuccessfulFormSubmission}/>
            </ReactModal>
        );
    }
}

