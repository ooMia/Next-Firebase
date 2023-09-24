import DialogProvider from '@/contexts/DialogContext'
import AuthProvider from '@/contexts/AuthProvider'

const ContextProviders = ({ children }: { children: any }) => {
  return (
    <AuthProvider>
      <DialogProvider>{children}</DialogProvider>
    </AuthProvider>
  )
}

export default ContextProviders
