import Link from "next/link";

export default function Nav(){
    return (
        <nav>
            <Link href="/"><a>HOME</a></Link>
            <Link href="/require"><a>Requirement</a></Link>
            <Link href="/user"><a>Sign in</a></Link>
            <style jsx>{`
                nav a{
                    font-size:15pt; 
                    margin:5px;
                }
            `}</style>
        </nav>
    );
}