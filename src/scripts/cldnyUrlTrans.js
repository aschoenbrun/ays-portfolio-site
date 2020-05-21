const cldnyUrlTrans = ({ url, trans }) => {
  if (url) {
    const CLOUDINARY_REGEX = /^.+\.cloudinary\.com\/(?:[^/]+\/)(?:(image|video)\/)?(?:(upload|fetch)\/)?(?:(?:[^_/]+_[^,/]+,?)*\/)?(?:v(\d+|\w{1,2})\/)?([^.^\s]+)(?:\.(.+))?$/;
    const cloudinaryArr = url.match(CLOUDINARY_REGEX);
    console.log(cloudinaryArr);
    if (cloudinaryArr) {
      let imgUrl = `https://res.cloudinary.com/aschoen/${cloudinaryArr[1]}/${cloudinaryArr[2]}/${trans}/${cloudinaryArr[4]}.${cloudinaryArr[5]}`;
      return imgUrl;
    }
    return "sample";
  }
  return "sample";
};

export default cldnyUrlTrans;
