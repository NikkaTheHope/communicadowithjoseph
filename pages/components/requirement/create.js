import { useRouter } from "next/router";

export default function Create(){

  const router =  useRouter();

  const fetchAPI = async(target) => {
    const body = {
      content: target.content.value.trim(),
      call:"create"
    }
    
    const res = await fetch("/api/requirement",{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body),
    });
  }

  const onClick = (event) => {
    event.preventDefault();
    fetchAPI(event.target.form);
    location.href="/require";
  };

    return (
      <div className="container">
      <form className="container">
        <label htmlFor="content">Write Your Requirement</label>
        <textarea rows="20" name="content" htmlFor="content"
          placeholder="Write Any requirements that you want to develop, make, create whatever you imagine"
        ></textarea>
        <button onClick={onClick}>Confirm</button>        
      </form>  
      <style jsx>{`
      .container{
        display: flex;
        flex-direction: column;
      }
      form{
        padding: 30px;
        border-radius: 20px;
        box-shadow: inset 20px -20px 60px #373737, inset -20px 20px 60px #4b4b4b;
        margin: 40px;
      }  
      label{
        font-size:20pt;
      }
      textarea{
        font-size:14pt;
        border-radius: 20px;
        padding:30px;
        margin-bottom: 15px;
        background-color:black;
        color:white;
        resize:none;
      }
      button{
        font-size:20pt;
        border-radius: 20px;
        background-color:black;
        color:white;
        box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
      }
      `}
      </style>
      </div>
    );
}