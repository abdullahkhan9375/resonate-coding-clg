import { useEffect, useState } from "react";

export const Home = () =>
{
    const [ time, setTime ] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString());
    }, 1000);

    })
    return (
    <div className="container--home">
        <h1> { time }</h1>
        <h2> Welcome to the Contacts App</h2>
    </div>
    );
};
