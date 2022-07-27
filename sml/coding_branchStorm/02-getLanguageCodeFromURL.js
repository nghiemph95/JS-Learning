const DEFAULT_LANGUAGE = "en";
const SUPPORTED_LANGUAGE_LIST = ["en", "vi", "cn"];

export function getLanguageCodeFromURL(url) {
  if (url === "") return DEFAULT_LANGUAGE;

  url = url.slice(-3).replace("/", "").trim();
  let check = "";

  SUPPORTED_LANGUAGE_LIST.forEach((element) => {
    if (element === url) check = element;
  });

  return check === url ? check : DEFAULT_LANGUAGE;
}

console.log(getLanguageCodeFromURL("https://ezfrontend.com/vi"));
