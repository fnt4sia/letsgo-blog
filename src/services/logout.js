export default function Logout(){
    sessionStorage.removeItem("username");
    window.location.href = "/login";
    return <></>
}