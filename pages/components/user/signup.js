import Link from "next/link";

export default function Signup({changePath}){

    return (
        <div>
        <form>
            
            <style jsx>{`
                form{
                    display:flex;
                    flex-direction:column;
                    margin: 20px;
                }
            `}</style>
        </form>
        <button name="signin" onClick={changePath}>signin</button>
        </div>
    );
}