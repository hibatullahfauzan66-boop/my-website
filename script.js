@@ -0,0 +1,11 @@
function toggleTheme() {
  const body = document.body;
  body.classList.toggle("dark-mode");

  const btn = document.getElementById("btn-theme");
  if (body.classList.contains("dark-mode")) {
    btn.innerHTML = "☀️ Light Mode";
  } else {
    btn.innerHTML = "🌙 Dark Mode";
  }
}
