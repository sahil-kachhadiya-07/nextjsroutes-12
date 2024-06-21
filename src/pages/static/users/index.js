import Link from "next/link";

const userPage = (props) => {
  return (
    <>
      <div>userPage (static)</div>
      {props.data.users.map((items) => (
        <Link href={`/users/${items.id}`} key={items.id}>
          <li>{items?.firstName}</li>
        </Link>
      ))}
      ;
    </>
  );
};

export const getStaticProps = async () => {
  const data = await (await fetch("https://dummyjson.com/users")).json();
  return {
    props: {
      data,
    },
  };
};

export default userPage;
