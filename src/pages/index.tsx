import { Header } from "../components/Header";
import { Profile } from "../components/Profile";
import { RepositoryList } from "../components/Repository/RepositoryList";

const user = {
  name: 'Nicholas Neto',
  email: 'nicholasneto@gmail.com',
}


export default function Home() {
  return (
    <div  >
      <Header />
      <Profile name='Nicholas Pereira Neto' email='nicolaspereiraneto@gmail.com.br'/>
      <RepositoryList />
    </div>
  )
}
