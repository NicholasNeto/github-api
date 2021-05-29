import { Header } from "../components/Header";

const user = {
  name: 'Nicholas Neto',
  email: 'nicholasneto@gmail.com',
}


export default function Home() {
  return (
    <div  >
      <Header user={user}/>
    </div>
  )
}
