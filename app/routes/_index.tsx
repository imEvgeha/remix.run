import type { V2_MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: V2_MetaFunction = () => [{ title: "Remix Notes" }];

export default function Index() {
  return (
    <main className="relative block min-h-screen w-full bg-white sm:flex">
      <div className="relative sm:pb-16">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h1 className="my-6 border-b-2 text-center text-3xl">
            This is just a test app
          </h1>

          <span className="font-bold">
            You can use <span className="line-through">one</span> all pages, to
            check this app.
          </span>

          <span>
            {` `}Other text Non eu cillum nulla cillum duis aliquip ullamco
            cillum enim. Laboris veniam nostrud nisi consectetur ea aliquip eu
            ad irure non tempor voluptate qui. Consectetur sint quis occaecat
            elit. Irure Lorem pariatur do ad veniam aute dolor occaecat eiusmod
            voluptate. Officia aute aliqua laboris aute quis non sunt eiusmod
            sunt ipsum do magna consequat. Esse eu laborum laborum eu cupidatat
            proident ex irure et tempor anim quis incididunt qui. Id ipsum nulla
            amet dolore proident laboris cillum culpa voluptate pariatur fugiat
            laboris ipsum. Voluptate fugiat dolor nulla dolor mollit ad cillum
            pariatur aliquip. Velit minim et aliqua labore incididunt non
            proident. Voluptate proident exercitation aliquip aliqua sit dolore
            cupidatat labore. Aliqua cupidatat excepteur aliqua anim ex occaecat
            incididunt sit cupidatat sit excepteur eiusmod do. Duis sunt
            pariatur minim amet aliqua dolor velit ea ipsum est laborum laboris
            aute nulla. Pariatur sint est laborum anim quis veniam veniam. Minim
            sit eu officia consequat mollit elit pariatur et labore aliquip
            velit. Sunt cillum culpa consequat et minim deserunt nisi dolor.
            Dolore ea est esse incididunt Lorem deserunt occaecat adipisicing.
            Ipsum commodo incididunt nulla aliquip Lorem sint. Aliquip qui
            cillum laboris in aliquip nostrud fugiat exercitation labore
            occaecat anim reprehenderit et. Consectetur dolore tempor eiusmod
            aliqua reprehenderit elit consequat culpa labore enim culpa
            excepteur consequat adipisicing. Eu sunt consequat incididunt
            reprehenderit elit eiusmod esse. Non ad elit tempor dolore do ad
            consequat exercitation. Occaecat deserunt magna nulla esse et et
            voluptate aute amet duis. Sit nulla tempor adipisicing Lorem do do
            et ex tempor cillum elit labore fugiat.
          </span>
        </div>

        <div className="mx-auto mt-16 max-w-7xl text-center">
          <Link to="/posts" className="text-xl text-blue-600 underline">
            Click here to see posts page
          </Link>
        </div>
      </div>
    </main>
  );
}
