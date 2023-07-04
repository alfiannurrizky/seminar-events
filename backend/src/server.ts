import express, { Application } from 'express'
import cors from 'cors'
import compression from 'compression'
import morgan from 'morgan'
import router from './routes/index'

class App {
    app: Application

    constructor() {
        this.app = express()
        this.plugins()
        this.routes()
    }

    plugins() {
        this.app.use(express.json())
        this.app.use(cors())
        this.app.use(compression())
        this.app.use(morgan('dev'))
        this.app.use(express.static('public'))
    }

    routes() {
        this.app.use(router)
    }
}

export default new App().app
