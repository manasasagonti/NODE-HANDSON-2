const express = require("express");
const app = express();

app.get("/" , (request , response) => {
    response.send("HANDSON 2");
})
app.get("/api/main", (request , response) => {
    response.send("<div><h2><h2>Question: What is express?</h2><p>Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage servers and routes.</p></div")
});

app.listen(5050);