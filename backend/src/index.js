// import express from 'express';
// import productRouter from "./routers/product.router.js";
// import fs from 'fs';
// import path from 'path';
//
// const app = express()
//
// app.use(express.json())
//
// app.get('/', async (req, res) => {
//     res.json('Hello world')
// })
//
// app.use('/product', productRouter)
//
// app.post("/upload", async (req, res) => {
//     console.log('взагалі працює')
//     let data = [];
//     req.on("data", (chunk) => {
//         data.push(chunk);
//     });
//
//     req.on("end", () => {
//         let fileData = Buffer.concat(data);
//         fs.writeFile(
//             path.join(__dirname, "example.pdf"),
//             fileData,
//             "base64",
//             (err) => {
//                 if (err) {
//                     res.statusCode = 500;
//                 }
//             }
//         );
//     });
// });
//
//
// app.listen(3000, () =>
//     console.log('REST API server ready at: http://localhost:3000'))
import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    res.json('Hello world');
});

app.post("/upload", async (req, res) => {
    let data = [];
    req.on("data", (chunk) => {
        data.push(chunk);
    });
    console.log('dddddddddddddddddddddddddddddd',data)
    req.on("end", () => {
        let fileData = Buffer.concat(data);
        console.log('fileData', fileData);
        fs.writeFile(
            path.join(__dirname, "example.txt"),
            fileData,
            (err) => {
                if (err) {
                    res.status(500).json({ message: "Failed to write file" });
                } else {
                    res.status(200).json({ message: "File uploaded successfully" });
                }
            }
        );
    });
});

app.listen(3000, () =>
    console.log('REST API server ready at: http://localhost:3000')
);