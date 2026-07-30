const form = document.querySelector("#cardForm");
const cardsHolder = document.querySelector("#cardsHolder");

form.addEventListener("submit", (dets) => {
  dets.preventDefault();

  const picUrl = document.querySelector("#picInput").value;
  const name = document.querySelector("#nameInput").value;
  const occupation = document.querySelector("#occInput").value;
  const info = document.querySelector("#infoInput").value;

  if (!name.trim()) return alert("Please enter a name!");

  let card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
                <div class="profile">
                    <img src="${picUrl || "https://placeholder.com"}" alt="Profile">
                </div>
                <h3>${name}</h3>
                <h5>${occupation || "Professional"}</h5>
                <p>${info || "No info provided."}</p>
            `;

  cardsHolder.appendChild(card);
  form.reset();
});
