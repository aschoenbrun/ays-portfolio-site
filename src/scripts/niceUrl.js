const niceUrl = (url) => {
  url = url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split("/");
  console.log(url);
};

export default niceUrl;
