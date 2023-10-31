const data = [
    {
        "tipo": "Refrigerante",
        "nome": "Guaraná Tamanduá Lata 350ml",
        "composição": [],
        "adicionais": [], 
        "preço": "7.50"
    },
    {
        "tipo": "Lanche",
        "nome": "X-Salada",
        "composição": [
            "Pão de hamburguer",
            "Hamburger bovino 100g",
            "Alface",
            "Tomate"
        ],
        "adicionais": [
            "Catupiry",
            "Purê de batata",
            "Hamburger bovino 100g"
        ], 
        "preço": "25.75"
    }
];

const menuComponent = document.getElementById('menu');

//para cada item do cardapio será criado uma div com as informações e funcionalidades
data.forEach(item => {
    const itemDiv = document.createElement('div');
    
    itemDiv.innerHTML = `
        <br>
        <h4>${item.nome} (${item.tipo})</h4>
        <p>Preço: R$ ${item.preço}</p>
    `;
    
    //caso o item tenha composição, será feito a adição de uma lista na div
    if (item.composição.length > 0) {
        itemDiv.innerHTML += '<p>Composição:</p>';

        const compositionList = document.createElement('ul');
        
        item.composição.forEach(ingredient => {
            const listItem = document.createElement('li');
            listItem.textContent = ingredient;
            compositionList.appendChild(listItem);
        });

        itemDiv.appendChild(compositionList);
    }
  
    //botão de adicionar ou remover do carrinho
    const addItemToCartButton = document.createElement("input");
    addItemToCartButton.type = "checkbox";

    //ao pressionar o botão
    addItemToCartButton.addEventListener('change', (event) => {
        if (event.currentTarget.checked) { 
            //caso o item tenha adicionais, mostrar a lista deles
            addAditionalsList(itemDiv, item);
        } else if (itemDiv.getElementsByClassName("aditionalList").length > 0) { 
            //caso tirar do carrinho, esconder a tela de adicionais
            itemDiv.removeChild(itemDiv.getElementsByClassName("aditionalList")[0]);
        }
    })

    //implementa a div no forms
    itemDiv.appendChild(addItemToCartButton);
    menuComponent.appendChild(itemDiv);
});

//cria a sessão de adicionais para o lanche
const addAditionalsList = (itemDiv, item) => {
    if (item.adicionais.length > 0) {
        const aditionalsDiv = document.createElement('div');
        aditionalsDiv.innerHTML += '<p>Gostaria de algum adicional?</p>';
        aditionalsDiv.className = "aditionalList";

        const aditionalList = document.createElement('ul');

        item.adicionais.forEach(ingredient => {
            const listItem = document.createElement('li');
            listItem.textContent = ingredient;
            aditionalList.appendChild(listItem);

            const addAditionalCheck = document.createElement("input");
            addAditionalCheck.type = "checkbox";
            aditionalList.appendChild(addAditionalCheck);
        });

        aditionalsDiv.appendChild(aditionalList);
        itemDiv.appendChild(aditionalsDiv);
    }
};