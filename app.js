function somar() {
    var txt1 = document.getElementById('num1')
    var txt2 = document.getElementById('num2')
    var txt3 = Number(txt1.value)
    var txt4 = Number(txt2.value)
    var res = document.getElementById('res')
    var soma = txt3 + txt4
    res.innerHTML = `O resultado da soma é ${soma}.`
}
