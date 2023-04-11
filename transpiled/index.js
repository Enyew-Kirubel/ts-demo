var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
app.post('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    const value = yield new Promise((resolve, reject) => {
        if (req.data.type === "type1") {
            return resolve(req.data);
        }
        else {
            return reject(new Error('not typeWan'));
        }
    });
    return res.send(value);
}));
