import { VARIANTS_THEME } from '@shared/config'

export type ThemeVariant = (typeof VARIANTS_THEME)[keyof typeof VARIANTS_THEME]

export type ThemeKey = ThemeVariant['key']
