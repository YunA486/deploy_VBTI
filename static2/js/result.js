function clip() {

	var url = '';
	var textarea = document.createElement("textarea");
	document.body.appendChild(textarea);
	url = window.document.location.href;
	textarea.value = url;
	textarea.select();
	document.execCommand("copy");
	document.body.removeChild(textarea);
	alert("URL이 복사되었습니다.")
}

function sharing() {
	window.open('http://www.facebook.com/sharer/sharer.php?u=https://www.naver.com/');
	// 서버 만들어서 u= 다음부터 넣기
}

