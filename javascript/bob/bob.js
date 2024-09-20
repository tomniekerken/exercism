//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

function hasLetters(message) {
  const lettersRegex = new RegExp(/[a-zA-Z]/);

  return lettersRegex.test(message);
}

function endsWithQuestionmark(message) {
  if (message.trim().endsWith("?")) {
    return true;
  }

  return false;
}

function hasOnlyCapitalLetters(message) {
  const messageCapitalized = message.trim().toUpperCase();

  if (message === messageCapitalized) {
    return true;
  }

  return false;
}

export const hey = (message) => {
  if (message == 0 || message.length === 0) {
    return "Fine. Be that way!";
  }

  if (!hasLetters(message)) {
    if (endsWithQuestionmark(message)) {
      return "Sure.";
    } else {
      return "Whatever.";
    }
  }

  if (endsWithQuestionmark(message)) {
    if (hasOnlyCapitalLetters(message)) {
      return "Calm down, I know what I'm doing!";
    }
    return "Sure.";
  }

  if (hasOnlyCapitalLetters(message)) {
    return "Whoa, chill out!";
  }

  return "Whatever.";
};
