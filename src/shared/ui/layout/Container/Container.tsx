import scss from './Container.module.scss'

interface ContainerProps {
  children: React.ReactNode
}

export const Container = ({ children }: ContainerProps) => {
  return <div className={scss.container}>{children}</div>
}