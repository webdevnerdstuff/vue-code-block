# Change Log
All notable changes to the "vue3-code-block" plugin will be documented in this file.

## v2.2.11
2023-06-11
[main] (@webdevnerdstuff)
* Changing Highlight.js to include all languages by default.
  * Unfortunately, adding additional languages was not working as expected, so this is the best solution I can think of for now.
* Updated typings for Props as well as composables.
* Changing compiling to use a Vite config instead of rollup so d.ts file aliases resolve correctly.

## v2.1.1
2023-04-16
[main] (@webdevnerdstuff)
* Changing importing of css/scss/sass to use @use instead of @import.

## v2.1.0
2023-04-16
[main] (@webdevnerdstuff)
* Changing component to use the min version of the default themes.
* Reorganizing default themes to new location.
  * This is a breaking change if you are importing the default themes from the `node_modules` folder. You will need to update your import paths to the new location.
  * If you are using the default themes without using `import` then you will not be affected by this change.
* Fixing HighlightJS default theme style causing icon to appear over a scrollbar when present.
* Adding sass scripts to package.json to compile scss files to css.

## v2.0.1 - v2.0.6
2023-04-15
[main] (@webdevnerdstuff)
* Minor changes to fix issues after testing npm packaging.

## v2.0.0
2023-04-15
[main] (@webdevnerdstuff)
* Major release update. Added in support to use either PrismJS or HighlightJS.

## v1.0.15
2023-04-02
[main] (@webdevnerdstuff)
* Minor changes to fix issues after testing npm packaging.

## v1.0.0
2023-03-16
[main] (@webdevnerdstuff)
* Initial release
