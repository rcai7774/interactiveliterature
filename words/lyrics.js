function getLyrics(){
	let title = document.getElementById("input").value
	let bla = document.getElementById("output")
	fetchLyrics(title, bla);
}
const fetchLyrics = function(title, bla){
	let uRL = "https://www.abbreviations.com/services/v2/lyrics.php?uid=8054&tokenid=dPNeoYX3QbScHztq&format=json&term="+title;
	
	fetch(uRL)
		.then(response => response.json())

		.then(res =>{
			display(res.result, title, bla);
		})
	}
function display(song, title, bla){
	let tblHTML = `<p><i>Here are the lyrics for ${title}:</i></p><ol>`

	for(const k of song){
		tblHTML+= createRow(k)
	}
	tblHTML += `</ol>`
	bla.innerHTML = tblHTML;
}
function createRow(k){
	let rowHTML = `<li>Song: <em>${k.song}</em><br>Artist: ${k.artist}<br>Song Link: <a href = ${k["song-link"]} target = self>${k["song-link"]}</a></li>`
	return rowHTML;
}