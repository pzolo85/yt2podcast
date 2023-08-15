# yt2podcast

## Description
Deno project to serve a youtube channel, or local files as a podcast.

## Installation

## Get started
- Create a `config.ts` file.
- Use the helper function to fill in the config:
```
import { configCreate } from "./helpers/configCreate.ts";

export default configCreate({
    baseURL: 'http://my.server.com:9090/some/base/path',
    port: 6060,
    sources: [
        {
            name: 'My audio book',
            type: "filesystem",
            url: 'audiobook001',
            location: '/var/tmp/the_future/'
        }
    ]
})
```

## Run the server
- Start with debug enabled: `DEBUG=1 deno run -A  main.ts`