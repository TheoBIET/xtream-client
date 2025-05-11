import { z } from "zod"

export const XtreamUserSchema = z.object({
  username: z.string(),
  password: z.string(),
  message: z.string(),
  auth: z.number().int().min(0).max(1),
  status: z.enum(['Active', 'Inactive']),
  exp_date: z.string(),
  is_trial: z.string(),
  active_cons: z.string(),
  created_at: z.string(),
  max_connections: z.string(),
  allowed_output_formats: z.array(z.string()),
})

export type XtreamUser = z.infer<typeof XtreamUserSchema>
