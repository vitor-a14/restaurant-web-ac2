const data = [
    {
        "tipo": "Lanche",
        "nome": "X-Salada",
        "imagem": "./data/images/x-salada.png",
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
    },
    {
        "tipo": "Lanche",
        "nome": "X-Bacon",
        "imagem": "./data/images/x-bacon.png",
        "composição": [
            "Pão de hamburguer",
            "Hamburger bovino 100g",
            "Bacon",
            "Alface",
            "Tomate"
        ],
        "adicionais": [
            "Maionese",
            "Purê de batata",
            "Hamburger bovino 100g",
            "Bacon"
        ], 
        "preço": "28.50"
    },
    {
        "tipo": "Lanche",
        "nome": "X-Frango",
        "imagem": "./data/images/x-frango.png",
        "composição": [
            "Pão de hamburguer",
            "Filé de frango 100g",
            "Alface",
            "Tomate"
        ],
        "adicionais": [
            "Maionese",
            "Purê de batata",
            "Filé de frango 100g"
        ], 
        "preço": "24.00"
    },
    {
        "tipo": "Lanche",
        "nome": "X-Calabresa",
        "imagem": "./data/images/x-calabresa.png",
        "composição": [
            "Pão de hamburguer",
            "Linguiça calabresa",
            "Alface",
            "Tomate"
        ],
        "adicionais": [
            "Maionese",
            "Purê de batata",
            "Linguiça calabresa"
        ], 
        "preço": "22.00"
    },
    {
        "tipo": "Refrigerante",
        "nome": "Coca-Cola Lata 350ml",
        "imagem": "./data/images/coca-cola.png",
        "composição": [],
        "adicionais": [], 
        "preço": "7.00"
    },
    {
        "tipo": "Refrigerante",
        "nome": "Sprite Lata 350ml",
        "imagem": "./data/images/sprite.png",
        "composição": [],
        "adicionais": [], 
        "preço": "6.50"
    },
    {
        "tipo": "Refrigerante",
        "imagem": "./data/images/fanta.png",
        "nome": "Fanta Laranja Lata 350ml",
        "composição": [],
        "adicionais": [], 
        "preço": "6.00"
    },
    {
        "tipo": "Refrigerante",
        "imagem": "./data/images/guarana.png",
        "nome": "Guaraná Tamanduá Lata 350ml",
        "composição": [],
        "adicionais": [], 
        "preço": "7.50"
    }
];

const combos = [
    {
        "nome": "Basicão",
        "conteudo": [data[0], data[5]]
    },
    {
        "nome": "Big Big",
        "conteudo": [data[0], data[1], data[6]]
    },
    {
        "nome": "Exagero",
        "conteudo": [data[0], data[1], data[2], data[7]]
    },
];