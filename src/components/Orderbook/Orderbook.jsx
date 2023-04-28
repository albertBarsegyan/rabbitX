import { useConnection } from '../../contexts/connection.context.jsx'

export function Orderbook () {
  const { orderBooks } = useConnection()

  console.log({ orderBooks })

  return (
    <div>
      hello
    </div>
  )
}
