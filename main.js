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
___CSS_LOADER_EXPORT___.push([module.id, "/*\n! tailwindcss v3.0.23 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/*\nEnsure the default browser behavior of the `hidden` attribute.\n*/\n\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.container {\n  width: 100%;\n}\n@media (min-width: 640px) {\n\n  .container {\n    max-width: 640px;\n  }\n}\n@media (min-width: 768px) {\n\n  .container {\n    max-width: 768px;\n  }\n}\n@media (min-width: 1024px) {\n\n  .container {\n    max-width: 1024px;\n  }\n}\n@media (min-width: 1280px) {\n\n  .container {\n    max-width: 1280px;\n  }\n}\n@media (min-width: 1536px) {\n\n  .container {\n    max-width: 1536px;\n  }\n}\n.fixed {\n  position: fixed;\n}\n.relative {\n  position: relative;\n}\n.top-0 {\n  top: 0px;\n}\n.left-0 {\n  left: 0px;\n}\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.my-4 {\n  margin-top: 1rem;\n  margin-bottom: 1rem;\n}\n.mt-6 {\n  margin-top: 1.5rem;\n}\n.mb-4 {\n  margin-bottom: 1rem;\n}\n.ml-3 {\n  margin-left: 0.75rem;\n}\n.mt-1 {\n  margin-top: 0.25rem;\n}\n.block {\n  display: block;\n}\n.flex {\n  display: flex;\n}\n.inline-flex {\n  display: inline-flex;\n}\n.hidden {\n  display: none;\n}\n.h-6 {\n  height: 1.5rem;\n}\n.h-5 {\n  height: 1.25rem;\n}\n.h-4 {\n  height: 1rem;\n}\n.h-screen {\n  height: 100vh;\n}\n.min-h-screen {\n  min-height: 100vh;\n}\n.w-6 {\n  width: 1.5rem;\n}\n.w-4 {\n  width: 1rem;\n}\n.w-screen {\n  width: 100vw;\n}\n.w-\\[480px\\] {\n  width: 480px;\n}\n.w-full {\n  width: 100%;\n}\n.max-w-full {\n  max-width: 100%;\n}\n.select-none {\n  user-select: none;\n}\n.items-start {\n  align-items: flex-start;\n}\n.items-center {\n  align-items: center;\n}\n.justify-end {\n  justify-content: flex-end;\n}\n.justify-center {\n  justify-content: center;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.space-x-2 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.5rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-x-1 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(0.25rem * var(--tw-space-x-reverse));\n  margin-left: calc(0.25rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-x-4 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-x-reverse: 0;\n  margin-right: calc(1rem * var(--tw-space-x-reverse));\n  margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));\n}\n.space-y-4 > :not([hidden]) ~ :not([hidden]) {\n  --tw-space-y-reverse: 0;\n  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom: calc(1rem * var(--tw-space-y-reverse));\n}\n.overflow-auto {\n  overflow: auto;\n}\n.overflow-hidden {\n  overflow: hidden;\n}\n.scroll-smooth {\n  scroll-behavior: smooth;\n}\n.rounded-md {\n  border-radius: 0.375rem;\n}\n.rounded-lg {\n  border-radius: 0.5rem;\n}\n.rounded {\n  border-radius: 0.25rem;\n}\n.border {\n  border-width: 1px;\n}\n.border-t {\n  border-top-width: 1px;\n}\n.border-slate-300 {\n  --tw-border-opacity: 1;\n  border-color: rgb(203 213 225 / var(--tw-border-opacity));\n}\n.border-slate-200 {\n  --tw-border-opacity: 1;\n  border-color: rgb(226 232 240 / var(--tw-border-opacity));\n}\n.border-transparent {\n  border-color: transparent;\n}\n.bg-zinc-50 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(250 250 250 / var(--tw-bg-opacity));\n}\n.bg-orange-600 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(234 88 12 / var(--tw-bg-opacity));\n}\n.bg-white {\n  --tw-bg-opacity: 1;\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n}\n.bg-black\\/75 {\n  background-color: rgb(0 0 0 / 0.75);\n}\n.bg-transparent {\n  background-color: transparent;\n}\n.p-4 {\n  padding: 1rem;\n}\n.px-4 {\n  padding-left: 1rem;\n  padding-right: 1rem;\n}\n.py-2 {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n}\n.py-6 {\n  padding-top: 1.5rem;\n  padding-bottom: 1.5rem;\n}\n.px-3 {\n  padding-left: 0.75rem;\n  padding-right: 0.75rem;\n}\n.pt-\\[3px\\] {\n  padding-top: 3px;\n}\n.text-center {\n  text-align: center;\n}\n.font-sans {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\";\n}\n.text-3xl {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n.text-lg {\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n.font-bold {\n  font-weight: 700;\n}\n.font-medium {\n  font-weight: 500;\n}\n.italic {\n  font-style: italic;\n}\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n.text-orange-600 {\n  --tw-text-opacity: 1;\n  color: rgb(234 88 12 / var(--tw-text-opacity));\n}\n.text-slate-400 {\n  --tw-text-opacity: 1;\n  color: rgb(148 163 184 / var(--tw-text-opacity));\n}\n.text-sky-500 {\n  --tw-text-opacity: 1;\n  color: rgb(14 165 233 / var(--tw-text-opacity));\n}\n.text-slate-700 {\n  --tw-text-opacity: 1;\n  color: rgb(51 65 85 / var(--tw-text-opacity));\n}\n.underline {\n  text-decoration-line: underline;\n}\n.placeholder-slate-400::placeholder {\n  --tw-placeholder-opacity: 1;\n  color: rgb(148 163 184 / var(--tw-placeholder-opacity));\n}\n.opacity-0 {\n  opacity: 0;\n}\n.shadow-lg {\n  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.shadow-sm {\n  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);\n  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n.filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n.transition {\n  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;\n  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);\n  transition-duration: 150ms;\n}\n.selection\\:bg-pink-300 *::selection {\n  --tw-bg-opacity: 1;\n  background-color: rgb(249 168 212 / var(--tw-bg-opacity));\n}\n.selection\\:bg-pink-300::selection {\n  --tw-bg-opacity: 1;\n  background-color: rgb(249 168 212 / var(--tw-bg-opacity));\n}\n.hover\\:cursor-pointer:hover {\n  cursor: pointer;\n}\n.hover\\:border-slate-200:hover {\n  --tw-border-opacity: 1;\n  border-color: rgb(226 232 240 / var(--tw-border-opacity));\n}\n.hover\\:bg-orange-700:hover {\n  --tw-bg-opacity: 1;\n  background-color: rgb(194 65 12 / var(--tw-bg-opacity));\n}\n.hover\\:text-sky-500:hover {\n  --tw-text-opacity: 1;\n  color: rgb(14 165 233 / var(--tw-text-opacity));\n}\n.hover\\:text-red-500:hover {\n  --tw-text-opacity: 1;\n  color: rgb(239 68 68 / var(--tw-text-opacity));\n}\n.hover\\:text-orange-600:hover {\n  --tw-text-opacity: 1;\n  color: rgb(234 88 12 / var(--tw-text-opacity));\n}\n.focus\\:border-sky-500:focus {\n  --tw-border-opacity: 1;\n  border-color: rgb(14 165 233 / var(--tw-border-opacity));\n}\n.focus\\:outline-none:focus {\n  outline: 2px solid transparent;\n  outline-offset: 2px;\n}\n.focus\\:ring-1:focus {\n  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n.focus\\:ring-sky-500:focus {\n  --tw-ring-opacity: 1;\n  --tw-ring-color: rgb(14 165 233 / var(--tw-ring-opacity));\n}\n.active\\:border-slate-400:active {\n  --tw-border-opacity: 1;\n  border-color: rgb(148 163 184 / var(--tw-border-opacity));\n}\n.active\\:bg-orange-800:active {\n  --tw-bg-opacity: 1;\n  background-color: rgb(154 52 18 / var(--tw-bg-opacity));\n}\n.active\\:bg-slate-200:active {\n  --tw-bg-opacity: 1;\n  background-color: rgb(226 232 240 / var(--tw-bg-opacity));\n}\n.group:hover .group-hover\\:opacity-100 {\n  opacity: 1;\n}\n", "",{"version":3,"sources":["webpack://./src/css/styles.css","webpack://./src/css/%3Cinput%20css%20XL5YIB%3E","<no source>"],"names":[],"mappings":"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","sourcesContent":["@tailwind base;\n@tailwind components;\n@tailwind utilities;\n","/*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: theme('borderColor.DEFAULT', currentColor); /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured `sans` font-family by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  tab-size: 4; /* 3 */\n  font-family: theme('fontFamily.sans', ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"); /* 4 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from `html` so users can set them as a class directly on the `html` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured `mono` font family by default.\n2. Correct the odd `em` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: theme('fontFamily.mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace); /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent `sub` and `sup` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional `:invalid` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to `inherit` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: theme('colors.gray.400', #9ca3af); /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements `display: block` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add `vertical-align: middle` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/*\nEnsure the default browser behavior of the `hidden` attribute.\n*/\n\n[hidden] {\n  display: none;\n}\n",null],"sourceRoot":""}]);
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
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
/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todo */ "./src/js/Todo.js");
/* harmony import */ var _utils_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/id */ "./src/js/utils/id.js");
/* harmony import */ var _utils_trimStr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/trimStr */ "./src/js/utils/trimStr.js");




function Project(data) {
  // TODO: do I need to add todos param?
  const { id, title, todos } = data;

  this.id = id || (0,_utils_id__WEBPACK_IMPORTED_MODULE_1__["default"])();
  this.title = (0,_utils_trimStr__WEBPACK_IMPORTED_MODULE_2__["default"])(title);
  this.todos = todos || [];
}

Project.prototype.storage = null;

// TODO: it's not clear is it a Todo item or {}
Project.prototype.addTodo = function (todo_) {
  // TODO: do something with param reassignment
  let todo = todo_;
  // TODO: not sure about need of check for 'Todo' object
  // use in render new todo already so be aware!
  if (!(todo instanceof _Todo__WEBPACK_IMPORTED_MODULE_0__["default"])) {
    todo = new _Todo__WEBPACK_IMPORTED_MODULE_0__["default"](todo);
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
  return new _Todo__WEBPACK_IMPORTED_MODULE_0__["default"](obj);
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
      this.addTodo(new _Todo__WEBPACK_IMPORTED_MODULE_0__["default"](item));
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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ "./src/js/Project.js");


function ProjectsManager() {
  this.projects = [];
  this.defaultProject = null;
  this.currentProject = null;
}

ProjectsManager.prototype.storage = null;

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
  return new _Project__WEBPACK_IMPORTED_MODULE_0__["default"](this.storage.get(`Project_${id}`));
};

ProjectsManager.prototype.setCurrentProject = function (id) {
  this.currentProject = id;
  this.save();
};

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
/* harmony import */ var _utils_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/id */ "./src/js/utils/id.js");
/* harmony import */ var _utils_trimStr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/trimStr */ "./src/js/utils/trimStr.js");



function Todo(data) {
  const { id, title, dueDate, priority = 'low', complete } = data;

  this.id = id || (0,_utils_id__WEBPACK_IMPORTED_MODULE_0__["default"])();
  this.title = (0,_utils_trimStr__WEBPACK_IMPORTED_MODULE_1__["default"])(title);
  this.dueDate = dueDate || new Date();
  this.priority = priority;
  this.complete = complete; // TODO: not sure (complete === 'on' was here)
}

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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/checkbox */ "./src/js/components/checkbox.js");
/* harmony import */ var _handlers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handlers */ "./src/js/handlers.js");



function UI(pm, storage) {
  // TODO: maybe better pass storage? Do I need pm?
  this.pm = pm; // damn!
  this.storage = storage;
}

UI.prototype.init = function () {
  console.log('init fn');
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
      <span class="js-project-item-box text-lg font-bold">${title}</span>
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
        ${(0,_components_checkbox__WEBPACK_IMPORTED_MODULE_0__["default"])('Complete?', 'complete', `check_${id}`, complete)}
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
  (0,_handlers__WEBPACK_IMPORTED_MODULE_1__["default"])(this);
};

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
    } else if (el.closest('.js-project-item-box')) {
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
/* harmony import */ var _LocStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LocStorage */ "./src/js/LocStorage.js");
/* harmony import */ var _ProjectsManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectsManager */ "./src/js/ProjectsManager.js");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Project */ "./src/js/Project.js");
/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Todo */ "./src/js/Todo.js");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UI */ "./src/js/UI.js");
/* harmony import */ var _data_demoTodos_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data/demoTodos.json */ "./src/js/data/demoTodos.json");
/* harmony import */ var _data_archiveTodos_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data/archiveTodos.json */ "./src/js/data/archiveTodos.json");
/* harmony import */ var _Modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Modal */ "./src/js/Modal.js");
/* harmony import */ var _css_styles_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../css/styles.css */ "./src/css/styles.css");












const storage = (function initStorage() {
  // TODO: remove clear on load
  localStorage.clear();
  const storageEntity = new _LocStorage__WEBPACK_IMPORTED_MODULE_0__["default"]();
  // TODO: is it a good idea?
  _Todo__WEBPACK_IMPORTED_MODULE_3__["default"].prototype.storage = storageEntity;
  _Project__WEBPACK_IMPORTED_MODULE_2__["default"].prototype.storage = storageEntity;
  _ProjectsManager__WEBPACK_IMPORTED_MODULE_1__["default"].prototype.storage = storageEntity;
  return storageEntity;
})();

const projectsManager = (function initProjectsManager() {
  const pm = new _ProjectsManager__WEBPACK_IMPORTED_MODULE_1__["default"]();
  const defautProject = new _Project__WEBPACK_IMPORTED_MODULE_2__["default"]({ title: 'Inbox' });
  defautProject.save();
  const { id } = defautProject;
  pm.defaultProject = id;
  pm.currentProject = id;
  pm.addProject(id);
  // ? add fn to populate storage
  defautProject.loadData(_data_demoTodos_json__WEBPACK_IMPORTED_MODULE_5__);
  // ? check localStorage for data, if so get it!
  return pm;
})();

const modal = new _Modal__WEBPACK_IMPORTED_MODULE_7__["default"]();
modal.init();

// TODO: on add todo check is there any project (create default one then!)
// TODO: create sane init() fn?

const ui = new _UI__WEBPACK_IMPORTED_MODULE_4__["default"](projectsManager, storage);
ui.addHandlers();

// TODO: auto add todo to project on create
// TODO: save project immediately after creation?

const archiveProject = new _Project__WEBPACK_IMPORTED_MODULE_2__["default"]({ title: 'Archive' });
archiveProject.loadData(_data_archiveTodos_json__WEBPACK_IMPORTED_MODULE_6__);
projectsManager.addProject(archiveProject.id);

ui.renderProjectTodos();

