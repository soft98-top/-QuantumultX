/*
^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://g.justproxy.ml/soft98-top/-QuantumultX/raw/main/appstore.js
*/

var body = $response.body; 
var obj = JSON.parse(body); 
obj["receipt"]["in_app"][0]["expires_date_ms"] = "2919139200000";
obj["receipt"]["in_app"][0]["purchase_date_ms"] = "2919139200000";
body = JSON.stringify(obj);
$done({body});