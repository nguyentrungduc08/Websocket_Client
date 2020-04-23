$(function() {
    function getTime() {
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        return date+' '+time;
    }

    // const host = "ws://10.30.22.181:8080";
    // const host = "ws://127.0.0.1:8080"

    const connection = new WebSocket(host);

    connection.addEventListener("open", function(event) {
        console.log("Connect success");
    });

    connection.addEventListener("close", function(){
        console.log("Connection closed")
    });

    connection.addEventListener("message", function(msg) {
        // try to parse JSON message. Because we know that the server always returns
        // JSON this should work without any problem but we should make sure that
        // the massage is not chunked or otherwise damaged.
        try {
            var json = JSON.parse(msg);
            connection.log("Resp json data: " + json);
        } catch (e) {
            console.log('Response data: ' + JSON.stringify(msg));
            return;
        }
        $('#cmd').val("");
    });

    $('#btn-sendCmd').click(function() {
        let cmd = $('#cmd').val();
        connection.send(cmd);
    });

    $('#btn-connect').click(function() {
        console.log("Established websocket connection: " + host);
        if (connection.readyState != WebSocket.CLOSED) {
            console.log("Websocket connection has been established to " + host);
        }
        connection = new WebSocket(host);
    });

    $('#btn-close').click(function() {
        console.log("State websocket connection: " + connection.readyState);
        if (connection.readyState != WebSocket.CLOSED) {
            connection.close();
        }
    });
});