projectsManager.projects.forEach((id) => {
  ui.renderProject(id);
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssdUJBQXVCLHVCQUF1Qix1QkFBdUIscUJBQXFCLHVCQUF1QixRQUFRLE9BQU8sTUFBTSxLQUFLLHFCQUFxQix1QkFBdUIsUUFBUSxRQUFRLE1BQU0sS0FBSyxxQkFBcUIscUJBQXFCLHVCQUF1QixRQUFRLE1BQU0sTUFBTSxLQUFLLGFBQWEsUUFBUSxNQUFNLE1BQU0sVUFBVSxhQUFhLGFBQWEsT0FBTyxNQUFNLE1BQU0sS0FBSyxXQUFXLFlBQVksT0FBTyxNQUFNLE1BQU0sTUFBTSxhQUFhLE9BQU8sT0FBTyxNQUFNLFFBQVEsdUJBQXVCLHFCQUFxQixPQUFPLE1BQU0sTUFBTSxLQUFLLFdBQVcsT0FBTyxNQUFNLE1BQU0sTUFBTSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxXQUFXLE9BQU8sUUFBUSxNQUFNLEtBQUsscUJBQXFCLHVCQUF1Qix1QkFBdUIsUUFBUSxRQUFRLE1BQU0sU0FBUyx1QkFBdUIscUJBQXFCLHVCQUF1QixxQkFBcUIscUJBQXFCLHFCQUFxQixPQUFPLE1BQU0sTUFBTSxNQUFNLGFBQWEsT0FBTyxPQUFPLE1BQU0sUUFBUSx1QkFBdUIsdUJBQXVCLHVCQUF1QixRQUFRLE1BQU0sTUFBTSxLQUFLLFdBQVcsT0FBTyxNQUFNLE1BQU0sS0FBSyxhQUFhLE9BQU8sTUFBTSxNQUFNLEtBQUssYUFBYSxPQUFPLE1BQU0sTUFBTSxNQUFNLFdBQVcsT0FBTyxPQUFPLE1BQU0sS0FBSyx1QkFBdUIsdUJBQXVCLFFBQVEsTUFBTSxNQUFNLEtBQUssYUFBYSxPQUFPLE9BQU8sTUFBTSxLQUFLLHVCQUF1QixxQkFBcUIsT0FBTyxNQUFNLE1BQU0sS0FBSyxhQUFhLE9BQU8sTUFBTSxNQUFNLGlCQUFpQixXQUFXLE9BQU8sS0FBSyxXQUFXLFVBQVUsT0FBTyxLQUFLLFdBQVcsT0FBTyxPQUFPLGFBQWEsV0FBVyxVQUFVLE9BQU8sTUFBTSxNQUFNLEtBQUssYUFBYSxPQUFPLE9BQU8sTUFBTSxNQUFNLHFCQUFxQixzQkFBc0IsUUFBUSxNQUFNLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxLQUFLLEtBQUssV0FBVyxPQUFPLFFBQVEsTUFBTSxZQUFZLHFCQUFxQix1QkFBdUIsUUFBUSxNQUFNLE1BQU0sTUFBTSxXQUFXLFVBQVUsT0FBTyxNQUFNLE1BQU0sS0FBSyxXQUFXLE9BQU8sS0FBSyxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLEtBQUssS0FBSyxNQUFNLE9BQU8sS0FBSyxLQUFLLEtBQUssTUFBTSxPQUFPLEtBQUssS0FBSyxLQUFLLE1BQU0sT0FBTyxLQUFLLEtBQUssS0FBSyxNQUFNLE9BQU8sS0FBSyxLQUFLLEtBQUssTUFBTSxPQUFPLEtBQUssS0FBSyxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxXQUFXLEtBQUssTUFBTSxNQUFNLFdBQVcsS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sV0FBVyxXQUFXLEtBQUssTUFBTSxNQUFNLFdBQVcsV0FBVyxLQUFLLE1BQU0sTUFBTSxXQUFXLFdBQVcsS0FBSyxNQUFNLE1BQU0sV0FBVyxXQUFXLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFdBQVcsS0FBSyxNQUFNLE1BQU0sV0FBVyxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxXQUFXLEtBQUssTUFBTSxNQUFNLFdBQVcsS0FBSyxNQUFNLE1BQU0sV0FBVyxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxXQUFXLEtBQUssTUFBTSxNQUFNLFdBQVcsS0FBSyxNQUFNLE1BQU0sV0FBVyxLQUFLLE1BQU0sTUFBTSxXQUFXLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFdBQVcsS0FBSyxNQUFNLE1BQU0sV0FBVyxLQUFLLE1BQU0sTUFBTSxXQUFXLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFdBQVcsS0FBSyxNQUFNLE1BQU0sV0FBVyxLQUFLLE1BQU0sTUFBTSxXQUFXLEtBQUssTUFBTSxNQUFNLFdBQVcsS0FBSyxNQUFNLE1BQU0sV0FBVyxLQUFLLE1BQU0sTUFBTSxLQUFLLE1BQU0sTUFBTSxXQUFXLEtBQUssTUFBTSxNQUFNLEtBQUssTUFBTSxNQUFNLFdBQVcsV0FBVyxLQUFLLE1BQU0sTUFBTSxXQUFXLFdBQVcsS0FBSyxNQUFNLE1BQU0sS0FBSyxNQUFNLE1BQU0sV0FB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QUN2RCx3QkFBd0Isb0RBQWdCO0FBQ3hDOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvY3NzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvY3NzL3N0eWxlcy5jc3M/YzhiZiIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2pzL0xvY1N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvanMvTW9kYWwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvanMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9qcy9Qcm9qZWN0c01hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvanMvVG9kby5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9qcy9VSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9qcy9jb21wb25lbnRzL2NoZWNrYm94LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2pzL2NvbXBvbmVudHMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvanMvY29tcG9uZW50cy9wcm9qZWN0Rm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9qcy9jb21wb25lbnRzL3RvZG9Gb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2pzL2hhbmRsZXJzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2pzL3V0aWxzL2dldFNjcm9sbFdpZHRoLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2pzL3V0aWxzL2lkLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2pzL3V0aWxzL3RyaW1TdHIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qXFxuISB0YWlsd2luZGNzcyB2My4wLjIzIHwgTUlUIExpY2Vuc2UgfCBodHRwczovL3RhaWx3aW5kY3NzLmNvbVxcbiovLypcXG4xLiBQcmV2ZW50IHBhZGRpbmcgYW5kIGJvcmRlciBmcm9tIGFmZmVjdGluZyBlbGVtZW50IHdpZHRoLiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy80KVxcbjIuIEFsbG93IGFkZGluZyBhIGJvcmRlciB0byBhbiBlbGVtZW50IGJ5IGp1c3QgYWRkaW5nIGEgYm9yZGVyLXdpZHRoLiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kY3NzL3RhaWx3aW5kY3NzL3B1bGwvMTE2KVxcbiovXFxuXFxuKixcXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIGJvcmRlci13aWR0aDogMDsgLyogMiAqL1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDsgLyogMiAqL1xcbiAgYm9yZGVyLWNvbG9yOiAjZTVlN2ViOyAvKiAyICovXFxufVxcblxcbjo6YmVmb3JlLFxcbjo6YWZ0ZXIge1xcbiAgLS10dy1jb250ZW50OiAnJztcXG59XFxuXFxuLypcXG4xLiBVc2UgYSBjb25zaXN0ZW50IHNlbnNpYmxlIGxpbmUtaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4yLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4zLiBVc2UgYSBtb3JlIHJlYWRhYmxlIHRhYiBzaXplLlxcbjQuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgYHNhbnNgIGZvbnQtZmFtaWx5IGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG5odG1sIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7IC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbiAgLW1vei10YWItc2l6ZTogNDsgLyogMyAqL1xcbiAgdGFiLXNpemU6IDQ7IC8qIDMgKi9cXG4gIGZvbnQtZmFtaWx5OiB1aS1zYW5zLXNlcmlmLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBBcmlhbCwgXFxcIk5vdG8gU2Fuc1xcXCIsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiLCBcXFwiTm90byBDb2xvciBFbW9qaVxcXCI7IC8qIDQgKi9cXG59XFxuXFxuLypcXG4xLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuMi4gSW5oZXJpdCBsaW5lLWhlaWdodCBmcm9tIGBodG1sYCBzbyB1c2VycyBjYW4gc2V0IHRoZW0gYXMgYSBjbGFzcyBkaXJlY3RseSBvbiB0aGUgYGh0bWxgIGVsZW1lbnQuXFxuKi9cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLypcXG4xLiBBZGQgdGhlIGNvcnJlY3QgaGVpZ2h0IGluIEZpcmVmb3guXFxuMi4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2Ugb2YgYm9yZGVyIGNvbG9yIGluIEZpcmVmb3guIChodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xOTA2NTUpXFxuMy4gRW5zdXJlIGhvcml6b250YWwgcnVsZXMgYXJlIHZpc2libGUgYnkgZGVmYXVsdC5cXG4qL1xcblxcbmhyIHtcXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDsgLyogMyAqL1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYWJicjp3aGVyZShbdGl0bGVdKSB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7XFxufVxcblxcbi8qXFxuUmVtb3ZlIHRoZSBkZWZhdWx0IGZvbnQgc2l6ZSBhbmQgd2VpZ2h0IGZvciBoZWFkaW5ncy5cXG4qL1xcblxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2IHtcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcbn1cXG5cXG4vKlxcblJlc2V0IGxpbmtzIHRvIG9wdGltaXplIGZvciBvcHQtaW4gc3R5bGluZyBpbnN0ZWFkIG9mIG9wdC1vdXQuXFxuKi9cXG5cXG5hIHtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0O1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBFZGdlIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKlxcbjEuIFVzZSB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgYG1vbm9gIGZvbnQgZmFtaWx5IGJ5IGRlZmF1bHQuXFxuMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCxcXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6IHVpLW1vbm9zcGFjZSwgU0ZNb25vLVJlZ3VsYXIsIE1lbmxvLCBNb25hY28sIENvbnNvbGFzLCBcXFwiTGliZXJhdGlvbiBNb25vXFxcIiwgXFxcIkNvdXJpZXIgTmV3XFxcIiwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qXFxuUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKlxcbjEuIFJlbW92ZSB0ZXh0IGluZGVudGF0aW9uIGZyb20gdGFibGUgY29udGVudHMgaW4gQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05OTkwODgsIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yMDEyOTcpXFxuMi4gQ29ycmVjdCB0YWJsZSBib3JkZXIgY29sb3IgaW5oZXJpdGFuY2UgaW4gYWxsIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTM1NzI5LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTk1MDE2KVxcbjMuIFJlbW92ZSBnYXBzIGJldHdlZW4gdGFibGUgYm9yZGVycyBieSBkZWZhdWx0LlxcbiovXFxuXFxudGFibGUge1xcbiAgdGV4dC1pbmRlbnQ6IDA7IC8qIDEgKi9cXG4gIGJvcmRlci1jb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgLyogMyAqL1xcbn1cXG5cXG4vKlxcbjEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbjIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4zLiBSZW1vdmUgZGVmYXVsdCBwYWRkaW5nIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAxICovXFxuICBtYXJnaW46IDA7IC8qIDIgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cXG59XFxuXFxuLypcXG5SZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UgYW5kIEZpcmVmb3guXFxuKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKlxcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuMi4gUmVtb3ZlIGRlZmF1bHQgYnV0dG9uIHN0eWxlcy5cXG4qL1xcblxcbmJ1dHRvbixcXG5bdHlwZT0nYnV0dG9uJ10sXFxuW3R5cGU9J3Jlc2V0J10sXFxuW3R5cGU9J3N1Ym1pdCddIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgLyogMiAqL1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTsgLyogMiAqL1xcbn1cXG5cXG4vKlxcblVzZSB0aGUgbW9kZXJuIEZpcmVmb3ggZm9jdXMgc3R5bGUgZm9yIGFsbCBmb2N1c2FibGUgZWxlbWVudHMuXFxuKi9cXG5cXG46LW1vei1mb2N1c3Jpbmcge1xcbiAgb3V0bGluZTogYXV0bztcXG59XFxuXFxuLypcXG5SZW1vdmUgdGhlIGFkZGl0aW9uYWwgYDppbnZhbGlkYCBzdHlsZXMgaW4gRmlyZWZveC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL2dlY2tvLWRldi9ibG9iLzJmOWVhY2Q5ZDNkOTk1YzkzN2I0MjUxYTU1NTdkOTVkNDk0YzliZTEvbGF5b3V0L3N0eWxlL3Jlcy9mb3Jtcy5jc3MjTDcyOC1MNzM3KVxcbiovXFxuXFxuOi1tb3otdWktaW52YWxpZCB7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lIGFuZCBGaXJlZm94LlxcbiovXFxuXFxucHJvZ3Jlc3Mge1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKlxcbkNvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIFNhZmFyaS5cXG4qL1xcblxcbjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG46Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKlxcbjEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbjIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiovXFxuXFxuW3R5cGU9J3NlYXJjaCddIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4qL1xcblxcbjo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qXFxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4yLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICBmb250OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLypcXG5SZW1vdmVzIHRoZSBkZWZhdWx0IHNwYWNpbmcgYW5kIGJvcmRlciBmb3IgYXBwcm9wcmlhdGUgZWxlbWVudHMuXFxuKi9cXG5cXG5ibG9ja3F1b3RlLFxcbmRsLFxcbmRkLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbmhyLFxcbmZpZ3VyZSxcXG5wLFxcbnByZSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmZpZWxkc2V0IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmxlZ2VuZCB7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5vbCxcXG51bCxcXG5tZW51IHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKlxcblByZXZlbnQgcmVzaXppbmcgdGV4dGFyZWFzIGhvcml6b250YWxseSBieSBkZWZhdWx0LlxcbiovXFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcXG59XFxuXFxuLypcXG4xLiBSZXNldCB0aGUgZGVmYXVsdCBwbGFjZWhvbGRlciBvcGFjaXR5IGluIEZpcmVmb3guIChodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRsYWJzL3RhaWx3aW5kY3NzL2lzc3Vlcy8zMzAwKVxcbjIuIFNldCB0aGUgZGVmYXVsdCBwbGFjZWhvbGRlciBjb2xvciB0byB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgZ3JheSA0MDAgY29sb3IuXFxuKi9cXG5cXG5pbnB1dDo6cGxhY2Vob2xkZXIsXFxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXG4gIG9wYWNpdHk6IDE7IC8qIDEgKi9cXG4gIGNvbG9yOiAjOWNhM2FmOyAvKiAyICovXFxufVxcblxcbi8qXFxuU2V0IHRoZSBkZWZhdWx0IGN1cnNvciBmb3IgYnV0dG9ucy5cXG4qL1xcblxcbmJ1dHRvbixcXG5bcm9sZT1cXFwiYnV0dG9uXFxcIl0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKlxcbk1ha2Ugc3VyZSBkaXNhYmxlZCBidXR0b25zIGRvbid0IGdldCB0aGUgcG9pbnRlciBjdXJzb3IuXFxuKi9cXG46ZGlzYWJsZWQge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4vKlxcbjEuIE1ha2UgcmVwbGFjZWQgZWxlbWVudHMgYGRpc3BsYXk6IGJsb2NrYCBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy8xNClcXG4yLiBBZGQgYHZlcnRpY2FsLWFsaWduOiBtaWRkbGVgIHRvIGFsaWduIHJlcGxhY2VkIGVsZW1lbnRzIG1vcmUgc2Vuc2libHkgYnkgZGVmYXVsdC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9qZW5zaW1tb25zL2Nzc3JlbWVkeS9pc3N1ZXMvMTQjaXNzdWVjb21tZW50LTYzNDkzNDIxMClcXG4gICBUaGlzIGNhbiB0cmlnZ2VyIGEgcG9vcmx5IGNvbnNpZGVyZWQgbGludCBlcnJvciBpbiBzb21lIHRvb2xzIGJ1dCBpcyBpbmNsdWRlZCBieSBkZXNpZ24uXFxuKi9cXG5cXG5pbWcsXFxuc3ZnLFxcbnZpZGVvLFxcbmNhbnZhcyxcXG5hdWRpbyxcXG5pZnJhbWUsXFxuZW1iZWQsXFxub2JqZWN0IHtcXG4gIGRpc3BsYXk6IGJsb2NrOyAvKiAxICovXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAvKiAyICovXFxufVxcblxcbi8qXFxuQ29uc3RyYWluIGltYWdlcyBhbmQgdmlkZW9zIHRvIHRoZSBwYXJlbnQgd2lkdGggYW5kIHByZXNlcnZlIHRoZWlyIGludHJpbnNpYyBhc3BlY3QgcmF0aW8uIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxcbiovXFxuXFxuaW1nLFxcbnZpZGVvIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLypcXG5FbnN1cmUgdGhlIGRlZmF1bHQgYnJvd3NlciBiZWhhdmlvciBvZiB0aGUgYGhpZGRlbmAgYXR0cmlidXRlLlxcbiovXFxuXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuKiwgOjpiZWZvcmUsIDo6YWZ0ZXIge1xcbiAgLS10dy10cmFuc2xhdGUteDogMDtcXG4gIC0tdHctdHJhbnNsYXRlLXk6IDA7XFxuICAtLXR3LXJvdGF0ZTogMDtcXG4gIC0tdHctc2tldy14OiAwO1xcbiAgLS10dy1za2V3LXk6IDA7XFxuICAtLXR3LXNjYWxlLXg6IDE7XFxuICAtLXR3LXNjYWxlLXk6IDE7XFxuICAtLXR3LXBhbi14OiAgO1xcbiAgLS10dy1wYW4teTogIDtcXG4gIC0tdHctcGluY2gtem9vbTogIDtcXG4gIC0tdHctc2Nyb2xsLXNuYXAtc3RyaWN0bmVzczogcHJveGltaXR5O1xcbiAgLS10dy1vcmRpbmFsOiAgO1xcbiAgLS10dy1zbGFzaGVkLXplcm86ICA7XFxuICAtLXR3LW51bWVyaWMtZmlndXJlOiAgO1xcbiAgLS10dy1udW1lcmljLXNwYWNpbmc6ICA7XFxuICAtLXR3LW51bWVyaWMtZnJhY3Rpb246ICA7XFxuICAtLXR3LXJpbmctaW5zZXQ6ICA7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXdpZHRoOiAwcHg7XFxuICAtLXR3LXJpbmctb2Zmc2V0LWNvbG9yOiAjZmZmO1xcbiAgLS10dy1yaW5nLWNvbG9yOiByZ2IoNTkgMTMwIDI0NiAvIDAuNSk7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogMCAwICMwMDAwO1xcbiAgLS10dy1yaW5nLXNoYWRvdzogMCAwICMwMDAwO1xcbiAgLS10dy1zaGFkb3c6IDAgMCAjMDAwMDtcXG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMCAjMDAwMDtcXG4gIC0tdHctYmx1cjogIDtcXG4gIC0tdHctYnJpZ2h0bmVzczogIDtcXG4gIC0tdHctY29udHJhc3Q6ICA7XFxuICAtLXR3LWdyYXlzY2FsZTogIDtcXG4gIC0tdHctaHVlLXJvdGF0ZTogIDtcXG4gIC0tdHctaW52ZXJ0OiAgO1xcbiAgLS10dy1zYXR1cmF0ZTogIDtcXG4gIC0tdHctc2VwaWE6ICA7XFxuICAtLXR3LWRyb3Atc2hhZG93OiAgO1xcbiAgLS10dy1iYWNrZHJvcC1ibHVyOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1icmlnaHRuZXNzOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1jb250cmFzdDogIDtcXG4gIC0tdHctYmFja2Ryb3AtZ3JheXNjYWxlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1odWUtcm90YXRlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1pbnZlcnQ6ICA7XFxuICAtLXR3LWJhY2tkcm9wLW9wYWNpdHk6ICA7XFxuICAtLXR3LWJhY2tkcm9wLXNhdHVyYXRlOiAgO1xcbiAgLS10dy1iYWNrZHJvcC1zZXBpYTogIDtcXG59XFxuLmNvbnRhaW5lciB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XFxuXFxuICAuY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiA2NDBweDtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxuXFxuICAuY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiA3NjhweDtcXG4gIH1cXG59XFxuQG1lZGlhIChtaW4td2lkdGg6IDEwMjRweCkge1xcblxcbiAgLmNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogMTAyNHB4O1xcbiAgfVxcbn1cXG5AbWVkaWEgKG1pbi13aWR0aDogMTI4MHB4KSB7XFxuXFxuICAuY29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiAxMjgwcHg7XFxuICB9XFxufVxcbkBtZWRpYSAobWluLXdpZHRoOiAxNTM2cHgpIHtcXG5cXG4gIC5jb250YWluZXIge1xcbiAgICBtYXgtd2lkdGg6IDE1MzZweDtcXG4gIH1cXG59XFxuLmZpeGVkIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG59XFxuLnJlbGF0aXZlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLnRvcC0wIHtcXG4gIHRvcDogMHB4O1xcbn1cXG4ubGVmdC0wIHtcXG4gIGxlZnQ6IDBweDtcXG59XFxuLm14LWF1dG8ge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcbi5teS00IHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG4ubXQtNiB7XFxuICBtYXJnaW4tdG9wOiAxLjVyZW07XFxufVxcbi5tYi00IHtcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcbi5tbC0zIHtcXG4gIG1hcmdpbi1sZWZ0OiAwLjc1cmVtO1xcbn1cXG4ubXQtMSB7XFxuICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xcbn1cXG4uYmxvY2sge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5mbGV4IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5pbmxpbmUtZmxleCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG59XFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG4uaC02IHtcXG4gIGhlaWdodDogMS41cmVtO1xcbn1cXG4uaC01IHtcXG4gIGhlaWdodDogMS4yNXJlbTtcXG59XFxuLmgtNCB7XFxuICBoZWlnaHQ6IDFyZW07XFxufVxcbi5oLXNjcmVlbiB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG4ubWluLWgtc2NyZWVuIHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG4udy02IHtcXG4gIHdpZHRoOiAxLjVyZW07XFxufVxcbi53LTQge1xcbiAgd2lkdGg6IDFyZW07XFxufVxcbi53LXNjcmVlbiB7XFxuICB3aWR0aDogMTAwdnc7XFxufVxcbi53LVxcXFxbNDgwcHhcXFxcXSB7XFxuICB3aWR0aDogNDgwcHg7XFxufVxcbi53LWZ1bGwge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5tYXgtdy1mdWxsIHtcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuLnNlbGVjdC1ub25lIHtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG4uaXRlbXMtc3RhcnQge1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcbi5pdGVtcy1jZW50ZXIge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmp1c3RpZnktZW5kIHtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcbi5qdXN0aWZ5LWNlbnRlciB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmp1c3RpZnktYmV0d2VlbiB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5zcGFjZS14LTIgPiA6bm90KFtoaWRkZW5dKSB+IDpub3QoW2hpZGRlbl0pIHtcXG4gIC0tdHctc3BhY2UteC1yZXZlcnNlOiAwO1xcbiAgbWFyZ2luLXJpZ2h0OiBjYWxjKDAuNXJlbSAqIHZhcigtLXR3LXNwYWNlLXgtcmV2ZXJzZSkpO1xcbiAgbWFyZ2luLWxlZnQ6IGNhbGMoMC41cmVtICogY2FsYygxIC0gdmFyKC0tdHctc3BhY2UteC1yZXZlcnNlKSkpO1xcbn1cXG4uc3BhY2UteC0xID4gOm5vdChbaGlkZGVuXSkgfiA6bm90KFtoaWRkZW5dKSB7XFxuICAtLXR3LXNwYWNlLXgtcmV2ZXJzZTogMDtcXG4gIG1hcmdpbi1yaWdodDogY2FsYygwLjI1cmVtICogdmFyKC0tdHctc3BhY2UteC1yZXZlcnNlKSk7XFxuICBtYXJnaW4tbGVmdDogY2FsYygwLjI1cmVtICogY2FsYygxIC0gdmFyKC0tdHctc3BhY2UteC1yZXZlcnNlKSkpO1xcbn1cXG4uc3BhY2UteC00ID4gOm5vdChbaGlkZGVuXSkgfiA6bm90KFtoaWRkZW5dKSB7XFxuICAtLXR3LXNwYWNlLXgtcmV2ZXJzZTogMDtcXG4gIG1hcmdpbi1yaWdodDogY2FsYygxcmVtICogdmFyKC0tdHctc3BhY2UteC1yZXZlcnNlKSk7XFxuICBtYXJnaW4tbGVmdDogY2FsYygxcmVtICogY2FsYygxIC0gdmFyKC0tdHctc3BhY2UteC1yZXZlcnNlKSkpO1xcbn1cXG4uc3BhY2UteS00ID4gOm5vdChbaGlkZGVuXSkgfiA6bm90KFtoaWRkZW5dKSB7XFxuICAtLXR3LXNwYWNlLXktcmV2ZXJzZTogMDtcXG4gIG1hcmdpbi10b3A6IGNhbGMoMXJlbSAqIGNhbGMoMSAtIHZhcigtLXR3LXNwYWNlLXktcmV2ZXJzZSkpKTtcXG4gIG1hcmdpbi1ib3R0b206IGNhbGMoMXJlbSAqIHZhcigtLXR3LXNwYWNlLXktcmV2ZXJzZSkpO1xcbn1cXG4ub3ZlcmZsb3ctYXV0byB7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuLm92ZXJmbG93LWhpZGRlbiB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uc2Nyb2xsLXNtb290aCB7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXG59XFxuLnJvdW5kZWQtbWQge1xcbiAgYm9yZGVyLXJhZGl1czogMC4zNzVyZW07XFxufVxcbi5yb3VuZGVkLWxnIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAuNXJlbTtcXG59XFxuLnJvdW5kZWQge1xcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcXG59XFxuLmJvcmRlciB7XFxuICBib3JkZXItd2lkdGg6IDFweDtcXG59XFxuLmJvcmRlci10IHtcXG4gIGJvcmRlci10b3Atd2lkdGg6IDFweDtcXG59XFxuLmJvcmRlci1zbGF0ZS0zMDAge1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG4gIGJvcmRlci1jb2xvcjogcmdiKDIwMyAyMTMgMjI1IC8gdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXG59XFxuLmJvcmRlci1zbGF0ZS0yMDAge1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG4gIGJvcmRlci1jb2xvcjogcmdiKDIyNiAyMzIgMjQwIC8gdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXG59XFxuLmJvcmRlci10cmFuc3BhcmVudCB7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG4uYmctemluYy01MCB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjUwIDI1MCAyNTAgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcbi5iZy1vcmFuZ2UtNjAwIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzQgODggMTIgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcbi5iZy13aGl0ZSB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1IDI1NSAyNTUgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcbi5iZy1ibGFja1xcXFwvNzUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAgMCAwIC8gMC43NSk7XFxufVxcbi5iZy10cmFuc3BhcmVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuLnAtNCB7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG4ucHgtNCB7XFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xcbn1cXG4ucHktMiB7XFxuICBwYWRkaW5nLXRvcDogMC41cmVtO1xcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcXG59XFxuLnB5LTYge1xcbiAgcGFkZGluZy10b3A6IDEuNXJlbTtcXG4gIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XFxufVxcbi5weC0zIHtcXG4gIHBhZGRpbmctbGVmdDogMC43NXJlbTtcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNzVyZW07XFxufVxcbi5wdC1cXFxcWzNweFxcXFxdIHtcXG4gIHBhZGRpbmctdG9wOiAzcHg7XFxufVxcbi50ZXh0LWNlbnRlciB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5mb250LXNhbnMge1xcbiAgZm9udC1mYW1pbHk6IHVpLXNhbnMtc2VyaWYsIHN5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBSb2JvdG8sIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIEFyaWFsLCBcXFwiTm90byBTYW5zXFxcIiwgc2Fucy1zZXJpZiwgXFxcIkFwcGxlIENvbG9yIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIEVtb2ppXFxcIiwgXFxcIlNlZ29lIFVJIFN5bWJvbFxcXCIsIFxcXCJOb3RvIENvbG9yIEVtb2ppXFxcIjtcXG59XFxuLnRleHQtM3hsIHtcXG4gIGZvbnQtc2l6ZTogMS44NzVyZW07XFxuICBsaW5lLWhlaWdodDogMi4yNXJlbTtcXG59XFxuLnRleHQtbGcge1xcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xcbn1cXG4udGV4dC1iYXNlIHtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XFxufVxcbi5mb250LWJvbGQge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuLmZvbnQtbWVkaXVtIHtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbi5pdGFsaWMge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG4udGV4dC13aGl0ZSB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2IoMjU1IDI1NSAyNTUgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLnRleHQtb3JhbmdlLTYwMCB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2IoMjM0IDg4IDEyIC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi50ZXh0LXNsYXRlLTQwMCB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2IoMTQ4IDE2MyAxODQgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLnRleHQtc2t5LTUwMCB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2IoMTQgMTY1IDIzMyAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4udGV4dC1zbGF0ZS03MDAge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDUxIDY1IDg1IC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi51bmRlcmxpbmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcXG59XFxuLnBsYWNlaG9sZGVyLXNsYXRlLTQwMDo6cGxhY2Vob2xkZXIge1xcbiAgLS10dy1wbGFjZWhvbGRlci1vcGFjaXR5OiAxO1xcbiAgY29sb3I6IHJnYigxNDggMTYzIDE4NCAvIHZhcigtLXR3LXBsYWNlaG9sZGVyLW9wYWNpdHkpKTtcXG59XFxuLm9wYWNpdHktMCB7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG4uc2hhZG93LWxnIHtcXG4gIC0tdHctc2hhZG93OiAwIDEwcHggMTVweCAtM3B4IHJnYigwIDAgMCAvIDAuMSksIDAgNHB4IDZweCAtNHB4IHJnYigwIDAgMCAvIDAuMSk7XFxuICAtLXR3LXNoYWRvdy1jb2xvcmVkOiAwIDEwcHggMTVweCAtM3B4IHZhcigtLXR3LXNoYWRvdy1jb2xvciksIDAgNHB4IDZweCAtNHB4IHZhcigtLXR3LXNoYWRvdy1jb2xvcik7XFxuICBib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpO1xcbn1cXG4uc2hhZG93LXNtIHtcXG4gIC0tdHctc2hhZG93OiAwIDFweCAycHggMCByZ2IoMCAwIDAgLyAwLjA1KTtcXG4gIC0tdHctc2hhZG93LWNvbG9yZWQ6IDAgMXB4IDJweCAwIHZhcigtLXR3LXNoYWRvdy1jb2xvcik7XFxuICBib3gtc2hhZG93OiB2YXIoLS10dy1yaW5nLW9mZnNldC1zaGFkb3csIDAgMCAjMDAwMCksIHZhcigtLXR3LXJpbmctc2hhZG93LCAwIDAgIzAwMDApLCB2YXIoLS10dy1zaGFkb3cpO1xcbn1cXG4uZmlsdGVyIHtcXG4gIGZpbHRlcjogdmFyKC0tdHctYmx1cikgdmFyKC0tdHctYnJpZ2h0bmVzcykgdmFyKC0tdHctY29udHJhc3QpIHZhcigtLXR3LWdyYXlzY2FsZSkgdmFyKC0tdHctaHVlLXJvdGF0ZSkgdmFyKC0tdHctaW52ZXJ0KSB2YXIoLS10dy1zYXR1cmF0ZSkgdmFyKC0tdHctc2VwaWEpIHZhcigtLXR3LWRyb3Atc2hhZG93KTtcXG59XFxuLnRyYW5zaXRpb24ge1xcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogY29sb3IsIGJhY2tncm91bmQtY29sb3IsIGJvcmRlci1jb2xvciwgdGV4dC1kZWNvcmF0aW9uLWNvbG9yLCBmaWxsLCBzdHJva2UsIG9wYWNpdHksIGJveC1zaGFkb3csIHRyYW5zZm9ybSwgZmlsdGVyLCBiYWNrZHJvcC1maWx0ZXI7XFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKTtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDE1MG1zO1xcbn1cXG4uc2VsZWN0aW9uXFxcXDpiZy1waW5rLTMwMCAqOjpzZWxlY3Rpb24ge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0OSAxNjggMjEyIC8gdmFyKC0tdHctYmctb3BhY2l0eSkpO1xcbn1cXG4uc2VsZWN0aW9uXFxcXDpiZy1waW5rLTMwMDo6c2VsZWN0aW9uIHtcXG4gIC0tdHctYmctb3BhY2l0eTogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDkgMTY4IDIxMiAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLmhvdmVyXFxcXDpjdXJzb3ItcG9pbnRlcjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5ob3ZlclxcXFw6Ym9yZGVyLXNsYXRlLTIwMDpob3ZlciB7XFxuICAtLXR3LWJvcmRlci1vcGFjaXR5OiAxO1xcbiAgYm9yZGVyLWNvbG9yOiByZ2IoMjI2IDIzMiAyNDAgLyB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcbn1cXG4uaG92ZXJcXFxcOmJnLW9yYW5nZS03MDA6aG92ZXIge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5NCA2NSAxMiAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLmhvdmVyXFxcXDp0ZXh0LXNreS01MDA6aG92ZXIge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDE0IDE2NSAyMzMgLyB2YXIoLS10dy10ZXh0LW9wYWNpdHkpKTtcXG59XFxuLmhvdmVyXFxcXDp0ZXh0LXJlZC01MDA6aG92ZXIge1xcbiAgLS10dy10ZXh0LW9wYWNpdHk6IDE7XFxuICBjb2xvcjogcmdiKDIzOSA2OCA2OCAvIHZhcigtLXR3LXRleHQtb3BhY2l0eSkpO1xcbn1cXG4uaG92ZXJcXFxcOnRleHQtb3JhbmdlLTYwMDpob3ZlciB7XFxuICAtLXR3LXRleHQtb3BhY2l0eTogMTtcXG4gIGNvbG9yOiByZ2IoMjM0IDg4IDEyIC8gdmFyKC0tdHctdGV4dC1vcGFjaXR5KSk7XFxufVxcbi5mb2N1c1xcXFw6Ym9yZGVyLXNreS01MDA6Zm9jdXMge1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG4gIGJvcmRlci1jb2xvcjogcmdiKDE0IDE2NSAyMzMgLyB2YXIoLS10dy1ib3JkZXItb3BhY2l0eSkpO1xcbn1cXG4uZm9jdXNcXFxcOm91dGxpbmUtbm9uZTpmb2N1cyB7XFxuICBvdXRsaW5lOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBvdXRsaW5lLW9mZnNldDogMnB4O1xcbn1cXG4uZm9jdXNcXFxcOnJpbmctMTpmb2N1cyB7XFxuICAtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdzogdmFyKC0tdHctcmluZy1pbnNldCkgMCAwIDAgdmFyKC0tdHctcmluZy1vZmZzZXQtd2lkdGgpIHZhcigtLXR3LXJpbmctb2Zmc2V0LWNvbG9yKTtcXG4gIC0tdHctcmluZy1zaGFkb3c6IHZhcigtLXR3LXJpbmctaW5zZXQpIDAgMCAwIGNhbGMoMXB4ICsgdmFyKC0tdHctcmluZy1vZmZzZXQtd2lkdGgpKSB2YXIoLS10dy1yaW5nLWNvbG9yKTtcXG4gIGJveC1zaGFkb3c6IHZhcigtLXR3LXJpbmctb2Zmc2V0LXNoYWRvdyksIHZhcigtLXR3LXJpbmctc2hhZG93KSwgdmFyKC0tdHctc2hhZG93LCAwIDAgIzAwMDApO1xcbn1cXG4uZm9jdXNcXFxcOnJpbmctc2t5LTUwMDpmb2N1cyB7XFxuICAtLXR3LXJpbmctb3BhY2l0eTogMTtcXG4gIC0tdHctcmluZy1jb2xvcjogcmdiKDE0IDE2NSAyMzMgLyB2YXIoLS10dy1yaW5nLW9wYWNpdHkpKTtcXG59XFxuLmFjdGl2ZVxcXFw6Ym9yZGVyLXNsYXRlLTQwMDphY3RpdmUge1xcbiAgLS10dy1ib3JkZXItb3BhY2l0eTogMTtcXG4gIGJvcmRlci1jb2xvcjogcmdiKDE0OCAxNjMgMTg0IC8gdmFyKC0tdHctYm9yZGVyLW9wYWNpdHkpKTtcXG59XFxuLmFjdGl2ZVxcXFw6Ymctb3JhbmdlLTgwMDphY3RpdmUge1xcbiAgLS10dy1iZy1vcGFjaXR5OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1NCA1MiAxOCAvIHZhcigtLXR3LWJnLW9wYWNpdHkpKTtcXG59XFxuLmFjdGl2ZVxcXFw6Ymctc2xhdGUtMjAwOmFjdGl2ZSB7XFxuICAtLXR3LWJnLW9wYWNpdHk6IDE7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjI2IDIzMiAyNDAgLyB2YXIoLS10dy1iZy1vcGFjaXR5KSk7XFxufVxcbi5ncm91cDpob3ZlciAuZ3JvdXAtaG92ZXJcXFxcOm9wYWNpdHktMTAwIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3Mvc3R5bGVzLmNzc1wiLFwid2VicGFjazovLy4vc3JjL2Nzcy8lM0NpbnB1dCUyMGNzcyUyMFhMNVlJQiUzRVwiLFwiPG5vIHNv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QTtJQUFBO0dBQUE7QUZDb0I7QUFBcEI7O0VFREE7SUFBQTtHQUFBO0FGQ29CO0FBQ3BCO0VFRkE7QUZFbUI7QUFBbkI7RUVGQTtBRkVtQjtBQUFuQjtFRUZBO0FGRW1CO0FBQW5CO0VFRkE7QUZFbUI7QUFBbkI7RUVGQSxrQkFBQTtFQUFBO0FGRW1CO0FBQW5CO0VFRkEsaUJBQUE7RUFBQTtBRkVtQjtBQUFuQjtFRUZBO0FGRW1CO0FBQW5CO0VFRkE7QUZFbUI7QUFBbkI7RUVGQTtBRkVtQjtBQUFuQjtFRUZBO0FGRW1CO0FBQW5CO0VFRkE7QUZFbUI7QUFBbkI7RUVGQTtBRkVtQjtBQUFuQjtFRUZBO0FGRW1CO0FBQW5CO0VFRkE7QUZFbUI7QUFBbkI7RUVGQTtBRkVtQjtBQUFuQjtFRUZBO0FGRW1CO0FBQW5CO0VFRkE7QUZFbUI7QUFBbkI7RUVGQTtBRkVtQjtBQUFuQjtFRUZBO0FGRW1CO0FBQW5CO0VFRkE7QUZFbUI7QUFBbkI7RUVGQTtBRkVtQjtBQUFuQjtFRUZBO0FGRW1CO0FBQW5CO0VFRkE7QUZFbUI7QUFBbkI7RUVGQTtBRkVtQjtBQUFuQjtFRUZBO0FGRW1CO0FBQW5CO0VFRkE7QUZFbUI7QUFBbkI7RUVGQTtBRkVtQjtBQUFuQjtFRUZBO0FGRW1CO0FBQW5CO0VFRkE7QUZFbUI7QUFBbkI7RUVGQTtBRkVtQjtBQUFuQjtFRUZBO0FGRW1CO0FBQW5CO0VFRkEsd0JBQUE7RUFBQSx1REFBQTtFQUFBO0FGRW1CO0FBQW5CO0VFRkEsd0JBQUE7RUFBQSx3REFBQTtFQUFBO0FGRW1CO0FBQW5CO0VFRkEsd0JBQUE7RUFBQSxxREFBQTtFQUFBO0FGRW1CO0FBQW5CO0VFRkEsd0JBQUE7RUFBQSw2REFBQTtFQUFBO0FGRW1CO0FBQW5CO0VFRkE7QUZFbUI7QUFBbkI7RUVGQTtBRkVtQjtBQUFuQjtFRUZBO0FGRW1CO0FBQW5CO0VFRkE7QUZFbUI7QUFBbkI7RUVGQTtBRkVtQjtBQUFuQjtFRUZBO0FGRW1CO0FBQW5CO0VFRkE7QUZFbUI7QUFBbkI7RUVGQTtBRkVtQjtBQUFuQjtFRUZBLHVCQUFBO0VBQUE7QUZFbUI7QUFBbkI7RUVGQSx1QkFBQTtFQUFBO0FGRW1CO0FBQW5CO0VFRkE7QUZFbUI7QUFBbkI7RUVGQSxtQkFBQTtFQUFBO0FGRW1CO0FBQW5CO0VFRkEsbUJBQUE7RUFBQTtBRkVtQjtBQUFuQjtFRUZBLG1CQUFBO0VBQUE7QUZFbUI7QUFBbkI7RUVGQTtBRkVtQjtBQUFuQjtFRUZBO0FGRW1CO0FBQW5CO0VFRkE7QUZFbUI7QUFBbkI7RUVGQSxtQkFBQTtFQUFBO0FGRW1CO0FBQW5CO0VFRkEsb0JBQUE7RUFBQTtBRkVtQjtBQUFuQjtFRUZBLG9CQUFBO0VBQUE7QUZFbUI7QUFBbkI7RUVGQSxzQkFBQTtFQUFBO0FGRW1CO0FBQW5CO0VFRkE7QUZFbUI7QUFBbkI7RUVGQTtBRkVtQjtBQUFuQjtFRUZBO0FGRW1CO0FBQW5CO0VFRkEsb0JBQUE7RUFBQTtBRkVtQjtBQUFuQjtFRUZBLG9CQUFBO0VBQUE7QUZFbUI7QUFBbkI7RUVGQSxnQkFBQTtFQUFBO0FGRW1CO0FBQW5CO0VFRkE7QUZFbUI7QUFBbkI7RUVGQTtBRkVtQjtBQUFuQjtFRUZBO0FGRW1CO0FBQW5CO0VFRkEscUJBQUE7RUFBQTtBRkVtQjtBQUFuQjtFRUZBLHFCQUFBO0VBQUE7QUZFbUI7QUFBbkI7RUVGQSxxQkFBQTtFQUFBO0FGRW1CO0FBQW5CO0VFRkEscUJBQUE7RUFBQTtBRkVtQjtBQUFuQjtFRUZBLHFCQUFBO0VBQUE7QUZFbUI7QUFBbkI7RUVGQTtBRkVtQjtBQUFuQjtFRUZBLDRCQUFBO0VBQUE7QUZFbUI7QUFBbkI7RUVGQTtBRkVtQjtBQUFuQjtFRUZBLGdGQUFBO0VBQUEsb0dBQUE7RUFBQTtBRkVtQjtBQUFuQjtFRUZBLDJDQUFBO0VBQUEsd0RBQUE7RUFBQTtBRkVtQjtBQUFuQjtFRUZBO0FGRW1CO0FBQW5CO0VFRkEseUpBQUE7RUFBQSx5REFBQTtFQUFBO0FGRW1CO0FBRm5CO0VFQUEsbUJBQUE7RUFBQTtDQUFBO0FGQUE7RUVBQSxtQkFBQTtFQUFBO0NBQUE7QUZBQTtFRUFBO0NBQUE7QUZBQTtFRUFBLHVCQUFBO0VBQUE7Q0FBQTtBRkFBO0VFQUEsbUJBQUE7RUFBQTtDQUFBO0FGQUE7RUVBQSxxQkFBQTtFQUFBO0NBQUE7QUZBQTtFRUFBLHFCQUFBO0VBQUE7Q0FBQTtBRkFBO0VFQUEscUJBQUE7RUFBQTtDQUFBO0FGQUE7RUVBQSx1QkFBQTtFQUFBO0NBQUE7QUZBQTtFRUFBLCtCQUFBO0VBQUE7Q0FBQTtBRkFBO0VFQUEsNEdBQUE7RUFBQSwwR0FBQTtFQUFBO0NBQUE7QUZBQTtFRUFBLHFCQUFBO0VBQUE7Q0FBQTtBRkFBO0VFQUEsdUJBQUE7RUFBQTtDQUFBO0FGQUE7RUVBQSxtQkFBQTtFQUFBO0NBQUE7QUZBQTtFRUFBLG1CQUFBO0VBQUE7Q0FBQTtBRkFBO0VFQUE7Q0FBQVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdGFpbHdpbmQgYmFzZTtcXG5AdGFpbHdpbmQgY29tcG9uZW50cztcXG5AdGFpbHdpbmQgdXRpbGl0aWVzO1xcblwiLFwiLypcXG4xLiBQcmV2ZW50IHBhZGRpbmcgYW5kIGJvcmRlciBmcm9tIGFmZmVjdGluZyBlbGVtZW50IHdpZHRoLiAoaHR0cHM6Ly9naXRodWIuY29tL21vemRldnMvY3NzcmVtZWR5L2lzc3Vlcy80KVxcbjIuIEFsbG93IGFkZGluZyBhIGJvcmRlciB0byBhbiBlbGVtZW50IGJ5IGp1c3QgYWRkaW5nIGEgYm9yZGVyLXdpZHRoLiAoaHR0cHM6Ly9naXRodWIuY29tL3RhaWx3aW5kY3NzL3RhaWx3aW5kY3NzL3B1bGwvMTE2KVxcbiovXFxuXFxuKixcXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIGJvcmRlci13aWR0aDogMDsgLyogMiAqL1xcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDsgLyogMiAqL1xcbiAgYm9yZGVyLWNvbG9yOiB0aGVtZSgnYm9yZGVyQ29sb3IuREVGQVVMVCcsIGN1cnJlbnRDb2xvcik7IC8qIDIgKi9cXG59XFxuXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuICAtLXR3LWNvbnRlbnQ6ICcnO1xcbn1cXG5cXG4vKlxcbjEuIFVzZSBhIGNvbnNpc3RlbnQgc2Vuc2libGUgbGluZS1oZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbjIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbjMuIFVzZSBhIG1vcmUgcmVhZGFibGUgdGFiIHNpemUuXFxuNC4gVXNlIHRoZSB1c2VyJ3MgY29uZmlndXJlZCBgc2Fuc2AgZm9udC1mYW1pbHkgYnkgZGVmYXVsdC5cXG4qL1xcblxcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuNTsgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxuICAtbW96LXRhYi1zaXplOiA0OyAvKiAzICovXFxuICB0YWItc2l6ZTogNDsgLyogMyAqL1xcbiAgZm9udC1mYW1pbHk6IHRoZW1lKCdmb250RmFtaWx5LnNhbnMnLCB1aS1zYW5zLXNlcmlmLCBzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgUm9ib3RvLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBBcmlhbCwgXFxcIk5vdG8gU2Fuc1xcXCIsIHNhbnMtc2VyaWYsIFxcXCJBcHBsZSBDb2xvciBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBFbW9qaVxcXCIsIFxcXCJTZWdvZSBVSSBTeW1ib2xcXFwiLCBcXFwiTm90byBDb2xvciBFbW9qaVxcXCIpOyAvKiA0ICovXFxufVxcblxcbi8qXFxuMS4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbjIuIEluaGVyaXQgbGluZS1oZWlnaHQgZnJvbSBgaHRtbGAgc28gdXNlcnMgY2FuIHNldCB0aGVtIGFzIGEgY2xhc3MgZGlyZWN0bHkgb24gdGhlIGBodG1sYCBlbGVtZW50LlxcbiovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qXFxuMS4gQWRkIHRoZSBjb3JyZWN0IGhlaWdodCBpbiBGaXJlZm94LlxcbjIuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIG9mIGJvcmRlciBjb2xvciBpbiBGaXJlZm94LiAoaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTkwNjU1KVxcbjMuIEVuc3VyZSBob3Jpem9udGFsIHJ1bGVzIGFyZSB2aXNpYmxlIGJ5IGRlZmF1bHQuXFxuKi9cXG5cXG5ociB7XFxuICBoZWlnaHQ6IDA7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBib3JkZXItdG9wLXdpZHRoOiAxcHg7IC8qIDMgKi9cXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4qL1xcblxcbmFiYnI6d2hlcmUoW3RpdGxlXSkge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgZGVmYXVsdCBmb250IHNpemUgYW5kIHdlaWdodCBmb3IgaGVhZGluZ3MuXFxuKi9cXG5cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogaW5oZXJpdDtcXG59XFxuXFxuLypcXG5SZXNldCBsaW5rcyB0byBvcHRpbWl6ZSBmb3Igb3B0LWluIHN0eWxpbmcgaW5zdGVhZCBvZiBvcHQtb3V0LlxcbiovXFxuXFxuYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogaW5oZXJpdDtcXG59XFxuXFxuLypcXG5BZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gRWRnZSBhbmQgU2FmYXJpLlxcbiovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLypcXG4xLiBVc2UgdGhlIHVzZXIncyBjb25maWd1cmVkIGBtb25vYCBmb250IGZhbWlseSBieSBkZWZhdWx0LlxcbjIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAsXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiB0aGVtZSgnZm9udEZhbWlseS5tb25vJywgdWktbW9ub3NwYWNlLCBTRk1vbm8tUmVndWxhciwgTWVubG8sIE1vbmFjbywgQ29uc29sYXMsIFxcXCJMaWJlcmF0aW9uIE1vbm9cXFwiLCBcXFwiQ291cmllciBOZXdcXFwiLCBtb25vc3BhY2UpOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiovXFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qXFxuUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKlxcbjEuIFJlbW92ZSB0ZXh0IGluZGVudGF0aW9uIGZyb20gdGFibGUgY29udGVudHMgaW4gQ2hyb21lIGFuZCBTYWZhcmkuIChodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD05OTkwODgsIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0yMDEyOTcpXFxuMi4gQ29ycmVjdCB0YWJsZSBib3JkZXIgY29sb3IgaW5oZXJpdGFuY2UgaW4gYWxsIENocm9tZSBhbmQgU2FmYXJpLiAoaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9OTM1NzI5LCBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTk1MDE2KVxcbjMuIFJlbW92ZSBnYXBzIGJldHdlZW4gdGFibGUgYm9yZGVycyBieSBkZWZhdWx0LlxcbiovXFxuXFxudGFibGUge1xcbiAgdGV4dC1pbmRlbnQ6IDA7IC8qIDEgKi9cXG4gIGJvcmRlci1jb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTsgLyogMyAqL1xcbn1cXG5cXG4vKlxcbjEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbjIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4zLiBSZW1vdmUgZGVmYXVsdCBwYWRkaW5nIGluIGFsbCBicm93c2Vycy5cXG4qL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAxICovXFxuICBtYXJnaW46IDA7IC8qIDIgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cXG59XFxuXFxuLypcXG5SZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UgYW5kIEZpcmVmb3guXFxuKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKlxcbjEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuMi4gUmVtb3ZlIGRlZmF1bHQgYnV0dG9uIHN0eWxlcy5cXG4qL1xcblxcbmJ1dHRvbixcXG5bdHlwZT0nYnV0dG9uJ10sXFxuW3R5cGU9J3Jlc2V0J10sXFxuW3R5cGU9J3N1Ym1pdCddIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgLyogMiAqL1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTsgLyogMiAqL1xcbn1cXG5cXG4vKlxcblVzZSB0aGUgbW9kZXJuIEZpcmVmb3ggZm9jdXMgc3R5bGUgZm9yIGFsbCBmb2N1c2FibGUgZWxlbWVudHMuXFxuKi9cXG5cXG46LW1vei1mb2N1c3Jpbmcge1xcbiAgb3V0bGluZTogYXV0bztcXG59XFxuXFxuLypcXG5SZW1vdmUgdGhlIGFkZGl0aW9uYWwgYDppbnZhbGlkYCBzdHlsZXMgaW4gRmlyZWZveC4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3ppbGxhL2dlY2tvLWRldi9ibG9iLzJmOWVhY2Q5ZDNkOTk1YzkzN2I0MjUxYTU1NTdkOTVkNDk0YzliZTEvbGF5b3V0L3N0eWxlL3Jlcy9mb3Jtcy5jc3MjTDcyOC1MNzM3KVxcbiovXFxuXFxuOi1tb3otdWktaW52YWxpZCB7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG5cXG4vKlxcbkFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lIGFuZCBGaXJlZm94LlxcbiovXFxuXFxucHJvZ3Jlc3Mge1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKlxcbkNvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIFNhZmFyaS5cXG4qL1xcblxcbjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG46Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKlxcbjEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbjIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiovXFxuXFxuW3R5cGU9J3NlYXJjaCddIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKlxcblJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4qL1xcblxcbjo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qXFxuMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4yLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICBmb250OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qXFxuQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuKi9cXG5cXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLypcXG5SZW1vdmVzIHRoZSBkZWZhdWx0IHNwYWNpbmcgYW5kIGJvcmRlciBmb3IgYXBwcm9wcmlhdGUgZWxlbWVudHMuXFxuKi9cXG5cXG5ibG9ja3F1b3RlLFxcbmRsLFxcbmRkLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbmhyLFxcbmZpZ3VyZSxcXG5wLFxcbnByZSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbmZpZWxkc2V0IHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmxlZ2VuZCB7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5vbCxcXG51bCxcXG5tZW51IHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKlxcblByZXZlbnQgcmVzaXppbmcgdGV4dGFyZWFzIGhvcml6b250YWxseSBieSBkZWZhdWx0LlxcbiovXFxuXFxudGV4dGFyZWEge1xcbiAgcmVzaXplOiB2ZXJ0aWNhbDtcXG59XFxuXFxuLypcXG4xLiBSZXNldCB0aGUgZGVmYXVsdCBwbGFjZWhvbGRlciBvcGFjaXR5IGluIEZpcmVmb3guIChodHRwczovL2dpdGh1Yi5jb20vdGFpbHdpbmRsYWJzL3RhaWx3aW5kY3NzL2lzc3Vlcy8zMzAwKVxcbjIuIFNldCB0aGUgZGVmYXVsdCBwbGFjZWhvbGRlciBjb2xvciB0byB0aGUgdXNlcidzIGNvbmZpZ3VyZWQgZ3JheSA0MDAgY29sb3IuXFxuKi9cXG5cXG5pbnB1dDo6cGxhY2Vob2xkZXIsXFxudGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXG4gIG9wYWNpdHk6IDE7IC8qIDEgKi9cXG4gIGNvbG9yOiB0aGVtZSgnY29sb3JzLmdyYXkuNDAwJywgIzljYTNhZik7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5TZXQgdGhlIGRlZmF1bHQgY3Vyc29yIGZvciBidXR0b25zLlxcbiovXFxuXFxuYnV0dG9uLFxcbltyb2xlPVxcXCJidXR0b25cXFwiXSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qXFxuTWFrZSBzdXJlIGRpc2FibGVkIGJ1dHRvbnMgZG9uJ3QgZ2V0IHRoZSBwb2ludGVyIGN1cnNvci5cXG4qL1xcbjpkaXNhYmxlZCB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi8qXFxuMS4gTWFrZSByZXBsYWNlZCBlbGVtZW50cyBgZGlzcGxheTogYmxvY2tgIGJ5IGRlZmF1bHQuIChodHRwczovL2dpdGh1Yi5jb20vbW96ZGV2cy9jc3NyZW1lZHkvaXNzdWVzLzE0KVxcbjIuIEFkZCBgdmVydGljYWwtYWxpZ246IG1pZGRsZWAgdG8gYWxpZ24gcmVwbGFjZWQgZWxlbWVudHMgbW9yZSBzZW5zaWJseSBieSBkZWZhdWx0LiAoaHR0cHM6Ly9naXRodWIuY29tL2plbnNpbW1vbnMvY3NzcmVtZWR5L2lzc3Vlcy8xNCNpc3N1ZWNvbW1lbnQtNjM0OTM0MjEwKVxcbiAgIFRoaXMgY2FuIHRyaWdnZXIgYSBwb29ybHkgY29uc2lkZXJlZCBsaW50IGVycm9yIGluIHNvbWUgdG9vbHMgYnV0IGlzIGluY2x1ZGVkIGJ5IGRlc2lnbi5cXG4qL1xcblxcbmltZyxcXG5zdmcsXFxudmlkZW8sXFxuY2FudmFzLFxcbmF1ZGlvLFxcbmlmcmFtZSxcXG5lbWJlZCxcXG5vYmplY3Qge1xcbiAgZGlzcGxheTogYmxvY2s7IC8qIDEgKi9cXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IC8qIDIgKi9cXG59XFxuXFxuLypcXG5Db25zdHJhaW4gaW1hZ2VzIGFuZCB2aWRlb3MgdG8gdGhlIHBhcmVudCB3aWR0aCBhbmQgcHJlc2VydmUgdGhlaXIgaW50cmluc2ljIGFzcGVjdCByYXRpby4gKGh0dHBzOi8vZ2l0aHViLmNvbS9tb3pkZXZzL2Nzc3JlbWVkeS9pc3N1ZXMvMTQpXFxuKi9cXG5cXG5pbWcsXFxudmlkZW8ge1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKlxcbkVuc3VyZSB0aGUgZGVmYXVsdCBicm93c2VyIGJlaGF2aW9yIG9mIHRoZSBgaGlkZGVuYCBhdHRyaWJ1dGUuXFxuKi9cXG5cXG5baGlkZGVuXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIixudWxsXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIExvY1N0b3JhZ2UoKSB7XG4gIC8vXG59XG5cbkxvY1N0b3JhZ2UucHJvdG90eXBlLnNhdmUgPSBmdW5jdGlvbiAob2JqKSB7XG4gIGNvbnN0IGxhYmVsID0gb2JqLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGNvbnN0IGlkID0gb2JqLmlkIHx8ICcnO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgJHtsYWJlbH1fJHtpZH1gLCBKU09OLnN0cmluZ2lmeShvYmopKTtcbn07XG5cbkxvY1N0b3JhZ2UucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSk7XG59O1xuXG5Mb2NTdG9yYWdlLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG59O1xuXG5Mb2NTdG9yYWdlLnByb3RvdHlwZS5yZW1vdmVQcm9qZWN0ID0gZnVuY3Rpb24gKGtleSkge1xuICBjb25zdCBrZXlzID0gdGhpcy5nZXQoa2V5KS50b2Rvcy5tYXAoKGlkKSA9PiBgVG9kb18ke2lkfWApO1xuICBbLi4ua2V5cywga2V5XS5mb3JFYWNoKChrKSA9PiB0aGlzLnJlbW92ZShrKSk7XG59O1xuXG5Mb2NTdG9yYWdlLnByb3RvdHlwZS5pc0VtcHR5ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gbG9jYWxTdG9yYWdlLmxlbmd0aCA9PT0gMDtcbn07XG5cbi8vIFRPRE86IGlzIGl0IGJldHRlciB0byBzYXZlIG1hbmFnZXIsIHByb2plY3RzLCB0b2RvcyBzZXBhcmF0ZWx5P1xuXG5leHBvcnQgZGVmYXVsdCBMb2NTdG9yYWdlO1xuIiwiaW1wb3J0IG1vZGFsRWwgZnJvbSAnLi9jb21wb25lbnRzL21vZGFsJztcbmltcG9ydCBwcm9qZWN0Rm9ybSBmcm9tICcuL2NvbXBvbmVudHMvcHJvamVjdEZvcm0nO1xuaW1wb3J0IHRvZG9Gb3JtIGZyb20gJy4vY29tcG9uZW50cy90b2RvRm9ybSc7XG5pbXBvcnQgZ2V0U2Nyb2xsV2lkdGggZnJvbSAnLi91dGlscy9nZXRTY3JvbGxXaWR0aCc7XG5cbmZ1bmN0aW9uIE1vZGFsKCkge1xuICAvL1xufVxuXG5mdW5jdGlvbiBpbnNlcnRIZWxwZXJTdHlsZXMoKSB7XG4gIGNvbnN0IHN0eWxlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHN0eWxlcy5pbm5lckhUTUwgPSBgXG4gICAgOnJvb3QgeyAtLXNjcm9sbC13aWR0aDogJHtnZXRTY3JvbGxXaWR0aCgpfXB4OyB9XG5cbiAgICAuYm9keS1wYWRkaW5nLWZpeCB7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1zY3JvbGwtd2lkdGgpO1xuICAgIH1cbiAgYDtcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZXMpO1xufVxuXG5Nb2RhbC5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgaW5zZXJ0SGVscGVyU3R5bGVzKCk7XG4gIFtwcm9qZWN0Rm9ybSwgdG9kb0Zvcm1dLmZvckVhY2goKGNvbmZpZykgPT4ge1xuICAgIHRoaXMucmVuZGVyTW9kYWwoY29uZmlnKTtcbiAgfSk7XG4gIHRoaXMuYWRkSGFuZGxlcnMoKTtcbn07XG5cbk1vZGFsLnByb3RvdHlwZS5yZW5kZXJNb2RhbCA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgZG9jdW1lbnQuYm9keS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIG1vZGFsRWwoY29uZmlnKSk7XG59O1xuXG5Nb2RhbC5wcm90b3R5cGUub3Blbk1vZGFsID0gZnVuY3Rpb24gKG1vZGFsKSB7XG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnb3ZlcmZsb3ctaGlkZGVuJywgJ2JvZHktcGFkZGluZy1maXgnKTtcbiAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2ZsZXgnKTtcbn07XG5cbk1vZGFsLnByb3RvdHlwZS5jbG9zZU1vZGFsID0gZnVuY3Rpb24gKG1vZGFsKSB7XG4gIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LnJlbW92ZSgnb3ZlcmZsb3ctaGlkZGVuJywgJ2JvZHktcGFkZGluZy1maXgnKTtcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2ZsZXgnKTtcbn07XG5cbk1vZGFsLnByb3RvdHlwZS5jbG9zZUFsbE1vZGFscyA9IGZ1bmN0aW9uICgpIHtcbiAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1tb2RhbCcpIHx8IFtdKS5mb3JFYWNoKChtb2RhbCkgPT4ge1xuICAgIHRoaXMuY2xvc2VNb2RhbChtb2RhbCk7XG4gIH0pO1xufTtcblxuTW9kYWwucHJvdG90eXBlLmFkZEhhbmRsZXJzID0gZnVuY3Rpb24gKCkge1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIC8vIG9wZW4gbW9kYWwgYnkgW2RhdGEtbW9kYWwtdGFyZ2V0PVwibW9kYWxfaWRcIl1cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBjb25zdCB7IHRhcmdldCB9ID0gZTtcbiAgICAgIGlmICh0YXJnZXQuY2xvc2VzdCgnW2RhdGEtbW9kYWwtdGFyZ2V0XScpKSB7XG4gICAgICAgIGNvbnN0IGlkID0gdGFyZ2V0LmNsb3Nlc3QoJ1tkYXRhLW1vZGFsLXRhcmdldF0nKS5kYXRhc2V0Lm1vZGFsVGFyZ2V0O1xuICAgICAgICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICAgICAgdGhpcy5vcGVuTW9kYWwobW9kYWwpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gY2xvc2UgbW9kYWwgYnkgW2RhdGEtbW9kYWwtY2xvc2VyXVxuICAgIC8vIFRPRE86IGNoZWNrIGZvciBuZXdseSBjcmVhdGVkIGl0ZW1zOyB1c2UgZXZlbnQgZGVsZWdhdGlvbj9cbiAgICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbW9kYWwtY2xvc2VyXScpIHx8IFtdKS5mb3JFYWNoKChjbG9zZXIpID0+IHtcbiAgICAgIGNvbnN0IG1vZGFsID0gY2xvc2VyLmNsb3Nlc3QoJy5qcy1tb2RhbCcpO1xuXG4gICAgICBjbG9zZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuY2xvc2VNb2RhbChtb2RhbCk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIGNsb3NlIG1vZGFsIGJ5IEVzY1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGUgPSBldmVudCB8fCB3aW5kb3cuZXZlbnQ7XG5cbiAgICAgIGlmIChlLmNvZGUgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgIHRoaXMuY2xvc2VBbGxNb2RhbHMoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb2RhbDtcbiIsImltcG9ydCBUb2RvIGZyb20gJy4vVG9kbyc7XG5pbXBvcnQgZ2VuZXJhdGVJZCBmcm9tICcuL3V0aWxzL2lkJztcbmltcG9ydCB0cmltU3RyIGZyb20gJy4vdXRpbHMvdHJpbVN0cic7XG5cbmZ1bmN0aW9uIFByb2plY3QoZGF0YSkge1xuICAvLyBUT0RPOiBkbyBJIG5lZWQgdG8gYWRkIHRvZG9zIHBhcmFtP1xuICBjb25zdCB7IGlkLCB0aXRsZSwgdG9kb3MgfSA9IGRhdGE7XG5cbiAgdGhpcy5pZCA9IGlkIHx8IGdlbmVyYXRlSWQoKTtcbiAgdGhpcy50aXRsZSA9IHRyaW1TdHIodGl0bGUpO1xuICB0aGlzLnRvZG9zID0gdG9kb3MgfHwgW107XG59XG5cblByb2plY3QucHJvdG90eXBlLnN0b3JhZ2UgPSBudWxsO1xuXG4vLyBUT0RPOiBpdCdzIG5vdCBjbGVhciBpcyBpdCBhIFRvZG8gaXRlbSBvciB7fVxuUHJvamVjdC5wcm90b3R5cGUuYWRkVG9kbyA9IGZ1bmN0aW9uICh0b2RvXykge1xuICAvLyBUT0RPOiBkbyBzb21ldGhpbmcgd2l0aCBwYXJhbSByZWFzc2lnbm1lbnRcbiAgbGV0IHRvZG8gPSB0b2RvXztcbiAgLy8gVE9ETzogbm90IHN1cmUgYWJvdXQgbmVlZCBvZiBjaGVjayBmb3IgJ1RvZG8nIG9iamVjdFxuICAvLyB1c2UgaW4gcmVuZGVyIG5ldyB0b2RvIGFscmVhZHkgc28gYmUgYXdhcmUhXG4gIGlmICghKHRvZG8gaW5zdGFuY2VvZiBUb2RvKSkge1xuICAgIHRvZG8gPSBuZXcgVG9kbyh0b2RvKTtcbiAgfVxuICB0aGlzLnRvZG9zLnB1c2godG9kby5pZCk7XG4gIC8vIE5PVEU6IG5lZWQgdG8gYWRkIHN0b3JhZ2Ugb2JqIHRvIHByb3RvIVxuICB0aGlzLnN0b3JhZ2Uuc2F2ZSh0b2RvKTtcbiAgdGhpcy5zYXZlKCk7XG5cbiAgcmV0dXJuIHRvZG8uaWQ7XG59O1xuXG5Qcm9qZWN0LnByb3RvdHlwZS5yZW1vdmVUb2RvID0gZnVuY3Rpb24gKGlkKSB7XG4gIHRoaXMudG9kb3MgPSB0aGlzLnRvZG9zLmZpbHRlcigoaSkgPT4gaSAhPT0gaWQpO1xuICB0aGlzLnN0b3JhZ2UucmVtb3ZlKGBUb2RvXyR7aWR9YCk7XG4gIHRoaXMuc2F2ZSgpO1xufTtcblxuUHJvamVjdC5wcm90b3R5cGUuZ2V0UmVzdG9yZWRUb2RvID0gZnVuY3Rpb24gKGlkKSB7XG4gIGNvbnN0IG9iaiA9IHRoaXMuc3RvcmFnZS5nZXQoYFRvZG9fJHtpZH1gKTtcbiAgcmV0dXJuIG5ldyBUb2RvKG9iaik7XG59O1xuXG4vLyBUT0RPOiBtYXliZSBhdm9pZCByZW1vdmluZyB0b2RvIGZyb20gc3RvcmFnZT9cbi8vIFRPRE86IG1heWJlIHBhc3MgcHJvamVjdElkP1xuUHJvamVjdC5wcm90b3R5cGUubW92ZVRvZG8gPSBmdW5jdGlvbiAodG9kbywgcHJvamVjdCkge1xuICBjb25zb2xlLndhcm4oJ1dBUk5JTkchIC5tb3ZlVG9kbygpIGRvZXMgbm90IHdvcmsgeWV0IScpO1xuICB0aGlzLnJlbW92ZVRvZG8odG9kby5pZCk7XG4gIHByb2plY3QuYWRkVG9kbyh0b2RvKTtcbn07XG5cblByb2plY3QucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG4gIHRoaXMuc2F2ZSgpO1xufTtcblxuUHJvamVjdC5wcm90b3R5cGUuc2F2ZSA9IGZ1bmN0aW9uICgpIHtcbiAgdGhpcy5zdG9yYWdlLnNhdmUodGhpcyk7XG59O1xuXG5Qcm9qZWN0LnByb3RvdHlwZS5sb2FkRGF0YSA9IGZ1bmN0aW9uIChqc29uKSB7XG4gIC8vIFRPRE86IGRvIEkgbmVlZCB0aGlzIGNoZWNrP1xuICAvLyBUT0RPOiBhY3R1YWxseSBjYW4gaGFuZGxlIGFycmF5L29iamVjdCBjYXNlcyB3aXRoXG4gIC8vIGNvbnNvbGUubG9nKGpzb24uY29uc3RydWN0b3IubmFtZSkgb3IganNvbiBpbnN0YW5jZW9mIEFycmF5O1xuICB0cnkge1xuICAgIGpzb24uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgdGhpcy5hZGRUb2RvKG5ldyBUb2RvKGl0ZW0pKTtcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS53YXJuKCdXQVJOSU5HISBSZXF1aXJlIGFuIGFycmF5IG9mIG9iamVjdHNcXG4nLCBlcnIpO1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0O1xuIiwiaW1wb3J0IFByb2plY3QgZnJvbSAnLi9Qcm9qZWN0JztcblxuZnVuY3Rpb24gUHJvamVjdHNNYW5hZ2VyKCkge1xuICB0aGlzLnByb2plY3RzID0gW107XG4gIHRoaXMuZGVmYXVsdFByb2plY3QgPSBudWxsO1xuICB0aGlzLmN1cnJlbnRQcm9qZWN0ID0gbnVsbDtcbn1cblxuUHJvamVjdHNNYW5hZ2VyLnByb3RvdHlwZS5zdG9yYWdlID0gbnVsbDtcblxuUHJvamVjdHNNYW5hZ2VyLnByb3RvdHlwZS5zYXZlID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLnN0b3JhZ2Uuc2F2ZSh0aGlzKTtcbn07XG5cblByb2plY3RzTWFuYWdlci5wcm90b3R5cGUuYWRkUHJvamVjdCA9IGZ1bmN0aW9uIChpZCkge1xuICB0aGlzLnByb2plY3RzLnB1c2goaWQpO1xuICB0aGlzLnNhdmUoKTtcbn07XG5cbi8vIFRPRE86IGFkZCB3YXJuaW5nIGFib3V0IGRlbGV0aW5nIHtufSB0b2RvIGl0ZW1zXG5Qcm9qZWN0c01hbmFnZXIucHJvdG90eXBlLmRlbGV0ZVByb2plY3QgPSBmdW5jdGlvbiAoaWQpIHtcbiAgaWYgKGlkID09PSB0aGlzLmRlZmF1bHRQcm9qZWN0KSB7XG4gICAgY29uc29sZS53YXJuKCdXQVJOSU5HOiBDYW5ub3QgZGVsZXRlIGRlZmF1bHQgcHJvamVjdCcpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGlmIChpZCA9PT0gdGhpcy5jdXJyZW50UHJvamVjdCkge1xuICAgIHRoaXMuc2V0Q3VycmVudFByb2plY3QodGhpcy5kZWZhdWx0UHJvamVjdCk7XG4gIH1cblxuICB0aGlzLnByb2plY3RzID0gdGhpcy5wcm9qZWN0cy5maWx0ZXIoKGkpID0+IGkgIT09IGlkKTtcbiAgdGhpcy5zYXZlKCk7XG5cbiAgdGhpcy5zdG9yYWdlLnJlbW92ZVByb2plY3QoYFByb2plY3RfJHtpZH1gKTtcbn07XG5cblByb2plY3RzTWFuYWdlci5wcm90b3R5cGUuZ2V0UmVzdG9yZWRQcm9qZWN0ID0gZnVuY3Rpb24gKGlkKSB7XG4gIHJldHVybiBuZXcgUHJvamVjdCh0aGlzLnN0b3JhZ2UuZ2V0KGBQcm9qZWN0XyR7aWR9YCkpO1xufTtcblxuUHJvamVjdHNNYW5hZ2VyLnByb3RvdHlwZS5zZXRDdXJyZW50UHJvamVjdCA9IGZ1bmN0aW9uIChpZCkge1xuICB0aGlzLmN1cnJlbnRQcm9qZWN0ID0gaWQ7XG4gIHRoaXMuc2F2ZSgpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHNNYW5hZ2VyO1xuIiwiaW1wb3J0IGdlbmVyYXRlSWQgZnJvbSAnLi91dGlscy9pZCc7XG5pbXBvcnQgdHJpbVN0ciBmcm9tICcuL3V0aWxzL3RyaW1TdHInO1xuXG5mdW5jdGlvbiBUb2RvKGRhdGEpIHtcbiAgY29uc3QgeyBpZCwgdGl0bGUsIGR1ZURhdGUsIHByaW9yaXR5ID0gJ2xvdycsIGNvbXBsZXRlIH0gPSBkYXRhO1xuXG4gIHRoaXMuaWQgPSBpZCB8fCBnZW5lcmF0ZUlkKCk7XG4gIHRoaXMudGl0bGUgPSB0cmltU3RyKHRpdGxlKTtcbiAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZSB8fCBuZXcgRGF0ZSgpO1xuICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIHRoaXMuY29tcGxldGUgPSBjb21wbGV0ZTsgLy8gVE9ETzogbm90IHN1cmUgKGNvbXBsZXRlID09PSAnb24nIHdhcyBoZXJlKVxufVxuXG5Ub2RvLnByb3RvdHlwZS5zYXZlID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLnN0b3JhZ2Uuc2F2ZSh0aGlzKTtcbn07XG5cblRvZG8ucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gIC8vIFRPRE86IGFzc3VtZSBkYXRhIGRvZXNuJ3QgaGF2ZSB1bmRlZmluZWQgdmFsdWVzXG4gIE9iamVjdC5hc3NpZ24odGhpcywgZGF0YSk7XG4gIHRoaXMuc2F2ZSgpO1xufTtcblxuLy8gVE9ETzogcmVtb3ZlIGl0P1xuVG9kby5wcm90b3R5cGUudG9nZ2xlID0gZnVuY3Rpb24gKCkge1xuICB0aGlzLmNvbXBsZXRlID0gIXRoaXMuY29tcGxldGU7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb2RvO1xuIiwiaW1wb3J0IGNoZWNrYm94IGZyb20gJy4vY29tcG9uZW50cy9jaGVja2JveCc7XG5pbXBvcnQgaGFuZGxlcnMgZnJvbSAnLi9oYW5kbGVycyc7XG5cbmZ1bmN0aW9uIFVJKHBtLCBzdG9yYWdlKSB7XG4gIC8vIFRPRE86IG1heWJlIGJldHRlciBwYXNzIHN0b3JhZ2U/IERvIEkgbmVlZCBwbT9cbiAgdGhpcy5wbSA9IHBtOyAvLyBkYW1uIVxuICB0aGlzLnN0b3JhZ2UgPSBzdG9yYWdlO1xufVxuXG5VSS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc29sZS5sb2coJ2luaXQgZm4nKTtcbn07XG5cbmZ1bmN0aW9uIHJlcGxhY2VPbGRJdGVtKGNvbnRhaW5lciwgaWQsIHRlbXBsYXRlKSB7XG4gIGNvbnN0IG9sZEl0ZW0gPSBjb250YWluZXIucXVlcnlTZWxlY3RvcihgIyR7aWR9YCk7XG4gIGlmIChvbGRJdGVtICE9PSBudWxsKSB7XG4gICAgb2xkSXRlbS5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyZW5kJywgdGVtcGxhdGUpO1xuICAgIG9sZEl0ZW0ucmVtb3ZlKCk7XG4gIH0gZWxzZSB7XG4gICAgY29udGFpbmVyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdGVtcGxhdGUpO1xuICB9XG59XG5cblVJLnByb3RvdHlwZS5yZW5kZXJQcm9qZWN0ID0gZnVuY3Rpb24gKGlkKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1wcm9qZWN0cy1saXN0Jyk7XG4gIGNvbnN0IHsgdGl0bGUgfSA9IHRoaXMuc3RvcmFnZS5nZXQoYFByb2plY3RfJHtpZH1gKTtcbiAgLy8gVE9ETzogZ2V0IGlkLCB0aXRsZVxuICBjb25zdCB0ZW1wbGF0ZSA9IGBcbiAgICA8ZGl2IGlkPVwiJHtpZH1cIiBjbGFzcz1cImpzLXByb2plY3QtaXRlbSAke2lkID09PSB0aGlzLnBtLmN1cnJlbnRQcm9qZWN0ID8gJ3RleHQtb3JhbmdlLTYwMCcgOiAnJ31cbiAgICAgIG1iLTQgcC00IGdyb3VwIGZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBiZy13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdy1sZyBob3ZlcjpjdXJzb3ItcG9pbnRlclxuICAgIFwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJqcy1wcm9qZWN0LWl0ZW0tYm94IHRleHQtbGcgZm9udC1ib2xkXCI+JHt0aXRsZX08L3NwYW4+XG4gICAgICA8ZGl2IGNsYXNzPVwic3BhY2UteC0yXCI+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzcz1cImpzLWJ0bi1wcm9qZWN0LWVkaXQgb3BhY2l0eS0wIHRleHQtc2xhdGUtNDAwIGdyb3VwLWhvdmVyOm9wYWNpdHktMTAwIGhvdmVyOnRleHQtc2t5LTUwMCB0cmFuc2l0aW9uXCJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICB0aXRsZT1cIkVkaXQgcHJvamVjdFwiXG4gICAgICAgICAgZGF0YS1tb2RhbC10YXJnZXQ9XCJtb2RhbC1hZGQtcHJvamVjdFwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3ZnIGNsYXNzPVwidy02IGgtNlwiPjx1c2UgeGxpbms6aHJlZj1cIiNpY29uLWVkaXRcIj48L3VzZT48L3N2Zz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzcz1cImpzLWJ0bi1wcm9qZWN0LWRlbGV0ZSBvcGFjaXR5LTAgdGV4dC1zbGF0ZS00MDAgZ3JvdXAtaG92ZXI6b3BhY2l0eS0xMDAgaG92ZXI6dGV4dC1yZWQtNTAwIHRyYW5zaXRpb25cIlxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIHRpdGxlPVwiRGVsZXRlIHByb2plY3RcIlxuICAgICAgICA+XG4gICAgICAgICAgPHN2ZyBjbGFzcz1cInctNiBoLTZcIj48dXNlIHhsaW5rOmhyZWY9XCIjaWNvbi10cmFzaFwiPjwvdXNlPjwvc3ZnPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PmA7XG4gIC8vIFRPRE86IHNob3cgdG9kb3MgY291bnQ/XG5cbiAgLy8gcmVwbGFjZSBvbGQgcHJvamVjdCBub2RlIG9uICdlZGl0L3VwZGF0ZScgYWN0aW9uXG4gIHJlcGxhY2VPbGRJdGVtKGNvbnRhaW5lciwgaWQsIHRlbXBsYXRlKTtcbn07XG5cblVJLnByb3RvdHlwZS5yZW5kZXJUb2RvID0gZnVuY3Rpb24gKGlkKSB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy10b2RvLWxpc3QnKTtcbiAgY29uc3QgeyB0aXRsZSwgZHVlRGF0ZSwgcHJpb3JpdHksIGNvbXBsZXRlIH0gPSB0aGlzLnN0b3JhZ2UuZ2V0KGBUb2RvXyR7aWR9YCk7XG4gIGNvbnN0IHRlbXBsYXRlID0gYFxuICAgIDxkaXYgaWQ9XCIke2lkfVwiXG4gICAgICBjbGFzcz1cImpzLXRvZG8taXRlbSBtYi00IHAtNCBiZy13aGl0ZSByb3VuZGVkLWxnIHNoYWRvdy1sZ1wiXG4gICAgPlxuICAgICAgPGRpdj4ke3RpdGxlfTwvZGl2PlxuICAgICAgPGRpdj4ke2R1ZURhdGV9PC9kaXY+XG4gICAgICA8ZGl2PnByaW9yaXR5OiAke3ByaW9yaXR5fTwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgJHtjaGVja2JveCgnQ29tcGxldGU/JywgJ2NvbXBsZXRlJywgYGNoZWNrXyR7aWR9YCwgY29tcGxldGUpfVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3M9XCJqcy1idG4tdG9kby1lZGl0IHVuZGVybGluZSBpdGFsaWMgdGV4dC1zbGF0ZS00MDAgaG92ZXI6dGV4dC1za3ktNTAwIHRyYW5zaXRpb25cIlxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIHRpdGxlPVwiRWRpdCB0b2RvXCJcbiAgICAgICAgICBkYXRhLW1vZGFsLXRhcmdldD1cIm1vZGFsLWFkZC10b2RvXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzdmcgY2xhc3M9XCJ3LTYgaC02XCI+PHVzZSB4bGluazpocmVmPVwiI2ljb24tZWRpdFwiPjwvdXNlPjwvc3ZnPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzPVwianMtYnRuLXRvZG8tZGVsZXRlIHVuZGVybGluZSBpdGFsaWMgdGV4dC1zbGF0ZS00MDAgaG92ZXI6dGV4dC1yZWQtNTAwIHRyYW5zaXRpb25cIlxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIHRpdGxlPVwiRGVsZXRlIHRvZG9cIlxuICAgICAgICA+XG4gICAgICAgICAgPHN2ZyBjbGFzcz1cInctNiBoLTZcIj48dXNlIHhsaW5rOmhyZWY9XCIjaWNvbi10cmFzaFwiPjwvdXNlPjwvc3ZnPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgO1xuXG4gIC8vIFRPRE86IHJlZmFjdG9yIHJlbmRlciBtZXRob2RzXG4gIC8vIHJlcGxhY2Ugb2xkIHByb2plY3Qgbm9kZSBvbiAnZWRpdC91cGRhdGUnIGFjdGlvblxuICByZXBsYWNlT2xkSXRlbShjb250YWluZXIsIGlkLCB0ZW1wbGF0ZSk7XG59O1xuXG5VSS5wcm90b3R5cGUucmVuZGVyUHJvamVjdFRvZG9zID0gZnVuY3Rpb24gKHByb2plY3RJZCA9IHRoaXMucG0uY3VycmVudFByb2plY3QpIHtcbiAgY29uc3QgZGF0YSA9IHRoaXMuc3RvcmFnZS5nZXQoYFByb2plY3RfJHtwcm9qZWN0SWR9YCk7XG4gIGRhdGEudG9kb3MuZm9yRWFjaCgoaWQpID0+IHtcbiAgICB0aGlzLnJlbmRlclRvZG8oaWQpO1xuICB9KTtcbn07XG5cblVJLnByb3RvdHlwZS5hZGRIYW5kbGVycyA9IGZ1bmN0aW9uICgpIHtcbiAgaGFuZGxlcnModGhpcyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBVSTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNoZWNrYm94KGxhYmVsLCBuYW1lLCBpZCwgY2hlY2tlZCkge1xuICByZXR1cm4gYFxuICAgIDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLXN0YXJ0XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleCBpdGVtcy1jZW50ZXIgaC01IHB0LVszcHhdXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGlkPVwiJHtpZH1cIlxuICAgICAgICAgIG5hbWU9XCIke25hbWV9XCJcbiAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgIGNsYXNzPVwianMtdG9kby10b2dnbGUgZm9jdXM6cmluZy1za3ktNTAwIGgtNCB3LTQgdGV4dC1za3ktNTAwIGJvcmRlci1zbGF0ZS0zMDAgcm91bmRlZFwiXG4gICAgICAgICAgJHtjaGVja2VkID8gJ2NoZWNrZWQnIDogJyd9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtbC0zXCI+XG4gICAgICAgIDxsYWJlbCBmb3I9XCIke2lkfVwiIGNsYXNzPVwiZm9udC1tZWRpdW0gdGV4dC1zbGF0ZS03MDBcIj4ke2xhYmVsfTwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYDtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1vZGFsKHsgaWQsIHRpdGxlLCBib2R5LCBhY3Rpb25zIH0pIHtcbiAgcmV0dXJuIGBcbiAgICA8ZGl2IGlkPVwiJHtpZH1cIiBjbGFzcz1cImpzLW1vZGFsIGhpZGRlbiBfZmxleCBmaXhlZCB0b3AtMCBsZWZ0LTAgaC1zY3JlZW4gdy1zY3JlZW4ganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHAtNCBiZy1ibGFjay83NSBvdmVyZmxvdy1hdXRvXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwidy1bNDgwcHhdIG1heC13LWZ1bGwgYmctd2hpdGUgcm91bmRlZC1sZyBzaGFkb3ctbGdcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBzcGFjZS14LTQgcC00XCI+XG4gICAgICAgICAgPGgzIGNsYXNzPVwidGV4dC1sZyBmb250LWJvbGRcIj4ke3RpdGxlfTwvaDM+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3M9XCJ0ZXh0LXNsYXRlLTQwMCBob3Zlcjp0ZXh0LW9yYW5nZS02MDAgdHJhbnNpdGlvblwiXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGRhdGEtbW9kYWwtY2xvc2VyXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgY2xhc3M9XCJoLTYgdy02XCIgZmlsbD1cIm5vbmVcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMlwiPlxuICAgICAgICAgICAgICA8cGF0aCBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIiBkPVwiTTYgMThMMTggNk02IDZsMTIgMTJcIiAvPlxuICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwib3ZlcmZsb3ctYXV0byBwLTQgYm9yZGVyLXQgYm9yZGVyLXNsYXRlLTIwMFwiIHN0eWxlPVwibWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDE4MnB4KTtcIj5cbiAgICAgICAgICAke2JvZHl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWVuZCBzcGFjZS14LTIgcC00IGJvcmRlci10IGJvcmRlci1zbGF0ZS0yMDBcIj5cbiAgICAgICAgICAke2FjdGlvbnN9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGA7XG59XG4iLCJjb25zdCBpZCA9ICdtb2RhbC1hZGQtcHJvamVjdCc7XG5jb25zdCB0aXRsZSA9ICdBZGQgZWwgcHJvamVjdG8nO1xuXG5jb25zdCBmb3JtID0gYFxuICA8Zm9ybSBjbGFzcz1cImpzLWZvcm0tYWRkLXByb2plY3RcIiBpZD1cImFkZFByb2plY3RGb3JtXCIgYWN0aW9uPVwiI1wiPlxuICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImlkXCIgdmFsdWU9XCJcIiAvPlxuXG4gICAgPGxhYmVsIGNsYXNzPVwiYmxvY2sgbWItNFwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJibG9jayBmb250LW1lZGl1bSB0ZXh0LXNsYXRlLTcwMFwiPlByb2plY3QgdGl0bGU8L3NwYW4+XG4gICAgICA8aW5wdXRcbiAgICAgICAgY2xhc3M9XCJtdC0xIGJsb2NrIHctZnVsbCBweC0zIHB5LTIgYmctd2hpdGUgYm9yZGVyIGJvcmRlci1zbGF0ZS0zMDAgcm91bmRlZC1tZCBzaGFkb3ctc20gdGV4dC1iYXNlIHBsYWNlaG9sZGVyLXNsYXRlLTQwMCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6Ym9yZGVyLXNreS01MDAgZm9jdXM6cmluZy0xIGZvY3VzOnJpbmctc2t5LTUwMFwiXG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgbmFtZT1cInRpdGxlXCJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJQcm9qZWN0IHRpdGxlXCJcbiAgICAgICAgYXV0b2ZvY3VzXG4gICAgICAvPlxuICAgIDwvbGFiZWw+XG4gIDwvZm9ybT5cbmA7XG4vLyBUT0RPOiBlbmFibGUgYXV0b2ZvY3VzXG5cbmNvbnN0IGFjdGlvbnMgPSBgXG4gIDxidXR0b25cbiAgICBjbGFzcz1cImlubGluZS1mbGV4IHB4LTQgcHktMiB0ZXh0LXNsYXRlLTcwMCBiZy10cmFuc3BhcmVudCBob3Zlcjpib3JkZXItc2xhdGUtMjAwIGFjdGl2ZTpib3JkZXItc2xhdGUtNDAwIGFjdGl2ZTpiZy1zbGF0ZS0yMDAgYm9yZGVyIGJvcmRlci10cmFuc3BhcmVudCByb3VuZGVkLW1kIHRyYW5zaXRpb24gc2VsZWN0LW5vbmVcIlxuICAgIHR5cGU9XCJidXR0b25cIlxuICAgIGRhdGEtbW9kYWwtY2xvc2VyXG4gID5cbiAgICBDYW5jZWxcbiAgPC9idXR0b24+XG4gIDxidXR0b25cbiAgICBjbGFzcz1cImlubGluZS1mbGV4IHB4LTQgcHktMiB0ZXh0LXdoaXRlIGJnLW9yYW5nZS02MDAgaG92ZXI6Ymctb3JhbmdlLTcwMCBhY3RpdmU6Ymctb3JhbmdlLTgwMCByb3VuZGVkLW1kIHRyYW5zaXRpb24gc2VsZWN0LW5vbmVcIlxuICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgIGZvcm09XCJhZGRQcm9qZWN0Rm9ybVwiXG4gICAgZGF0YS1tb2RhbC1jbG9zZXJcbiAgPlxuICAgIEFkZCBwcm9qZWN0XG4gIDwvYnV0dG9uPlxuYDtcblxuZXhwb3J0IGRlZmF1bHQgeyBpZCwgdGl0bGUsIGJvZHk6IGZvcm0sIGFjdGlvbnMgfTtcbiIsImNvbnN0IGlkID0gYG1vZGFsLWFkZC10b2RvYDtcbmNvbnN0IHRpdGxlID0gYEFkZCBlbCB0b2RvIGFtaWdvIWA7XG5cbmNvbnN0IGZvcm0gPSBgXG4gIDxmb3JtIGNsYXNzPVwianMtZm9ybS1hZGQtdG9kbyBzcGFjZS15LTRcIiBpZD1cImFkZFRvZG9Gb3JtXCIgYWN0aW9uPVwiI1wiPlxuICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImlkXCIgdmFsdWU9XCJcIiAvPlxuXG4gICAgPGxhYmVsIGNsYXNzPVwiYmxvY2tcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiYmxvY2sgZm9udC1tZWRpdW0gdGV4dC1zbGF0ZS03MDBcIj5UaXRsZTwvc3Bhbj5cbiAgICAgIDxpbnB1dFxuICAgICAgICBjbGFzcz1cIm10LTEgYmxvY2sgdy1mdWxsIHB4LTMgcHktMiBiZy13aGl0ZSBib3JkZXIgYm9yZGVyLXNsYXRlLTMwMCByb3VuZGVkLW1kIHNoYWRvdy1zbSB0ZXh0LWJhc2UgcGxhY2Vob2xkZXItc2xhdGUtNDAwIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpib3JkZXItc2t5LTUwMCBmb2N1czpyaW5nLTEgZm9jdXM6cmluZy1za3ktNTAwXCJcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICBuYW1lPVwidGl0bGVcIlxuICAgICAgICBwbGFjZWhvbGRlcj1cIlRpdGxlXCJcbiAgICAgICAgYXV0b2ZvY3VzXG4gICAgICAvPlxuICAgIDwvbGFiZWw+XG5cbiAgICA8bGFiZWwgY2xhc3M9XCJibG9ja1wiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJibG9jayBmb250LW1lZGl1bSB0ZXh0LXNsYXRlLTcwMFwiPkR1ZSBkYXRlPC9zcGFuPlxuICAgICAgPGlucHV0XG4gICAgICAgIGNsYXNzPVwibXQtMSBibG9jayB3LWZ1bGwgcHgtMyBweS0yIGJnLXdoaXRlIGJvcmRlciBib3JkZXItc2xhdGUtMzAwIHJvdW5kZWQtbWQgc2hhZG93LXNtIHRleHQtYmFzZSBwbGFjZWhvbGRlci1zbGF0ZS00MDAgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOmJvcmRlci1za3ktNTAwIGZvY3VzOnJpbmctMSBmb2N1czpyaW5nLXNreS01MDBcIlxuICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgIG5hbWU9XCJkdWVEYXRlXCJcbiAgICAgICAgdmFsdWU9XCIyMDIyLTAzLTE2XCJcbiAgICAgIC8+XG4gICAgPC9sYWJlbD5cblxuICAgIDxkaXYgY2xhc3M9XCJcIj5cbiAgICAgIDxsYWJlbCBmb3I9XCJwcmlvcml0eVwiIGNsYXNzPVwiYmxvY2sgZm9udC1tZWRpdW0gdGV4dC1zbGF0ZS03MDBcIj5Qcmlvcml0eTwvbGFiZWw+XG4gICAgICA8c2VsZWN0XG4gICAgICAgIGlkPVwicHJpb3JpdHlcIlxuICAgICAgICBuYW1lPVwicHJpb3JpdHlcIlxuICAgICAgICBhdXRvY29tcGxldGU9XCJjb3VudHJ5LW5hbWVcIlxuICAgICAgICBjbGFzcz1cIm10LTEgYmxvY2sgdy1mdWxsIHB5LTIgcHgtMyBib3JkZXIgYm9yZGVyLXNsYXRlLTMwMCBiZy13aGl0ZSByb3VuZGVkLW1kIHNoYWRvdy1zbSBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0xIGZvY3VzOnJpbmctc2t5LTUwMCBmb2N1czpib3JkZXItc2t5LTUwMFwiXG4gICAgICA+XG4gICAgICAgIDxvcHRpb24gdmFsdWU9XCJsb3dcIj5Mb3c8L29wdGlvbj5cbiAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1pZGRsZVwiPk1pZGRsZTwvb3B0aW9uPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaGlnaFwiPkhpZ2g8L29wdGlvbj5cbiAgICAgIDwvc2VsZWN0PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImZsZXggaXRlbXMtc3RhcnRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGl0ZW1zLWNlbnRlciBoLTVcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgaWQ9XCJ0b2RvQ29tcGxldGVcIlxuICAgICAgICAgIG5hbWU9XCJjb21wbGV0ZVwiXG4gICAgICAgICAgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICBjbGFzcz1cImZvY3VzOnJpbmctc2t5LTUwMCBoLTQgdy00IHRleHQtc2t5LTUwMCBib3JkZXItc2xhdGUtMzAwIHJvdW5kZWRcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibWwtM1wiPlxuICAgICAgICA8bGFiZWwgZm9yPVwidG9kb0NvbXBsZXRlXCIgY2xhc3M9XCJmb250LW1lZGl1bSB0ZXh0LXNsYXRlLTcwMFwiPkNvbXBsZXRlPzwvbGFiZWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9mb3JtPlxuYDtcblxuY29uc3QgYWN0aW9ucyA9IGBcbiAgPGJ1dHRvblxuICAgIGNsYXNzPVwiaW5saW5lLWZsZXggcHgtNCBweS0yIHRleHQtc2xhdGUtNzAwIGJnLXRyYW5zcGFyZW50IGhvdmVyOmJvcmRlci1zbGF0ZS0yMDAgYWN0aXZlOmJvcmRlci1zbGF0ZS00MDAgYWN0aXZlOmJnLXNsYXRlLTIwMCBib3JkZXIgYm9yZGVyLXRyYW5zcGFyZW50IHJvdW5kZWQtbWQgdHJhbnNpdGlvbiBzZWxlY3Qtbm9uZVwiXG4gICAgdHlwZT1cImJ1dHRvblwiXG4gICAgZGF0YS1tb2RhbC1jbG9zZXJcbiAgPlxuICAgIENhbmNlbFxuICA8L2J1dHRvbj5cbiAgPGJ1dHRvblxuICAgIGNsYXNzPVwiaW5saW5lLWZsZXggcHgtNCBweS0yIHRleHQtd2hpdGUgYmctb3JhbmdlLTYwMCBob3ZlcjpiZy1vcmFuZ2UtNzAwIGFjdGl2ZTpiZy1vcmFuZ2UtODAwIHJvdW5kZWQtbWQgdHJhbnNpdGlvbiBzZWxlY3Qtbm9uZVwiXG4gICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgZm9ybT1cImFkZFRvZG9Gb3JtXCJcbiAgICBkYXRhLW1vZGFsLWNsb3NlclxuICA+XG4gICAgQWRkL1VwZGF0ZSB0b2RvXG4gIDwvYnV0dG9uPlxuYDtcblxuZXhwb3J0IGRlZmF1bHQgeyBpZCwgdGl0bGUsIGJvZHk6IGZvcm0sIGFjdGlvbnMgfTtcbiIsImltcG9ydCBQcm9qZWN0IGZyb20gJy4vUHJvamVjdCc7XG5pbXBvcnQgVG9kbyBmcm9tICcuL1RvZG8nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVycyh1aSkge1xuICBjb25zdCB7IHBtLCBzdG9yYWdlIH0gPSB1aTtcblxuICBmdW5jdGlvbiBzdWJtaXRQcm9qZWN0Rm9ybShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCBwcm9qZWN0O1xuICAgIGNvbnN0IGZvcm0gPSBlLnRhcmdldDtcbiAgICBjb25zdCBkYXRhID0gT2JqZWN0LmZyb21FbnRyaWVzKG5ldyBGb3JtRGF0YShmb3JtKS5lbnRyaWVzKCkpO1xuXG4gICAgLy8gTk9URTogdXBkYXRlIE9SIGNyZWF0ZSBhY3Rpb25cbiAgICBpZiAoZGF0YS5pZCkge1xuICAgICAgcHJvamVjdCA9IHBtLmdldFJlc3RvcmVkUHJvamVjdChkYXRhLmlkKTtcbiAgICAgIHByb2plY3QudXBkYXRlKGRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9qZWN0ID0gbmV3IFByb2plY3QoZGF0YSk7XG4gICAgICBwbS5hZGRQcm9qZWN0KHByb2plY3QuaWQpO1xuICAgIH1cblxuICAgIHByb2plY3Quc2F2ZSgpO1xuICAgIGZvcm0ucmVzZXQoKTtcbiAgICBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiaWRcIl0nKS52YWx1ZSA9ICcnO1xuICAgIHVpLnJlbmRlclByb2plY3QocHJvamVjdC5pZCk7XG4gIH1cblxuICBmdW5jdGlvbiBzdWJtaXRUb2RvRm9ybShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCB0b2RvO1xuICAgIGNvbnN0IGZvcm0gPSBlLnRhcmdldDtcbiAgICBjb25zdCBkYXRhID0gT2JqZWN0LmZyb21FbnRyaWVzKG5ldyBGb3JtRGF0YShmb3JtKS5lbnRyaWVzKCkpO1xuICAgIGRhdGEuY29tcGxldGUgPSAhIWRhdGEuY29tcGxldGU7IC8vIGNvbnZlcnQgJ29uJyB0byB0cnVlXG4gICAgY29uc3QgcHJvamVjdElkID0gcG0uY3VycmVudFByb2plY3Q7XG4gICAgY29uc3QgcHJvamVjdCA9IHBtLmdldFJlc3RvcmVkUHJvamVjdChwcm9qZWN0SWQpO1xuXG4gICAgLy8gTk9URTogdXBkYXRlIE9SIGNyZWF0ZSBhY3Rpb25cbiAgICBpZiAoZGF0YS5pZCkge1xuICAgICAgdG9kbyA9IHByb2plY3QuZ2V0UmVzdG9yZWRUb2RvKGRhdGEuaWQpO1xuICAgICAgdG9kby51cGRhdGUoZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvZG8gPSBkYXRhO1xuICAgIH1cblxuICAgIGNvbnN0IHRvZG9JZCA9IHByb2plY3QuYWRkVG9kbyh0b2RvKTtcbiAgICBmb3JtLnJlc2V0KCk7XG4gICAgZm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImlkXCJdJykudmFsdWUgPSAnJztcbiAgICBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiY29tcGxldGVcIl0nKS5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKTtcbiAgICAvLyBUT0RPOiBhdm9pZCBzaGFraW5nIHN0b3JhZ2UgMiB0aW1lcyEgKG9uIHNhdmUsIG9uIHJlbmRlcilcbiAgICB1aS5yZW5kZXJUb2RvKHRvZG9JZCk7XG4gIH1cblxuICAvLyBUT0RPOiBtYXliZSBhZGQgbW9yZSBwcmVjaXNlIGRvbSBub2RlLCBub3QgZG9jdW1lbnQ/XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgY29uc3QgeyB0YXJnZXQ6IGVsIH0gPSBlO1xuXG4gICAgaWYgKGVsLmNsb3Nlc3QoJy5qcy1mb3JtLWFkZC1wcm9qZWN0JykpIHtcbiAgICAgIHN1Ym1pdFByb2plY3RGb3JtKGUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChlbC5jbG9zZXN0KCcuanMtZm9ybS1hZGQtdG9kbycpKSB7XG4gICAgICBzdWJtaXRUb2RvRm9ybShlKTtcbiAgICB9XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIHJlbW92ZVRvZG8oZWwpIHtcbiAgICBjb25zdCB0b2RvRWwgPSBlbC5jbG9zZXN0KCcuanMtdG9kby1pdGVtJyk7XG4gICAgLy8gMS4gZ2V0IHRvZG8gaWRcbiAgICBjb25zdCB0b2RvSWQgPSB0b2RvRWwuaWQ7XG4gICAgLy8gMi4gZ2V0IHByb2plY3QgKGhpbnQ6IGN1cnJlbnQgcHJvamVjdClcbiAgICBjb25zdCBwcm9qZWN0SWQgPSBwbS5jdXJyZW50UHJvamVjdDtcbiAgICBjb25zdCBwcm9qZWN0ID0gcG0uZ2V0UmVzdG9yZWRQcm9qZWN0KHByb2plY3RJZCk7XG4gICAgLy8gMy4gZGVsZXRlIHRvZG8gZnJvbSBwcm9qZWN0XG4gICAgcHJvamVjdC5yZW1vdmVUb2RvKHRvZG9JZCk7XG4gICAgLy8gNC4gdXBkYXRlIFVJXG4gICAgdG9kb0VsLnJlbW92ZSgpO1xuICB9XG5cbiAgZnVuY3Rpb24gZWRpdFRvZG8oZWwpIHtcbiAgICBjb25zdCB0b2RvSWQgPSBlbC5jbG9zZXN0KCcuanMtdG9kby1pdGVtJykuaWQ7XG4gICAgY29uc3QgZGF0YSA9IHN0b3JhZ2UuZ2V0KGBUb2RvXyR7dG9kb0lkfWApO1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1mb3JtLWFkZC10b2RvJyk7XG4gICAgLy8gMi4gcG9wdWxhdGUgZm9ybVxuICAgIE9iamVjdC5lbnRyaWVzKGRhdGEpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKGtleSAhPT0gJ2NvbXBsZXRlJykge1xuICAgICAgICAgIGZvcm0ucXVlcnlTZWxlY3RvcihgW25hbWU9XCIke2tleX1cIl1gKS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGZvcm0ucXVlcnlTZWxlY3RvcihgW25hbWU9XCIke2tleX1cIl1gKS5jaGVja2VkID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihgTWlzc2luZyBbbmFtZT1cIiR7a2V5fVwiXSBlbGVtZW50XFxuYCwgZXJyb3IpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gdG9nZ2xlVG9kbyhlbCkge1xuICAgIGNvbnN0IHRvZG9JZCA9IGVsLmNsb3Nlc3QoJy5qcy10b2RvLWl0ZW0nKS5pZDtcbiAgICBjb25zdCBkYXRhID0gc3RvcmFnZS5nZXQoYFRvZG9fJHt0b2RvSWR9YCk7XG4gICAgY29uc3QgdG9kbyA9IG5ldyBUb2RvKGRhdGEpO1xuICAgIGNvbnN0IGNvbXBsZXRlID0gZWwuY2hlY2tlZDtcbiAgICB0b2RvLnVwZGF0ZSh7IGNvbXBsZXRlIH0pO1xuICB9XG5cbiAgY29uc3QgdG9kb0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuanMtdG9kby1saXN0Jyk7XG4gIHRvZG9MaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBjb25zdCB7IHRhcmdldDogZWwgfSA9IGU7XG4gICAgaWYgKGVsLmNsb3Nlc3QoJy5qcy1idG4tdG9kby1kZWxldGUnKSkge1xuICAgICAgcmVtb3ZlVG9kbyhlbCk7XG4gICAgfSBlbHNlIGlmIChlbC5jbG9zZXN0KCcuanMtYnRuLXRvZG8tZWRpdCcpKSB7XG4gICAgICBlZGl0VG9kbyhlbCk7XG4gICAgfSBlbHNlIGlmIChlbC5jbG9zZXN0KCcuanMtdG9kby10b2dnbGUnKSkge1xuICAgICAgdG9nZ2xlVG9kbyhlbCk7XG4gICAgfVxuICB9KTtcblxuICBmdW5jdGlvbiByZW1vdmVQcm9qZWN0KGVsKSB7XG4gICAgY29uc3QgcHJvamVjdEVsID0gZWwuY2xvc2VzdCgnLmpzLXByb2plY3QtaXRlbScpO1xuICAgIGNvbnN0IHByb2plY3RJZCA9IHByb2plY3RFbC5pZDtcbiAgICBwbS5kZWxldGVQcm9qZWN0KHByb2plY3RJZCk7XG5cbiAgICBpZiAocHJvamVjdElkICE9PSBwbS5kZWZhdWx0UHJvamVjdCkge1xuICAgICAgcHJvamVjdEVsLnJlbW92ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGVkaXRQcm9qZWN0KGVsKSB7XG4gICAgLy8gVE9ETzogYWRkIGNoZWNrIGZvciBlbXB0eSB0aXRsZSBvbiBlZGl0IGFjdGlvblxuICAgIGNvbnN0IHByb2plY3RJZCA9IGVsLmNsb3Nlc3QoJy5qcy1wcm9qZWN0LWl0ZW0nKS5pZDtcbiAgICBjb25zdCBkYXRhID0gc3RvcmFnZS5nZXQoYFByb2plY3RfJHtwcm9qZWN0SWR9YCk7XG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1mb3JtLWFkZC1wcm9qZWN0Jyk7XG4gICAgLy8gVE9ETzogYWRkIGxvb3BcbiAgICBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwidGl0bGVcIl0nKS52YWx1ZSA9IGRhdGEudGl0bGU7XG4gICAgZm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImlkXCJdJykudmFsdWUgPSBkYXRhLmlkO1xuICB9XG5cbiAgZnVuY3Rpb24gaGlnaGxpZ2h0UHJvamVjdChlbCkge1xuICAgIGNvbnN0IGFjdGl2ZUNsYXNzTmFtZSA9ICd0ZXh0LW9yYW5nZS02MDAnO1xuICAgIGNvbnN0IGxpc3QgPSBlbC5jbG9zZXN0KCcuanMtcHJvamVjdHMtbGlzdCcpO1xuICAgIGNvbnN0IHByb2plY3RFbCA9IGVsLmNsb3Nlc3QoJy5qcy1wcm9qZWN0LWl0ZW0nKTtcbiAgICB0cnkge1xuICAgICAgbGlzdC5xdWVyeVNlbGVjdG9yKGAuJHthY3RpdmVDbGFzc05hbWV9YCkuY2xhc3NMaXN0LnJlbW92ZShgJHthY3RpdmVDbGFzc05hbWV9YCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBJTkZPOiBUaGVyZSBpcyBubyBoaWdobGlnaHRlZCBwcm9qZWN0XFxuYCwgZXJyb3IpO1xuICAgIH1cbiAgICBwcm9qZWN0RWwuY2xhc3NMaXN0LmFkZChgJHthY3RpdmVDbGFzc05hbWV9YCk7XG4gICAgcG0uc2V0Q3VycmVudFByb2plY3QocHJvamVjdEVsLmlkKTtcbiAgfVxuXG4gIGNvbnN0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5qcy1wcm9qZWN0cy1saXN0Jyk7XG4gIHByb2plY3RzTGlzdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgY29uc3QgeyB0YXJnZXQ6IGVsIH0gPSBlO1xuICAgIGlmIChlbC5jbG9zZXN0KCcuanMtYnRuLXByb2plY3QtZGVsZXRlJykpIHtcbiAgICAgIHJlbW92ZVByb2plY3QoZWwpO1xuICAgIH0gZWxzZSBpZiAoZWwuY2xvc2VzdCgnLmpzLWJ0bi1wcm9qZWN0LWVkaXQnKSkge1xuICAgICAgZWRpdFByb2plY3QoZWwpO1xuICAgIH0gZWxzZSBpZiAoZWwuY2xvc2VzdCgnLmpzLXByb2plY3QtaXRlbS1ib3gnKSkge1xuICAgICAgaGlnaGxpZ2h0UHJvamVjdChlbCk7XG4gICAgfVxuICB9KTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFNjcm9sbFdpZHRoKCkge1xuICBjb25zdCB7IGJvZHkgfSA9IGRvY3VtZW50O1xuICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIGVsLnN0eWxlID0gYHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAtOTk5OXB4OyB3aWR0aDogMTAwcHg7IGhlaWdodDogMTAwcHg7IG92ZXJmbG93OiBzY3JvbGw7YDtcbiAgYm9keS5hcHBlbmRDaGlsZChlbCk7XG5cbiAgY29uc3Qgd2lkdGggPSBlbC5vZmZzZXRXaWR0aCAtIGVsLmNsaWVudFdpZHRoO1xuXG4gIGJvZHkucmVtb3ZlQ2hpbGQoZWwpO1xuXG4gIHJldHVybiB3aWR0aDtcbn1cbiIsImNvbnN0IHM0ID0gKCkgPT5cbiAgTWF0aC5mbG9vcigoMSArIE1hdGgucmFuZG9tKCkpICogMHgxMDAwMClcbiAgICAudG9TdHJpbmcoMTYpXG4gICAgLnN1YnN0cmluZygxKTtcblxuY29uc3QgZ2VuZXJhdGVJZCA9ICgpID0+IGBhJHtzNCgpfS0ke3M0KCl9LSR7czQoKX1gO1xuXG5leHBvcnQgZGVmYXVsdCBnZW5lcmF0ZUlkO1xuIiwiZnVuY3Rpb24gdHJpbVN0cihzdHJpbmcgPSAnJywgZGVmYXVsdFZhbHVlID0gJ1VudGl0bGVkJykge1xuICByZXR1cm4gc3RyaW5nLnRyaW0oKS5yZXBsYWNlKC9bPD4vXS9naSwgJycpIHx8IGRlZmF1bHRWYWx1ZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgdHJpbVN0cjtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgTG9jU3RvcmFnZSBmcm9tICcuL0xvY1N0b3JhZ2UnO1xuaW1wb3J0IFByb2plY3RzTWFuYWdlciBmcm9tICcuL1Byb2plY3RzTWFuYWdlcic7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL1Byb2plY3QnO1xuaW1wb3J0IFRvZG8gZnJvbSAnLi9Ub2RvJztcbmltcG9ydCBVSSBmcm9tICcuL1VJJztcbmltcG9ydCBkZW1vVG9kb3NEYXRhIGZyb20gJy4vZGF0YS9kZW1vVG9kb3MuanNvbic7XG5pbXBvcnQgYXJjaGl2ZVRvZG9zRGF0YSBmcm9tICcuL2RhdGEvYXJjaGl2ZVRvZG9zLmpzb24nO1xuXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi9Nb2RhbCc7XG5cbmltcG9ydCAnLi4vY3NzL3N0eWxlcy5jc3MnO1xuXG5jb25zdCBzdG9yYWdlID0gKGZ1bmN0aW9uIGluaXRTdG9yYWdlKCkge1xuICAvLyBUT0RPOiByZW1vdmUgY2xlYXIgb24gbG9hZFxuICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgY29uc3Qgc3RvcmFnZUVudGl0eSA9IG5ldyBMb2NTdG9yYWdlKCk7XG4gIC8vIFRPRE86IGlzIGl0IGEgZ29vZCBpZGVhP1xuICBUb2RvLnByb3RvdHlwZS5zdG9yYWdlID0gc3RvcmFnZUVudGl0eTtcbiAgUHJvamVjdC5wcm90b3R5cGUuc3RvcmFnZSA9IHN0b3JhZ2VFbnRpdHk7XG4gIFByb2plY3RzTWFuYWdlci5wcm90b3R5cGUuc3RvcmFnZSA9IHN0b3JhZ2VFbnRpdHk7XG4gIHJldHVybiBzdG9yYWdlRW50aXR5O1xufSkoKTtcblxuY29uc3QgcHJvamVjdHNNYW5hZ2VyID0gKGZ1bmN0aW9uIGluaXRQcm9qZWN0c01hbmFnZXIoKSB7XG4gIGNvbnN0IHBtID0gbmV3IFByb2plY3RzTWFuYWdlcigpO1xuICBjb25zdCBkZWZhdXRQcm9qZWN0ID0gbmV3IFByb2plY3QoeyB0aXRsZTogJ0luYm94JyB9KTtcbiAgZGVmYXV0UHJvamVjdC5zYXZlKCk7XG4gIGNvbnN0IHsgaWQgfSA9IGRlZmF1dFByb2plY3Q7XG4gIHBtLmRlZmF1bHRQcm9qZWN0ID0gaWQ7XG4gIHBtLmN1cnJlbnRQcm9qZWN0ID0gaWQ7XG4gIHBtLmFkZFByb2plY3QoaWQpO1xuICAvLyA/IGFkZCBmbiB0byBwb3B1bGF0ZSBzdG9yYWdlXG4gIGRlZmF1dFByb2plY3QubG9hZERhdGEoZGVtb1RvZG9zRGF0YSk7XG4gIC8vID8gY2hlY2sgbG9jYWxTdG9yYWdlIGZvciBkYXRhLCBpZiBzbyBnZXQgaXQhXG4gIHJldHVybiBwbTtcbn0pKCk7XG5cbmNvbnN0IG1vZGFsID0gbmV3IE1vZGFsKCk7XG5tb2RhbC5pbml0KCk7XG5cbi8vIFRPRE86IG9uIGFkZCB0b2RvIGNoZWNrIGlzIHRoZXJlIGFueSBwcm9qZWN0IChjcmVhdGUgZGVmYXVsdCBvbmUgdGhlbiEpXG4vLyBUT0RPOiBjcmVhdGUgc2FuZSBpbml0KCkgZm4/XG5cbmNvbnN0IHVpID0gbmV3IFVJKHByb2plY3RzTWFuYWdlciwgc3RvcmFnZSk7XG51aS5hZGRIYW5kbGVycygpO1xuXG4vLyBUT0RPOiBhdXRvIGFkZCB0b2RvIHRvIHByb2plY3Qgb24gY3JlYXRlXG4vLyBUT0RPOiBzYXZlIHByb2plY3QgaW1tZWRpYXRlbHkgYWZ0ZXIgY3JlYXRpb24/XG5cbmNvbnN0IGFyY2hpdmVQcm9qZWN0ID0gbmV3IFByb2plY3QoeyB0aXRsZTogJ0FyY2hpdmUnIH0pO1xuYXJjaGl2ZVByb2plY3QubG9hZERhdGEoYXJjaGl2ZVRvZG9zRGF0YSk7XG5wcm9qZWN0c01hbmFnZXIuYWRkUHJvamVjdChhcmNoaXZlUHJvamVjdC5pZCk7XG5cbnVpLnJlbmRlclByb2plY3RUb2RvcygpO1xuXG5wcm9qZWN0c01hbmFnZXIucHJvamVjdHMuZm9yRWFjaCgoaWQpID0+IHtcbiAgdWkucmVuZGVyUHJvamVjdChpZCk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==