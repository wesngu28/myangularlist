export const config = {
    runtime: 'edge'
}

import { parse } from "node-html-parser"

export default async function parser (req: Request) {
    const { searchParams } = new URL(req.url)
    const username = searchParams.get('user')
    const listtype = searchParams.get('type')
    const link = `https://myanimelist.net/${listtype}list/${username}`
    const malhtml = await fetch(link)
    const maljson = await malhtml.text()
    const uncleanlist = parse(maljson)
    try {
        let table = uncleanlist.querySelector('table')
        if (table) {
            const shows = table.rawAttrs.replace(`class="list-table" data-items="`, '')
            let list = shows.slice(0, shows.length-2).replaceAll("&quot;", `"`)
            const databroadcasts = list.indexOf("data-broadcasts")
            const showsObject = databroadcasts > -1 ? JSON.parse(list.slice(0, databroadcasts-2)) : JSON.parse(list + "]")
            return new Response(JSON.stringify(showsObject.map((show: any) => {
                return {
                    rating: show.score,
                    tier: show.score < 3 ? "F" : show.score < 5 ? "D" : show.score < 7  ? "C" : show.score < 7 ? "B" : show.score < 10 ? "A" : "S",
                    title: listtype === "anime" ? show.anime_title : show.manga_title,
                    title_eng: listtype === "anime" ? show.anime_title_eng : show.manga_english,
                    url: listtype === "anime" ? show.anime_url : show.manga_url,
                    img: listtype === "anime" ? show.anime_image_path : show.manga_image_path,
                    release_date: listtype === "anime" ? show.anime_start_date_string : show.manage_start_date_string,
                    created_at: show.created_at
                }
            })),
            {
                status: 200,
                headers: {
                    'content-type': 'application/json',
                    'Access-Control-Allow-Origin': 'http://localhost:4200'
                },
            });
        } else {
            throw new Error("No table exists")
        }
    } catch (err) {
        console.log(err)
        return new Response(
            JSON.stringify({ error: "Invalid parameters provided"}),
            {
                status: 200,
                headers: {
                    'content-type': 'application/json',
                },
            }
        )
    }
}