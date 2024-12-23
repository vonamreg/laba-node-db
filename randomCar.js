import _ from "lodash"

const models = ["Model A", "Model B", "Model Y", "Model X", "Model XXL", "Model Grace", "Model XYZ", "Model Palada", "Model Titan"]
const colors = ["whitesmoke", "space", "black", "red", "yellow", "lime", "grey", "gold"]

function getRandomCar() {
    let letters = ''
    for (let i = 0; i < 3; i++){
        letters += String.fromCharCode(Math.floor(Math.random() * 25 + 97))
    }
    let arr = letters.split('')
    arr.splice(2, 0, Math.floor(Math.random() * 999 ))

    return {
        carModel: _.sample(models),
        color: _.sample(colors),
        number: arr.join('')
    }
 }

 export default getRandomCar