/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/css/styles.css":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/css/styles.css ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*\n! tailwindcss v3.0.23 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/*\nEnsure the default browser behavior of the `hidden` attribute.\n*/\n\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.container {\n  width: 100%;\n}\n@media (min-width: 640px) {\n\n  .container {\n    max-width: 640px;\n  }\n}\n@media (min-width: 768px) {\n\n  .container {\n    max-width: 768px;\n  }\n}\n@media (min-width: 1024px) {\n\n  .container {\n    max-width: 1024px;\n  }\n}\n@media (min-width: 1280px) {\n\n  .container {\n    max-width: 1280px;\n  }\n}\n@media (min-width: 1536px) {\n\n  .container {\n    max-width: 1536px;\n  }\n}\n.fixed {\n  position: fixed;\n}\n.relative {\n  position: relative;\n}\n.top-0 {\n  top: 0px;\n}\n.left-0 {\n  left: 0px;\n}\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.my-4 {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n.mb-4 {\n  margin-bottom: 1rem;\n}\n.ml-3 {\n  margin-left: 0.75rem;\n}\n.mt-auto {\n  margin-top: auto;\n}\n.mb-6 {\n  margin-bottom: 1.5rem;\n}\n.mt-1 {\n  margin-top: 0.25rem;\n}\n.block {\n  display: block;\n}\n.flex {\n  display: flex;\n}\n.inline-flex {\n  display: inline-flex;\n}\n.hidden {\n  display: none;\n}\n.h-6 {\n  height: 1.5rem;\n}\n.h-5 {\n  height: 1.25rem;\n}\n.h-4 {\n  height: 1rem;\n}\n.h-screen {\n  height: 100vh;\n}\n.min-h-screen {\n  min-height: 100vh;\n}\n.w-6 {\n  width: 1.5rem;\n}\n.w-4 {\n  width: 1rem;\n}\n.w-screen {\n  width: 100vw;\n}\n.w-\\[480px\\] {\n  width: 480px;\n}\n.w-full {\n  width: 100%;\n}\n.max-w-full {\n  max-width: 100%;\n}\n.cursor-pointer {\n  cursor: pointer;\n}\n.select-none {\n  user-select: none;\n}\n.flex-col {\n  flex-direction: column;\n}\n.items-start {\n  align-items: flex-start;\n}\n.items-center {\n  align-items: center;\n}\n.justify-end {\n  justify-content: flex-end;\n}\n.justify-center {\n  justify-content: center;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.space-x-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.5rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-x-1 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.25rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.25rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-x-4 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(1rem * var(--tw-space-x-reverse));\n  margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-y-4 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(1rem * var(--tw-space-y-reverse));\n}\n.overflow-auto {\n  overflow: auto;\n}\n.overflow-hidden {\n  overflow: hidden;\n}\n.overflow-y-scroll {\n  overflow-y: scroll;\n}\n.scroll-smooth {\n  scroll-behavior: smooth;\n}\n.rounded-lg {\n  border-radius: 0.5rem;\n}\n.rounded {\n  border-radius: 0.25rem;\n}\n.rounded-md {\n  border-radius: 0.375rem;\n}\n.border {\n  border-width: 1px;\n}\n.border-t {\n  border-top-width: 1px;\n}\n.border-b {\n  border-bottom-width: 1px;\n}\n.border-slate-300 {\n  --tw-border-opacity: 1;\n  border-color: rgb(203 213 225 / var(--tw-border-opacity));\n}\n.border-slate-200 {\n  --tw-border-opacity: 1;\n  border-color: rgb(226 232 240 / var(--tw-border-opacity));\n}\n.border-transparent {\n  border-color: transparent;\n}\n.bg-zinc-50 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(250 250 250 / var(--tw-bg-opacity));\n}\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n.bg-orange-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(234 88 12 / var(--tw-bg-opacity));\n}\n.bg-black\\/75 {\n  background-color: rgb(0 0 0 / 0.75);\n}\n.bg-transparent {\n  background-color: transparent;\n}\n.p-4 {\n  padding: 1rem;\n}\n.py-6 {\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n}\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.pt-\\[3px\\] {\n  padding-top: 3px;\n}\n.text-center {\n  text-align: center;\n}\n.font-sans {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n}\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.text-3xl {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n.font-bold {\n  font-weight: 700;\n}\n.font-medium {\n  font-weight: 500;\n}\n.italic {\n  font-style: italic;\n}\n.text-orange-600 {\n  --tw-text-opacity: 1;\n  color: rgb(234 88 12 / var(--tw-text-opacity));\n}\n.text-slate-400 {\n  --tw-text-opacity: 1;\n  color: rgb(148 163 184 / var(--tw-text-opacity));\n}\n.text-sky-500 {\n  --tw-text-opacity: 1;\n  color: rgb(14 165 233 / var(--tw-text-opacity));\n}\n.text-slate-700 {\n  --tw-text-opacity: 1;\n  color: rgb(51 65 85 / var(--tw-text-opacity));\n}\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n.underline {\n  text-decoration-line: underline;\n}\n.placeholder-slate-400::placeholder {\n  --tw-placeholder-opacity: 1;\n  color: rgb(148 163 184 / var(--tw-placeholder-opacity));\n}\n.opacity-0 {\n  opacity: 0;\n}\n.shadow-lg {\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-sm {\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.transition {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.selection\\:bg-pink-300 *::selection {\n  --tw-bg-opacity: 1;\n  background-color: rgb(249 168 212 / var(--tw-bg-opacity));\n}\n.selection\\:bg-pink-300::selection {\n  --tw-bg-opacity: 1;\n  background-color: rgb(249 168 212 / var(--tw-bg-opacity));\n}\n.hover\\:cursor-pointer:hover {\n  cursor: pointer;\n}\n.hover\\:border-slate-200:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(226 232 240 / var(--tw-border-opacity));\n}\n.hover\\:bg-orange-700:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(194 65 12 / var(--tw-bg-opacity));\n}\n.hover\\:text-sky-500:hover {\n  --tw-text-opacity: 1;\n  color: rgb(14 165 233 / var(--tw-text-opacity));\n}\n.hover\\:text-red-500:hover {\n  --tw-text-opacity: 1;\n  color: rgb(239 68 68 / var(--tw-text-opacity));\n}\n.hover\\:text-orange-600:hover {\n  --tw-text-opacity: 1;\n  color: rgb(234 88 12 / var(--tw-text-opacity));\n}\n.focus\\:border-sky-500:focus {\n  --tw-border-opacity: 1;\n  border-color: rgb(14 165 233 / var(--tw-border-opacity));\n}\n.focus\\:outline-none:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.focus\\:ring-1:focus {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n.focus\\:ring-sky-500:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(14 165 233 / var(--tw-ring-opacity));\n}\n.active\\:border-slate-400:active {\n  --tw-border-opacity: 1;\n  border-color: rgb(148 163 184 / var(--tw-border-opacity));\n}\n.active\\:bg-orange-800:active {\n  --tw-bg-opacity: 1;\n  background-color: rgb(154 52 18 / var(--tw-bg-opacity));\n}\n.active\\:bg-slate-200:active {\n  --tw-bg-opacity: 1;\n  background-color: rgb(226 232 240 / var(--tw-bg-opacity));\n}\n.group:hover .group-hover\\:opacity-100 {\n  opacity: 1;\n}\n@media (min-width: 768px) {\n\n  .md\\:grid {\n    display: grid;\n  }\n\n  .md\\:grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .md\\:gap-4 {\n    gap: 1rem;\n  }\n}\n@media (min-width: 1024px) {\n\n  .lg\\:grid-cols-\\[1fr_2fr\\] {\n    grid-template-columns: 1fr 2fr;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/css/styles.css","webpack://./src/css/%3Cinput%20css%20O6otEe%3E","<no source>"],"names":[],"mappings":"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","sourcesContent":["@tailwind base;\n@tailwind components;\n@tailwind utilities;\n","/*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: theme('borderColor.DEFAULT', currentColor); /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  tab-size: 4; /* 3 */\n  font-family: theme('fontFamily.sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"); /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: theme('fontFamily.mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace); /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: theme('colors.gray.400', #9ca3af); /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/*\nEnsure the default browser behavior of the `hidden` attribute.\n*/\n\n[hidden] {\n  display: none;\n}\n",null],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/styles.css":
/*!****************************!*\
  !*** ./src/css/styles.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/css/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/LocStorage.js":
/*!******************************!*\
  !*** ./src/js/LocStorage.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "storage": () => (/* binding */ storage)
/* harmony export */ });
function LocStorage() {
  //
}

LocStorage.prototype.save = function (obj) {
  const label = obj.constructor.name;
  const id = obj.id || '';
  localStorage.setItem(`${label}_${id}`, JSON.stringify(obj));
};

LocStorage.prototype.get = function (key) {
  return JSON.parse(localStorage.getItem(key));
};

LocStorage.prototype.remove = function (key) {
  localStorage.removeItem(key);
};

LocStorage.prototype.removeProject = function (key) {
  const keys = this.get(key).todos.map((id) => `Todo_${id}`);
  [...keys, key].forEach((k) => this.remove(k));
};

LocStorage.prototype.isEmpty = function () {
  return localStorage.length === 0;
};

// TODO: is it better to save manager, projects, todos separately?

const storage = new LocStorage();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LocStorage);



/***/ }),

/***/ "./src/js/Modal.js":
/*!*************************!*\
  !*** ./src/js/Modal.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/modal */ "./src/js/components/modal.js");
/* harmony import */ var _components_projectForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/projectForm */ "./src/js/components/projectForm.js");
/* harmony import */ var _components_todoForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/todoForm */ "./src/js/components/todoForm.js");
/* harmony import */ var _utils_getScrollWidth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/getScrollWidth */ "./src/js/utils/getScrollWidth.js");





function Modal() {
  //
}

function insertHelperStyles() {
  const styles = document.createElement('style');
  styles.innerHTML = `
    :root { --scroll-width: ${(0,_utils_getScrollWidth__WEBPACK_IMPORTED_MODULE_3__["default"])()}px; }

    .body-padding-fix {
      padding-right: var(--scroll-width);
    }
  `;
  document.head.appendChild(styles);
}

Modal.prototype.init = function () {
  insertHelperStyles();
  [_components_projectForm__WEBPACK_IMPORTED_MODULE_1__["default"], _components_todoForm__WEBPACK_IMPORTED_MODULE_2__["default"]].forEach((config) => {
    this.renderModal(config);
  });
  this.addHandlers();
};

Modal.prototype.renderModal = function (config) {
  document.body.insertAdjacentHTML('beforeend', (0,_components_modal__WEBPACK_IMPORTED_MODULE_0__["default"])(config));
};

Modal.prototype.openModal = function (modal) {
  document.body.classList.add('overflow-hidden', 'body-padding-fix');
  document.body.classList.remove('overflow-y-scroll');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
};

Modal.prototype.closeModal = function (modal) {
  document.body.classList.remove('overflow-hidden', 'body-padding-fix');
  document.body.classList.add('overflow-y-scroll');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
};

Modal.prototype.closeAllModals = function () {
  (document.querySelectorAll('.js-modal') || []).forEach((modal) => {
    this.closeModal(modal);
  });
};

Modal.prototype.addHandlers = function () {
  document.addEventListener('DOMContentLoaded', () => {
    // open modal by [data-modal-target="modal_id"]
    document.addEventListener('click', (e) => {
      const { target } = e;
      if (target.closest('[data-modal-target]')) {
        const id = target.closest('[data-modal-target]').dataset.modalTarget;
        const modal = document.getElementById(id);
        this.openModal(modal);
      }
    });

    // close modal by [data-modal-closer]
    // TODO: check for newly created items; use event delegation?
    (document.querySelectorAll('[data-modal-closer]') || []).forEach((closer) => {
      const modal = closer.closest('.js-modal');

      closer.addEventListener('click', () => {
        this.closeModal(modal);
      });
    });

    // close modal by Esc
    document.addEventListener('keydown', (event) => {
      const e = event || window.event;

      if (e.code === 'Escape') {
        this.closeAllModals();
      }
    });
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);


/***/ }),

/***/ "./src/js/Project.js":
/*!***************************!*\
  !*** ./src/js/Project.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LocStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LocStorage */ "./src/js/LocStorage.js");
/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Todo */ "./src/js/Todo.js");
/* harmony import */ var _utils_id__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/id */ "./src/js/utils/id.js");
/* harmony import */ var _utils_trimStr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/trimStr */ "./src/js/utils/trimStr.js");





function Project(data) {
  // TODO: do I need to add todos param?
  // TODO: replace data object with {...} like in ProjectsManager constructor
  const { id, title, todos } = data;

  this.id = id || (0,_utils_id__WEBPACK_IMPORTED_MODULE_2__["default"])();
  this.title = (0,_utils_trimStr__WEBPACK_IMPORTED_MODULE_3__["default"])(title); // or 'Untitled'?
  this.todos = todos || [];
}

Project.prototype.storage = _LocStorage__WEBPACK_IMPORTED_MODULE_0__.storage;

// TODO: it's not clear is it a Todo item or {}
Project.prototype.addTodo = function (todo_) {
  // TODO: do something with param reassignment
  let todo = todo_;
  // TODO: not sure about need of check for 'Todo' object
  // use in render new todo already so be aware!
  if (!(todo instanceof _Todo__WEBPACK_IMPORTED_MODULE_1__["default"])) {
    todo = new _Todo__WEBPACK_IMPORTED_MODULE_1__["default"](todo);
  }
  this.todos.push(todo.id);
  // NOTE: need to add storage obj to proto!
  this.storage.save(todo);
  this.save();

  return todo.id;
};

Project.prototype.removeTodo = function (id) {
  this.todos = this.todos.filter((i) => i !== id);
  this.storage.remove(`Todo_${id}`);
  this.save();
};

Project.prototype.getRestoredTodo = function (id) {
  const obj = this.storage.get(`Todo_${id}`);
  return new _Todo__WEBPACK_IMPORTED_MODULE_1__["default"](obj);
};

// TODO: maybe avoid removing todo from storage?
// TODO: maybe pass projectId?
Project.prototype.moveTodo = function (todo, project) {
  console.warn('WARNING! .moveTodo() does not work yet!');
  this.removeTodo(todo.id);
  project.addTodo(todo);
};

Project.prototype.update = function (data) {
  Object.assign(this, data);
  this.save();
};

Project.prototype.save = function () {
  this.storage.save(this);
};

Project.prototype.loadData = function (json) {
  // TODO: do I need this check?
  // TODO: actually can handle array/object cases with
  // console.log(json.constructor.name) or json instanceof Array;
  try {
    json.forEach((item) => {
      this.addTodo(new _Todo__WEBPACK_IMPORTED_MODULE_1__["default"](item));
    });
  } catch (err) {
    console.warn('WARNING! Require an array of objects\n', err);
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);


/***/ }),

/***/ "./src/js/ProjectsManager.js":
/*!***********************************!*\
  !*** ./src/js/ProjectsManager.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "projectsManager": () => (/* binding */ projectsManager)
/* harmony export */ });
/* harmony import */ var _LocStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LocStorage */ "./src/js/LocStorage.js");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project */ "./src/js/Project.js");



function ProjectsManager({ projects, defaultProject, currentProject }) {
  this.projects = projects || [];
  this.defaultProject = defaultProject || null;
  this.currentProject = currentProject || null;
}

ProjectsManager.prototype.storage = _LocStorage__WEBPACK_IMPORTED_MODULE_0__.storage;

ProjectsManager.prototype.save = function () {
  this.storage.save(this);
};

ProjectsManager.prototype.addProject = function (id) {
  this.projects.push(id);
  this.save();
};

// TODO: add warning about deleting {n} todo items
ProjectsManager.prototype.deleteProject = function (id) {
  if (id === this.defaultProject) {
    console.warn('WARNING: Cannot delete default project');
    return;
  }

  if (id === this.currentProject) {
    this.setCurrentProject(this.defaultProject);
  }

  this.projects = this.projects.filter((i) => i !== id);
  this.save();

  this.storage.removeProject(`Project_${id}`);
};

ProjectsManager.prototype.getRestoredProject = function (id) {
  return new _Project__WEBPACK_IMPORTED_MODULE_1__["default"](this.storage.get(`Project_${id}`));
};

ProjectsManager.prototype.setCurrentProject = function (id) {
  this.currentProject = id;
  this.save();
};

const projectsManager = (function initPM() {
  let pm;

  if (_LocStorage__WEBPACK_IMPORTED_MODULE_0__.storage.isEmpty()) {
    pm = new ProjectsManager({});
    const defautProject = new _Project__WEBPACK_IMPORTED_MODULE_1__["default"]({ title: 'Inbox' });
    defautProject.save();
    const { id } = defautProject;
    pm.defaultProject = id;
    pm.currentProject = id;
    pm.addProject(id);
    // defautProject.loadData(demoTodosData);
  } else {
    const data = _LocStorage__WEBPACK_IMPORTED_MODULE_0__.storage.get('ProjectsManager_');
    pm = new ProjectsManager(data);
  }

  return pm;
})();


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectsManager);


/***/ }),

/***/ "./src/js/Todo.js":
/*!************************!*\
  !*** ./src/js/Todo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LocStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LocStorage */ "./src/js/LocStorage.js");
/* harmony import */ var _utils_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/id */ "./src/js/utils/id.js");
/* harmony import */ var _utils_trimStr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/trimStr */ "./src/js/utils/trimStr.js");




function Todo(data) {
  const { id, title, dueDate, priority = 'low', complete } = data;

  this.id = id || (0,_utils_id__WEBPACK_IMPORTED_MODULE_1__["default"])();
  this.title = (0,_utils_trimStr__WEBPACK_IMPORTED_MODULE_2__["default"])(title);
  this.dueDate = dueDate || new Date();
  this.priority = priority;
  this.complete = complete; // TODO: not sure (complete === 'on' was here)
}

Todo.prototype.storage = _LocStorage__WEBPACK_IMPORTED_MODULE_0__.storage;

Todo.prototype.save = function () {
  this.storage.save(this);
};

Todo.prototype.update = function (data) {
  // TODO: assume data doesn't have undefined values
  Object.assign(this, data);
  this.save();
};

// TODO: remove it?
Todo.prototype.toggle = function () {
  this.complete = !this.complete;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);


/***/ }),

/***/ "./src/js/UI.js":
/*!**********************!*\
  !*** ./src/js/UI.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "ui": () => (/* binding */ ui)
/* harmony export */ });
/* harmony import */ var _LocStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LocStorage */ "./src/js/LocStorage.js");
/* harmony import */ var _ProjectsManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectsManager */ "./src/js/ProjectsManager.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/layout */ "./src/js/components/layout.js");
/* harmony import */ var _components_checkbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/checkbox */ "./src/js/components/checkbox.js");
/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./handlers */ "./src/js/handlers.js");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Modal */ "./src/js/Modal.js");







function UI() {
  //
}

// NOTE: does it make sense to store pm/storage in prototype?
UI.prototype.pm = _ProjectsManager__WEBPACK_IMPORTED_MODULE_1__.projectsManager;
UI.prototype.storage = _LocStorage__WEBPACK_IMPORTED_MODULE_0__.storage;

UI.prototype.init = function () {
  document.querySelector('html').classList.add('scroll-smooth');
  document.body.classList.add(
    'relative',
    'min-h-screen',
    'overflow-y-scroll',
    'flex',
    'flex-col',
    'font-sans',
    'bg-zinc-50',
    'selection:bg-pink-300'
  );

  document.body.insertAdjacentHTML('beforeend', _components_layout__WEBPACK_IMPORTED_MODULE_2__["default"]);
  new _Modal__WEBPACK_IMPORTED_MODULE_5__["default"]().init();
  this.addHandlers();
};

function replaceOldItem(container, id, template) {
  const oldItem = container.querySelector(`#${id}`);
  if (oldItem !== null) {
    oldItem.insertAdjacentHTML('afterend', template);
    oldItem.remove();
  } else {
    container.insertAdjacentHTML('beforeend', template);
  }
}

