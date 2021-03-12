document.getElementById('beginButton').addEventListener('click', switchDataCollect)
document.getElementById('collectStart').addEventListener('click', startButton)
document.getElementById('collectStop').addEventListener('click', stopButton)
let index = 1
let csv = ''
let constDir = 'x'
let xCoords = 0
let yCoords = 0
let coordInd = 0
const directions = ['N', 'E', 'S', 'W']
let dirInd = 0

function switchDataCollect() {
    constDir = document.querySelector('input[name="dir"]:checked').value
    if (constDir === 'x') {
        xCoords = Number(document.getElementById('constValInput').value)
        yCoords = document
            .getElementById('rangeValues')
            .value.split(',')
            .map((num) => Number(num))
    } else {
        yCoords = Number(document.getElementById('constValInput').value)
        xCoords = document
            .getElementById('rangeValues')
            .value.split(',')
            .map((num) => Number(num))
    }
    document.getElementById('entry').style.display = 'none'
    document.getElementById('collection').style.display = 'block'
    document.getElementById('currX').innerText =
        typeof xCoords === 'number' ? xCoords : xCoords[0]
    document.getElementById('currY').innerText =
        typeof yCoords === 'number' ? yCoords : yCoords[0]
    document.getElementById('currDir').innerText = directions[0]
    addCSVHead()
}

function startButton() {
    const timestamp = getTimestamp()
    const x = typeof xCoords === 'number' ? xCoords : xCoords[coordInd]
    const y = typeof yCoords === 'number' ? yCoords : yCoords[coordInd]
    const dir = directions[dirInd]
    let tableRow = document.createElement('tr')
    tableRow.innerHTML = `<td>${index}</td><td>${timestamp}</td><td>${x}</td><td>${y}</td><td>${dir}</td><td>start</td>`
    document.getElementById('table-body').appendChild(tableRow)
    document.getElementById('collectStart').style.display = 'none'
    document.getElementById('collectStop').style.display = 'inline-block'
    addToCSV(index, timestamp, x, y, dir, 'start')
    index++
}

function stopButton() {
    const timestamp = getTimestamp()
    const x = typeof xCoords === 'number' ? xCoords : xCoords[coordInd]
    const y = typeof yCoords === 'number' ? yCoords : yCoords[coordInd]
    const dir = directions[dirInd]
    let tableRow = document.createElement('tr')
    tableRow.innerHTML = `<td>${index}</td><td>${timestamp}</td><td>${x}</td><td>${y}</td><td>${dir}</td><td>end</td>`
    document.getElementById('table-body').appendChild(tableRow)
    document.getElementById('collectStart').style.display = 'inline-block'
    document.getElementById('collectStop').style.display = 'none'
    addToCSV(index, timestamp, x, y, dir, 'end')
    index++
    nextPos()
}

function getTimestamp() {
    return new Date().toISOString()
}

function addCSVHead() {
    csv = 'Index,Timestamp,X,Y,Direction,s/e'
}

function addToCSV(index, timestamp, x, y, dir, se) {
    csv += `${index},${timestamp},${x},${y},${dir},${se}\n`
    console.log(csv)
}

function nextPos() {
    dirInd++
    if (dirInd >= directions.length) {
        dirInd = 0
        coordInd++
    }
    if (constDir == 'x') {
        if (coordInd >= yCoords.length) {
            downloadCSV()
        }
    } else {
        if (coordInd >= xCoords.length) {
            downloadCSV()
        }
    }
    document.getElementById('currX').innerText =
        typeof xCoords === 'number' ? xCoords : xCoords[coordInd]
    document.getElementById('currY').innerText =
        typeof yCoords === 'number' ? yCoords : yCoords[coordInd]
    document.getElementById('currDir').innerText = directions[dirInd]
}

function downloadCSV() {}
