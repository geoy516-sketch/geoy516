function showSearchSuggestions() {
  const input = document.getElementById("search").value.toLowerCase();
  const dropdown = document.getElementById("searchDropdown");
  dropdown.innerHTML = "";
  dropdown.style.display = input ? "block" : "none";

  const matches = items.filter(item => item.name.toLowerCase().includes(input));

  matches.forEach(item => {
    const highlighted = item.name.replace(new RegExp(input, "gi"), match => `<span class="highlight">${match}</span>`);
    const div = document.createElement("div");
    div.innerHTML = highlighted;
    div.onclick = () => {
      document.getElementById("search").value = item.name;
      dropdown.style.display = "none";
      displayItems([item]);
    };
    dropdown.appendChild(div);
  });
}
