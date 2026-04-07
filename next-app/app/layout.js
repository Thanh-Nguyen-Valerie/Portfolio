export const metadata = {
  title: 'Next Demo',
  description: 'Next.js demo for Netlify'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}
