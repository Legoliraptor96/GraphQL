import  express  from "express";
import { graphqlHTTP } from "express-graphql"; 
import { schema } from "../schema";

const app = express()

app.use("/graphql1",graphqlHTTP({
    graphiql:true
    schema,
}))

app.listen(3000)
console.log("listening on port 3000")