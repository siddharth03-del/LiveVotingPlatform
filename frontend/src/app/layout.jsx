import "./globals.css";
import {Analytics} from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
export default function Layout({ children }) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, intial-scale=1.0"/>
      <body>
        <main className="h-full w-full">
            {children}
            <Analytics/>
            <SpeedInsights/>
        </main>
      </body>
    </html>
  );
}
