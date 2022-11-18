import '../styles/globals.css'
import { v4 as uuid } from 'uuid';
import { UUIDContext } from '../Context';


function MyApp({ Component, pageProps }) {
  const id = uuid()

  return (
    <UUIDContext.Provider value={{
      id
    }}>
    <Component {...pageProps} />
    </UUIDContext.Provider>

  )
}

export default MyApp
