import React, { useState } from "react";
import css from "styled-jsx/css";
import { black } from "../constants/css";
import FloatingLabel from "floating-label-react";

const { className, styles } = css.resolve`
.floating-label {
  box-sizing: border-box;
  display: block;
  width: 100%;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
    Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  padding-top: 5px;
  position: relative;
}

.floating-label + .floating-label {
  margin-top: .5em;
}

.floating-label :global(input),
.floating-label :global(textarea) {
  border: none;
  border-bottom: 2px solid black;
  box-sizing: border-box;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
    Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  font-size: 1rem;
  padding: 12px 0 8px 0;
  width: 100%;
}

.floating-label :global(textarea) {
  min-height: 150px;
}

.floating-label :global(input:focus + span),
.floating-label :global(textarea:focus + span),
.floating-label.floating :global(span) {
  font-size: 0.625rem;
  padding: 0;
}

.floating-label :global(input:focus:not(:focus-visible)),
.floating-label :global(textarea:focus:not(:focus-visible)) {
  outline: none;
}

.floating-label :global(span) {
  box-sizing: border-box;
  font-size: 1rem;
  left: 0;
  padding: 14px 0 13px 0;
  pointer-events: none;
  position: absolute;
  top: 0;
  transition: font-size 200ms, padding 200ms;
  z-index: 1;
}
`;

const updateFormState = cb => evt => {
  cb(evt.currentTarget.value);
};

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  return (
    <form
      className="form contact-form"
      action="//formspree.io/mike@mike-engel.com"
      method="POST"
      role="form"
    >
      <fieldset>
        <input
          type="hidden"
          name="_next"
          aria-hidden="true"
          value="//mike-engel.com/?thanks=true"
        />
        <input type="hidden" name="_gotcha" aria-hidden="true" />
      </fieldset>
      <fieldset>
        <FloatingLabel
          className={className}
          id="email"
          name="email"
          placeholder="Your email"
          type="email"
          value={email}
          onChange={updateFormState(setEmail)}
        />
        <FloatingLabel
          className={className}
          id="subject"
          name="_subject"
          placeholder="A quick summary"
          value={subject}
          onChange={updateFormState(setSubject)}
        />
        <FloatingLabel
          className={className}
          id="body"
          component="textarea"
          name="body"
          placeholder="Let loose"
          value={body}
          onChange={updateFormState(setBody)}
        />
        <button className="btn" type="submit">
          send
        </button>
      </fieldset>
      <style jsx>
        {`
          form {
            max-width: 40em;
          }

          form > span,
          form > div {
            position: relative;
          }

          form > span + span,
          form > div + div {
            margin-top: 1em;
          }

          fieldset {
            margin: 0;
            padding: 0;
            border: none;
          }

          fieldset > span,
          fieldset > div {
            position: relative;
          }

          fieldset > span + span,
          fieldset > div + div {
            margin-top: 1em;
          }

          button {
            background: transparent;
            border: 2px solid ${black};
            border-radius: 1px;
            font: inherit;
            font-size: 1rem;
            font-weight: 700;
            letter-spacing: 0.03em;
            line-height: 1;
            margin-top: 1em;
            padding: 10px 15px;
          }
        `}
      </style>
      {styles}
    </form>
  );
};

ContactForm.displayName = "ContactForm";

export default ContactForm;
