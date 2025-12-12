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
	    lastUpdated: false,
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
		{ icon: 'discord', label: 'Discord', href: 'https://discord.gg/dSjmeM5yAy', },
            ],
            sidebar: [
		{
		    label: '[home] Home',
		    link: '/',
		},
		{
		    label: 'Rules',
		    link: '/server/rules',
		},
		{
		    label: 'Season 1',
		    autogenerate: {
			directory: 'server/S1', collapsed: false,
		    },
		},
		{
		    label: 'Season 2',
		    autogenerate: {
			directory: 'server/S2', collapsed: true,
		    },
		    badge: {
			text: 'Coming soon!',
			variant: 'caution',
		    },
		},
		{
		    label: 'World Map',
		    link: 'https://map.spherico.one',
		},
            ],
        }),
    ],
});
