import { useRouter } from "next/router";
const User = () => {
    const {query} = useRouter();
  return (

    <div>{query.user}</div>
  )
}

export default User;