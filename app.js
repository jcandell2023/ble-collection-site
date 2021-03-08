document.getElementById('beginButton').addEventListener('click', switchDataCollect)
let constDir = 'x'
let constVal = 0
let otherVals = []
function switchDataCollect() {
    constDir = document.querySelector('input[name="dir"]:checked').value
    constVal = document.getElementById('constValInput').value
    otherVals = document
        .getElementById('rangeValues')
        .value.split(',')
        .map((num) => Number(num))
    console.log(constDir, constVal, otherVals)
}
