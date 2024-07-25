document.addEventListener('DOMContentLoaded', function() {
    const message1Button = document.getElementById('button1');
    const message2Button = document.getElementById('button2');
    const message3Button = document.getElementById('button3');
    const messageDisplay = document.getElementById('messagesDisplay');
  
    message1Button.addEventListener('click', function() {
      showMessage('red sky peak btw');
    });
  
    message2Button.addEventListener('click', function() {
      showMessage('taylors shit btw');
    });
  
    message3Button.addEventListener('click', function() {
      showMessage('i seriously have no idea what to do with my future');
    });
  
   
    function showMessage(message) {
      messageDisplay.innerText = message;
      messageDisplay.classList.add('active');
    }
  });