import { useState } from "react";
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";


const SignInSystemAdministration = () => {

    const [goToSignInPage, setGoToSignInPage] = useState(false);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    function checkCredentials(){
        fetch("http://localhost:3000/sign-in", {
            method: "post",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                userName: userName,
                password: password
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data === "success"){
                setGoToSignInPage(true);
                window.location.href="/system-administration/signed-in";
            }
            else {
                alert("Wrong credentials")
            }
        });
    }

    const getUserName = (event) => {
        var enteredUserName = event.target.value.toLowerCase();
        setUserName(enteredUserName);
    }

    const getPassword = (event) => {
        var enteredPassword = event.target.value;
        setPassword(enteredPassword);
    }

    const checkIfEnter = (event) => {
        if (event.key==="Enter"){
            checkCredentials();
        }
    }


    return (
        <div>
            <Header></Header>
            <h2 style={{textAlign: "center", marginBottom: "40px"}}>System administration</h2>
            <div style={{display: "flex", justifyContent: "center", marginBottom: "80px"}}>
                <div style={{textAlign: "center", background: "rgb(255, 255, 204)", width: "50%", height: "50%"}}>
                    <p style={{textAlign: "center", paddingTop: "20px", marginBottom: "20px", fontSize: "1.2em"}}>Sign in</p>
                    <div>
                        <p>Enter user name</p>
                        <input onChange={getUserName} onKeyDown={checkIfEnter} style={{textAlign: "center", marginBottom: "20px"}} className="userName" type="email" placeholder="User name"></input>
                    </div>
                    <div>
                        <p>Enter password</p>
                        <input onChange={getPassword} onKeyDown={checkIfEnter} style={{textAlign: "center", marginBottom: "20px"}} className="password" type="password" placeholder="Password"></input>
                    </div>
                    <button onClick={checkCredentials} type="submit" style={{textAlign: "center", marginBottom: "60px", background: "white", padding: "10px", borderRadius: "10px", cursor: "pointer"}}>Sign in</button>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}


export default SignInSystemAdministration;