import { Car } from "../database/models.js";


class CarController {
    async getAll(req, res) {
        const cars = await Car.findAll()
        res.status(200).json(cars)
    }

    async getOne(req, res) {
        const car = await Car.findOne({ where: { id: req.params.id } })
        return res.status(200).json(car)
    }

    async create(req, res) {
        const newCar = {
            typeId: req.body.typeId,
            carModel: req.body.carModel,
            color: req.body.color,
            number: req.body.number
        }

        const car = await Car.create(newCar)
        return res.status(201).json(car)
    }

    async update(req, res) {
        await Car.update({
            typeId: req.body.typeId,
            carModel: req.body.carModel,
            color: req.body.color,
            number: req.body.number
        },
        {
            where: {
                id: req.params.id
            }
        })

        const car = await Car.findByPk(req.params.id)

        return res.status(200).json(car)
    }

    async delete(req, res) {
        await Car.destroy({
            where: {
                id: req.params.id
            }
        })

        return res.status(200).json('The car has been successfully deleted!')
    }
}

export default new CarController()
