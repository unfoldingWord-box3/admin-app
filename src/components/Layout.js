import { useContext } from 'react'
import PropTypes from 'prop-types'
import { AuthenticationContext } from 'gitea-react-toolkit'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Onboarding from '@components/Onboarding'
import { ReferenceContext } from '@context/ReferenceContext'

export default function Layout({
  children,
  title = 'translationCore: Admin',
}) {
  const {
    state: authentication,
    component: authenticationComponent,
  } = useContext(AuthenticationContext)

  const {
    state: { owner, languageId, showAccountSetup },
  } = useContext(ReferenceContext)

  return (
    <div className='h-screen w-screen flex flex-col'>
      <Header title={title} authentication={authentication || {}} />
      <main className='flex flex-1 flex-col w-auto m-0 bg-gray-200'>
        {authentication && !showAccountSetup ? (
          children
        ) : (
          <Onboarding
            authentication={authentication}
            authenticationComponent={authenticationComponent}
          />
        )}
      </main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}
