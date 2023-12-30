const form = document.querySelector(".search_form");
const input = document.querySelector(".search_input");
let url = "https://api.github.com/users";
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetchUser(input.value);
  //displayRepo(input.value);
  form.reset()
});

function fetchUser(userName) {
  fetch(`https://api.github.com/users/${userName}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      let detailscard = document.querySelector(".details");
      let userCard = document.createElement("div");
      userCard.className = "users";
      userCard.innerHTML = `
   <div class ="user">
      <img src="${data.avatar_url}" alt="${data.login}"/>
          <span class="username">${data.login}</span>
   </div>
          <div id="repository">

          </div>`;
          let repos = "";
          let reposurl = data.repos_url;
          fetch(reposurl)
            .then((response) => response.json())
            .then((data) => {
              // console.log(data[0].name);
              for (i = 0; i < data.length; i++) {
                repos += `<ul>
                  <li>
                  <a href="${data[i].html_url}">${data[i].name} </a>
                  </li>
                </ul>`;
                // console.log(repos)
                document.querySelector("#repository").innerHTML = `${repos}`;
              }
            });
          

      detailscard.appendChild(userCard);
    });
}
// function displayRepo(username) {
//   fetch(`https://api.github.com/users/${username}`)
//     .then((response) => response.json())
//     .then((data) => {
//       //console.log(data.repos_url);
//       let repos = "";
//       let reposurl = data.repos_url;
//       fetch(reposurl)
//         .then((response) => response.json())
//         .then((data) => {
//           // console.log(data[0].name);
//           for (i = 0; i < data.length; i++) {
//             repos += `<ul></ul>
//               <li>
//               <a href="${data[i].html_url}">${data[i].name} </a>
//               </li>
//             </ul>`;
//             // console.log(repos)
//             document.querySelector("#repository").innerHTML = `${repos}`;
//           }
//         });
//     });
// }

// for(const info of data)
