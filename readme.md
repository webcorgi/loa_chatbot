# 로스트아크 니나브야시장 길드 전용 카카오톡 봇

<details>
<summary>정보수집</summary>
<div markdown="1">

## 알아낸 정보

1. 챗봇은 방장봇 / 메신저봇 / 카카오톡 챗봇 세 부류로 나뉜다. 내가 만들어야할 것은 메신저봇임 (카카오톡 챗봇은 유사기능은 되지만 오픈채팅방으로 초대가 안되는듯 ?)
2. 메신저봇은 카카오톡 부계정으로 제작된다. (새로운 폰번호를 생성하거나, 해외번호를 만들어서 카카오톡 계정 만들어야함)
3. 봇을 쉽게 만들어주는 특정 앱들이 있는 것으로 확인. 자바스크립트로 response 값을 작성하면 1시간 컷인듯

#### 카카오 챗봇 만들기

- 챗봇 관리자센터
  https://i.kakao.com/docs/tutorial-chatbot-key-features#%EC%83%88%EB%A1%9C%EC%9A%B4-%EB%B4%87-%EB%A7%8C%EB%93%A4%EA%B8%B0
- 소개: https://business.kakao.com/info/chatbot/
- 방법(공식 튜토리얼): https://chatbot.kakao.com/docs/getting-started-setup#step-1-%EC%B9%B4%EC%B9%B4%EC%98%A4-%EA%B3%84%EC%A0%95%EC%97%90%EC%84%9C-%ED%9A%8C%EC%9B%90%EA%B0%80%EC%9E%85-%ED%81%B4%EB%A6%AD
- 챗봇 상세 사용법: https://www.youtube.com/watch?v=fIRkVPJGTc8

#### 메신저봇 만들기

- 메신저봇 제작: https://quantrader.tistory.com/104

#### 로아 API

- https://developer-lostark.game.onstove.com/

#### 메신저봇R

- https://omble-blog.tistory.com/5

#### 니나브멘트용 특수문자 이모티콘

- https://snskeyboard.com/emoticon/

#### 안드로이드용 비동기 소스 참고

- 기본사용 https://quantrader.tistory.com/128
- 상세사용 https://partnerjun.tistory.com/42

</div>
</details>

---

#### 버전 표현 기준?

- 일반 수정할 경우 +0.0.1 추가
- 기능 하나 추가할 경우 +0.1.0 추가

---

<details>
<summary>v1.0.0 최초출시</summary>
<div markdown="1">

## v1.0.0 최초출시

#### 2023-09-30

- 새로운 휴대폰 번호를 이용해 카카오톡 봇계정 만듦
- 메신저봇R 사용법 확인 완료
- 실제 카톡에서 봇 응답테스트 완료

---

#### 2023-10-04

- 로아 API 키발급 및 사용테스트 완료 (분당 100회 호출가능. 사실상 무제한 & 무료)
- 도가토 & 도비스 정보 가져와지는 것 확인함
- 봇 컨셉 => 니나브
- 히든 니나브 멘트 제작

---

#### 2023-10-08

- 비동기가 먹히지 않는다 ?
- JS문법이지만 앱이라서 안드로이드 구문으로 해야하는건가 추측중 => 완료함. android용 비동기 소스 찾음. 참고: https://quantrader.tistory.com/128

#### 2023-10-09

- /정보 (캐릭터정보) 작업.
- 분배금 작업.
- 구형문법(ES6이전)으로 사용해야한다. 화살표함수같은 일부최신문법은 적용되는데, 기본적으로 ES6 이전의 구형문법에 맞춰 작업해야 동작되는 것으로 확인.

</div>
</details>

---

<details>
<summary>v1.0.1</summary>
<div markdown="1">

## v1.0.1

empty

</div>
</details>
