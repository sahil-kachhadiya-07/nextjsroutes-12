import Link from "next/link";
import { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
const UserPage = () => {
  const { data, error } = useSWR("https://dummyjson.com/users", fetcher);

  if (error) {
    return <h1>error</h1>;
  }

  if (!data) return <h1>loading ...</h1>;

  //this is normal way of csr

  // const [user, setUser] = useState([])
  // console.log('user', user)
  // useEffect(() => {
  //   async function fetchUserData () {
  //     const userData = await fetch('https://dummyjson.com/users')
  //     const res = await userData.json()
  //     setUser(res)
  //   }
  //   fetchUserData()
  // }, [])

  return (
    <>
      {data &&
        data.users &&
        data.users.map((items) => (
          <Link href={`/users/${items.id}`} key={items.id}>
            <li>{items?.firstName}</li>
          </Link>
        ))}
    </>
  );
};

export default UserPage;

import Link from 'next/link'
 
// function Posts({ posts }) {
//   return (
//     <ul>
//       {posts.map((post) => (
//         <li key={post.id}>
//           <Link
//             href={{
//               pathname: '/blog/[slug]',
//               query: { slug: post.slug },
//             }}
//           >
//             {post.title}
//           </Link>
//         </li>
//       ))}
//     </ul>
//   )
// }
 
// export default Posts
