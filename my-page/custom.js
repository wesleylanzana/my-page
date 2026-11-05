
/*
function toggleTheme() {
    const body = document.body;
    const button = document.getElementById('btnSwitchTheme');
    
    body.classList.toggle('light-theme');
    
    if (body.classList.contains('light-theme')) {
        button.value = 'Tema Claro';
    } else {
        button.value = 'Tema Escuro';
    }
}


document.getElementById('btnSwitchTheme').addEventListener('click', toggleTheme);
*/

/*navbar mais lento ao rolar*/

window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

/*Function clicou copiou*/
function copiarEmail() {

    const email = "wesley.lanzana@gmail.com";

    navigator.clipboard.writeText(email).then(() => {

        const toast = document.getElementById("toast");

        toast.classList.add("show");

        setTimeout(function () {
            toast.classList.remove("show");
        }, 2000);

    });

}

//Página de dataset
function copiarCodigo(botao) {

    const code = botao.nextElementSibling.innerText;

    navigator.clipboard.writeText(code);

    botao.innerHTML = "✔ Copiado";

    setTimeout(() => {
        botao.innerHTML = '<i class="fa-regular fa-copy"></i> Copiar';
    }, 2000);
}


/* Gerador de Datasets Fluig */
function validarConfiguracao() {
    const datasetName = document.getElementById("datasetName");
    const datasetType = document.getElementById("datasetType");

    const name = datasetName.value.trim();
    const type = datasetType.value;

    if (!name) {
        alert("Informe o nome do dataset.");
        datasetName.focus();
        return false;
    }

    if (!/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(name)) {
        alert("Informe um nome válido para o dataset.");
        datasetName.focus();
        return false;
    }

    if (!type) {
        alert("Selecione o tipo de dataset.");
        datasetType.focus();
        return false;
    }

    return true;
}

function avancarEtapa() {
    if (!validarConfiguracao()) {
        return;
    }

    document.getElementById("step1").hidden = true;
    document.getElementById("step2").hidden = false;
}

function voltarEtapa() {
    document.getElementById("step2").hidden = true;
    document.getElementById("step1").hidden = false;
}


function adicionarColuna() {
    const container = document.getElementById("columnsContainer");

    const grupo = document.createElement("div");
    grupo.className = "form-group";

    const input = document.createElement("input");
    input.type = "text";
    input.className = "form-control";
    input.name = "datasetColumn";
    input.placeholder = "Ex.: matricula";

    const botaoRemover = document.createElement("button");
    botaoRemover.type = "button";
    botaoRemover.textContent = "Remover";
    botaoRemover.addEventListener("click", function () {
        grupo.remove();
    });

    grupo.appendChild(input);
    grupo.appendChild(botaoRemover);
    container.appendChild(grupo);
}


function inicializarGerador() {

    const botaoAdicionarConstraint = document.getElementById("addConstraint");

    if (botaoAdicionarConstraint) {
        botaoAdicionarConstraint.addEventListener("click", adicionarConstraint);
    }

    const botaoAdicionarColuna = document.getElementById("addColumn");

    if (botaoAdicionarColuna) {
        botaoAdicionarColuna.addEventListener("click", adicionarColuna);
    }

    const botaoProximo = document.getElementById("nextStep");
    const botaoVoltar = document.getElementById("backStep1");

    if (botaoProximo) {
        botaoProximo.addEventListener("click", avancarEtapa);
    }

    if (botaoVoltar) {
        botaoVoltar.addEventListener("click", voltarEtapa);
    }
}

document.addEventListener("DOMContentLoaded", inicializarGerador);


document.addEventListener("DOMContentLoaded", inicializarGerador);