UI.prototype.renderProject = function (id) {
  const container = document.querySelector('.js-projects-list');
  const { title } = this.storage.get(`Project_${id}`);
  // TODO: get id, title
  const template = `
    <div id="${id}" class="js-project-item ${id === this.pm.currentProject ? 'text-orange-600' : ''}
      mb-4 p-4 group flex justify-between items-center bg-white rounded-lg shadow-lg hover:cursor-pointer
    ">
      <span class="text-lg font-bold">${title}</span>
      <div class="space-x-2">
        <button
          class="js-btn-project-edit opacity-0 text-slate-400 group-hover:opacity-100 hover:text-sky-500 transition"
          type="button"
          title="Edit project"
          data-modal-target="modal-add-project"
        >
          <svg class="w-6 h-6"><use xlink:href="#icon-edit"></use></svg>
        </button>
        <button
          class="js-btn-project-delete opacity-0 text-slate-400 group-hover:opacity-100 hover:text-red-500 transition"
          type="button"
          title="Delete project"
        >
          <svg class="w-6 h-6"><use xlink:href="#icon-trash"></use></svg>
        </button>
      </div>
    </div>`;
  // TODO: show todos count?

  // replace old project node on 'edit/update' action
  replaceOldItem(container, id, template);
};

UI.prototype.highlightCurrentProject = function () {
  const activeClassName = 'text-orange-600';
  const list = document.querySelector('.js-projects-list');
  const projectEl = list.querySelector(`#${this.pm.currentProject}`);
  try {
    list.querySelector(`.${activeClassName}`).classList.remove(`${activeClassName}`);
  } catch (error) {
    console.log(`INFO: There is no highlighted project\n`, error);
  }
  projectEl.classList.add(`${activeClassName}`);
};

UI.prototype.renderTodo = function (id) {
  const container = document.querySelector('.js-todo-list');
  const { title, dueDate, priority, complete } = this.storage.get(`Todo_${id}`);
  const template = `
    <div id="${id}"
      class="js-todo-item mb-4 p-4 bg-white rounded-lg shadow-lg"
    >
      <div>${title}</div>
      <div>${dueDate}</div>
      <div>priority: ${priority}</div>
      <div>
        ${(0,_components_checkbox__WEBPACK_IMPORTED_MODULE_3__["default"])('Complete?', 'complete', `check_${id}`, complete)}
      </div>
      <div>
        <button
          class="js-btn-todo-edit underline italic text-slate-400 hover:text-sky-500 transition"
          type="button"
          title="Edit todo"
          data-modal-target="modal-add-todo"
        >
          <svg class="w-6 h-6"><use xlink:href="#icon-edit"></use></svg>
        </button>
        <button
          class="js-btn-todo-delete underline italic text-slate-400 hover:text-red-500 transition"
          type="button"
          title="Delete todo"
        >
          <svg class="w-6 h-6"><use xlink:href="#icon-trash"></use></svg>
        </button>
      </div>
    </div>
  `;

  // TODO: refactor render methods
  // replace old project node on 'edit/update' action
  replaceOldItem(container, id, template);
};

UI.prototype.removeNoTodosMessage = function () {
  const message = document.querySelector('.js-no-todos-message');
  if (message) {
    message.remove();
  }
};

UI.prototype.renderNoTodosMessage = function () {
  const message = `<p class="js-no-todos-message mb-4">Wow! Such empty! <span class="underline italic cursor-pointer" data-modal-target="modal-add-todo">Add first todo?</span></p>`;
  document.querySelector(
    '.js-todo-list'
  ).innerHTML = `<div class="js-no-todos-message">${message}</div>`;
};

UI.prototype.renderProjectTodos = function (projectId = this.pm.currentProject) {
  document.querySelector('.js-todo-list').innerHTML = '';
  const data = this.storage.get(`Project_${projectId}`);
  if (data.todos.length === 0) {
    this.renderNoTodosMessage();
  } else {
    data.todos.forEach((id) => {
      this.renderTodo(id);
    });
  }
};

UI.prototype.addHandlers = function () {
  (0,_handlers__WEBPACK_IMPORTED_MODULE_4__["default"])(this);
};

const ui = new UI();


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UI);


/***/ }),

/***/ "./src/js/components/checkbox.js":
/*!***************************************!*\
  !*** ./src/js/components/checkbox.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ checkbox)
/* harmony export */ });
function checkbox(label, name, id, checked) {
  return `
    <div class="flex items-start">
      <div class="flex items-center h-5 pt-[3px]">
        <input
          id="${id}"
          name="${name}"
          type="checkbox"
          class="js-todo-toggle focus:ring-sky-500 h-4 w-4 text-sky-500 border-slate-300 rounded"
          ${checked ? 'checked' : ''}
        />
      </div>
      <div class="ml-3">
        <label for="${id}" class="font-medium text-slate-700">${label}</label>
      </div>
    </div>
  `;
}


/***/ }),

/***/ "./src/js/components/footer.js":
/*!*************************************!*\
  !*** ./src/js/components/footer.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function footer() {
  return `
  <footer class="mt-auto border-t text-center">
    <div class="container mx-auto py-6">
      <a
        href="https://github.com/greqov/odin-todo-list"
        target="_blank"
        class="flex justify-center items-center space-x-1"
      >
        <svg class="w-6 h-6"><use xlink:href="#icon-code"></use></svg>
        <span>Github</span>
      </a>
    </div>
  </footer>
  `;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footer());


/***/ }),

/***/ "./src/js/components/header.js":
/*!*************************************!*\
  !*** ./src/js/components/header.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function header() {
  return `
    <header class="mb-6 border-b">
      <div class="container mx-auto py-6 px-4">
        <span class="block text-3xl font-bold">Todo App</span>
      </div>
    </header>
  `;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header());


/***/ }),

/***/ "./src/js/components/layout.js":
/*!*************************************!*\
  !*** ./src/js/components/layout.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sprite */ "./src/js/components/sprite.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/js/components/header.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main */ "./src/js/components/main.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ "./src/js/components/footer.js");





// TODO: set default date value
// TODO: add selectbox to todo form?

function layout() {
  return `
    ${_sprite__WEBPACK_IMPORTED_MODULE_0__["default"]}
    ${_header__WEBPACK_IMPORTED_MODULE_1__["default"]}
    ${_main__WEBPACK_IMPORTED_MODULE_2__["default"]}
    ${_footer__WEBPACK_IMPORTED_MODULE_3__["default"]}
  `;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (layout());


/***/ }),

/***/ "./src/js/components/main.js":
/*!***********************************!*\
  !*** ./src/js/components/main.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function main() {
  return `
  <div class="container mx-auto mb-6 px-4">
    <div class="md:grid md:gap-4 md:grid-cols-2 lg:grid-cols-[1fr_2fr]">
      <div>
        <h2 class="my-4 text-3xl font-bold">Projects</h2>

        <div class="js-projects-list"></div>

        <div class="flex justify-end space-x-2">
          <button
            class="inline-flex px-4 py-2 text-white bg-orange-600 hover:bg-orange-700 active:bg-orange-800 rounded-md transition select-none"
            type="button"
            data-modal-target="modal-add-project"
          >
            Add project
          </button>
        </div>
      </div>
      <div>
        <h2 class="my-4 text-3xl font-bold">Todos</h2>
        <div class="js-todo-list"></div>

        <div class="flex justify-end space-x-2">
          <button
            class="js-btn-add-todo inline-flex px-4 py-2 text-white bg-orange-600 hover:bg-orange-700 active:bg-orange-800 rounded-md transition select-none"
            type="button"
            data-modal-target="modal-add-todo"
          >
            Add todo
          </button>
        </div>
      </div>
    </div>
  </div>
  `;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (main());


/***/ }),

/***/ "./src/js/components/modal.js":
/*!************************************!*\
  !*** ./src/js/components/modal.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ modal)
/* harmony export */ });
function modal({ id, title, body, actions }) {
  return `
    <div id="${id}" class="js-modal hidden _flex fixed top-0 left-0 h-screen w-screen justify-center items-center p-4 bg-black/75 overflow-auto">
      <div class="w-[480px] max-w-full bg-white rounded-lg shadow-lg">
        <div class="flex justify-between items-center space-x-4 p-4">
          <h3 class="text-lg font-bold">${title}</h3>
          <button
            class="text-slate-400 hover:text-orange-600 transition"
            type="button"
            data-modal-closer
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="overflow-auto p-4 border-t border-slate-200" style="max-height: calc(100vh - 182px);">
          ${body}
        </div>
        <div class="flex justify-end space-x-2 p-4 border-t border-slate-200">
          ${actions}
        </div>
      </div>
    </div>
  `;
}


/***/ }),

/***/ "./src/js/components/projectForm.js":
/*!******************************************!*\
  !*** ./src/js/components/projectForm.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const id = 'modal-add-project';
const title = 'Add el projecto';

const form = `
  <form class="js-form-add-project" id="addProjectForm" action="#">
    <input type="hidden" name="id" value="" />

    <label class="block mb-4">
      <span class="block font-medium text-slate-700">Project title</span>
      <input
        class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm text-base placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
        type="text"
        name="title"
        placeholder="Project title"
        autofocus
      />
    </label>
  </form>
`;
// TODO: enable autofocus

const actions = `
  <button
    class="inline-flex px-4 py-2 text-slate-700 bg-transparent hover:border-slate-200 active:border-slate-400 active:bg-slate-200 border border-transparent rounded-md transition select-none"
    type="button"
    data-modal-closer
  >
    Cancel
  </button>
  <button
    class="inline-flex px-4 py-2 text-white bg-orange-600 hover:bg-orange-700 active:bg-orange-800 rounded-md transition select-none"
    type="submit"
    form="addProjectForm"
    data-modal-closer
  >
    Add project
  </button>
`;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ id, title, body: form, actions });


/***/ }),

/***/ "./src/js/components/sprite.js":
/*!*************************************!*\
  !*** ./src/js/components/sprite.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function sprite() {
  return `
  <svg width="0" height="0" class="hidden">
    <symbol
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      id="icon-code"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
      ></path>
    </symbol>
    <symbol
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      id="icon-edit"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
      ></path>
    </symbol>
    <symbol
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      viewBox="0 0 24 24"
      width="24"
      height="24"
      id="icon-trash"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
      ></path>
    </symbol>
  </svg>
  `;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sprite());


/***/ }),

/***/ "./src/js/components/todoForm.js":
/*!***************************************!*\
  !*** ./src/js/components/todoForm.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const id = `modal-add-todo`;
const title = `Add el todo amigo!`;

const form = `
  <form class="js-form-add-todo space-y-4" id="addTodoForm" action="#">
    <input type="hidden" name="id" value="" />

    <label class="block">
      <span class="block font-medium text-slate-700">Title</span>
      <input
        class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm text-base placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
        type="text"
        name="title"
        placeholder="Title"
        autofocus
      />
    </label>

    <label class="block">
      <span class="block font-medium text-slate-700">Due date</span>
      <input
        class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md shadow-sm text-base placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
        type="date"
        name="dueDate"
        value="2022-03-16"
      />
    </label>

    <div class="">
      <label for="priority" class="block font-medium text-slate-700">Priority</label>
      <select
        id="priority"
        name="priority"
        autocomplete="country-name"
        class="mt-1 block w-full py-2 px-3 border border-slate-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-sky-500"
      >
        <option value="low">Low</option>
        <option value="middle">Middle</option>
        <option value="high">High</option>
      </select>
    </div>

    <div class="flex items-start">
      <div class="flex items-center h-5">
        <input
          id="todoComplete"
          name="complete"
          type="checkbox"
          class="focus:ring-sky-500 h-4 w-4 text-sky-500 border-slate-300 rounded"
        />
      </div>
      <div class="ml-3">
        <label for="todoComplete" class="font-medium text-slate-700">Complete?</label>
      </div>
    </div>
  </form>
`;

const actions = `
  <button
    class="inline-flex px-4 py-2 text-slate-700 bg-transparent hover:border-slate-200 active:border-slate-400 active:bg-slate-200 border border-transparent rounded-md transition select-none"
    type="button"
    data-modal-closer
  >
    Cancel
  </button>
  <button
    class="inline-flex px-4 py-2 text-white bg-orange-600 hover:bg-orange-700 active:bg-orange-800 rounded-md transition select-none"
    type="submit"
    form="addTodoForm"
    data-modal-closer
  >
    Add/Update todo
  </button>
`;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({ id, title, body: form, actions });


/***/ }),

/***/ "./src/js/handlers.js":
/*!****************************!*\
  !*** ./src/js/handlers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handlers)
/* harmony export */ });
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ "./src/js/Project.js");
/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Todo */ "./src/js/Todo.js");



function handlers(ui) {
  const { pm, storage } = ui;

  function submitProjectForm(e) {
    e.preventDefault();
    let project;
    const form = e.target;
    const data = Object.fromEntries(new FormData(form).entries());

    // NOTE: update OR create action
    if (data.id) {
      project = pm.getRestoredProject(data.id);
      project.update(data);
    } else {
      project = new _Project__WEBPACK_IMPORTED_MODULE_0__["default"](data);
      pm.addProject(project.id);
    }

    project.save();
    pm.setCurrentProject(project.id);
    form.reset();
    form.querySelector('[name="id"]').value = '';
    ui.renderProject(project.id);
    ui.highlightCurrentProject();
    ui.renderProjectTodos(); // TODO: too much rerenders
  }

  function submitTodoForm(e) {
    e.preventDefault();
    let todo;
    const form = e.target;
    const data = Object.fromEntries(new FormData(form).entries());
    data.complete = !!data.complete; // convert 'on' to true
    const projectId = pm.currentProject;
    const project = pm.getRestoredProject(projectId);

    // NOTE: update OR create action
    if (data.id) {
      todo = project.getRestoredTodo(data.id);
      todo.update(data);
    } else {
      todo = data;
    }

    const todoId = project.addTodo(todo);
    form.reset();
    form.querySelector('[name="id"]').value = '';
    form.querySelector('[name="complete"]').removeAttribute('checked');
    // TODO: avoid shaking storage 2 times! (on save, on render)
    ui.removeNoTodosMessage();
    ui.renderTodo(todoId);
  }

  // TODO: maybe add more precise dom node, not document?
  document.addEventListener('submit', (e) => {
    const { target: el } = e;

    if (el.closest('.js-form-add-project')) {
      submitProjectForm(e);
      return;
    }

    if (el.closest('.js-form-add-todo')) {
      submitTodoForm(e);
    }
  });

  function removeTodo(el) {
    const todoEl = el.closest('.js-todo-item');
    // 1. get todo id
    const todoId = todoEl.id;
    // 2. get project (hint: current project)
    const projectId = pm.currentProject;
    const project = pm.getRestoredProject(projectId);
    // 3. delete todo from project
    project.removeTodo(todoId);
    // 4. update UI
    todoEl.remove();
    if (project.todos.length === 0) {
      ui.renderNoTodosMessage();
    }
  }

  function editTodo(el) {
    const todoId = el.closest('.js-todo-item').id;
    const data = storage.get(`Todo_${todoId}`);

    const form = document.querySelector('.js-form-add-todo');
    // 2. populate form
    Object.entries(data).forEach(([key, value]) => {
      try {
        if (key !== 'complete') {
          form.querySelector(`[name="${key}"]`).value = value;
        } else {
          form.querySelector(`[name="${key}"]`).checked = value;
        }
      } catch (error) {
        console.warn(`Missing [name="${key}"] element\n`, error);
      }
    });
  }

  function toggleTodo(el) {
    const todoId = el.closest('.js-todo-item').id;
    const data = storage.get(`Todo_${todoId}`);
    const todo = new _Todo__WEBPACK_IMPORTED_MODULE_1__["default"](data);
    const complete = el.checked;
    todo.update({ complete });
  }

  const todoList = document.querySelector('.js-todo-list');
  todoList.addEventListener('click', (e) => {
    const { target: el } = e;
    if (el.closest('.js-btn-todo-delete')) {
      removeTodo(el);
    } else if (el.closest('.js-btn-todo-edit')) {
      editTodo(el);
    } else if (el.closest('.js-todo-toggle')) {
      toggleTodo(el);
    }
  });

  function removeProject(el) {
    const projectEl = el.closest('.js-project-item');
    const projectId = projectEl.id;
    pm.deleteProject(projectId);

    if (projectId !== pm.defaultProject) {
      projectEl.remove();
      ui.highlightCurrentProject();
      ui.renderProjectTodos();
    }
  }

  function editProject(el) {
    // TODO: add check for empty title on edit action
    const projectId = el.closest('.js-project-item').id;
    const data = storage.get(`Project_${projectId}`);
    const form = document.querySelector('.js-form-add-project');
    // TODO: add loop
    form.querySelector('[name="title"]').value = data.title;
    form.querySelector('[name="id"]').value = data.id;
  }

  const projectsList = document.querySelector('.js-projects-list');
  projectsList.addEventListener('click', (e) => {
    const { target: el } = e;
    if (el.closest('.js-btn-project-delete')) {
      removeProject(el);
    } else if (el.closest('.js-btn-project-edit')) {
      editProject(el);
    } else if (el.closest('.js-project-item')) {
      const { id } = el.closest('.js-project-item');
      pm.setCurrentProject(id);
      ui.highlightCurrentProject();
      ui.renderProjectTodos();
    }
  });
}


/***/ }),

/***/ "./src/js/utils/getScrollWidth.js":
/*!****************************************!*\
  !*** ./src/js/utils/getScrollWidth.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getScrollWidth)
/* harmony export */ });
function getScrollWidth() {
  const { body } = document;
  const el = document.createElement('div');

  el.style = `position: absolute; top: -9999px; width: 100px; height: 100px; overflow: scroll;`;
  body.appendChild(el);

  const width = el.offsetWidth - el.clientWidth;

  body.removeChild(el);

  return width;
}


/***/ }),

/***/ "./src/js/utils/id.js":
/*!****************************!*\
  !*** ./src/js/utils/id.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const s4 = () =>
  Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);

const generateId = () => `a${s4()}-${s4()}-${s4()}`;

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateId);


/***/ }),

/***/ "./src/js/utils/trimStr.js":
/*!*********************************!*\
  !*** ./src/js/utils/trimStr.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function trimStr(string = '', defaultValue = 'Untitled') {
  return string.trim().replace(/[<>/]/gi, '') || defaultValue;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (trimStr);


/***/ }),

/***/ "./src/js/data/archiveTodos.json":
/*!***************************************!*\
  !*** ./src/js/data/archiveTodos.json ***!
  \***************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"title":"Look ma! No hands!","dueDate":"2022-02-03","priority":"low","complete":true},{"title":"Such archive todo","dueDate":"2022-02-11","priority":"low","complete":false}]');

/***/ }),

/***/ "./src/js/data/demoTodos.json":
/*!************************************!*\
  !*** ./src/js/data/demoTodos.json ***!
  \************************************/
/***/ ((module) => {

module.exports = JSON.parse('[{"title":"The body is Round","dueDate":"2022-02-03","priority":"middle"},{"title":"Squash that cat","dueDate":"2022-02-08","priority":"middle"},{"title":"Look at this gentleman","dueDate":"2022-02-01","priority":"high","complete":true}]');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProjectsManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectsManager */ "./src/js/ProjectsManager.js");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI */ "./src/js/UI.js");
/* harmony import */ var _data_demoTodos_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/demoTodos.json */ "./src/js/data/demoTodos.json");
/* harmony import */ var _data_archiveTodos_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/archiveTodos.json */ "./src/js/data/archiveTodos.json");
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/styles.css */ "./src/css/styles.css");







_UI__WEBPACK_IMPORTED_MODULE_1__.ui.init();

// TODO: auto add todo to project on create
// TODO: save project immediately after creation?

// const archiveProject = new Project({ title: 'Archive' });
// console.log(`archiveProject`, archiveProject);
// archiveProject.save();
// archiveProject.loadData(archiveTodosData);
// projectsManager.addProject(archiveProject.id);

