import { Menu } from "../components/Menu"

export default function Layout({ children }: React.PropsWithChildren) {
    return (
        <>
            <Menu />
            {children}
        </>
    )
}