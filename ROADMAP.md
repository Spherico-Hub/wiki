# To add

## Pages

- [ ] Change S1/S2 to S4/5 in: 
    - [ ] Astro config in root
    - [ ] Filepath in `/src/contents/docs`

- [ ] Change sidebar config in frontmatters
    - `label` to change title in sidebar
    - `order` should already be fine. 

- [ ] Consider changing the theming 
    - That's just a wee bit of CSS, but lazyness. 

- [ ] Add a page to document the migration of config files
    - [ ] Eventually the modpack should not replace config files when importing

## Assets 

- [ ] Add permalinks for modpack file in `/src/contents/assets`
    - Add in `/src/contents/docs` if one can't obtain a link to paste in Prism

- [ ] Replace:
    - [ ] Favicon
    - [ ] Logo

- Consider also adding direct download links for resource/shader packs
    - If it exceeds [repo limit](https://docs.github.com/en/repositories/creating-and-managing-repositories/repository-limits), fuck it. 

## Modpack files

- Add modpack files to:
    - [ ] `/src/contents/assets`
    - [ ] Google Drive (S5)
    - [ ] Github repo cuz we're nerdz


# To test

## Deployment

- [ ] Test deployment on Github pages
    - View [issues](https://github.com/itsaerosphere/wiki/issues/1) on [failed deploy action](https://github.com/itsaerosphere/wiki/actions/runs/20173385184)
    - [ ] Set DNS CNAME record to point from GHP to `spherico.one`
    - Since I have no access to DNS nor repo settings, this is all you brother. 

- [ ] Test deployment on local server
    - Only if repo exceeds 1GB
    - This should only be an issue if we keep multiple modpack files. 
    - This requires an Nginx instance. No, we're not doing Docker.

# Management of the repo

- Consider moving the roadmap to [issues](https://github.com/itsaerosphere/wiki/issues) for easier tracking. 
- Also consider making the wiki part of a wider repo for the server (with [project](https://github.com/itsaerosphere/wiki/projects?query=is%3Aopen) management?)
    - If you want me to help in the dev of the server that'll be a must. 

# Other tasks

- [ ] Learn how to use [nvim](https://github.com/neovim/neovim) dammit. [It's not that hard](https://vim.rtorr.com/).
