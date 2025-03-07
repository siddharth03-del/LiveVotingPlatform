import ClientComponent from "./clientComponent";


export const metadata = {
    title: 'Create a Public or Private Poll | Interactive Voting Platform',
    description : 'Want to know what people think? Create a free online poll, share it instantly, and gather real-time opinions. Public & private polls available!'
}
export default function Page(){
    return(
        <div>
            <ClientComponent/>
        </div>
    )
}