import express from "express"
import { fileURLToPath } from "url"
import path, { dirname } from "path"
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const app = express()

app.use(express.static(path.join(__dirname, "build")))
app.use("*", (req, res) => res.sendFile(path.resolve(__dirname, "build", "index.html")))

app.listen(3000, () => {
  console.log(`Server Started at PORT 3000`)
})
