function checkNumber() {
    // Get the value from the input field
    let num = document.getElementById("numberInput").value;

    // Validate input
    if (num === "") {
        document.getElementById("result").textContent = "Vul een nummer in.";
        return;
    }

    // Convert to number type
    num = Number(num);

    // If-else logic
    if (num == 67) {
        document.getElementById("result").textContent = "Ha, ha 67 heel grappig hoor.";
    } else if (num > 0 && num < 3) {
        document.getElementById("result").textContent = "Jij bent echt facking arm he?";
    } else if (num < 0) {
        document.getElementById("result").textContent = "Probeer jij ons geld te stelen? Daar trap ik niet in!";
    } else if (num < 10) {
        document.getElementById("result").textContent = "HOE DURF JE MIJ ZO WEINIG TE GEVEN!!!!";
    } else if (num < 999) {
        document.getElementById("result").textContent = "GEEF ME MEER!!!";
    } else if (num > 99999999999) {
        document.getElementById("result").textContent = "Je hebt de website gekocht.";
    } else {
        document.getElementById("result").textContent = "Bedankt voor het geld!";
    } 
}
let warmth;

warmth = Number(18);
function colder() {
    warmth -= 1;

    document.getElementById("temperatuur").textContent = warmth + " graden Celcius";
    zes7()
}

function warmer() {
    warmth += 1;

    document.getElementById("temperatuur").textContent = warmth + " graden Celcius";
    zes7()
}

function zes7() {
    if (warmth == 67) {
        document.getElementById("temperatuur").textContent = "Niet grappig.";
    }
}

function zoekpersoon() {
    let persoon = document.getElementById("persooninput").value;

    let mensen = ["Allam", "Duke", "Tom", "Tobias"];
    if (persoon == 67) {
        document.getElementById("result1").textContent = "Ahum, ahum ahum. 67 zit niet in het team.";
        document.getElementById("result2").textContent = "Vul alsublieft iemand anders in.";
        document.getElementById("result3").textContent = "67 is niet meer grappig.";
    } else if (!mensen.includes(persoon) || persoon === "") {
        document.getElementById("result1").textContent = "Vul alstublieft een van ons in. (Allam, Duke, Tobias of Tom)";
    } else {
        if (persoon === "Allam") {
            document.getElementById("result1").textContent = "Samen met Duke zorgt Allam voor de 3d modellen en 'Decoratie' van het huis.";
            document.getElementById("result2").textContent = "";
            document.getElementById("result3").textContent = "";
            document.getElementById("result4").textContent = "";
        }
        // Voeg hier de rest toe:
        if (persoon === "Duke") {
            document.getElementById("result1").textContent = "Samen met Allam zorgt Duke voor de 3d modellen en 'Decoratie' van het huis.";
            document.getElementById("result2").textContent = "";
            document.getElementById("result3").textContent = "";
            document.getElementById("result4").textContent = "";
        }

        if (persoon === "Tom") {
            document.getElementById("result1").textContent = "Tom heeft het hele 'smart' deel gemaakt.";
            document.getElementById("result2").textContent = "Dit betekent dat hij alle functies van het huis heeft gemaakt.";
            document.getElementById("result3").textContent = "Voor dit heeft hij de microbit gebruikt.";
            document.getElementById("result4").textContent = "Ook heeft hij de doos in elkaar gezet.";
        }

        if (persoon === "Tobias") {
            document.getElementById("result1").textContent = "Tobias is de maker en designer van deze wesbsite.";
            document.getElementById("result2").textContent = "Hij heeft alles gemaakt in verband met de website en is verantwoordelijk voor de website.";
            document.getElementById("result3").textContent = "Voor klachten mail tobiashenrik13@gmail.com. Niet gebruiken voor spam.";
            document.getElementById("result4").textContent = "Voor alle code kunt u naar zijn github profiel: tobiashenrik13-bit.";
        }
    }
}





//Snake
//
//
//
//
//
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

// the canvas width & height, snake x & y, and the apple x & y, all need to be a multiples of the grid size in order for collision detection to work
// (e.g. 16 * 25 = 400)
var grid = 16;
var count = 0;

var snake = {
  x: 160,
  y: 160,

  // snake velocity. moves one grid length every frame in either the x or y direction
  dx: grid,
  dy: 0,

  // keep track of all grids the snake body occupies
  cells: [],

  // length of the snake. grows when eating an apple
  maxCells: 4
};
var apple = {
  x: 320,
  y: 320
};

// get random whole numbers in a specific range
// @see https://stackoverflow.com/a/1527820/2124254
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// game loop
function loop() {
  requestAnimationFrame(loop);

  // slow game loop to 15 fps instead of 60 (60/15 = 4)
  if (++count < 4) {
    return;
  }

  count = 0;
  context.clearRect(0,0,canvas.width,canvas.height);

  // move snake by it's velocity
  snake.x += snake.dx;
  snake.y += snake.dy;

  // wrap snake position horizontally on edge of screen
  if (snake.x < 0) {
    snake.x = canvas.width - grid;
  }
  else if (snake.x >= canvas.width) {
    snake.x = 0;
  }

  // wrap snake position vertically on edge of screen
  if (snake.y < 0) {
    snake.y = canvas.height - grid;
  }
  else if (snake.y >= canvas.height) {
    snake.y = 0;
  }

  // keep track of where snake has been. front of the array is always the head
  snake.cells.unshift({x: snake.x, y: snake.y});

  // remove cells as we move away from them
  if (snake.cells.length > snake.maxCells) {
    snake.cells.pop();
  }

  // draw apple
  context.fillStyle = 'red';
  context.fillRect(apple.x, apple.y, grid-1, grid-1);

  // draw snake one cell at a time
  context.fillStyle = 'green';
  snake.cells.forEach(function(cell, index) {

    // drawing 1 px smaller than the grid creates a grid effect in the snake body so you can see how long it is
    context.fillRect(cell.x, cell.y, grid-1, grid-1);

    // snake ate apple
    if (cell.x === apple.x && cell.y === apple.y) {
      snake.maxCells++;

      // canvas is 400x400 which is 25x25 grids
      apple.x = getRandomInt(0, 25) * grid;
      apple.y = getRandomInt(0, 25) * grid;
    }

    // check collision with all cells after this one (modified bubble sort)
    for (var i = index + 1; i < snake.cells.length; i++) {

      // snake occupies same space as a body part. reset game
      if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
        snake.x = 160;
        snake.y = 160;
        snake.cells = [];
        snake.maxCells = 4;
        snake.dx = grid;
        snake.dy = 0;

        apple.x = getRandomInt(0, 25) * grid;
        apple.y = getRandomInt(0, 25) * grid;
      }
    }
  });
}

// listen to keyboard events to move the snake
document.addEventListener('keydown', function(e) {
  // prevent snake from backtracking on itself by checking that it's
  // not already moving on the same axis (pressing left while moving
  // left won't do anything, and pressing right while moving left
  // shouldn't let you collide with your own body)

  // left arrow key
  if (e.which === 37 && snake.dx === 0) {
    snake.dx = -grid;
    snake.dy = 0;
  }
  // up arrow key
  else if (e.which === 38 && snake.dy === 0) {
    snake.dy = -grid;
    snake.dx = 0;
  }
  // right arrow key
  else if (e.which === 39 && snake.dx === 0) {
    snake.dx = grid;
    snake.dy = 0;
  }
  // down arrow key
  else if (e.which === 40 && snake.dy === 0) {
    snake.dy = grid;
    snake.dx = 0;
  }
});

// start the game
requestAnimationFrame(loop);