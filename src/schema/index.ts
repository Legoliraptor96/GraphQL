import { GraphQLObjectType, GraphQLSchema } from "graphql";
import{GREETING} from "./Queries/Greeting";


const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields:{
        greeting: GREETING
    }
})

const Mutation = new GraphQLObjectType({
    name : "Mutation",
    fields: {
        createUser:
    },
})
    

export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
})