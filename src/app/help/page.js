import Image from "next/image";

export default function Page() {
    return (
        <>
            <Image src="/calculator-help.png" alt="blah" width={901} height={618} style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto"
            }} />
        </>
    );
}