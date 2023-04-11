const express = require("express");
const app = express();

// interface DataType1 {
//   type: "type1";
//   data: string;
//   otherData1: string;
// }

// interface DataType2 {
//   type: "type2";
//   data: number;
//   otherData2: number;
// }

// interface DataType3 {
//   type: "type3";
//   data: boolean;
//   otherData3: boolean;
// }

interface DataTypes<DataType, Type> {
  type: Type;
  data: DataType;
}

interface DataType1 extends DataTypes<string, "type1"> {
  otherData1: string;
}
interface DataType2 extends DataTypes<number, "type2"> {
  otherData2: number;
}
interface DataType3 extends DataTypes<boolean, "type3"> {
  otherData3: boolean;
}

type ReqData = DataType1 | DataType2 | DataType3;

interface ReqBody {
  data: ReqData;
}

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

app.get("/", (req: ReqBody, res) => {
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

app.post('/', async (req: ReqBody, res) => {
  const value = await new Promise((resolve, reject) => {
    if (req.data.type === "type1") {
      return resolve(req.data);
    } else {
      return reject(new Error('not typeWan'))
    }
  })
  return res.send(value)
})
