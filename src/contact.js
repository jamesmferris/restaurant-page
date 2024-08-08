function loadContact() {
  const content = document.createElement("div");
  content.classList.add("tab-content");

  const h1 = document.createElement("h1");
  h1.textContent = "Contact Us";

  const p = document.createElement("p");
  p.textContent = "Get in touch with us for reservations or inquires:";

  const contactInfo = document.createElement("div");
  contactInfo.innerHTML = `
  <p>Phone: (123) 456-7890</p>
  <p>Email: info@deliciousbites.com</p>
  <p>Address: 123 Tasty Lane, Flavortown, MN 12345</p>
  `;

  content.append(h1, p, contactInfo);

  return content;
}

export default loadContact;
