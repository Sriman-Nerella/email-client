import { db } from "@/server/db"
import { log } from "console"

 export const POST = async (req: Request) => {
    const {data} = await req.json()
    // log('clerk webhook received', data)

    const emailAddress = data.email_addresses[0].email_address
    const firstName = data.first_name
    const lastName = data.last_name
    const imageUrl = data.image_url
    const id = data.id

    await db.user.create({
        data : {
            id: id,
            emailAddress : emailAddress,
            firstName : firstName,
            lastName : lastName,
            imageUrl : imageUrl
        }
    })

    log("User created successfully", data)

    return new Response('Webhook received' , {status : 200})
 }