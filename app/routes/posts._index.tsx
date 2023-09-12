import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getPosts } from "~/models/post.server";

export const loader = async () => {
  return json({ posts: await getPosts() });
};

export default function Posts() {
  const { posts } = useLoaderData<typeof loader>();
  return (
    <main className="px-6">
      <h1 className="my-6 border-b-2 text-center text-3xl">Posts</h1>
      <div>
        {posts.map((post: any) => (
          <Link key={post.slug} to={post.slug}>
            <button className="rounded-2xl p-3 mb-3 bg-slate-100 w-full">
              <span className="underline text-lg">{post.title}</span>
            </button>
          </Link>
        ))}
      </div>
      <Link to={"admin"}>
        <button className="rounded-2xl p-3 mb-3 bg-slate-100 w-full">
          <span className="underline text-lg">+ Add post</span>
        </button>
      </Link>
    </main>
  );
}
