import ClientComponent from "./clientComponent";

export const metadata = {
    title : "Your Polls | Track, Edit & Share Your Created Polls Easily",
    description : 'Access all your created polls in one place! Manage, edit, and share your public or private polls easily. Check live results anytime!'
}
export default function Page(){
    return(
        <div>
            <ClientComponent/>
        </div>
    )
}