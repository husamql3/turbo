import { log } from "../../../packages/utils/dist"
import { createServer } from "./server"

const port = process.env.PORT || 3001
const server = createServer()

server.listen(port, () => {
	log(`server running on ${port}`)
})
