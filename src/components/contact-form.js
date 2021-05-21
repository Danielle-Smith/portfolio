import React, { Component } from "react";
// import ReactDOM from "react-dom";
import axios from "axios";


class ContactForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: {
                email: "",
                message: "",
            },
            isSubmitted: false,
            isError: false
        };
    }

    submitForm = async e => {
        e.preventDefault();
        console.log(this.state);
        this.setState({ isSubmitted: true });
        try {
            const { data } = await axios.post("https://formspree.io/f/mjvjylrl", { ...this.state.values });

        } catch (err) {
            console.log(err);
        }
        this.setState({
            isError: false,
            values: { email: "", message: "" }
        });
    };

    handleInputChange = e =>
        this.setState({
            values: { ...this.state.values, [e.target.name]: e.target.value }
        });

    render() {
        return (
            <div>
                <form onSubmit={this.submitForm}>
                    <div className="input-group">
                        <input
                            type="email"
                            name="email"
                            Placeholder="Email Address"
                            id="email"
                            value={this.state.values.email}
                            onChange={this.handleInputChange}
                            title="Email"
                            required
                        />
                    </div>
                    <div className="input-group">
                        <textarea
                            name="message"
                            id="message"
                            placeholder="Message..."
                            value={this.state.values.message}
                            onChange={this.handleInputChange}
                            title="password"
                            required
                        >{this.state.values.message}</textarea>
                    </div>
                    <div className="btn-container">
                        <button className="btn" id="contact-form-btn" type="submit">Send</button>
                    </div>
                </form>
                <div className={`message ${this.state.isError && "error"}`}>
                    {this.state.isSubmitted ? "Thank you! Message Sent." : ""}
                </div>
            </div>
        );
    }
}

export default ContactForm;