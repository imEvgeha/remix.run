import { json } from "@remix-run/node";
import type { ActionArgs } from "@remix-run/node";
import { Form, Link, Outlet, useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { deletePost, getPosts } from "~/models/post.server";

export const loader = async () => {
  return json({ posts: await getPosts() });
};

export const action = async ({ request }: ActionArgs) => {
  const formData = await request.formData();
  const slug = formData.get("slug");

  invariant(typeof slug === "string", "slug must be a string");

  await deletePost(slug);
  return null;
};

export default function PostAdmin() {
  const { posts } = useLoaderData<typeof loader>();
  return (
    <div className="mx-auto max-w-4xl">
      <h1 className="my-6 mb-2 border-b-2 text-center text-3xl">Posts Admin</h1>
      <div className="grid grid-cols-4 gap-6">
        <nav className="col-span-4 md:col-span-2">
          <div>
            {posts.map((post: any) => (
              <div key={post.slug} className="my-6 flex justify-between">
                <Link
                  to={post.slug}
                  className="rounded p-3 bg-slate-100 underline"
                >
                  # {post.title}
                </Link>

                <Form method="delete" className="flex">
                  <input
                    name="slug"
                    type="text"
                    value={post.slug}
                    onChange={() => null}
                    className="hidden"
                  />
                  <button
                    type="submit"
                    className="rounded bg-blue-500 py-1 px-4 text-white hover:bg-blue-600 focus:bg-blue-400 disabled:bg-blue-300"
                  >
                    Delete
                  </button>
                </Form>
              </div>
            ))}
          </div>
        </nav>
        <main className="col-span-4 md:col-span-2">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
