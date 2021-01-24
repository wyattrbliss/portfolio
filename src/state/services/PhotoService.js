const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/dvtljlyii/image/list';
const API_KEY = '679191899461258';
const API_SECRET = 'T7CLCbv--MH7kwlbcUbBQxDnQXw';

export const getPhotos = () => {
  const Buffer = require("buffer").Buffer;
  let encodedAuth = new Buffer(API_KEY + ":" + API_SECRET).toString("base64");
    return (fetch(CLOUDINARY_URL, {
  method: 'GET',
  headers: {
    'Authorization': 'Basic ' + encodedAuth,
  },
}).then(res => res.json()));
}
