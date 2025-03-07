import ClientComponent from "./clientComponent";

export const metadata = {
    title : "Live Public Polls - See What the World Thinks & Share Your Opinion",
    description : 'Curious about what people think? Browse, vote, and discuss in our collection of public polls. Get real-time insights and share your opinion now!'
}
export default function Page(){
    return(
        <div>
            <ClientComponent/>
        </div>
    )
}