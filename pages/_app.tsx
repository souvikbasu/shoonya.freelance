/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable global-require */

import '../styles/global.css'

import { ApolloProvider } from '@apollo/client'
import { UserProvider } from '@auth0/nextjs-auth0'
import { ThemeProvider } from '@material-ui/styles'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

import GetApolloClient from '../apis/apollo.client'
import Layout from '../src/components/common/Layout'
import * as ga from '../src/lib/ga'
import MaterialUiTheme from '../styles/material.ui.theme.provider'

// Start the mocking conditionally.
if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../src/mocks')
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      ga.pageview(url)
    }

    // When the component is mounted, subscribe to router changes
    // and log those page views
    router.events.on('routeChangeComplete', handleRouteChange)

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  const client = GetApolloClient('/api/graphql')

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={MaterialUiTheme}>
        <UserProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </UserProvider>
      </ThemeProvider>
    </ApolloProvider>
  )
}
