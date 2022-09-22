import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "name") {
      setName(inputValue);
    } else if (inputType === "email") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("Email is invalid");

      return;
    } else if (!name) {
      setErrorMessage("Name is invalid");
      return;
    } else if (!message) {
      setErrorMessage("Message is invalid");
      return;
    }

    setName("");
    setMessage("");
    setEmail("");
  };

  return (
    <div className="content">
      <h2>Contact</h2>
      <form className="form">
        <div>
          <label for="name" class="form-label">
            Name:
          </label>
          <input
            value={name}
            name="name"
            className="form-control"
            onChange={handleInputChange}
            type="text"
            required
            placeholder="Your name"
          />
        </div>

        <div>
          <label for="email" class="form-label">
            Email:
          </label>
          <input
            value={email}
            name="email"
            className="form-control"
            onChange={handleInputChange}
            type="email"
            placeholder="Email"
          />
        </div>
        <div>
          <label for="message" class="form-label">
            Message:
          </label>
          <textarea
            value={message}
            name="message"
            className="form-control"
            onChange={handleInputChange}
            type="text"
            placeholder="Write a message ...."
          />
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleFormSubmit}
          >
            Submit
          </button>
        </div>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
