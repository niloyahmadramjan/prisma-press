import app from "./app";
import config from "./config";
import { prisma } from "./lib/prisma";


const port = config.port
console.log(port)
async function main() {
    try {
        await prisma.$connect();
        console.log("db connnected")
        app.listen(port,()=>{
            console.log(`server is running on port ${port}`)
        })
        
    } catch (error) {
        console.log("Error starting the server", error);
        await prisma.$disconnect()
        process.exit(1)
    }
}

main()

// module 20-8

