class Layer {
    constructor() {
        this.sides = SIDES
        this.numShapes = this.sides
        this.angle = 360 / this.numShapes
        this.stepsOut = 8
        this.singleStep = (SYMBOL_SIZE / 2) / this.stepsOut
        this.thinStroke = 1
        this.thickStroke = 3
        this.strokeColor = getRandomFromStrokePalette()
    }
}

class Circles extends Layer {
    constructor() {
        super()
        console.log(this.sides)
        this.shapeSize = (SYMBOL_SIZE / 2) * 0.93
        this.position = (SYMBOL_SIZE / 2) - (this.shapeSize / 2)
    }

    render() {
        noFill()
        stroke(this.strokeColor)
        strokeWeight(1)
        push()
        translate(width / 2, height / 2)
        for (let i = 0; i <= this.numShapes; i++) {
            ellipse(this.position, 0, this.shapeSize, this.shapeSize)
            rotate(this.angle)
        }
        pop()
    }
}

class SimpleLines extends Layer {
    constructor() {
        super()
        this.numSteps = randomSelectTwo() ? this.stepsOut : int(this.stepsOut * 1.25)
        this.step = (SYMBOL_SIZE / 2) / this.numSteps
        this.start = floor(random(0, this.numSteps))
        this.stop = floor(random(this.start, this.numSteps + 1))
        this.weight = randomSelectTwo() ? this.thinStroke : this.thickStroke
        this.numShapes = randomSelectTwo() ? this.sides : this.sides*2
        this.angle = 360 / this.numShapes
    }

    render() {
        noFill()
        stroke(this.strokeColor)
        strokeWeight(this.weight)
        push()
        translate(width/2, height/2)
        for (let i = 0; i < this.numShapes; i++) {
            line(this.start * this.step, 0, this.stop * this.step, 0)
            rotate(this.angle)
        }
        pop()
    }
}

class OutlineShapes extends Layer {
    constructor() {
        super()
        this.weight = randomSelectTwo() ? this.thinStroke : this.thickStroke
        this.hexagonTrue = randomSelectTwo()
    }

    render() {
        stroke(this.strokeColor)
        strokeWeight(this.weight)
        push()
        translate(width/2,height/2)
        if (this.hexagonTrue){
          hexagon (0, 0, SYMBOL_SIZE/2)
        }else {
        ellipse(0,0,SYMBOL_SIZE,SYMBOL_SIZE)
        }
        pop()
    }
}

class CircleLines extends Layer {
    constructor() {
        super()
        this.weight = randomSelectTwo() ? this.thinStroke : this.thickStroke
        this.numShapes = randomSelectTwo() ? this.sides : this.sides*2
    }
    render(){
        noFill()
        stroke(PALETTE[0])
        push()
          translate(width/2, height/2)
          ellipse(0, 0, SYMBOL_SIZE, SYMBOL_SIZE)
      
      
          stroke(this.strokeColor)
          this.angle = 360 / this.numShapes
          for (let i=0; i< this.numShapes; i ++){
            line(0, 0, 0, SYMBOL_SIZE/2)
            rotate(this.angle)
          }
        pop()
    }
}