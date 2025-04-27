

export default async function Home() {
    const request = await fetch(`${process.env.API_URL}/add_user`, {
        method: "POST",
        body: JSON.stringify({
            name: "John Doe",
            email: "yo@gmail.com",
        }),
        headers: {
            "Content-Type": "application/json",
        }
    });
    const data = await request.json();

    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            {
                JSON.stringify(data)
            }
        </div>
    );
}
