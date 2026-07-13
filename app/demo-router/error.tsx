'use client';

export default function ErrorPage({ error, reset }:  {error: Error; reset: () => void } ) {        
    return (
        <div>
            <h1>Что-то пошло не так</h1>
            <p>{error.message}</p>
            <button onClick={reset}>Попробовать снова</button>
        </div>
    );
}