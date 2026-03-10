import * as z from 'zod'

export const RegisterSchema = z
  .object({
    name: z.string().min(1, {
      error: 'Введите имя',
    }),
    email: z.email({
      error: 'Некорректная почта',
    }),
    password: z.string().min(6, {
      error: 'Пароль должен сожержать минимум 6 символов',
    }),
    repeatPassword: z.string().min(6, {
      error: 'Пароль подтверждения должет сожержать минимум 6 символов',
    }),
  })
  .refine((data) => data.password === data.repeatPassword, {
    error: 'Пароли не совпадают',
    path: ['repeatPassword'],
  })

export type TypeRegisterSchema = z.infer<typeof RegisterSchema>  
