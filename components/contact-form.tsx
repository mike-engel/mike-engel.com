import React, { useState, SyntheticEvent } from "react";
import styled from "styled-components";
import FloatingLabel from "floating-label-react";
import { black } from "../constants/css";
import { Stylable } from "../types/component.types";

const updateFormState = (cb: (value: any) => void) => (
	evt: SyntheticEvent<HTMLInputElement>
) => {
	cb(evt.currentTarget.value);
};

const ContactForm = ({ className }: Stylable) => {
	const [email, setEmail] = useState("");
	const [subject, setSubject] = useState("");
	const [body, setBody] = useState("");

	return (
		<form
			className={`${className} form contact-form`}
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
					id="email"
					name="email"
					placeholder="Your email"
					type="email"
					value={email}
					onChange={updateFormState(setEmail)}
				/>
				<FloatingLabel
					id="subject"
					name="_subject"
					placeholder="A quick summary"
					value={subject}
					onChange={updateFormState(setSubject)}
				/>
				<FloatingLabel
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
		</form>
	);
};

export default styled(ContactForm)`
	max-width: 40em;

	& > span,
	& > div {
		position: relative;
	}

	& > span + span,
	& > div + div {
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

	.floating-label {
		box-sizing: border-box;
		display: block;
		width: 100%;
		font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
			Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
		padding-top: 5px;
		position: relative;
	}

	.floating-label + .floating-label {
		margin-top: 0.5em;
	}

	.floating-label input,
	.floating-label textarea {
		border: none;
		border-bottom: 2px solid black;
		box-sizing: border-box;
		font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
			Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
		font-size: 1rem;
		padding: 12px 0 8px 0;
		width: 100%;
	}

	.floating-label textarea {
		min-height: 150px;
	}

	.floating-label input:focus + span,
	.floating-label textarea:focus + span,
	.floating-label.floating span {
		font-size: 0.625rem;
		padding: 0;
	}

	.floating-label input:focus:not(:focus-visible),
	.floating-label textarea:focus:not(:focus-visible) {
		outline: none;
	}

	.floating-label span {
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
