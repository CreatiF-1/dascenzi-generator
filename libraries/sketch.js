//Dichiaro le variabili che mi servono, alcune di 
//esse cambieranno in base al valore dei select
const SYMBOL_SIZE = 350
let sides = 2
let menPalette = []
let womenPalette = []
let defaultPalette = []
let paletteValue = "Sesso"
let esperienza = 2
let spessore = 1 


function setup() {
  createCanvas(500, 500 )

  //Inizializzo le palette per le forme
  menPalette = [
    color(239, 160, 11, 70), //giallo
    color(2, 103, 193, 70), //blue
    color(220, 73, 58, 70), //rosso
    color(73, 67, 49, 70), //verdone
    color(31, 36, 33, 70) //verde scuore
  ]
  womenPalette = [
    color(255, 52, 154, 70), //rosa
    color(213, 86, 114, 70), //violetto
    color(188, 244, 245, 70), //celeste
    color(147, 225, 216, 70), //verde acqua
    color(221, 17, 85, 70) //rossaccio
  ]

  defaultPalette = [
    color(255, 255, 255)
  ]
  noLoop()
  angleMode(DEGREES)
  rectMode(CENTER)
}


//Nel draw stampo esclusivamente le forme comuni a qualsiasi fattore
function draw() {
  defaultLines()
  outlineHexagon()
  outlineCircle()
  advancedLines()
  internalCirles2()
  internalCirles1()
  internalHexagon()
}


//Inzializzo tutte le mie forme
function defaultMen() {
  fill(getRandomFromPalette())
  blendMode(LIGHTEST)
  stroke("black")
  strokeWeight(spessore)
  push()
  translate(width / 2, height / 2)
  hexagon(0, 0, SYMBOL_SIZE / 1.5)
  pop()
}

function defaultWomen() {
  fill(getRandomFromPalette())
  blendMode(LIGHTEST)
  stroke("black")
  strokeWeight(spessore)
  push()
  translate(width / 2, height / 2)
  ellipse(0, 0, SYMBOL_SIZE * 1.2, SYMBOL_SIZE * 1.2)
  pop()
}

function outlineCircle() {
  fill(getRandomFromPalette())
  blendMode(LIGHTEST)
  stroke("black")
  strokeWeight(spessore)
  push()
  translate(width / 2, height / 2)
  ellipse(0, 0, SYMBOL_SIZE, SYMBOL_SIZE)
  pop()
}

function outlineHexagon() {
  fill(getRandomFromPalette())
  blendMode(MULTIPLY)
  stroke("black")
  strokeWeight(spessore)
  push()
  translate(width / 2, height / 2)
  hexagon(0, 0, SYMBOL_SIZE / 2)
  pop()
}

function advancedLines() {
  const stepOut = 8
  const numSteps = (sides * round(random(1, 3)))
  const step = (SYMBOL_SIZE / 2) / numSteps
  const start = round(random(0, numSteps))
  const stop = round(random(start, numSteps + 1))
  let numShapes = sides*1.5
  const angle = 360 / numShapes
  fill(getRandomFromPalette())
  blendMode(MULTIPLY)
  stroke("black")
  strokeWeight(spessore)
  push()
  translate(width / 2, height / 2)
  for (let i = 0; i < numShapes; i++) {
    line(start * step, 0, stop * step, 0)
    rotate(angle)
  }
  pop()
}

function defaultLines() {
  let numShapes = sides
  fill(getRandomFromPalette())
  blendMode(MULTIPLY)
  stroke("black")
  strokeWeight(spessore)
  push()
  translate(width / 2, height / 2)
  ellipse(0, 0, SYMBOL_SIZE, SYMBOL_SIZE)
  stroke("black")
  const angle = 360 / numShapes
  for (let i = 0; i < numShapes; i++) {
    line(0, 0, 0, SYMBOL_SIZE / 2)
    rotate(angle)
  }
  pop()
}

function internalCirles1() {
  const numShapes = sides
  const angle = 360 / numShapes
  const shapeSize = (SYMBOL_SIZE / 2) * 0.93
  const position = (SYMBOL_SIZE / 4) - (shapeSize / round(random(4, 8)))
  fill(getRandomFromPalette())
  blendMode(MULTIPLY)
  stroke("black")
  strokeWeight(spessore)
  push()
  translate(width / 2, height / 2)
  for (let i = 0; i <= numShapes; i++) {
    ellipse(position, 0, shapeSize / 6, shapeSize / 6)
    rotate(angle)
  }
  pop()
}

