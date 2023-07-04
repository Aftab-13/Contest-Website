let url = "https://kontests.net/api/v1/all"
let imag = ["https://cdn.shopify.com/s/files/1/0306/6419/6141/articles/coding_languages.png?v=1619126283", "https://news.mit.edu/sites/default/files/images/202012/MIT-Coding-Brain-01-press.jpg", "https://edsurge.imgix.net/uploads/post/image/12176/coding-1556754232.jpg?auto=compress%2Cformat&crop=true&h=486&w=1200", "https://www.edology.com/uploads/media/sulu-700x450/00/1720-blog-why-coding-is-so-important-for-IT-jobs-s.jpg?v=2-0", "https://images.techopedia.com/images/uploads/istock-1173805290.jpeg?w=800&h=0&mode=max&quality=70&scale=both"]


function search_contests() {
  let input = document.getElementById('searchbar').value
  input = input.toLowerCase();
  let x = contests[item]

  for (i = 0; i < x.length; i++) {
    if (!x[i].name.toLowerCase().includes(input)) {
      x[i].style.display = "";
    }
    else {
      x[i].style.display = "none";
    }
  }
}




function e() {

  var element = document.getElementById("cardContainer");
  element.scrollIntoView({ behavior: "smooth" });

}


let response = fetch(url)
response.then((v) => {
  return v.json()
}).then((contests) => {
  console.log(contests)
  ihtml = ""
  for (item in contests) {
    console.log(contests[item])
    let a = Math.floor(Math.random() * imag.length)
    let image = imag[a]
    ihtml += `
    <div class="card mx-3" style="width: 21rem;">
        <img src= "${image}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${contests[item].name}</h5>
          <p class="card-text"><a href = "${contests[item].url}">Visit Here</p>
          <p>Starts At : ${contests[item].start_time}
          <p>Ends At : ${contests[item].end_time}
          
        </div>
      </div>
      
    `
  }
  cardContainer.innerHTML = ihtml




})








// let n = localStorage.getItem("note")
// alert("Your note is :" + n)

// let a = prompt("Enter your Note ")
// if(a)
// {
//   localStorage.setItem("note", a )

// }
// let c = confirm("Do you want to remove the note?")
// if(c){
//   localStorage.removeItem("note")
//   alert("Note DELETED")
// }