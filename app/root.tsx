import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useNavigate,
} from "@remix-run/react";
import stylesheet from "~/tailwind.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export default function App() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <html lang="en" className="h-full">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <div className="relative sm:pb-16">
          <nav className="flex justify-between items-center w-full bg-sky-400 p-3 text-white uppercase font-bold">
            <span onClick={goBack} className="cursor-pointer">
              Step back
            </span>
            <div>
              <Link to="/" className="m-3">
                Home
              </Link>
              <Link to="/posts" className="m-3">
                Posts
              </Link>
              <Link to="/posts" className="m-3">
                Feed
              </Link>
              <Link to="/posts" className="m-3">
                Content
              </Link>
            </div>
          </nav>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </div>
      </body>
    </html>
  );
}
