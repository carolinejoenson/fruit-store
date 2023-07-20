import Header from "../../components/header/header.component";
import FruitCardAdministration from "../../components/fruit-card-administration/fruit-card-administration-add-product.component";


const SignedInSystemAdministration = () => {

    function signOut(){
        window.location.href="/";
    }

    return (
        <div>
            <Header></Header>
            <button onClick={signOut} style={{textAlign: "center", float: "right", marginRight: "10px", marginTop: "10px", padding: "10px", cursor: "pointer"}}>Sign out</button>
            <h2 style={{textAlign: "center", marginTop: "50px"}}>Welcome</h2>
            <p style={{textAlign: "center"}}>Here you can add new articles to the database as well as updating data for already added products.</p>
            <br></br>
            <FruitCardAdministration></FruitCardAdministration>
        </div>
    )
}


export default SignedInSystemAdministration;