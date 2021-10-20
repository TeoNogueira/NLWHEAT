import "dotenv/config";

import express from 'express';
import { router } from "./routes";

const app = express();

app.use(express.json()); //important: informa para o express também receber dados via json

app.use(router);

app.get("/github", (request, response) => {

response.redirect(`https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}`);

})

app.get("/signin/callback", (request, response) => {

const {code} = request.query;

return response.json(code);

})

app.listen(4000, () => {

console.log('RocketSeat, Server is Running on PORT 4000')
});


