document.addEventListener('DOMContentLoaded', function() {
  // Age verification overlay
  var ageVerified = localStorage.getItem('ageVerified');
  if (!ageVerified) {
    var overlay = document.createElement('div');
    overlay.className = 'overlay';
    overlay.innerHTML = '<div style="text-align:center"><h2>Ez az oldal 21 éven felülieknek készült.</h2><p>Kérem erősítse meg, hogy elmúlt 21 éves.</p><button id="yesBtn">Igen</button> <button id="noBtn">Nem</button></div>';
    document.body.appendChild(overlay);
    document.getElementById('yesBtn').addEventListener('click', function() {
      localStorage.setItem('ageVerified', 'true');
      document.body.removeChild(overlay);
    });
    document.getElementById('noBtn').addEventListener('click', function() {
      // Redirect to another page or close window
      window.location.href = 'https://example.com';
    });
  }

  // Silentis test form logic
  var testForm = document.getElementById('silentisForm');
  if (testForm) {
    var discordSection = document.getElementById('discordSection');
    var messageElem = document.getElementById('formMessage');
    testForm.addEventListener('submit', function(e) {
      e.preventDefault();
      var inputs = testForm.querySelectorAll('textarea, input[type="text"]');
      var allLongEnough = true;
      inputs.forEach(function(inp) {
        if (inp.value.trim().length < 50) {
          allLongEnough = false;
        }
      });
      if (allLongEnough) {
        messageElem.textContent = 'Gratulálunk, átmentél a teszten! A Discord link lentebb látható.';
        messageElem.style.color = '#5cb85c';
        if (discordSection) {
          discordSection.classList.remove('hidden');
        }
      } else {
        messageElem.textContent = 'A válaszok túl rövidek voltak. Írd le részletesen, miért gondolod, hogy méltó vagy a szolgálatra.';
        messageElem.style.color = '#f08080';
      }
    });
  }
});
