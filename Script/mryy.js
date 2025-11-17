/*
每日英语听力

[rewrite_local]
^https?:\/\/api\.esdict\.cn\/api\/v2\/auth\/UserInfo$ url script-response-body https://raw.githubusercontent.com/BOBOLAOSHIV587/Rules/main/JS/Github/JS/GithubPro.js

[mitm]
hostname = api.esdict.cn

*/
// let url = $request.url
let body = JSON.parse($response.body);
console.log('❌❌❌esdict response❌❌❌')
  
if (body) {
    body.istingvip = true;
    // 月会员
    //obj.tingvipendtime = "2025-12-04T06:29:40Z";
    //obj.tingviptype = "OrdinaryVip";
    // 永久会员
    body.tingvipendtime = "2099-10-31T12:34:56Z",
    body.tingviptype = "multiyearvip";

    $done({
        body: JSON.stringify(body)
    });
} else {
    $done();
}