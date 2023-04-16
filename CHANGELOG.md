# Change Log
All notable changes to the "vue3-code-block" plugin will be documented in this file.

## v1.0.0
2023-03-16
[main] (@webdevnerdstuff)
* Initial release

## v1.0.15
2023-04-02
[main] (@webdevnerdstuff)
* Minor changes to fix issues after testing npm packaging.

## v2.0.0
2023-04-15
[main] (@webdevnerdstuff)
* Major release update. Added in support to use either PrismJS or HighlightJS.

## v2.0.1 - v2.0.6
2023-04-15
[main] (@webdevnerdstuff)
* Minor changes to fix issues after testing npm packaging.

## v2.1.0
2023-04-16
[main] (@webdevnerdstuff)
* Reorganizing default themes to new location.
  * This is a breaking change if you are importing the default themes from the `node_modules` folder. You will need to update your import paths to the new location.
  * If you are using the default themes without using `import` then you will not be affected by this change.
* Fixing HighlightJS default theme style causing icon to appear over a scrollbar when present.
* Adding sass scripts to package.json to compile scss files to css.
