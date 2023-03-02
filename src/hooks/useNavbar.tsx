import { useState } from 'react'

export function useNavbar() {
  const [isVisible, setIsVisible] = useState(true)

  return {
    isVisible,
    setIsVisible,
  }
}
