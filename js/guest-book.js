const guestbookContainer = document.getElementById("guestbook-container");

fetch("https://example.com/guestbook")
  .then((response) => response.json())
  .then(console.log("Test"))
  .then((data) => {
    // Process the guestbook data here
    data.forEach((entry) => {
      const name = entry.name;
      const message = entry.message;
      const entryHTML = `
        <div>
          <strong>${name}</strong>
          <p>${message}</p>
        </div>
      `;
      guestbookContainer.insertAdjacentHTML("beforeend", entryHTML);
    });
  })
  .catch((error) => console.error(error));
