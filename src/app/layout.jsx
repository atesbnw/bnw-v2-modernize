
import React from "react";
import { Providers } from "@/store/providers";
import MyApp from './app';
import "./tailwind.css";
import "./global.css";


export const metadata = {
  title: 'Modernize Main Demo',
  description: 'Modernize Main kit',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <MyApp>{children}</MyApp>
        </Providers>
      </body>
    </html>
  );
}


