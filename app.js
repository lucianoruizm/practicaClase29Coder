import { express } from "express"
import usersRouter from "./routes/users.router.js"
import businessRouter from "./routes/businessRouter.router.js"
import ordersRouter from "/routes/ordersRouter.router.js"

const app = express()

app.use("api/usersRputer", usersRouter)
app.use("api/businessRouter", businessRouter)
app.use("api/ordersRouter", ordersRouter)

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`)
})