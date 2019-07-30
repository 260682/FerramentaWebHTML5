function mudaFoto(foto) {
    document.getElementById("icone").src = foto;

}
var form = document.getElementById('fContato');

if (form.addEventListener) {
    form.addEventListener("onsubmit", validaCadastro);

} else if (form.attachEvent) {
    form.attacheEvent("onsubmit", validaCadastro);

}
function calc_total() {
    var qtd = parseInt(document.getElementById('cQtd').value);
    tot = qtd * 1500;
    document.getElementById('cTot').value = tot;
}