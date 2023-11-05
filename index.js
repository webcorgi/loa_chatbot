const scirptName = '고야호'
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
/* 231009 웹 구문 => 안드로이드구문으로 변경
const callApi = (url) => {
    return fetch(url,
        {
            method: 'GET',
            headers: {
                'accept': 'application/json',
                'authorization': 'bearer '+ apiKey,
            },
    })
}
*/
const callApi = (url) => {
    try{
        let response = org.jsoup.Jsoup.connect(url)
        .header("Authorization", "Bearer " + apiKey)
        .header("Content-Type", "application/json")
        .ignoreContentType(true)
        .get();

        let data = JSON.parse(response.text());
        return data
    }catch(err){
        console.log(err)
    }
}


/*********************************************************************************
 * 니나브 대사
*********************************************************************************/
const Ninav = [
    '날 믿어',
    '루페온이시여 우릴 지켜주세요',
    '모두에게 빛의 가호를',
    '모두 힘을 내',
    '파르쿠나스 이곳에 빛을 내려줘',
    '혼돈의 땅에 빛의 비를 !',
    '내가 지켜줄게 !',
    '전혀 성장하지 않았구나 쿠크세이튼 !',
]
const NinavPretty = [
    'ദ്ദി*ˊᗜˋ*) 칭찬 고마워. 너도 이뻐',
    '(｡♥‿♥｡) 고마워. 나도 이쁜거 알고 있어',
    'ଘ(੭ˊᵕˋ)੭* ੈ✩‧₊˚ 니가 말 안해도 이쁜거 이미 알아',
    '(๑•‿•๑) 이쁘다고 해줘서 고마워',
    '(๑ᵔ⩊ᵔ๑) 혼돈의 땅에 이쁜 나를 !',
]
const NinavCuty = [
    '( ˃ ⩌˂) 나 귀여워? ㅎㅎㅎㅎ',
    '(*˘◡˘*) 내가 귀엽다니 부끄럽네',
    '◝(・▿・)◜ 이 정도 귀여움은 기본인데 ?',
    'ദ്ദി⑉¯ ꇴ ¯⑉ ) 아이참 ~ 너두 너무 귀여워',
    '(￣▽￣)ノ 역시 넌 보는 눈이 있네. 난 너무 귀여워',
]

const callNinav = () => {
    const leng = Ninav.length
    const num = parseInt(Math.random()*leng)
    return Ninav[num]
}
const callNinavPretty = () => {
    const leng1 = NinavPretty.length
    const num1 = parseInt(Math.random()*leng1)
    return NinavPretty[num1]
}
const callNinavCuty = () => {
    const leng2 = NinavCuty.length
    const num2 = parseInt(Math.random()*leng2)
    return NinavCuty[num2]
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
        getTest(room, replier)
    }
    if (msg == callMark + '기능') {
        getAll(room, replier)
    }
    if (msg == callMark + '주간') {
        weeklyContent(room, replier)
    }
    if (msg.includes(callMark + '정보')) {
        let username = msg.split(' ')[1]
        characterInformation(room, replier, username)
    }
    if (msg.includes('/ㅂㅂㄱ')) {
        let callPrice = msg.split('/ㅂㅂㄱ')[1]
        auctionPrice(room, replier, callPrice)
    }
    if( msg == callMark + '모험섬' ){
        adventureIslandToday(room, replier)
    }

    /* 니나브 */
    if( msg.includes('/니나브') ){
        replier.reply(room, callNinav())
    }
    if (
        msg.includes('이쁨') ||
        msg.includes('이뻐') ||
        msg.includes('이쁘') ||
        msg.includes('이뻤') ||
        msg.includes('이쁜') ||
        msg.includes('예쁨') ||
        msg.includes('예뻐') ||
        msg.includes('예쁘') ||
        msg.includes('예쁜')
    ) {
        replier.reply(room, callNinavPretty())
    }
    if (
        msg.includes('귀염') ||
        msg.includes('귀엽') ||
        msg.includes('커여') ||
        msg.includes('귀여') ||
        msg.includes('기여') ||
        msg.includes('커엽')
    ) {
        replier.reply(room, callNinavCuty())
    }
}


/******************************
    @title 전체 제작 기능 목록

    @name 기능
    @function getAll

    @name 주간컨텐츠(도가토/도비스)
    @function weeklyContent
    
    @name 정보(캐릭터)
    @function characterInformation

    @name 경매가(분배금)
    @function auctionPrice
******************************/

function getTest(room, replier){
    replier.reply(room, '테스트\n\n테스트입니다')
}

/*****************************
    @name 기능
    @function getAll
    @description 봇의 전체 기능 확인하기. 그냥 배열에 수동적으로 넣어서 뿌려주는거임.
*****************************/
const fn = [
    '★봇 전체기능',
    callMark+'니나브',
    callMark+'주간',
    callMark+'정보 아이디',
    callMark+'모험섬',
]
function getAll(room, replier){
    const combinedText = fn.map(item => item).join(SP);
    replier.reply(room, combinedText)
}

/*****************************
    @name 주간컨텐츠(도가토/도비스)
    @function weeklyContent
    @description
    - 주간컨텐츠인 도가토, 도비스 정보
    - LOA API 정보 긁어옴
*****************************/
function weeklyContent(room, replier){
    const url1 = "https://developer-lostark.game.onstove.com/gamecontents/challenge-guardian-raids"
    const url2 = "https://developer-lostark.game.onstove.com/gamecontents/challenge-abyss-dungeons"

    let data1 = callApi(url1)
    let data2 = callApi(url2)

    const text = 
        '★주간컨텐츠' + SP + SP +
        '[도가토1] ' + data1.Raids[0].Name + ',' +  SP +
        '[도가토2] ' + data1.Raids[1].Name + ',' +  SP +
        '[도가토3] ' + data1.Raids[2].Name + SP + SP +
        '[도비스1] ' + data2[0].Name+ ',' +  SP +
        '[도비스2] ' + data2[1].Name;
    
    replier.reply(room, text)
}



