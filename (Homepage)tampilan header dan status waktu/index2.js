const now = new Date();
        const hour = now.getHours(12);
        let greeting;

        if (hour >= 5 && hour < 12) {
          greeting = "Selamat Pagi!";
      } else if (hour >= 12 && hour < 15) {
          greeting = "Selamat Siang!";
      } else if (hour >= 15 && hour < 18) {
          greeting = "Selamat Sore!";
      } else {
          greeting = "Selamat Malam!";
      }

      document.getElementById("greeting").textContent = greeting;

      function updateClock() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');

        const timeString = `${hours}:${minutes}:${seconds}`;
        document.getElementById('clock').textContent = timeString;
    }

    // Update the clock every second
    setInterval(updateClock, 1000);

    // Initial call to set the clock when the page loads
    updateClock();

    document.addEventListener("DOMContentLoaded", () => {
        const navbarToggle = document.getElementById("navbar-toggle");
        const navbarMenu = document.getElementById("navbar-menu");
        
        navbarToggle.addEventListener("click", () => {
            navbarMenu.classList.toggle("active");
        });
        });