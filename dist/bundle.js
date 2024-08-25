/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./public/index.js":
/*!*************************!*\
  !*** ./public/index.js ***!
  \*************************/
/***/ (() => {

eval("document.addEventListener(\"DOMContentLoaded\", function () {\n  var form = document.getElementById(\"survey-form\");\n  var successMessage = document.getElementById(\"success-message\");\n  form.addEventListener(\"submit\", function (event) {\n    event.preventDefault();\n    if (form.checkValidity()) {\n      // Collect form data\n      var formData = new FormData(form);\n      var data = Object.fromEntries(formData.entries());\n\n      // Send data using fetch with POST method\n      fetch(\"http://localhost:3000/submit-survey\", {\n        method: \"POST\",\n        headers: {\n          \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(data)\n      }).then(function (response) {\n        if (response.ok) {\n          console.log(\"Survey data saved successfully\");\n          // Show the success message\n          successMessage.style.display = \"flex\";\n        } else {\n          console.error(\"Error saving data\");\n        }\n      })[\"catch\"](function (error) {\n        console.error(\"Error:\", error);\n      });\n    } else {\n      alert(\"Please fill out all required fields.\");\n    }\n  });\n  document.getElementById(\"return\").addEventListener(\"click\", function (event) {\n    event.preventDefault();\n    successMessage.style.display = \"none\";\n    form.reset();\n  });\n});\n\n//# sourceURL=webpack://free-code-camp-servy-form/./public/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./public/index.js"]();
/******/ 	
/******/ })()
;