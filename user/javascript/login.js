let id, pw, login, result;
window.onload = function () {
    id = document.querySelector(".id");
    pw = document.querySelector(".pw");
    login = document.querySelector(".login");
    result = document.querySelector(".result");

    login.addEventListener('click', login_func);
}

function login_func() {
    if (id.value == "yy034" && pw.value == 990710) {
        alert("로그인 되었습니다.");
    } else if (id.value == "yy034" && pw.value != 990710)
        alert("비밀번호를 확인해주세요");
    else if (id.value != "yy034" && pw.value == 990710)
        alert("아이디를 확인해주세요");
    else
        alert("로그인에 실패하였습니다.");
}