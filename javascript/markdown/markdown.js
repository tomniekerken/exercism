function wrap(text, tag) {
  return `<${tag}>${text}</${tag}>`;
}

function isTag(text, tag) {
  return text.startsWith(`<${tag}>`);
}

function parser(markdown, delimiter, tag) {
  const pattern = new RegExp(`${delimiter}(.+)${delimiter}`);
  const replacement = `<${tag}>$1</${tag}>`;
  return markdown.replace(pattern, replacement);
}

function parse__(markdown) {
  return parser(markdown, "__", "strong");
}

function parse_(markdown) {
  return parser(markdown, "_", "em");
}

function parseText(markdown, isList) {
  const parsedText = parse_(parse__(markdown));

  return isList ? parsedText : wrap(parsedText, "p");
}

function parseHeader(markdown, isList) {
  let headingCount = 0;

  for (let i = 0; i < markdown.length; i++) {
    if (markdown[i] === "#") {
      headingCount += 1;
    }
  }

  if (headingCount === 0 || headingCount > 6) {
    return null;
  }

  const headerTag = `h${headingCount}`;
  const headerHtml = wrap(markdown.substring(headingCount + 1), headerTag);

  return isList ? `</ul>${headerHtml}` : headerHtml;
}

function parseLineItem(markdown, isList) {
  const innerHtml = wrap(parseText(markdown.substring(2), true), "li");

  return isList ? innerHtml : `<ul>${innerHtml}`;
}

function parseParagraph(markdown, isList) {
  return isList
    ? `</ul>${parseText(markdown, false)}`
    : parseText(markdown, false);
}

function parseLine(markdown, isList) {
  let [html, isNewList] = [null, false];

  const isHeading = markdown.startsWith("#");
  const isLineItem = markdown.startsWith("*");

  if (isHeading) {
    html = parseHeader(markdown, isList);
  } else if (isLineItem) {
    html = parseLineItem(markdown, isList);
    isNewList = true;
  } else {
    html = parseParagraph(markdown, isList);
  }

  if (html === null) {
    throw new Error("Invalid markdown");
  }

  return [html, isNewList];
}

/**
 * Parses a given string with Markdown syntax and returns the associated HTML
 *
 * @example
 * parse("Some Markdown to HTML") // returns "<p>Some Markdown to HTML</p>"
 *
 * @param {string} markdown Markdown syntax as string
 * @returns {string} returns the associated HTML as string
 */
export function parse(markdown) {
  // Split markdown into seperate lines
  const lines = markdown.split("\n");

  let html = "";

  let isList = false;

  lines.map((line) => {
    let [lineInHtml, isNewList] = parseLine(line, isList);
    html += lineInHtml;
    isList = isNewList;
  });

  return html;
}
