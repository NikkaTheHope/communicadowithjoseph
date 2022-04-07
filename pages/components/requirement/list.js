import {useState, useEffect} from "react";

export default function RequireList(){

    const [requirements, setRequirements] = useState([]);

    const requirementList = async() => {
        const res = await fetch("/api/requirement");
        const data = await res.json();
        setRequirements(data.data);
    }

    const deleteRequirement = async(event) => {
        const body = {
          id : event.target.id,
          call:"delete"
        }
        const res = await fetch("/api/requirement",{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        });
        const data = await res.json();
        setRequirements(data.data);
      }

    useEffect(()=>{
        requirementList();
    },[requirements]);

    return (
        <div className="container">
            {
                requirements.length === 0 ?
                    <div>
                        <h1>There's No requirements</h1>
                        <h3>Press "Add" above</h3>
                    </div>
                :
                requirements.map(r=>(
                <div className="item" key={r.id}>
                    <div className="withBt">
                        <div>Date: {r.createdAt}</div>
                        <div onClick={deleteRequirement} id={r.id} className="bt">X</div>
                    </div>
                    {r.content}
                </div>
            ))}
            <style jsx>{`
                .container{
                    display:flex;
                    flex-direction:column;
                }
                .bt{
                    font-size:20pt;
                }
                .bt:active{
                    transform:scale(0.89);
                }
                .withBt{
                    display:flex;
                    flex-direction:row;
                    justify-content: space-between
                }
                .container .item{
                    box-shadow:  20px -20px 60px #373737, -20px 20px 60px #4b4b4b;
                    border-radus: 10px;
                    margin: 15px;
                    padding:10px;
                }
            `}</style>
        </div>
    );
}

