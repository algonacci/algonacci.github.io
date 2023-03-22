const guestbookContainer = document.getElementById("guestbook-container");

fetch("http://localhost:5000/guest-book")
  .then((response) => response.json())
  .then((data) => {
    data
      .forEach((entry) => {
        const name = entry.name;
        const message = entry.message;
        const avatarUrl = `https://cataas.com/cat?width=50&height=50&rnd=${Math.random()}`;
        const entryHTML = `
        <div class="guestbook-entry">
          <div class="guestbook-avatar">
            <img src="${avatarUrl}" alt="Profile Picture" />
          </div>
          <div class="guestbook-message">
            <strong>${name}</strong>
            <p>${message}</p>
          </div>
        </div>
      `;
        guestbookContainer.insertAdjacentHTML("beforeend", entryHTML);
      })
      .catch((error) => console.error(error));
  })
  .catch((error) => console.error(error));

$(document).ready(function () {
  $("#guestbook-form").submit(function (event) {
    event.preventDefault(); // prevent the default form submission behavior

    // get the form data
    var formData = {
      name: $("input[name=name]").val(),
      message: $("textarea[name=message]").val(),
    };

    // send an AJAX POST request to the server
    $.ajax({
      type: "POST",
      url: "http://localhost:5000/add-message", // replace this with your server's endpoint
      data: JSON.stringify(formData),
      contentType: "application/json",
      dataType: "json",
      success: function () {
        window.location.replace("/guest-book.html");
      },
      error: function (error) {
        console.error(error);
      },
    }).done(function (data) {
      console.log(data); // do something with the response data (if applicable)
    });
  });
});
