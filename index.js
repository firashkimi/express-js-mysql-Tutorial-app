const express = require("express")
const app = express()

app.use(express.json())
app.use(express.urlencoded({urlencoded:true}))

require("./routes/tutorial.routes.js")(app);



app.listen(8800, () => {
    console.log(`Server is running on port 8080`);
})