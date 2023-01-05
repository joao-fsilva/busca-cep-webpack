export default class IndexController
{
    constructor() {
        this.find()
    }

    async find() {
        document.getElementById('botao-buscar').addEventListener("click", async ev => {
            let cep = document.getElementById('cep').value
            cep = cep.replace(/\D/, '').trim()

            if (cep === '') {
                alert('CEP inválido.')
                return ;
            }

            const resultado = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
            const resultadoJson = await resultado.json()

            document.getElementById('bairro').textContent = resultadoJson.bairro
            document.getElementById('cepResultado').textContent = resultadoJson.cep
            document.getElementById('complemento').textContent = resultadoJson.complemento
            document.getElementById('ddd').textContent = resultadoJson.ddd
            document.getElementById('localidade').textContent = resultadoJson.localidade
            document.getElementById('logradouro').textContent = resultadoJson.logradouro
            document.getElementById('uf').textContent = resultadoJson.uf
        });
    }
}