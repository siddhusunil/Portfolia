import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";


const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
});

export const metadata: Metadata = {
	metadataBase: new URL("https://next-supabase-vote.vercel.app/"),

	title: "BAYIKATI SUNIL || Portfolia",
	authors: {
		name: "sunil",
	},

	description:
		"I'm a Fullstack Developer passionate about building a modern web application that users love.",
	openGraph: {
		title: "Bayikati Sunil",
		description:
			"I'm a Fullstack Developer passionate about building a modern web application that users love.",
		url: "https://next-supabase-vote.vercel.app/",
		siteName: "sunil",
		images: "/portfolia.png",
		type: "website",
	},
	keywords: ["sunil", "bayikatisunil", "bayikati","sunilbayikati"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.className} antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
