const xhr = new XMLHttpRequest();

xhr.onload = function () {
  const response = JSON.parse(this.responseText);
  console.log(response);
};

xhr.onerror = function () {
  console.log("Ups something error");
};

xhr.open("GET", "https://notes-api.dicoding.dev/v2/notes");
xhr.send();

