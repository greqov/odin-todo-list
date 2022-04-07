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
___CSS_LOADER_EXPORT___.push([module.id, "/*\n! tailwindcss v3.0.23 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/*\nEnsure the default browser behavior of the `hidden` attribute.\n*/\n\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.container {\n  width: 100%;\n}\n@media (min-width: 640px) {\n\n  .container {\n    max-width: 640px;\n  }\n}\n@media (min-width: 768px) {\n\n  .container {\n    max-width: 768px;\n  }\n}\n@media (min-width: 1024px) {\n\n  .container {\n    max-width: 1024px;\n  }\n}\n@media (min-width: 1280px) {\n\n  .container {\n    max-width: 1280px;\n  }\n}\n@media (min-width: 1536px) {\n\n  .container {\n    max-width: 1536px;\n  }\n}\n.fixed {\n  position: fixed;\n}\n.relative {\n  position: relative;\n}\n.top-0 {\n  top: 0px;\n}\n.left-0 {\n  left: 0px;\n}\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.my-4 {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n.mb-4 {\n  margin-bottom: 1rem;\n}\n.ml-3 {\n  margin-left: 0.75rem;\n}\n.mt-auto {\n  margin-top: auto;\n}\n.mb-6 {\n  margin-bottom: 1.5rem;\n}\n.mt-1 {\n  margin-top: 0.25rem;\n}\n.block {\n  display: block;\n}\n.flex {\n  display: flex;\n}\n.inline-flex {\n  display: inline-flex;\n}\n.hidden {\n  display: none;\n}\n.h-6 {\n  height: 1.5rem;\n}\n.h-5 {\n  height: 1.25rem;\n}\n.h-4 {\n  height: 1rem;\n}\n.h-screen {\n  height: 100vh;\n}\n.min-h-screen {\n  min-height: 100vh;\n}\n.w-6 {\n  width: 1.5rem;\n}\n.w-4 {\n  width: 1rem;\n}\n.w-screen {\n  width: 100vw;\n}\n.w-\\[480px\\] {\n  width: 480px;\n}\n.w-full {\n  width: 100%;\n}\n.max-w-full {\n  max-width: 100%;\n}\n.select-none {\n  user-select: none;\n}\n.flex-col {\n  flex-direction: column;\n}\n.items-start {\n  align-items: flex-start;\n}\n.items-center {\n  align-items: center;\n}\n.justify-end {\n  justify-content: flex-end;\n}\n.justify-center {\n  justify-content: center;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.space-x-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.5rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-x-1 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.25rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.25rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-x-4 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(1rem * var(--tw-space-x-reverse));\n  margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-y-4 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(1rem * var(--tw-space-y-reverse));\n}\n.overflow-auto {\n  overflow: auto;\n}\n.overflow-hidden {\n  overflow: hidden;\n}\n.scroll-smooth {\n  scroll-behavior: smooth;\n}\n.rounded-lg {\n  border-radius: 0.5rem;\n}\n.rounded {\n  border-radius: 0.25rem;\n}\n.rounded-md {\n  border-radius: 0.375rem;\n}\n.border {\n  border-width: 1px;\n}\n.border-t {\n  border-top-width: 1px;\n}\n.border-b {\n  border-bottom-width: 1px;\n}\n.border-slate-300 {\n  --tw-border-opacity: 1;\n  border-color: rgb(203 213 225 / var(--tw-border-opacity));\n}\n.border-slate-200 {\n  --tw-border-opacity: 1;\n  border-color: rgb(226 232 240 / var(--tw-border-opacity));\n}\n.border-transparent {\n  border-color: transparent;\n}\n.bg-zinc-50 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(250 250 250 / var(--tw-bg-opacity));\n}\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n.bg-orange-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(234 88 12 / var(--tw-bg-opacity));\n}\n.bg-black\\/75 {\n  background-color: rgb(0 0 0 / 0.75);\n}\n.bg-transparent {\n  background-color: transparent;\n}\n.p-4 {\n  padding: 1rem;\n}\n.py-6 {\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n}\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.pt-\\[3px\\] {\n  padding-top: 3px;\n}\n.text-center {\n  text-align: center;\n}\n.font-sans {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n}\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.text-3xl {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n.font-bold {\n  font-weight: 700;\n}\n.font-medium {\n  font-weight: 500;\n}\n.italic {\n  font-style: italic;\n}\n.text-orange-600 {\n  --tw-text-opacity: 1;\n  color: rgb(234 88 12 / var(--tw-text-opacity));\n}\n.text-slate-400 {\n  --tw-text-opacity: 1;\n  color: rgb(148 163 184 / var(--tw-text-opacity));\n}\n.text-sky-500 {\n  --tw-text-opacity: 1;\n  color: rgb(14 165 233 / var(--tw-text-opacity));\n}\n.text-slate-700 {\n  --tw-text-opacity: 1;\n  color: rgb(51 65 85 / var(--tw-text-opacity));\n}\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n.underline {\n  text-decoration-line: underline;\n}\n.placeholder-slate-400::placeholder {\n  --tw-placeholder-opacity: 1;\n  color: rgb(148 163 184 / var(--tw-placeholder-opacity));\n}\n.opacity-0 {\n  opacity: 0;\n}\n.shadow-lg {\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-sm {\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.transition {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.selection\\:bg-pink-300 *::selection {\n  --tw-bg-opacity: 1;\n  background-color: rgb(249 168 212 / var(--tw-bg-opacity));\n}\n.selection\\:bg-pink-300::selection {\n  --tw-bg-opacity: 1;\n  background-color: rgb(249 168 212 / var(--tw-bg-opacity));\n}\n.hover\\:cursor-pointer:hover {\n  cursor: pointer;\n}\n.hover\\:border-slate-200:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(226 232 240 / var(--tw-border-opacity));\n}\n.hover\\:bg-orange-700:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(194 65 12 / var(--tw-bg-opacity));\n}\n.hover\\:text-sky-500:hover {\n  --tw-text-opacity: 1;\n  color: rgb(14 165 233 / var(--tw-text-opacity));\n}\n.hover\\:text-red-500:hover {\n  --tw-text-opacity: 1;\n  color: rgb(239 68 68 / var(--tw-text-opacity));\n}\n.hover\\:text-orange-600:hover {\n  --tw-text-opacity: 1;\n  color: rgb(234 88 12 / var(--tw-text-opacity));\n}\n.focus\\:border-sky-500:focus {\n  --tw-border-opacity: 1;\n  border-color: rgb(14 165 233 / var(--tw-border-opacity));\n}\n.focus\\:outline-none:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.focus\\:ring-1:focus {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n.focus\\:ring-sky-500:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(14 165 233 / var(--tw-ring-opacity));\n}\n.active\\:border-slate-400:active {\n  --tw-border-opacity: 1;\n  border-color: rgb(148 163 184 / var(--tw-border-opacity));\n}\n.active\\:bg-orange-800:active {\n  --tw-bg-opacity: 1;\n  background-color: rgb(154 52 18 / var(--tw-bg-opacity));\n}\n.active\\:bg-slate-200:active {\n  --tw-bg-opacity: 1;\n  background-color: rgb(226 232 240 / var(--tw-bg-opacity));\n}\n.group:hover .group-hover\\:opacity-100 {\n  opacity: 1;\n}\n@media (min-width: 768px) {\n\n  .md\\:grid {\n    display: grid;\n  }\n\n  .md\\:grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n\n  .md\\:gap-4 {\n    gap: 1rem;\n  }\n}\n@media (min-width: 1024px) {\n\n  .lg\\:grid-cols-\\[1fr_2fr\\] {\n    grid-template-columns: 1fr 2fr;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/css/styles.css","webpack://./src/css/%3Cinput%20css%20dp-6ff%3E","<no source>"],"names":[],"mappings":"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","sourcesContent":["@tailwind base;\n@tailwind components;\n@tailwind utilities;\n","/*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: theme('borderColor.DEFAULT', currentColor); /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  tab-size: 4; /* 3 */\n  font-family: theme('fontFamily.sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"); /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: theme('fontFamily.mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace); /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: theme('colors.gray.400', #9ca3af); /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/*\nEnsure the default browser behavior of the `hidden` attribute.\n*/\n\n[hidden] {\n  display: none;\n}\n",null],"sourceRoot":""}]);
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
  modal.classList.remove('hidden');
  modal.classList.add('flex');
};

Modal.prototype.closeModal = function (modal) {
  document.body.classList.remove('overflow-hidden', 'body-padding-fix');
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

UI.prototype.renderProjectTodos = function (projectId = this.pm.currentProject) {
  const data = this.storage.get(`Project_${projectId}`);
  data.todos.forEach((id) => {
    this.renderTodo(id);
  });
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
    form.reset();
    form.querySelector('[name="id"]').value = '';
    ui.renderProject(project.id);
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

  function highlightProject(el) {
    const activeClassName = 'text-orange-600';
    const list = el.closest('.js-projects-list');
    const projectEl = el.closest('.js-project-item');
    try {
      list.querySelector(`.${activeClassName}`).classList.remove(`${activeClassName}`);
    } catch (error) {
      console.log(`INFO: There is no highlighted project\n`, error);
    }
    projectEl.classList.add(`${activeClassName}`);
    pm.setCurrentProject(projectEl.id);
  }

  const projectsList = document.querySelector('.js-projects-list');
  projectsList.addEventListener('click', (e) => {
    const { target: el } = e;
    if (el.closest('.js-btn-project-delete')) {
      removeProject(el);
    } else if (el.closest('.js-btn-project-edit')) {
      editProject(el);
    } else if (el.closest('.js-project-item')) {
      highlightProject(el);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU0sTUFBTSxpQkFBaUIsV0FBVyxPQUFPLEtBQUssV0FBVyxVQUFVLE9BQU8sS0FBSyxXQUFXLE9BQU8sT0FBTyxhQUFhLFdBQVcsVUFBVSxPQUFPLE1BQU0sTUFBTSxLQUFLLGFBQWEsT0FBTyxPQUFPLE1BQU0sTUFBTSxxQkFBcUIsc0JBQXNCLFFBQVEsTUFBTSxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sS0FBSyxLQUFLLFdBQVcsT0FBTyxRQUFRLE1BQU0sWUFBWSxxQkFBcUIsdUJBQXVCLFFBQVEsTUFBTSxNQUFNLE1BQU0sV0FBVyxVQUFVLE9BQU8sTUFBTSxNQUFNLEtBQUssV0FBVyxPQUFPLEtBQUssV0FBVyxXQUFXLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxLQUFLLEtBQUssTUFBTSxPQUFPLEtBQUssS0FBSyxLQUFLLE1BQU0sT0FBTyxLQUFLLEtBQUssS0FBSyxNQUFNLE9BQU8sS0FBSyxLQUFLLEtBQUssTUFBTSxPQUFPLEtBQUssS0FBSyxLQUFLLE1BQU0sT0FBTyxLQUFLLEtBQUssS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sV0FBVyxLQUFLLE1BQU0sTUFBTSxXQUFXLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFdBQVcsV0FBVyxLQUFLLE1BQU0sTUFBTSxXQUFXLFdBQVcsS0FBSyxNQUFNLE1BQU0sV0FBVyxXQUFXLEtBQUssTUFBTSxNQUFNLFdBQVcsV0FBVyxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxXQUFXLEtBQUssTUFBTSxNQUFNLFdBQVcsS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sV0FBVyxLQUFLLE1BQU0sTUFBTSxXQUFXLEtBQUssTUFBTSxNQUFNLFdBQVcsS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sV0FBVyxLQUFLLE1BQU0sTUFBTSxXQUFXLEtBQUssTUFBTSxNQUFNLFdBQVcsS0FBSyxNQUFNLE1BQU0sV0FBVyxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxXQUFXLEtBQUssTUFBTSxNQUFNLFdBQVcsS0FBSyxNQUFNLE1BQU0sV0FBVyxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxXQUFXLEtBQUssTUFBTSxNQUFNLFdB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QUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOb0Q7QUFDMUI7QUFDd0I7QUFDTTs7QUFFN0I7O0FBRTNCLHdDQUFPOztBQUVQO0FBQ0E7O0FBRUEsd0NBQXdDLGtCQUFrQjtBQUMxRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxzREFBcUI7O0FBRXJCLDhFQUFnQztBQUNoQyxFQUFFLGlEQUFnQjtBQUNsQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvY3NzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvY3NzL3N0eWxlcy5jc3M/YzhiZiIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2pzL0xvY1N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvanMvTW9kYWwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvanMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9qcy9Qcm9qZWN0c01hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvanMvVG9kby5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9qcy9VSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9qcy9jb21wb25lbnRzL2NoZWNrYm94LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2pzL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2pzL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2pzL2NvbXBvbmVudHMvbGF5b3V0LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2pzL2NvbXBvbmVudHMvbWFpbi5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9qcy9jb21wb25lbnRzL21vZGFsLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2pzL2NvbXBvbmVudHMvcHJvamVjdEZvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvanMvY29tcG9uZW50cy9zcHJpdGUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvanMvY29tcG9uZW50cy90b2RvRm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9qcy9oYW5kbGVycy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9qcy91dGlscy9nZXRTY3JvbGxXaWR0aC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9qcy91dGlscy9pZC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9qcy91dGlscy90cmltU3RyLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKlxcbiEgdGFpbHdpbmRjc3MgdjMuMC4yMyB8IE1JVCBMaWNlbnNlIHwgaHR0cHM6Ly90YWlsd2luZGNzcy5jb21cXG4qLy8qXFxuMS4gUHJldmVudCBwYWRkaW5nIGFuZCBib3JkZXIgZnJvbSBhZmZlY3RpbmcgZWxlbWVudCB3aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvNClcXG4yLiBBbGxvdyBhZGRpbmcgYSBib3JkZXIgdG8gYW4gZWxlbWVudCBieSBqdXN0IGFkZGluZyBhIGJvcmRlci13aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGNzcy90YWlsd2luZGNzcy9wdWxsLzExNilcXG4qL1xcblxcbiosXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBib3JkZXItd2lkdGg6IDA7IC8qIDIgKi9cXG4gIGJvcmRlci1zdHlsZTogc29saWQ7IC8qIDIgKi9cXG4gIGJvcmRlci1jb2xvcjogI2U1ZTdlYjsgLyogMiAqL1xcbn1cXG5cXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gIC0tdHctY29udGVudDogJyc7XFxufVxcblxcbi8qXFxuMS4gVXNlIGEgY29uc2lzdGVudCBzZW5zaWJsZSBsaW5lLWhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuMy4gVXNlIGEgbW9yZSByZWFkYWJsZSB0YWIgc2l6ZS5cXG40LiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBzYW5zYCBmb250LWZhbWlseSBieSBkZWZhdWx0LlxcbiovXFxuXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS41OyAvKiAxICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG4gIC1tb3otdGFiLXNpemU6IDQ7IC8qIDMgKi9cXG4gIHRhYi1zaXplOiA0OyAvKiAzICovXFxuICBmb250LWZhbWlseTogdWktc2Fucy1zZXJpZiwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgQXJpYWwsIFxcXCJOb3RvIFNhbnNcXFwiLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIiwgXFxcIk5vdG8gQ29sb3IgRW1vamlcXFwiOyAvKiA0ICovXFxufVxcblxcbi8qXFxuMS4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbjIuIEluaGVyaXQgbGluZS1oZWlnaHQgZnJvbSBgaHRtbGAgc28gdXNlcnMgY2FuIHNldCB0aGVtIGFzIGEgY2xhc3MgZGlyZWN0bHkgb24gdGhlIGBodG1sYCBlbGVtZW50LlxcbiovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qXFxuMS4gQWRkIHRoZSBjb3JyZWN0IGhlaWdodCBpbiBGaXJlZm94LlxcbjIuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIG9mIGJvcmRlciBjb2xvciBpbiBGaXJlZm94LiAoaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTkwNjU1KVxcbjMuIEVuc3VyZSBob3Jpem9udGFsIHJ1bGVzIGFyZSB2aXNpYmxlIGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG5ociB7XFxuICBoZWlnaHQ6IDA7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7IC8qIDMgKi9cXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4qL1xcblxcbmFiYnI6d2hlcmUoW3RpdGxlXSkge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgZGVmYXVsdCBmb250IHNpemUgYW5kIHdlaWdodCBmb3IgaGVhZGluZ3MuXFxuKi9cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLypcXG5SZXNldCBsaW5rcyB0byBvcHRpbWl6ZSBmb3Igb3B0LWluIHN0eWxpbmcgaW5zdGVhZCBvZiBvcHQtb3V0LlxcbiovXFxuXFxuYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gRWRnZSBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLypcXG4xLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBtb25vYCBmb250IGZhbWlseSBieSBkZWZhdWx0LlxcbjIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAsXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiB1aS1tb25vc3BhY2UsIFNGTW9uby1SZWd1bGFyLCBNZW5sbywgTW9uYWNvLCBDb25zb2xhcywgXFxcIkxpYmVyYXRpb24gTW9ub1xcXCIsIFxcXCJDb3VyaWVyIE5ld1xcXCIsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKlxcblByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLypcXG4xLiBSZW1vdmUgdGV4dCBpbmRlbnRhdGlvbiBmcm9tIHRhYmxlIGNvbnRlbnRzIGluIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTk5MDg4LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjAxMjk3KVxcbjIuIENvcnJlY3QgdGFibGUgYm9yZGVyIGNvbG9yIGluaGVyaXRhbmNlIGluIGFsbCBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTkzNTcyOSwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE5NTAxNilcXG4zLiBSZW1vdmUgZ2FwcyBiZXR3ZWVuIHRhYmxlIGJvcmRlcnMgYnkgZGVmYXVsdC5cXG4qL1xcblxcbnRhYmxlIHtcXG4gIHRleHQtaW5kZW50OiAwOyAvKiAxICovXFxuICBib3JkZXItY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IC8qIDMgKi9cXG59XFxuXFxuLypcXG4xLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4yLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuMy4gUmVtb3ZlIGRlZmF1bHQgcGFkZGluZyBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMSAqL1xcbiAgbWFyZ2luOiAwOyAvKiAyICovXFxuICBwYWRkaW5nOiAwOyAvKiAzICovXFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlIGFuZCBGaXJlZm94LlxcbiovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbjIuIFJlbW92ZSBkZWZhdWx0IGJ1dHRvbiBzdHlsZXMuXFxuKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9J2J1dHRvbiddLFxcblt0eXBlPSdyZXNldCddLFxcblt0eXBlPSdzdWJtaXQnXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIDIgKi9cXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5Vc2UgdGhlIG1vZGVybiBGaXJlZm94IGZvY3VzIHN0eWxlIGZvciBhbGwgZm9jdXNhYmxlIGVsZW1lbnRzLlxcbiovXFxuXFxuOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IGF1dG87XFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBhZGRpdGlvbmFsIGA6aW52YWxpZGAgc3R5bGVzIGluIEZpcmVmb3guIChodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9nZWNrby1kZXYvYmxvYi8yZjllYWNkOWQzZDk5NWM5MzdiNDI1MWE1NTU3ZDk1ZDQ5NGM5YmUxL2xheW91dC9zdHlsZS9yZXMvZm9ybXMuY3NzI0w3MjgtTDczNylcXG4qL1xcblxcbjotbW96LXVpLWludmFsaWQge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSBhbmQgRmlyZWZveC5cXG4qL1xcblxcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLypcXG5Db3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBTYWZhcmkuXFxuKi9cXG5cXG46Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4yLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4qL1xcblxcblt0eXBlPSdzZWFyY2gnXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5SZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuKi9cXG5cXG46Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKlxcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiovXFxuXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qXFxuUmVtb3ZlcyB0aGUgZGVmYXVsdCBzcGFjaW5nIGFuZCBib3JkZXIgZm9yIGFwcHJvcHJpYXRlIGVsZW1lbnRzLlxcbiovXFxuXFxuYmxvY2txdW90ZSxcXG5kbCxcXG5kZCxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5ocixcXG5maWd1cmUsXFxucCxcXG5wcmUge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5maWVsZHNldCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5sZWdlbmQge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxub2wsXFxudWwsXFxubWVudSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLypcXG5QcmV2ZW50IHJlc2l6aW5nIHRleHRhcmVhcyBob3Jpem9udGFsbHkgYnkgZGVmYXVsdC5cXG4qL1xcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxufVxcblxcbi8qXFxuMS4gUmVzZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgb3BhY2l0eSBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kbGFicy90YWlsd2luZGNzcy9pc3N1ZXMvMzMwMClcXG4yLiBTZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgY29sb3IgdG8gdGhlIHVzZXIncyBjb25maWd1cmVkIGdyYXkgNDAwIGNvbG9yLlxcbiovXFxuXFxuaW5wdXQ6OnBsYWNlaG9sZGVyLFxcbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XFxuICBvcGFjaXR5OiAxOyAvKiAxICovXFxuICBjb2xvcjogIzljYTNhZjsgLyogMiAqL1xcbn1cXG5cXG4vKlxcblNldCB0aGUgZGVmYXVsdCBjdXJzb3IgZm9yIGJ1dHRvbnMuXFxuKi9cXG5cXG5idXR0b24sXFxuW3JvbGU9XFxcImJ1dHRvblxcXCJdIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLypcXG5NYWtlIHN1cmUgZGlzYWJsZWQgYnV0dG9ucyBkb24ndCBnZXQgdGhlIHBvaW50ZXIgY3Vyc29yLlxcbiovXFxuOmRpc2FibGVkIHtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLypcXG4xLiBNYWtlIHJlcGxhY2VkIGVsZW1lbnRzIGBkaXNwbGF5OiBibG9ja2AgYnkgZGVmYXVsdC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvMTQpXFxuMi4gQWRkIGB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlYCB0byBhbGlnbiByZXBsYWNlZCBlbGVtZW50cyBtb3JlIHNlbnNpYmx5IGJ5IGRlZmF1bHQuIChodHRwczovL2dpdGh1Yi5jb20vamVuc2ltbW9ucy9jc3NyZW1lZHkvaXNzdWVzLzE0I2lzc3VlY29tbWVudC02MzQ5MzQyMTApXFxuICAgVGhpcyBjYW4gdHJpZ2dlciBhIHBvb3JseSBjb25zaWRlcmVkIGxpbnQgZXJyb3IgaW4gc29tZSB0b29scyBidXQgaXMgaW5jbHVkZWQgYnkgZGVzaWduLlxcbiovXFxuXFxuaW1nLFxcbnN2ZyxcXG52aWRlbyxcXG5jYW52YXMsXFxuYXVkaW8sXFxuaWZyYW1lLFxcbmVtYmVkLFxcbm9iamVjdCB7XFxuICBkaXNwbGF5OiBibG9jazsgLyogMSAqL1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkNvbnN0cmFpbiBpbWFnZXMgYW5kIHZpZGVvcyB0byB0aGUgcGFyZW50IHdpZHRoIGFuZCBwcmVzZXJ2ZSB0aGVpciBpbnRyaW5zaWMgYXNwZWN0IHJhdGlvLiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNClcXG4qL1xcblxcbmltZyxcXG52aWRlbyB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qXFxuRW5zdXJlIHRoZSBkZWZhdWx0IGJyb3dzZXIgYmVoYXZpb3Igb2YgdGhlIGBoaWRkZW5gIGF0dHJpYnV0ZS5cXG4qL1xcblxcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiosIDo6YmVmb3JlLCA6OmFmdGVyIHtcXG4gIC0tdHctdHJhbnNsYXRlLXg6IDA7XFxuICAtLXR3LXRyYW5zbGF0ZS15OiAwO1xcbiAgLS10dy1yb3RhdGU6IDA7XFxuICAtLXR3LXNrZXcteDogMDtcXG4gIC0tdHctc2tldy15OiAwO1xcbiAgLS10dy1zY2FsZS14OiAxO1xcbiAgLS10dy1zY2FsZS15OiAxO1xcbiAgLS10dy1wYW4teDogIDtcXG4gIC0tdHctcGFuLXk6ICA7XFxuICAtLXR3LXBpbmNoLXpvb206ICA7XFxuICAtLXR3LXNjcm9sbC1zbmFwLXN0cmljdG5lc3M6IHByb3hpbWl0eTtcXG4gIC0tdHctb3JkaW5hbDogIDtcXG4gIC0tdHctc2xhc2hlZC16ZXJvOiAgO1xcbiAgLS10dy1udW1lcmljLWZpZ3VyZTogIDtcXG4gIC0tdHctbnVtZXJpYy1zcGFjaW5nOiAgO1xcbiAgLS10dy1udW1lcmljLWZyYWN0aW9uOiAgO1xcbiAgLS10dy1yaW5nLWluc2V0OiAgO1xcbiAgLS10dy1yaW5nLW9mZnNldC13aWR0aDogMHB4O1xcbiAgLS10dy1yaW5nLW9mZnNldC1jb2xvcjogI2ZmZjtcXG4gIC0tdHctcmluZy1jb2xvcjogcmdiKDU5IDEzMCAyNDYgLyAwLjUpO1xcbiAgLS10dy1yaW5nLW9mZnNldC1zaGFkb3c6IDAgMCAjMDAwMDtcXG4gIC0tdHctcmluZy1zaGFkb3c6IDAgMCAjMDAwMDtcXG4gIC0tdHctc2hhZG93OiAwIDAgIzAwMDA7XFxuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDAgIzAwMDA7XFxuICAtLXR3LWJsdXI6ICA7XFxuICAtLXR3LWJyaWdodG5lc3M6ICA7XFxuICAtLXR3LWNvbnRyYXN0OiAgO1xcbiAgLS10dy1ncmF5c2NhbGU6ICA7XFxuICAtLXR3LWh1ZS1yb3RhdGU6ICA7XFxuICAtLXR3LWludmVydDogIDtcXG4gIC0tdHctc2F0dXJhdGU6ICA7XFxuICAtLXR3LXNlcGlhOiAgO1xcbiAgLS10dy1kcm9wLXNoYWRvdzogIDtcXG4gIC0tdHctYmFja2Ryb3AtYmx1cjogIDtcXG4gIC0tdHctYmFja2Ryb3AtYnJpZ2h0bmVzczogIDtcXG4gIC0tdHctYmFja2Ryb3AtY29udHJhc3Q6ICA7XFxuICAtLXR3LWJhY2tkcm9wLWdyYXlzY2FsZTogIDtcXG4gIC0tdHctYmFja2Ryb3AtaHVlLXJvdGF0ZTogIDtcXG4gIC0tdHctYmFja2Ryb3AtaW52ZXJ0OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1vcGFjaXR5OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1zYXR1cmF0ZTogIDtcXG4gIC0tdHctYmFja2Ryb3Atc2VwaWE6ICA7XFxufVxcbi5jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA2NDBweCkge1xcblxcbiAgLmNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogNjQwcHg7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcblxcbiAgLmNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogNzY4cHg7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcXG5cXG4gIC5jb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDEwMjRweDtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDEyODBweCkge1xcblxcbiAgLmNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogMTI4MHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTUzNnB4KSB7XFxuXFxuICAuY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiAxNTM2cHg7XFxuICB9XFxufVxcbi5maXhlZCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxufVxcbi5yZWxhdGl2ZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi50b3AtMCB7XFxuICB0b3A6IDBweDtcXG59XFxuLmxlZnQtMCB7XFxuICBsZWZ0OiAwcHg7XFxufVxcbi5teC1hdXRvIHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbn1cXG4ubXktNCB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuLm1iLTQge1xcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuLm1sLTMge1xcbiAgbWFyZ2luLWxlZnQ6IDAuNzVyZW07XFxufVxcbi5tdC1hdXRvIHtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxufVxcbi5tYi02IHtcXG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcXG59XFxuLm10LTEge1xcbiAgbWFyZ2luLXRvcDogMC4yNXJlbTtcXG59XFxuLmJsb2NrIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uZmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uaW5saW5lLWZsZXgge1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxufVxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLmgtNiB7XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG59XFxuLmgtNSB7XFxuICBoZWlnaHQ6IDEuMjVyZW07XFxufVxcbi5oLTQge1xcbiAgaGVpZ2h0OiAxcmVtO1xcbn1cXG4uaC1zY3JlZW4ge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuLm1pbi1oLXNjcmVlbiB7XFxuICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuLnctNiB7XFxuICB3aWR0aDogMS41cmVtO1xcbn1cXG4udy00IHtcXG4gIHdpZHRoOiAxcmVtO1xcbn1cXG4udy1zY3JlZW4ge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbn1cXG4udy1cXFxcWzQ4MHB4XFxcXF0ge1xcbiAgd2lkdGg6IDQ4MHB4O1xcbn1cXG4udy1mdWxsIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ubWF4LXctZnVsbCB7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcbi5zZWxlY3Qtbm9uZSB7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuLmZsZXgtY29sIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcbi5pdGVtcy1zdGFydCB7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuLml0ZW1zLWNlbnRlciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uanVzdGlmeS1lbmQge1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuLmp1c3RpZnktY2VudGVyIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4uanVzdGlmeS1iZXR3ZWVuIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLnNwYWNlLXgtMiA+IDpub3QoW2hpZGRlbl0pIH4gOm5vdChbaGlkZGVuXSkge1xcbiAgLS10dy1zcGFjZS14LXJldmVyc2U6IDA7XFxuICBtYXJnaW4tcmlnaHQ6IGNhbGMoMC41cmVtICogdmFyKC0tdHctc3BhY2UteC1yZXZlcnNlKSk7XFxuICBtYXJnaW4tbGVmdDogY2FsYygwLjVyZW0gKiBjYWxjKDEgLSB2YXIoLS10dy1zcGFjZS14LXJldmVyc2UpKSk7XFxufVxcbi5zcGFjZS14LTEgPiA6bm90KFtoaWRkZW5dKSB+IDpub3QoW2hpZGRlbl0pIHtcXG4gIC0tdHctc3BhY2UteC1yZXZlcnNlOiAwO1xcbiAgbWFyZ2luLXJpZ2h0OiBjYWxjKDAuMjVyZW0gKiB2YXIoLS10dy1zcGFjZS14LXJldmVyc2UpKTtcXG4gIG1hcmdpbi1sZWZ0OiBjYWxjKDAuMjVyZW0gKiBjYWxjKDEgLSB2YXIoLS10dy1zcGFjZS14LXJldmVyc2UpKSk7XFxufVxcbi5zcGFjZS14LTQgPiA6bm90KFtoaWRkZW5dKSB+IDpub3QoW2hpZGRlbl0pIHtcXG4gIC0tdHctc3BhY2UteC1yZXZlcnNlOiAwO1xcbiAgbWFyZ2luLXJpZ2h0OiBjYWxjKDFyZW0gKiB2YXIoLS10dy1zcGFjZS14LXJldmVyc2UpKTtcXG4gIG1hcmdpbi1sZWZ0OiBjYWxjKDFyZW0gKiBjYWxjKDEgLSB2YXIoLS10dy1zcGFjZS14LXJldmVyc2UpKSk7XFxufVxcbi5zcGFjZS15LTQgPiA6bm90KFtoaWRkZW5dKSB+IDpub3QoW2hpZGRlbl0pIHtcXG4gIC0tdHctc3BhY2UteS1yZXZlcnNlOiAwO1xcbiAgbWFyZ2luLXRvcDogY2FsYygxcmVtICogY2FsYygxIC0gdmFyKC0tdHctc3BhY2UteS1yZXZlcnNlKSkpO1xcbiAgbWFyZ2luLWJvdHRvbTogY2FsYygxcmVtICogdmFyKC0tdHctc3BhY2UteS1yZXZlcnNlKSk7XFxufVxcbi5vdmVyZmxvdy1hdXRvIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG4ub3ZlcmZsb3ctaGlkZGVuIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5zY3JvbGwtc21vb3RoIHtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcbn1cXG4ucm91bmRlZC1sZyB7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxufVxcbi5yb3VuZGVkIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XFxufVxcbi5yb3VuZGVkLW1kIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMzc1cmVtO1xcbn1cXG4uYm9yZGVyIHtcXG4gIGJvcmRlci13aWR0aDogMXB4O1xcbn1cXG4uYm9yZGVyLXQge1xcbiAgYm9yZGVyLXRvcC13aWR0aDogMXB4O1xcbn1cXG4uYm9yZGVyLWIge1xcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xcbn1cXG4uYm9yZGVyLXNsYXRlLTMwMCB7XFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjAzIDIxMyAyMjUgLyB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcbn1cXG4uYm9yZGVyLXNsYXRlLTIwMCB7XFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjI2IDIzMiAyNDAgLyB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcbn1cXG4uYm9yZGVyLXRyYW5zcGFyZW50IHtcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5iZy16aW5jLTUwIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTAgMjUwIDI1MCAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLmJnLXdoaXRlIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUgMjU1IDI1NSAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLmJnLW9yYW5nZS02MDAge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNCA4OCAxMiAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLmJnLWJsYWNrXFxcXC83NSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCAwIDAgLyAwLjc1KTtcXG59XFxuLmJnLXRyYW5zcGFyZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4ucC00IHtcXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcbi5weS02IHtcXG4gIHBhZGRpbmctdG9wOiAxLjVyZW07XFxuICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xcbn1cXG4ucHgtNCB7XFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbn1cXG4ucHktMiB7XFxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXG59XFxuLnB4LTMge1xcbiAgcGFkZGluZy1sZWZ0OiAwLjc1cmVtO1xcbiAgcGFkZGluZy1yaWdodDogMC43NXJlbTtcXG59XFxuLnB0LVxcXFxbM3B4XFxcXF0ge1xcbiAgcGFkZGluZy10b3A6IDNweDtcXG59XFxuLnRleHQtY2VudGVyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmZvbnQtc2FucyB7XFxuICBmb250LWZhbWlseTogdWktc2Fucy1zZXJpZiwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgQXJpYWwsIFxcXCJOb3RvIFNhbnNcXFwiLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIiwgXFxcIk5vdG8gQ29sb3IgRW1vamlcXFwiO1xcbn1cXG4udGV4dC1sZyB7XFxuICBmb250LXNpemU6IDEuMTI1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XFxufVxcbi50ZXh0LTN4bCB7XFxuICBmb250LXNpemU6IDEuODc1cmVtO1xcbiAgbGluZS1oZWlnaHQ6IDIuMjVyZW07XFxufVxcbi50ZXh0LWJhc2Uge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcXG59XFxuLmZvbnQtYm9sZCB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG4uZm9udC1tZWRpdW0ge1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuLml0YWxpYyB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcbi50ZXh0LW9yYW5nZS02MDAge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDIzNCA4OCAxMiAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4udGV4dC1zbGF0ZS00MDAge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDE0OCAxNjMgMTg0IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi50ZXh0LXNreS01MDAge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDE0IDE2NSAyMzMgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLnRleHQtc2xhdGUtNzAwIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYig1MSA2NSA4NSAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4udGV4dC13aGl0ZSB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2IoMjU1IDI1NSAyNTUgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLnVuZGVybGluZSB7XFxuICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xcbn1cXG4ucGxhY2Vob2xkZXItc2xhdGUtNDAwOjpwbGFjZWhvbGRlciB7XFxuICAtLXR3LXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDE0OCAxNjMgMTg0IC8gdmFyKC0tdHctcGxhY2Vob2xkZXItb3BhY2l0eSkpO1xcbn1cXG4ub3BhY2l0eS0wIHtcXG4gIG9wYWNpdHk6IDA7XFxufVxcbi5zaGFkb3ctbGcge1xcbiAgLS10dy1zaGFkb3c6IDAgMTBweCAxNXB4IC0zcHggcmdiKDAgMCAwIC8gMC4xKSwgMCA0cHggNnB4IC00cHggcmdiKDAgMCAwIC8gMC4xKTtcXG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMTBweCAxNXB4IC0zcHggdmFyKC0tdHctc2hhZG93LWNvbG9yKSwgMCA0cHggNnB4IC00cHggdmFyKC0tdHctc2hhZG93LWNvbG9yKTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyk7XFxufVxcbi5zaGFkb3ctc20ge1xcbiAgLS10dy1zaGFkb3c6IDAgMXB4IDJweCAwIHJnYigwIDAgMCAvIDAuMDUpO1xcbiAgLS10dy1zaGFkb3ctY29sb3JlZDogMCAxcHggMnB4IDAgdmFyKC0tdHctc2hhZG93LWNvbG9yKTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdywgMCAwICMwMDAwKSwgdmFyKC0tdHctcmluZy1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXNoYWRvdyk7XFxufVxcbi5maWx0ZXIge1xcbiAgZmlsdGVyOiB2YXIoLS10dy1ibHVyKSB2YXIoLS10dy1icmlnaHRuZXNzKSB2YXIoLS10dy1jb250cmFzdCkgdmFyKC0tdHctZ3JheXNjYWxlKSB2YXIoLS10dy1odWUtcm90YXRlKSB2YXIoLS10dy1pbnZlcnQpIHZhcigtLXR3LXNhdHVyYXRlKSB2YXIoLS10dy1zZXBpYSkgdmFyKC0tdHctZHJvcC1zaGFkb3cpO1xcbn1cXG4udHJhbnNpdGlvbiB7XFxuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBjb2xvciwgYmFja2dyb3VuZC1jb2xvciwgYm9yZGVyLWNvbG9yLCB0ZXh0LWRlY29yYXRpb24tY29sb3IsIGZpbGwsIHN0cm9rZSwgb3BhY2l0eSwgYm94LXNoYWRvdywgdHJhbnNmb3JtLCBmaWx0ZXIsIGJhY2tkcm9wLWZpbHRlcjtcXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC40LCAwLCAwLjIsIDEpO1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTUwbXM7XFxufVxcbi5zZWxlY3Rpb25cXFxcOmJnLXBpbmstMzAwICo6OnNlbGVjdGlvbiB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ5IDE2OCAyMTIgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcbi5zZWxlY3Rpb25cXFxcOmJnLXBpbmstMzAwOjpzZWxlY3Rpb24ge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OSAxNjggMjEyIC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG4uaG92ZXJcXFxcOmN1cnNvci1wb2ludGVyOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmhvdmVyXFxcXDpib3JkZXItc2xhdGUtMjAwOmhvdmVyIHtcXG4gIC0tdHctYm9yZGVyLW9wYWNpdHk6IDE7XFxuICBib3JkZXItY29sb3I6IHJnYigyMjYgMjMyIDI0MCAvIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XFxufVxcbi5ob3ZlclxcXFw6Ymctb3JhbmdlLTcwMDpob3ZlciB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk0IDY1IDEyIC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG4uaG92ZXJcXFxcOnRleHQtc2t5LTUwMDpob3ZlciB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2IoMTQgMTY1IDIzMyAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4uaG92ZXJcXFxcOnRleHQtcmVkLTUwMDpob3ZlciB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2IoMjM5IDY4IDY4IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi5ob3ZlclxcXFw6dGV4dC1vcmFuZ2UtNjAwOmhvdmVyIHtcXG4gIC0tdHctdGV4dC1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYigyMzQgODggMTIgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLmZvY3VzXFxcXDpib3JkZXItc2t5LTUwMDpmb2N1cyB7XFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMTQgMTY1IDIzMyAvIHZhcigtLXR3LWJvcmRlci1vcGFjaXR5KSk7XFxufVxcbi5mb2N1c1xcXFw6b3V0bGluZS1ub25lOmZvY3VzIHtcXG4gIG91dGxpbmU6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIG91dGxpbmUtb2Zmc2V0OiAycHg7XFxufVxcbi5mb2N1c1xcXFw6cmluZy0xOmZvY3VzIHtcXG4gIC0tdHctcmluZy1vZmZzZXQtc2hhZG93OiB2YXIoLS10dy1yaW5nLWluc2V0KSAwIDAgMCB2YXIoLS10dy1yaW5nLW9mZnNldC13aWR0aCkgdmFyKC0tdHctcmluZy1vZmZzZXQtY29sb3IpO1xcbiAgLS10dy1yaW5nLXNoYWRvdzogdmFyKC0tdHctcmluZy1pbnNldCkgMCAwIDAgY2FsYygxcHggKyB2YXIoLS10dy1yaW5nLW9mZnNldC13aWR0aCkpIHZhcigtLXR3LXJpbmctY29sb3IpO1xcbiAgYm94LXNoYWRvdzogdmFyKC0tdHctcmluZy1vZmZzZXQtc2hhZG93KSwgdmFyKC0tdHctcmluZy1zaGFkb3cpLCB2YXIoLS10dy1zaGFkb3csIDAgMCAjMDAwMCk7XFxufVxcbi5mb2N1c1xcXFw6cmluZy1za3ktNTAwOmZvY3VzIHtcXG4gIC0tdHctcmluZy1vcGFjaXR5OiAxO1xcbiAgLS10dy1yaW5nLWNvbG9yOiByZ2IoMTQgMTY1IDIzMyAvIHZhcigtLXR3LXJpbmctb3BhY2l0eSkpO1xcbn1cXG4uYWN0aXZlXFxcXDpib3JkZXItc2xhdGUtNDAwOmFjdGl2ZSB7XFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMTQ4IDE2MyAxODQgLyB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcbn1cXG4uYWN0aXZlXFxcXDpiZy1vcmFuZ2UtODAwOmFjdGl2ZSB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU0IDUyIDE4IC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG4uYWN0aXZlXFxcXDpiZy1zbGF0ZS0yMDA6YWN0aXZlIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMjYgMjMyIDI0MCAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLmdyb3VwOmhvdmVyIC5ncm91cC1ob3ZlclxcXFw6b3BhY2l0eS0xMDAge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuXFxuICAubWRcXFxcOmdyaWQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgfVxcblxcbiAgLm1kXFxcXDpncmlkLWNvbHMtMiB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTtcXG4gIH1cXG5cXG4gIC5tZFxcXFw6Z2FwLTQge1xcbiAgICBnYXA6IDFyZW07XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcXG5cXG4gIC5sZ1xcXFw6Z3JpZC1jb2xzLVxcXFxbMWZyXzJmclxcXFxdIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3N0eWxlcy5jc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9jc3MvJTNDaW5wdXQlMjBjc3MlMjBkcC02ZmYlM0VcIixcIjxubyBzb3VyY2U+XCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztDQUFjLENBQWQ7OztDQUFjOztBQUFkOzs7RUNRRSxzQkFBc0IsRUFBRSxNQUFNO0VBQzlCLGVBQWUsRUFBRSxNQUFNO0VBQ3ZCLG1CQUFtQixFQUFFLE1BQU07RUFDM0IscUJBQXdELEVBQUUsTUFBTTtBRFhwRDs7QUFBZDs7RUNnQkUsZ0JBQWdCO0FEaEJKOztBQUFkOzs7OztDQUFjOztBQUFkO0VDMkJFLGdCQUFnQixFQUFFLE1BQU07RUFDeEIsOEJBQThCLEVBQUUsTUFBTTtFQUN0QyxnQkFBZ0IsRUFBRSxNQUFNO0VBQ3hCLFdBQVcsRUFBRSxNQUFNO0VBQ25CLDROQUFzUCxFQUFFLE1BQU07QUQvQmxQOztBQUFkOzs7Q0FBYzs7QUFBZDtFQ3dDRSxTQUFTLEVBQUUsTUFBTTtFQUNqQixvQkFBb0IsRUFBRSxNQUFNO0FEekNoQjs7QUFBZDs7OztDQUFjOztBQUFkO0VDbURFLFNBQVMsRUFBRSxNQUFNO0VBQ2pCLGNBQWMsRUFBRSxNQUFNO0VBQ3RCLHFCQUFxQixFQUFFLE1BQU07QURyRGpCOztBQUFkOztDQUFjOztBQUFkO0VDNkRFLGlDQUFpQztBRDdEckI7O0FBQWQ7O0NBQWM7O0FBQWQ7Ozs7OztFQzBFRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0FEM0VSOztBQUFkOztDQUFjOztBQUFkO0VDbUZFLGNBQWM7RUFDZCx3QkFBd0I7QURwRlo7O0FBQWQ7O0NBQWM7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bUJBQUE7RUFBQSxlQUFBO0VBQUEsaUJBQUE7RUFBQSxjQUFBO0VBQUEsb0JBQUE7RUFBQSxzQkFBQTtFQUFBLDRCQUFBO0VBQUEsMEJBQUE7RUFBQSwyQkFBQTtFQUFBLDRCQUFBO0VBQUEsd0JBQUE7RUFBQSx5QkFBQTtFQUFBLDBCQUFBO0VBQUE7Q0FBQTtBRkNBO0VFREE7QUZDb0I7QUFBcEI7O0VFREE7SUFBQTtHQUFBO0FGQ29CO0FBQXBCOztFRURBO0lBQUE7R0FBQTtBRkNvQjtBQUFwQjs7RUVEQTtJQUFBO0dBQUE7QUZDb0I7QUFBcEI7O0VFREE7SUFBQTtHQUFBO0FGQ29CO0FBQXBCOztFRURBO0lBQUE7R0FBQTtBRkNvQjtBQUNwQjtFRUZBO0FGRW1CO0FBQW5CO0VFRkE7QUZFbUI7QUFBbkI7RUVGQTtBRkVtQjtBQUFuQjtFRUZBO0FGRW1CO0FBQW5CO0VFRkEsa0JBQUE7RUFBQTtBRkVtQjtBQUFuQjtFRUZBLGlCQUFBO0VBQUE7QUZFbUI7QUFBbkI7RUVGQTtBRkVtQjtBQUFuQjtFRUZBO0FGRW1CO0FBQW5CO0VFRkE7QUZFbUI7QUFBbkI7RUVGQTtBRkVtQjtBQUFuQjtFRUZBO0FGRW1CO0FBQW5CO0VFRkE7QUZFbUI7QUFBbkI7RUVGQTtBRkVtQjtBQUFuQjtFRUZBO0FGRW1CO0FBQW5CO0VFRkE7QUZFbUI7QUFBbkI7RUVGQTtBRkVtQjtBQUFuQjtFRUZBO0FGRW1CO0FBQW5CO0VFRkE7QUZFbUI7QUFBbkI7RUVGQTtBRkVtQjtBQUFuQjtFRUZBO0FGRW1CO0FBQW5CO0VFRkE7QUZFbUI7QUFBbkI7RUVGQTtBRkVtQjtBQUFuQjtFRUZBO0FGRW1CO0FBQW5CO0VFRkE7QUZFbUI7QUFBbkI7RUVGQTtBRkVtQjtBQUFuQjtFRUZBO0FGRW1CO0FBQW5CO0VFRkE7QUZFbUI7QUFBbkI7RUVGQTtBRkVtQjtBQUFuQjtFRUZBO0FGRW1CO0FBQW5CO0VFRkE7QUZFbUI7QUFBbkI7RUVGQTtBRkVtQjtBQUFuQjtFRUZBO0FGRW1CO0FBQW5CO0VFRkE7QUZFbUI7QUFBbkI7RUVGQSx3QkFBQTtFQUFBLHVEQUFBO0VBQUE7QUZFbUI7QUFBbkI7RUVGQSx3QkFBQTtFQUFBLHdEQUFBO0VBQUE7QUZFbUI7QUFBbkI7RUVGQSx3QkFBQTtFQUFBLHFEQUFBO0VBQUE7QUZFbUI7QUFBbkI7RUVGQSx3QkFBQTtFQUFBLDZEQUFBO0VBQUE7QUZFbUI7QUFBbkI7RUVGQTtBRkVtQjtBQUFuQjtFRUZBO0FGRW1CO0FBQW5CO0VFRkE7QUZFbUI7QUFBbkI7RUVGQTtBRkVtQjtBQUFuQjtFRUZBO0FGRW1CO0FBQW5CO0VFRkE7QUZFbUI7QUFBbkI7RUVGQTtBRkVtQjtBQUFuQjtFRUZBO0FGRW1CO0FBQW5CO0VFRkE7QUZFbUI7QUFBbkI7RUVGQSx1QkFBQTtFQUFBO0FGRW1CO0FBQW5CO0VFRkEsdUJBQUE7RUFBQTtBRkVtQjtBQUFuQjtFRUZBO0FGRW1CO0FBQW5CO0VFRkEsbUJBQUE7RUFBQTtBRkVtQjtBQUFuQjtFRUZBLG1CQUFBO0VBQUE7QUZFbUI7QUFBbkI7RUVGQSxtQkFBQTtFQUFBO0FGRW1CO0FBQW5CO0VFRkE7QUZFbUI7QUFBbkI7RUVGQTtBRkVtQjtBQUFuQjtFRUZBO0FGRW1CO0FBQW5CO0VFRkEsb0JBQUE7RUFBQTtBRkVtQjtBQUFuQjtFRUZBLG1CQUFBO0VBQUE7QUZFbUI7QUFBbkI7RUVGQSxvQkFBQTtFQUFBO0FGRW1CO0FBQW5CO0VFRkEsc0JBQUE7RUFBQTtBRkVtQjtBQUFuQjtFRUZBO0FGRW1CO0FBQW5CO0VFRkE7QUZFbUI7QUFBbkI7RUVGQTtBRkVtQjtBQUFuQjtFRUZBLG9CQUFBO0VBQUE7QUZFbUI7QUFBbkI7RUVGQSxvQkFBQTtFQUFBO0FGRW1CO0FBQW5CO0VFRkEsZ0JBQUE7RUFBQTtBRkVtQjtBQUFuQjtFRUZBO0FGRW1CO0FBQW5CO0VFRkE7QUZFbUI7QUFBbkI7RUVGQTtBRkVtQjtBQUFuQjtFRUZBLHFCQUFBO0VBQUE7QUZFbUI7QUFBbkI7RUVGQSxxQkFBQTtFQUFBO0FGRW1CO0FBQW5CO0VFRkEscUJBQUE7RUFBQTtBRkVtQjtBQUFuQjtFRUZBLHFCQUFBO0VBQUE7QUZFbUI7QUFBbkI7RUVGQSxxQkFBQTtFQUFBO0FGRW1CO0FBQW5CO0VFRkE7QUZFbUI7QUFBbkI7RUVGQSw0QkFBQTtFQUFBO0FGRW1CO0FBQW5CO0VFRkE7QUZFbUI7QUFBbkI7RUVGQSxnRkFBQTtFQUFBLG9HQUFBO0VBQUE7QUZFbUI7QUFBbkI7RUVGQSwyQ0FBQTtFQUFBLHdEQUFBO0VBQUE7QUZFbUI7QUFBbkI7RUVGQTtBRkVtQjtBQUFuQjtFRUZBLHlKQUFBO0VBQUEseURBQUE7RUFBQTtBRkVtQjtBQUZuQjtFRUFBLG1CQUFBO0VBQUE7Q0FBQTtBRkFBO0VFQUEsbUJBQUE7RUFBQTtDQUFBO0FGQUE7RUVBQTtDQUFBO0FGQUE7RUVBQSx1QkFBQTtFQUFBO0NBQUE7QUZBQTtFRUFBLG1CQUFBO0VBQUE7Q0FBQTtBRkFBO0VFQUEscUJBQUE7RUFBQTtDQUFBO0FGQUE7RUVBQSxxQkFBQTtFQUFBO0NBQUE7QUZBQTtFRUFBLHFCQUFBO0VBQUE7Q0FBQTtBRkFBO0VFQUEsdUJBQUE7RUFBQTtDQUFBO0FGQUE7RUVBQSwrQkFBQTtFQUFBO0NBQUE7QUZBQTtFRUFBLDRHQUFBO0VBQUEsMEdBQUE7RUFBQTtDQUFBO0FGQUE7RUVBQSxxQkFBQTtFQUFBO0NBQUE7QUZBQTtFRUFBLHVCQUFBO0VBQUE7Q0FBQTtBRkFBO0VFQUEsbUJBQUE7RUFBQTtDQUFBO0FGQUE7RUVBQSxtQkFBQTtFQUFBO0NBQUE7QUZBQTtFRUFBO0NBQUE7QUZBQTs7RUVBQTtJQUFBO0dBQUE7O0VBQUE7SUFBQTtHQUFBOztFQUFBO0lBQUE7R0FBQTtDQUFBO0FGQUE7O0VFQUE7SUFBQTtHQUFBO0NBQUFcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQHRhaWx3aW5kIGJhc2U7XFxuQHRhaWx3aW5kIGNvbXBvbmVudHM7XFxuQHRhaWx3aW5kIHV0aWxpdGllcztcXG5cIixcIi8qXFxuMS4gUHJldmVudCBwYWRkaW5nIGFuZCBib3JkZXIgZnJvbSBhZmZlY3RpbmcgZWxlbWVudCB3aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvNClcXG4yLiBBbGxvdyBhZGRpbmcgYSBib3JkZXIgdG8gYW4gZWxlbWVudCBieSBqdXN0IGFkZGluZyBhIGJvcmRlci13aWR0aC4gKGh0dHBzOi8vZ2l0aHViLmNvbS90YWlsd2luZGNzcy90YWlsd2luZGNzcy9wdWxsLzExNilcXG4qL1xcblxcbiosXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBib3JkZXItd2lkdGg6IDA7IC8qIDIgKi9cXG4gIGJvcmRlci1zdHlsZTogc29saWQ7IC8qIDIgKi9cXG4gIGJvcmRlci1jb2xvcjogdGhlbWUoJ2JvcmRlckNvbG9yLkRFRkFVTFQnLCBjdXJyZW50Q29sb3IpOyAvKiAyICovXFxufVxcblxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgLS10dy1jb250ZW50OiAnJztcXG59XFxuXFxuLypcXG4xLiBVc2UgYSBjb25zaXN0ZW50IHNlbnNpYmxlIGxpbmUtaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4yLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4zLiBVc2UgYSBtb3JlIHJlYWRhYmxlIHRhYiBzaXplLlxcbjQuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgYHNhbnNgIGZvbnQtZmFtaWx5IGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG5odG1sIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7IC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbiAgLW1vei10YWItc2l6ZTogNDsgLyogMyAqL1xcbiAgdGFiLXNpemU6IDQ7IC8qIDMgKi9cXG4gIGZvbnQtZmFtaWx5OiB0aGVtZSgnZm9udEZhbWlseS5zYW5zJywgdWktc2Fucy1zZXJpZiwgc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFJvYm90bywgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgQXJpYWwsIFxcXCJOb3RvIFNhbnNcXFwiLCBzYW5zLXNlcmlmLCBcXFwiQXBwbGUgQ29sb3IgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgRW1vamlcXFwiLCBcXFwiU2Vnb2UgVUkgU3ltYm9sXFxcIiwgXFxcIk5vdG8gQ29sb3IgRW1vamlcXFwiKTsgLyogNCAqL1xcbn1cXG5cXG4vKlxcbjEuIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4yLiBJbmhlcml0IGxpbmUtaGVpZ2h0IGZyb20gYGh0bWxgIHNvIHVzZXJzIGNhbiBzZXQgdGhlbSBhcyBhIGNsYXNzIGRpcmVjdGx5IG9uIHRoZSBgaHRtbGAgZWxlbWVudC5cXG4qL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbjEuIEFkZCB0aGUgY29ycmVjdCBoZWlnaHQgaW4gRmlyZWZveC5cXG4yLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBvZiBib3JkZXIgY29sb3IgaW4gRmlyZWZveC4gKGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTE5MDY1NSlcXG4zLiBFbnN1cmUgaG9yaXpvbnRhbCBydWxlcyBhcmUgdmlzaWJsZSBieSBkZWZhdWx0LlxcbiovXFxuXFxuaHIge1xcbiAgaGVpZ2h0OiAwOyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgYm9yZGVyLXRvcC13aWR0aDogMXB4OyAvKiAzICovXFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5hYmJyOndoZXJlKFt0aXRsZV0pIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDtcXG59XFxuXFxuLypcXG5SZW1vdmUgdGhlIGRlZmF1bHQgZm9udCBzaXplIGFuZCB3ZWlnaHQgZm9yIGhlYWRpbmdzLlxcbiovXFxuXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbi8qXFxuUmVzZXQgbGlua3MgdG8gb3B0aW1pemUgZm9yIG9wdC1pbiBzdHlsaW5nIGluc3RlYWQgb2Ygb3B0LW91dC5cXG4qL1xcblxcbmEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IGluaGVyaXQ7XFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIEVkZ2UgYW5kIFNhZmFyaS5cXG4qL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qXFxuMS4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBgbW9ub2AgZm9udCBmYW1pbHkgYnkgZGVmYXVsdC5cXG4yLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wLFxcbnByZSB7XFxuICBmb250LWZhbWlseTogdGhlbWUoJ2ZvbnRGYW1pbHkubW9ubycsIHVpLW1vbm9zcGFjZSwgU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcXFwiTGliZXJhdGlvbiBNb25vXFxcIiwgXFxcIkNvdXJpZXIgTmV3XFxcIiwgbW9ub3NwYWNlKTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKlxcblByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLypcXG4xLiBSZW1vdmUgdGV4dCBpbmRlbnRhdGlvbiBmcm9tIHRhYmxlIGNvbnRlbnRzIGluIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTk5MDg4LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjAxMjk3KVxcbjIuIENvcnJlY3QgdGFibGUgYm9yZGVyIGNvbG9yIGluaGVyaXRhbmNlIGluIGFsbCBDaHJvbWUgYW5kIFNhZmFyaS4gKGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTkzNTcyOSwgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE5NTAxNilcXG4zLiBSZW1vdmUgZ2FwcyBiZXR3ZWVuIHRhYmxlIGJvcmRlcnMgYnkgZGVmYXVsdC5cXG4qL1xcblxcbnRhYmxlIHtcXG4gIHRleHQtaW5kZW50OiAwOyAvKiAxICovXFxuICBib3JkZXItY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7IC8qIDMgKi9cXG59XFxuXFxuLypcXG4xLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4yLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuMy4gUmVtb3ZlIGRlZmF1bHQgcGFkZGluZyBpbiBhbGwgYnJvd3NlcnMuXFxuKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMSAqL1xcbiAgbWFyZ2luOiAwOyAvKiAyICovXFxuICBwYWRkaW5nOiAwOyAvKiAzICovXFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlIGFuZCBGaXJlZm94LlxcbiovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbjIuIFJlbW92ZSBkZWZhdWx0IGJ1dHRvbiBzdHlsZXMuXFxuKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9J2J1dHRvbiddLFxcblt0eXBlPSdyZXNldCddLFxcblt0eXBlPSdzdWJtaXQnXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7IC8qIDIgKi9cXG4gIGJhY2tncm91bmQtaW1hZ2U6IG5vbmU7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5Vc2UgdGhlIG1vZGVybiBGaXJlZm94IGZvY3VzIHN0eWxlIGZvciBhbGwgZm9jdXNhYmxlIGVsZW1lbnRzLlxcbiovXFxuXFxuOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IGF1dG87XFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBhZGRpdGlvbmFsIGA6aW52YWxpZGAgc3R5bGVzIGluIEZpcmVmb3guIChodHRwczovL2dpdGh1Yi5jb20vbW96aWxsYS9nZWNrby1kZXYvYmxvYi8yZjllYWNkOWQzZDk5NWM5MzdiNDI1MWE1NTU3ZDk1ZDQ5NGM5YmUxL2xheW91dC9zdHlsZS9yZXMvZm9ybXMuY3NzI0w3MjgtTDczNylcXG4qL1xcblxcbjotbW96LXVpLWludmFsaWQge1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSBhbmQgRmlyZWZveC5cXG4qL1xcblxcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLypcXG5Db3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBTYWZhcmkuXFxuKi9cXG5cXG46Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLypcXG4xLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4yLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4qL1xcblxcblt0eXBlPSdzZWFyY2gnXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5SZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuKi9cXG5cXG46Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKlxcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiovXFxuXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qXFxuUmVtb3ZlcyB0aGUgZGVmYXVsdCBzcGFjaW5nIGFuZCBib3JkZXIgZm9yIGFwcHJvcHJpYXRlIGVsZW1lbnRzLlxcbiovXFxuXFxuYmxvY2txdW90ZSxcXG5kbCxcXG5kZCxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5ocixcXG5maWd1cmUsXFxucCxcXG5wcmUge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG5maWVsZHNldCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5sZWdlbmQge1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxub2wsXFxudWwsXFxubWVudSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLypcXG5QcmV2ZW50IHJlc2l6aW5nIHRleHRhcmVhcyBob3Jpem9udGFsbHkgYnkgZGVmYXVsdC5cXG4qL1xcblxcbnRleHRhcmVhIHtcXG4gIHJlc2l6ZTogdmVydGljYWw7XFxufVxcblxcbi8qXFxuMS4gUmVzZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgb3BhY2l0eSBpbiBGaXJlZm94LiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kbGFicy90YWlsd2luZGNzcy9pc3N1ZXMvMzMwMClcXG4yLiBTZXQgdGhlIGRlZmF1bHQgcGxhY2Vob2xkZXIgY29sb3IgdG8gdGhlIHVzZXIncyBjb25maWd1cmVkIGdyYXkgNDAwIGNvbG9yLlxcbiovXFxuXFxuaW5wdXQ6OnBsYWNlaG9sZGVyLFxcbnRleHRhcmVhOjpwbGFjZWhvbGRlciB7XFxuICBvcGFjaXR5OiAxOyAvKiAxICovXFxuICBjb2xvcjogdGhlbWUoJ2NvbG9ycy5ncmF5LjQwMCcsICM5Y2EzYWYpOyAvKiAyICovXFxufVxcblxcbi8qXFxuU2V0IHRoZSBkZWZhdWx0IGN1cnNvciBmb3IgYnV0dG9ucy5cXG4qL1xcblxcbmJ1dHRvbixcXG5bcm9sZT1cXFwiYnV0dG9uXFxcIl0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKlxcbk1ha2Ugc3VyZSBkaXNhYmxlZCBidXR0b25zIGRvbid0IGdldCB0aGUgcG9pbnRlciBjdXJzb3IuXFxuKi9cXG46ZGlzYWJsZWQge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4vKlxcbjEuIE1ha2UgcmVwbGFjZWQgZWxlbWVudHMgYGRpc3BsYXk6IGJsb2NrYCBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNClcXG4yLiBBZGQgYHZlcnRpY2FsLWFsaWduOiBtaWRkbGVgIHRvIGFsaWduIHJlcGxhY2VkIGVsZW1lbnRzIG1vcmUgc2Vuc2libHkgYnkgZGVmYXVsdC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9qZW5zaW1tb25zL2Nzc3JlbWVkeS9pc3N1ZXMvMTQjaXNzdWVjb21tZW50LTYzNDkzNDIxMClcXG4gICBUaGlzIGNhbiB0cmlnZ2VyIGEgcG9vcmx5IGNvbnNpZGVyZWQgbGludCBlcnJvciBpbiBzb21lIHRvb2xzIGJ1dCBpcyBpbmNsdWRlZCBieSBkZXNpZ24uXFxuKi9cXG5cXG5pbWcsXFxuc3ZnLFxcbnZpZGVvLFxcbmNhbnZhcyxcXG5hdWRpbyxcXG5pZnJhbWUsXFxuZW1iZWQsXFxub2JqZWN0IHtcXG4gIGRpc3BsYXk6IGJsb2NrOyAvKiAxICovXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAvKiAyICovXFxufVxcblxcbi8qXFxuQ29uc3RyYWluIGltYWdlcyBhbmQgdmlkZW9zIHRvIHRoZSBwYXJlbnQgd2lkdGggYW5kIHByZXNlcnZlIHRoZWlyIGludHJpbnNpYyBhc3BlY3QgcmF0aW8uIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxcbiovXFxuXFxuaW1nLFxcbnZpZGVvIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLypcXG5FbnN1cmUgdGhlIGRlZmF1bHQgYnJvd3NlciBiZWhhdmlvciBvZiB0aGUgYGhpZGRlbmAgYXR0cmlidXRlLlxcbiovXFxuXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCIsbnVsbF0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBMb2NTdG9yYWdlKCkge1xuICAvL1xufVxuXG5Mb2NTdG9yYWdlLnByb3RvdHlwZS5zYXZlID0gZnVuY3Rpb24gKG9iaikge1xuICBjb25zdCBsYWJlbCA9IG9iai5jb25zdHJ1Y3Rvci5uYW1lO1xuICBjb25zdCBpZCA9IG9iai5pZCB8fCAnJztcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYCR7bGFiZWx9XyR7aWR9YCwgSlNPTi5zdHJpbmdpZnkob2JqKSk7XG59O1xuXG5Mb2NTdG9yYWdlLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpO1xufTtcblxuTG9jU3RvcmFnZS5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKGtleSkge1xuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xufTtcblxuTG9jU3RvcmFnZS5wcm90b3R5cGUucmVtb3ZlUHJvamVjdCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgY29uc3Qga2V5cyA9IHRoaXMuZ2V0KGtleSkudG9kb3MubWFwKChpZCkgPT4gYFRvZG9fJHtpZH1gKTtcbiAgWy4uLmtleXMsIGtleV0uZm9yRWFjaCgoaykgPT4gdGhpcy5yZW1vdmUoaykpO1xufTtcblxuTG9jU3RvcmFnZS5wcm90b3R5cGUuaXNFbXB0eSA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGxvY2FsU3RvcmFnZS5sZW5ndGggPT09IDA7XG59O1xuXG4vLyBUT0RPOiBpcyBpdCBiZXR0ZXIgdG8gc2F2ZSBtYW5hZ2VyLCBwcm9qZWN0cywgdG9kb3Mgc2VwYXJhdGVseT9cblxuY29uc3Qgc3RvcmFnZSA9IG5ldyBMb2NTdG9yYWdlKCk7XG5cbmV4cG9ydCBkZWZhdWx0IExvY1N0b3JhZ2U7XG5leHBvcnQgeyBzdG9yYWdlIH07XG4iLCJpbXBvcnQgbW9kYWxFbCBmcm9tICcuL2NvbXBvbmVudHMvbW9kYWwnO1xuaW1wb3J0IHByb2plY3RGb3JtIGZyb20gJy4vY29tcG9uZW50cy9wcm9qZWN0Rm9ybSc7XG5pbXBvcnQgdG9kb0Zvcm0gZnJvbSAnLi9jb21wb25lbnRzL3RvZG9Gb3JtJztcbmltcG9ydCBnZXRTY3JvbGxXaWR0aCBmcm9tICcuL3V0aWxzL2dldFNjcm9sbFdpZHRoJztcblxuZnVuY3Rpb24gTW9kYWwoKSB7XG4gIC8vXG59XG5cbmZ1bmN0aW9uIGluc2VydEhlbHBlclN0eWxlcygpIHtcbiAgY29uc3Qgc3R5bGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgc3R5bGVzLmlubmVySFRNTCA9IGBcbiAgICA6cm9vdCB7IC0tc2Nyb2xsLXdpZHRoOiAke2dldFNjcm9sbFdpZHRoKCl9cHg7IH1cblxuICAgIC5ib2R5LXBhZGRpbmctZml4IHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLXNjcm9sbC13aWR0aCk7XG4gICAgfVxuICBgO1xuICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHN0eWxlcyk7XG59XG5cbk1vZGFsLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKCkge1xuICBpbnNlcnRIZWxwZXJTdHlsZXMoKTtcbiAgW3Byb2plY3RGb3JtLCB0b2RvRm9ybV0uZm9yRWFjaCgoY29uZmlnKSA9PiB7XG4gICAgdGhpcy5yZW5kZXJNb2RhbChjb25maWcpO1xuICB9KTtcbiAgdGhpcy5hZGRIYW5kbGVycygpO1xufTtcblxuTW9kYWwucHJvdG90eXBlLnJlbmRlck1vZGFsID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICBkb2N1bWVudC5ib2R5Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgbW9kYWxFbChjb25maWcpKTtcbn07XG5cbk1vZGFsLnByb3RvdHlwZS5vcGVuTW9kYWwgPSBmdW5jdGlvbiAobW9kYWwpIHtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdvdmVyZmxvdy1oaWRkZW4nLCAnYm9keS1wYWRkaW5nLWZpeCcpO1xuICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnZmxleCcpO1xufTtcblxuTW9kYWwucHJvdG90eXBlLmNsb3NlTW9kYWwgPSBmdW5jdGlvbiAobW9kYWwpIHtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdvdmVyZmxvdy1oaWRkZW4nLCAnYm9keS1wYWRkaW5nLWZpeCcpO1xuICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnZmxleCcpO1xufTtcblxuTW9kYWwucHJvdG90eXBlLmNsb3NlQWxsTW9kYWxzID0gZnVuY3Rpb24gKCkge1xuICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmpzLW1vZGFsJykgfHwgW10pLmZvckVhY2goKG1vZGFsKSA9PiB7XG4gICAgdGhpcy5jbG9zZU1vZGFsKG1vZGFsKTtcbiAgfSk7XG59O1xuXG5Nb2RhbC5wcm90b3R5cGUuYWRkSGFuZGxlcnMgPSBmdW5jdGlvbiAoKSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgLy8gb3BlbiBtb2RhbCBieSBbZGF0YS1tb2RhbC10YXJnZXQ9XCJtb2RhbF9pZFwiXVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGNvbnN0IHsgdGFyZ2V0IH0gPSBlO1xuICAgICAgaWYgKHRhcmdldC5jbG9zZXN0KCdbZGF0YS1tb2RhbC10YXJnZXRdJykpIHtcbiAgICAgICAgY29uc3QgaWQgPSB0YXJnZXQuY2xvc2VzdCgnW2RhdGEtbW9kYWwtdGFyZ2V0XScpLmRhdGFzZXQubW9kYWxUYXJnZXQ7XG4gICAgICAgIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICAgICAgICB0aGlzLm9wZW5Nb2RhbChtb2RhbCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBjbG9zZSBtb2RhbCBieSBbZGF0YS1tb2RhbC1jbG9zZXJdXG4gICAgLy8gVE9ETzogY2hlY2sgZm9yIG5ld2x5IGNyZWF0ZWQgaXRlbXM7IHVzZSBldmVudCBkZWxlZ2F0aW9uP1xuICAgIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1tb2RhbC1jbG9zZXJdJykgfHwgW10pLmZvckVhY2goKGNsb3NlcikgPT4ge1xuICAgICAgY29uc3QgbW9kYWwgPSBjbG9zZXIuY2xvc2VzdCgnLmpzLW1vZGFsJyk7XG5cbiAgICAgIGNsb3Nlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy5jbG9zZU1vZGFsKG1vZGFsKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gY2xvc2UgbW9kYWwgYnkgRXNjXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuICAgICAgY29uc3QgZSA9IGV2ZW50IHx8IHdpbmRvdy5ldmVudDtcblxuICAgICAgaWYgKGUuY29kZSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgdGhpcy5jbG9zZUFsbE1vZGFscygpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsO1xuIiwiaW1wb3J0IHsgc3RvcmFnZSB9IGZyb20gJy4vTG9jU3RvcmFnZSc7XG5pbXBvcnQgVG9kbyBmcm9tICcuL1RvZG8nO1xuaW1wb3J0IGdlbmVyYXRlSWQgZnJvbSAnLi91dGlscy9pZCc7XG5pbXBvcnQgdHJpbVN0ciBmcm9tICcuL3V0aWxzL3RyaW1TdHInO1xuXG5mdW5jdGlvbiBQcm9qZWN0KGRhdGEpIHtcbiAgLy8gVE9ETzogZG8gSSBuZWVkIHRvIGFkZCB0b2RvcyBwYXJhbT9cbiAgLy8gVE9ETzogcmVwbGFjZSBkYXRhIG9iamVjdCB3aXRoIHsuLi59IGxpa2UgaW4gUHJvamVjdHNNYW5hZ2VyIGNvbnN0cnVjdG9yXG4gIGNvbnN0IHsgaWQsIHRpdGxlLCB0b2RvcyB9ID0gZGF0YTtcblxuICB0aGlzLmlkID0gaWQgfHwgZ2VuZXJhdGVJZCgpO1xuICB0aGlzLnRpdGxlID0gdHJpbVN0cih0aXRsZSk7IC8vIG9yICdVbnRpdGxlZCc/XG4gIHRoaXMudG9kb3MgPSB0b2RvcyB8fCBbXTtcbn1cblxuUHJvamVjdC5wcm90b3R5cGUuc3RvcmFnZSA9IHN0b3JhZ2U7XG5cbi8vIFRPRE86IGl0J3Mgbm90IGNsZWFyIGlzIGl0IGEgVG9kbyBpdGVtIG9yIHt9XG5Qcm9qZWN0LnByb3RvdHlwZS5hZGRUb2RvID0gZnVuY3Rpb24gKHRvZG9fKSB7XG4gIC8vIFRPRE86IGRvIHNvbWV0aGluZyB3aXRoIHBhcmFtIHJlYXNzaWdubWVudFxuICBsZXQgdG9kbyA9IHRvZG9fO1xuICAvLyBUT0RPOiBub3Qgc3VyZSBhYm91dCBuZWVkIG9mIGNoZWNrIGZvciAnVG9kbycgb2JqZWN0XG4gIC8vIHVzZSBpbiByZW5kZXIgbmV3IHRvZG8gYWxyZWFkeSBzbyBiZSBhd2FyZSFcbiAgaWYgKCEodG9kbyBpbnN0YW5jZW9mIFRvZG8pKSB7XG4gICAgdG9kbyA9IG5ldyBUb2RvKHRvZG8pO1xuICB9XG4gIHRoaXMudG9kb3MucHVzaCh0b2RvLmlkKTtcbiAgLy8gTk9URTogbmVlZCB0byBhZGQgc3RvcmFnZSBvYmogdG8gcHJvdG8hXG4gIHRoaXMuc3RvcmFnZS5zYXZlKHRvZG8pO1xuICB0aGlzLnNhdmUoKTtcblxuICByZXR1cm4gdG9kby5pZDtcbn07XG5cblByb2plY3QucHJvdG90eXBlLnJlbW92ZVRvZG8gPSBmdW5jdGlvbiAoaWQpIHtcbiAgdGhpcy50b2RvcyA9IHRoaXMudG9kb3MuZmlsdGVyKChpKSA9PiBpICE9PSBpZCk7XG4gIHRoaXMuc3RvcmFnZS5yZW1vdmUoYFRvZG9fJHtpZH1gKTtcbiAgdGhpcy5zYXZlKCk7XG59O1xuXG5Qcm9qZWN0LnByb3RvdHlwZS5nZXRSZXN0b3JlZFRvZG8gPSBmdW5jdGlvbiAoaWQpIHtcbiAgY29uc3Qgb2JqID0gdGhpcy5zdG9yYWdlLmdldChgVG9kb18ke2lkfWApO1xuICByZXR1cm4gbmV3IFRvZG8ob2JqKTtcbn07XG5cbi8vIFRPRE86IG1heWJlIGF2b2lkIHJlbW92aW5nIHRvZG8gZnJvbSBzdG9yYWdlP1xuLy8gVE9ETzogbWF5YmUgcGFzcyBwcm9qZWN0SWQ/XG5Qcm9qZWN0LnByb3RvdHlwZS5tb3ZlVG9kbyA9IGZ1bmN0aW9uICh0b2RvLCBwcm9qZWN0KSB7XG4gIGNvbnNvbGUud2FybignV0FSTklORyEgLm1vdmVUb2RvKCkgZG9lcyBub3Qgd29yayB5ZXQhJyk7XG4gIHRoaXMucmVtb3ZlVG9kbyh0b2RvLmlkKTtcbiAgcHJvamVjdC5hZGRUb2RvKHRvZG8pO1xufTtcblxuUHJvamVjdC5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgT2JqZWN0LmFzc2lnbih0aGlzLCBkYXRhKTtcbiAgdGhpcy5zYXZlKCk7XG59O1xuXG5Qcm9qZWN0LnByb3RvdHlwZS5zYXZlID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLnN0b3JhZ2Uuc2F2ZSh0aGlzKTtcbn07XG5cblByb2plY3QucHJvdG90eXBlLmxvYWREYXRhID0gZnVuY3Rpb24gKGpzb24pIHtcbiAgLy8gVE9ETzogZG8gSSBuZWVkIHRoaXMgY2hlY2s/XG4gIC8vIFRPRE86IGFjdHVhbGx5IGNhbiBoYW5kbGUgYXJyYXkvb2JqZWN0IGNhc2VzIHdpdGhcbiAgLy8gY29uc29sZS5sb2coanNvbi5jb25zdHJ1Y3Rvci5uYW1lKSBvciBqc29uIGluc3RhbmNlb2YgQXJyYXk7XG4gIHRyeSB7XG4gICAganNvbi5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICB0aGlzLmFkZFRvZG8obmV3IFRvZG8oaXRlbSkpO1xuICAgIH0pO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zb2xlLndhcm4oJ1dBUk5JTkchIFJlcXVpcmUgYW4gYXJyYXkgb2Ygb2JqZWN0c1xcbicsIGVycik7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7XG4iLCJpbXBvcnQgeyBzdG9yYWdlIH0gZnJvbSAnLi9Mb2NTdG9yYWdlJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vUHJvamVjdCc7XG5cbmZ1bmN0aW9uIFByb2plY3RzTWFuYWdlcih7IHByb2plY3RzLCBkZWZhdWx0UHJvamVjdCwgY3VycmVudFByb2plY3QgfSkge1xuICB0aGlzLnByb2plY3RzID0gcHJvamVjdHMgfHwgW107XG4gIHRoaXMuZGVmYXVsdFByb2plY3QgPSBkZWZhdWx0UHJvamVjdCB8fCBudWxsO1xuICB0aGlzLmN1cnJlbnRQcm9qZWN0ID0gY3VycmVudFByb2plY3QgfHwgbnVsbDtcbn1cblxuUHJvamVjdHNNYW5hZ2VyLnByb3RvdHlwZS5zdG9yYWdlID0gc3RvcmFnZTtcblxuUHJvamVjdHNNYW5hZ2VyLnByb3RvdHlwZS5zYXZlID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLnN0b3JhZ2Uuc2F2ZSh0aGlzKTtcbn07XG5cblByb2plY3RzTWFuYWdlci5wcm90b3R5cGUuYWRkUHJvamVjdCA9IGZ1bmN0aW9uIChpZCkge1xuICB0aGlzLnByb2plY3RzLnB1c2goaWQpO1xuICB0aGlzLnNhdmUoKTtcbn07XG5cbi8vIFRPRE86IGFkZCB3YXJuaW5nIGFib3V0IGRlbGV0aW5nIHtufSB0b2RvIGl0ZW1zXG5Qcm9qZWN0c01hbmFnZXIucHJvdG90eXBlLmRlbGV0ZVByb2plY3QgPSBmdW5jdGlvbiAoaWQpIHtcbiAgaWYgKGlkID09PSB0aGlzLmRlZmF1bHRQcm9qZWN0KSB7XG4gICAgY29uc29sZS53YXJuKCdXQVJOSU5HOiBDYW5ub3QgZGVsZXRlIGRlZmF1bHQgcHJvamVjdCcpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpZCA9PT0gdGhpcy5jdXJyZW50UHJvamVjdCkge1xuICAgIHRoaXMuc2V0Q3VycmVudFByb2plY3QodGhpcy5kZWZhdWx0UHJvamVjdCk7XG4gIH1cblxuICB0aGlzLnByb2plY3RzID0gdGhpcy5wcm9qZWN0cy5maWx0ZXIoKGkpID0+IGkgIT09IGlkKTtcbiAgdGhpcy5zYXZlKCk7XG5cbiAgdGhpcy5zdG9yYWdlLnJlbW92ZVByb2plY3QoYFByb2plY3RfJHtpZH1gKTtcbn07XG5cblByb2plY3RzTWFuYWdlci5wcm90b3R5cGUuZ2V0UmVzdG9yZWRQcm9qZWN0ID0gZnVuY3Rpb24gKGlkKSB7XG4gIHJldHVybiBuZXcgUHJvamVjdCh0aGlzLnN0b3JhZ2UuZ2V0KGBQcm9qZWN0XyR7aWR9YCkpO1xufTtcblxuUHJvamVjdHNNYW5hZ2VyLnByb3RvdHlwZS5zZXRDdXJyZW50UHJvamVjdCA9IGZ1bmN0aW9uIChpZCkge1xuICB0aGlzLmN1cnJlbnRQcm9qZWN0ID0gaWQ7XG4gIHRoaXMuc2F2ZSgpO1xufTtcblxuY29uc3QgcHJvamVjdHNNYW5hZ2VyID0gKGZ1bmN0aW9uIGluaXRQTSgpIHtcbiAgbGV0IHBtO1xuXG4gIGlmIChzdG9yYWdlLmlzRW1wdHkoKSkge1xuICAgIHBtID0gbmV3IFByb2plY3RzTWFuYWdlcih7fSk7XG4gICAgY29uc3QgZGVmYXV0UHJvamVjdCA9IG5ldyBQcm9qZWN0KHsgdGl0bGU6ICdJbmJveCcgfSk7XG4gICAgZGVmYXV0UHJvamVjdC5zYXZlKCk7XG4gICAgY29uc3QgeyBpZCB9ID0gZGVmYXV0UHJvamVjdDtcbiAgICBwbS5kZWZhdWx0UHJvamVjdCA9IGlkO1xuICAgIHBtLmN1cnJlbnRQcm9qZWN0ID0gaWQ7XG4gICAgcG0uYWRkUHJvamVjdChpZCk7XG4gICAgLy8gZGVmYXV0UHJvamVjdC5sb2FkRGF0YShkZW1vVG9kb3NEYXRhKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBkYXRhID0gc3RvcmFnZS5nZXQoJ1Byb2plY3RzTWFuYWdlcl8nKTtcbiAgICBwbSA9IG5ldyBQcm9qZWN0c01hbmFnZXIoZGF0YSk7XG4gIH1cblxuICByZXR1cm4gcG07XG59KSgpO1xuXG5leHBvcnQgeyBwcm9qZWN0c01hbmFnZXIgfTtcbmV4cG9ydCBkZWZhdWx0IFByb2plY3RzTWFuYWdlcjtcbiIsImltcG9ydCB7IHN0b3JhZ2UgfSBmcm9tICcuL0xvY1N0b3JhZ2UnO1xuaW1wb3J0IGdlbmVyYXRlSWQgZnJvbSAnLi91dGlscy9pZCc7XG5pbXBvcnQgdHJpbVN0ciBmcm9tICcuL3V0aWxzL3RyaW1TdHInO1xuXG5mdW5jdGlvbiBUb2RvKGRhdGEpIHtcbiAgY29uc3QgeyBpZCwgdGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5ID0gJ2xvdycsIGNvbXBsZXRlIH0gPSBkYXRhO1xuXG4gIHRoaXMuaWQgPSBpZCB8fCBnZW5lcmF0ZUlkKCk7XG4gIHRoaXMudGl0bGUgPSB0cmltU3RyKHRpdGxlKTtcbiAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZSB8fCBuZXcgRGF0ZSgpO1xuICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIHRoaXMuY29tcGxldGUgPSBjb21wbGV0ZTsgLy8gVE9ETzogbm90IHN1cmUgKGNvbXBsZXRlID09PSAnb24nIHdhcyBoZXJlKVxufVxuXG5Ub2RvLnByb3RvdHlwZS5zdG9yYWdlID0gc3RvcmFnZTtcblxuVG9kby5wcm90b3R5cGUuc2F2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5zdG9yYWdlLnNhdmUodGhpcyk7XG59O1xuXG5Ub2RvLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAvLyBUT0RPOiBhc3N1bWUgZGF0YSBkb2Vzbid0IGhhdmUgdW5kZWZpbmVkIHZhbHVlc1xuICBPYmplY3QuYXNzaWduKHRoaXMsIGRhdGEpO1xuICB0aGlzLnNhdmUoKTtcbn07XG5cbi8vIFRPRE86IHJlbW92ZSBpdD9cblRvZG8ucHJvdG90eXBlLnRvZ2dsZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5jb21wbGV0ZSA9ICF0aGlzLmNvbXBsZXRlO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9kbztcbiIsImltcG9ydCB7IHN0b3JhZ2UgfSBmcm9tICcuL0xvY1N0b3JhZ2UnO1xuaW1wb3J0IHsgcHJvamVjdHNNYW5hZ2VyIH0gZnJvbSAnLi9Qcm9qZWN0c01hbmFnZXInO1xuaW1wb3J0IGxheW91dCBmcm9tICcuL2NvbXBvbmVudHMvbGF5b3V0JztcbmltcG9ydCBjaGVja2JveCBmcm9tICcuL2NvbXBvbmVudHMvY2hlY2tib3gnO1xuaW1wb3J0IGhhbmRsZXJzIGZyb20gJy4vaGFuZGxlcnMnO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4vTW9kYWwnO1xuXG5mdW5jdGlvbiBVSSgpIHtcbiAgLy9cbn1cblxuLy8gTk9URTogZG9lcyBpdCBtYWtlIHNlbnNlIHRvIHN0b3JlIHBtL3N0b3JhZ2UgaW4gcHJvdG90eXBlP1xuVUkucHJvdG90eXBlLnBtID0gcHJvamVjdHNNYW5hZ2VyO1xuVUkucHJvdG90eXBlLnN0b3JhZ2UgPSBzdG9yYWdlO1xuXG5VSS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpLmNsYXNzTGlzdC5hZGQoJ3Njcm9sbC1zbW9vdGgnKTtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKFxuICAgICdyZWxhdGl2ZScsXG4gICAgJ21pbi1oLXNjcmVlbicsXG4gICAgJ2ZsZXgnLFxuICAgICdmbGV4LWNvbCcsXG4gICAgJ2ZvbnQtc2FucycsXG4gICAgJ2JnLXppbmMtNTAnLFxuICAgICdzZWxlY3Rpb246YmctcGluay0zMDAnXG4gICk7XG5cbiAgZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGxheW91dCk7XG4gIG5ldyBNb2RhbCgpLmluaXQoKTtcbiAgdGhpcy5hZGRIYW5kbGVycygpO1xufTtcblxuZnVuY3Rpb24gcmVwbGFjZU9sZEl0ZW0oY29udGFpbmVyLCBpZCwgdGVtcGxhdGUpIHtcbiAgY29uc3Qgb2xkSXRlbSA9IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKGAjJHtpZH1gKTtcbiAgaWYgKG9sZEl0ZW0gIT09IG51bGwpIHtcbiAgICBvbGRJdGVtLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJlbmQnLCB0ZW1wbGF0ZSk7XG4gICAgb2xkSXRlbS5yZW1vdmUoKTtcbiAgfSBlbHNlIHtcbiAgICBjb250YWluZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCB0ZW1wbGF0ZSk7XG4gIH1cbn1cblxuVUkucHJvdG90eXBlLnJlbmRlclByb2plY3QgPSBmdW5jdGlvbiAoaWQpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXByb2plY3RzLWxpc3QnKTtcbiAgY29uc3QgeyB0aXRsZSB9ID0gdGhpcy5zdG9yYWdlLmdldChgUHJvamVjdF8ke2lkfWApO1xuICAvLyBUT0RPOiBnZXQgaWQsIHRpdGxlXG4gIGNvbnN0IHRlbXBsYXRlID0gYFxuICAgIDxkaXYgaWQ9XCIke2lkfVwiIGNsYXNzPVwianMtcHJvamVjdC1pdGVtICR7aWQgPT09IHRoaXMucG0uY3VycmVudFByb2plY3QgPyAndGV4dC1vcmFuZ2UtNjAwJyA6ICcnfVxuICAgICAgbWItNCBwLTQgZ3JvdXAgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIGJnLXdoaXRlIHJvdW5kZWQtbGcgc2hhZG93LWxnIGhvdmVyOmN1cnNvci1wb2ludGVyXG4gICAgXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cInRleHQtbGcgZm9udC1ib2xkXCI+JHt0aXRsZX08L3NwYW4+XG4gICAgICA8ZGl2IGNsYXNzPVwic3BhY2UteC0yXCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzcz1cImpzLWJ0bi1wcm9qZWN0LWVkaXQgb3BhY2l0eS0wIHRleHQtc2xhdGUtNDAwIGdyb3VwLWhvdmVyOm9wYWNpdHktMTAwIGhvdmVyOnRleHQtc2t5LTUwMCB0cmFuc2l0aW9uXCJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICB0aXRsZT1cIkVkaXQgcHJvamVjdFwiXG4gICAgICAgICAgZGF0YS1tb2RhbC10YXJnZXQ9XCJtb2RhbC1hZGQtcHJvamVjdFwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3ZnIGNsYXNzPVwidy02IGgtNlwiPjx1c2UgeGxpbms6aHJlZj1cIiNpY29uLWVkaXRcIj48L3VzZT48L3N2Zz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzcz1cImpzLWJ0bi1wcm9qZWN0LWRlbGV0ZSBvcGFjaXR5LTAgdGV4dC1zbGF0ZS00MDAgZ3JvdXAtaG92ZXI6b3BhY2l0eS0xMDAgaG92ZXI6dGV4dC1yZWQtNTAwIHRyYW5zaXRpb25cIlxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIHRpdGxlPVwiRGVsZXRlIHByb2plY3RcIlxuICAgICAgICA+XG4gICAgICAgICAgPHN2ZyBjbGFzcz1cInctNiBoLTZcIj48dXNlIHhsaW5rOmhyZWY9XCIjaWNvbi10cmFzaFwiPjwvdXNlPjwvc3ZnPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PmA7XG4gIC8vIFRPRE86IHNob3cgdG9kb3MgY291bnQ/XG5cbiAgLy8gcmVwbGFjZSBvbGQgcHJvamVjdCBub2RlIG9uICdlZGl0L3VwZGF0ZScgYWN0aW9uXG4gIHJlcGxhY2VPbGRJdGVtKGNvbnRhaW5lciwgaWQsIHRlbXBsYXRlKTtcbn07XG5cblVJLnByb3RvdHlwZS5yZW5kZXJUb2RvID0gZnVuY3Rpb24gKGlkKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy10b2RvLWxpc3QnKTtcbiAgY29uc3QgeyB0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlIH0gPSB0aGlzLnN0b3JhZ2UuZ2V0KGBUb2RvXyR7aWR9YCk7XG4gIGNvbnN0IHRlbXBsYXRlID0gYFxuICAgIDxkaXYgaWQ9XCIke2lkfVwiXG4gICAgICBjbGFzcz1cImpzLXRvZG8taXRlbSBtYi00IHAtNCBiZy13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdy1sZ1wiXG4gICAgPlxuICAgICAgPGRpdj4ke3RpdGxlfTwvZGl2PlxuICAgICAgPGRpdj4ke2R1ZURhdGV9PC9kaXY+XG4gICAgICA8ZGl2PnByaW9yaXR5OiAke3ByaW9yaXR5fTwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgJHtjaGVja2JveCgnQ29tcGxldGU/JywgJ2NvbXBsZXRlJywgYGNoZWNrXyR7aWR9YCwgY29tcGxldGUpfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3M9XCJqcy1idG4tdG9kby1lZGl0IHVuZGVybGluZSBpdGFsaWMgdGV4dC1zbGF0ZS00MDAgaG92ZXI6dGV4dC1za3ktNTAwIHRyYW5zaXRpb25cIlxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIHRpdGxlPVwiRWRpdCB0b2RvXCJcbiAgICAgICAgICBkYXRhLW1vZGFsLXRhcmdldD1cIm1vZGFsLWFkZC10b2RvXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzdmcgY2xhc3M9XCJ3LTYgaC02XCI+PHVzZSB4bGluazpocmVmPVwiI2ljb24tZWRpdFwiPjwvdXNlPjwvc3ZnPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzPVwianMtYnRuLXRvZG8tZGVsZXRlIHVuZGVybGluZSBpdGFsaWMgdGV4dC1zbGF0ZS00MDAgaG92ZXI6dGV4dC1yZWQtNTAwIHRyYW5zaXRpb25cIlxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIHRpdGxlPVwiRGVsZXRlIHRvZG9cIlxuICAgICAgICA+XG4gICAgICAgICAgPHN2ZyBjbGFzcz1cInctNiBoLTZcIj48dXNlIHhsaW5rOmhyZWY9XCIjaWNvbi10cmFzaFwiPjwvdXNlPjwvc3ZnPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgO1xuXG4gIC8vIFRPRE86IHJlZmFjdG9yIHJlbmRlciBtZXRob2RzXG4gIC8vIHJlcGxhY2Ugb2xkIHByb2plY3Qgbm9kZSBvbiAnZWRpdC91cGRhdGUnIGFjdGlvblxuICByZXBsYWNlT2xkSXRlbShjb250YWluZXIsIGlkLCB0ZW1wbGF0ZSk7XG59O1xuXG5VSS5wcm90b3R5cGUucmVuZGVyUHJvamVjdFRvZG9zID0gZnVuY3Rpb24gKHByb2plY3RJZCA9IHRoaXMucG0uY3VycmVudFByb2plY3QpIHtcbiAgY29uc3QgZGF0YSA9IHRoaXMuc3RvcmFnZS5nZXQoYFByb2plY3RfJHtwcm9qZWN0SWR9YCk7XG4gIGRhdGEudG9kb3MuZm9yRWFjaCgoaWQpID0+IHtcbiAgICB0aGlzLnJlbmRlclRvZG8oaWQpO1xuICB9KTtcbn07XG5cblVJLnByb3RvdHlwZS5hZGRIYW5kbGVycyA9IGZ1bmN0aW9uICgpIHtcbiAgaGFuZGxlcnModGhpcyk7XG59O1xuXG5jb25zdCB1aSA9IG5ldyBVSSgpO1xuXG5leHBvcnQgeyB1aSB9O1xuZXhwb3J0IGRlZmF1bHQgVUk7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjaGVja2JveChsYWJlbCwgbmFtZSwgaWQsIGNoZWNrZWQpIHtcbiAgcmV0dXJuIGBcbiAgICA8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1zdGFydFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImZsZXggaXRlbXMtY2VudGVyIGgtNSBwdC1bM3B4XVwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBpZD1cIiR7aWR9XCJcbiAgICAgICAgICBuYW1lPVwiJHtuYW1lfVwiXG4gICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICBjbGFzcz1cImpzLXRvZG8tdG9nZ2xlIGZvY3VzOnJpbmctc2t5LTUwMCBoLTQgdy00IHRleHQtc2t5LTUwMCBib3JkZXItc2xhdGUtMzAwIHJvdW5kZWRcIlxuICAgICAgICAgICR7Y2hlY2tlZCA/ICdjaGVja2VkJyA6ICcnfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibWwtM1wiPlxuICAgICAgICA8bGFiZWwgZm9yPVwiJHtpZH1cIiBjbGFzcz1cImZvbnQtbWVkaXVtIHRleHQtc2xhdGUtNzAwXCI+JHtsYWJlbH08L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGA7XG59XG4iLCJmdW5jdGlvbiBmb290ZXIoKSB7XG4gIHJldHVybiBgXG4gIDxmb290ZXIgY2xhc3M9XCJtdC1hdXRvIGJvcmRlci10IHRleHQtY2VudGVyXCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lciBteC1hdXRvIHB5LTZcIj5cbiAgICAgIDxhXG4gICAgICAgIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZ3JlcW92L29kaW4tdG9kby1saXN0XCJcbiAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgY2xhc3M9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBzcGFjZS14LTFcIlxuICAgICAgPlxuICAgICAgICA8c3ZnIGNsYXNzPVwidy02IGgtNlwiPjx1c2UgeGxpbms6aHJlZj1cIiNpY29uLWNvZGVcIj48L3VzZT48L3N2Zz5cbiAgICAgICAgPHNwYW4+R2l0aHViPC9zcGFuPlxuICAgICAgPC9hPlxuICAgIDwvZGl2PlxuICA8L2Zvb3Rlcj5cbiAgYDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZm9vdGVyKCk7XG4iLCJmdW5jdGlvbiBoZWFkZXIoKSB7XG4gIHJldHVybiBgXG4gICAgPGhlYWRlciBjbGFzcz1cIm1iLTYgYm9yZGVyLWJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXIgbXgtYXV0byBweS02IHB4LTRcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJibG9jayB0ZXh0LTN4bCBmb250LWJvbGRcIj5Ub2RvIEFwcDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICBgO1xufVxuXG5leHBvcnQgZGVmYXVsdCBoZWFkZXIoKTtcbiIsImltcG9ydCBzcHJpdGUgZnJvbSAnLi9zcHJpdGUnO1xuaW1wb3J0IGhlYWRlciBmcm9tICcuL2hlYWRlcic7XG5pbXBvcnQgbWFpbiBmcm9tICcuL21haW4nO1xuaW1wb3J0IGZvb3RlciBmcm9tICcuL2Zvb3Rlcic7XG5cbi8vIFRPRE86IHNldCBkZWZhdWx0IGRhdGUgdmFsdWVcbi8vIFRPRE86IGFkZCBzZWxlY3Rib3ggdG8gdG9kbyBmb3JtP1xuXG5mdW5jdGlvbiBsYXlvdXQoKSB7XG4gIHJldHVybiBgXG4gICAgJHtzcHJpdGV9XG4gICAgJHtoZWFkZXJ9XG4gICAgJHttYWlufVxuICAgICR7Zm9vdGVyfVxuICBgO1xufVxuXG5leHBvcnQgZGVmYXVsdCBsYXlvdXQoKTtcbiIsImZ1bmN0aW9uIG1haW4oKSB7XG4gIHJldHVybiBgXG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXIgbXgtYXV0byBtYi02IHB4LTRcIj5cbiAgICA8ZGl2IGNsYXNzPVwibWQ6Z3JpZCBtZDpnYXAtNCBtZDpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtWzFmcl8yZnJdXCI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDIgY2xhc3M9XCJteS00IHRleHQtM3hsIGZvbnQtYm9sZFwiPlByb2plY3RzPC9oMj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwianMtcHJvamVjdHMtbGlzdFwiPjwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktZW5kIHNwYWNlLXgtMlwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzPVwiaW5saW5lLWZsZXggcHgtNCBweS0yIHRleHQtd2hpdGUgYmctb3JhbmdlLTYwMCBob3ZlcjpiZy1vcmFuZ2UtNzAwIGFjdGl2ZTpiZy1vcmFuZ2UtODAwIHJvdW5kZWQtbWQgdHJhbnNpdGlvbiBzZWxlY3Qtbm9uZVwiXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGRhdGEtbW9kYWwtdGFyZ2V0PVwibW9kYWwtYWRkLXByb2plY3RcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIEFkZCBwcm9qZWN0XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDIgY2xhc3M9XCJteS00IHRleHQtM3hsIGZvbnQtYm9sZFwiPlRvZG9zPC9oMj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImpzLXRvZG8tbGlzdFwiPjwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktZW5kIHNwYWNlLXgtMlwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzPVwianMtYnRuLWFkZC10b2RvIGlubGluZS1mbGV4IHB4LTQgcHktMiB0ZXh0LXdoaXRlIGJnLW9yYW5nZS02MDAgaG92ZXI6Ymctb3JhbmdlLTcwMCBhY3RpdmU6Ymctb3JhbmdlLTgwMCByb3VuZGVkLW1kIHRyYW5zaXRpb24gc2VsZWN0LW5vbmVcIlxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBkYXRhLW1vZGFsLXRhcmdldD1cIm1vZGFsLWFkZC10b2RvXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBBZGQgdG9kb1xuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbiAgYDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWFpbigpO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbW9kYWwoeyBpZCwgdGl0bGUsIGJvZHksIGFjdGlvbnMgfSkge1xuICByZXR1cm4gYFxuICAgIDxkaXYgaWQ9XCIke2lkfVwiIGNsYXNzPVwianMtbW9kYWwgaGlkZGVuIF9mbGV4IGZpeGVkIHRvcC0wIGxlZnQtMCBoLXNjcmVlbiB3LXNjcmVlbiBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgcC00IGJnLWJsYWNrLzc1IG92ZXJmbG93LWF1dG9cIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ3LVs0ODBweF0gbWF4LXctZnVsbCBiZy13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdy1sZ1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIHNwYWNlLXgtNCBwLTRcIj5cbiAgICAgICAgICA8aDMgY2xhc3M9XCJ0ZXh0LWxnIGZvbnQtYm9sZFwiPiR7dGl0bGV9PC9oMz5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzcz1cInRleHQtc2xhdGUtNDAwIGhvdmVyOnRleHQtb3JhbmdlLTYwMCB0cmFuc2l0aW9uXCJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgZGF0YS1tb2RhbC1jbG9zZXJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiBjbGFzcz1cImgtNiB3LTZcIiBmaWxsPVwibm9uZVwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIyXCI+XG4gICAgICAgICAgICAgIDxwYXRoIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiIGQ9XCJNNiAxOEwxOCA2TTYgNmwxMiAxMlwiIC8+XG4gICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJvdmVyZmxvdy1hdXRvIHAtNCBib3JkZXItdCBib3JkZXItc2xhdGUtMjAwXCIgc3R5bGU9XCJtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTgycHgpO1wiPlxuICAgICAgICAgICR7Ym9keX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktZW5kIHNwYWNlLXgtMiBwLTQgYm9yZGVyLXQgYm9yZGVyLXNsYXRlLTIwMFwiPlxuICAgICAgICAgICR7YWN0aW9uc31cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYDtcbn1cbiIsImNvbnN0IGlkID0gJ21vZGFsLWFkZC1wcm9qZWN0JztcbmNvbnN0IHRpdGxlID0gJ0FkZCBlbCBwcm9qZWN0byc7XG5cbmNvbnN0IGZvcm0gPSBgXG4gIDxmb3JtIGNsYXNzPVwianMtZm9ybS1hZGQtcHJvamVjdFwiIGlkPVwiYWRkUHJvamVjdEZvcm1cIiBhY3Rpb249XCIjXCI+XG4gICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiaWRcIiB2YWx1ZT1cIlwiIC8+XG5cbiAgICA8bGFiZWwgY2xhc3M9XCJibG9jayBtYi00XCI+XG4gICAgICA8c3BhbiBjbGFzcz1cImJsb2NrIGZvbnQtbWVkaXVtIHRleHQtc2xhdGUtNzAwXCI+UHJvamVjdCB0aXRsZTwvc3Bhbj5cbiAgICAgIDxpbnB1dFxuICAgICAgICBjbGFzcz1cIm10LTEgYmxvY2sgdy1mdWxsIHB4LTMgcHktMiBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLXNsYXRlLTMwMCByb3VuZGVkLW1kIHNoYWRvdy1zbSB0ZXh0LWJhc2UgcGxhY2Vob2xkZXItc2xhdGUtNDAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItc2t5LTUwMCBmb2N1czpyaW5nLTEgZm9jdXM6cmluZy1za3ktNTAwXCJcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBuYW1lPVwidGl0bGVcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIlByb2plY3QgdGl0bGVcIlxuICAgICAgICBhdXRvZm9jdXNcbiAgICAgIC8+XG4gICAgPC9sYWJlbD5cbiAgPC9mb3JtPlxuYDtcbi8vIFRPRE86IGVuYWJsZSBhdXRvZm9jdXNcblxuY29uc3QgYWN0aW9ucyA9IGBcbiAgPGJ1dHRvblxuICAgIGNsYXNzPVwiaW5saW5lLWZsZXggcHgtNCBweS0yIHRleHQtc2xhdGUtNzAwIGJnLXRyYW5zcGFyZW50IGhvdmVyOmJvcmRlci1zbGF0ZS0yMDAgYWN0aXZlOmJvcmRlci1zbGF0ZS00MDAgYWN0aXZlOmJnLXNsYXRlLTIwMCBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IHJvdW5kZWQtbWQgdHJhbnNpdGlvbiBzZWxlY3Qtbm9uZVwiXG4gICAgdHlwZT1cImJ1dHRvblwiXG4gICAgZGF0YS1tb2RhbC1jbG9zZXJcbiAgPlxuICAgIENhbmNlbFxuICA8L2J1dHRvbj5cbiAgPGJ1dHRvblxuICAgIGNsYXNzPVwiaW5saW5lLWZsZXggcHgtNCBweS0yIHRleHQtd2hpdGUgYmctb3JhbmdlLTYwMCBob3ZlcjpiZy1vcmFuZ2UtNzAwIGFjdGl2ZTpiZy1vcmFuZ2UtODAwIHJvdW5kZWQtbWQgdHJhbnNpdGlvbiBzZWxlY3Qtbm9uZVwiXG4gICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgZm9ybT1cImFkZFByb2plY3RGb3JtXCJcbiAgICBkYXRhLW1vZGFsLWNsb3NlclxuICA+XG4gICAgQWRkIHByb2plY3RcbiAgPC9idXR0b24+XG5gO1xuXG5leHBvcnQgZGVmYXVsdCB7IGlkLCB0aXRsZSwgYm9keTogZm9ybSwgYWN0aW9ucyB9O1xuIiwiZnVuY3Rpb24gc3ByaXRlKCkge1xuICByZXR1cm4gYFxuICA8c3ZnIHdpZHRoPVwiMFwiIGhlaWdodD1cIjBcIiBjbGFzcz1cImhpZGRlblwiPlxuICAgIDxzeW1ib2xcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgIHN0cm9rZS13aWR0aD1cIjJcIlxuICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICB3aWR0aD1cIjI0XCJcbiAgICAgIGhlaWdodD1cIjI0XCJcbiAgICAgIGlkPVwiaWNvbi1jb2RlXCJcbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICBkPVwiTTEwIDIwbDQtMTZtNCA0bDQgNC00IDRNNiAxNmwtNC00IDQtNFwiXG4gICAgICA+PC9wYXRoPlxuICAgIDwvc3ltYm9sPlxuICAgIDxzeW1ib2xcbiAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgIHN0cm9rZS13aWR0aD1cIjJcIlxuICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICB3aWR0aD1cIjI0XCJcbiAgICAgIGhlaWdodD1cIjI0XCJcbiAgICAgIGlkPVwiaWNvbi1lZGl0XCJcbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICBkPVwiTTE1LjIzMiA1LjIzMmwzLjUzNiAzLjUzNm0tMi4wMzYtNS4wMzZhMi41IDIuNSAwIDExMy41MzYgMy41MzZMNi41IDIxLjAzNkgzdi0zLjU3MkwxNi43MzIgMy43MzJ6XCJcbiAgICAgID48L3BhdGg+XG4gICAgPC9zeW1ib2w+XG4gICAgPHN5bWJvbFxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICBmaWxsPVwibm9uZVwiXG4gICAgICBzdHJva2U9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgc3Ryb2tlLXdpZHRoPVwiMlwiXG4gICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgIHdpZHRoPVwiMjRcIlxuICAgICAgaGVpZ2h0PVwiMjRcIlxuICAgICAgaWQ9XCJpY29uLXRyYXNoXCJcbiAgICA+XG4gICAgICA8cGF0aFxuICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICBkPVwiTTE5IDdsLS44NjcgMTIuMTQyQTIgMiAwIDAxMTYuMTM4IDIxSDcuODYyYTIgMiAwIDAxLTEuOTk1LTEuODU4TDUgN201IDR2Nm00LTZ2Nm0xLTEwVjRhMSAxIDAgMDAtMS0xaC00YTEgMSAwIDAwLTEgMXYzTTQgN2gxNlwiXG4gICAgICA+PC9wYXRoPlxuICAgIDwvc3ltYm9sPlxuICA8L3N2Zz5cbiAgYDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgc3ByaXRlKCk7XG4iLCJjb25zdCBpZCA9IGBtb2RhbC1hZGQtdG9kb2A7XG5jb25zdCB0aXRsZSA9IGBBZGQgZWwgdG9kbyBhbWlnbyFgO1xuXG5jb25zdCBmb3JtID0gYFxuICA8Zm9ybSBjbGFzcz1cImpzLWZvcm0tYWRkLXRvZG8gc3BhY2UteS00XCIgaWQ9XCJhZGRUb2RvRm9ybVwiIGFjdGlvbj1cIiNcIj5cbiAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJpZFwiIHZhbHVlPVwiXCIgLz5cblxuICAgIDxsYWJlbCBjbGFzcz1cImJsb2NrXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cImJsb2NrIGZvbnQtbWVkaXVtIHRleHQtc2xhdGUtNzAwXCI+VGl0bGU8L3NwYW4+XG4gICAgICA8aW5wdXRcbiAgICAgICAgY2xhc3M9XCJtdC0xIGJsb2NrIHctZnVsbCBweC0zIHB5LTIgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1zbGF0ZS0zMDAgcm91bmRlZC1tZCBzaGFkb3ctc20gdGV4dC1iYXNlIHBsYWNlaG9sZGVyLXNsYXRlLTQwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLXNreS01MDAgZm9jdXM6cmluZy0xIGZvY3VzOnJpbmctc2t5LTUwMFwiXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgbmFtZT1cInRpdGxlXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJUaXRsZVwiXG4gICAgICAgIGF1dG9mb2N1c1xuICAgICAgLz5cbiAgICA8L2xhYmVsPlxuXG4gICAgPGxhYmVsIGNsYXNzPVwiYmxvY2tcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiYmxvY2sgZm9udC1tZWRpdW0gdGV4dC1zbGF0ZS03MDBcIj5EdWUgZGF0ZTwvc3Bhbj5cbiAgICAgIDxpbnB1dFxuICAgICAgICBjbGFzcz1cIm10LTEgYmxvY2sgdy1mdWxsIHB4LTMgcHktMiBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLXNsYXRlLTMwMCByb3VuZGVkLW1kIHNoYWRvdy1zbSB0ZXh0LWJhc2UgcGxhY2Vob2xkZXItc2xhdGUtNDAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItc2t5LTUwMCBmb2N1czpyaW5nLTEgZm9jdXM6cmluZy1za3ktNTAwXCJcbiAgICAgICAgdHlwZT1cImRhdGVcIlxuICAgICAgICBuYW1lPVwiZHVlRGF0ZVwiXG4gICAgICAgIHZhbHVlPVwiMjAyMi0wMy0xNlwiXG4gICAgICAvPlxuICAgIDwvbGFiZWw+XG5cbiAgICA8ZGl2IGNsYXNzPVwiXCI+XG4gICAgICA8bGFiZWwgZm9yPVwicHJpb3JpdHlcIiBjbGFzcz1cImJsb2NrIGZvbnQtbWVkaXVtIHRleHQtc2xhdGUtNzAwXCI+UHJpb3JpdHk8L2xhYmVsPlxuICAgICAgPHNlbGVjdFxuICAgICAgICBpZD1cInByaW9yaXR5XCJcbiAgICAgICAgbmFtZT1cInByaW9yaXR5XCJcbiAgICAgICAgYXV0b2NvbXBsZXRlPVwiY291bnRyeS1uYW1lXCJcbiAgICAgICAgY2xhc3M9XCJtdC0xIGJsb2NrIHctZnVsbCBweS0yIHB4LTMgYm9yZGVyIGJvcmRlci1zbGF0ZS0zMDAgYmctd2hpdGUgcm91bmRlZC1tZCBzaGFkb3ctc20gZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMSBmb2N1czpyaW5nLXNreS01MDAgZm9jdXM6Ym9yZGVyLXNreS01MDBcIlxuICAgICAgPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwibG93XCI+TG93PC9vcHRpb24+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJtaWRkbGVcIj5NaWRkbGU8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImhpZ2hcIj5IaWdoPC9vcHRpb24+XG4gICAgICA8L3NlbGVjdD5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLXN0YXJ0XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIgaC01XCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGlkPVwidG9kb0NvbXBsZXRlXCJcbiAgICAgICAgICBuYW1lPVwiY29tcGxldGVcIlxuICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgY2xhc3M9XCJmb2N1czpyaW5nLXNreS01MDAgaC00IHctNCB0ZXh0LXNreS01MDAgYm9yZGVyLXNsYXRlLTMwMCByb3VuZGVkXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cIm1sLTNcIj5cbiAgICAgICAgPGxhYmVsIGZvcj1cInRvZG9Db21wbGV0ZVwiIGNsYXNzPVwiZm9udC1tZWRpdW0gdGV4dC1zbGF0ZS03MDBcIj5Db21wbGV0ZT88L2xhYmVsPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZm9ybT5cbmA7XG5cbmNvbnN0IGFjdGlvbnMgPSBgXG4gIDxidXR0b25cbiAgICBjbGFzcz1cImlubGluZS1mbGV4IHB4LTQgcHktMiB0ZXh0LXNsYXRlLTcwMCBiZy10cmFuc3BhcmVudCBob3Zlcjpib3JkZXItc2xhdGUtMjAwIGFjdGl2ZTpib3JkZXItc2xhdGUtNDAwIGFjdGl2ZTpiZy1zbGF0ZS0yMDAgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCByb3VuZGVkLW1kIHRyYW5zaXRpb24gc2VsZWN0LW5vbmVcIlxuICAgIHR5cGU9XCJidXR0b25cIlxuICAgIGRhdGEtbW9kYWwtY2xvc2VyXG4gID5cbiAgICBDYW5jZWxcbiAgPC9idXR0b24+XG4gIDxidXR0b25cbiAgICBjbGFzcz1cImlubGluZS1mbGV4IHB4LTQgcHktMiB0ZXh0LXdoaXRlIGJnLW9yYW5nZS02MDAgaG92ZXI6Ymctb3JhbmdlLTcwMCBhY3RpdmU6Ymctb3JhbmdlLTgwMCByb3VuZGVkLW1kIHRyYW5zaXRpb24gc2VsZWN0LW5vbmVcIlxuICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgIGZvcm09XCJhZGRUb2RvRm9ybVwiXG4gICAgZGF0YS1tb2RhbC1jbG9zZXJcbiAgPlxuICAgIEFkZC9VcGRhdGUgdG9kb1xuICA8L2J1dHRvbj5cbmA7XG5cbmV4cG9ydCBkZWZhdWx0IHsgaWQsIHRpdGxlLCBib2R5OiBmb3JtLCBhY3Rpb25zIH07XG4iLCJpbXBvcnQgUHJvamVjdCBmcm9tICcuL1Byb2plY3QnO1xuaW1wb3J0IFRvZG8gZnJvbSAnLi9Ub2RvJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaGFuZGxlcnModWkpIHtcbiAgY29uc3QgeyBwbSwgc3RvcmFnZSB9ID0gdWk7XG5cbiAgZnVuY3Rpb24gc3VibWl0UHJvamVjdEZvcm0oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgcHJvamVjdDtcbiAgICBjb25zdCBmb3JtID0gZS50YXJnZXQ7XG4gICAgY29uc3QgZGF0YSA9IE9iamVjdC5mcm9tRW50cmllcyhuZXcgRm9ybURhdGEoZm9ybSkuZW50cmllcygpKTtcblxuICAgIC8vIE5PVEU6IHVwZGF0ZSBPUiBjcmVhdGUgYWN0aW9uXG4gICAgaWYgKGRhdGEuaWQpIHtcbiAgICAgIHByb2plY3QgPSBwbS5nZXRSZXN0b3JlZFByb2plY3QoZGF0YS5pZCk7XG4gICAgICBwcm9qZWN0LnVwZGF0ZShkYXRhKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvamVjdCA9IG5ldyBQcm9qZWN0KGRhdGEpO1xuICAgICAgcG0uYWRkUHJvamVjdChwcm9qZWN0LmlkKTtcbiAgICB9XG5cbiAgICBwcm9qZWN0LnNhdmUoKTtcbiAgICBmb3JtLnJlc2V0KCk7XG4gICAgZm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImlkXCJdJykudmFsdWUgPSAnJztcbiAgICB1aS5yZW5kZXJQcm9qZWN0KHByb2plY3QuaWQpO1xuICB9XG5cbiAgZnVuY3Rpb24gc3VibWl0VG9kb0Zvcm0oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgdG9kbztcbiAgICBjb25zdCBmb3JtID0gZS50YXJnZXQ7XG4gICAgY29uc3QgZGF0YSA9IE9iamVjdC5mcm9tRW50cmllcyhuZXcgRm9ybURhdGEoZm9ybSkuZW50cmllcygpKTtcbiAgICBkYXRhLmNvbXBsZXRlID0gISFkYXRhLmNvbXBsZXRlOyAvLyBjb252ZXJ0ICdvbicgdG8gdHJ1ZVxuICAgIGNvbnN0IHByb2plY3RJZCA9IHBtLmN1cnJlbnRQcm9qZWN0O1xuICAgIGNvbnN0IHByb2plY3QgPSBwbS5nZXRSZXN0b3JlZFByb2plY3QocHJvamVjdElkKTtcblxuICAgIC8vIE5PVEU6IHVwZGF0ZSBPUiBjcmVhdGUgYWN0aW9uXG4gICAgaWYgKGRhdGEuaWQpIHtcbiAgICAgIHRvZG8gPSBwcm9qZWN0LmdldFJlc3RvcmVkVG9kbyhkYXRhLmlkKTtcbiAgICAgIHRvZG8udXBkYXRlKGRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0b2RvID0gZGF0YTtcbiAgICB9XG5cbiAgICBjb25zdCB0b2RvSWQgPSBwcm9qZWN0LmFkZFRvZG8odG9kbyk7XG4gICAgZm9ybS5yZXNldCgpO1xuICAgIGZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJpZFwiXScpLnZhbHVlID0gJyc7XG4gICAgZm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImNvbXBsZXRlXCJdJykucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJyk7XG4gICAgLy8gVE9ETzogYXZvaWQgc2hha2luZyBzdG9yYWdlIDIgdGltZXMhIChvbiBzYXZlLCBvbiByZW5kZXIpXG4gICAgdWkucmVuZGVyVG9kbyh0b2RvSWQpO1xuICB9XG5cbiAgLy8gVE9ETzogbWF5YmUgYWRkIG1vcmUgcHJlY2lzZSBkb20gbm9kZSwgbm90IGRvY3VtZW50P1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZSkgPT4ge1xuICAgIGNvbnN0IHsgdGFyZ2V0OiBlbCB9ID0gZTtcblxuICAgIGlmIChlbC5jbG9zZXN0KCcuanMtZm9ybS1hZGQtcHJvamVjdCcpKSB7XG4gICAgICBzdWJtaXRQcm9qZWN0Rm9ybShlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZWwuY2xvc2VzdCgnLmpzLWZvcm0tYWRkLXRvZG8nKSkge1xuICAgICAgc3VibWl0VG9kb0Zvcm0oZSk7XG4gICAgfVxuICB9KTtcblxuICBmdW5jdGlvbiByZW1vdmVUb2RvKGVsKSB7XG4gICAgY29uc3QgdG9kb0VsID0gZWwuY2xvc2VzdCgnLmpzLXRvZG8taXRlbScpO1xuICAgIC8vIDEuIGdldCB0b2RvIGlkXG4gICAgY29uc3QgdG9kb0lkID0gdG9kb0VsLmlkO1xuICAgIC8vIDIuIGdldCBwcm9qZWN0IChoaW50OiBjdXJyZW50IHByb2plY3QpXG4gICAgY29uc3QgcHJvamVjdElkID0gcG0uY3VycmVudFByb2plY3Q7XG4gICAgY29uc3QgcHJvamVjdCA9IHBtLmdldFJlc3RvcmVkUHJvamVjdChwcm9qZWN0SWQpO1xuICAgIC8vIDMuIGRlbGV0ZSB0b2RvIGZyb20gcHJvamVjdFxuICAgIHByb2plY3QucmVtb3ZlVG9kbyh0b2RvSWQpO1xuICAgIC8vIDQuIHVwZGF0ZSBVSVxuICAgIHRvZG9FbC5yZW1vdmUoKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVkaXRUb2RvKGVsKSB7XG4gICAgY29uc3QgdG9kb0lkID0gZWwuY2xvc2VzdCgnLmpzLXRvZG8taXRlbScpLmlkO1xuICAgIGNvbnN0IGRhdGEgPSBzdG9yYWdlLmdldChgVG9kb18ke3RvZG9JZH1gKTtcblxuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtZm9ybS1hZGQtdG9kbycpO1xuICAgIC8vIDIuIHBvcHVsYXRlIGZvcm1cbiAgICBPYmplY3QuZW50cmllcyhkYXRhKS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChrZXkgIT09ICdjb21wbGV0ZScpIHtcbiAgICAgICAgICBmb3JtLnF1ZXJ5U2VsZWN0b3IoYFtuYW1lPVwiJHtrZXl9XCJdYCkudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3JtLnF1ZXJ5U2VsZWN0b3IoYFtuYW1lPVwiJHtrZXl9XCJdYCkuY2hlY2tlZCA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLndhcm4oYE1pc3NpbmcgW25hbWU9XCIke2tleX1cIl0gZWxlbWVudFxcbmAsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRvZ2dsZVRvZG8oZWwpIHtcbiAgICBjb25zdCB0b2RvSWQgPSBlbC5jbG9zZXN0KCcuanMtdG9kby1pdGVtJykuaWQ7XG4gICAgY29uc3QgZGF0YSA9IHN0b3JhZ2UuZ2V0KGBUb2RvXyR7dG9kb0lkfWApO1xuICAgIGNvbnN0IHRvZG8gPSBuZXcgVG9kbyhkYXRhKTtcbiAgICBjb25zdCBjb21wbGV0ZSA9IGVsLmNoZWNrZWQ7XG4gICAgdG9kby51cGRhdGUoeyBjb21wbGV0ZSB9KTtcbiAgfVxuXG4gIGNvbnN0IHRvZG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLXRvZG8tbGlzdCcpO1xuICB0b2RvTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc3QgeyB0YXJnZXQ6IGVsIH0gPSBlO1xuICAgIGlmIChlbC5jbG9zZXN0KCcuanMtYnRuLXRvZG8tZGVsZXRlJykpIHtcbiAgICAgIHJlbW92ZVRvZG8oZWwpO1xuICAgIH0gZWxzZSBpZiAoZWwuY2xvc2VzdCgnLmpzLWJ0bi10b2RvLWVkaXQnKSkge1xuICAgICAgZWRpdFRvZG8oZWwpO1xuICAgIH0gZWxzZSBpZiAoZWwuY2xvc2VzdCgnLmpzLXRvZG8tdG9nZ2xlJykpIHtcbiAgICAgIHRvZ2dsZVRvZG8oZWwpO1xuICAgIH1cbiAgfSk7XG5cbiAgZnVuY3Rpb24gcmVtb3ZlUHJvamVjdChlbCkge1xuICAgIGNvbnN0IHByb2plY3RFbCA9IGVsLmNsb3Nlc3QoJy5qcy1wcm9qZWN0LWl0ZW0nKTtcbiAgICBjb25zdCBwcm9qZWN0SWQgPSBwcm9qZWN0RWwuaWQ7XG4gICAgcG0uZGVsZXRlUHJvamVjdChwcm9qZWN0SWQpO1xuXG4gICAgaWYgKHByb2plY3RJZCAhPT0gcG0uZGVmYXVsdFByb2plY3QpIHtcbiAgICAgIHByb2plY3RFbC5yZW1vdmUoKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBlZGl0UHJvamVjdChlbCkge1xuICAgIC8vIFRPRE86IGFkZCBjaGVjayBmb3IgZW1wdHkgdGl0bGUgb24gZWRpdCBhY3Rpb25cbiAgICBjb25zdCBwcm9qZWN0SWQgPSBlbC5jbG9zZXN0KCcuanMtcHJvamVjdC1pdGVtJykuaWQ7XG4gICAgY29uc3QgZGF0YSA9IHN0b3JhZ2UuZ2V0KGBQcm9qZWN0XyR7cHJvamVjdElkfWApO1xuICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtZm9ybS1hZGQtcHJvamVjdCcpO1xuICAgIC8vIFRPRE86IGFkZCBsb29wXG4gICAgZm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInRpdGxlXCJdJykudmFsdWUgPSBkYXRhLnRpdGxlO1xuICAgIGZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJpZFwiXScpLnZhbHVlID0gZGF0YS5pZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZ2hsaWdodFByb2plY3QoZWwpIHtcbiAgICBjb25zdCBhY3RpdmVDbGFzc05hbWUgPSAndGV4dC1vcmFuZ2UtNjAwJztcbiAgICBjb25zdCBsaXN0ID0gZWwuY2xvc2VzdCgnLmpzLXByb2plY3RzLWxpc3QnKTtcbiAgICBjb25zdCBwcm9qZWN0RWwgPSBlbC5jbG9zZXN0KCcuanMtcHJvamVjdC1pdGVtJyk7XG4gICAgdHJ5IHtcbiAgICAgIGxpc3QucXVlcnlTZWxlY3RvcihgLiR7YWN0aXZlQ2xhc3NOYW1lfWApLmNsYXNzTGlzdC5yZW1vdmUoYCR7YWN0aXZlQ2xhc3NOYW1lfWApO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhgSU5GTzogVGhlcmUgaXMgbm8gaGlnaGxpZ2h0ZWQgcHJvamVjdFxcbmAsIGVycm9yKTtcbiAgICB9XG4gICAgcHJvamVjdEVsLmNsYXNzTGlzdC5hZGQoYCR7YWN0aXZlQ2xhc3NOYW1lfWApO1xuICAgIHBtLnNldEN1cnJlbnRQcm9qZWN0KHByb2plY3RFbC5pZCk7XG4gIH1cblxuICBjb25zdCBwcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtcHJvamVjdHMtbGlzdCcpO1xuICBwcm9qZWN0c0xpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGNvbnN0IHsgdGFyZ2V0OiBlbCB9ID0gZTtcbiAgICBpZiAoZWwuY2xvc2VzdCgnLmpzLWJ0bi1wcm9qZWN0LWRlbGV0ZScpKSB7XG4gICAgICByZW1vdmVQcm9qZWN0KGVsKTtcbiAgICB9IGVsc2UgaWYgKGVsLmNsb3Nlc3QoJy5qcy1idG4tcHJvamVjdC1lZGl0JykpIHtcbiAgICAgIGVkaXRQcm9qZWN0KGVsKTtcbiAgICB9IGVsc2UgaWYgKGVsLmNsb3Nlc3QoJy5qcy1wcm9qZWN0LWl0ZW0nKSkge1xuICAgICAgaGlnaGxpZ2h0UHJvamVjdChlbCk7XG4gICAgfVxuICB9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFNjcm9sbFdpZHRoKCkge1xuICBjb25zdCB7IGJvZHkgfSA9IGRvY3VtZW50O1xuICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGVsLnN0eWxlID0gYHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAtOTk5OXB4OyB3aWR0aDogMTAwcHg7IGhlaWdodDogMTAwcHg7IG92ZXJmbG93OiBzY3JvbGw7YDtcbiAgYm9keS5hcHBlbmRDaGlsZChlbCk7XG5cbiAgY29uc3Qgd2lkdGggPSBlbC5vZmZzZXRXaWR0aCAtIGVsLmNsaWVudFdpZHRoO1xuXG4gIGJvZHkucmVtb3ZlQ2hpbGQoZWwpO1xuXG4gIHJldHVybiB3aWR0aDtcbn1cbiIsImNvbnN0IHM0ID0gKCkgPT5cbiAgTWF0aC5mbG9vcigoMSArIE1hdGgucmFuZG9tKCkpICogMHgxMDAwMClcbiAgICAudG9TdHJpbmcoMTYpXG4gICAgLnN1YnN0cmluZygxKTtcblxuY29uc3QgZ2VuZXJhdGVJZCA9ICgpID0+IGBhJHtzNCgpfS0ke3M0KCl9LSR7czQoKX1gO1xuXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZUlkO1xuIiwiZnVuY3Rpb24gdHJpbVN0cihzdHJpbmcgPSAnJywgZGVmYXVsdFZhbHVlID0gJ1VudGl0bGVkJykge1xuICByZXR1cm4gc3RyaW5nLnRyaW0oKS5yZXBsYWNlKC9bPD4vXS9naSwgJycpIHx8IGRlZmF1bHRWYWx1ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdHJpbVN0cjtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBwcm9qZWN0c01hbmFnZXIgfSBmcm9tICcuL1Byb2plY3RzTWFuYWdlcic7XG5pbXBvcnQgeyB1aSB9IGZyb20gJy4vVUknO1xuaW1wb3J0IGRlbW9Ub2Rvc0RhdGEgZnJvbSAnLi9kYXRhL2RlbW9Ub2Rvcy5qc29uJztcbmltcG9ydCBhcmNoaXZlVG9kb3NEYXRhIGZyb20gJy4vZGF0YS9hcmNoaXZlVG9kb3MuanNvbic7XG5cbmltcG9ydCAnLi4vY3NzL3N0eWxlcy5jc3MnO1xuXG51aS5pbml0KCk7XG5cbi8vIFRPRE86IGF1dG8gYWRkIHRvZG8gdG8gcHJvamVjdCBvbiBjcmVhdGVcbi8vIFRPRE86IHNhdmUgcHJvamVjdCBpbW1lZGlhdGVseSBhZnRlciBjcmVhdGlvbj9cblxuLy8gY29uc3QgYXJjaGl2ZVByb2plY3QgPSBuZXcgUHJvamVjdCh7IHRpdGxlOiAnQXJjaGl2ZScgfSk7XG4vLyBjb25zb2xlLmxvZyhgYXJjaGl2ZVByb2plY3RgLCBhcmNoaXZlUHJvamVjdCk7XG4vLyBhcmNoaXZlUHJvamVjdC5zYXZlKCk7XG4vLyBhcmNoaXZlUHJvamVjdC5sb2FkRGF0YShhcmNoaXZlVG9kb3NEYXRhKTtcbi8vIHByb2plY3RzTWFuYWdlci5hZGRQcm9qZWN0KGFyY2hpdmVQcm9qZWN0LmlkKTtcblxudWkucmVuZGVyUHJvamVjdFRvZG9zKCk7XG5cbnByb2plY3RzTWFuYWdlci5wcm9qZWN0cy5mb3JFYWNoKChpZCkgPT4ge1xuICB1aS5yZW5kZXJQcm9qZWN0KGlkKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9