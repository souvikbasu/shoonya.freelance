import { useUser } from '@auth0/nextjs-auth0'
import React from 'react'

import Loader from '../src/components/common/Loader'

export default function Home() {
  // user
  const { error, isLoading } = useUser()
  if (isLoading || error)
    return (
      <div>
        <Loader open={isLoading} error={error} />
      </div>
    )
  return <div />
}
