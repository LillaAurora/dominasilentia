document.addEventListener('DOMContentLoaded', function() {
  // Age verification overlay
  var ageVerified = localStorage.getItem('ageVerified');
  if (!ageVerified) {
    var overlay = document.createElement('div');
    overlay.className = 'overlay';
    overlay.innerHTML = '<div style="text-align:center"><h2>This site is intended for visitors 21 years of age or older.</h2><p>Please confirm that you are at least 21 years old.</p><button id="ageYes" class="cta">Yes</button> <button id="ageNo" class="cta">No</button></div>';
    document.body.appendChild(overlay);
    document.getElementById('ageYes').addEventListener('click', function() {
      localStorage.setItem('ageVerified', 'true');
      overlay.remove();
    });
    document.getElementById('ageNo').addEventListener('click', function() {
      window.location.href = 'https://example.com';
    });
  }

  var testContainer = document.getElementById('testContainer');
  if (testContainer) {
    var currentBlockIndex = 0;
    var questionBlocks = [
      {
        title: "Loyalty & Obedience",
        questions: [
          {
            text: "Why do you seek entrance into Domina Silentia's realm?",
            options: [
              { text: "To surrender completely and serve without question", score: 3 },
              { text: "To explore my submissive nature under Domina's guidance", score: 2 },
              { text: "Out of curiosity and to see what it's like", score: 1 },
              { text: "For fun and entertainment", score: 0 }
            ]
          },
          {
            text: "How do you handle instructions from an authority figure?",
            options: [
              { text: "I follow orders immediately and precisely", score: 3 },
              { text: "I generally comply but may need clarification", score: 2 },
              { text: "I consider whether to follow them", score: 1 },
              { text: "I resist or ignore instructions", score: 0 }
            ]
          },
          {
            text: "What motivates you to serve?",
            options: [
              { text: "The satisfaction of pleasing and obeying Domina", score: 3 },
              { text: "Personal growth through discipline and control", score: 2 },
              { text: "Rewards or recognition", score: 1 },
              { text: "I do not have a clear motivation", score: 0 }
            ]
          },
          {
            text: "How do you react when your loyalty is tested?",
            options: [
              { text: "I reaffirm my dedication and strive harder", score: 3 },
              { text: "I reflect and try to improve", score: 2 },
              { text: "I feel conflicted", score: 1 },
              { text: "I question the authority", score: 0 }
            ]
          },
          {
            text: "What fears do you bring to this journey?",
            options: [
              { text: "Failing to meet Domina's expectations", score: 3 },
              { text: "Losing my sense of self", score: 2 },
              { text: "Fear of punishment", score: 1 },
              { text: "I have no fears", score: 0 }
            ]
          }
        ]
      },
      {
        title: "Self-Awareness & Reflection",
        questions: [
          {
            text: "What are your weaknesses and how do you work to improve them?",
            options: [
              { text: "I actively seek out my flaws and address them openly", score: 3 },
              { text: "I am aware of some weaknesses and work on them occasionally", score: 2 },
              { text: "I'm not sure but I'm willing to learn", score: 1 },
              { text: "I don't think I have weaknesses", score: 0 }
            ]
          },
          {
            text: "Describe how you react when faced with criticism or correction.",
            options: [
              { text: "I accept it humbly and adjust immediately", score: 3 },
              { text: "I reflect on it and try to improve", score: 2 },
              { text: "I feel defensive at first but may adjust", score: 1 },
              { text: "I disregard criticism", score: 0 }
            ]
          },
          {
            text: "Why do you believe you would make a good submissive?",
            options: [
              { text: "I naturally find fulfilment in serving and obeying", score: 3 },
              { text: "I thrive under structured control and guidance", score: 2 },
              { text: "I want to explore but not commit fully", score: 1 },
              { text: "I'm not sure I'm suited for submission", score: 0 }
            ]
          },
          {
            text: "How do you cope with discomfort or pain in pursuit of a goal?",
            options: [
              { text: "I embrace it as part of growth", score: 3 },
              { text: "I endure it when necessary", score: 2 },
              { text: "I avoid discomfort whenever possible", score: 1 },
              { text: "I cannot handle discomfort", score: 0 }
            ]
          },
          {
            text: "What does self-awareness mean to you?",
            options: [
              { text: "Understanding my desires and limits deeply", score: 3 },
              { text: "Being aware of some feelings and behaviours", score: 2 },
              { text: "Occasionally reflecting on myself", score: 1 },
              { text: "I rarely think about it", score: 0 }
            ]
          }
        ]
      },
      {
        title: "Endurance & Service",
        questions: [
          {
            text: "Describe a time you continued a task despite exhaustion.",
            options: [
              { text: "I push through exhaustion to finish tasks", score: 3 },
              { text: "I sometimes push through if it's important", score: 2 },
              { text: "I prefer to rest when tired", score: 1 },
              { text: "I usually give up when exhausted", score: 0 }
            ]
          },
          {
            text: "What does endurance mean in a servitude context?",
            options: [
              { text: "Persisting in obedience even when challenged", score: 3 },
              { text: "Maintaining service most of the time", score: 2 },
              { text: "Doing what I'm told occasionally", score: 1 },
              { text: "Not relevant to me", score: 0 }
            ]
          },
          {
            text: "How do you prioritise tasks given by an authority figure?",
            options: [
              { text: "I put them above all else immediately", score: 3 },
              { text: "I integrate them into my schedule", score: 2 },
              { text: "I do them when convenient", score: 1 },
              { text: "I delay or ignore them", score: 0 }
            ]
          },
          {
            text: "Explain how you would serve in a way that brings value to Domina.",
            options: [
              { text: "By anticipating needs and acting without being asked", score: 3 },
              { text: "By following instructions promptly and respectfully", score: 2 },
              { text: "By doing tasks when reminded", score: 1 },
              { text: "I'm unsure how to bring value", score: 0 }
            ]
          },
          {
            text: "What sacrifices are you willing to make?",
            options: [
              { text: "I'll sacrifice my comfort and desires to serve", score: 3 },
              { text: "I'll make some sacrifices but keep my boundaries", score: 2 },
              { text: "I'm willing to sacrifice only occasionally", score: 1 },
              { text: "I'm unwilling to sacrifice", score: 0 }
            ]
          }
        ]
      },
      {
        title: "Attachment & Control",
        questions: [
          {
            text: "How important is a strong bond between you and Domina?",
            options: [
              { text: "Essential, it's the foundation of submission", score: 3 },
              { text: "Important but not everything", score: 2 },
              { text: "Only if it benefits me", score: 1 },
              { text: "Not important to me", score: 0 }
            ]
          },
          {
            text: "How do you view boundaries in this dynamic?",
            options: [
              { text: "I respect boundaries implicitly", score: 3 },
              { text: "I generally honour them but need reminders", score: 2 },
              { text: "I sometimes test how far I can go", score: 1 },
              { text: "I ignore boundaries", score: 0 }
            ]
          },
          {
            text: "Can you maintain discretion about rituals and communications?",
            options: [
              { text: "Always", score: 3 },
              { text: "Yes, but I sometimes slip", score: 2 },
              { text: "Only if reminded", score: 1 },
              { text: "No, I tend to share everything", score: 0 }
            ]
          },
          {
            text: "How do you see yourself outside of service?",
            options: [
              { text: "Balanced and stable", score: 3 },
              { text: "Sometimes mixed with my submissive role", score: 2 },
              { text: "Often unclear or conflicted", score: 1 },
              { text: "Dominated by my ego", score: 0 }
            ]
          },
          {
            text: "How do you perceive control in this relationship?",
            options: [
              { text: "A gift I willingly give", score: 3 },
              { text: "A shared responsibility", score: 2 },
              { text: "Something to negotiate", score: 1 },
              { text: "Something I resist", score: 0 }
            ]
          }
        ]
      }
    ];

    function renderBlock() {
      testContainer.innerHTML = "";
      var block = questionBlocks[currentBlockIndex];
      var form = document.createElement("form");
      form.id = "evaluationForm";
      var heading = document.createElement("h2");
      heading.textContent = block.title;
      form.appendChild(heading);
      block.questions.forEach(function(q, qIndex) {
        var p = document.createElement("p");
        p.textContent = q.text;
        form.appendChild(p);
        q.options.forEach(function(opt, optIndex) {
          var label = document.createElement("label");
          label.style.display = "block";
          var input = document.createElement("input");
          input.type = "radio";
          input.name = "q" + qIndex;
          input.value = opt.score;
          label.appendChild(input);
          label.appendChild(document.createTextNode(" " + opt.text));
          form.appendChild(label);
        });
      });
      var submitBtn = document.createElement("button");
      submitBtn.type = "submit";
      submitBtn.className = "cta";
      submitBtn.textContent = currentBlockIndex < questionBlocks.length - 1 ? "Next" : "Submit";
      form.appendChild(submitBtn);
      form.addEventListener("submit", function(e) {
        e.preventDefault();
        var totalScore = 0;
        var answeredAll = true;
        block.questions.forEach(function(q, qIndex) {
          var selected = form.querySelector('input[name="q' + qIndex + '"]:checked');
          if (selected) {
            totalScore += parseInt(selected.value);
          } else {
            answeredAll = false;
          }
        });
        var threshold = block.questions.length * 2;
        if (!answeredAll || totalScore < threshold) {
          showExplanation();
        } else {
          currentBlockIndex++;
          if (currentBlockIndex < questionBlocks.length) {
            renderBlock();
          } else {
            localStorage.setItem("testPassed", "true");
            window.location.href = "welcome.html";
          }
        }
      });
      testContainer.appendChild(form);
    }

    function showExplanation() {
      testContainer.innerHTML = "";
      var message = document.createElement("p");
      message.textContent = "Your responses suggest you may not yet be ready. Please explain why you believe you are worthy to serve:";
      testContainer.appendChild(message);
      var textarea = document.createElement("textarea");
      textarea.rows = 4;
      textarea.style.width = "90%";
      testContainer.appendChild(textarea);
      var button = document.createElement("button");
      button.className = "cta";
      button.textContent = "Submit Explanation";
      testContainer.appendChild(button);
      button.addEventListener("click", function() {
        if (textarea.value.trim().length < 100) {
          alert("Please provide a more detailed explanation (at least 100 characters).");
        } else {
          localStorage.setItem("testPassed", "true");
          window.location.href = "welcome.html";
        }
      });
    }

    renderBlock();
  }
});
