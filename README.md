<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to My Website</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <h1>Welcome to My Website</h1>
    <p>This website is hosted for free using GitHub Pages 🎉</p>
  </header>
  <main>
    <section>
      <h2>About</h2>
      <p>I have full control — everything is coded and managed by me.</p>
    </section>
  </main>
  <footer>
    <p>© <span id="year"></span> My Website</p>
  </footer>
  <script>
    document.getElementById("year").textContent = new Date().getFullYear();
  </script>
</body>
</html>
