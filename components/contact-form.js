import { black } from "../constants/css";
import FloatingLabel, {
  floatingStyles,
  focusStyles,
  inputStyles,
  labelStyles
} from "floating-label-react";
import React from "react";

const inputStyle = {
  floating: Object.assign({}, floatingStyles, {
    color: black
  }),
  focus: Object.assign({}, focusStyles, {
    borderColor: black
  }),
  input: Object.assign({}, inputStyles, {
    borderBottomWidth: 2,
    borderColor: black,
    width: "100%"
  }),
  label: Object.assign({}, labelStyles, {
    marginTop: "0.5em",
    width: "100%"
  })
};

const textareaStyle = Object.assign({}, inputStyle, {
  input: Object.assign({}, inputStyle.input, {
    minHeight: "150px"
  })
});

const ContactForm = () => (
  <form
    className="form contact-form"
    action="//formspree.io/mike@mike-engel.com"
    method="POST"
    role="form"
  >
    <fieldset>
      <input type="hidden" name="_next" aria-hidden="true" value="//mike-engel.com/?thanks=true" />
      <input type="hidden" name="_gotcha" aria-hidden="true" />
    </fieldset>
    <fieldset>
      <FloatingLabel
        id="email"
        name="email"
        placeholder="Your email"
        styles={inputStyle}
        type="email"
      />
      <FloatingLabel
        id="subject"
        name="_subject"
        placeholder="A quick summary"
        styles={inputStyle}
      />
      <FloatingLabel
        id="body"
        element="textarea"
        name="body"
        placeholder="Let loose"
        styles={textareaStyle}
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
  </form>
);

ContactForm.displayName = "ContactForm";

export default ContactForm;
