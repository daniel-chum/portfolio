import React, { Component } from "react";
import emailjs from "emailjs-com";

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.buttonRef = React.createRef();
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      submitted: 0,
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  formSubmit = () => {
    this.setState({ submitted: 1 });
    sleep(4000).then(() => {
      this.setState({ submitted: 0 });
    });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = this.state;
    const formInputs = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };

    emailjs
      .send(
        "gmail",
        "template_Z03RhyFk",
        formInputs,
        "user_FtTVHTSnzVbrnDDZwYbyi"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    this.setState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    this.formSubmit();
  };

  render() {
    const { name, email, subject, message, submitted } = this.state;
    return (
      <div className="contact-form">
        <form className="contact-fields" onSubmit={this.onSubmit}>
          <h2>How may I help you?</h2>
          <div className="form-group form-name-field">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="name"
              value={name}
              onChange={this.onChange}
              required
            />
          </div>
          <div className="form-group form-email-field">
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              name="email"
              value={email}
              onChange={this.onChange}
              required
            />
          </div>
          <div className="form-group form-subject-field">
            <label>Subject</label>
            <input
              className="form-control"
              type="text"
              name="subject"
              value={subject}
              onChange={this.onChange}
              required
            />
          </div>
          <div className="form-group form-message-field">
            <label>Message</label>
            <textarea
              className="form-control"
              name="message"
              value={message}
              onChange={this.onChange}
              rows="5"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn">
            Send
          </button>
          <span
            className={
              this.state.submitted
                ? "submitHandler submitFalse "
                : "submitHandler"
            }
          >
            <p>Form succesfully submitted!</p>
          </span>
        </form>
      </div>
    );
  }
}
