import Link from "next/link";

export default function DemoLayout({ children }: { children: React.ReactNode }) {
    console.log('DemoLayout rendered');
    return (
        <div>
            <nav>
                <Link href="/demo-router">Главная</Link> |{" "}
                <Link href="/demo-router/about">Перейти О нас</Link>
            </nav>
            {children}
        </div>
    );
}