let Words =
[
 {
 	Jumbled: "papel",
    Correct: "apple"
 },

 {
 	Jumbled: "rogena",
 	Correct: "orange"
 },

 {
 	Jumbled: "hgwnaba",
 	Correct: "bhagwan"
 },

 {
 	Jumbled: "mopturec",
 	Correct: "computer"
 },

 {
  Jumbled: "ohepn",
  Correct: "phone"
 }
]

let CurrentWord = 0;
let Score = 0;
 

function displayWords() 
{
  document.querySelector("#AK").innerText = Words[CurrentWord].Jumbled;
  document.querySelector("#Score").innerText = Score;
}

displayWords();

function CheckAnswer()
{
 
  if(CurrentWord >= Words.length-1)
  {
     alert("Final Score..." + Score);
  }
  else
  {
  let Answer = document.querySelector("#ing").value;

  if(Answer.toLowerCase() === Words[CurrentWord].Correct.toLowerCase())
  {
    Score++;
  }
    
    CurrentWord++;

    displayWords();

    document.querySelector("#ing").value="";
   } 
}


















