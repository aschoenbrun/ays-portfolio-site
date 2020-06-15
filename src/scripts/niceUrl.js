const niceUrl = (url) => {
  url = url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split("/");
};

export default niceUrl;
