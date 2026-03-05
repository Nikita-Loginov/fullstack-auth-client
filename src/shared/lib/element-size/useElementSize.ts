import { useEffect } from 'react'

interface UseElementSizeProps {
  ref: React.RefObject<HTMLElement | null>
  varName: string
}

export const useElementSize = ({ ref, varName }: UseElementSizeProps) => {
  useEffect(() => {
    if (!ref.current) return

    const updateSize = () => {
      const { offsetHeight } = ref.current!

      document.documentElement.style.setProperty(
        `--${varName}`,
        `${offsetHeight}px`,
      )
    }

    updateSize()

    window.addEventListener('resize', updateSize)

    return () => {
      window.removeEventListener('resize', updateSize)
    }
  }, [ref, varName])

  return
}
