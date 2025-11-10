import Image from "next/image";

export default function Page() {
    return (
        <>
            <Image src="/calculator/calculator-help.png" alt="Screenshot of calculator with descriptions of each part." width={901} height={618} style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto"
            }} />
        </>
    );
}