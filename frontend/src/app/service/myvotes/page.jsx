import Myvotes from "@/components/organisms/myvotes";

export const metadata = {
    title : 'Your Votes | See Polls You’ve Voted On & Track Results',
    description : 'Curious about your past votes? View all the polls you’ve voted on, track vote counts, and stay engaged with trending discussions!'
}
export default function Page(){
    return(
        <div>
            <Myvotes/>
        </div>
    )
}