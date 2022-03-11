const root = document.querySelector("#root");

/*
    API1
*/

// MakeForm();

// form.onsubmit = (e) => {
//   e.preventDefault();
//   results.innerHTML = "";
//   getData(postcode.value, landcode.value);
// };

// async function getData(postcode, landcode) {
//   const response = await axios(
//     `http://api.zippopotam.us/${landcode}/${postcode}`
//   );
//   response.data.places.map((el) => {
//     Object.entries(el).map(([key, value]) => {
//       results.insertAdjacentHTML("beforeend", `<li>${key}: ${value}</li>`);
//     });
//     results.insertAdjacentHTML("beforeend", `<hr>`);
//   });
// }

// // function getData(postcode, landcode) {
// //   try {
// //     fetch(`http://api.zippopotam.us/${landcode}/${postcode}`)
// //       .then((response) => response.json())
// //       .then((data) => {
// //         data.places.map((el) => {
// //           Object.entries(el).map(([key, value]) => {
// //             results.insertAdjacentHTML(
// //               "beforeend",
// //               `<li>${key}: ${value}</li>`
// //             );
// //           });
// //           results.insertAdjacentHTML("beforeend", `<hr>`);
// //         });
// //       });
// //   } catch (error) {
// //     console.error(error);
// //   }
// // }

// function MakeForm() {
//   root.insertAdjacentHTML(
//     "beforeend",
//     ` <form action="" id="form">
//     <div class="postcode">
//       <label for="postcode">Postcode:</label>
//       <input
//         type="text"
//         id="postcode"
//         class="postcode"
//         spellcheck="false"
//       />
//     </div>
//     <div class="landcode">
//       <label for="landcode">Landcode:</label>
//       <input
//         type="text"
//         id="landcode"
//         class="landcode"
//         spellcheck="false"
//       />
//     </div>

//     <button class="button">Geef info</button>
//   </form>
//   <div id="results"></div>
//   `
//   );
//   form = document.querySelector("#form");
//   postcode = document.querySelector("#postcode");
//   landcode = document.querySelector("#landcode");
//   results = document.querySelector("#results");
// }

/*
    API2

    */

// MakeForm();

// form.onsubmit = (e) => {
//   e.preventDefault();
//   results.innerHTML = "";
//   getData(gemeente.value);
//   loading.style.display = "block";
// };
// let days = 6;
// async function getData(gemeente) {
//   const response = await axios(
//     `https://weatherdbi.herokuapp.com/data/weather/${gemeente}`
//   );

//   for (let i = 1; i < days; i++) {
//     results.insertAdjacentHTML(
//       "beforeend",
//       `<ul><li> ${response.data.next_days[i].day} maxtemp: ${response.data.next_days[i].max_temp.c} / mintemp: ${response.data.next_days[i].min_temp.c} </li><ul>`
//     );
//   }
//   loading.style.display = "none";
// }

// function MakeForm() {
//   root.insertAdjacentHTML(
//     "beforeend",
//     ` <form action="" id="form">
//       <div class="gemeente">
//         <label for="gemeente">Gemeente:</label>
//         <input
//           type="text"
//           id="gemeente"
//           class="gemeente"
//           spellcheck="false"
//         />
//       </div>
//       <button class="button">Toon Weer</button>
//     </form>
//     <img class="loading" src="./img/Winter.gif" alt="" />
//     <div id="results"></div>
//     `
//   );
//   form = document.querySelector("#form");
//   results = document.querySelector("#results");
//   gemeente = document.querySelector("#gemeente");
//   loading = document.querySelector(".loading");
// }

/*
    API3

    */

// MakeButton();

// let count = 0;
// button.onclick = (e) => {
//   count++;
//   if (count == 5) {
//     getData();
//     count = 0;
//   }
// };

// async function getData() {
//   const response = await axios(
//     `https://api.opensea.io/api/v1/assets?format=json`
//   );

//   response.data.assets.map((el) => {
//     if (el.image_thumbnail_url != null) {
//       images.insertAdjacentHTML(
//         "beforeend",
//         `<img
//     src="${el.image_thumbnail_url}"
//     alt=""
//   />`
//       );
//     }
//   });
// }

// function MakeButton() {
//   root.insertAdjacentHTML(
//     "beforeend",
//     `  <button class="button">KLIK 5 KEER</button>
//                 <div id="images" class="images"></div>
//                 `
//   );
//   button = document.querySelector(".button");
//   images = document.querySelector(".images");
// }

/*
    API4

    */

MakeButton();
const responses = [];
let i = 0;

button.onclick = (e) => {
  while (i < 9) {
    makeImgArray();
    i++;
  }
  getData(responses);
};

async function makeImgArray() {
  const response = await axios(`https://random.dog/woof.json`);
  responses.push(response);
}

async function getData(responses) {
  await Promise.all(responses).then((responseall) => {
    responseall.map((data) => {
      if (data.data.url.substr(data.data.url.length - 3) == "mp4") {
        images.insertAdjacentHTML(
          "beforeend",
          `<video style="width : 30%" autoplay muted>
            <source src="${data.data.url}" type="video/mp4">
          </video>`
        );
      } else {
        images.insertAdjacentHTML(
          "beforeend",
          `<img style="width : 30%"
                src="${data.data.url}"
                alt=""
              />`
        );
      }
    });
  });
}

function MakeButton() {
  root.insertAdjacentHTML(
    "beforeend",
    `  <button class="button">TOON 9 RANDOM HONDEN</button>
                        <div id="images" class="images"></div>
                        `
  );
  button = document.querySelector(".button");
  images = document.querySelector(".images");
}
