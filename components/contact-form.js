import { black, blue, lightGrey, transitionTime } from "../constants/css";
import React from "react";

const ContactForm = () =>
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
      <div>
        <label htmlFor="email">Your email</label>
        <input id="email" type="email" name="email" placeholder="Your email" />
      </div>
      <div>
        <label htmlFor="subject">A quick summary</label>
        <input
          id="subject"
          type="text"
          name="_subject"
          placeholder="A quick summary"
        />
      </div>
      <div>
        <label htmlFor="body">Let loose</label>
        <textarea id="body" name="body" placeholder="Let loose" />
      </div>
      <button className="btn" type="submit">send</button>
    </fieldset>
    <style jsx>
      {`
      form > span,
      form > div { position: relative; }

      form > span + span,
      form > div + div { margin-top: 1em; }

      fieldset {
        margin: 0;
        padding: 0;
        border: none;
      }

      fieldset > span,
      fieldset > div { position: relative; }

      fieldset > span + span,
      fieldset > div + div { margin-top: 1em; }

      label {
        font-size: 0.66666rem;
        position: absolute;
        top: 10px;
        left: 10px;
        font-weight: 700;
        color: ${blue};
        letter-spacing: 0.03em;
        line-height: 1;
        opacity: 0;
        z-index: 0;
        transition: opacity ${transitionTime}, top ${transitionTime};
      }

      label.floating {
        top: 0;
        opacity: 1;
      }

      input[type="text"],
      input[type="email"],
      textarea {
        font-size: 1rem;
        font-family: @sansStack;
        padding: 15px 0.5em 0.5em 0.5em;
        width: 100%;
        border-width: 0 0 2px 0;
        border-style: solid;
        border-color: ${black};
        border-radius: 0;
        z-index: 100;
        transition: border-color ${transitionTime};
      }

      input[type="text"]:focus,
      input[type="email"]:focus,
      textarea:focus {
        outline: none;
        border-color: ${blue};
      }

      textarea { min-height: 150px; }

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

      ::-webkit-input-placeholder { color: ${lightGrey}; }
      ::-moz-input-placeholder { color: ${lightGrey}; }
      ::-ms-input-placeholder { color: ${lightGrey}; }
    `}
    </style>
  </form>;

ContactForm.displayName = "ContactForm";

export default ContactForm;
