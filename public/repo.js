import { clientDB } from "./lib/clientDB.js";

clientDB()
    .insert({
        clicks: 0,
        user: "asd"
    })