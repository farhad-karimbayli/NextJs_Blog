import Link from "next/link";

async function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


export default async function DemoRouterpage() {
    console.log('DemoRouterPage rendered');
    await delay(5000);
    return (
        <>
            <h1>Демо раздел роутинга</h1>
            <Link href={'/demo-router/1'}> Cars1 </Link>
            <Link href={'/demo-router/2'}> Star Wars </Link>
            <Link href={'/demo-router/3'}> Studying development</Link>
        </>
    );
}