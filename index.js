/*********************************************************************************
 * LOA API 정보
 * 분당 100회 호출가능. 길드내 사용 용도라면 사실상 무제한. 그리고 무료.
 * 현재 키 외에 한 계정당 최대 5개까지 KEY 생성 가능.
 * 로아에 한도초과해제 요청 가능함.
*********************************************************************************/
const apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyIsImtpZCI6IktYMk40TkRDSTJ5NTA5NWpjTWk5TllqY2lyZyJ9.eyJpc3MiOiJodHRwczovL2x1ZHkuZ2FtZS5vbnN0b3ZlLmNvbSIsImF1ZCI6Imh0dHBzOi8vbHVkeS5nYW1lLm9uc3RvdmUuY29tL3Jlc291cmNlcyIsImNsaWVudF9pZCI6IjEwMDAwMDAwMDAzMzYyODkifQ.DrLSiETKB122vIjiFKFV2LPomFxp-iP-5RQD6SpEVhblc5AzGVmHdDoX2uhig9Et2DVgDYWBccfh61Z3gbARfWrGfeFlzVmlBrMnZD8AIkdhgHiH6xc3Wfgx6Q2dMlCkQ-EP2fqmsrqSviMh-l0yqZW5ZA6SeAj9qA8WVhbba53Jh27Z8gwls1-We8rod__JSpkXh1s-16kZqXlYRytpSJ5n6vFgQPK1oOobJtLlyAVLpyq3YiyLboboVXTDAMbLf4fSVguGWtCSMGp4zKuU6JoGhpkuquWbcocPrPyzRU9wd_C4CKXvoBF1NsBLMZeL8h3LR2pvraiBosGq5C7W3w'
const callMark = '/'
const SP = '\n' // 다음 줄로 넘기기 (Spacing)

// API
const callApi = (url) => {
    return fetch(url,
        {
            method: 'GET',
            headers: {
                'accept': 'application/json',
                'authorization': `bearer ${apiKey}`,
            },
    })
}


/*********************************************************************************
    ※ 메신저봇R 파라미터 정보
        string room: 방 이름
        string msg: 메시지 내용
        string sender: 전송자 이름
        boolean isGroupChat: 단체채팅방 여부
        SessionCacheReplier replier: 채팅방의 정보를 담고 있으며, 알림을 받은 채팅방으로 답장을 할 수 있도록 하는 객체
        - replier.reply(방_이름, 메시지, hideToast = false) 특정 방에 메시지를 보냄.
            hideToast는 아직 정보를 얻지 못한 채팅방으로 전송하려고 할 때 발생하는 토스트 경고 메시지를 생략할것인지에 대한 여부, 기본값은 false
        - replier.reply(메시지) replier가 담고 있는 채팅방에 메시지를 보냄.
        ImageDB imageDB: 이미지 정보를 담고 있는 객체(후술)
        string packageName: 알림을 띄운 메신저앱의 패키지 이름 (예컨대, 카카오톡의 경우 com.kakao.talk)
 *********************************************************************************/

function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
    if (msg == callMark + '테스트') {
        getTest(replier)
    }
    if (msg == callMark + '기능') {
        getAll(replier)
    }
    if (msg == callMark + '도가토') {
        getGuardianraids(replier)
    }
    if (msg == callMark + '도어던') {
        getAbyssdungeons(replier)
    }
}


/******************************
    @title 전체 제작 기능 목록

    @name 기능
    @function getAll

    @name 도가토
    @function getGuardianraids

    @name 도어던
    @function getAbyssdungeons
******************************/

function getTest(replier){
    replier.reply(`테스트\n\n테스트입니다`)
    // replier.reply(`테스트${S}${S}테스트입니다`)
}

/*****************************
    @name 기능
    @function getAll
    @description 봇의 전체 기능 확인하기. 그냥 배열에 수동적으로 넣어서 뿌려주는거임.
*****************************/
const fn = [
    callMark+'도가토',
    callMark+'도어던',
]
function getAll(replier){
    const combinedText = fn.map(item => item).join(SP);
    replier.reply(combinedText)
}

/*****************************
    @name 도가토
    @function getGuardianraids
    @description
    - 주간컨텐츠인 도전 가디언 토벌 정보
    - LOA API 정보 긁어옴
*****************************/
function getGuardianraids(replier){
    const url = "https://developer-lostark.game.onstove.com/gamecontents/challenge-guardian-raids"

    callApi(url)
        .then(response => response.json())
        .then(data => {
            const text = `
                던전1: ${data.Raids[0].Name}, ${SP}
                던전2: ${data.Raids[1].Name}, ${SP}
                던전3: ${data.Raids[2].Name}, ${SP}
            `
            replier.reply(text)
        })
        .catch(error => {
            console.error('Error fetching data:', error)
        })
}

/*****************************
    @name 도어던
    @function getAbyssdungeons
    @description
    - 주간컨텐츠인 도전 어디스 던전 정보
    - LOA API 정보 긁어옴
*****************************/
function getAbyssdungeons(replier){
    const url = "https://developer-lostark.game.onstove.com/gamecontents/challenge-abyss-dungeons"

    callApi(url)
        .then(response => response.json())
        .then(data => {
            const text = `
                던전1: ${data[0].Name} ${SP}
                보상아이템: [${data[0].RewardItems[0].Grade}] ${data[0].RewardItems[0].Name},
                [${data[0].RewardItems[1].Grade}] ${data[0].RewardItems[1].Name},
                [${data[0].RewardItems[2].Grade}] ${data[0].RewardItems[2].Name},
                [${data[0].RewardItems[3].Grade}] ${data[0].RewardItems[3].Name},
                [${data[0].RewardItems[4].Grade}] ${data[0].RewardItems[4].Name}
                ${SP}
                ${SP}
                던전2: ${data[1].Name} ${SP}
                보상아이템: [${data[1].RewardItems[0].Grade}] ${data[1].RewardItems[0].Name},
                [${data[1].RewardItems[1].Grade}] ${data[1].RewardItems[1].Name},
                [${data[1].RewardItems[2].Grade}] ${data[1].RewardItems[2].Name},
                [${data[1].RewardItems[3].Grade}] ${data[1].RewardItems[3].Name},
                [${data[1].RewardItems[4].Grade}] ${data[1].RewardItems[4].Name}
            `
            replier.reply(text)
        })
        .catch(error => {
            console.error('Error fetching data:', error)
        })
}