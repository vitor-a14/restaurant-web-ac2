const urlParams = new URLSearchParams(window.location.search);
const resumoComponent= document.getElementById('resumo');
const resumoListaComponent = document.getElementById('resumoLista');

var totalValue = 0;

urlParams.forEach((value, key) => {
    var itemValue = 0;

    for (const item of data) {
        if (item.nome === key) {
            itemValue = parseFloat(item.preço);
            totalValue += parseFloat(item.preço);
            break; 
        }
    }

    if (itemValue == 0) {
        for (const combo of combos) {
            if (combo.nome === key) {
                for (const item of combo.conteudo) {
                    itemValue += parseFloat(item.preço);
                    totalValue += parseFloat(item.preço);
                }
                break; 
            }
        }
    }

    const listItem = document.createElement('li');
    listItem.textContent = `${value} ${key} - R$ ${itemValue}`;

    resumoListaComponent.append(listItem);
});

resumoComponent.innerHTML += `<h4>Total: R$ ${totalValue.toFixed(2)}</h4>`;