const express = require('express');
const app = express();
const formidable = require('express-formidable');
const fs = require('fs');

// app.get("/", function (req, res) {
//     res.send("Hello World!");
// });

// app.get("/students", function (req, res) {
//     res.send("Hello students!");
// });

// app.get("/node", function (req, res) {
//     res.send("Hello node!");
// });

// app.get("/girls", function (req, res) {
//     res.send("Hello girls!");
// });

// require fs
app.use(express.static("public"));
app.use(formidable());

app.post('/create-post', function (req, res) {
    // console.log(req.fields);
    const filePath = __dirname + '/data/posts.json';
    // read the file > string
    const postContent = fs.readFileSync(filePath);
    const posts = JSON.parse(postContent);
    posts[Date.now()] = req.fields.blogpost;
    
    fs.writeFileSync(filePath, JSON.stringify(posts));
    res.send(200, posts);

    // // we write file with the req.fields contants
    // fs.writefile(filepath, JSON, stringify(req.fields), function () {
    //     // callback we return 200 to clint
    //     res.send(200);
    // });
});


app.listen(3000, function () {
    console.log('Server is listening on port 3000. Ready to accept requests!');
});