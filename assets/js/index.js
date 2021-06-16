const books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
    img:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO"
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    img:
      "http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy"
  },
  {
    title: "Thinking with Type",
    author: "Ellen Lupton",
    alreadyRead: true,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/518%2BxIiELFL._SX258_BO1,204,203,200_.jpg"
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    alreadyRead: false,
    img: "https://eloquentjavascript.net/img/cover.jpg"
  }
];

const bookList = document.querySelector(".book-list");

const bookCards = [];
for (let i = 0; i < books.length; i++) {
  bookCards.push(document.createElement("div"));
  bookCards[i].className = "book card mb-4";
  bookCards[i].innerHTML = `<img src="${books[i].img}" class="book-cover"> <div class="card-body" style="height: 120px"><h5 class="card-title">${books[i].title}</h5> <p class="card-subtitle text-secondary">${books[i].author.split(" ").reverse().join(", ")}</p></div>`;
  if (books[i].alreadyRead === true) {
    bookCards[i].innerHTML += ` <div class="card-body bg-light mt-2"><div class="status p-3 mb-2 bg-success text-white text-right rounded-left rounded-right">Read</div></div>`
  } else {
    bookCards[i].innerHTML += ` <div class="card-body bg-light mt-2"><div class="status p-3 mb-2 bg-secondary text-white text-right rounded-left rounded-right">To read</div></div>`
  }
  bookList.appendChild(bookCards[i]);
}

console.log(bookCards);
