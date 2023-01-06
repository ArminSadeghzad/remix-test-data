import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData
} from "@remix-run/react";
// import mongoose from "mongoose";
// import Todo from "./models/Todo";
// mongoose.connect(
//   "mongodb+srv://armin:<password>@cluster0.rm0my53.mongodb.net/?retryWrites=true&w=majority",
//   (error) => {
//     if (!error) return console.info("Mongo connected");
//     console.error(error);
//   }
// );


// export let loader = async () => {
//   return await Todo.find({});
// };

// const TodoList = (todos) =>{
//   return(
//     <ul>
//       {todos.map((todo)=>(
//         <li key={"title"}>{todo.title}</li>
//       ))}
//     </ul>
//   )
// }

export const meta = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});

export default function App() {
  // const data = useLoaderData();
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
      <LiveReload />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        
    
      
      </body>
    </html>
  );
}
