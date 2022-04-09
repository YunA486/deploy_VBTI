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
	window.open('http://www.facebook.com/sharer/sharer.php?u=https://vbti.herokuapp.com/result/<int:vegetable_id>');
	// 서버 만들어서 u= 다음부터 넣기
}

import Kakao from '@/common/plugins/kakao.min'

// SDK init
if (!Kakao.isInitialized()) {
	Kakao.init('38b66d063cf7a54f727a919e785ee441')
}

// createDefaultButton 함수 호출
Kakao.Link.createDefaultButton({
	container: '.kakao_share',
	objectType: 'commerce',
	content: {
		   title: param.title,
		   imageUrl,
		   imageWidth,
		   imageHeight,
		   link: {
			 mobileWebUrl: param.shareUrl,
			 webUrl: param.shareUrl
		   }
	 },
	 commerce: {
		   regularPrice: param.regularPrice,
		   discountPrice: param.discountPrice,
		   discountRate: param.discountRate
	 },
	 buttons: [
		   {
			 title: '구매하기',
			 link: {
			   mobileWebUrl: param.shareUrl,
			   webUrl: param.shareUrl
			 }
		   }
	 ]
})

// const kakaoShare = document.querySelector('.kakao_share');
// kakaoShare.init('38b66d063cf7a54f727a919e785ee441');
