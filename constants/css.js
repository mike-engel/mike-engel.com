export const white = "#FFF";
export const black = "#0B2940";
export const grey = "#355873";
export const lightGrey = "#7B92A4";
export const blue = "#0079d2";
export const hoverBlue = "#0589ED";
export const green = "#00B375";

export const transitionTime = "200ms";

export const bpSmall = "528px";
export const bpMedium = "768px";
export const bpLarge = "1024px";
export const bpXLarge = "1200px";

export const h1Size = "2.77777rem";
export const h2Size = "2.05555rem";
export const h3Size = "1.55555rem";
export const h4Size = "1.16666rem";

export const helpers = `
.hidden { opacity: 0; }
`;

export const sansStack =
  "-apple-system,BlinkMacSystemFont,avenir next,avenir,helvetica neue,helvetica,ubuntu,roboto,noto,segoe ui,arial,sans-serif";

export const remType = pixels => `
  font-size: ${pixels}px;
  font-size: ${pixels / 18}rem;
`;

export const typography = `
html,
body {
  font: normal 400 16px/1.4 ${sansStack};
  color: ${black};
}

ul {
  list-style-type: none;
  list-style: none;
  margin: 0;
  padding: 0;
}

a {
  color: ${blue};
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: color ${transitionTime}, border-color ${transitionTime};
}

h1,
h2,
h3 {
  font-weight: 700;
  line-height: 1.2;
}

.h2,
.h3 {
  margin-top: 1.5em;
  padding-top: 0.5em;
}

.h2 + .h3 { margin-top: 0; }

.h3 + p,
.h4 + p { margin-top: 0; }

h1,
h2,
h3,
h4 { max-width: 25em; }

p {
  line-height: 1.6;
  max-width: 40em;
}

h1,
.h1 { ${remType(50)} }

h2,
.h2 { ${remType(37)} }

h3,
.h3 { ${remType(28)} }

h4,
.h4 { ${remType(21)} }

dt,
dd {
  margin-left: 0;
  padding-left: 0;
}

dd + dt { margin-top: 1em; }

dt { font-weight: 700; }

.text-small:not(a),
.text-tiny:not(a) { color: ${grey}; }

.text-small { ${remType(16)} }

.text-tiny { ${remType(12)}; }

pre {
  ${remType(14)};
  border-radius: 3px;
}

code {
  ${remType(18)};
  padding: 3px;
  border-radius: 3px;
  background-color: #f8f8f8;
}

@media (min-width: ${bpMedium}) {
  .h2,
  .h3 { margin-top: 3em; }
}

@media (min-width: ${bpLarge}) {
  html,
  body { font-size: 18px; }

  a:not(.hidden-link):hover,
  a:not(.hidden-link):active {
    color: ${hoverBlue};
    border-color: ${hoverBlue};
  }
}
`;
