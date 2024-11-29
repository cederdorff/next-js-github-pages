export default async function Home() {
  const request = await fetch("https://next-post-app-race-default-rtdb.firebaseio.com/posts.json");
  const data = await request.json();
  const posts = Object.keys(data).map(key => ({
    id: key,
    ...data[key]
  }));

  console.log(posts);

  return (
    <main>
      <h1>Deploy your static Next.js site to GitHub Pages.</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.caption}</li>
        ))}
      </ul>
    </main>
  );
}
