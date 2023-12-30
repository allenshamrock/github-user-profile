const form = document.querySelector(".search_form");    
const input = document.querySelector(".search_input");
let url = "https://api.github.com/users";
form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetchUser(input.value);
  //displayRepo(input.value)
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
      <img src="${data.avatar_url}" alt="${data.login}"/>
          <span class="username">${data.login}</span>
          <div>

          </div>
      `

      detailscard.appendChild(userCard)

    });
    
}
function displayRepo(userName){
  fetch(url + userName + "/repos_url")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
  }

