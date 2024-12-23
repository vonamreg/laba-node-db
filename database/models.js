import { STRING, INTEGER } from 'sequelize'
import { seq } from './index.js'


const Car = seq.define('car', {
    id: {
        type: INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
    carModel: {
        type: STRING,
        allowNull: false,
      },
    color: {
        type: STRING,
        allowNull: false,
      },
    number: {
        type: STRING,
        allowNull: false,
    },
})

const Type = seq.define('type', {
    id: {
        type: INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        unique: true,
      },
    name: {
        type: STRING,
        allowNull: false,
    }
})

Type.hasOne(Car, { onDelete: 'CASCADE'})

export { Car, Type }
