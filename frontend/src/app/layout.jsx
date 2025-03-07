import "./globals.css"
export default function Layout({ children }) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, intial-scale=1.0"/>
      <body>
        <main className="h-full w-full">
            {children}
        </main>
      </body>
    </html>
  );
}
