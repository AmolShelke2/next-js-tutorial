const fetchListPosts = async () => {
  let res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
};

const fetchUsers = async () => {
  let res = await fetch("https://jsonplaceholder.typicode.com/users");
  return res.json();
};

export default async function ListOfPosts() {
  const [posts, users] = await Promise.all([fetchListPosts(), fetchUsers()]);

  return (
    <div>
      <div className="border-b border-white py-2">
        {posts.map((post: any) => {
          return <p>{post.title}</p>;
        })}
      </div>
      <br />
      <div>
        {users.map((user: any) => {
          return <p>{user.name}</p>;
        })}
      </div>
    </div>
  );
}
