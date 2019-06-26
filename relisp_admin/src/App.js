import React from 'react'
import { createMuiTheme } from '@material-ui/core/styles'
import { Admin, Resource, Login } from 'react-admin'
import { AuthProvider } from './component/firebase/'
import { FirebaseDataProvider } from 'react-admin-firebase'
import { NewsList, NewsEdit, NewsShow, NewsCreate } from './component/news/'
import addUploadCapabilities from './addUploadCapabilities'
import spanishMessages from 'aor-language-spanish'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASED_DATABASE_URL,
  storageBucket: process.env.REACT_APP_FIREBASE_BUCKET,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
}
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#71205F'
    },
    secondary: {
      main: '#71205F'
    }
  }
})
const messages = {
  es: spanishMessages
}
const i18nProvider = locale => messages[locale]

const authConfig = {
  userProfilePath: '/Users/'
}
const dataProvider = FirebaseDataProvider(firebaseConfig)

const loginStyles = {
  backgroundSize: '100%',
  backgroundRepeat: 'round'
}

const LoginPage = () => (
  <Login
    style={loginStyles}
    backgroundImage='https://firebasestorage.googleapis.com/v0/b/elis-ae942.appspot.com/o/elis%20FINAL.png?alt=media&token=159a1755-5833-4d74-b696-717f334b46a0'
  />
)

const App = () => (
  <Admin
    locale='es'
    i18nProvider={i18nProvider}
    theme={theme}
    dataProvider={addUploadCapabilities(dataProvider)}
    authProvider={AuthProvider(authConfig)}
    loginPage={LoginPage}
  >
    <Resource
      name='News'
      create={NewsCreate}
      list={NewsList}
      options={{ label: 'Noticias' }}
      edit={NewsEdit}
      show={NewsShow}
    />
  </Admin>
)
export default App