function internalCirles2() {
  const numShapes = sides
  const angle = 360 / numShapes
  const shapeSize = (SYMBOL_SIZE / 2) * 0.93
  const position = (SYMBOL_SIZE / 2) - (shapeSize / 2)
  fill(getRandomFromPalette())
  blendMode(MULTIPLY)
  stroke("black")
  strokeWeight(spessore)
  push()
  translate(width / 2, height / 2)
  for (let i = 0; i <= numShapes; i++) {
    ellipse(position, 0, shapeSize, shapeSize)
    rotate(angle)
  }
  pop()
}

function internalHexagon() {
  const shapeSize = (SYMBOL_SIZE / 2) * 0.93
  const numShapes = sides
  const angle = 360 / numShapes
  const position = (SYMBOL_SIZE / 2) - (shapeSize / round(random(2, 4)))
  fill(getRandomFromPalette())
  blendMode(MULTIPLY)
  stroke("black")
  strokeWeight(spessore)
  push()
  translate(width / 2, height / 2)
  for (let i = 0; i <= numShapes; i++) {
    hexagon(position, 0, SYMBOL_SIZE / 14)
    rotate(angle)
  }
  pop()
}

function externalCircle() {
  const numShapes = sides
  const angle = 360 / numShapes
  const shapeSize = (SYMBOL_SIZE / 2) * 0.93
  const position = (SYMBOL_SIZE / 3) - (shapeSize * 2)
  fill(getRandomFromPalette())
  blendMode(MULTIPLY)
  stroke("black")
  strokeWeight(spessore)
  push()
  translate(width / 2, height / 2)
  for (let i = 0; i <= numShapes; i++) {
    ellipse(position, 0, shapeSize / 6, shapeSize / 6)
    rotate(angle)
  }
  pop()
}

function externalHexagon() {
  const shapeSize = (SYMBOL_SIZE / 2) * 0.93
  const numShapes = sides
  const angle = 360 / numShapes
  const position = (SYMBOL_SIZE / 2.8) - (shapeSize * 2)
  fill(getRandomFromPalette())
  blendMode(MULTIPLY)
  stroke("black")
  strokeWeight(spessore)
  push()
  translate(width / 2, height / 2)
  for (let i = 0; i <= numShapes; i++) {
    hexagon(position, 0, SYMBOL_SIZE / 16)
    rotate(angle)
  }
  pop()
}

//Analizzo il primo select, aggiungo un event listener che permetta il 
//cambiamento di determinate variabili a seconda del valore del select
const roleSelect = document.getElementById('role');
roleSelect.addEventListener('change', (e) => {
  esperienza = e.target.value
  sides = esperienza
  spessore = sides / 2
  if (paletteValue == "Sesso") {
    clear()
    draw()
  } else if (paletteValue == "Uomo") {
    clear()
    externalHexagon()
    defaultMen()
    draw()
  } else if (paletteValue == "Donna") {
    clear()
    externalCircle()
    defaultWomen()
    draw()
  }
})

const roleSelect2 = document.getElementById('role2');
roleSelect2.addEventListener('change', (e) => {
  paletteValue = e.target.value
  if (paletteValue == "Sesso") {
    clear()
    draw()
  } else if (paletteValue == "Uomo") {
    clear()
    externalHexagon()
    defaultMen()
    draw()
  } else if (paletteValue == "Donna") {
    clear()
    externalCircle()
    defaultWomen()
    draw()
  }
})


//Inizializzo la funziona che mi permette di cambiare palette in base al
//cambiamento del valore del select
function getRandomFromPalette() {
  if (paletteValue == "Sesso") {
    const rando = round(random(0, defaultPalette.length))
    return defaultPalette[rando]
  } else if (paletteValue == "Uomo") {
    const rando = round(random(0, menPalette.length))
    return menPalette[rando]
  } else if (paletteValue == "Donna") {
    const rando = round(random(0, womenPalette.length))
    return womenPalette[rando]
  }
}

//Funzione che mi permette di randomizzare determinate forme e le palette sempre a seconda dei valori 
//attuali dei select e quindi delle mie variabili
function Randomize() {
  if (paletteValue == "Sesso") {
    clear()
    draw()
  } else if (paletteValue == "Uomo") {
    clear()
    externalHexagon()
    defaultMen()
    draw()
  } else if (paletteValue == "Donna") {
    clear()
    externalCircle()
    defaultWomen()
    draw()
  }
}















