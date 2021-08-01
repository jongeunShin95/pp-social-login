# &#10000; 개요

node, react, mongodb로 OAuth를 이용해 소셜로그인 구현해보기

# &#10004; 0725
* react-google-login을 이용해 로그인 시 token 받아옴<br />

# &#10004; 0726
* react에서 받은 값을 노드로 전송 후 로컬스토리지에 값 저장<br />
* node에서는 받은 값으로 db에 계정이 없다면 저장시키는거 해야함<br />

# &#10004; 0728
* 서버에 mongodb 연결<br />
* 서버에서 email을 통해 중복확인하고 없다면 db에 profileObj 전체를 저장<br />
* db query 부분은 따로 빼는 것도 해보기<br />

# &#10004; 0730
* 서버에 token 인증 관련 미들웨어 작성<br />
* 클라이언트에서 token을 이용한 api 요청 작성<br />
* 로그인 유무에 따라 api 호출 테스트 완료<br />

로그인 x<br />
---
<img src="https://user-images.githubusercontent.com/20867824/127691188-889ddeff-5620-4c68-9731-3a8268c33434.png">

로그인 o<br />
<<<<<<< HEAD
<img src="https://user-images.githubusercontent.com/20867824/127691374-a2f3a3c4-eee6-47b8-94e1-7dc2e03dd7a3.png">

# &#10004; 0801(완료)
* 로그아웃 기능 완료<br />