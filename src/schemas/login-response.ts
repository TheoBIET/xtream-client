import { z } from "zod"
import { XtreamUserSchema } from "./user"

export const XtreamLoginResponseSchema = z.object({
  user_info: XtreamUserSchema,
  server_info: z.unknown(),
})

export type XtreamLoginResponse = z.infer<typeof XtreamLoginResponseSchema>
