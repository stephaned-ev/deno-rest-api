(function () {
  if (!window.fetch) {
    // Faire quelque chose avec XMLHttpRequest?
    console.log("fetch non accepté");
  }

  const url = new URL("http://www.colr.org/json/color/random");
  //   const url = new URL("http://localhost:1447/profiles");
  //   const url = new URL("https://restcountries.eu/rest/v2/all");
  const myHeaders = new Headers();
  //   const options = {
  //     method: "GET",
  //     dataType: "jsonp",
  //     headers: myHeaders,
  //     mode: "cors",
  //     cache: "default",
  //   };
  fetch(url)
    // .then((data, truc) => {
    //   console.log(data);
    //   console.log(truc);
    //   console.log(data.response);
    // })
    .then((response) => {
      console.log(response);
      response.json().then((data) => {
        console.log("data", data);

        // color relative
        const color = data.new_color;
        const pageBody = document.body;
        pageBody.style.backgroundColor = `#${color}`;
      });
    })
    .catch((error) => console.log(error));
})();
