# Spherico Wiki

[Built with Starlight](https://starlight.astro.build) and Github pages. 

## Structure
### Pages
Global config can be edited under `astro.config.mjs`. 
Pages are searched in the `./src/assets/content/docs` directory.
They can be of the `.md` or `.mdx` format.
    *Use Github Flavoured markdown*.
The `.astro` format is also supported, but it's more akin to HTML than markdown. 

For markdown type files, be sure to include a frontmatter:
```
---
title: <title of the page>
tableOfContents: <true/false>
---
```

### Images
Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
|-|-|
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

The dev server runs changes in real time. The only limitation is that the search engine is not functional. 
To update changes made remotely, run a `git pull` (webhook to be added)

## More information

More information can be found on [Starlight’s docs](https://starlight.astro.build/), [the Astro documentation](https://docs.astro.build), and in the [Astro Discord server](https://astro.build/chat) (if you really like pain). 
