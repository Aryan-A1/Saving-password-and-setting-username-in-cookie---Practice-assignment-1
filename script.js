document.addEventListener("DOMContentLoaded", function () {
  // Function to get the value of a cookie by name
  function getCookie(name) {
    let cookieArray = document.cookie.split("; ");
    let cookie = cookieArray.find((row) => row.startsWith(name + "="));
    return cookie ? cookie.split("=")[1] : null;
  }

  // Function to set a cookie
  function setCookie(name, value, daysToExpire) {
    let date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    document.cookie =
      name + "=" + value + ";expires=" + date.toUTCString() + ";path=/";
  }

  // Get the current count from cookie
  let count = getCookie("count");

  // If count doesn't exist, initialize it to 0
  if (count === null) {
    count = 0;
  } else {
    // Convert count to number and increment
    count = parseInt(count) + 1;
  }

  // Update the cookie with new count value
  setCookie("count", count, 7); // Cookie expires in 7 days

  // Display the count on the webpage
  const countDisplay = document.createElement("div");
  countDisplay.textContent = `Page visit count: ${count}`;
  countDisplay.style.fontSize = "24px";
  countDisplay.style.margin = "20px";
  document.body.appendChild(countDisplay);
});
