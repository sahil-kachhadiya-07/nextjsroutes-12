import React from "react";
import Link from "next/link";

const userPage = (props) => {
  console.log("props", props);
  return (
    <>
      <div>User (SSR)</div>
      {props.data.users.map((items) => (
        <Link href={`/users/${items.id}`} key={items.id}>
          <li>{items?.firstName}</li>
        </Link>
      ))}
      ;
    </>
  );
};

export const getServerSideProps = async () => {
  const data = await (await fetch("https://dummyjson.com/users")).json();
  return {
    props: {
      data,
    },
  };
};
export default userPage;
