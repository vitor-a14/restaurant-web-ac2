const urlParams = new URLSearchParams(window.location.search);
const resumoComponent= document.getElementById('resumo');
const resumoListaComponent = document.getElementById('resumoLista');

var totalValue = 0;

urlParams.forEach((value, key) => {
    var itemValue = 0;

    for (const item of data) {
        if (item.nome === key) {
            itemValue = parseFloat(item.preço);
            totalValue += parseFloat(item.preço * value);
            break; 
        }
    }

    if (itemValue == 0) {
        for (const combo of combos) {
            if (combo.nome === key) {
                for (const item of combo.conteudo) {
                    itemValue += parseFloat(item.preço);
                    totalValue += parseFloat(item.preço * value);
                }
                break; 
            }
        }
    }

    if (!key.startsWith('Adicional')) {
        const listItem = document.createElement('li');
        listItem.textContent = `R$ ${itemValue.toFixed(2)} - ${value}  ${key}`
        resumoListaComponent.append(listItem);
    }
});

urlParams.forEach((value, key) => {
    if (key.startsWith('Adicional')) {
        const listItem = document.createElement('li');
        listItem.textContent = `${key}`;
        resumoListaComponent.append(listItem);
    } 
});

resumoComponent.innerHTML += `<h4>Total: R$ ${totalValue.toFixed(2)}</h4>`;