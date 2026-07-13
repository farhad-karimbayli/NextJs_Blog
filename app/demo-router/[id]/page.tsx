import Image from "next/image";
import { notFound } from "next/navigation";

export default async function DemoItemPage({ params }: { params: Promise<{ id: string }> }) {   // Динамическая навигация 
    const { id } = await params;
    const validIds = ['1', '2', '3'];

    if (id === '33') {
        throw new Error('Элемент с id 33 временно недоступен');
    }

    if (!validIds.includes(id)) {
        notFound();
    }

    console.log(id);
    console.log('DemoDeltarPage Boss rendered');
    return (
        <div>
            <h1>Открыть элемент с id: {id}</h1>
            <Image src="/RC-1138.webp" alt="Next.js logo" width={1055} height={860} priority />
        </div>
    );
}
