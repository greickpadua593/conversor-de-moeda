let reais = document.getElementById('mreal');
let dollar = document.getElementById('mdoll')
let botao = document.getElementById('botao')
let resultado = document.getElementById('resultado')





botao.onclick = () => {
    let valorReal= reais.value.trim()
    let realFormatado = valorReal.replace( ",", ".");
    if(valorReal == "" || isNaN(realFormatado)){
        alert("Digite um valor valido")
        return
    }

 let vlrdolar =  4.91;

 let conversao = Number(realFormatado) / vlrdolar
    

 resultado.innerText = `O resultado é ${conversao.toFixed(2)} `
}


