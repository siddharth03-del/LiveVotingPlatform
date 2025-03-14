export async function GET() {
    const baseUrl = "https://crazypolls.com"; // Change this when deploying

    try {
        // Fetch all public polls from your backend API
        const response = await fetch("https://livevotingplatform.onrender.com/api/poll/all");

        if (!response.ok) {
            throw new Error("Failed to fetch polls");
        }
        const polls = await response.json();
        // Generate URLs dynamically for each poll
        const urls = polls.data.map(poll => `
            <url>
                <loc>${baseUrl}/poll/${encodeURIComponent(poll.name.replace(/\s+/g, "-"))}</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                <priority>0.8</priority>
            </url>
        `).join("");

        // Build final sitemap XML
        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            <url>
                <loc>${baseUrl}/</loc>
                <priority>1.0</priority>
            </url>
            <url>
                <loc>${baseUrl}/service/publicpolls</loc>
                <priority>0.9</priority>
            </url>
            <url>
                <loc>${baseUrl}/service/create</loc>
                <priority>1.0</priority>
            </url>
            <url>
                <loc>${baseUrl}/service/contactus</loc>
                <priority>0.7</priority>
            </url>
            <url>
                <loc>${baseUrl}/service/aboutus</loc>
                <priority>0.7</priority>
            </url>
            ${urls}
        </urlset>`;

        return new Response(sitemap, {
            headers: {
                "Content-Type": "application/xml",
            },
        });

    } catch (error) {
        console.error("Sitemap Generation Error:", error);
        return new Response("Failed to generate sitemap", { status: 500 });
    }
}
