
import { Container } from "./styles";


interface HeaderProps {
    user : { 
        name: string;
        email: string;
    }
}

export function Header({ user }: HeaderProps ) {
    return (
        <Container>
            <label>
                <input type="text" placeholder="Digite username" />
            </label>

            <div>
                <div>
                    <img src="https://avatars.githubusercontent.com/u/19715382?v=4" alt="" />
                </div>
                <div>
                    <h1>{user.name}</h1>
                    <div>Email: {user.email}</div>
                </div>
            </div>
        </Container>
    )
}