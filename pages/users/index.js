import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

function Users({ users }) {

  const router = useRouter()
  console.log(router);

  return (
    <div>
      {users.map((user) => (
        <h2 key={user.id}>
          <Link href={`/users/${user.id}`} prefetch={false}>
            {user.id}. {user.name}
          </Link>
        </h2>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: {
      users: data,
    },
  };
}

export default Users;
