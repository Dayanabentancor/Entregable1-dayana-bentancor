const pedido = [];
function calcularTotal() {
    
    let total = 0;
   
    pedido.forEach(item => {
     
        total += item.precio;
    });
    
    return total;
}

// let total = 0;

let comprar = confirm("¿Deseas hacer un pedido?");

if (comprar) {
    let menu;
    do {
        // No se como hacer para que me aparezca como una lista, pero trate de separar para que se entienda el menú
      menu = prompt("Nuestro menú incluye:  1-Milanesa Napolitana $250   2-Pizza $200      3-Hamburguesa $180     4-Chivito $300             Por favor, ingresa el número correspondiente al menú que deseas:");

        switch(menu) {
            case "1":
                pedido.push({nombre: "Milanesa Napolitana", precio: 250});
                // total += 250;
                break;
            case "2":
                pedido.push({nombre: "Pizza", precio: 200});
                // total += 200;
                break;
            case "3":
                pedido.push({nombre: "Hamburguesa", precio: 180});
                // total += 180;
                break;
            case "4":
                pedido.push({nombre: "Chivito", precio: 300});
                // total += 300;
                break;
            default:
                alert("Lo siento! Ese artículo no está incluido en el menú.");
        }

        comprar = confirm("¿Deseas agregar algo más al pedido?");
        
    } while (comprar);
}

if (pedido.length > 0) {
  
    alert("Total a pagar: $" + total);
} else {
    alert("No se realizó ningún pedido.");
}

