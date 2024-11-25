window.onload = function() {
  //Arrays con los valores para el dibujo cental de la carta y para los del top-left y bot-right.
  const symbols = ["♦", "♥", "♠", "♣"];
  const values = [2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K", "A"];
  let cardSize = 200;

  //Funcion para crear una carta aleatoria con los arrays que he introducido antes.
  function generateCard() {
    //Extraemos un numero aleatorio entre las posiciones de los arrays 0-finArray.
    const randomSymbolIndex = Math.floor(Math.random() * symbols.length);
    const randomValueIndex = Math.floor(Math.random() * values.length);

    //Asignamos a ese numero aleatorio del array una variable para que sea más facil trabajar con el.
    //Para que esta funcione primero hay que escribir el nombre del array seguido de [] que este será el numero aleatorio de la posicion del elemento del array.
    let symbol = symbols[randomSymbolIndex];
    let value = values[randomValueIndex]; //Esto significa: symbols[nuemero aleatorio del array dado por el Math.random()] por lo que ya la variable tendra como valor un elemento aleatorio del array.

    //Intento de que la carta quede mas chula
    if (value === "A") {
      value = symbol;
    }

    //Ahora vamos a añadir los ids en variables para que asi sea mas facil trabajar con ellos:
    const topLeft = document.querySelector(".top-left");
    const bottomRight = document.querySelector(".bottom-right");
    const dibujo = document.querySelector(".dibujo");

    //Usando el innerHTML vamos a cambiar los valores de las 3 ids del archivo .HTML:
    //Usamos un if para que cuando la carta se un As se muestre correctamente
    if (symbol === value) {
      topLeft.innerHTML = symbol;
      bottomRight.innerHTML = symbol;
      dibujo.innerHTML = value;
    } else {
      //Si la carta no es un As se mostrará con su numero seguido del simbolo
      topLeft.innerHTML = `${value}${symbol}`;
      bottomRight.innerHTML = `${value}${symbol}`;
      dibujo.innerHTML = value;
    }

    //Ahora vamos a cambiar el color de la carta:
    //1º Averiguamos si la carta aleatoria ha recibido corazones o diamantes para aplicarle un color rojo:
    const comprobacionRoja = symbol === "♥" || symbol === "♦";
    //2º Creamos una variable para guardar el color y usamos un condicional ternario para asignar si el color es "red" o "black":
    const color = comprobacionRoja ? "red" : "black";
    //3º Aplicamos el color para que se vea en nuestra pagina web:
    topLeft.style.color = color;
    bottomRight.style.color = color;
    dibujo.style.color = color;
  }

  //Añadimos un refresh cada 10 segundos de la carta:
  setInterval(function() {
    generateCard();
  }, 10000);

  // Función para ajustar el tamaño de la carta
  function adjustCardSize(increase) {
    const card = document.querySelector(".card");

    // Cambiar el tamaño de la carta
    cardSize += increase ? 20 : -20; // Aumentar o disminuir 20px

    card.style.width = `${cardSize}px`;
    card.style.height = `${cardSize * 1.77}px `;
  }

  // Evento para capturar las teclas "+" y "-"
  document.addEventListener("keypress", function(e) {
    if (e.key === "+") {
      adjustCardSize(true); // Aumentar tamaño
    } else if (e.key === "-") {
      adjustCardSize(false); // Disminuir tamaño
    }
  });

  //Llamo a la funcion para que genere la carta.
  generateCard();

  //Evente onClick sobre la carta para que genere una nueva aleatoria.

  //1º Le asignamos una constante al id="card" del .HTML para trabajar con ella en el app.js
  const card = document.querySelector(".card");

  //2º Hacemos que al hacer click en elemento "card" del .HTML se active de nuevo la función para generar una nueva carta aleatoria.
  card.onclick = generateCard;
};
