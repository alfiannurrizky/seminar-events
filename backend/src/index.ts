import app from './server'
import dotenv from 'dotenv'
dotenv.config()

const port = process.env.APP_PORT

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
