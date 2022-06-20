import app from "./app"
import {connectDB} from "./db"

function main(){
try{
    await connectDB();
    app.listen(3000);
    console.log("listening on port 3000");
} catch (error){
    console.error(error)
}
}

main()
