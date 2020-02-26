$('#buttonStart').click(function () {

    let openText = $('#openText').val();
    let key = $('#key').val();
    let cipherText = $('#cipherText').val();
    let N = $('#N').val();

    if (openText.length > 0)
        openToCrypt(key, openText, N);
    else
        cryptToOpen(key, cipherText, N);


});

function clearAllinput() {

    $('#openText').val("");
    $('#key').val("");
    $('#cipherText').val("");

}

$('input').keyup(function () {

 $(this).val($(this).val().replace(/[А-Яа-я!@#$%^&*()_?()-+=\sA-Z0-9]/, ''))
    

});

$('#N').keyup(function(){

if (Number.parseInt($(this).val()) > 26 || Number.parseInt($(this).val()) < 1){
	$(this).val(26);
	alert('Не больше 26 и не меьше 1');

}
});

function openToCrypt(key, text, N) {
    if (!(key.length > 0 && text.length > 0 && N.length > 0)) {
        alert('Не все поля заполнены');
        throw new Error('empty fields');
    }
    clearAllinput();
    $('h3').eq(1).find('span').text(gamma.encryption(text, key, N));

}

function cryptToOpen(key, text, N) {
    if (!(key.length > 0 && text.length > 0 && N.length > 0)){
        alert('Не все поля заполнены');
        throw new Error('empty fields');
    }
    clearAllinput();
    $('h3').eq(0).find('span').text(gamma.decryption(text, key, N));

}
