import { createContext, useContext, useEffect, useRef, useState } from 'react'
import { Centrifuge } from 'centrifuge'
import { EndpointConstants } from '../constants/endpoint.constants.js'

const ConnectionContext = createContext(null)

export const ConnectionContextProvider = ({ children }) => {
  const centrifugeRef = useRef(new Centrifuge(EndpointConstants.RabbitXWebSocket))
  const [orderBooks] = useState([])

  useEffect(() => {
    const centrifugeRefContent = centrifugeRef.current

    centrifugeRefContent.connect()

    // centrifugeRefContent.on('connected', function () {
    //   console.log('[centrifuge] connected')
    // })

    // centrifugeRefContent.setToken('backthebunny')
    let orderbookConnection = centrifugeRefContent.getSubscription('orderbook')
    // const orderbookConnection = centrifugeRefContent.newSubscription('orderbook')

    if (!orderbookConnection) {
      orderbookConnection = centrifugeRefContent.newSubscription('orderbook')
    }

    // orderbookConnection.subscribe()

    return () => {
      // centrifugeRefContent.disconnect()
    }
  }, [])

  return (
    <ConnectionContext.Provider value={{ orderBooks }}>
      {children}
    </ConnectionContext.Provider>
  )
}

export const useConnection = () => useContext(ConnectionContext)
