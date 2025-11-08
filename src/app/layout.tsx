import { Inter } from 'next/font/google';
import '../styles/global.css';

const inter = Inter({
    subsets: ['latin'],
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <head>
                <script
                    defer
                    data-website-id="dfid_qOKTQ0rnv4b494JD9OnHY"
                    data-domain="tavin.dev"
                    src="https://datafa.st/js/script.js"
                ></script>
                <title>Gustavo - Software Engineer & Systems Architect</title>
                <meta
                    name="description"
                    content="Software Engineer • Systems Architect • Builder of Scalable Things. 5+ years shipping production systems."
                />
                <link
                    rel="icon"
                    type="image/x-icon"
                    href="https://www.gravatar.com/avatar/05385faec6136dc4ca10e3729fca6c57?s=256&d=identicon&r=PG"
                />
            </head>
            <body className={inter.className}>
                <div className="min-h-scree">{children}</div>
            </body>
        </html>
    );
}
