
interface HeaderProps {
    user: {
        name: string;
        email: string;
    }
}

export function Header({ user }: HeaderProps) {
    return (
        <header>
            <img src="https://avatars.githubusercontent.com/u/19715382?v=4" alt="" />
            <button type="submit">Login</button>
        </header>
    )
}