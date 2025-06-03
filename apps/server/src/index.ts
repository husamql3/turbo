import { createServer } from "./server";
import { log } from "../../../packages/utils/dist";

const port = process.env.PORT || 3001;
const server = createServer();

server.listen(port, () => {
  log(`server running on ${port}`);
});
