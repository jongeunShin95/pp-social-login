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