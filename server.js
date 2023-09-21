const axios = require("axios");
require("dotenv").config();

// KakaoTalk API 설정
const KAKAO_API_KEY = process.env.KAKAO_API_KEY;

// 로스트아크 API 설정
const LOSTARK_API_URL = "https://api.lostark.game.onstove.com/";

function sendKakaoMessage(roomId, message) {
  const headers = {
    Authorization: `Bearer ${KAKAO_API_KEY}`,
  };

  const data = {
    object_type: "text",
    text: message,
  };

  axios
    .post(`https://kapi.kakao.com/v1/api/talk/rooms/${roomId}/send`, data, {
      headers,
    })
    .then((response) => {
      console.log("메시지 전송 성공");
    })
    .catch((error) => {
      console.error("메시지 전송 실패:", error.message);
    });
}

function getLostarkServerStatus() {
  axios
    .get(`${LOSTARK_API_URL}lostark/v1/servers/status`)
    .then((response) => {
      const serverStatus = response.data.serverStatus;
      sendKakaoMessage(roomId, `로스트아크 서버 상태: ${serverStatus}`);
    })
    .catch((error) => {
      console.error("서버 상태를 가져올 수 없음:", error.message);
    });
}

const roomId = "채팅방_ID_입력";

// KakaoTalk 채팅방에 봇 입장 메시지 전송
sendKakaoMessage(roomId, "안녕하세요! 로스트아크 봇입니다.");

// 로스트아크 서버 상태 가져오기
getLostarkServerStatus();
