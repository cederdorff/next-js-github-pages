export default async function Home() {
  const request = await fetch("https://next-post-app-race-default-rtdb.firebaseio.com/posts.json");
  const data = await request.json();
  // from object to array
  const posts = Object.keys(data).map(key => ({
    id: key,
    ...data[key]
  }));

  console.log(posts);

  return (
    <main>
      <div>Next.js on GitHub Pages</div>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.caption}</li>
        ))}
      </ul>
    </main>
  );
}
