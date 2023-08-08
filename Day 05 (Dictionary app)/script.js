// const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

const result = document.getElementById("result");
const search_btn = document.getElementById("search");
const sound = document.getElementById("sound");

search_btn.addEventListener("click", () => {
  const input_word = document.getElementById("input_word").value;
  fetch(`${url}${input_word}`)
    .then((response) => response.json())
    .then((data) => {
      getData(data);
    })
    .catch((error) => {
        result.innerHTML=`<h3 class="error_message">Can't find this word</h3>`;
        console.log(error.message);
    })
});
const getData = (data) => {
  console.log(data);
  let word = data[0].word;
  let partOfSpeech = data[0].meanings[0].partOfSpeech ;
  let defination = data[0].meanings[0].definitions[0].definition ||"";
  let example = data[0].meanings[0].definitions[0].example || "";
  let audio = data[0].phonetics[1].audio || data[0].phonetics[1].audio;
  result.innerHTML = ` <div class="meaning_box">
                <div>
                    <h3 class="meaning_heading" id="word">${word}</h3>
                    <p class="meaning_p">${partOfSpeech}</p>
                </div>
                <button class="sound" onclick="playSound
                ()">
                <i class="fa-solid fa-volume-high"></i>
                </button>
                </div>
                <div class="meaning_box">
                <p class="defination">${defination}</p>
                </div>
                <div class="example_box">
                <div class="border">
                ${example}
                </div>
                </div>`;
  sound.setAttribute("src", `${audio}`);
};
function playSound(){
    sound.play();
}