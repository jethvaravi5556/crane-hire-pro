import "./globals.css"

export const metadata = {
  title: "CraneHirePro - Professional Crane Rental Services",
  description:
    "Lift your projects to new heights with our professional crane rental services. Trusted, affordable, and timely delivery for all your construction needs.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
