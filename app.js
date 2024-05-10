function reverseName() {
    var nameInput = document.getElementById("name").value;
    var reversedName = nameInput.split("").reverse().join("");
    document.getElementById("reversedName").textContent = "Reversed Name: " + reversedName;
  }
  