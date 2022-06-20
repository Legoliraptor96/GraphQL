import { createConnection } from "typeorm"

export const connectDB = async () => {
    await createConnection({
    type: "mysql",
    username: "root",
    password: "lego123",
    port: 3306,
    host: "localhost"
    database: "userdb",
    entities: [],
    synchronize:false,
    ssl:false
    })
}
