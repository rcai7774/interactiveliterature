function isPalindrome(text) {
    text = text.toLowerCase().replace(/[\W\_/]/g, '');
		if(text.split('').reverse().join('') == text){
			document.getElementById("out").innerHTML = ("It is a palindrome");
		}else
		{document.getElementById("out").innerHTML = ("It is not a palindrome");}
};