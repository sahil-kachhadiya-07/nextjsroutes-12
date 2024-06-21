import { useRouter } from 'next/router'
const user = () => {
  const { query, push ,reload,replace} = useRouter()
  return (
    <>
      <div>{query.user}</div>
      <button onClick={e => push(`/user/${query.user}/setting`)}>
        setting page
      </button>{' '}
      <br />
      <button
        onClick={e =>
          push({
            pathname: '/user/[user]/setting',
            query: { user: query.user } // user : 'jhon'
          })
        }
      >
        setting page (second method)
      </button>{' '}
      <br />
      <button onClick={e => push(`/`)}>home</button><br/>
      <button onClick={e => replace(`/`)}>home(second method)</button><br/>
      <button onClick={e => reload()}>reload</button>


      {/* we can also use replace instead of push when do not need of browser history */}
    </>
  )
}

export default user
