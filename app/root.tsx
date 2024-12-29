import { Outlet, Scripts, Links } from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";
import stylesheet from "./routes/styles/tailwind.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Links />
        <style>{`
          button {
            border: 0;
          }
        `}</style>
      </head>
      <body className="w-[100vw] h-[100vh] content-center items-center p-5">
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}
