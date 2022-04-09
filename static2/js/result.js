    

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
                title: '나의 채소 유형을 알아보자!',
                description: '나와 가장 어울리는 채소는?',
                imageUrl: 'https://drive.google.com/uc?id=1AXqxpqp7d_kr0ixFV0Z1aWWGOPttNZk_',
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
                    title: '결과 보기',
                    link: {
                        webUrl: result_url,
                        mobileWebUrl: result_url,
                    },
                },
                {
                    title: '테스트 하기',
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
