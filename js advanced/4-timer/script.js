'use strict';

function updateCountdown() {
    const now = new Date();

    const endOfYear = new Date(now.getFullYear(), 11, 31, 23, 59, 59);

    if (now > endOfYear) {
        endOfYear.setFullYear(now.getFullYear() + 1);
    }

    const diff = endOfYear - now;

    if (diff <= 0) {
        document.getElementById('countdown').innerHTML = '<h1>С Новым Годом!</h1>';
        clearInterval(intervalId);
        return;
    }

    const totalSeconds = Math.floor(diff / 1000);
    const seconds = totalSeconds % 60;
    const totalMinutes = Math.floor(totalSeconds / 60);
    const minutes = totalMinutes % 60;
    const totalHours = Math.floor(totalMinutes / 60);
    const hours = totalHours % 24;
    const days = Math.floor(totalHours / 24);

    const months = Math.floor(days / 30.44);
    const remainingDays = days % 30;

    document.getElementById('months').textContent = months;
    document.getElementById('days').textContent = remainingDays;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

const intervalId = setInterval(updateCountdown, 1000);

updateCountdown();