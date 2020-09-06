var isAnagram = function(s, t) {
    s = s.replace(/[\W/]/g, '');
		t = t.replace(/[\W/]/g, '');
		let sarray = s.split('');
		let tarray = t.split('');
		sarray = sarray.sort();
		tarray = tarray.sort();
		if(sarray == tarray){
			return true;
		}return false;
		
};