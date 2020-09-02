import { Drash } from "https://deno.land/x/drash@v1.2.2/mod.ts";

const profiles = [
  {
    "id": 1,
    "name": "John Snow",
    "entreprise": "NightWatch",
    "picture_url":
      "https://upload.wikimedia.org/wikipedia/en/3/30/Jon_Snow_Season_8.png",
  },
  {
    "id": 2,
    "name": "Nadia Negueritz",
    "entreprise": "Apple",
    "picture_url":
      "https://voi.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fprismamedia_people.2F2019.2F02.2F26.2F08d40786-f4ac-43fa-8f53-3a27061f701b.2Ejpeg/2048x1536/quality/80/nadia-fares.jpeg",
  },
  {
    "id": 3,
    "name": "Sophia Burru",
    "entreprise": "Google",
    "picture_url":
      "https://i.pinimg.com/originals/62/5a/a5/625aa59960d8f4b3f9becb3ae78db7e7.jpg",
  },
];

export default class Profiles extends Drash.Http.Resource {
  static paths = ["/profiles"];

  public GET() {
    this.response.body = profiles;
    return this.response;
  }
}
