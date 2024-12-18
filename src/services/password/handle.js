async function permittedCharacters() {
  let permitted = [];
  if (process.env.UPPERCASE_LETTERS === "TRUE") {
    permitted.push("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  }
  if (process.env.LOWERCASE_LETTERS === "TRUE") {
    permitted.push("abcdefghijklmnopqrstuvwxyz");
  }
  if (process.env.NUMBERS === "TRUE") {
    permitted.push("0123456789");
  }
  if (process.env.SPECIAL_CHARACTERS === "TRUE") {
    permitted.push("!@#$%¨&*");
  }
  return permitted.join(''); // Join all elements into a single string
}

export async function handle() {
  let password = "";

  const characters = await permittedCharacters();
  const passwordLength = process.env.PASSWORD_LENGTH

  for (let i = 0; i < passwordLength; i++) {
    const index = Math.floor(Math.random() * characters.length);
    password += characters.charAt(index);
  }

  return password;
}
