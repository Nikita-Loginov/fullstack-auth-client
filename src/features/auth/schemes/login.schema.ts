import * as z from 'zod'

export const LoginSchema = z.object({
  name: z.string().min(1, {
    error: 'Введите имя',
  }),
  email: z.email({
    error: 'Некорректная почта',
  }),
  password: z.string().min(6, {
    error: 'Пароль должен сожержать минимум 6 символов',
  }),
})

export type TypeLoginSchema = z.infer<typeof LoginSchema>
