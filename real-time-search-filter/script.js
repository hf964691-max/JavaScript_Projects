const users = [
  {
    name: "amisha rathore",
    pic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
    bio: "silent chaos in a loud world | not for everyone",
  },
  {
    name: "riya sharma",
    pic: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=800&q=80",
    bio: "coffee, sunsets & late-night thoughts",
  },
  {
    name: "kavya singh",
    pic: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
    bio: "creating memories, not content",
  },
  {
    name: "neha verma",
    pic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
    bio: "dream big, stay humble",
  },
  {
    name: "ishita mehta",
    pic: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
    bio: "smiles are always in style",
  },
  {
    name: "aanya kapoor",
    pic: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?auto=format&fit=crop&w=800&q=80",
    bio: "lost in music, found in life",
  },
  {
    name: "simran kaur",
    pic: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
    bio: "less perfection, more authenticity",
  },
  {
    name: "mehak arora",
    pic: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80",
    bio: "good vibes only ✨",
  },
  {
    name: "priya malhotra",
    pic: "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?auto=format&fit=crop&w=800&q=80",
    bio: "living one chapter at a time",
  },
  {
    name: "tanvi joshi",
    pic: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?auto=format&fit=crop&w=800&q=80",
    bio: "soft heart, strong mind",
  },
];

const cardsContainer = document.querySelector(".cards");
const input = document.querySelector(".inp");

function createCard(user) {
  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.className = "bg-img";
  img.src = user.pic;
  img.alt = user.name;

  const blurredLayer = document.createElement("div");
  blurredLayer.className = "blurred-layer";
  blurredLayer.style.backgroundImage = `url(${user.pic})`;

  const content = document.createElement("div");
  content.className = "content";

  const heading = document.createElement("h3");
  heading.textContent = user.name;

  const para = document.createElement("p");
  para.textContent = user.bio;

  content.append(heading, para);
  card.append(img, blurredLayer, content);

  return card;
}

function showUsers(usersList) {
  const fragment = document.createDocumentFragment();

  usersList.forEach(user => {
    fragment.appendChild(createCard(user));
  });

  cardsContainer.replaceChildren(fragment);
}

// Initial render
showUsers(users);

// Debounce function
function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

// Search
const handleSearch = debounce(() => {
  const value = input.value.trim().toLowerCase();

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(value)
  );

  showUsers(filteredUsers);
}, 200);

input.addEventListener("input", handleSearch);