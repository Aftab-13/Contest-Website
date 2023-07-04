let url = "https://kontests.net/api/v1/all"


let response = fetch(url)
response.then((v) => {
  return v.json()
}).then((contests) => {
  console.log(contests)
  for (item in contests) {
    cardContainer.insertAdjacentHTML('beforeend', `<div><p> ${contests[item].url} </div>`)
  }

})


function search_links() {
  let input = document.getElementById('searchbar').value
  input = input.toLowerCase();
  let x = contests[item]
  console.log("abc", x)
  for (i = 0; i < x.length; i++) {
    if (!x[i].url.innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    }
    else {
      x[i].style.display = "list-item";
    }
  }
}
