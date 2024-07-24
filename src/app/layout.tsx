import { type PropsWithChildren } from "react"
import type { Metadata } from "next"

// Components
import { MoseyBankHeader } from '@/components/header'
import { MoseyBankFooter } from '@/components/footer'
import { ThemeProvider, Body } from '@/components/theme'

// Styling
import { Figtree } from "next/font/google"
import "./globals.scss"

// Optimizely One
import { Scripts } from '@remkoj/optimizely-one-nextjs/server'
import { OptimizelyOneProvider, PageActivator } from '@remkoj/optimizely-one-nextjs/client'
import OptimizelyOneGadget from '@remkoj/optimizely-one-nextjs/optimizely-one-gadget'

export type RootLayoutProps = {
    children: React.ReactNode
}

const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
    description: "An Optimizely demo website",
    keywords: "Mosey bank, Mosey, Optimizely, Demo",
    title: {
        default: "Mosey Bank - An Optimizely Demo",
        template: "%s - An Optimizely Demo"
    }
};

type RootLayoutProps = Readonly<PropsWithChildren<{}>>

export default function RootLayout({ children }: RootLayoutProps) {
    return <html lang="en">
        <head>
            <Scripts.Header />
        </head>
        <ThemeProvider value={{ theme: "system" }}>
            <Body className={`${figtree.className} bg-ghost-white text-vulcan dark:bg-vulcan dark:text-ghost-white`}>
                <div className="flex min-h-screen flex-col justify-between">
                    <MoseyBankHeader />
                    {children}
                    <MoseyBankFooter />
                </div>
                <OptimizelyOneProvider value={{ debug: true }}>
                    <PageActivator />
                    { children }
                    <OptimizelyOneGadget />
                </OptimizelyOneProvider>
                <Scripts.Footer />
            </Body>
        </ThemeProvider>
    </html>
}
