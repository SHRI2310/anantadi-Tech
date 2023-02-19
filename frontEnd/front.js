
async function  signUp(){
    const name = document.querySelector("#name").value
    const email = document.querySelector("#email").value
    const pass =document.querySelector("#pass").value
    const id=document.querySelector("#id").value
    console.log(name)
    console.log(email)
    console.log(pass)
    console.log(id)
    console.log("hello1")
    let body ={
        name: data,
        password: "1234",
        email:email,
        id:id

      }

      let options={
        
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "*"
    
            },
          
            //make sure to serialize your JSON body
            body: JSON.stringify(body)
      }
    // axios.get("https://zlmzam9o3c.execute-api.us-east-1.amazonaws.com/dev/users")
    fetch("https://zlmzam9o3c.execute-api.us-east-1.amazonaws.com/dev/users",options)
        .then((data) => {
            console.log(data)
        }).catch((error)=>{
            console.log(error)
        })
    // console.log("hello");
}