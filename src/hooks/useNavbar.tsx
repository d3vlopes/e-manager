import { useState } from 'react'

export function useNavbar() {
  const [isVisible, setIsVisible] = useState(false)

  return {
    isVisible,
    setIsVisible,
  }
}
