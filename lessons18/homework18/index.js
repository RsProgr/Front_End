const timerElement = document.querySelector(".timer");

const initiateCountdown = () => {
  let remainingTime = 60;

  const countdown = () => {
    timerElement.textContent = remainingTime;
    remainingTime--;

    if (remainingTime < 0) {
      clearInterval(intervalId);
    }
  };

  const intervalId = setInterval(countdown, 1000);
};

initiateCountdown();
