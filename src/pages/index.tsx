import { Header } from "../components/Header";
import { GlobalStyle } from '../styles/global';

const user = {
  name: 'Nicholas Neto',
  email: 'nicholasneto@gmail.com',
}


export default function Home() {
  return (
    <div  >
      <GlobalStyle />
      <Header user={user}/>
    </div>
  )
}
