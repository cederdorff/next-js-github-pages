"use client";
export default function FormCreate() {
  async function addPost(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const caption = event.currentTarget.caption.value;
    const image = event.currentTarget.image.value;
    const uid = "ZfPTVEMQKf9vhNiUh0bj";
    const createdAt = new Date().getTime();

    const request = await fetch("https://next-post-app-race-default-rtdb.firebaseio.com/posts.json", {
      method: "POST",
      body: JSON.stringify({ caption, image, uid, createdAt })
    });
  }

  return (
    <form onSubmit={addPost}>
      <input type="text" name="caption" />
      <input type="url" name="image" />
      <button type="submit">Add Post</button>
    </form>
  );
}
