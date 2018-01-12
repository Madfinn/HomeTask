var table = document.getElementById('star_table');
var stars = table.getElementsByTagName('img');
var url = '/collaboration';


//1.
table.addEventListener('click', function(event){
var req = new XMLHttpRequest();
var n = event.target.getAttribute('id');
var s = event.target.getAttribute('src') === "star_off.gif" ? 1 : 0;
var params = '/collabollaboration?n=99&s=1';
// "n=" + n + "&s=" + s;
req.open('GET', url);


  req.onreadystatechange = function(){
	if (req.readyState == 4 && req.status == 200) {
  		fireStar(req.responseText);
  	}	
  }
  req.send(params);
})

function fireStar(starStatus) {
	var arr = starStatus.split('');
	for (var i = 0; i < 100; i++) {
		stars[i].src = arr[i] === '0' ? "star_on.gif" : "star_off.gif";
	}
};



