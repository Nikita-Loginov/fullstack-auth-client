import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'
import { useRef, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

import { AuthWrapper } from '@features/auth'

import { Button } from '@shared/ui/buttons'

import { RegisterSchema, type TypeRegisterSchema } from '../../schemes'

import { Input } from '@shared/ui/inputs'

import scss from '../../styles/form.module.scss'

export const RegisterForm = () => {
  const [captchaValue, setCaptchaValue] = useState<string | null>(null)
  const recaptchaRef = useRef<ReCAPTCHA>(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TypeRegisterSchema>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      repeatPassword: '',
    },
  })

  const handleSubmitForm = (values: TypeRegisterSchema) => {
    if (!captchaValue) {
      toast.error('Пожалуйста, подтвердите, что вы не робот')
      return
    }

    toast.success('Регистрация прошла успешно')

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
        heading="Регистрация"
        description="Чтобы зайти на сайт зарегистрируйтесь"
        backButtonHref="/auth/login"
        backButtonLabel="Уже есть акканут? Войти"
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

            <Input
              label="Повторите пароль"
              type="password"
              placeholder="******"
              {...register('repeatPassword')}
              error={errors.repeatPassword?.message}
            />

            <ReCAPTCHA
              sitekey={import.meta.env.VITE_GOOGLE_RECAPTCHA_CLIENT_KEY}
              onChange={handleCaptchaChange}
              ref={recaptchaRef}
            />
          </div>

          <Button size="medium" theme="secondary" typeBtn="submit">
            <p className="p2">Регистрация</p>
          </Button>
        </form>
      </AuthWrapper>
    </>
  )
}
