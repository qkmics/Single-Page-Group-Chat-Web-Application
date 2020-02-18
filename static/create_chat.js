var username = "";

function create_chat() {
    var username = document.getElementById("create_chat").value;
    console.log(username);
    window.username = username;
    // localStorage.setItem("username",username);

    var oReq = new XMLHttpRequest();
    oReq.open("POST", "/api/create");
    oReq.addEventListener("load", create_chat_success);
    // oReq.open("POST", ""+keyword+"&count=12");
    // oReq.setRequestHeader("Ocp-Apim-Subscription-Key","a5d9d1bfbba4442d98e393b08e2e9c2f");
    oReq.send(username);

/*    var getReq = new XMLHttpRequest();
    getReq.open("GET", "/api/132");
    getReq.addEventListener("load", get_chat_success);
    // oReq.open("POST", ""+keyword+"&count=12");
    // oReq.setRequestHeader("Ocp-Apim-Subscription-Key","a5d9d1bfbba4442d98e393b08e2e9c2f");
    getReq.send();*/
}

// chat_id = '0';

function create_chat_success() {
    console.log(this.responseText);
    var create_success_board = document.getElementById("create_chat_success");
    var text = JSON.parse(this.responseText);
    create_success_board.innerText = "Create success, chat id is " +  text["chat_id"];
    create_success_board.innerText += " Magic link is: " +  text["magic_invite_link"];
    var chat_id = text["chat_id"];
    var session_token = text["session_token"];
    // localStorage.setItem("chat_id",chat_id);
    // localStorage.setItem("session_token",session_token);
    // localStorage.setItem(chat_id,{"session_token":session_token, "usernmae":window.username});
    localStorage.setItem(chat_id+" session_token",session_token);
    localStorage.setItem(chat_id+" username",window.username);

    var url = "/chat/"+chat_id;
    location.replace(url);
}
/*
function get_chat_success() {
    console.log(this.responseText);
    var url = "/chat/"+chat_id;
    location.replace(url);
}*/

