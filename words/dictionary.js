function getDef(){
	let word = document.getElementById('input').value
	let bla = document.getElementById("out")
	fetchDefinition(word, bla)
}
function displayStuff(defs, bla, word){
	let blurgh = []
	/*for(let i = 0; i < defs.length; i++){
		blurgh.push(defs[i].definition)
		out.innerHTML = defs[i].definition + '\n'
	}*/
	//out.innerHTML = defs[0].definition;
	let tblHtml = `
						 <table style = text-align:center;">
						 <tr>
    <th><u>Definition</u></th> 
		<th><u>Part of Speech</u></th>
  </tr>`;
    for (const k of defs) {
        tblHtml += createRow(k);
    }
    tblHtml += `</table>`;
    bla.innerHTML = tblHtml;
}
const createRow = function (k) {
	let ha = ""
	let ex = ""
	if(typeof k.partofspeech == "object"){
		ha = "N/A";
	}else{
		ha = k.partofspeech
	}
	if(typeof k.example == "object"){
		ex = "N/A"
	}else{
		ex = k.example;
	}
    let rowHtml = `<tr>
					 <td> ${k.definition} </td>
					 <td> ${ha}</td>
					 <td> ${ex}</td>
					 </tr>
					 `;
    return rowHtml;
};
function fetchDefinition(word, bla){
	let urL = "https://www.abbreviations.com/services/v2/defs.php?uid=8054&tokenid=dPNeoYX3QbScHztq&format=json&word=" + word;

	fetch(urL) 
		.then(response => response.json())

		.then(res => {
			displayStuff(res.result, bla, word)
		})

		.catch(err => {
			console.log(err)
		})
	
}