const express = require("express");
const app = express();
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
app.get("/", (req, res) => {
    switch (req.data.type) {
        case "type1":
            console.log(req.data.otherData1);
            break;
        case "type2":
            console.log(req.data.otherData2);
            break;
        case "type3":
            console.log(req.data.otherData3);
            break;
    }
    res.send("Hello World!");
});
