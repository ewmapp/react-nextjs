import type { NextPage } from 'next'
import { styled } from '../../stitches.config'
import { useState, useEffect } from 'react'

const Text = styled('p', {
  fontFamily: '$system',
  color: '$hiContrast',

  variants: {
    size: {
      1: {
        fontSize: '$1'
      },
      2: {
        fontSize: '$2'
      },
      3: {
        fontSize: '$3'
      }
    }
  }
})

const Home: NextPage = () => {
  const [mounted, setMounted] = useState(false)

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <div>
      <Text as="h1" size="3">
        Hello, from Stitches.
      </Text>
    </div>
  )
}

export default Home
