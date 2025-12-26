// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { ion } from 'starlight-ion-theme';
// import starlightLinksValidator from 'starlight-links-validator'; // Uncomment when actually in use


// https://astro.build/config for more information
export default defineConfig({
    // basic site config

    // For site location config
    site: "https://wiki.spherico.one", // Uncomment when DNS setup is done. 

    trailingSlash: "ignore",
    integrations: [
        starlight({
            title: 'Wiki',
			logo: {
				light: './src/assets/logo-light.svg',
				dark: './src/assets/logo-dark.svg',
			},
			favicon: '/favicon.ico',
			lastUpdated: false,
			plugins: [
				ion({
					footer: {
						text: 'Built with spite, weaponized autism and plenty of swearing.',
					},
					icons: undefined
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
					link: '/rules',
				},
				{
					label: 'Minecraft S4',
					autogenerate: {
						directory: 'minecraft/s4', 
						collapsed: false,
					},
					badge: {
						text: 'Active',
						variant: 'success',
					},
				},
				{
					label: 'Minecraft S5',
					autogenerate: {
						directory: '', 
						collapsed: true,
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
