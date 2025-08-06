export const metadata = {
  title: 'Portfolio - Bipin Thapa',
  description: 'Portfolio of Bipin Thapa made using Next.js.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
