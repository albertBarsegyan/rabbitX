import { createContext } from 'react'

const ConnectionContext = createContext(null)

const ConnectionProvider = ({ children }) => {

  return <ConnectionContext.Provider>{children}</ConnectionContext.Provider>
}

// ConnectionProvider.propTypes = {
//   children:
// }
