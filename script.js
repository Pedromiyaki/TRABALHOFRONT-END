document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const nomeInput = document.getElementById("nome");
    const emailInput = document.getElementById("email");
    const telefoneInput = document.getElementById("telefone");
    const userList = document.getElementById("userList");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita o envio do formulário por enquanto
        if (validarFormulario()) {
            const usuario = {
                nome: nomeInput.value,
                email: emailInput.value,
                telefone: telefoneInput.value
            };

            adicionarUsuario(usuario);
            limparCampos();
        } else {
            alert("Por favor, preencha os campos corretamente.");
        }
    });

    function validarFormulario() {
        // Regex para validar e-mail
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // Regex para validar telefone no formato (XX) XXXX-XXXX ou (XX) XXXXX-XXXX
        const regexTelefone = /^\(\d{2}\) \d{4,5}-\d{4}$/;
        // Regex para validar nome sem caracteres especiais
        const regexNome = /^[A-Za-z\u00C0-\u017F\s]+$/; // Aceita letras acentuadas

        return validarCampo(nomeInput, regexNome) &&
            validarCampo(emailInput, regexEmail) &&
            validarCampo(telefoneInput, regexTelefone);
    }

    function validarCampo(input, regex) {
        return regex.test(input.value.trim());
    }

    function adicionarUsuario(usuario) {
        const itemLista = document.createElement("li");
        itemLista.textContent = `Nome: ${usuario.nome}, E-mail: ${usuario.email}, Telefone: ${usuario.telefone}`;
        userList.appendChild(itemLista);
    }

    function limparCampos() {
        nomeInput.value = "";
        emailInput.value = "";
        telefoneInput.value = "";
    }
});