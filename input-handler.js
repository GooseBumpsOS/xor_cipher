$('#buttonStart').click(function () {

    let openText = $('#openText').val();
    let key = $('#key').val();
    let cipherText = $('#cipherText').val();

    if (openText.length > 0)
        openToCrypt(key, openText, languageTest(openText, key));
    else
        cryptToOpen(key, cipherText, languageTest(cipherText, key));


});

function clearAllinput() {

    $('#openText').val("");
    $('#key').val("");
    $('#cipherText').val("");

}

function languageTest(text) {

    if ((text.search(/[а-яА-Я]+/gu) !== -1 && text.search(/[a-zA-Z]+/gu) !== -1)) {

        alert('Некорректный ввод');
        clearAllinput();
        throw new Error('Некорректный ввод. Встретились два типа языка');

    }

    if (text.search(/[a-zA-Z]+/gu) !== -1)
        return 'en';
    else
        return 'ru';


}

function openToCrypt(key, text, lang) {
    if (!(key.length > 0 && text.length > 0)) {
        alert('Не все поля заполнены');
        throw new Error('empty fields');
    }
    clearAllinput();

}

function cryptToOpen(key, text, lang) {
    if (!(key.length > 0 && text.length > 0)){
        alert('Не все поля заполнены');
        throw new Error('empty fields');
    }
    clearAllinput();

}
