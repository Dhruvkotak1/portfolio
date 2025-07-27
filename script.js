// script.js
document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('themeToggle');
    const html = document.documentElement;
  
    toggle.addEventListener('change', function () {
      if (this.checked) {
        html.setAttribute('data-theme', 'dark');
      } else {
        html.setAttribute('data-theme', 'light');
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('themeToggle2');
    const html = document.documentElement;
  
    toggle.addEventListener('change', function () {
      if (this.checked) {
        html.setAttribute('data-theme', 'dark');
      } else {
        html.setAttribute('data-theme', 'light');
      }
    });
  });


  // Dynamically calculate age
  const dob = new Date("2007-10-18");
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const m = today.getMonth() - dob.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
    age--;
  }
  document.getElementById("age").innerText = `Age: ${age}`;

  
