$(function() {
    function getTime() {
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        return date+' '+time;
    }

    const host = "wss://wss1.zavi.me";
    // const host = "ws://10.30.22.181:8080";
    // const host = "ws://127.0.0.1:8080"

    const connection = new WebSocket(host);

    connection.onopen = function() {
        console.log("Open websocket connection at:" + getTime());
    }

    // connection.close();
});