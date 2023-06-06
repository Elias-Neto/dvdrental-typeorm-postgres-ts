import app from "./app"

const port = process.env.PORT || 3000

app.get("/", (req, res) => {
  res.send("Welcome to the DVD Rental API!")
})

app.listen(port, () => {
  console.log(`✅ Server running on port ${port}`)
})