/*****************************
    @name 정보(캐릭터)
    @function characterInformation
    @description 로아 캐릭터 정보
*****************************/
function characterInformation(room, replier, username) {
    var defaultUrl = 'https://developer-lostark.game.onstove.com';
    var encodedName = encodeURIComponent(username);
    var url = defaultUrl + '/characters/' + encodedName + '/siblings';

    var data = callApi(url);

    var text = '';
    var serverData = {}; // Create an object to group data by ServerName

    for (var i = 0; i < data.length; i++) {
        var currentServerName = data[i].ServerName;
        
        if (!serverData[currentServerName]) {
            serverData[currentServerName] = []; // Initialize an array for each unique ServerName
        }

        // Remove commas from ItemAvgLevel
        var itemAvgLevel = data[i].ItemAvgLevel.split(',').join('');

        serverData[currentServerName].push({
            CharacterClassName: data[i].CharacterClassName,
            CharacterName: data[i].CharacterName,
            ItemAvgLevel: parseFloat(itemAvgLevel).toFixed(0)
        });
    }

    for (var serverName in serverData) {
        if (serverData.hasOwnProperty(serverName)) {
            // Sort the array of characters for each server based on ItemAvgLevel in descending order
            serverData[serverName].sort(function (a, b) {
                return b.ItemAvgLevel - a.ItemAvgLevel;
            });

            text += '★' + serverName + SP + SP;
            
            for (var j = 0; j < serverData[serverName].length; j++) {
                var character = serverData[serverName][j];
                text += '[' + character.CharacterClassName + '] ' + SP + 
                        character.CharacterName + ' / ' +
                        character.ItemAvgLevel + '레벨' + SP + SP;
            }
        }
    }
    
    text = text.trim();
    replier.reply(room, text);
}



/*****************************
    @name 경매가(분배금)
    @function auctionPrice
    @description 경매 입찰 최적가 (4인, 8인)
*****************************/
function auctionPrice(room, replier, callPrice){

    const cal_4 = (p) => {
        return Math.floor(p * 0.95 * (3.0 / 4.0));
    } 
    const cal_8 = (p) => {
        return Math.floor(p * 0.95 * (7.0 / 8.0))
    }
    
    if (isNaN(cal_4(callPrice))) {
            replier.reply(room, "금액 정확히 입력해'줘'");
    }else{
        let text = 
            '[4인 입찰최적가]' + SP +
            cal_4(callPrice) + '원' + SP + SP +
            '[8인 입찰최적가]' + SP +
            cal_8(callPrice) + '원';  

        replier.reply(room, text); 
    }
    
}



/*****************************
    @name 모험섬
    @function adventureIslandToday
    @description 프로키온의 나침반 (모험섬)
*****************************/
const kloaUrl = 'https://kloa.gg/'

const callApiByIsland = (url) => {
    try{
        let response = org.jsoup.Jsoup.connect(url)
        .header("Authorization", "Bearer " + apiKey)
        .header("Content-Type", "application/json")
        .ignoreContentType(true)
        .get();

        let cards = response.select("div[id='schedule-box_cards']")
        let jsonArray = null;

        cards.forEach((card, i) => {
            let labels = card.select('label')
            let spans = card.select('span')

            if( labels.size() > 4 ){
                let label1 = labels.get(0).text()
                let label2 = labels.get(1).text()
                let label3 = labels.get(2).text()
                let label4 = labels.get(3).text()
                let label5 = labels.get(4).text()
                let label6 = labels.get(5).text()
                let span1 = spans.get(0).text()
                let span2 = spans.get(1).text()
                let span3 = spans.get(2).text()
                let span4 = spans.get(3).text()
                let span5 = spans.get(4).text()
                let span6 = spans.get(5).text()
                jsonArray = [
                    [label1 + ': ' + span1],
                    [label2 + ': ' + span2],
                    [label3 + ': ' + span3],
                    [label4 + ': ' + span4],
                    [label5 + ': ' + span5],
                    [label6 + ': ' + span6],
                ]
            }else{
                let label1 = labels.get(0).text()
                let label2 = labels.get(1).text()
                let label3 = labels.get(2).text()
                let span1 = spans.get(0).text()
                let span2 = spans.get(1).text()
                let span3 = spans.get(2).text()
                jsonArray = [
                    [label1 + ': ' + span1],
                    [label2 + ': ' + span2],
                    [label3 + ': ' + span3]
                ]
            }
        });

        return jsonArray;
    }catch(err){
        console.log(err)
    }
}

function adventureIslandToday(room, replier){
    const data = callApiByIsland(kloaUrl)

    let text = ''
    if( data.length > 4 ) { // 주말 오전3개, 오후3개
        text = 
            '[오늘의 모험섬]' + SP + 
            '오전★' + SP +
            data[0] + SP + 
            data[1] + SP + 
            data[2] + SP + SP + 
            '오후★' + SP +
            data[3] + SP + 
            data[4] + SP + 
            data[5]
    }else{ // 평일 3개
        text = 
        '[오늘의 모험섬]' + SP + 
        data[0] + SP + 
        data[1] + SP + 
        data[2] 
    }
    replier.reply(room, text);
}