_UI__WEBPACK_IMPORTED_MODULE_1__.ui.renderProjectTodos();

_ProjectsManager__WEBPACK_IMPORTED_MODULE_0__.projectsManager.projects.forEach((id) => {
  _UI__WEBPACK_IMPORTED_MODULE_1__.ui.renderProject(id);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBcUIsT0FBTyxNQUFNLE1BQU0sS0FBSyxhQUFhLE9BQU8sTUFBTSxNQUFNLGlCQUFpQixXQUFXLE9BQU8sS0FBSyxXQUFXLFVBQVUsT0FBTyxLQUFLLFdBQVcsT0FBTyxPQUFPLGFBQWEsV0FBVyxVQUFVLE9BQU8sTUFBTSxNQUFNLEtBQUssYUFBYSxPQUFPLE9BQU8sTUFBTSxNQUFNLHFCQUFxQixzQkFBc0IsUUFBUSxNQUFNLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxLQUFLLEtBQUssV0FBVyxPQUFPLFFBQVEsTUFBTSxZQUFZLHFCQUFxQix1QkFBdUIsUUFBUSxNQUFNLE1BQU0sTUFBTSxXQUFXLFVBQVUsT0FBTyxNQUFNLE1BQU0sS0FBSyxXQUFXLE9BQU8sS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxNQUFNLE9BQU8sS0FBSyxLQUFLLEtBQUssTUFBTSxPQUFPLEtBQUssS0FBSyxLQUFLLE1BQU0sT0FBTyxLQUFLLEtBQUssS0FBSyxNQUFNLE9BQU8sS0FBSyxLQUFLLEtBQUssTUFBTSxPQUFPLEtBQUssS0FBSyxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxXQUFXLEtBQUssTUFBTSxNQUFNLFdBQVcsS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sV0FBVyxXQUFXLEtBQUssTUFBTSxNQUFNLFdBQVcsV0FBVyxLQUFLLE1BQU0sTUFBTSxXQUFXLFdBQVcsS0FBSyxNQUFNLE1BQU0sV0FBVyxXQUFXLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFdBQVcsS0FBSyxNQUFNLE1BQU0sV0FBVyxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxXQUFXLEtBQUssTUFBTSxNQUFNLFdBQVcsS0FBSyxNQUFNLE1BQU0sV0FBVyxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxXQUFXLEtBQUssTUFBTSxNQUFNLFdBQVcsS0FBSyxNQUFNLE1BQU0sV0FBVyxLQUFLLE1BQU0sTUFBTSxXQUFXLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFdBQVcsS0FBSyxNQUFNLE1BQU0sV0FBVyxLQUFLLE1BQU0sTUFBTSxXQUFXLEtBQUssTUFBTSxNQUFN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O0FBQ2YsVUFBVSxPQUFPO0FBQ2pCOztBQUVBLGtDQUFrQyxjQUFjLGNBQWMsZUFBZSxpQkFBaUI7QUFDOUY7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkJBQTZCLEtBQUssR0FBRyxLQUFLLEdBQUcsS0FBSzs7QUFFbEQsaUVBQWUsVUFBVSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNQMUI7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE9BQU8sRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDSnZCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTm9EO0FBQzFCO0FBQ3dCO0FBQ007O0FBRTdCOztBQUUzQix3Q0FBTzs7QUFFUDtBQUNBOztBQUVBLHdDQUF3QyxrQkFBa0I7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0RBQXFCOztBQUVyQiw4RUFBZ0M7QUFDaEMsRUFBRSxpREFBZ0I7QUFDbEIsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2Nzcy9zdHlsZXMuY3NzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2Nzcy9zdHlsZXMuY3NzP2M4YmYiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9qcy9Mb2NTdG9yYWdlLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2pzL01vZGFsLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2pzL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvanMvUHJvamVjdHNNYW5hZ2VyLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2pzL1RvZG8uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvanMvVUkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvanMvY29tcG9uZW50cy9jaGVja2JveC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9qcy9jb21wb25lbnRzL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9qcy9jb21wb25lbnRzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9qcy9jb21wb25lbnRzL2xheW91dC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9qcy9jb21wb25lbnRzL21haW4uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvanMvY29tcG9uZW50cy9tb2RhbC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9qcy9jb21wb25lbnRzL3Byb2plY3RGb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2pzL2NvbXBvbmVudHMvc3ByaXRlLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2pzL2NvbXBvbmVudHMvdG9kb0Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvanMvaGFuZGxlcnMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvanMvdXRpbHMvZ2V0U2Nyb2xsV2lkdGguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvanMvdXRpbHMvaWQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvanMvdXRpbHMvdHJpbVN0ci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2pzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLypcXG4hIHRhaWx3aW5kY3NzIHYzLjAuMjMgfCBNSVQgTGljZW5zZSB8IGh0dHBzOi8vdGFpbHdpbmRjc3MuY29tXFxuKi8vKlxcbjEuIFByZXZlbnQgcGFkZGluZyBhbmQgYm9yZGVyIGZyb20gYWZmZWN0aW5nIGVsZW1lbnQgd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzQpXFxuMi4gQWxsb3cgYWRkaW5nIGEgYm9yZGVyIHRvIGFuIGVsZW1lbnQgYnkganVzdCBhZGRpbmcgYSBib3JkZXItd2lkdGguIChodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRjc3MvdGFpbHdpbmRjc3MvcHVsbC8xMTYpXFxuKi9cXG5cXG4qLFxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgYm9yZGVyLXdpZHRoOiAwOyAvKiAyICovXFxuICBib3JkZXItc3R5bGU6IHNvbGlkOyAvKiAyICovXFxuICBib3JkZXItY29sb3I6ICNlNWU3ZWI7IC8qIDIgKi9cXG59XFxuXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICAtLXR3LWNvbnRlbnQ6ICcnO1xcbn1cXG5cXG4vKlxcbjEuIFVzZSBhIGNvbnNpc3RlbnQgc2Vuc2libGUgbGluZS1oZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbjIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbjMuIFVzZSBhIG1vcmUgcmVhZGFibGUgdGFiIHNpemUuXFxuNC4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBgc2Fuc2AgZm9udC1mYW1pbHkgYnkgZGVmYXVsdC5cXG4qL1xcblxcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuNTsgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxuICAtbW96LXRhYi1zaXplOiA0OyAvKiAzICovXFxuICB0YWItc2l6ZTogNDsgLyogMyAqL1xcbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEFyaWFsLCBcXFwiTm90byBTYW5zXFxcIiwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCIsIFxcXCJOb3RvIENvbG9yIEVtb2ppXFxcIjsgLyogNCAqL1xcbn1cXG5cXG4vKlxcbjEuIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4yLiBJbmhlcml0IGxpbmUtaGVpZ2h0IGZyb20gYGh0bWxgIHNvIHVzZXJzIGNhbiBzZXQgdGhlbSBhcyBhIGNsYXNzIGRpcmVjdGx5IG9uIHRoZSBgaHRtbGAgZWxlbWVudC5cXG4qL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbjEuIEFkZCB0aGUgY29ycmVjdCBoZWlnaHQgaW4gRmlyZWZveC5cXG4yLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBvZiBib3JkZXIgY29sb3IgaW4gRmlyZWZveC4gKGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTE5MDY1NSlcXG4zLiBFbnN1cmUgaG9yaXpvbnRhbCBydWxlcyBhcmUgdmlzaWJsZSBieSBkZWZhdWx0LlxcbiovXFxuXFxuaHIge1xcbiAgaGVpZ2h0OiAwOyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgYm9yZGVyLXRvcC13aWR0aDogMXB4OyAvKiAzICovXFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5hYmJyOndoZXJlKFt0aXRsZV0pIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG59XFxuXFxuLypcXG5SZW1vdmUgdGhlIGRlZmF1bHQgZm9udCBzaXplIGFuZCB3ZWlnaHQgZm9yIGhlYWRpbmdzLlxcbiovXFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbi8qXFxuUmVzZXQgbGlua3MgdG8gb3B0aW1pemUgZm9yIG9wdC1pbiBzdHlsaW5nIGluc3RlYWQgb2Ygb3B0LW91dC5cXG4qL1xcblxcbmEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIEVkZ2UgYW5kIFNhZmFyaS5cXG4qL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qXFxuMS4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBgbW9ub2AgZm9udCBmYW1pbHkgYnkgZGVmYXVsdC5cXG4yLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wLFxcbnByZSB7XFxuICBmb250LWZhbWlseTogdWktbW9ub3NwYWNlLCBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFxcXCJMaWJlcmF0aW9uIE1vbm9cXFwiLCBcXFwiQ291cmllciBOZXdcXFwiLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLypcXG5QcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07XFxufVxcblxcbi8qXFxuMS4gUmVtb3ZlIHRleHQgaW5kZW50YXRpb24gZnJvbSB0YWJsZSBjb250ZW50cyBpbiBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTk5OTA4OCwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTIwMTI5NylcXG4yLiBDb3JyZWN0IHRhYmxlIGJvcmRlciBjb2xvciBpbmhlcml0YW5jZSBpbiBhbGwgQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05MzU3MjksIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTUwMTYpXFxuMy4gUmVtb3ZlIGdhcHMgYmV0d2VlbiB0YWJsZSBib3JkZXJzIGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG50YWJsZSB7XFxuICB0ZXh0LWluZGVudDogMDsgLyogMSAqL1xcbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlOyAvKiAzICovXFxufVxcblxcbi8qXFxuMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbjMuIFJlbW92ZSBkZWZhdWx0IHBhZGRpbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIG1hcmdpbjogMDsgLyogMiAqL1xcbiAgcGFkZGluZzogMDsgLyogMyAqL1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSBhbmQgRmlyZWZveC5cXG4qL1xcblxcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qXFxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4yLiBSZW1vdmUgZGVmYXVsdCBidXR0b24gc3R5bGVzLlxcbiovXFxuXFxuYnV0dG9uLFxcblt0eXBlPSdidXR0b24nXSxcXG5bdHlwZT0ncmVzZXQnXSxcXG5bdHlwZT0nc3VibWl0J10ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OyAvKiAyICovXFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lOyAvKiAyICovXFxufVxcblxcbi8qXFxuVXNlIHRoZSBtb2Rlcm4gRmlyZWZveCBmb2N1cyBzdHlsZSBmb3IgYWxsIGZvY3VzYWJsZSBlbGVtZW50cy5cXG4qL1xcblxcbjotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiBhdXRvO1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgYWRkaXRpb25hbCBgOmludmFsaWRgIHN0eWxlcyBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemlsbGEvZ2Vja28tZGV2L2Jsb2IvMmY5ZWFjZDlkM2Q5OTVjOTM3YjQyNTFhNTU1N2Q5NWQ0OTRjOWJlMS9sYXlvdXQvc3R5bGUvcmVzL2Zvcm1zLmNzcyNMNzI4LUw3MzcpXFxuKi9cXG5cXG46LW1vei11aS1pbnZhbGlkIHtcXG4gIGJveC1zaGFkb3c6IG5vbmU7XFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUgYW5kIEZpcmVmb3guXFxuKi9cXG5cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qXFxuQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gU2FmYXJpLlxcbiovXFxuXFxuOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcbjo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qXFxuMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuKi9cXG5cXG5bdHlwZT0nc2VhcmNoJ10ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiovXFxuXFxuOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbjIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4qL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4qL1xcblxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKlxcblJlbW92ZXMgdGhlIGRlZmF1bHQgc3BhY2luZyBhbmQgYm9yZGVyIGZvciBhcHByb3ByaWF0ZSBlbGVtZW50cy5cXG4qL1xcblxcbmJsb2NrcXVvdGUsXFxuZGwsXFxuZGQsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYsXFxuaHIsXFxuZmlndXJlLFxcbnAsXFxucHJlIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuZmllbGRzZXQge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxubGVnZW5kIHtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbm9sLFxcbnVsLFxcbm1lbnUge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qXFxuUHJldmVudCByZXNpemluZyB0ZXh0YXJlYXMgaG9yaXpvbnRhbGx5IGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IHZlcnRpY2FsO1xcbn1cXG5cXG4vKlxcbjEuIFJlc2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIG9wYWNpdHkgaW4gRmlyZWZveC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGxhYnMvdGFpbHdpbmRjc3MvaXNzdWVzLzMzMDApXFxuMi4gU2V0IHRoZSBkZWZhdWx0IHBsYWNlaG9sZGVyIGNvbG9yIHRvIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBncmF5IDQwMCBjb2xvci5cXG4qL1xcblxcbmlucHV0OjpwbGFjZWhvbGRlcixcXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcbiAgb3BhY2l0eTogMTsgLyogMSAqL1xcbiAgY29sb3I6ICM5Y2EzYWY7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5TZXQgdGhlIGRlZmF1bHQgY3Vyc29yIGZvciBidXR0b25zLlxcbiovXFxuXFxuYnV0dG9uLFxcbltyb2xlPVxcXCJidXR0b25cXFwiXSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qXFxuTWFrZSBzdXJlIGRpc2FibGVkIGJ1dHRvbnMgZG9uJ3QgZ2V0IHRoZSBwb2ludGVyIGN1cnNvci5cXG4qL1xcbjpkaXNhYmxlZCB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi8qXFxuMS4gTWFrZSByZXBsYWNlZCBlbGVtZW50cyBgZGlzcGxheTogYmxvY2tgIGJ5IGRlZmF1bHQuIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxcbjIuIEFkZCBgdmVydGljYWwtYWxpZ246IG1pZGRsZWAgdG8gYWxpZ24gcmVwbGFjZWQgZWxlbWVudHMgbW9yZSBzZW5zaWJseSBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL2plbnNpbW1vbnMvY3NzcmVtZWR5L2lzc3Vlcy8xNCNpc3N1ZWNvbW1lbnQtNjM0OTM0MjEwKVxcbiAgIFRoaXMgY2FuIHRyaWdnZXIgYSBwb29ybHkgY29uc2lkZXJlZCBsaW50IGVycm9yIGluIHNvbWUgdG9vbHMgYnV0IGlzIGluY2x1ZGVkIGJ5IGRlc2lnbi5cXG4qL1xcblxcbmltZyxcXG5zdmcsXFxudmlkZW8sXFxuY2FudmFzLFxcbmF1ZGlvLFxcbmlmcmFtZSxcXG5lbWJlZCxcXG5vYmplY3Qge1xcbiAgZGlzcGxheTogYmxvY2s7IC8qIDEgKi9cXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5Db25zdHJhaW4gaW1hZ2VzIGFuZCB2aWRlb3MgdG8gdGhlIHBhcmVudCB3aWR0aCBhbmQgcHJlc2VydmUgdGhlaXIgaW50cmluc2ljIGFzcGVjdCByYXRpby4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvMTQpXFxuKi9cXG5cXG5pbWcsXFxudmlkZW8ge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKlxcbkVuc3VyZSB0aGUgZGVmYXVsdCBicm93c2VyIGJlaGF2aW9yIG9mIHRoZSBgaGlkZGVuYCBhdHRyaWJ1dGUuXFxuKi9cXG5cXG5baGlkZGVuXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4qLCA6OmJlZm9yZSwgOjphZnRlciB7XFxuICAtLXR3LXRyYW5zbGF0ZS14OiAwO1xcbiAgLS10dy10cmFuc2xhdGUteTogMDtcXG4gIC0tdHctcm90YXRlOiAwO1xcbiAgLS10dy1za2V3LXg6IDA7XFxuICAtLXR3LXNrZXcteTogMDtcXG4gIC0tdHctc2NhbGUteDogMTtcXG4gIC0tdHctc2NhbGUteTogMTtcXG4gIC0tdHctcGFuLXg6ICA7XFxuICAtLXR3LXBhbi15OiAgO1xcbiAgLS10dy1waW5jaC16b29tOiAgO1xcbiAgLS10dy1zY3JvbGwtc25hcC1zdHJpY3RuZXNzOiBwcm94aW1pdHk7XFxuICAtLXR3LW9yZGluYWw6ICA7XFxuICAtLXR3LXNsYXNoZWQtemVybzogIDtcXG4gIC0tdHctbnVtZXJpYy1maWd1cmU6ICA7XFxuICAtLXR3LW51bWVyaWMtc3BhY2luZzogIDtcXG4gIC0tdHctbnVtZXJpYy1mcmFjdGlvbjogIDtcXG4gIC0tdHctcmluZy1pbnNldDogIDtcXG4gIC0tdHctcmluZy1vZmZzZXQtd2lkdGg6IDBweDtcXG4gIC0tdHctcmluZy1vZmZzZXQtY29sb3I6ICNmZmY7XFxuICAtLXR3LXJpbmctY29sb3I6IHJnYig1OSAxMzAgMjQ2IC8gMC41KTtcXG4gIC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiAwIDAgIzAwMDA7XFxuICAtLXR3LXJpbmctc2hhZG93OiAwIDAgIzAwMDA7XFxuICAtLXR3LXNoYWRvdzogMCAwICMwMDAwO1xcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAwICMwMDAwO1xcbiAgLS10dy1ibHVyOiAgO1xcbiAgLS10dy1icmlnaHRuZXNzOiAgO1xcbiAgLS10dy1jb250cmFzdDogIDtcXG4gIC0tdHctZ3JheXNjYWxlOiAgO1xcbiAgLS10dy1odWUtcm90YXRlOiAgO1xcbiAgLS10dy1pbnZlcnQ6ICA7XFxuICAtLXR3LXNhdHVyYXRlOiAgO1xcbiAgLS10dy1zZXBpYTogIDtcXG4gIC0tdHctZHJvcC1zaGFkb3c6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWJsdXI6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWJyaWdodG5lc3M6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWNvbnRyYXN0OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1ncmF5c2NhbGU6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWh1ZS1yb3RhdGU6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWludmVydDogIDtcXG4gIC0tdHctYmFja2Ryb3Atb3BhY2l0eTogIDtcXG4gIC0tdHctYmFja2Ryb3Atc2F0dXJhdGU6ICA7XFxuICAtLXR3LWJhY2tkcm9wLXNlcGlhOiAgO1xcbn1cXG4uY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNjQwcHgpIHtcXG5cXG4gIC5jb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDY0MHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXG5cXG4gIC5jb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDc2OHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxuXFxuICAuY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiAxMDI0cHg7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxMjgwcHgpIHtcXG5cXG4gIC5jb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDEyODBweDtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDE1MzZweCkge1xcblxcbiAgLmNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogMTUzNnB4O1xcbiAgfVxcbn1cXG4uZml4ZWQge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbn1cXG4ucmVsYXRpdmUge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4udG9wLTAge1xcbiAgdG9wOiAwcHg7XFxufVxcbi5sZWZ0LTAge1xcbiAgbGVmdDogMHB4O1xcbn1cXG4ubXgtYXV0byB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuLm15LTQge1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcbi5tYi00IHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcbi5tbC0zIHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjc1cmVtO1xcbn1cXG4ubXQtYXV0byB7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbn1cXG4ubWItNiB7XFxuICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XFxufVxcbi5tdC0xIHtcXG4gIG1hcmdpbi10b3A6IDAuMjVyZW07XFxufVxcbi5ibG9jayB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLmZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLmlubGluZS1mbGV4IHtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbn1cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5oLTYge1xcbiAgaGVpZ2h0OiAxLjVyZW07XFxufVxcbi5oLTUge1xcbiAgaGVpZ2h0OiAxLjI1cmVtO1xcbn1cXG4uaC00IHtcXG4gIGhlaWdodDogMXJlbTtcXG59XFxuLmgtc2NyZWVuIHtcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcbi5taW4taC1zY3JlZW4ge1xcbiAgbWluLWhlaWdodDogMTAwdmg7XFxufVxcbi53LTYge1xcbiAgd2lkdGg6IDEuNXJlbTtcXG59XFxuLnctNCB7XFxuICB3aWR0aDogMXJlbTtcXG59XFxuLnctc2NyZWVuIHtcXG4gIHdpZHRoOiAxMDB2dztcXG59XFxuLnctXFxcXFs0ODBweFxcXFxdIHtcXG4gIHdpZHRoOiA0ODBweDtcXG59XFxuLnctZnVsbCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLm1heC13LWZ1bGwge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG4uY3Vyc29yLXBvaW50ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uc2VsZWN0LW5vbmUge1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcbi5mbGV4LWNvbCB7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG4uaXRlbXMtc3RhcnQge1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcbi5pdGVtcy1jZW50ZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmp1c3RpZnktZW5kIHtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcbi5qdXN0aWZ5LWNlbnRlciB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmp1c3RpZnktYmV0d2VlbiB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5zcGFjZS14LTIgPiA6bm90KFtoaWRkZW5dKSB+IDpub3QoW2hpZGRlbl0pIHtcXG4gIC0tdHctc3BhY2UteC1yZXZlcnNlOiAwO1xcbiAgbWFyZ2luLXJpZ2h0OiBjYWxjKDAuNXJlbSAqIHZhcigtLXR3LXNwYWNlLXgtcmV2ZXJzZSkpO1xcbiAgbWFyZ2luLWxlZnQ6IGNhbGMoMC41cmVtICogY2FsYygxIC0gdmFyKC0tdHctc3BhY2UteC1yZXZlcnNlKSkpO1xcbn1cXG4uc3BhY2UteC0xID4gOm5vdChbaGlkZGVuXSkgfiA6bm90KFtoaWRkZW5dKSB7XFxuICAtLXR3LXNwYWNlLXgtcmV2ZXJzZTogMDtcXG4gIG1hcmdpbi1yaWdodDogY2FsYygwLjI1cmVtICogdmFyKC0tdHctc3BhY2UteC1yZXZlcnNlKSk7XFxuICBtYXJnaW4tbGVmdDogY2FsYygwLjI1cmVtICogY2FsYygxIC0gdmFyKC0tdHctc3BhY2UteC1yZXZlcnNlKSkpO1xcbn1cXG4uc3BhY2UteC00ID4gOm5vdChbaGlkZGVuXSkgfiA6bm90KFtoaWRkZW5dKSB7XFxuICAtLXR3LXNwYWNlLXgtcmV2ZXJzZTogMDtcXG4gIG1hcmdpbi1yaWdodDogY2FsYygxcmVtICogdmFyKC0tdHctc3BhY2UteC1yZXZlcnNlKSk7XFxuICBtYXJnaW4tbGVmdDogY2FsYygxcmVtICogY2FsYygxIC0gdmFyKC0tdHctc3BhY2UteC1yZXZlcnNlKSkpO1xcbn1cXG4uc3BhY2UteS00ID4gOm5vdChbaGlkZGVuXSkgfiA6bm90KFtoaWRkZW5dKSB7XFxuICAtLXR3LXNwYWNlLXktcmV2ZXJzZTogMDtcXG4gIG1hcmdpbi10b3A6IGNhbGMoMXJlbSAqIGNhbGMoMSAtIHZhcigtLXR3LXNwYWNlLXktcmV2ZXJzZSkpKTtcXG4gIG1hcmdpbi1ib3R0b206IGNhbGMoMXJlbSAqIHZhcigtLXR3LXNwYWNlLXktcmV2ZXJzZSkpO1xcbn1cXG4ub3ZlcmZsb3ctYXV0byB7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuLm92ZXJmbG93LWhpZGRlbiB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4ub3ZlcmZsb3cteS1zY3JvbGwge1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG4uc2Nyb2xsLXNtb290aCB7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuLnJvdW5kZWQtbGcge1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbn1cXG4ucm91bmRlZCB7XFxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xcbn1cXG4ucm91bmRlZC1tZCB7XFxuICBib3JkZXItcmFkaXVzOiAwLjM3NXJlbTtcXG59XFxuLmJvcmRlciB7XFxuICBib3JkZXItd2lkdGg6IDFweDtcXG59XFxuLmJvcmRlci10IHtcXG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDtcXG59XFxuLmJvcmRlci1iIHtcXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDFweDtcXG59XFxuLmJvcmRlci1zbGF0ZS0zMDAge1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG4gIGJvcmRlci1jb2xvcjogcmdiKDIwMyAyMTMgMjI1IC8gdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXG59XFxuLmJvcmRlci1zbGF0ZS0yMDAge1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG4gIGJvcmRlci1jb2xvcjogcmdiKDIyNiAyMzIgMjQwIC8gdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXG59XFxuLmJvcmRlci10cmFuc3BhcmVudCB7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4uYmctemluYy01MCB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUwIDI1MCAyNTAgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcbi5iZy13aGl0ZSB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1IDI1NSAyNTUgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcbi5iZy1vcmFuZ2UtNjAwIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzQgODggMTIgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcbi5iZy1ibGFja1xcXFwvNzUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAgMCAwIC8gMC43NSk7XFxufVxcbi5iZy10cmFuc3BhcmVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuLnAtNCB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG4ucHktNiB7XFxuICBwYWRkaW5nLXRvcDogMS41cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcXG59XFxuLnB4LTQge1xcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcXG59XFxuLnB5LTIge1xcbiAgcGFkZGluZy10b3A6IDAuNXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XFxufVxcbi5weC0zIHtcXG4gIHBhZGRpbmctbGVmdDogMC43NXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNzVyZW07XFxufVxcbi5wdC1cXFxcWzNweFxcXFxdIHtcXG4gIHBhZGRpbmctdG9wOiAzcHg7XFxufVxcbi50ZXh0LWNlbnRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5mb250LXNhbnMge1xcbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEFyaWFsLCBcXFwiTm90byBTYW5zXFxcIiwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCIsIFxcXCJOb3RvIENvbG9yIEVtb2ppXFxcIjtcXG59XFxuLnRleHQtbGcge1xcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xcbn1cXG4udGV4dC0zeGwge1xcbiAgZm9udC1zaXplOiAxLjg3NXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAyLjI1cmVtO1xcbn1cXG4udGV4dC1iYXNlIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxufVxcbi5mb250LWJvbGQge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLmZvbnQtbWVkaXVtIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbi5pdGFsaWMge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG4udGV4dC1vcmFuZ2UtNjAwIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYigyMzQgODggMTIgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLnRleHQtc2xhdGUtNDAwIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYigxNDggMTYzIDE4NCAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4udGV4dC1za3ktNTAwIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYigxNCAxNjUgMjMzIC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi50ZXh0LXNsYXRlLTcwMCB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2IoNTEgNjUgODUgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLnRleHQtd2hpdGUge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDI1NSAyNTUgMjU1IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi51bmRlcmxpbmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcXG59XFxuLnBsYWNlaG9sZGVyLXNsYXRlLTQwMDo6cGxhY2Vob2xkZXIge1xcbiAgLS10dy1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYigxNDggMTYzIDE4NCAvIHZhcigtLXR3LXBsYWNlaG9sZGVyLW9wYWNpdHkpKTtcXG59XFxuLm9wYWNpdHktMCB7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG4uc2hhZG93LWxnIHtcXG4gIC0tdHctc2hhZG93OiAwIDEwcHggMTVweCAtM3B4IHJnYigwIDAgMCAvIDAuMSksIDAgNHB4IDZweCAtNHB4IHJnYigwIDAgMCAvIDAuMSk7XFxuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDEwcHggMTVweCAtM3B4IHZhcigtLXR3LXNoYWRvdy1jb2xvciksIDAgNHB4IDZweCAtNHB4IHZhcigtLXR3LXNoYWRvdy1jb2xvcik7XFxuICBib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpO1xcbn1cXG4uc2hhZG93LXNtIHtcXG4gIC0tdHctc2hhZG93OiAwIDFweCAycHggMCByZ2IoMCAwIDAgLyAwLjA1KTtcXG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMXB4IDJweCAwIHZhcigtLXR3LXNoYWRvdy1jb2xvcik7XFxuICBib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpO1xcbn1cXG4uZmlsdGVyIHtcXG4gIGZpbHRlcjogdmFyKC0tdHctYmx1cikgdmFyKC0tdHctYnJpZ2h0bmVzcykgdmFyKC0tdHctY29udHJhc3QpIHZhcigtLXR3LWdyYXlzY2FsZSkgdmFyKC0tdHctaHVlLXJvdGF0ZSkgdmFyKC0tdHctaW52ZXJ0KSB2YXIoLS10dy1zYXR1cmF0ZSkgdmFyKC0tdHctc2VwaWEpIHZhcigtLXR3LWRyb3Atc2hhZG93KTtcXG59XFxuLnRyYW5zaXRpb24ge1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3IsIGJhY2tncm91bmQtY29sb3IsIGJvcmRlci1jb2xvciwgdGV4dC1kZWNvcmF0aW9uLWNvbG9yLCBmaWxsLCBzdHJva2UsIG9wYWNpdHksIGJveC1zaGFkb3csIHRyYW5zZm9ybSwgZmlsdGVyLCBiYWNrZHJvcC1maWx0ZXI7XFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDE1MG1zO1xcbn1cXG4uc2VsZWN0aW9uXFxcXDpiZy1waW5rLTMwMCAqOjpzZWxlY3Rpb24ge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OSAxNjggMjEyIC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG4uc2VsZWN0aW9uXFxcXDpiZy1waW5rLTMwMDo6c2VsZWN0aW9uIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDkgMTY4IDIxMiAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLmhvdmVyXFxcXDpjdXJzb3ItcG9pbnRlcjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5ob3ZlclxcXFw6Ym9yZGVyLXNsYXRlLTIwMDpob3ZlciB7XFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjI2IDIzMiAyNDAgLyB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcbn1cXG4uaG92ZXJcXFxcOmJnLW9yYW5nZS03MDA6aG92ZXIge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NCA2NSAxMiAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLmhvdmVyXFxcXDp0ZXh0LXNreS01MDA6aG92ZXIge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDE0IDE2NSAyMzMgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLmhvdmVyXFxcXDp0ZXh0LXJlZC01MDA6aG92ZXIge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDIzOSA2OCA2OCAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4uaG92ZXJcXFxcOnRleHQtb3JhbmdlLTYwMDpob3ZlciB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2IoMjM0IDg4IDEyIC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi5mb2N1c1xcXFw6Ym9yZGVyLXNreS01MDA6Zm9jdXMge1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG4gIGJvcmRlci1jb2xvcjogcmdiKDE0IDE2NSAyMzMgLyB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcbn1cXG4uZm9jdXNcXFxcOm91dGxpbmUtbm9uZTpmb2N1cyB7XFxuICBvdXRsaW5lOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBvdXRsaW5lLW9mZnNldDogMnB4O1xcbn1cXG4uZm9jdXNcXFxcOnJpbmctMTpmb2N1cyB7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogdmFyKC0tdHctcmluZy1pbnNldCkgMCAwIDAgdmFyKC0tdHctcmluZy1vZmZzZXQtd2lkdGgpIHZhcigtLXR3LXJpbmctb2Zmc2V0LWNvbG9yKTtcXG4gIC0tdHctcmluZy1zaGFkb3c6IHZhcigtLXR3LXJpbmctaW5zZXQpIDAgMCAwIGNhbGMoMXB4ICsgdmFyKC0tdHctcmluZy1vZmZzZXQtd2lkdGgpKSB2YXIoLS10dy1yaW5nLWNvbG9yKTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdyksIHZhcigtLXR3LXJpbmctc2hhZG93KSwgdmFyKC0tdHctc2hhZG93LCAwIDAgIzAwMDApO1xcbn1cXG4uZm9jdXNcXFxcOnJpbmctc2t5LTUwMDpmb2N1cyB7XFxuICAtLXR3LXJpbmctb3BhY2l0eTogMTtcXG4gIC0tdHctcmluZy1jb2xvcjogcmdiKDE0IDE2NSAyMzMgLyB2YXIoLS10dy1yaW5nLW9wYWNpdHkpKTtcXG59XFxuLmFjdGl2ZVxcXFw6Ym9yZGVyLXNsYXRlLTQwMDphY3RpdmUge1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG4gIGJvcmRlci1jb2xvcjogcmdiKDE0OCAxNjMgMTg0IC8gdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXG59XFxuLmFjdGl2ZVxcXFw6Ymctb3JhbmdlLTgwMDphY3RpdmUge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1NCA1MiAxOCAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLmFjdGl2ZVxcXFw6Ymctc2xhdGUtMjAwOmFjdGl2ZSB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI2IDIzMiAyNDAgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcbi5ncm91cDpob3ZlciAuZ3JvdXAtaG92ZXJcXFxcOm9wYWNpdHktMTAwIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcblxcbiAgLm1kXFxcXDpncmlkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gIH1cXG5cXG4gIC5tZFxcXFw6Z3JpZC1jb2xzLTIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XFxuICB9XFxuXFxuICAubWRcXFxcOmdhcC00IHtcXG4gICAgZ2FwOiAxcmVtO1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTAyNHB4KSB7XFxuXFxuICAubGdcXFxcOmdyaWQtY29scy1cXFxcWzFmcl8yZnJcXFxcXSB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmcjtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHlsZXMuY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzLyUzQ2lucHV0JTIwY3NzJTIwTzZvdEVlJTNFXCIsXCI8bm8gc291cmNlPlwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7Q0FBYyxDQUFkOzs7Q0FBYzs7QUFBZDs7O0VDUUUsc0JBQXNCLEVBQUUsTUFBTTtFQUM5QixlQUFlLEVBQUUsTUFBTTtFQUN2QixtQkFBbUIsRUFBRSxNQUFNO0VBQzNCLHFCQUF3RCxFQUFFLE1BQU07QURYcEQ7O0FBQWQ7O0VDZ0JFLGdCQUFnQjtBRGhCSjs7QUFBZDs7Ozs7Q0FBYzs7QUFBZDtFQzJCRSxnQkFBZ0IsRUFBRSxNQUFNO0VBQ3hCLDhCQUE4QixFQUFFLE1BQU07RUFDdEMsZ0JBQWdCLEVB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O0FBQW5CO0VFRkE7QUZFbUI7QUFBbkI7RUVGQTtBRkVtQjtBQUFuQjtFRUZBO0FGRW1CO0FBQW5CO0VFRkE7QUZFbUI7QUFBbkI7RUVGQTtBRkVtQjtBQUFuQjtFRUZBO0FGRW1CO0FBQW5CO0VFRkE7QUZFbUI7QUFBbkI7RUVGQTtBRkVtQjtBQUFuQjtFRUZBO0FGRW1CO0FBQW5CO0VFRkE7QUZFbUI7QUFBbkI7RUVGQTtBRkVtQjtBQUFuQjtFRUZBO0FGRW1CO0FBQW5CO0VFRkE7QUZFbUI7QUFBbkI7RUVGQTtBRkVtQjtBQUFuQjtFRUZBO0FGRW1CO0FBQW5CO0VFRkE7QUZFbUI7QUFBbkI7RUVGQTtBRkVtQjtBQUFuQjtFRUZBO0FGRW1CO0FBQW5CO0VFRkE7QUZFbUI7QUFBbkI7RUVGQTtBRkVtQjtBQUFuQjtFRUZBO0FGRW1CO0FBQW5CO0VFRkE7QUZFbUI7QUFBbkI7RUVGQSx3QkFBQTtFQUFBLHVEQUFBO0VBQUE7QUZFbUI7QUFBbkI7RUVGQSx3QkFBQTtFQUFBLHdEQUFBO0VBQUE7QUZFbUI7QUFBbkI7RUVGQSx3QkFBQTtFQUFBLHFEQUFBO0VBQUE7QUZFbUI7QUFBbkI7RUVGQSx3QkFBQTtFQUFBLDZEQUFBO0VBQUE7QUZFbUI7QUFBbkI7RUVGQTtBRkVtQjtBQUFuQjtFRUZBO0FGRW1CO0FBQW5CO0VFRkE7QUZFbUI7QUFBbkI7RUVGQTtBRkVtQjtBQUFuQjtFRUZBO0FGRW1CO0FBQW5CO0VFRkE7QUZFbUI7QUFBbkI7RUVGQTtBRkVtQjtBQUFuQjtFRUZBO0FGRW1CO0FBQW5CO0VFRkE7QUZFbUI7QUFBbkI7RUVGQTtBRkVtQjtBQUFuQjtFRUZBLHVCQUFBO0VBQUE7QUZFbUI7QUFBbkI7RUVGQSx1QkFBQTtFQUFBO0FGRW1CO0FBQW5CO0VFRkE7QUZFbUI7QUFBbkI7RUVGQSxtQkFBQTtFQUFBO0FGRW1CO0FBQW5CO0VFRkEsbUJBQUE7RUFBQTtBRkVtQjtBQUFuQjtFRUZBLG1CQUFBO0VBQUE7QUZFbUI7QUFBbkI7RUVGQTtBRkVtQjtBQUFuQjtFRUZBO0FGRW1CO0FBQW5CO0VFRkE7QUZFbUI7QUFBbkI7RUVGQSxvQkFBQTtFQUFBO0FGRW1CO0FBQW5CO0VFRkEsbUJBQUE7RUFBQTtBRkVtQjtBQUFuQjtFRUZBLG9CQUFBO0VBQUE7QUZFbUI7QUFBbkI7RUVGQSxzQkFBQTtFQUFBO0FGRW1CO0FBQW5CO0VFRkE7QUZFbUI7QUFBbkI7RUVGQTtBRkVtQjtBQUFuQjtFRUZBO0FGRW1CO0FBQW5CO0VFRkEsb0JBQUE7RUFBQTtBRkVtQjtBQUFuQjtFRUZBLG9CQUFBO0VBQUE7QUZFbUI7QUFBbkI7RUVGQSxnQkFBQTtFQUFBO0FGRW1CO0FBQW5CO0VFRkE7QUZFbUI7QUFBbkI7RUVGQTtBRkVtQjtBQUFuQjtFRUZBO0FGRW1CO0FBQW5CO0VFRkEscUJBQUE7RUFBQTtBRkVtQjtBQUFuQjtFRUZBLHFCQUFBO0VBQUE7QUZFbUI7QUFBbkI7RUVGQSxxQkFBQTtFQUFBO0FGRW1CO0FBQW5CO0VFRkEscUJBQUE7RUFBQTtBRkVtQjtBQUFuQjtFRUZBLHFCQUFBO0VBQUE7QUZFbUI7QUFBbkI7RUVGQTtBRkVtQjtBQUFuQjtFRUZBLDRCQUFBO0VBQUE7QUZFbUI7QUFBbkI7RUVGQTtBRkVtQjtBQUFuQjtFRUZBLGdGQUFBO0VBQUEsb0dBQUE7RUFBQTtBRkVtQjtBQUFuQjtFRUZBLDJDQUFBO0VBQUEsd0RBQUE7RUFBQTtBRkVtQjtBQUFuQjtFRUZBO0FGRW1CO0FBQW5CO0VFRkEseUpBQUE7RUFBQSx5REFBQTtFQUFBO0FGRW1CO0FBRm5CO0VFQUEsbUJBQUE7RUFBQTtDQUFBO0FGQUE7RUVBQSxtQkFBQTtFQUFBO0NBQUE7QUZBQTtFRUFBO0NBQUE7QUZBQTtFRUFBLHVCQUFBO0VBQUE7Q0FBQTtBRkFBO0VFQUEsbUJBQUE7RUFBQTtDQUFBO0FGQUE7RUVBQSxxQkFBQTtFQUFBO0NBQUE7QUZBQTtFRUFBLHFCQUFBO0VBQUE7Q0FBQTtBRkFBO0VFQUEscUJBQUE7RUFBQTtDQUFBO0FGQUE7RUVBQSx1QkFBQTtFQUFBO0NBQUE7QUZBQTtFRUFBLCtCQUFBO0VBQUE7Q0FBQTtBRkFBO0VFQUEsNEdBQUE7RUFBQSwwR0FBQTtFQUFBO0NBQUE7QUZBQTtFRUFBLHFCQUFBO0VBQUE7Q0FBQTtBRkFBO0VFQUEsdUJBQUE7RUFBQTtDQUFBO0FGQUE7RUVBQSxtQkFBQTtFQUFBO0NBQUE7QUZBQTtFRUFBLG1CQUFBO0VBQUE7Q0FBQTtBRkFBO0VFQUE7Q0FBQTtBRkFBOztFRUFBO0lBQUE7R0FBQTs7RUFBQTtJQUFBO0dBQUE7O0VBQUE7SUFBQTtHQUFBO0NBQUE7QUZBQTs7RUVBQTtJQUFBO0dBQUE7Q0FBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdGFpbHdpbmQgYmFzZTtcXG5AdGFpbHdpbmQgY29tcG9uZW50cztcXG5AdGFpbHdpbmQgdXRpbGl0aWVzO1xcblwiLFwiLypcXG4xLiBQcmV2ZW50IHBhZGRpbmcgYW5kIGJvcmRlciBmcm9tIGFmZmVjdGluZyBlbGVtZW50IHdpZHRoLiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy80KVxcbjIuIEFsbG93IGFkZGluZyBhIGJvcmRlciB0byBhbiBlbGVtZW50IGJ5IGp1c3QgYWRkaW5nIGEgYm9yZGVyLXdpZHRoLiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kY3NzL3RhaWx3aW5kY3NzL3B1bGwvMTE2KVxcbiovXFxuXFxuKixcXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIGJvcmRlci13aWR0aDogMDsgLyogMiAqL1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDsgLyogMiAqL1xcbiAgYm9yZGVyLWNvbG9yOiB0aGVtZSgnYm9yZGVyQ29sb3IuREVGQVVMVCcsIGN1cnJlbnRDb2xvcik7IC8qIDIgKi9cXG59XFxuXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICAtLXR3LWNvbnRlbnQ6ICcnO1xcbn1cXG5cXG4vKlxcbjEuIFVzZSBhIGNvbnNpc3RlbnQgc2Vuc2libGUgbGluZS1oZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbjIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbjMuIFVzZSBhIG1vcmUgcmVhZGFibGUgdGFiIHNpemUuXFxuNC4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBgc2Fuc2AgZm9udC1mYW1pbHkgYnkgZGVmYXVsdC5cXG4qL1xcblxcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuNTsgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxuICAtbW96LXRhYi1zaXplOiA0OyAvKiAzICovXFxuICB0YWItc2l6ZTogNDsgLyogMyAqL1xcbiAgZm9udC1mYW1pbHk6IHRoZW1lKCdmb250RmFtaWx5LnNhbnMnLCB1aS1zYW5zLXNlcmlmLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBBcmlhbCwgXFxcIk5vdG8gU2Fuc1xcXCIsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiLCBcXFwiTm90byBDb2xvciBFbW9qaVxcXCIpOyAvKiA0ICovXFxufVxcblxcbi8qXFxuMS4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbjIuIEluaGVyaXQgbGluZS1oZWlnaHQgZnJvbSBgaHRtbGAgc28gdXNlcnMgY2FuIHNldCB0aGVtIGFzIGEgY2xhc3MgZGlyZWN0bHkgb24gdGhlIGBodG1sYCBlbGVtZW50LlxcbiovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qXFxuMS4gQWRkIHRoZSBjb3JyZWN0IGhlaWdodCBpbiBGaXJlZm94LlxcbjIuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIG9mIGJvcmRlciBjb2xvciBpbiBGaXJlZm94LiAoaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTkwNjU1KVxcbjMuIEVuc3VyZSBob3Jpem9udGFsIHJ1bGVzIGFyZSB2aXNpYmxlIGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG5ociB7XFxuICBoZWlnaHQ6IDA7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7IC8qIDMgKi9cXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4qL1xcblxcbmFiYnI6d2hlcmUoW3RpdGxlXSkge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgZGVmYXVsdCBmb250IHNpemUgYW5kIHdlaWdodCBmb3IgaGVhZGluZ3MuXFxuKi9cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLypcXG5SZXNldCBsaW5rcyB0byBvcHRpbWl6ZSBmb3Igb3B0LWluIHN0eWxpbmcgaW5zdGVhZCBvZiBvcHQtb3V0LlxcbiovXFxuXFxuYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gRWRnZSBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLypcXG4xLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBtb25vYCBmb250IGZhbWlseSBieSBkZWZhdWx0LlxcbjIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAsXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiB0aGVtZSgnZm9udEZhbWlseS5tb25vJywgdWktbW9ub3NwYWNlLCBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFxcXCJMaWJlcmF0aW9uIE1vbm9cXFwiLCBcXFwiQ291cmllciBOZXdcXFwiLCBtb25vc3BhY2UpOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qXFxuUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKlxcbjEuIFJlbW92ZSB0ZXh0IGluZGVudGF0aW9uIGZyb20gdGFibGUgY29udGVudHMgaW4gQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05OTkwODgsIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yMDEyOTcpXFxuMi4gQ29ycmVjdCB0YWJsZSBib3JkZXIgY29sb3IgaW5oZXJpdGFuY2UgaW4gYWxsIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTM1NzI5LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTk1MDE2KVxcbjMuIFJlbW92ZSBnYXBzIGJldHdlZW4gdGFibGUgYm9yZGVycyBieSBkZWZhdWx0LlxcbiovXFxuXFxudGFibGUge1xcbiAgdGV4dC1pbmRlbnQ6IDA7IC8qIDEgKi9cXG4gIGJvcmRlci1jb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgLyogMyAqL1xcbn1cXG5cXG4vKlxcbjEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbjIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4zLiBSZW1vdmUgZGVmYXVsdCBwYWRkaW5nIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAxICovXFxuICBtYXJnaW46IDA7IC8qIDIgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cXG59XFxuXFxuLypcXG5SZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UgYW5kIEZpcmVmb3guXFxuKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKlxcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuMi4gUmVtb3ZlIGRlZmF1bHQgYnV0dG9uIHN0eWxlcy5cXG4qL1xcblxcbmJ1dHRvbixcXG5bdHlwZT0nYnV0dG9uJ10sXFxuW3R5cGU9J3Jlc2V0J10sXFxuW3R5cGU9J3N1Ym1pdCddIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgLyogMiAqL1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTsgLyogMiAqL1xcbn1cXG5cXG4vKlxcblVzZSB0aGUgbW9kZXJuIEZpcmVmb3ggZm9jdXMgc3R5bGUgZm9yIGFsbCBmb2N1c2FibGUgZWxlbWVudHMuXFxuKi9cXG5cXG46LW1vei1mb2N1c3Jpbmcge1xcbiAgb3V0bGluZTogYXV0bztcXG59XFxuXFxuLypcXG5SZW1vdmUgdGhlIGFkZGl0aW9uYWwgYDppbnZhbGlkYCBzdHlsZXMgaW4gRmlyZWZveC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL2dlY2tvLWRldi9ibG9iLzJmOWVhY2Q5ZDNkOTk1YzkzN2I0MjUxYTU1NTdkOTVkNDk0YzliZTEvbGF5b3V0L3N0eWxlL3Jlcy9mb3Jtcy5jc3MjTDcyOC1MNzM3KVxcbiovXFxuXFxuOi1tb3otdWktaW52YWxpZCB7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lIGFuZCBGaXJlZm94LlxcbiovXFxuXFxucHJvZ3Jlc3Mge1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKlxcbkNvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIFNhZmFyaS5cXG4qL1xcblxcbjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG46Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKlxcbjEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbjIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiovXFxuXFxuW3R5cGU9J3NlYXJjaCddIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4qL1xcblxcbjo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qXFxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4yLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICBmb250OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLypcXG5SZW1vdmVzIHRoZSBkZWZhdWx0IHNwYWNpbmcgYW5kIGJvcmRlciBmb3IgYXBwcm9wcmlhdGUgZWxlbWVudHMuXFxuKi9cXG5cXG5ibG9ja3F1b3RlLFxcbmRsLFxcbmRkLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbmhyLFxcbmZpZ3VyZSxcXG5wLFxcbnByZSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmZpZWxkc2V0IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmxlZ2VuZCB7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5vbCxcXG51bCxcXG5tZW51IHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKlxcblByZXZlbnQgcmVzaXppbmcgdGV4dGFyZWFzIGhvcml6b250YWxseSBieSBkZWZhdWx0LlxcbiovXFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcXG59XFxuXFxuLypcXG4xLiBSZXNldCB0aGUgZGVmYXVsdCBwbGFjZWhvbGRlciBvcGFjaXR5IGluIEZpcmVmb3guIChodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRsYWJzL3RhaWx3aW5kY3NzL2lzc3Vlcy8zMzAwKVxcbjIuIFNldCB0aGUgZGVmYXVsdCBwbGFjZWhvbGRlciBjb2xvciB0byB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgZ3JheSA0MDAgY29sb3IuXFxuKi9cXG5cXG5pbnB1dDo6cGxhY2Vob2xkZXIsXFxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXG4gIG9wYWNpdHk6IDE7IC8qIDEgKi9cXG4gIGNvbG9yOiB0aGVtZSgnY29sb3JzLmdyYXkuNDAwJywgIzljYTNhZik7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5TZXQgdGhlIGRlZmF1bHQgY3Vyc29yIGZvciBidXR0b25zLlxcbiovXFxuXFxuYnV0dG9uLFxcbltyb2xlPVxcXCJidXR0b25cXFwiXSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qXFxuTWFrZSBzdXJlIGRpc2FibGVkIGJ1dHRvbnMgZG9uJ3QgZ2V0IHRoZSBwb2ludGVyIGN1cnNvci5cXG4qL1xcbjpkaXNhYmxlZCB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi8qXFxuMS4gTWFrZSByZXBsYWNlZCBlbGVtZW50cyBgZGlzcGxheTogYmxvY2tgIGJ5IGRlZmF1bHQuIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxcbjIuIEFkZCBgdmVydGljYWwtYWxpZ246IG1pZGRsZWAgdG8gYWxpZ24gcmVwbGFjZWQgZWxlbWVudHMgbW9yZSBzZW5zaWJseSBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL2plbnNpbW1vbnMvY3NzcmVtZWR5L2lzc3Vlcy8xNCNpc3N1ZWNvbW1lbnQtNjM0OTM0MjEwKVxcbiAgIFRoaXMgY2FuIHRyaWdnZXIgYSBwb29ybHkgY29uc2lkZXJlZCBsaW50IGVycm9yIGluIHNvbWUgdG9vbHMgYnV0IGlzIGluY2x1ZGVkIGJ5IGRlc2lnbi5cXG4qL1xcblxcbmltZyxcXG5zdmcsXFxudmlkZW8sXFxuY2FudmFzLFxcbmF1ZGlvLFxcbmlmcmFtZSxcXG5lbWJlZCxcXG5vYmplY3Qge1xcbiAgZGlzcGxheTogYmxvY2s7IC8qIDEgKi9cXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5Db25zdHJhaW4gaW1hZ2VzIGFuZCB2aWRlb3MgdG8gdGhlIHBhcmVudCB3aWR0aCBhbmQgcHJlc2VydmUgdGhlaXIgaW50cmluc2ljIGFzcGVjdCByYXRpby4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvMTQpXFxuKi9cXG5cXG5pbWcsXFxudmlkZW8ge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKlxcbkVuc3VyZSB0aGUgZGVmYXVsdCBicm93c2VyIGJlaGF2aW9yIG9mIHRoZSBgaGlkZGVuYCBhdHRyaWJ1dGUuXFxuKi9cXG5cXG5baGlkZGVuXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIixudWxsXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIExvY1N0b3JhZ2UoKSB7XG4gIC8vXG59XG5cbkxvY1N0b3JhZ2UucHJvdG90eXBlLnNhdmUgPSBmdW5jdGlvbiAob2JqKSB7XG4gIGNvbnN0IGxhYmVsID0gb2JqLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGNvbnN0IGlkID0gb2JqLmlkIHx8ICcnO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHtsYWJlbH1fJHtpZH1gLCBKU09OLnN0cmluZ2lmeShvYmopKTtcbn07XG5cbkxvY1N0b3JhZ2UucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSk7XG59O1xuXG5Mb2NTdG9yYWdlLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG59O1xuXG5Mb2NTdG9yYWdlLnByb3RvdHlwZS5yZW1vdmVQcm9qZWN0ID0gZnVuY3Rpb24gKGtleSkge1xuICBjb25zdCBrZXlzID0gdGhpcy5nZXQoa2V5KS50b2Rvcy5tYXAoKGlkKSA9PiBgVG9kb18ke2lkfWApO1xuICBbLi4ua2V5cywga2V5XS5mb3JFYWNoKChrKSA9PiB0aGlzLnJlbW92ZShrKSk7XG59O1xuXG5Mb2NTdG9yYWdlLnByb3RvdHlwZS5pc0VtcHR5ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gbG9jYWxTdG9yYWdlLmxlbmd0aCA9PT0gMDtcbn07XG5cbi8vIFRPRE86IGlzIGl0IGJldHRlciB0byBzYXZlIG1hbmFnZXIsIHByb2plY3RzLCB0b2RvcyBzZXBhcmF0ZWx5P1xuXG5jb25zdCBzdG9yYWdlID0gbmV3IExvY1N0b3JhZ2UoKTtcblxuZXhwb3J0IGRlZmF1bHQgTG9jU3RvcmFnZTtcbmV4cG9ydCB7IHN0b3JhZ2UgfTtcbiIsImltcG9ydCBtb2RhbEVsIGZyb20gJy4vY29tcG9uZW50cy9tb2RhbCc7XG5pbXBvcnQgcHJvamVjdEZvcm0gZnJvbSAnLi9jb21wb25lbnRzL3Byb2plY3RGb3JtJztcbmltcG9ydCB0b2RvRm9ybSBmcm9tICcuL2NvbXBvbmVudHMvdG9kb0Zvcm0nO1xuaW1wb3J0IGdldFNjcm9sbFdpZHRoIGZyb20gJy4vdXRpbHMvZ2V0U2Nyb2xsV2lkdGgnO1xuXG5mdW5jdGlvbiBNb2RhbCgpIHtcbiAgLy9cbn1cblxuZnVuY3Rpb24gaW5zZXJ0SGVscGVyU3R5bGVzKCkge1xuICBjb25zdCBzdHlsZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICBzdHlsZXMuaW5uZXJIVE1MID0gYFxuICAgIDpyb290IHsgLS1zY3JvbGwtd2lkdGg6ICR7Z2V0U2Nyb2xsV2lkdGgoKX1weDsgfVxuXG4gICAgLmJvZHktcGFkZGluZy1maXgge1xuICAgICAgcGFkZGluZy1yaWdodDogdmFyKC0tc2Nyb2xsLXdpZHRoKTtcbiAgICB9XG4gIGA7XG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVzKTtcbn1cblxuTW9kYWwucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gIGluc2VydEhlbHBlclN0eWxlcygpO1xuICBbcHJvamVjdEZvcm0sIHRvZG9Gb3JtXS5mb3JFYWNoKChjb25maWcpID0+IHtcbiAgICB0aGlzLnJlbmRlck1vZGFsKGNvbmZpZyk7XG4gIH0pO1xuICB0aGlzLmFkZEhhbmRsZXJzKCk7XG59O1xuXG5Nb2RhbC5wcm90b3R5cGUucmVuZGVyTW9kYWwgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gIGRvY3VtZW50LmJvZHkuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBtb2RhbEVsKGNvbmZpZykpO1xufTtcblxuTW9kYWwucHJvdG90eXBlLm9wZW5Nb2RhbCA9IGZ1bmN0aW9uIChtb2RhbCkge1xuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ292ZXJmbG93LWhpZGRlbicsICdib2R5LXBhZGRpbmctZml4Jyk7XG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcmZsb3cteS1zY3JvbGwnKTtcbiAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2ZsZXgnKTtcbn07XG5cbk1vZGFsLnByb3RvdHlwZS5jbG9zZU1vZGFsID0gZnVuY3Rpb24gKG1vZGFsKSB7XG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcmZsb3ctaGlkZGVuJywgJ2JvZHktcGFkZGluZy1maXgnKTtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdvdmVyZmxvdy15LXNjcm9sbCcpO1xuICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnZmxleCcpO1xufTtcblxuTW9kYWwucHJvdG90eXBlLmNsb3NlQWxsTW9kYWxzID0gZnVuY3Rpb24gKCkge1xuICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLW1vZGFsJykgfHwgW10pLmZvckVhY2goKG1vZGFsKSA9PiB7XG4gICAgdGhpcy5jbG9zZU1vZGFsKG1vZGFsKTtcbiAgfSk7XG59O1xuXG5Nb2RhbC5wcm90b3R5cGUuYWRkSGFuZGxlcnMgPSBmdW5jdGlvbiAoKSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgLy8gb3BlbiBtb2RhbCBieSBbZGF0YS1tb2RhbC10YXJnZXQ9XCJtb2RhbF9pZFwiXVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSBlO1xuICAgICAgaWYgKHRhcmdldC5jbG9zZXN0KCdbZGF0YS1tb2RhbC10YXJnZXRdJykpIHtcbiAgICAgICAgY29uc3QgaWQgPSB0YXJnZXQuY2xvc2VzdCgnW2RhdGEtbW9kYWwtdGFyZ2V0XScpLmRhdGFzZXQubW9kYWxUYXJnZXQ7XG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgICAgICB0aGlzLm9wZW5Nb2RhbChtb2RhbCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBjbG9zZSBtb2RhbCBieSBbZGF0YS1tb2RhbC1jbG9zZXJdXG4gICAgLy8gVE9ETzogY2hlY2sgZm9yIG5ld2x5IGNyZWF0ZWQgaXRlbXM7IHVzZSBldmVudCBkZWxlZ2F0aW9uP1xuICAgIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1tb2RhbC1jbG9zZXJdJykgfHwgW10pLmZvckVhY2goKGNsb3NlcikgPT4ge1xuICAgICAgY29uc3QgbW9kYWwgPSBjbG9zZXIuY2xvc2VzdCgnLmpzLW1vZGFsJyk7XG5cbiAgICAgIGNsb3Nlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy5jbG9zZU1vZGFsKG1vZGFsKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gY2xvc2UgbW9kYWwgYnkgRXNjXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgZSA9IGV2ZW50IHx8IHdpbmRvdy5ldmVudDtcblxuICAgICAgaWYgKGUuY29kZSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgdGhpcy5jbG9zZUFsbE1vZGFscygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsO1xuIiwiaW1wb3J0IHsgc3RvcmFnZSB9IGZyb20gJy4vTG9jU3RvcmFnZSc7XG5pbXBvcnQgVG9kbyBmcm9tICcuL1RvZG8nO1xuaW1wb3J0IGdlbmVyYXRlSWQgZnJvbSAnLi91dGlscy9pZCc7XG5pbXBvcnQgdHJpbVN0ciBmcm9tICcuL3V0aWxzL3RyaW1TdHInO1xuXG5mdW5jdGlvbiBQcm9qZWN0KGRhdGEpIHtcbiAgLy8gVE9ETzogZG8gSSBuZWVkIHRvIGFkZCB0b2RvcyBwYXJhbT9cbiAgLy8gVE9ETzogcmVwbGFjZSBkYXRhIG9iamVjdCB3aXRoIHsuLi59IGxpa2UgaW4gUHJvamVjdHNNYW5hZ2VyIGNvbnN0cnVjdG9yXG4gIGNvbnN0IHsgaWQsIHRpdGxlLCB0b2RvcyB9ID0gZGF0YTtcblxuICB0aGlzLmlkID0gaWQgfHwgZ2VuZXJhdGVJZCgpO1xuICB0aGlzLnRpdGxlID0gdHJpbVN0cih0aXRsZSk7IC8vIG9yICdVbnRpdGxlZCc/XG4gIHRoaXMudG9kb3MgPSB0b2RvcyB8fCBbXTtcbn1cblxuUHJvamVjdC5wcm90b3R5cGUuc3RvcmFnZSA9IHN0b3JhZ2U7XG5cbi8vIFRPRE86IGl0J3Mgbm90IGNsZWFyIGlzIGl0IGEgVG9kbyBpdGVtIG9yIHt9XG5Qcm9qZWN0LnByb3RvdHlwZS5hZGRUb2RvID0gZnVuY3Rpb24gKHRvZG9fKSB7XG4gIC8vIFRPRE86IGRvIHNvbWV0aGluZyB3aXRoIHBhcmFtIHJlYXNzaWdubWVudFxuICBsZXQgdG9kbyA9IHRvZG9fO1xuICAvLyBUT0RPOiBub3Qgc3VyZSBhYm91dCBuZWVkIG9mIGNoZWNrIGZvciAnVG9kbycgb2JqZWN0XG4gIC8vIHVzZSBpbiByZW5kZXIgbmV3IHRvZG8gYWxyZWFkeSBzbyBiZSBhd2FyZSFcbiAgaWYgKCEodG9kbyBpbnN0YW5jZW9mIFRvZG8pKSB7XG4gICAgdG9kbyA9IG5ldyBUb2RvKHRvZG8pO1xuICB9XG4gIHRoaXMudG9kb3MucHVzaCh0b2RvLmlkKTtcbiAgLy8gTk9URTogbmVlZCB0byBhZGQgc3RvcmFnZSBvYmogdG8gcHJvdG8hXG4gIHRoaXMuc3RvcmFnZS5zYXZlKHRvZG8pO1xuICB0aGlzLnNhdmUoKTtcblxuICByZXR1cm4gdG9kby5pZDtcbn07XG5cblByb2plY3QucHJvdG90eXBlLnJlbW92ZVRvZG8gPSBmdW5jdGlvbiAoaWQpIHtcbiAgdGhpcy50b2RvcyA9IHRoaXMudG9kb3MuZmlsdGVyKChpKSA9PiBpICE9PSBpZCk7XG4gIHRoaXMuc3RvcmFnZS5yZW1vdmUoYFRvZG9fJHtpZH1gKTtcbiAgdGhpcy5zYXZlKCk7XG59O1xuXG5Qcm9qZWN0LnByb3RvdHlwZS5nZXRSZXN0b3JlZFRvZG8gPSBmdW5jdGlvbiAoaWQpIHtcbiAgY29uc3Qgb2JqID0gdGhpcy5zdG9yYWdlLmdldChgVG9kb18ke2lkfWApO1xuICByZXR1cm4gbmV3IFRvZG8ob2JqKTtcbn07XG5cbi8vIFRPRE86IG1heWJlIGF2b2lkIHJlbW92aW5nIHRvZG8gZnJvbSBzdG9yYWdlP1xuLy8gVE9ETzogbWF5YmUgcGFzcyBwcm9qZWN0SWQ/XG5Qcm9qZWN0LnByb3RvdHlwZS5tb3ZlVG9kbyA9IGZ1bmN0aW9uICh0b2RvLCBwcm9qZWN0KSB7XG4gIGNvbnNvbGUud2FybignV0FSTklORyEgLm1vdmVUb2RvKCkgZG9lcyBub3Qgd29yayB5ZXQhJyk7XG4gIHRoaXMucmVtb3ZlVG9kbyh0b2RvLmlkKTtcbiAgcHJvamVjdC5hZGRUb2RvKHRvZG8pO1xufTtcblxuUHJvamVjdC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcbiAgdGhpcy5zYXZlKCk7XG59O1xuXG5Qcm9qZWN0LnByb3RvdHlwZS5zYXZlID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLnN0b3JhZ2Uuc2F2ZSh0aGlzKTtcbn07XG5cblByb2plY3QucHJvdG90eXBlLmxvYWREYXRhID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgLy8gVE9ETzogZG8gSSBuZWVkIHRoaXMgY2hlY2s/XG4gIC8vIFRPRE86IGFjdHVhbGx5IGNhbiBoYW5kbGUgYXJyYXkvb2JqZWN0IGNhc2VzIHdpdGhcbiAgLy8gY29uc29sZS5sb2coanNvbi5jb25zdHJ1Y3Rvci5uYW1lKSBvciBqc29uIGluc3RhbmNlb2YgQXJyYXk7XG4gIHRyeSB7XG4gICAganNvbi5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICB0aGlzLmFkZFRvZG8obmV3IFRvZG8oaXRlbSkpO1xuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLndhcm4oJ1dBUk5JTkchIFJlcXVpcmUgYW4gYXJyYXkgb2Ygb2JqZWN0c1xcbicsIGVycik7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7XG4iLCJpbXBvcnQgeyBzdG9yYWdlIH0gZnJvbSAnLi9Mb2NTdG9yYWdlJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vUHJvamVjdCc7XG5cbmZ1bmN0aW9uIFByb2plY3RzTWFuYWdlcih7IHByb2plY3RzLCBkZWZhdWx0UHJvamVjdCwgY3VycmVudFByb2plY3QgfSkge1xuICB0aGlzLnByb2plY3RzID0gcHJvamVjdHMgfHwgW107XG4gIHRoaXMuZGVmYXVsdFByb2plY3QgPSBkZWZhdWx0UHJvamVjdCB8fCBudWxsO1xuICB0aGlzLmN1cnJlbnRQcm9qZWN0ID0gY3VycmVudFByb2plY3QgfHwgbnVsbDtcbn1cblxuUHJvamVjdHNNYW5hZ2VyLnByb3RvdHlwZS5zdG9yYWdlID0gc3RvcmFnZTtcblxuUHJvamVjdHNNYW5hZ2VyLnByb3RvdHlwZS5zYXZlID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLnN0b3JhZ2Uuc2F2ZSh0aGlzKTtcbn07XG5cblByb2plY3RzTWFuYWdlci5wcm90b3R5cGUuYWRkUHJvamVjdCA9IGZ1bmN0aW9uIChpZCkge1xuICB0aGlzLnByb2plY3RzLnB1c2goaWQpO1xuICB0aGlzLnNhdmUoKTtcbn07XG5cbi8vIFRPRE86IGFkZCB3YXJuaW5nIGFib3V0IGRlbGV0aW5nIHtufSB0b2RvIGl0ZW1zXG5Qcm9qZWN0c01hbmFnZXIucHJvdG90eXBlLmRlbGV0ZVByb2plY3QgPSBmdW5jdGlvbiAoaWQpIHtcbiAgaWYgKGlkID09PSB0aGlzLmRlZmF1bHRQcm9qZWN0KSB7XG4gICAgY29uc29sZS53YXJuKCdXQVJOSU5HOiBDYW5ub3QgZGVsZXRlIGRlZmF1bHQgcHJvamVjdCcpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpZCA9PT0gdGhpcy5jdXJyZW50UHJvamVjdCkge1xuICAgIHRoaXMuc2V0Q3VycmVudFByb2plY3QodGhpcy5kZWZhdWx0UHJvamVjdCk7XG4gIH1cblxuICB0aGlzLnByb2plY3RzID0gdGhpcy5wcm9qZWN0cy5maWx0ZXIoKGkpID0+IGkgIT09IGlkKTtcbiAgdGhpcy5zYXZlKCk7XG5cbiAgdGhpcy5zdG9yYWdlLnJlbW92ZVByb2plY3QoYFByb2plY3RfJHtpZH1gKTtcbn07XG5cblByb2plY3RzTWFuYWdlci5wcm90b3R5cGUuZ2V0UmVzdG9yZWRQcm9qZWN0ID0gZnVuY3Rpb24gKGlkKSB7XG4gIHJldHVybiBuZXcgUHJvamVjdCh0aGlzLnN0b3JhZ2UuZ2V0KGBQcm9qZWN0XyR7aWR9YCkpO1xufTtcblxuUHJvamVjdHNNYW5hZ2VyLnByb3RvdHlwZS5zZXRDdXJyZW50UHJvamVjdCA9IGZ1bmN0aW9uIChpZCkge1xuICB0aGlzLmN1cnJlbnRQcm9qZWN0ID0gaWQ7XG4gIHRoaXMuc2F2ZSgpO1xufTtcblxuY29uc3QgcHJvamVjdHNNYW5hZ2VyID0gKGZ1bmN0aW9uIGluaXRQTSgpIHtcbiAgbGV0IHBtO1xuXG4gIGlmIChzdG9yYWdlLmlzRW1wdHkoKSkge1xuICAgIHBtID0gbmV3IFByb2plY3RzTWFuYWdlcih7fSk7XG4gICAgY29uc3QgZGVmYXV0UHJvamVjdCA9IG5ldyBQcm9qZWN0KHsgdGl0bGU6ICdJbmJveCcgfSk7XG4gICAgZGVmYXV0UHJvamVjdC5zYXZlKCk7XG4gICAgY29uc3QgeyBpZCB9ID0gZGVmYXV0UHJvamVjdDtcbiAgICBwbS5kZWZhdWx0UHJvamVjdCA9IGlkO1xuICAgIHBtLmN1cnJlbnRQcm9qZWN0ID0gaWQ7XG4gICAgcG0uYWRkUHJvamVjdChpZCk7XG4gICAgLy8gZGVmYXV0UHJvamVjdC5sb2FkRGF0YShkZW1vVG9kb3NEYXRhKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBkYXRhID0gc3RvcmFnZS5nZXQoJ1Byb2plY3RzTWFuYWdlcl8nKTtcbiAgICBwbSA9IG5ldyBQcm9qZWN0c01hbmFnZXIoZGF0YSk7XG4gIH1cblxuICByZXR1cm4gcG07XG59KSgpO1xuXG5leHBvcnQgeyBwcm9qZWN0c01hbmFnZXIgfTtcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzTWFuYWdlcjtcbiIsImltcG9ydCB7IHN0b3JhZ2UgfSBmcm9tICcuL0xvY1N0b3JhZ2UnO1xuaW1wb3J0IGdlbmVyYXRlSWQgZnJvbSAnLi91dGlscy9pZCc7XG5pbXBvcnQgdHJpbVN0ciBmcm9tICcuL3V0aWxzL3RyaW1TdHInO1xuXG5mdW5jdGlvbiBUb2RvKGRhdGEpIHtcbiAgY29uc3QgeyBpZCwgdGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5ID0gJ2xvdycsIGNvbXBsZXRlIH0gPSBkYXRhO1xuXG4gIHRoaXMuaWQgPSBpZCB8fCBnZW5lcmF0ZUlkKCk7XG4gIHRoaXMudGl0bGUgPSB0cmltU3RyKHRpdGxlKTtcbiAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZSB8fCBuZXcgRGF0ZSgpO1xuICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIHRoaXMuY29tcGxldGUgPSBjb21wbGV0ZTsgLy8gVE9ETzogbm90IHN1cmUgKGNvbXBsZXRlID09PSAnb24nIHdhcyBoZXJlKVxufVxuXG5Ub2RvLnByb3RvdHlwZS5zdG9yYWdlID0gc3RvcmFnZTtcblxuVG9kby5wcm90b3R5cGUuc2F2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5zdG9yYWdlLnNhdmUodGhpcyk7XG59O1xuXG5Ub2RvLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAvLyBUT0RPOiBhc3N1bWUgZGF0YSBkb2Vzbid0IGhhdmUgdW5kZWZpbmVkIHZhbHVlc1xuICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuICB0aGlzLnNhdmUoKTtcbn07XG5cbi8vIFRPRE86IHJlbW92ZSBpdD9cblRvZG8ucHJvdG90eXBlLnRvZ2dsZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5jb21wbGV0ZSA9ICF0aGlzLmNvbXBsZXRlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9kbztcbiIsImltcG9ydCB7IHN0b3JhZ2UgfSBmcm9tICcuL0xvY1N0b3JhZ2UnO1xuaW1wb3J0IHsgcHJvamVjdHNNYW5hZ2VyIH0gZnJvbSAnLi9Qcm9qZWN0c01hbmFnZXInO1xuaW1wb3J0IGxheW91dCBmcm9tICcuL2NvbXBvbmVudHMvbGF5b3V0JztcbmltcG9ydCBjaGVja2JveCBmcm9tICcuL2NvbXBvbmVudHMvY2hlY2tib3gnO1xuaW1wb3J0IGhhbmRsZXJzIGZyb20gJy4vaGFuZGxlcnMnO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4vTW9kYWwnO1xuXG5mdW5jdGlvbiBVSSgpIHtcbiAgLy9cbn1cblxuLy8gTk9URTogZG9lcyBpdCBtYWtlIHNlbnNlIHRvIHN0b3JlIHBtL3N0b3JhZ2UgaW4gcHJvdG90eXBlP1xuVUkucHJvdG90eXBlLnBtID0gcHJvamVjdHNNYW5hZ2VyO1xuVUkucHJvdG90eXBlLnN0b3JhZ2UgPSBzdG9yYWdlO1xuXG5VSS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbC1zbW9vdGgnKTtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFxuICAgICdyZWxhdGl2ZScsXG4gICAgJ21pbi1oLXNjcmVlbicsXG4gICAgJ292ZXJmbG93LXktc2Nyb2xsJyxcbiAgICAnZmxleCcsXG4gICAgJ2ZsZXgtY29sJyxcbiAgICAnZm9udC1zYW5zJyxcbiAgICAnYmctemluYy01MCcsXG4gICAgJ3NlbGVjdGlvbjpiZy1waW5rLTMwMCdcbiAgKTtcblxuICBkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgbGF5b3V0KTtcbiAgbmV3IE1vZGFsKCkuaW5pdCgpO1xuICB0aGlzLmFkZEhhbmRsZXJzKCk7XG59O1xuXG5mdW5jdGlvbiByZXBsYWNlT2xkSXRlbShjb250YWluZXIsIGlkLCB0ZW1wbGF0ZSkge1xuICBjb25zdCBvbGRJdGVtID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoYCMke2lkfWApO1xuICBpZiAob2xkSXRlbSAhPT0gbnVsbCkge1xuICAgIG9sZEl0ZW0uaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmVuZCcsIHRlbXBsYXRlKTtcbiAgICBvbGRJdGVtLnJlbW92ZSgpO1xuICB9IGVsc2Uge1xuICAgIGNvbnRhaW5lci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHRlbXBsYXRlKTtcbiAgfVxufVxuXG5VSS5wcm90b3R5cGUucmVuZGVyUHJvamVjdCA9IGZ1bmN0aW9uIChpZCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtcHJvamVjdHMtbGlzdCcpO1xuICBjb25zdCB7IHRpdGxlIH0gPSB0aGlzLnN0b3JhZ2UuZ2V0KGBQcm9qZWN0XyR7aWR9YCk7XG4gIC8vIFRPRE86IGdldCBpZCwgdGl0bGVcbiAgY29uc3QgdGVtcGxhdGUgPSBgXG4gICAgPGRpdiBpZD1cIiR7aWR9XCIgY2xhc3M9XCJqcy1wcm9qZWN0LWl0ZW0gJHtpZCA9PT0gdGhpcy5wbS5jdXJyZW50UHJvamVjdCA/ICd0ZXh0LW9yYW5nZS02MDAnIDogJyd9XG4gICAgICBtYi00IHAtNCBncm91cCBmbGV4IGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgYmctd2hpdGUgcm91bmRlZC1sZyBzaGFkb3ctbGcgaG92ZXI6Y3Vyc29yLXBvaW50ZXJcbiAgICBcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwidGV4dC1sZyBmb250LWJvbGRcIj4ke3RpdGxlfTwvc3Bhbj5cbiAgICAgIDxkaXYgY2xhc3M9XCJzcGFjZS14LTJcIj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzPVwianMtYnRuLXByb2plY3QtZWRpdCBvcGFjaXR5LTAgdGV4dC1zbGF0ZS00MDAgZ3JvdXAtaG92ZXI6b3BhY2l0eS0xMDAgaG92ZXI6dGV4dC1za3ktNTAwIHRyYW5zaXRpb25cIlxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIHRpdGxlPVwiRWRpdCBwcm9qZWN0XCJcbiAgICAgICAgICBkYXRhLW1vZGFsLXRhcmdldD1cIm1vZGFsLWFkZC1wcm9qZWN0XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzdmcgY2xhc3M9XCJ3LTYgaC02XCI+PHVzZSB4bGluazpocmVmPVwiI2ljb24tZWRpdFwiPjwvdXNlPjwvc3ZnPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzPVwianMtYnRuLXByb2plY3QtZGVsZXRlIG9wYWNpdHktMCB0ZXh0LXNsYXRlLTQwMCBncm91cC1ob3ZlcjpvcGFjaXR5LTEwMCBob3Zlcjp0ZXh0LXJlZC01MDAgdHJhbnNpdGlvblwiXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgdGl0bGU9XCJEZWxldGUgcHJvamVjdFwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3ZnIGNsYXNzPVwidy02IGgtNlwiPjx1c2UgeGxpbms6aHJlZj1cIiNpY29uLXRyYXNoXCI+PC91c2U+PC9zdmc+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+YDtcbiAgLy8gVE9ETzogc2hvdyB0b2RvcyBjb3VudD9cblxuICAvLyByZXBsYWNlIG9sZCBwcm9qZWN0IG5vZGUgb24gJ2VkaXQvdXBkYXRlJyBhY3Rpb25cbiAgcmVwbGFjZU9sZEl0ZW0oY29udGFpbmVyLCBpZCwgdGVtcGxhdGUpO1xufTtcblxuVUkucHJvdG90eXBlLmhpZ2hsaWdodEN1cnJlbnRQcm9qZWN0ID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBhY3RpdmVDbGFzc05hbWUgPSAndGV4dC1vcmFuZ2UtNjAwJztcbiAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1wcm9qZWN0cy1saXN0Jyk7XG4gIGNvbnN0IHByb2plY3RFbCA9IGxpc3QucXVlcnlTZWxlY3RvcihgIyR7dGhpcy5wbS5jdXJyZW50UHJvamVjdH1gKTtcbiAgdHJ5IHtcbiAgICBsaXN0LnF1ZXJ5U2VsZWN0b3IoYC4ke2FjdGl2ZUNsYXNzTmFtZX1gKS5jbGFzc0xpc3QucmVtb3ZlKGAke2FjdGl2ZUNsYXNzTmFtZX1gKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmxvZyhgSU5GTzogVGhlcmUgaXMgbm8gaGlnaGxpZ2h0ZWQgcHJvamVjdFxcbmAsIGVycm9yKTtcbiAgfVxuICBwcm9qZWN0RWwuY2xhc3NMaXN0LmFkZChgJHthY3RpdmVDbGFzc05hbWV9YCk7XG59O1xuXG5VSS5wcm90b3R5cGUucmVuZGVyVG9kbyA9IGZ1bmN0aW9uIChpZCkge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtdG9kby1saXN0Jyk7XG4gIGNvbnN0IHsgdGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5LCBjb21wbGV0ZSB9ID0gdGhpcy5zdG9yYWdlLmdldChgVG9kb18ke2lkfWApO1xuICBjb25zdCB0ZW1wbGF0ZSA9IGBcbiAgICA8ZGl2IGlkPVwiJHtpZH1cIlxuICAgICAgY2xhc3M9XCJqcy10b2RvLWl0ZW0gbWItNCBwLTQgYmctd2hpdGUgcm91bmRlZC1sZyBzaGFkb3ctbGdcIlxuICAgID5cbiAgICAgIDxkaXY+JHt0aXRsZX08L2Rpdj5cbiAgICAgIDxkaXY+JHtkdWVEYXRlfTwvZGl2PlxuICAgICAgPGRpdj5wcmlvcml0eTogJHtwcmlvcml0eX08L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgICR7Y2hlY2tib3goJ0NvbXBsZXRlPycsICdjb21wbGV0ZScsIGBjaGVja18ke2lkfWAsIGNvbXBsZXRlKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzPVwianMtYnRuLXRvZG8tZWRpdCB1bmRlcmxpbmUgaXRhbGljIHRleHQtc2xhdGUtNDAwIGhvdmVyOnRleHQtc2t5LTUwMCB0cmFuc2l0aW9uXCJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICB0aXRsZT1cIkVkaXQgdG9kb1wiXG4gICAgICAgICAgZGF0YS1tb2RhbC10YXJnZXQ9XCJtb2RhbC1hZGQtdG9kb1wiXG4gICAgICAgID5cbiAgICAgICAgICA8c3ZnIGNsYXNzPVwidy02IGgtNlwiPjx1c2UgeGxpbms6aHJlZj1cIiNpY29uLWVkaXRcIj48L3VzZT48L3N2Zz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzcz1cImpzLWJ0bi10b2RvLWRlbGV0ZSB1bmRlcmxpbmUgaXRhbGljIHRleHQtc2xhdGUtNDAwIGhvdmVyOnRleHQtcmVkLTUwMCB0cmFuc2l0aW9uXCJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICB0aXRsZT1cIkRlbGV0ZSB0b2RvXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzdmcgY2xhc3M9XCJ3LTYgaC02XCI+PHVzZSB4bGluazpocmVmPVwiI2ljb24tdHJhc2hcIj48L3VzZT48L3N2Zz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYDtcblxuICAvLyBUT0RPOiByZWZhY3RvciByZW5kZXIgbWV0aG9kc1xuICAvLyByZXBsYWNlIG9sZCBwcm9qZWN0IG5vZGUgb24gJ2VkaXQvdXBkYXRlJyBhY3Rpb25cbiAgcmVwbGFjZU9sZEl0ZW0oY29udGFpbmVyLCBpZCwgdGVtcGxhdGUpO1xufTtcblxuVUkucHJvdG90eXBlLnJlbW92ZU5vVG9kb3NNZXNzYWdlID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBtZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLW5vLXRvZG9zLW1lc3NhZ2UnKTtcbiAgaWYgKG1lc3NhZ2UpIHtcbiAgICBtZXNzYWdlLnJlbW92ZSgpO1xuICB9XG59O1xuXG5VSS5wcm90b3R5cGUucmVuZGVyTm9Ub2Rvc01lc3NhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IG1lc3NhZ2UgPSBgPHAgY2xhc3M9XCJqcy1uby10b2Rvcy1tZXNzYWdlIG1iLTRcIj5Xb3chIFN1Y2ggZW1wdHkhIDxzcGFuIGNsYXNzPVwidW5kZXJsaW5lIGl0YWxpYyBjdXJzb3ItcG9pbnRlclwiIGRhdGEtbW9kYWwtdGFyZ2V0PVwibW9kYWwtYWRkLXRvZG9cIj5BZGQgZmlyc3QgdG9kbz88L3NwYW4+PC9wPmA7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgJy5qcy10b2RvLWxpc3QnXG4gICkuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJqcy1uby10b2Rvcy1tZXNzYWdlXCI+JHttZXNzYWdlfTwvZGl2PmA7XG59O1xuXG5VSS5wcm90b3R5cGUucmVuZGVyUHJvamVjdFRvZG9zID0gZnVuY3Rpb24gKHByb2plY3RJZCA9IHRoaXMucG0uY3VycmVudFByb2plY3QpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXRvZG8tbGlzdCcpLmlubmVySFRNTCA9ICcnO1xuICBjb25zdCBkYXRhID0gdGhpcy5zdG9yYWdlLmdldChgUHJvamVjdF8ke3Byb2plY3RJZH1gKTtcbiAgaWYgKGRhdGEudG9kb3MubGVuZ3RoID09PSAwKSB7XG4gICAgdGhpcy5yZW5kZXJOb1RvZG9zTWVzc2FnZSgpO1xuICB9IGVsc2Uge1xuICAgIGRhdGEudG9kb3MuZm9yRWFjaCgoaWQpID0+IHtcbiAgICAgIHRoaXMucmVuZGVyVG9kbyhpZCk7XG4gICAgfSk7XG4gIH1cbn07XG5cblVJLnByb3RvdHlwZS5hZGRIYW5kbGVycyA9IGZ1bmN0aW9uICgpIHtcbiAgaGFuZGxlcnModGhpcyk7XG59O1xuXG5jb25zdCB1aSA9IG5ldyBVSSgpO1xuXG5leHBvcnQgeyB1aSB9O1xuZXhwb3J0IGRlZmF1bHQgVUk7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaGVja2JveChsYWJlbCwgbmFtZSwgaWQsIGNoZWNrZWQpIHtcbiAgcmV0dXJuIGBcbiAgICA8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1zdGFydFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIGgtNSBwdC1bM3B4XVwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBpZD1cIiR7aWR9XCJcbiAgICAgICAgICBuYW1lPVwiJHtuYW1lfVwiXG4gICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICBjbGFzcz1cImpzLXRvZG8tdG9nZ2xlIGZvY3VzOnJpbmctc2t5LTUwMCBoLTQgdy00IHRleHQtc2t5LTUwMCBib3JkZXItc2xhdGUtMzAwIHJvdW5kZWRcIlxuICAgICAgICAgICR7Y2hlY2tlZCA/ICdjaGVja2VkJyA6ICcnfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibWwtM1wiPlxuICAgICAgICA8bGFiZWwgZm9yPVwiJHtpZH1cIiBjbGFzcz1cImZvbnQtbWVkaXVtIHRleHQtc2xhdGUtNzAwXCI+JHtsYWJlbH08L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGA7XG59XG4iLCJmdW5jdGlvbiBmb290ZXIoKSB7XG4gIHJldHVybiBgXG4gIDxmb290ZXIgY2xhc3M9XCJtdC1hdXRvIGJvcmRlci10IHRleHQtY2VudGVyXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBteC1hdXRvIHB5LTZcIj5cbiAgICAgIDxhXG4gICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZ3JlcW92L29kaW4tdG9kby1saXN0XCJcbiAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgY2xhc3M9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBzcGFjZS14LTFcIlxuICAgICAgPlxuICAgICAgICA8c3ZnIGNsYXNzPVwidy02IGgtNlwiPjx1c2UgeGxpbms6aHJlZj1cIiNpY29uLWNvZGVcIj48L3VzZT48L3N2Zz5cbiAgICAgICAgPHNwYW4+R2l0aHViPC9zcGFuPlxuICAgICAgPC9hPlxuICAgIDwvZGl2PlxuICA8L2Zvb3Rlcj5cbiAgYDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZm9vdGVyKCk7XG4iLCJmdW5jdGlvbiBoZWFkZXIoKSB7XG4gIHJldHVybiBgXG4gICAgPGhlYWRlciBjbGFzcz1cIm1iLTYgYm9yZGVyLWJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgbXgtYXV0byBweS02IHB4LTRcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJibG9jayB0ZXh0LTN4bCBmb250LWJvbGRcIj5Ub2RvIEFwcDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICBgO1xufVxuXG5leHBvcnQgZGVmYXVsdCBoZWFkZXIoKTtcbiIsImltcG9ydCBzcHJpdGUgZnJvbSAnLi9zcHJpdGUnO1xuaW1wb3J0IGhlYWRlciBmcm9tICcuL2hlYWRlcic7XG5pbXBvcnQgbWFpbiBmcm9tICcuL21haW4nO1xuaW1wb3J0IGZvb3RlciBmcm9tICcuL2Zvb3Rlcic7XG5cbi8vIFRPRE86IHNldCBkZWZhdWx0IGRhdGUgdmFsdWVcbi8vIFRPRE86IGFkZCBzZWxlY3Rib3ggdG8gdG9kbyBmb3JtP1xuXG5mdW5jdGlvbiBsYXlvdXQoKSB7XG4gIHJldHVybiBgXG4gICAgJHtzcHJpdGV9XG4gICAgJHtoZWFkZXJ9XG4gICAgJHttYWlufVxuICAgICR7Zm9vdGVyfVxuICBgO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsYXlvdXQoKTtcbiIsImZ1bmN0aW9uIG1haW4oKSB7XG4gIHJldHVybiBgXG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXIgbXgtYXV0byBtYi02IHB4LTRcIj5cbiAgICA8ZGl2IGNsYXNzPVwibWQ6Z3JpZCBtZDpnYXAtNCBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtWzFmcl8yZnJdXCI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDIgY2xhc3M9XCJteS00IHRleHQtM3hsIGZvbnQtYm9sZFwiPlByb2plY3RzPC9oMj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwianMtcHJvamVjdHMtbGlzdFwiPjwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktZW5kIHNwYWNlLXgtMlwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzPVwiaW5saW5lLWZsZXggcHgtNCBweS0yIHRleHQtd2hpdGUgYmctb3JhbmdlLTYwMCBob3ZlcjpiZy1vcmFuZ2UtNzAwIGFjdGl2ZTpiZy1vcmFuZ2UtODAwIHJvdW5kZWQtbWQgdHJhbnNpdGlvbiBzZWxlY3Qtbm9uZVwiXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGRhdGEtbW9kYWwtdGFyZ2V0PVwibW9kYWwtYWRkLXByb2plY3RcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIEFkZCBwcm9qZWN0XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDIgY2xhc3M9XCJteS00IHRleHQtM3hsIGZvbnQtYm9sZFwiPlRvZG9zPC9oMj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImpzLXRvZG8tbGlzdFwiPjwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktZW5kIHNwYWNlLXgtMlwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzPVwianMtYnRuLWFkZC10b2RvIGlubGluZS1mbGV4IHB4LTQgcHktMiB0ZXh0LXdoaXRlIGJnLW9yYW5nZS02MDAgaG92ZXI6Ymctb3JhbmdlLTcwMCBhY3RpdmU6Ymctb3JhbmdlLTgwMCByb3VuZGVkLW1kIHRyYW5zaXRpb24gc2VsZWN0LW5vbmVcIlxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBkYXRhLW1vZGFsLXRhcmdldD1cIm1vZGFsLWFkZC10b2RvXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBBZGQgdG9kb1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgYDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWFpbigpO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbW9kYWwoeyBpZCwgdGl0bGUsIGJvZHksIGFjdGlvbnMgfSkge1xuICByZXR1cm4gYFxuICAgIDxkaXYgaWQ9XCIke2lkfVwiIGNsYXNzPVwianMtbW9kYWwgaGlkZGVuIF9mbGV4IGZpeGVkIHRvcC0wIGxlZnQtMCBoLXNjcmVlbiB3LXNjcmVlbiBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcC00IGJnLWJsYWNrLzc1IG92ZXJmbG93LWF1dG9cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ3LVs0ODBweF0gbWF4LXctZnVsbCBiZy13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdy1sZ1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHNwYWNlLXgtNCBwLTRcIj5cbiAgICAgICAgICA8aDMgY2xhc3M9XCJ0ZXh0LWxnIGZvbnQtYm9sZFwiPiR7dGl0bGV9PC9oMz5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzcz1cInRleHQtc2xhdGUtNDAwIGhvdmVyOnRleHQtb3JhbmdlLTYwMCB0cmFuc2l0aW9uXCJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgZGF0YS1tb2RhbC1jbG9zZXJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzcz1cImgtNiB3LTZcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCI+XG4gICAgICAgICAgICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNNiAxOEwxOCA2TTYgNmwxMiAxMlwiIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJvdmVyZmxvdy1hdXRvIHAtNCBib3JkZXItdCBib3JkZXItc2xhdGUtMjAwXCIgc3R5bGU9XCJtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTgycHgpO1wiPlxuICAgICAgICAgICR7Ym9keX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktZW5kIHNwYWNlLXgtMiBwLTQgYm9yZGVyLXQgYm9yZGVyLXNsYXRlLTIwMFwiPlxuICAgICAgICAgICR7YWN0aW9uc31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYDtcbn1cbiIsImNvbnN0IGlkID0gJ21vZGFsLWFkZC1wcm9qZWN0JztcbmNvbnN0IHRpdGxlID0gJ0FkZCBlbCBwcm9qZWN0byc7XG5cbmNvbnN0IGZvcm0gPSBgXG4gIDxmb3JtIGNsYXNzPVwianMtZm9ybS1hZGQtcHJvamVjdFwiIGlkPVwiYWRkUHJvamVjdEZvcm1cIiBhY3Rpb249XCIjXCI+XG4gICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiaWRcIiB2YWx1ZT1cIlwiIC8+XG5cbiAgICA8bGFiZWwgY2xhc3M9XCJibG9jayBtYi00XCI+XG4gICAgICA8c3BhbiBjbGFzcz1cImJsb2NrIGZvbnQtbWVkaXVtIHRleHQtc2xhdGUtNzAwXCI+UHJvamVjdCB0aXRsZTwvc3Bhbj5cbiAgICAgIDxpbnB1dFxuICAgICAgICBjbGFzcz1cIm10LTEgYmxvY2sgdy1mdWxsIHB4LTMgcHktMiBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLXNsYXRlLTMwMCByb3VuZGVkLW1kIHNoYWRvdy1zbSB0ZXh0LWJhc2UgcGxhY2Vob2xkZXItc2xhdGUtNDAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItc2t5LTUwMCBmb2N1czpyaW5nLTEgZm9jdXM6cmluZy1za3ktNTAwXCJcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBuYW1lPVwidGl0bGVcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIlByb2plY3QgdGl0bGVcIlxuICAgICAgICBhdXRvZm9jdXNcbiAgICAgIC8+XG4gICAgPC9sYWJlbD5cbiAgPC9mb3JtPlxuYDtcbi8vIFRPRE86IGVuYWJsZSBhdXRvZm9jdXNcblxuY29uc3QgYWN0aW9ucyA9IGBcbiAgPGJ1dHRvblxuICAgIGNsYXNzPVwiaW5saW5lLWZsZXggcHgtNCBweS0yIHRleHQtc2xhdGUtNzAwIGJnLXRyYW5zcGFyZW50IGhvdmVyOmJvcmRlci1zbGF0ZS0yMDAgYWN0aXZlOmJvcmRlci1zbGF0ZS00MDAgYWN0aXZlOmJnLXNsYXRlLTIwMCBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IHJvdW5kZWQtbWQgdHJhbnNpdGlvbiBzZWxlY3Qtbm9uZVwiXG4gICAgdHlwZT1cImJ1dHRvblwiXG4gICAgZGF0YS1tb2RhbC1jbG9zZXJcbiAgPlxuICAgIENhbmNlbFxuICA8L2J1dHRvbj5cbiAgPGJ1dHRvblxuICAgIGNsYXNzPVwiaW5saW5lLWZsZXggcHgtNCBweS0yIHRleHQtd2hpdGUgYmctb3JhbmdlLTYwMCBob3ZlcjpiZy1vcmFuZ2UtNzAwIGFjdGl2ZTpiZy1vcmFuZ2UtODAwIHJvdW5kZWQtbWQgdHJhbnNpdGlvbiBzZWxlY3Qtbm9uZVwiXG4gICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgZm9ybT1cImFkZFByb2plY3RGb3JtXCJcbiAgICBkYXRhLW1vZGFsLWNsb3NlclxuICA+XG4gICAgQWRkIHByb2plY3RcbiAgPC9idXR0b24+XG5gO1xuXG5leHBvcnQgZGVmYXVsdCB7IGlkLCB0aXRsZSwgYm9keTogZm9ybSwgYWN0aW9ucyB9O1xuIiwiZnVuY3Rpb24gc3ByaXRlKCkge1xuICByZXR1cm4gYFxuICA8c3ZnIHdpZHRoPVwiMFwiIGhlaWdodD1cIjBcIiBjbGFzcz1cImhpZGRlblwiPlxuICAgIDxzeW1ib2xcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgIHN0cm9rZS13aWR0aD1cIjJcIlxuICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICB3aWR0aD1cIjI0XCJcbiAgICAgIGhlaWdodD1cIjI0XCJcbiAgICAgIGlkPVwiaWNvbi1jb2RlXCJcbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICBkPVwiTTEwIDIwbDQtMTZtNCA0bDQgNC00IDRNNiAxNmwtNC00IDQtNFwiXG4gICAgICA+PC9wYXRoPlxuICAgIDwvc3ltYm9sPlxuICAgIDxzeW1ib2xcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgIHN0cm9rZS13aWR0aD1cIjJcIlxuICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICB3aWR0aD1cIjI0XCJcbiAgICAgIGhlaWdodD1cIjI0XCJcbiAgICAgIGlkPVwiaWNvbi1lZGl0XCJcbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICBkPVwiTTE1LjIzMiA1LjIzMmwzLjUzNiAzLjUzNm0tMi4wMzYtNS4wMzZhMi41IDIuNSAwIDExMy41MzYgMy41MzZMNi41IDIxLjAzNkgzdi0zLjU3MkwxNi43MzIgMy43MzJ6XCJcbiAgICAgID48L3BhdGg+XG4gICAgPC9zeW1ib2w+XG4gICAgPHN5bWJvbFxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgc3Ryb2tlLXdpZHRoPVwiMlwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgIHdpZHRoPVwiMjRcIlxuICAgICAgaGVpZ2h0PVwiMjRcIlxuICAgICAgaWQ9XCJpY29uLXRyYXNoXCJcbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICBkPVwiTTE5IDdsLS44NjcgMTIuMTQyQTIgMiAwIDAxMTYuMTM4IDIxSDcuODYyYTIgMiAwIDAxLTEuOTk1LTEuODU4TDUgN201IDR2Nm00LTZ2Nm0xLTEwVjRhMSAxIDAgMDAtMS0xaC00YTEgMSAwIDAwLTEgMXYzTTQgN2gxNlwiXG4gICAgICA+PC9wYXRoPlxuICAgIDwvc3ltYm9sPlxuICA8L3N2Zz5cbiAgYDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3ByaXRlKCk7XG4iLCJjb25zdCBpZCA9IGBtb2RhbC1hZGQtdG9kb2A7XG5jb25zdCB0aXRsZSA9IGBBZGQgZWwgdG9kbyBhbWlnbyFgO1xuXG5jb25zdCBmb3JtID0gYFxuICA8Zm9ybSBjbGFzcz1cImpzLWZvcm0tYWRkLXRvZG8gc3BhY2UteS00XCIgaWQ9XCJhZGRUb2RvRm9ybVwiIGFjdGlvbj1cIiNcIj5cbiAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJpZFwiIHZhbHVlPVwiXCIgLz5cblxuICAgIDxsYWJlbCBjbGFzcz1cImJsb2NrXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cImJsb2NrIGZvbnQtbWVkaXVtIHRleHQtc2xhdGUtNzAwXCI+VGl0bGU8L3NwYW4+XG4gICAgICA8aW5wdXRcbiAgICAgICAgY2xhc3M9XCJtdC0xIGJsb2NrIHctZnVsbCBweC0zIHB5LTIgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1zbGF0ZS0zMDAgcm91bmRlZC1tZCBzaGFkb3ctc20gdGV4dC1iYXNlIHBsYWNlaG9sZGVyLXNsYXRlLTQwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLXNreS01MDAgZm9jdXM6cmluZy0xIGZvY3VzOnJpbmctc2t5LTUwMFwiXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgbmFtZT1cInRpdGxlXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJUaXRsZVwiXG4gICAgICAgIGF1dG9mb2N1c1xuICAgICAgLz5cbiAgICA8L2xhYmVsPlxuXG4gICAgPGxhYmVsIGNsYXNzPVwiYmxvY2tcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiYmxvY2sgZm9udC1tZWRpdW0gdGV4dC1zbGF0ZS03MDBcIj5EdWUgZGF0ZTwvc3Bhbj5cbiAgICAgIDxpbnB1dFxuICAgICAgICBjbGFzcz1cIm10LTEgYmxvY2sgdy1mdWxsIHB4LTMgcHktMiBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLXNsYXRlLTMwMCByb3VuZGVkLW1kIHNoYWRvdy1zbSB0ZXh0LWJhc2UgcGxhY2Vob2xkZXItc2xhdGUtNDAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItc2t5LTUwMCBmb2N1czpyaW5nLTEgZm9jdXM6cmluZy1za3ktNTAwXCJcbiAgICAgICAgdHlwZT1cImRhdGVcIlxuICAgICAgICBuYW1lPVwiZHVlRGF0ZVwiXG4gICAgICAgIHZhbHVlPVwiMjAyMi0wMy0xNlwiXG4gICAgICAvPlxuICAgIDwvbGFiZWw+XG5cbiAgICA8ZGl2IGNsYXNzPVwiXCI+XG4gICAgICA8bGFiZWwgZm9yPVwicHJpb3JpdHlcIiBjbGFzcz1cImJsb2NrIGZvbnQtbWVkaXVtIHRleHQtc2xhdGUtNzAwXCI+UHJpb3JpdHk8L2xhYmVsPlxuICAgICAgPHNlbGVjdFxuICAgICAgICBpZD1cInByaW9yaXR5XCJcbiAgICAgICAgbmFtZT1cInByaW9yaXR5XCJcbiAgICAgICAgYXV0b2NvbXBsZXRlPVwiY291bnRyeS1uYW1lXCJcbiAgICAgICAgY2xhc3M9XCJtdC0xIGJsb2NrIHctZnVsbCBweS0yIHB4LTMgYm9yZGVyIGJvcmRlci1zbGF0ZS0zMDAgYmctd2hpdGUgcm91bmRlZC1tZCBzaGFkb3ctc20gZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMSBmb2N1czpyaW5nLXNreS01MDAgZm9jdXM6Ym9yZGVyLXNreS01MDBcIlxuICAgICAgPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwibG93XCI+TG93PC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJtaWRkbGVcIj5NaWRkbGU8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImhpZ2hcIj5IaWdoPC9vcHRpb24+XG4gICAgICA8L3NlbGVjdD5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLXN0YXJ0XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIgaC01XCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGlkPVwidG9kb0NvbXBsZXRlXCJcbiAgICAgICAgICBuYW1lPVwiY29tcGxldGVcIlxuICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgY2xhc3M9XCJmb2N1czpyaW5nLXNreS01MDAgaC00IHctNCB0ZXh0LXNreS01MDAgYm9yZGVyLXNsYXRlLTMwMCByb3VuZGVkXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIm1sLTNcIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cInRvZG9Db21wbGV0ZVwiIGNsYXNzPVwiZm9udC1tZWRpdW0gdGV4dC1zbGF0ZS03MDBcIj5Db21wbGV0ZT88L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZm9ybT5cbmA7XG5cbmNvbnN0IGFjdGlvbnMgPSBgXG4gIDxidXR0b25cbiAgICBjbGFzcz1cImlubGluZS1mbGV4IHB4LTQgcHktMiB0ZXh0LXNsYXRlLTcwMCBiZy10cmFuc3BhcmVudCBob3Zlcjpib3JkZXItc2xhdGUtMjAwIGFjdGl2ZTpib3JkZXItc2xhdGUtNDAwIGFjdGl2ZTpiZy1zbGF0ZS0yMDAgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCByb3VuZGVkLW1kIHRyYW5zaXRpb24gc2VsZWN0LW5vbmVcIlxuICAgIHR5cGU9XCJidXR0b25cIlxuICAgIGRhdGEtbW9kYWwtY2xvc2VyXG4gID5cbiAgICBDYW5jZWxcbiAgPC9idXR0b24+XG4gIDxidXR0b25cbiAgICBjbGFzcz1cImlubGluZS1mbGV4IHB4LTQgcHktMiB0ZXh0LXdoaXRlIGJnLW9yYW5nZS02MDAgaG92ZXI6Ymctb3JhbmdlLTcwMCBhY3RpdmU6Ymctb3JhbmdlLTgwMCByb3VuZGVkLW1kIHRyYW5zaXRpb24gc2VsZWN0LW5vbmVcIlxuICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgIGZvcm09XCJhZGRUb2RvRm9ybVwiXG4gICAgZGF0YS1tb2RhbC1jbG9zZXJcbiAgPlxuICAgIEFkZC9VcGRhdGUgdG9kb1xuICA8L2J1dHRvbj5cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IHsgaWQsIHRpdGxlLCBib2R5OiBmb3JtLCBhY3Rpb25zIH07XG4iLCJpbXBvcnQgUHJvamVjdCBmcm9tICcuL1Byb2plY3QnO1xuaW1wb3J0IFRvZG8gZnJvbSAnLi9Ub2RvJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcnModWkpIHtcbiAgY29uc3QgeyBwbSwgc3RvcmFnZSB9ID0gdWk7XG5cbiAgZnVuY3Rpb24gc3VibWl0UHJvamVjdEZvcm0oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgcHJvamVjdDtcbiAgICBjb25zdCBmb3JtID0gZS50YXJnZXQ7XG4gICAgY29uc3QgZGF0YSA9IE9iamVjdC5mcm9tRW50cmllcyhuZXcgRm9ybURhdGEoZm9ybSkuZW50cmllcygpKTtcblxuICAgIC8vIE5PVEU6IHVwZGF0ZSBPUiBjcmVhdGUgYWN0aW9uXG4gICAgaWYgKGRhdGEuaWQpIHtcbiAgICAgIHByb2plY3QgPSBwbS5nZXRSZXN0b3JlZFByb2plY3QoZGF0YS5pZCk7XG4gICAgICBwcm9qZWN0LnVwZGF0ZShkYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvamVjdCA9IG5ldyBQcm9qZWN0KGRhdGEpO1xuICAgICAgcG0uYWRkUHJvamVjdChwcm9qZWN0LmlkKTtcbiAgICB9XG5cbiAgICBwcm9qZWN0LnNhdmUoKTtcbiAgICBwbS5zZXRDdXJyZW50UHJvamVjdChwcm9qZWN0LmlkKTtcbiAgICBmb3JtLnJlc2V0KCk7XG4gICAgZm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImlkXCJdJykudmFsdWUgPSAnJztcbiAgICB1aS5yZW5kZXJQcm9qZWN0KHByb2plY3QuaWQpO1xuICAgIHVpLmhpZ2hsaWdodEN1cnJlbnRQcm9qZWN0KCk7XG4gICAgdWkucmVuZGVyUHJvamVjdFRvZG9zKCk7IC8vIFRPRE86IHRvbyBtdWNoIHJlcmVuZGVyc1xuICB9XG5cbiAgZnVuY3Rpb24gc3VibWl0VG9kb0Zvcm0oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgdG9kbztcbiAgICBjb25zdCBmb3JtID0gZS50YXJnZXQ7XG4gICAgY29uc3QgZGF0YSA9IE9iamVjdC5mcm9tRW50cmllcyhuZXcgRm9ybURhdGEoZm9ybSkuZW50cmllcygpKTtcbiAgICBkYXRhLmNvbXBsZXRlID0gISFkYXRhLmNvbXBsZXRlOyAvLyBjb252ZXJ0ICdvbicgdG8gdHJ1ZVxuICAgIGNvbnN0IHByb2plY3RJZCA9IHBtLmN1cnJlbnRQcm9qZWN0O1xuICAgIGNvbnN0IHByb2plY3QgPSBwbS5nZXRSZXN0b3JlZFByb2plY3QocHJvamVjdElkKTtcblxuICAgIC8vIE5PVEU6IHVwZGF0ZSBPUiBjcmVhdGUgYWN0aW9uXG4gICAgaWYgKGRhdGEuaWQpIHtcbiAgICAgIHRvZG8gPSBwcm9qZWN0LmdldFJlc3RvcmVkVG9kbyhkYXRhLmlkKTtcbiAgICAgIHRvZG8udXBkYXRlKGRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0b2RvID0gZGF0YTtcbiAgICB9XG5cbiAgICBjb25zdCB0b2RvSWQgPSBwcm9qZWN0LmFkZFRvZG8odG9kbyk7XG4gICAgZm9ybS5yZXNldCgpO1xuICAgIGZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJpZFwiXScpLnZhbHVlID0gJyc7XG4gICAgZm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImNvbXBsZXRlXCJdJykucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJyk7XG4gICAgLy8gVE9ETzogYXZvaWQgc2hha2luZyBzdG9yYWdlIDIgdGltZXMhIChvbiBzYXZlLCBvbiByZW5kZXIpXG4gICAgdWkucmVtb3ZlTm9Ub2Rvc01lc3NhZ2UoKTtcbiAgICB1aS5yZW5kZXJUb2RvKHRvZG9JZCk7XG4gIH1cblxuICAvLyBUT0RPOiBtYXliZSBhZGQgbW9yZSBwcmVjaXNlIGRvbSBub2RlLCBub3QgZG9jdW1lbnQ/XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgY29uc3QgeyB0YXJnZXQ6IGVsIH0gPSBlO1xuXG4gICAgaWYgKGVsLmNsb3Nlc3QoJy5qcy1mb3JtLWFkZC1wcm9qZWN0JykpIHtcbiAgICAgIHN1Ym1pdFByb2plY3RGb3JtKGUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChlbC5jbG9zZXN0KCcuanMtZm9ybS1hZGQtdG9kbycpKSB7XG4gICAgICBzdWJtaXRUb2RvRm9ybShlKTtcbiAgICB9XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHJlbW92ZVRvZG8oZWwpIHtcbiAgICBjb25zdCB0b2RvRWwgPSBlbC5jbG9zZXN0KCcuanMtdG9kby1pdGVtJyk7XG4gICAgLy8gMS4gZ2V0IHRvZG8gaWRcbiAgICBjb25zdCB0b2RvSWQgPSB0b2RvRWwuaWQ7XG4gICAgLy8gMi4gZ2V0IHByb2plY3QgKGhpbnQ6IGN1cnJlbnQgcHJvamVjdClcbiAgICBjb25zdCBwcm9qZWN0SWQgPSBwbS5jdXJyZW50UHJvamVjdDtcbiAgICBjb25zdCBwcm9qZWN0ID0gcG0uZ2V0UmVzdG9yZWRQcm9qZWN0KHByb2plY3RJZCk7XG4gICAgLy8gMy4gZGVsZXRlIHRvZG8gZnJvbSBwcm9qZWN0XG4gICAgcHJvamVjdC5yZW1vdmVUb2RvKHRvZG9JZCk7XG4gICAgLy8gNC4gdXBkYXRlIFVJXG4gICAgdG9kb0VsLnJlbW92ZSgpO1xuICAgIGlmIChwcm9qZWN0LnRvZG9zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdWkucmVuZGVyTm9Ub2Rvc01lc3NhZ2UoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBlZGl0VG9kbyhlbCkge1xuICAgIGNvbnN0IHRvZG9JZCA9IGVsLmNsb3Nlc3QoJy5qcy10b2RvLWl0ZW0nKS5pZDtcbiAgICBjb25zdCBkYXRhID0gc3RvcmFnZS5nZXQoYFRvZG9fJHt0b2RvSWR9YCk7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWZvcm0tYWRkLXRvZG8nKTtcbiAgICAvLyAyLiBwb3B1bGF0ZSBmb3JtXG4gICAgT2JqZWN0LmVudHJpZXMoZGF0YSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoa2V5ICE9PSAnY29tcGxldGUnKSB7XG4gICAgICAgICAgZm9ybS5xdWVyeVNlbGVjdG9yKGBbbmFtZT1cIiR7a2V5fVwiXWApLnZhbHVlID0gdmFsdWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZm9ybS5xdWVyeVNlbGVjdG9yKGBbbmFtZT1cIiR7a2V5fVwiXWApLmNoZWNrZWQgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS53YXJuKGBNaXNzaW5nIFtuYW1lPVwiJHtrZXl9XCJdIGVsZW1lbnRcXG5gLCBlcnJvcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiB0b2dnbGVUb2RvKGVsKSB7XG4gICAgY29uc3QgdG9kb0lkID0gZWwuY2xvc2VzdCgnLmpzLXRvZG8taXRlbScpLmlkO1xuICAgIGNvbnN0IGRhdGEgPSBzdG9yYWdlLmdldChgVG9kb18ke3RvZG9JZH1gKTtcbiAgICBjb25zdCB0b2RvID0gbmV3IFRvZG8oZGF0YSk7XG4gICAgY29uc3QgY29tcGxldGUgPSBlbC5jaGVja2VkO1xuICAgIHRvZG8udXBkYXRlKHsgY29tcGxldGUgfSk7XG4gIH1cblxuICBjb25zdCB0b2RvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy10b2RvLWxpc3QnKTtcbiAgdG9kb0xpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnN0IHsgdGFyZ2V0OiBlbCB9ID0gZTtcbiAgICBpZiAoZWwuY2xvc2VzdCgnLmpzLWJ0bi10b2RvLWRlbGV0ZScpKSB7XG4gICAgICByZW1vdmVUb2RvKGVsKTtcbiAgICB9IGVsc2UgaWYgKGVsLmNsb3Nlc3QoJy5qcy1idG4tdG9kby1lZGl0JykpIHtcbiAgICAgIGVkaXRUb2RvKGVsKTtcbiAgICB9IGVsc2UgaWYgKGVsLmNsb3Nlc3QoJy5qcy10b2RvLXRvZ2dsZScpKSB7XG4gICAgICB0b2dnbGVUb2RvKGVsKTtcbiAgICB9XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHJlbW92ZVByb2plY3QoZWwpIHtcbiAgICBjb25zdCBwcm9qZWN0RWwgPSBlbC5jbG9zZXN0KCcuanMtcHJvamVjdC1pdGVtJyk7XG4gICAgY29uc3QgcHJvamVjdElkID0gcHJvamVjdEVsLmlkO1xuICAgIHBtLmRlbGV0ZVByb2plY3QocHJvamVjdElkKTtcblxuICAgIGlmIChwcm9qZWN0SWQgIT09IHBtLmRlZmF1bHRQcm9qZWN0KSB7XG4gICAgICBwcm9qZWN0RWwucmVtb3ZlKCk7XG4gICAgICB1aS5oaWdobGlnaHRDdXJyZW50UHJvamVjdCgpO1xuICAgICAgdWkucmVuZGVyUHJvamVjdFRvZG9zKCk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gZWRpdFByb2plY3QoZWwpIHtcbiAgICAvLyBUT0RPOiBhZGQgY2hlY2sgZm9yIGVtcHR5IHRpdGxlIG9uIGVkaXQgYWN0aW9uXG4gICAgY29uc3QgcHJvamVjdElkID0gZWwuY2xvc2VzdCgnLmpzLXByb2plY3QtaXRlbScpLmlkO1xuICAgIGNvbnN0IGRhdGEgPSBzdG9yYWdlLmdldChgUHJvamVjdF8ke3Byb2plY3RJZH1gKTtcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWZvcm0tYWRkLXByb2plY3QnKTtcbiAgICAvLyBUT0RPOiBhZGQgbG9vcFxuICAgIGZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJ0aXRsZVwiXScpLnZhbHVlID0gZGF0YS50aXRsZTtcbiAgICBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiaWRcIl0nKS52YWx1ZSA9IGRhdGEuaWQ7XG4gIH1cblxuICBjb25zdCBwcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtcHJvamVjdHMtbGlzdCcpO1xuICBwcm9qZWN0c0xpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnN0IHsgdGFyZ2V0OiBlbCB9ID0gZTtcbiAgICBpZiAoZWwuY2xvc2VzdCgnLmpzLWJ0bi1wcm9qZWN0LWRlbGV0ZScpKSB7XG4gICAgICByZW1vdmVQcm9qZWN0KGVsKTtcbiAgICB9IGVsc2UgaWYgKGVsLmNsb3Nlc3QoJy5qcy1idG4tcHJvamVjdC1lZGl0JykpIHtcbiAgICAgIGVkaXRQcm9qZWN0KGVsKTtcbiAgICB9IGVsc2UgaWYgKGVsLmNsb3Nlc3QoJy5qcy1wcm9qZWN0LWl0ZW0nKSkge1xuICAgICAgY29uc3QgeyBpZCB9ID0gZWwuY2xvc2VzdCgnLmpzLXByb2plY3QtaXRlbScpO1xuICAgICAgcG0uc2V0Q3VycmVudFByb2plY3QoaWQpO1xuICAgICAgdWkuaGlnaGxpZ2h0Q3VycmVudFByb2plY3QoKTtcbiAgICAgIHVpLnJlbmRlclByb2plY3RUb2RvcygpO1xuICAgIH1cbiAgfSk7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRTY3JvbGxXaWR0aCgpIHtcbiAgY29uc3QgeyBib2R5IH0gPSBkb2N1bWVudDtcbiAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICBlbC5zdHlsZSA9IGBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogLTk5OTlweDsgd2lkdGg6IDEwMHB4OyBoZWlnaHQ6IDEwMHB4OyBvdmVyZmxvdzogc2Nyb2xsO2A7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoZWwpO1xuXG4gIGNvbnN0IHdpZHRoID0gZWwub2Zmc2V0V2lkdGggLSBlbC5jbGllbnRXaWR0aDtcblxuICBib2R5LnJlbW92ZUNoaWxkKGVsKTtcblxuICByZXR1cm4gd2lkdGg7XG59XG4iLCJjb25zdCBzNCA9ICgpID0+XG4gIE1hdGguZmxvb3IoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDApXG4gICAgLnRvU3RyaW5nKDE2KVxuICAgIC5zdWJzdHJpbmcoMSk7XG5cbmNvbnN0IGdlbmVyYXRlSWQgPSAoKSA9PiBgYSR7czQoKX0tJHtzNCgpfS0ke3M0KCl9YDtcblxuZXhwb3J0IGRlZmF1bHQgZ2VuZXJhdGVJZDtcbiIsImZ1bmN0aW9uIHRyaW1TdHIoc3RyaW5nID0gJycsIGRlZmF1bHRWYWx1ZSA9ICdVbnRpdGxlZCcpIHtcbiAgcmV0dXJuIHN0cmluZy50cmltKCkucmVwbGFjZSgvWzw+L10vZ2ksICcnKSB8fCBkZWZhdWx0VmFsdWU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHRyaW1TdHI7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgcHJvamVjdHNNYW5hZ2VyIH0gZnJvbSAnLi9Qcm9qZWN0c01hbmFnZXInO1xuaW1wb3J0IHsgdWkgfSBmcm9tICcuL1VJJztcbmltcG9ydCBkZW1vVG9kb3NEYXRhIGZyb20gJy4vZGF0YS9kZW1vVG9kb3MuanNvbic7XG5pbXBvcnQgYXJjaGl2ZVRvZG9zRGF0YSBmcm9tICcuL2RhdGEvYXJjaGl2ZVRvZG9zLmpzb24nO1xuXG5pbXBvcnQgJy4uL2Nzcy9zdHlsZXMuY3NzJztcblxudWkuaW5pdCgpO1xuXG4vLyBUT0RPOiBhdXRvIGFkZCB0b2RvIHRvIHByb2plY3Qgb24gY3JlYXRlXG4vLyBUT0RPOiBzYXZlIHByb2plY3QgaW1tZWRpYXRlbHkgYWZ0ZXIgY3JlYXRpb24/XG5cbi8vIGNvbnN0IGFyY2hpdmVQcm9qZWN0ID0gbmV3IFByb2plY3QoeyB0aXRsZTogJ0FyY2hpdmUnIH0pO1xuLy8gY29uc29sZS5sb2coYGFyY2hpdmVQcm9qZWN0YCwgYXJjaGl2ZVByb2plY3QpO1xuLy8gYXJjaGl2ZVByb2plY3Quc2F2ZSgpO1xuLy8gYXJjaGl2ZVByb2plY3QubG9hZERhdGEoYXJjaGl2ZVRvZG9zRGF0YSk7XG4vLyBwcm9qZWN0c01hbmFnZXIuYWRkUHJvamVjdChhcmNoaXZlUHJvamVjdC5pZCk7XG5cbnVpLnJlbmRlclByb2plY3RUb2RvcygpO1xuXG5wcm9qZWN0c01hbmFnZXIucHJvamVjdHMuZm9yRWFjaCgoaWQpID0+IHtcbiAgdWkucmVuZGVyUHJvamVjdChpZCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==