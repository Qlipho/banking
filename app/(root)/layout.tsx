export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main>
            SIDEBARr
                {children}
        </main>
    );
}