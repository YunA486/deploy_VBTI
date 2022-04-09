    

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
        window.open('http://www.facebook.com/sharer/sharer.php?u=https://vbti.herokuapp.com');
    }

    /////// 카카오 공유 코드 ////////

    const kakaoShare = document.querySelector('.kakao_share');
    Kakao.init('9ef5fd5191a3ac8e7b7aa5f50f401200');
    Kakao.isInitialized();

    function sendLink() {
        let result_url = window.location.href;
        Kakao.Link.sendDefault({
            objectType: 'feed',
            content: {
                title: '나의 개발 유형은?',
                description: '나에게 꼭 맞는 개발 유형을 알아보자!!',
                imageUrl: 'https://mbit.weniv.co.kr/static/img/mbit_thumbnail.png',
                link: {
                    mobileWebUrl: 'https://vbti.herokuapp.com',
                    webUrl: 'https://vbti.herokuapp.com',
                },
            },
            social: {
                likeCount: 286,
                commentCount: 45,
                sharedCount: 845,
            },
            buttons: [{
                    title: '결과 보러가기',
                    link: {
                        webUrl: result_url,
                        mobileWebUrl: result_url,
                    },
                },
                {
                    title: '테스트 하러가기',
                    link: {
                        webUrl: 'https://vbti.herokuapp.com',
                        mobileWebUrl: 'https://vbti.herokuapp.com',
                    },
                },
            ],
        });
    }

    /////// 카카오 공유 코드 끝 ////////

    /////// 카카오 공유 코드 ////////

    kakaoShare.addEventListener('click', sendLink)
