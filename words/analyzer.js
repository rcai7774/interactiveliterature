function clean(text){
text = text.toLowerCase().replace(/[\,\|\=\.\(\)\&\{\}\[\]\`\~\:\;\"\<\>\?\/]/g, "");
    text = text.replace(/[\-\_\n/]/g, " ");
		return text;
}
function analyze(text) {
    text = clean(text);
    let words = text.split(" ");
		const wordMap = new Map();
    for (let i = 0; i < words.length; i++) {
        if (wordMap.has(words[i])) {
            wordMap.set(words[i], wordMap.get(words[i]) + 1);
        } else {
					if(words[i].search(/\w+/)>-1){
						wordMap.set(words[i], 1);}  
        }
    }
    let sum = frequency(wordMap);
    let entries = wordMap.entries();
    let sortedEntries = Array.from(entries).sort((entrya, entryb) => entryb[1] - entrya[1]);
    display(sum, sortedEntries);
}
function display(sum, sortedEntries) {
    let tblHtml = `
						 <table style = "background-color:#ccFFFF; text-align:center;">
						 <tr>
    <th><u>Word/Letter</u></th>
    <th><u>#Of Occurences</u></th> 
		<th><u>Frequency</u></th>
  </tr>`;
    for (const k of sortedEntries) {
        tblHtml += createRow(k, sum);
    }
    tblHtml += `</table>`;
    out.innerHTML = tblHtml;
}
const createRow = function (k, sum) {
    let rowHtml = `<tr>
					 <td> ${k[0]} </td>
					 <td> ${k[1]} </td>
					 <td> ${(100 * (k[1] / sum)).toFixed(2)}%</td>
					 </tr>
					 `;
    return rowHtml;
};
function frequency(wordMap) {
    let sum = 0;
    for (const [key, value] of wordMap) {
        sum += value;
    }
    return sum;
}
function analyzeLetters(text){
  debugger;
  text = clean(text);
  text = text.replace(/[\W/]/g, '');
  let letters = text.split("");
  const letterMap = new Map();
  for(let p = 0; p < letters.length; p++){
    if(letterMap.has(letters[p])){
      letterMap.set(letters[p], letterMap.get(letters[p]) + 1);
    } else {
      letterMap.set(letters[p], 1);
    }
    let sum = lettersum(letterMap)
    let entries = letterMap.entries();
    let sortedEntries = Array.from(entries).sort((entrya, entryb) => entryb[1] - entrya[1]);
display(sum, sortedEntries);
  }
}
function lettersum(letterMap){
  let sum = 0;
  for(const [key,value] of letterMap){
    sum+= value;
  }
  return sum;
}
function clearStuff(){
	document.getElementById("out").innerHTML = ""
	document.getElementById("text").innerText = ""
}