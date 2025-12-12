// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { ion } from 'starlight-ion-theme';


// https://astro.build/config for more information
export default defineConfig({
    // basic site config
    site: "https://spherico.one",
    trailingSlash: "ignore",
    integrations: [
        starlight({
            title: 'Spherico',
	    logo: {
		light: './src/assets/logo-light.svg',
		dark: './src/assets/logo-dark.svg',
	    },
	    favicon: './src/assets/logo-dark.svg',
	    lastUpdated: true,
	    plugins: [
		ion({
		    footer: {
			text: 'Built with spite, weaponized autism and plenty of swearing.',
		    },
		}),
	    ],
            tableOfContents: true,
            social: [
                { icon: 'github', label: 'Source', href: 'https://github.com/itsaerosphere/wiki' },
            ],
            sidebar: [
		{
		    label: '[home] Home',
		    link: '/',
		},
		{
		    label: 'Season 1',
		    autogenerate: { directory: 'server/S1', collapsed: false, },
		},
            ],
        }),
    ],
});
