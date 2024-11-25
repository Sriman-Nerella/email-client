import { db } from "./server/db";

await db.user.create(
    {
        data : {
            emailAddress : "Srimannerella@kajs.com",
            firstName : "Sriman",
            lastName : "Nerella"
        }
    }
)

console.log("Done executing")