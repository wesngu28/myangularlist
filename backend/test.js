import { parse } from "node-html-parser"
import { writeFileSync } from "fs"

const userInput = "martianluther"
const list = "anime"
const link = `https://myanimelist.net/${list}list/${userInput}`

async function parsers() {
    const fetched = await fetch(link)
    const fetchedjson = await fetched.text()
    const parsed = parse(fetchedjson)
    const shows = parsed.querySelector('table')
    console.log(shows)
    // writeFileSync('testss.txt', shows)
}

parsers()