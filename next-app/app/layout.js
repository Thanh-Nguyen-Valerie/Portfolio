export const metadata = {
  title: 'Nguyen Ho Thien Thanh | Full-Stack Developer Portfolio (Next.js)',
  description:
    'Explore the portfolio of Nguyen Ho Thien Thanh, a Full-Stack Developer and DevOps Engineer showcasing projects, experience, and technical skills built with Next.js.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}
