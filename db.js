const mongoose = require('mongoose')

const MONGODB_URL = 'mongorestore --uri mongodb+srv://holbieauctions:holbieauctions@cluster0.dous5ey.mongodb.net'

module.exports = () => {

    const connect = () => {
        mongoose.connect(
            MONGODB_URL,
            {
                keepAlive: true,
                UseNewUrlParser: true,
                UseUnifyTopology: true
            },
            (err) => {
                if (err) => {
                    console.log('DB: ERROR !!')
                }else{
                    console.log('Conexión correcta')
                }
            }
        )
    }
    connect();
}
