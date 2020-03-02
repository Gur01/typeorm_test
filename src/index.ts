import app from './app';
import "reflect-metadata";
import {createConnection} from "typeorm";

const port = process.env.PORT;

createConnection().then(()=> {
    console.log("  Connected to database")

    app.listen(port, ()=> {
        console.log(
            "  App is running at http://localhost:%d in %s mode",
            port,
            app.get("env")
        );
    })

}).catch(error => console.log(error));

