import React, { Component } from 'react';
import axios from 'axios';
import DropzoneComponent from "react-dropzone-component";

import "../../../node_modules/react-dropzone-component/styles/filepicker.css";
import "../../../node_modules/dropzone/dist/min/dropzone.min.css";

export default class PortfolioForm extends Component {
    constructor(props) {
        super();

        this.state = {
            name: "",
            description: "",
            url: "",
            thumb_image: "",
            banner_image: "",
            editMode: false,
            apiUrl: "https://daniellesmith.devcamp.space/portfolio/portfolio_items",
            apiAction: 'post'

        };

        this.thumbRef = React.createRef();
        this.bannerRef = React.createRef();
    }

    deleteImage = (imageType) => {
        axios.delete(`https://api.devcamp.space/portfolio/delete-portfolio-image/${this.state.id}?image_type=${imageType}`, { withCredentials: true }
        ).then(response => {
            this.setState({
                [`${imageType}_url`]: ""
            })
        })
            .catch(error => {
                console.log("deleteImage error", error);
            });
    }

    componentDidUpdate() {
        if (Object.keys(this.props.portfolioToEdit).length > 0) {
            const {
                id,
                name,
                description,
                url,
                thumb_image_url,
                banner_image_url
            } = this.props.portfolioToEdit;

            this.props.clearPortfolioToEdit();

            this.setState({
                id: id,
                name: name || "",
                description: description || "",
                url: url || "",
                editMode: true,
                apiUrl: `https://daniellesmith.devcamp.space/portfolio/portfolio_items/${id}`,
                apiAction: 'patch',
                thumb_image_url: thumb_image_url || "",
                banner_image_url: banner_image_url || ""
            });
        }
    }

    buildForm() {
        let formData = new FormData();

        formData.append("portfolio_item[name]", this.state.name);
        formData.append("portfolio_item[description]", this.state.description);
        formData.append("portfolio_item[url]", this.state.url);

        if (this.state.thumb_image) {
            formData.append("portfolio_item[thumb_image]", this.state.thumb_image);
        }

        if (this.state.banner_image) {
            formData.append("portfolio_item[banner_image]", this.state.banner_image);
        }

        return formData;
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        axios({
            method: this.state.apiAction,
            url: this.state.apiUrl,
            data: this.buildForm(),
            withCredentials: true
        })
            .then(response => {
                if (this.state.editMode) {
                    this.props.handleEditFormSubmission();
                } else {
                    this.props.handleNewFormSubmission(response.data.portfolio_item);
                }

                this.setState({
                    name: "",
                    description: "",
                    url: "",
                    thumb_image: "",
                    banner_image: "",
                    editMode: false,
                    apiUrl: "https://daniellesmith.devcamp.space/portfolio/portfolio_items",
                    apiAction: 'post'
                });


                [this.thumbRef, this.bannerRef].forEach(ref => {
                    ref.current.dropzone.removeAllFiles();
                });
            }).catch(error => {
                console.log("portfolio form handleSubmit error", error);
            })

        this.buildForm();
        event.preventDefault();
    }

    componentConfig = () => {
        return {
            iconFiletypes: [".jpg", ".png"],
            showFiletypeIcon: true,
            postUrl: "https://httpbin.org/post"
        };
    }

    djsConfig = () => {
        return {
            addRemoveLinks: true,
            maxFiles: 1
        };
    }

    handleThumbDrop = () => {
        return {
            addedfile: file => this.setState({ thumb_image: file })
        };
    }

    handleBannerDrop = () => {
        return {
            addedfile: file => this.setState({ banner_image: file })
        };
    }

    render() {
        return (

            <form onSubmit={this.handleSubmit} className="portfolio-form-wrapper">
                <div className="two-columns">
                    <input
                        type="text"
                        name="name"
                        placeholder="Portfolio Item Name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />


                    <input
                        type="text"
                        name="url"
                        placeholder="URL"
                        value={this.state.url}
                        onChange={this.handleChange}
                    />
                </div>

                <div className="one-column">
                    <textarea
                        type="text"
                        name="description"
                        placeholder="Description"
                        value={this.state.description}
                        onChange={this.handleChange}
                    />
                </div>

                <div className="image-uploaders">

                    {this.state.thumb_image_url && this.state.editMode ? (
                        <div className="portfolio-manager-image-wrapper">
                            <img src={this.state.thumb_image_url} />

                            <div className="image-removal-link">
                                <a onClick={() => this.deleteImage("thumb_image")}>Remove file</a>
                            </div>
                        </div>
                    ) : (
                            <DropzoneComponent
                                ref={this.thumbRef}
                                config={this.componentConfig()}
                                djsConfig={this.djsConfig()}
                                eventHandlers={this.handleThumbDrop()}
                            >
                                <div className="dz-message">Upload Thumbnail Image</div>
                            </DropzoneComponent>
                        )}

                    {this.state.banner_image_url && this.state.editMode ? (
                        <div className="portfolio-manager-image-wrapper">
                            <img src={this.state.banner_image_url} />

                            <div className="image-removal-link">
                                <a onClick={() => this.deleteImage("banner_image")}>Remove file</a>
                            </div>
                        </div>
                    ) : (
                            <DropzoneComponent
                                ref={this.bannerRef}
                                config={this.componentConfig()}
                                djsConfig={this.djsConfig()}
                                eventHandlers={this.handleBannerDrop()}
                            >
                                <div className="dz-message">Upload Banner Image</div>
                            </DropzoneComponent>
                        )}
                </div>

                <div>
                    <button className="btn" type="submit">Save</button>
                </div>
            </form>

        );
    }
}