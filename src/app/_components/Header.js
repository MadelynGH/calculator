function HeaderLink({ children, href }) {
    return (
        <a href={href} style={{
            margin: "20px",
            textDecoration: "none",
            backgroundColor: "#8b007dff",
            color: "white",
            padding: "8px",
            borderRadius: "8px"
        }}>{children}</a>
    );
}

export default function Header() {
    return (
        <div style={{
            position: "fixed",
            top: "0",
            height: "75px",
            width: "100%",
            display: "flex",
            padding: "0",
            left: "0",
            borderBottom: "1px solid #00b899"
        }}>
            <HeaderLink href="/calculator">Calculator</HeaderLink>
            <HeaderLink href="/calculator/help">Help</HeaderLink>
            <HeaderLink href="/calculator/credits">Credits</HeaderLink>
        </div>
    );
}