import { React, useRef, useState } from "react";

const ContactSection = () => {
  const fnameRef = useRef();
  const lnameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const [isDisabled, setIsDisabled] = useState(true);

  const checkInfo = () => {
    const fname = fnameRef.current.value;
    const lname = lnameRef.current.value;
    const phone = phoneRef.current.value;
    const email = emailRef.current.value;
    if (fname !== "" && lname !== "" && phone !== "" && email !== "") {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  return (
    <div className="contactContainer">
      <form action="" className="contact-form">
        <div className="title">
          <h1>Contact Me</h1>
        </div>
        <div className="contact-name">
          <fieldset>
            <legend>First Name</legend>
            <input
              className="desktop-contact-input"
              type="text"
              ref={fnameRef}
            />
            <input
              className="mobile-contact-input"
              type="text"
              ref={fnameRef}
              placeholder="First Name"
            />
          </fieldset>
          <fieldset>
            <legend>Last Name</legend>
            <input
              className="desktop-contact-input"
              type="text"
              ref={lnameRef}
            />
            <input
              className="mobile-contact-input"
              type="text"
              ref={lnameRef}
              placeholder="Last Name"
            />
          </fieldset>
        </div>
        <input
          type="tel"
          maxLength={10}
          ref={phoneRef}
          placeholder="Phone Number"
          required
        />
        <input
          type="email"
          ref={emailRef}
          placeholder="Email"
          required
          onChange={checkInfo}
        />
        <button type="submit" disabled={isDisabled}>
          GET IN TOUCH
        </button>
      </form>
    </div>
  );
};

export default ContactSection;
