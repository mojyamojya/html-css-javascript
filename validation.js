const btn = document.getElementById("btn");
btn.addEventListener("click", function (event) {
    event.preventDefault();
    const elem1 = document.getElementById("name");
    if (elem1.value === "") {
        const message1 = document.getElementById("message1");
        message1.innerHTML = "お名前を入力してください。";
    }
    const elem2 = document.getElementById("email");
    if (elem2.value === "") {
        const message2 = document.getElementById("message2");
        message2.innerHTML = "メールアドレスを入力してください。";
    }
    const elems = document.getElementsByName("lang");
    let isSet = false;
    for (let i = 0; i < elems.length; i++) {
        if (elems[i].checked) {
            isSet = true;
            break;
        }
    }
    if (!isSet) {
        const message5 = document.getElementById("message5");
        message5.innerHTML = "言語を選択してください。";
    }
});

