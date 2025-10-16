document.addEventListener("DOMContentLoaded", () => {
  const timeEl = document.querySelector('[data-testid="test-user-time"]');

  // Render current time (in milliseconds)
  const updateTime = () => {
    timeEl.textContent = Date.now();
  };

  updateTime(); // Set initial value
  setInterval(updateTime, 1000); // Update every second
});
