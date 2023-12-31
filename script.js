const menuComponent = document.getElementById('menu');
const comboComponent = document.getElementById('combos');

//para cada item do cardapio será criado uma div com as informações e funcionalidades
data.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'itemDiv';
    
    itemDiv.innerHTML = `
        <br>
        <h4>${item.nome} (${item.tipo})</h4>
        <img src=${item.imagem}>
        <p>Preço: R$ ${item.preço}</p>
    `;
    
    //caso o item tenha composição, será feito a adição de uma lista na div
    if (item.composição.length > 0) {
        itemDiv.innerHTML += '<p>Composição:</p>';

        const compositionList = document.createElement('ul');
        compositionList.className = 'compositionList';
        
        item.composição.forEach(ingredient => {
            const listItem = document.createElement('li');
            listItem.textContent = ingredient;
            compositionList.appendChild(listItem);
        });

        itemDiv.appendChild(compositionList);
    }
  
    //botão de adicionar ou remover do carrinho
    const addItemToCartButton = document.createElement('input');
    addItemToCartButton.className = 'itemButton';
    addItemToCartButton.type = 'checkbox';

    //ao pressionar o botão
    addItemToCartButton.addEventListener('change', (event) => {
        if (event.currentTarget.checked) { 
            //caso o item tenha adicionais, mostrar a lista deles
            addAditionalsList(itemDiv, item);
        } else if (itemDiv.getElementsByClassName('aditionalList').length > 0) { 
            //caso tirar do carrinho, esconder a tela de adicionais
            itemDiv.removeChild(itemDiv.getElementsByClassName('aditionalList')[0]);
        }
    })

    //implementa a div no forms
    itemDiv.appendChild(addItemToCartButton);
    menuComponent.appendChild(itemDiv);
});

//para cada combo será criado uma div com as informações e funcionalidades
combos.forEach(combo => {
    const compositionList = document.createElement('ul');
    const itemDiv = document.createElement('div');
    itemDiv.className = 'itemDiv';
    var precoTotal = 0

    combo.conteudo.forEach(item => {
        precoTotal += parseFloat(item.preço);
    })

    itemDiv.innerHTML = `
        <br>
        <h4>${combo.nome}</h4>
        <p>Preço: R$ ${parseFloat(precoTotal).toFixed(2)}</p>
    `;

    itemDiv.innerHTML += '<p>Contém:</p>';
    combo.conteudo.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = item.nome;
        compositionList.appendChild(listItem);
    })

    itemDiv.appendChild(compositionList);
  
    //botão de adicionar ou remover do carrinho
    const addItemToCartButton = document.createElement('input');
    addItemToCartButton.type = 'checkbox';
    addItemToCartButton.className = 'itemButton';

    //ao pressionar o botão
    addItemToCartButton.addEventListener('change', (event) => {
        if (event.currentTarget.checked) { 
            //caso o item tenha adicionais, mostrar a lista deles
            const aditionalsDiv = document.createElement('div');
            aditionalsDiv.className = 'aditionalList';

            const quantity = document.createElement('input');
            quantity.className = 'quantity';
            quantity.type = "text";
            quantity.value = 1;
            quantity.name = combo.nome;
        
            aditionalsDiv.innerHTML += '<p>Quantidade:</p>';
            aditionalsDiv.appendChild(quantity);
            
            itemDiv.appendChild(aditionalsDiv);
        } else if (itemDiv.getElementsByClassName('aditionalList').length > 0) { 
            //caso tirar do carrinho, esconder a tela de adicionais
            itemDiv.removeChild(itemDiv.getElementsByClassName('aditionalList')[0]);
        }
    })

    //implementa a div no forms
    itemDiv.appendChild(addItemToCartButton);
    comboComponent.appendChild(itemDiv);
});

//cria a sessão de adicionais para o lanche
const addAditionalsList = (itemDiv, item) => {
    const aditionalsDiv = document.createElement('div');
    aditionalsDiv.className = 'aditionalList';

    if (item.adicionais.length > 0) {
        aditionalsDiv.innerHTML += '<hr> <br> <p>Gostaria de algum adicional?</p>';

        const aditionalList = document.createElement('ul');

        item.adicionais.forEach(ingredient => {
            const listItem = document.createElement('li');

            const addAditionalCheck = document.createElement('input');
            addAditionalCheck.type = 'checkbox';
            addAditionalCheck.className = 'buttonAditional';
            addAditionalCheck.name = "Adicional no " + item.nome + ': ' + ingredient;
            listItem.appendChild(addAditionalCheck);

            const addAditionalLabel = document.createElement('label');
            addAditionalLabel.for = 'buttonAditional'; 
            addAditionalLabel.textContent = ingredient;
            listItem.appendChild(addAditionalLabel);

            aditionalsDiv.appendChild(listItem);
        });

        aditionalsDiv.appendChild(aditionalList);
    }

    const quantity = document.createElement('input');
    quantity.className = 'quantity';
    quantity.type = "text";
    quantity.value = 1;
    quantity.name = item.nome;

    aditionalsDiv.innerHTML += '<p>Quantidade:</p>';
    aditionalsDiv.appendChild(quantity);

    itemDiv.appendChild(aditionalsDiv);
};

const form = document.getElementById("pedidoForm");

form.addEventListener('submit', (e) => {
    e.preventDefault();
    window.location.href = `resumo.html?${new URLSearchParams(new FormData(form)).toString()}`;
})
