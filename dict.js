let apiUrl=`https://api.dictionaryapi.dev/api/v2/entries/en/`;
const searchBox = document.querySelector(".input");
const searchBtn = document.querySelector(".btn");
async function getMeaning(word){
    const response = await fetch(apiUrl + word);
    let data = await response.json();
    console.log(data);
    document.querySelector(".word").innerHTML = data[0].word;
    document.querySelector(".phonetics").innerHTML = data[0].phonetic;
    document.querySelector(".meaning").innerHTML = data[0].meanings[0].definitions[0].definition;
}
searchBtn.addEventListener("click",()=>{
    getMeaning(searchBox.value);
})
