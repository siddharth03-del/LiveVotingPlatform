import Myvotes from "@/components/organisms/myvotes";

export const metadata = {
    title : 'Your Votes | See Polls You’ve Voted On & Track Results',
    description : 'Curious about your past votes? View all the polls you’ve voted on, track vote counts, and stay engaged with trending discussions!'
}
export default function Page(){
    return(
        <div>
            <h1 className="text-xl md:text-2xl font-bold text-blue-600">My Votes</h1>
            <p className="text-gray-600 md:text-lg mt-1 mb-8">View all the polls you’ve participated in.</p>
            <Myvotes/>
        </div>
    )
}