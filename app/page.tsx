export default async function Home() {
  const request = await fetch("https://next-post-app-race-default-rtdb.firebaseio.com/posts.json");
  const data = await request.json();
  const posts = Object.keys(data).map(key => ({
    id: key,
    ...data[key]
  }));

  console.log(posts);

  async function addPost(formData: FormData) {
    "use server";
    const caption = formData.get("caption");
    const image = formData.get("image");
    const uid = "ZfPTVEMQKf9vhNiUh0bj";
    const createdAt = new Date().getTime();

    const request = await fetch("https://next-post-app-race-default-rtdb.firebaseio.com/posts.json", {
      method: "POST",
      body: JSON.stringify({ caption, image, uid, createdAt })
    });
  }
  return (
    <main>
      <h1>Deploy your static Next.js site to GitHub Pages.</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.caption}</li>
        ))}
      </ul>

      <form action={addPost}>
        <input type="text" name="caption" />
        <input type="url" name="image" />
        <button type="submit">Add Post</button>
      </form>
    </main>
  );
}
