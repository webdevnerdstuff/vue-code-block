# Change Log
All notable changes to the "vue-code-block" plugin will be documented in this file.

## v2.2.15
11-13-2023
[main] (@webdevnerdstuff)
* Add binding props to slots
* Update docs

## v2.2.13
11-09-2023
[main] (@webdevnerdstuff)
* Add `cssPath` prop to component to allow for custom css file path to be used.
* Update packages.

## v2.2.11
06-11-2023
[main] (@webdevnerdstuff)
* Changing Highlight.js to include all languages by default.
  * Unfortunately, adding additional languages was not working as expected, so this is the best solution I can think of for now.
* Updated typings for Props as well as composables.
* Changing compiling to use a Vite config instead of rollup so d.ts file aliases resolve correctly.

## v2.1.1
04-16-2023
[main] (@webdevnerdstuff)
* Changing importing of css/scss/sass to use @use instead of @import.

## v2.1.0
04-16-2023
[main] (@webdevnerdstuff)
* Changing component to use the min version of the default themes.
* Reorganizing default themes to new location.
  * This is a breaking change if you are importing the default themes from the `node_modules` folder. You will need to update your import paths to the new location.
  * If you are using the default themes without using `import` then you will not be affected by this change.
* Fixing HighlightJS default theme style causing icon to appear over a scrollbar when present.
* Adding sass scripts to package.json to compile scss files to css.

## v2.0.1 - v2.0.6
04-15-2023
[main] (@webdevnerdstuff)
* Minor changes to fix issues after testing npm packaging.

## v2.0.0
04-15-2023
[main] (@webdevnerdstuff)
* Major release update. Added in support to use either PrismJS or HighlightJS.

## v1.0.15
04-02-2023
[main] (@webdevnerdstuff)
* Minor changes to fix issues after testing npm packaging.

## v1.0.0
03-16-2023
[main] (@webdevnerdstuff)
* Initial release
