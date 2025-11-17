/*
pllykann
// Surge
//
[Script]
pollykann = type=http-response,pattern=^https?://api\.pollykann\.com/(account|media)(\?.*)?$,requires-body=1,max-size=0,debug=0,script-path=/Users/wing/Documents/Surge/Script/pollykann.js


[MITM]
hostname = %APPEND% api.pollykann.com, api.esdict.cn

*/
var url = $request.url
 // Update Body
var body = JSON.parse($response.body);
console.log('❌❌❌pollykann response❌❌❌',url)
  // body["new-key"] = "Proxyman";
  // response.body = body;

// Or map a local file as a body
// response.bodyFilePath = "~/Desktop/myfile.json"
// 4. 定义需要匹配的 URL 路径 (已还原)
const vip = "/account"; // 匹配账户信息/VIP 状态的路径
const vip2 = "/media";   // 匹配媒体/内容购买状态的路径


// 检查 URL 是否包含 "/account" 路径 (通常是获取 VIP 状态的接口)
if (url.indexOf(vip) != -1) { 
    // 修改 VIP 状态数据 (填充一个极长的 VIP 有效期)
    body.data.pollykannVipState = {
        "vipEndTime": "9999-12-27 20:49:34",
        "vipEndTimestamp": 253392455349000, // 9999年时间戳
        "vipStartTimestamp": 1703422174000
    };
}

// 检查 URL 是否包含 "/media" 路径 (通常是检查内容是否已购买的接口)
if (url.indexOf(vip2) != -1) { 
    body.data.isPurchased = true;
}
  
$done({
    body: JSON.stringify(body)
});