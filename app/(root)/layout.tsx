export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main>
            SIDEBARrr
                {children}
        </main>
    );
}