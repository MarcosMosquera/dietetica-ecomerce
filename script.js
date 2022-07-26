let productA = ["almendras", 2, 10000];

let productB = ["maní", 1, 20000];

let purchaseAmount = prompt ("Ingrese la cantidad de productos distintos que quiere comprar:")
let totalPrice = 0;

function priceCalc (amount, price) {
    totalPrice += amount * price;
};

function stockCalc (amount, stock, price) {
    if (stock >= amount) {
        priceCalc(amount, price);
        alert("El precio total es de: $" + (amount * price));
    }
    else {
        alert("No disponemos de esa cantidad en stock. Nuestro stock actual es de: " + stock + " unidades");
    }
};

for (let i = 0; i < purchaseAmount; i++) {

    let purchase = prompt("Ingrese el nombre del producto que quiere comprar: \n- Almendras\n- Maní").toLowerCase().trim();
    let amount = prompt("Ingrese la cantidad del producto que quiere comprar: ").toLowerCase().trim();

    if (purchase == "almendras") {
        stockCalc(amount, productA[2], productA[1]);
    }
    else if (purchase == "mani") {
        stockCalc(amount, productB[2], productB[1]);
    } else {
        alert("Lo sentimos, no disponemos de ese producto");
    }
};