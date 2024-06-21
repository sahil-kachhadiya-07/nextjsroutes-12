import React from 'react'
import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (...url) => fetch(...url).then((res) => res.json());

const userInfoPage = () => {
  const { query } = useRouter();
  const id = query.id;
  const { data, error } = useSWR(
    () => (`https://dummyjson.com/users/${id}`),
    fetcher
  );

  if (error) return <div>Error loading user information.</div>;
  if (!data) return <div>Loading...</div>;

  // const [userInfo, setUserInfo] = useState([]);
  // useEffect(() => {
  //   const id = query.id;
  //   async function fetchUserById(id) {
  //     const userData = await fetch(`https://dummyjson.com/users/${id}`);
  //     const res = await userData.json();
  //     setUserInfo(res);
  //   }
  //   fetchUserById(id);
  // }, [query.id]);

  return (
    <div>
      <h1>User Information</h1>
      <p>First Name: {data.firstName}</p>
      <p>Last Name: {data.lastName}</p>
      <p>Email: {data.email}</p>
    </div>
  );
};

export default userInfoPage;
