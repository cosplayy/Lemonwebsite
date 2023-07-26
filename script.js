const bookingForm = document.getElementById("bookingForm");
const bookingStatus = document.getElementById("bookingStatus");

bookingForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const partySize = document.getElementById("partySize").value;

  // You can perform additional validation here



  // Here you would typically send the data to the server to handle the booking
  // and store it in the database. For this example, we'll simply display the data.

  bookingStatus.innerHTML = `
    <h2>Booking Confirmation</h2>
    <p>Name: ${bookingData.name}</p>
    <p>Email: ${bookingData.email}</p>
    <p>Date: ${bookingData.date}</p>
    <p>Time: ${bookingData.time}</p>
    <p>Party Size: ${bookingData.partySize}</p>
    <p>Thank you for booking a table with us!</p>
  `;
});
