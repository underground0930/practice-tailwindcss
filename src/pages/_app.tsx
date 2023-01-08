import '@/styles/globals.css'
import type { AppProps } from 'next/app'

// MEMO: nextjs + googlefont + tailwindcss
// URL: https://www.youtube.com/watch?v=L8_98i_bMMA

import { Poppins } from '@next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`container ${poppins.variable} font-sans`}>
      <Component {...pageProps} />
    </div>
  )
}
