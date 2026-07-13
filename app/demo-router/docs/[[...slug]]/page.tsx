import Image from "next/image";

export default async function DemoPageSlig({params}: {params: Promise<{id: string}>}) {   // Динамическая навигация 
    console.log('DemoDeltarPage Scorch rendered');
    const data = await params;
    console.log(data);
    return (
        <div>
            <h1>Delta</h1>
            <Image src="/RC-1612.jpeg" alt="Next.js logo" width={1055} height={860} priority />
        </div>
    );
}
