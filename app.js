document.getElementById('beginButton').addEventListener('click', switchDataCollect)
let constDir = 'x'
let xCoords = 0
let yCoords = 0
const directions = ['N', 'E', 'S', 'W']
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
}
