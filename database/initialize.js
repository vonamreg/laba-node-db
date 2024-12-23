import { Car, Type } from '../database/models.js'
import getRandomCar from '../randomCar.js'

async function init() {
    let car = await Car.findOne()
    let type = await Type.findOne()

    if (!car || !type) {
      let types = [
          {
              "name": "Type A",
          },
          {
              "name": "Type B",
          },
          {
              "name": "Type B",
          },
          {
              "name": "Type C",
          },
          {
              "name": "Type D",
          }
      ]

      await Type.bulkCreate(types).then(async (res) => {
          for (let i = 0; i < types.length; i++) {
              const newCar = await Car.create(getRandomCar())
              newCar.typeId = res[i].id
              await newCar.save()
          }
      })
    }
}

export default init
