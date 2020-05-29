function hexagon(posX, posY, radius) {
  const rotAngle = 360 / 6
  beginShape()
  for (let i = 0; i < 6; i++) {
    const Vertex = pointOnCirle(posX, posY, radius, i * rotAngle)
    vertex(Vertex.x, Vertex.y)
  }
  endShape(CLOSE)
}

function pointOnCirle(posX, posY, radius, angle) {
  const x = posX + radius * cos(angle)
  const y = posY + radius * sin(angle)
  return createVector(x, y)
}

window.onload = function () {
  document.getElementById('defaultCanvas0').className = 'bg-white rounded-md mypad';
};
