
async function delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


export default async function DemoRouterpage() {
    console.log('DemoRouterPage rendered');
    await delay(5000);
    return (
        <h1>Демо раздел роутинга</h1>
    );
}