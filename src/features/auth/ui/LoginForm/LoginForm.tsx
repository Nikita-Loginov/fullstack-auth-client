import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { useRef, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

import { AuthWrapper } from '@features/auth'

import { Button } from '@shared/ui/buttons'

import { LoginSchema, type TypeLoginSchema } from '../../schemes'

import { Input } from '@shared/ui/inputs'

import scss from '../../styles/form.module.scss'

export const LoginForm = () => {
  const [captchaValue, setCaptchaValue] = useState<string | null>(null)
  const recaptchaRef = useRef<ReCAPTCHA>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TypeLoginSchema>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })

  const handleSubmitForm = (values: TypeLoginSchema) => {
    if (!captchaValue) {
      toast.error('Пожалуйста, подтвердите, что вы не робот')
      return
    }

    toast.success('Вход прошел успешно')

    reserForm()
  }

  const reserForm = () => {
    reset()
    recaptchaRef.current?.reset()
    setCaptchaValue(null)
  }

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaValue(value)
  }

  return (
    <>
      <AuthWrapper
        heading="Вход в аккаунт"
        backButtonHref="/auth/register"
        backButtonLabel="Еще нет акканута? Зарегистрироваться"
        isSocial
      >
        <form
          onSubmit={handleSubmit(handleSubmitForm)}
          className={scss['form']}
        >
          <div className={scss['form-inputs']}>
            <Input
              label="Имя"
              placeholder="Никита"
              {...register('name')}
              error={errors.name?.message}
            />

            <Input
              label="Email"
              placeholder="test@test.com"
              {...register('email')}
              error={errors.email?.message}
            />

            <Input
              label="Пароль"
              type="password"
              placeholder="******"
              {...register('password')}
              error={errors.password?.message}
            />

            <ReCAPTCHA
              sitekey={import.meta.env.VITE_GOOGLE_RECAPTCHA_CLIENT_KEY}
              onChange={handleCaptchaChange}
              ref={recaptchaRef}
            />
          </div>

          <Button size="medium" theme="secondary" typeBtn="submit">
            <p className="p2">Вход</p>
          </Button>
        </form>
      </AuthWrapper>
    </>
  )
}
