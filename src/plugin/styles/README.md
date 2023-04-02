# Vue3 CodeBlock Theme Tab Styles

If you would like to contribute any missing theme tab styles please follow the instructions below.  
\* I am not currently accepting any custom themes to be integrated into the plugin at this time.

## Getting Started
Before you get started, please read the [Contributing](https://github.com/webdevnerdstuff/vue3-code-block/blob/main/.github/CONTRIBUTING.md) and [Contributor Covenant Code of Conduct](https://github.com/webdevnerdstuff/vue3-code-block/blob/main/.github/CODE_OF_CONDUCT.md) pages.

1. Fork the repository.
2. Clone the forked repository to your local machine.
3. Create a new branch for your changes.
4. Install the node packages `pnpm i`. Please do not use `npm` or `yarn`.
5. Run the development server `pnpm watch`.
6. You can view the demo site at `http://localhost:5173/vue3-code-block/`.

#### Additional notes
Make sure your `css` and `scss` files are using tabbed spacing. When adding themes, do not change or alter any other files than the ones mentioned below. If you have a bug fix please make your changes in a separate branch and create a separate pull request.

## Add new theme variables
Update `cssVariables.css` by including the new theme variables. All values must use the [hsl](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl) color format.

#### libraryName:  
Available options include: `prism` or `highlightjs`. Exclude the square brackets.  

#### themeName:  
The name of the theme. This must match the themes css file name (excluding the `min` and `.css` extension) Exclude the square brackets.  
  
If you are adding themes from the [Prism Themes Repo](https://github.com/PrismJS/prism-themes), prefix the theme name with `themes-`. Ex. `themes-night-owl`. Do no include the `prism-` prefix into the theme name.

```css
--v-cb-tab-[libraryName]-[themeName]-bkg: 0 0% 0%;
--v-cb-tab-[libraryName]-[themeName]-text: 0 0% 0%;
--v-cb-tab-[libraryName]-[themeName]-icon: 0 0% 0%;
--v-cb-tab-[libraryName]-[themeName]-icon-success: 0 0% 0%;
--v-cb-tab-[libraryName]-[themeName]-icon-failed: 0 0% 0%;
```

## Update themes to be compiled
Update `themeStyles.scss` by including the new theme name.

#### [Highlight.js](https://highlightjs.org/) themes
Add the theme name into the `$hljs-themes` variable.  For base16 themes, use a dash to separate base16 from the theme name. Ex. `base16-onedark`. The list should be alphabetically organized. No other changes are needed as the themes are built within a loop. If it requires additional styles, it should be added under the `// Themes with additional styles //` section.

#### [Prism](https://prismjs.com/) themes
Not all themes from the [Prism Themes Repo](https://github.com/PrismJS/prism-themes) have been added.  
Add the theme using the following as a template under the section `// ? Add new Prism Themes here //`. Themes are alphabetically organized.  

```
&-[themeName] {
	background-color: hsl(var(--v-cb-tab-prism-themes-[themeName]-bkg) / 100%) !important;

	&:hover {
		background-color: hsl(var(--v-cb-tab-prism-themes-[themeName]-bkg) / 50%) !important;
	}

	&-icon {
		color: hsl(var(--v-cb-tab-prism-themes-[themeName]-icon)) !important;
		fill: hsl(var(--v-cb-tab-prism-themes-[themeName]-icon)) !important;

		&-status {
			&-success {
				color: hsl(var(--v-cb-tab-prism-themes-[themeName]-icon-success)) !important;
				fill: hsl(var(--v-cb-tab-prism-themes-[themeName]-icon-success)) !important;
			}

			&-failed {
				color: hsl(var(--v-cb-tab-prism-themes-[themeName]-icon-failed)) !important;
				fill: hsl(var(--v-cb-tab-prism-themes-[themeName]-icon-failed)) !important;
			}
		}
	}

	> div {
		color: hsl(var(--v-cb-tab-prism-themes-[themeName]-text));
	}
}
```

## Test your changes
There are plenty of examples in the demo site, so please make sure to test your changes before submitting a pull request. 

## Thank you!
Thank you for your contribution! I appreciate your time and effort to help make this plugin better for everyone.
