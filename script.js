function updateCountdown() {
    const now = new Date();
    const currentYear = now.getFullYear();

    // Target: December 25th of the current year (Month is 0-indexed, so 11 = Dec)
    let christmas = new Date(currentYear, 11, 25);

    // Check if Christmas has passed for *this* year (specifically after Dec 25th 23:59:59)
    // If we are currently ON Dec 25th, we don't want to skip to next year yet.
    const endOfChristmas = new Date(currentYear, 11, 25, 23, 59, 59);

    if (now > endOfChristmas) {
        christmas = new Date(currentYear + 1, 11, 25);
    }

    const diff = christmas - now;

    // --- CASE 1: IT IS CHRISTMAS DAY ---
    if (diff <= 0) {
        // Change the main header text to celebrate
        document.querySelector('h1').innerText = "Merry Christmas!";
        document.querySelector('p').innerText = "Unlock your challenges now!";
        
        // Set numbers to 00
        document.getElementById('days').innerText = "00";
        document.getElementById('hours').innerText = "00";
        document.getElementById('minutes').innerText = "00";
        document.getElementById('seconds').innerText = "00";
        return;
    }

    // --- CASE 2: COUNTDOWN ---
    const days = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const seconds = Math.floor(diff / 1000) % 60;

    // Update the HTML elements
    document.getElementById('days').innerText = days < 10 ? '0' + days : days;
    document.getElementById('hours').innerText = hours < 10 ? '0' + hours : hours;
    document.getElementById('minutes').innerText = minutes < 10 ? '0' + minutes : minutes;
    document.getElementById('seconds').innerText = seconds < 10 ? '0' + seconds : seconds;
}

// Run immediately to avoid delay, then every second
updateCountdown();
setInterval(updateCountdown, 1000);
