# 로스트아크 니나브야시장 길드 전용 카카오톡 봇

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

---

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

#### 남은 작업

- 새로운 폰번호 생성 후 집에 안쓰는 갤럭시탭을 서버로 만들 예정
- JS 최신문법이 메신저봇R에 얼마나 통하는지 확인해보고.. 그거에 맞춰 소스 짜야할듯.. 테스트 필요
- 추가로 붙여야할 기능 리스트 뽑고 지속적으로 붙이기
- 히든 니나브 멘트 지속적으로 붙이기
