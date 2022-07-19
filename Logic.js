const btn = document.querySelector("#joke");
const resetBtn = document.querySelector("#reset");
const jokeList = document.querySelector("ol");

const getDadJoke = async () => {
  try {
    const res = await fetch("https://icanhazdadjoke.com/", {
      method: "GET",
      headers: { Accept: "application/json" },
    });
    const data = await res.json();
    return data.joke;
  } catch (e) {
    console.log("ERROR: ", e);
    return "Can't contact server!";
  }
};

const makeNewJokeListing = async () => {
  try {
    const newLi = document.createElement("li");
    const joke = await getDadJoke();
    newLi.innerText = joke;
    jokeList.append(newLi);
    jokeList.scrollTo(0, jokeList.scrollHeight);
  } catch (e) {
    console.log("ERROR: ", e);
  }
};

btn.addEventListener("click", () => makeNewJokeListing());
resetBtn.addEventListener("click", () => {
  while (jokeList.firstChild) {
    jokeList.removeChild(jokeList.firstChild);
  }
});
