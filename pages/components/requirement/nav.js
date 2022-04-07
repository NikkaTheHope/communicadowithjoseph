import Link from "next/link";

export default function NavRequriement({moves}){
    return(
        <nav>
            <span onClick={moves} id="list">List</span>       
            <span onClick={moves} id="add">Add</span>     
            <style jsx>{`
                nav{
                    display:flex;
                    flex-direction: row;
                    justify-content: space-evenly;
                }
                nav span{
                    padding: 10px 8px 10px 8px;
                    border-radius:10px;
                    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
                }
                nav span:active{
                    transform: scale(0.89);
                }
            `}</style>  
        </nav>
    );
}