import ClientComponent from "./clientComponent";

export async function generateMetadata({ params }) {
    if (!params || !params.pollname) return {}; // Handle missing params safely

    const pollname = decodeURIComponent(params.pollname.replace(/-/g, " "));
    return {
        title: `${pollname} - Vote & Discuss | CrazyPolls`,
        description: `Cast your vote on '${pollname}' and see what others think! Join CrazyPolls today.`,
    };
}

export default async function Page({ params }) {
    if (!params || !params.pollname) {
        return <h1>Poll Not Found</h1>; // Prevent error if params are missing
    }

    try {
        const urlparams = new URLSearchParams({
            "poll_name" : params.pollname
        })
        const res = await fetch(`https://livevotingplatform.onrender.com/api/poll/getone?${urlparams}`,{
            method: 'GET',
            headers : {
                'Content-Type' : 'application/json'
            }
        });

        if (!res.ok) throw new Error("Failed to fetch poll"); // Handle errors properly
        const poll = await res.json();
        return (
            <>
                <h1 className="text-xl text-blue-600 font-bold md:text-2xl">{`Vote & Discuss - ${poll?.data?.name}` || "Poll Not Found"}</h1>
                <ClientComponent poll={poll.data}/>
            </>
        );
    } catch (error) {
        console.log(error);
        return <h1>Error: Unable to fetch poll</h1>;
    }
}
