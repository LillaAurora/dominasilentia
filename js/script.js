document.addEventListener('DOMContentLoaded', function() {
  // Age verification overlay
  var ageVerified = localStorage.getItem('ageVerified');
  if (!ageVerified) {
    var overlay = document.createElement('div');
    overlay.className = 'overlay';
    overlay.innerHTML = `
      <div style="text-align:center">
        <h2>This site is intended for visitors 21 years of age or older.</h2>
        <p>Please confirm that you are at least 21 years old.</p>
        <button id="yesBtn" class="cta">Yes, I am 21+</button>
        <button id="noBtn" class="cta">No</button>
      </div>
    `;
    document.body.appendChild(overlay);
    document.getElementById('yesBtn').addEventListener('click', function(){
      localStorage.setItem('ageVerified', 'true');
      document.body.removeChild(overlay);
    });
    document.getElementById('noBtn').addEventListener('click', function(){
      window.location.href = 'https://example.com';
    });
  }

  // Silentis test dynamic logic
  var testContainer = document.getElementById('testContainer');
  if (testContainer) {
    // Define question blocks for different traits
    var questionBlocks = [
      {
        title: 'Loyalty & Motivation',
        questions: [
          'Why do you seek entrance into Domina Silentia\u2019s realm?',
          'Describe your understanding of absolute loyalty to a dominant figure.',
          'What does submission mean to you?',
          'How would you prove your devotion?',
          'Describe a moment when you demonstrated unwavering commitment.',
          'How do you handle obedience to commands that challenge you?'
        ]
      },
      {
        title: 'Introspection & Self\u2011Awareness',
        questions: [
          'What are your weaknesses and how do you work to improve them?',
          'Describe how you react when faced with criticism or correction.',
          'Why do you believe you would make a good submissive?',
          'In what ways do you thrive under structured control?',
          'How do you cope with discomfort or pain in pursuit of a goal?',
          'What fears do you bring to this journey?'
        ]
      },
      {
        title: 'Endurance & Service',
        questions: [
          'Describe a time you continued a task despite exhaustion.',
          'What does endurance mean in a servitude context?',
          'How do you prioritize tasks given by an authority figure?',
          'Explain how you would serve in a way that brings value to Domina.',
          'What sacrifices are you willing to make?',
          'Describe how you maintain focus under pressure.'
        ]
      }
    ];

    var currentBlockIndex = 0;

    function renderBlock() {
      testContainer.innerHTML = '';
      var block = questionBlocks[currentBlockIndex];
      var form = document.createElement('form');
      form.id = 'silentisForm';
      var heading = document.createElement('h2');
      heading.textContent = block.title;
      form.appendChild(heading);
      block.questions.forEach(function(q, idx) {
        var label = document.createElement('label');
        label.textContent = q;
        label.style.display = 'block';
        label.style.marginTop = '1rem';
        var textarea = document.createElement('textarea');
        textarea.required = true;
        textarea.rows = 3;
        textarea.style.width = '100%';
        textarea.setAttribute('data-question-index', idx);
        form.appendChild(label);
        form.appendChild(textarea);
      });
      var submitButton = document.createElement('button');
      submitButton.type = 'submit';
      submitButton.className = 'cta';
      submitButton.textContent = currentBlockIndex < questionBlocks.length - 1 ? 'Next' : 'Submit';
      form.appendChild(submitButton);
      testContainer.appendChild(form);

      form.addEventListener('submit', function(e) {
        e.preventDefault();
        var inputs = form.querySelectorAll('textarea');
        var allLongEnough = true;
        inputs.forEach(function(inp) {
          if (inp.value.trim().length < 50) {
            allLongEnough = false;
          }
        });
        if (allLongEnough) {
          currentBlockIndex++;
          if (currentBlockIndex < questionBlocks.length) {
            renderBlock();
          } else {
            // Test passed, redirect to welcome page
            localStorage.setItem('testPassed', 'true');
            window.location.href = 'welcome.html';
          }
        } else {
          // Show explanation prompt
          showExplanation();
        }
      });
    }

    function showExplanation() {
      testContainer.innerHTML = '';
      var p = document.createElement('p');
      p.textContent = 'Your responses were too short. Please explain why you believe you are worthy of serving Domina Silentia. Provide a detailed answer.';
      testContainer.appendChild(p);
      var textarea = document.createElement('textarea');
      textarea.rows = 4;
      textarea.style.width = '100%';
      testContainer.appendChild(textarea);
      var submitBtn = document.createElement('button');
      submitBtn.textContent = 'Submit Explanation';
      submitBtn.className = 'cta';
      testContainer.appendChild(submitBtn);
      submitBtn.addEventListener('click', function() {
        if (textarea.value.trim().length < 100) {
          alert('Please provide a more detailed explanation (at least 100 characters).');
        } else {
          localStorage.setItem('testPassed', 'true');
          window.location.href = 'welcome.html';
        }
      });
    }

    renderBlock();
  }
});
