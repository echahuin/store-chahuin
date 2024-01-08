import { Inter } from 'next/font/google'
import './globals.css'
import Nav from './components/Nav'
import { CartProvider } from './context/CartContext'
import { AuthProvider } from './context/AuthContext'
import { PaymentProvider } from './context/PaymentContext'
import { ProductDataProvider } from './context/ProductDataContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Store Chahuin',
  description: 'e-commerce para la venta de productos textiles.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <CartProvider>
          <PaymentProvider>
          <ProductDataProvider>
            <Nav />
            <div>
              {children}
            </div>
            
            </ProductDataProvider>
          </PaymentProvider>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
