import { useLoaderData } from "@remix-run/react";
// import { useState } from "react";
import { Page } from "~/components/Page";
import { getUsers } from "~/components/users";

// export async function loader() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos");
//   return {
//     props: {
//       todos: await res.json(),
//     },
//   };
// }

// export default function Home({ initialUsers }) {
//   const [users] = useState(initialUsers);
//   return <Page users={users} />;
// }

export async function loader() {
  const users = await getUsers();
  return { props: { initialUsers: users } };
}
export default function Index() {
  const data = useLoaderData();








  const initialUsers = data;

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>

      <Page users={initialUsers} />

      {/* {todos.length ? (
        <ul>
          {todos?.map((todo) => (
            <li key={todo.id}>
              {todo.id} {todo.title}
            </li>
          ))}
        </ul>
      ) : (
        <p>No Data</p>
      )} */}
    </div>
  );
}

//  swr: stale-while-revalidate
// Cache-Control: max-age=604800, stale-while-revalidate=86400
// max-age: is fresh

// 111111  -  Internal data
// export function loader(){
//   return{
//   posts: [{title: "manager", des: "something"}]
//   }
// }

// 2222  -  API
// export const loader = async ()=>{
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos");
//   const {data} = await res.json();
//   return{
//     todos:data
//   }
// }
