document.getElementById('valentineButton').addEventListener('click', function() {
    const responseMessage = document.getElementById('responseMessage');
    responseMessage.textContent = "Yay! I'm so happy! 💖";
    responseMessage.classList.remove('hidden');
  });