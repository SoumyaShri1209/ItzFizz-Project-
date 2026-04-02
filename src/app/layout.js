import './globals.css';

export const metadata = {
  title: 'Itzfizz Digital — Web Development',
  description: 'Scroll-Driven Hero Section — Itzfizz Internship Assignment',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Bootstrap 5 CDN */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
