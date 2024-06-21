import { useRouter } from "next/router"
export const setting = () => {
    const {query} = useRouter();
  return (
    <div>setting {query.user}</div>
  )
}

export default setting
