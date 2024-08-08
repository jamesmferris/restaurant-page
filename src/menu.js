function loadMenu() {
  const content = document.createElement("div");
  content.classList.add("tab-content");

  const h1 = document.createElement("h1");
  h1.textContent = "Our Menu";

  const menuItems = [
    { name: "Spaghetti Carbonara", price: "$12.99" },
    { name: "Margherita Pizza", price: "$10.99" },
    { name: "Cesar Salad", price: "$7.99" },
  ];

  const ul = document.createElement("ul");
  menuItems.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ${item.price}`;
    ul.appendChild(li);
  });

  content.append(h1, ul);

  return content;
}

export default loadMenu;
