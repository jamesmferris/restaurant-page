function loadHome() {
  const content = document.createElement("div");
  content.classList.add("tab-content");

  // Create elements and set content
  const h1 = document.createElement("h1");
  h1.textContent = "Welcome to Delicious Bites";

  const img = document.createElement("img");
  img.src = "https://via.placeholder.com/400x300";
  img.alt = "Delicious dish";

  const p1 = document.createElement("p");
  p1.textContent = "Experience culinary excellence at Delicious Bites. Our passionate chefs create unforgettable dishes using only the freshest, locally-sourced ingredients.";

  const p2 = document.createElement("p");
  p2.textContent = "Join us for an extraordinary dining experience that will tantalize your taste buds and leave you craving more!";

  // Append elements to the content div
  content.append(h1, img, p1, p2);

  return content;
}

export default loadHome;
