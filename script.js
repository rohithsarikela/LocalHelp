const form = document.getElementById("helpForm");
const helpList = document.getElementById("helpList");

function loadHelps() {
  const helps = JSON.parse(localStorage.getItem("helps")) || [];
  helpList.innerHTML = "";
  helps.forEach((help, index) => {
    const li = document.createElement("li");
    li.textContent = `${help.title} (${help.type}) - ${help.location}`;
    helpList.appendChild(li);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value;
  const type = document.getElementById("type").value;
  const location = document.getElementById("location").value;
  const newHelp = { title, type, location };
  const helps = JSON.parse(localStorage.getItem("helps")) || [];
  helps.push(newHelp);
  localStorage.setItem("helps", JSON.stringify(helps));
  form.reset();
  loadHelps();
});

window.addEventListener("load", loadHelps);
