import { Header } from "../components/Header";
import { Profile } from "../components/Profile";

const user = {
  name: 'Nicholas Neto',
  email: 'nicholasneto@gmail.com',
}


export default function Home() {
  return (
    <div  >
      <Header />
      <Profile name='Nicholas' email='nicolaspereiraneto@gmail.com.br'/>
    </div>
  )
}
