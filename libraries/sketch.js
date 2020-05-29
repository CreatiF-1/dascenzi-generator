const SYMBOL_SIZE = 350
let SIDES = 2
let MenPalette = []
let WomenPalette = []
let DefaultPalette = []
let PaletteValue = "Sesso"
let Esperienza = 2
let Spessore = 1
function setup() {
  createCanvas(500, 500 )
  MenPalette = [
    color(239, 160, 11, 70), //giallo
    color(2, 103, 193, 70), //blue
    color(220, 73, 58, 70), //rosso
    color(73, 67, 49, 70), //verdone
    color(31, 36, 33, 70) //verde scuore
  ]
  WomenPalette = [
    color(255, 52, 154, 70), //rosa
    color(213, 86, 114, 70), //violetto
    color(188, 244, 245, 70), //celeste
    color(147, 225, 216, 70), //verde acqua
    color(221, 17, 85, 70) //rossaccio
  ]

  DefaultPalette = [
    color(255, 255, 255)
  ]
  noLoop()
  angleMode(DEGREES)
  rectMode(CENTER)
}

function draw() {
  defaultLines()
  outlineHexagon()
  outlineCircle()
  advancedLines()
  internalCirles2()
  internalCirles1()
  internalHexagon()
}

function defaultMen() {
  fill(getRandomFromPalette())
  blendMode(LIGHTEST)
  stroke("black")
  strokeWeight(Spessore)
  push()
  translate(width / 2, height / 2)
  hexagon(0, 0, SYMBOL_SIZE / 1.5)
  pop()
}

function defaultWomen() {
  fill(getRandomFromPalette())
  blendMode(LIGHTEST)
  stroke("black")
  strokeWeight(Spessore)
  push()
  translate(width / 2, height / 2)
  ellipse(0, 0, SYMBOL_SIZE * 1.2, SYMBOL_SIZE * 1.2)
  pop()
}

function outlineCircle() {
  fill(getRandomFromPalette())
  blendMode(LIGHTEST)
  stroke("black")
  strokeWeight(Spessore)
  push()
  translate(width / 2, height / 2)
  ellipse(0, 0, SYMBOL_SIZE, SYMBOL_SIZE)
  pop()
}

function outlineHexagon() {
  fill(getRandomFromPalette())
  blendMode(MULTIPLY)
  stroke("black")
  strokeWeight(Spessore)
  push()
  translate(width / 2, height / 2)
  hexagon(0, 0, SYMBOL_SIZE / 2)
  pop()
}

function advancedLines() {
  const stepOut = 8
  const numSteps = (SIDES * floor(random(1, 3)))
  const step = (SYMBOL_SIZE / 2) / numSteps
  const start = floor(random(0, numSteps))
  const stop = floor(random(start, numSteps + 1))
  let numShapes = SIDES*1.5
  const angle = 360 / numShapes
  fill(getRandomFromPalette())
  blendMode(MULTIPLY)
  stroke("black")
  strokeWeight(Spessore)
  push()
  translate(width / 2, height / 2)
  for (let i = 0; i < numShapes; i++) {
    line(start * step, 0, stop * step, 0)
    rotate(angle)
  }
  pop()
}

function defaultLines() {
  let numShapes = SIDES
  fill(getRandomFromPalette())
  blendMode(MULTIPLY)
  stroke("black")
  strokeWeight(Spessore)
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
  const numShapes = SIDES
  const angle = 360 / numShapes
  const shapeSize = (SYMBOL_SIZE / 2) * 0.93
  const position = (SYMBOL_SIZE / 4) - (shapeSize / floor(random(4, 8)))
  fill(getRandomFromPalette())
  blendMode(MULTIPLY)
  stroke("black")
  strokeWeight(Spessore)
  push()
  translate(width / 2, height / 2)
  for (let i = 0; i <= numShapes; i++) {
    ellipse(position, 0, shapeSize / 6, shapeSize / 6)
    rotate(angle)
  }
  pop()
}

function internalCirles2() {
  const numShapes = SIDES
  const angle = 360 / numShapes
  const shapeSize = (SYMBOL_SIZE / 2) * 0.93
  const position = (SYMBOL_SIZE / 2) - (shapeSize / 2)
  fill(getRandomFromPalette())
  blendMode(MULTIPLY)
  stroke("black")
  strokeWeight(Spessore)
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
  const numShapes = SIDES
  const angle = 360 / numShapes
  const position = (SYMBOL_SIZE / 2) - (shapeSize / floor(random(2, 4)))
  fill(getRandomFromPalette())
  blendMode(MULTIPLY)
  stroke("black")
  strokeWeight(Spessore)
  push()
  translate(width / 2, height / 2)
  for (let i = 0; i <= numShapes; i++) {
    hexagon(position, 0, SYMBOL_SIZE / 14)
    rotate(angle)
  }
  pop()
}

function externalCircle() {
  const numShapes = SIDES
  const angle = 360 / numShapes
  const shapeSize = (SYMBOL_SIZE / 2) * 0.93
  const position = (SYMBOL_SIZE / 3) - (shapeSize * 2)
  fill(getRandomFromPalette())
  blendMode(MULTIPLY)
  stroke("black")
  strokeWeight(Spessore)
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
  const numShapes = SIDES
  const angle = 360 / numShapes
  const position = (SYMBOL_SIZE / 2.8) - (shapeSize * 2)
  fill(getRandomFromPalette())
  blendMode(MULTIPLY)
  stroke("black")
  strokeWeight(Spessore)
  push()
  translate(width / 2, height / 2)
  for (let i = 0; i <= numShapes; i++) {
    hexagon(position, 0, SYMBOL_SIZE / 16)
    rotate(angle)
  }
  pop()
}

const roleSelect = document.getElementById('role');
roleSelect.addEventListener('change', (e) => {
  Esperienza = e.target.value
  SIDES = Esperienza
  Spessore = SIDES / 2
  if (PaletteValue == "Sesso") {
    clear()
    draw()
  } else if (PaletteValue == "Uomo") {
    clear()
    externalHexagon()
    defaultMen()
    draw()
  } else if (PaletteValue == "Donna") {
    clear()
    externalCircle()
    defaultWomen()
    draw()
  }
})

const roleSelect2 = document.getElementById('role2');
roleSelect2.addEventListener('change', (e) => {
  PaletteValue = e.target.value
  if (PaletteValue == "Sesso") {
    clear()
    draw()
  } else if (PaletteValue == "Uomo") {
    clear()
    externalHexagon()
    defaultMen()
    draw()
  } else if (PaletteValue == "Donna") {
    clear()
    externalCircle()
    defaultWomen()
    draw()
  }
})


function getRandomFromPalette() {
  if (PaletteValue == "Sesso") {
    const rando = floor(random(0, DefaultPalette.length))
    return DefaultPalette[rando]
  } else if (PaletteValue == "Uomo") {
    const rando = floor(random(0, MenPalette.length))
    return MenPalette[rando]
  } else if (PaletteValue == "Donna") {
    const rando = floor(random(0, WomenPalette.length))
    return WomenPalette[rando]
  }
}

function Randomize() {
  if (PaletteValue == "Sesso") {
    clear()
    draw()
  } else if (PaletteValue == "Uomo") {
    clear()
    externalHexagon()
    defaultMen()
    draw()
  } else if (PaletteValue == "Donna") {
    clear()
    externalCircle()
    defaultWomen()
    draw()
  }
}















