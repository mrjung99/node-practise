import { z } from "zod"

//even if the PORT will string it will automatically convert it into number
//zod is used for env validation
const portSchema = z.coerce.number().min(1).max(65535).default(3000)
export const PORT = portSchema.parse(process.env.PORT)
