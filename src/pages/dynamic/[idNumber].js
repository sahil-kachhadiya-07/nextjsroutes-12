import { useRouter } from 'next/router'

const idNumber = () => {
    // const router = useRouter();
    // const id = router?.query?.idNumber;
    const {query} = useRouter();
  return (
    <div>{query.idNumber}</div>
  )
}

export default idNumber