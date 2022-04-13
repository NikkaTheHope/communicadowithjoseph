import Link from "next/link";

export default function Signin({changePath}){

    return (
        <div>
        <form>
            <label>ID</label>
            <input type="text" />
            <label>PWD</label>
            <input type="password" />
            
            <style jsx>{`
                form{
                    display:flex;
                    flex-direction:column;
                    margin: 20px;
                }
            `}</style>
        </form>
        <button name="signup" onClick={changePath}>signup</button>
        </div>
    );
}