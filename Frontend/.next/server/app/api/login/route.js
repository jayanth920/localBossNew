/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/login/route";
exports.ids = ["app/api/login/route"];
exports.modules = {

/***/ "(rsc)/./app/api/_lib/mongodb.ts":
/*!*********************************!*\
  !*** ./app/api/_lib/mongodb.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectDB: () => (/* binding */ connectDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGO_URI = process.env.MONGO_URI;\nif (!MONGO_URI) {\n    throw new Error(\"Please define the MONGO_URI in .env.local\");\n}\nconst connectDB = async ()=>{\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection).readyState >= 1) return;\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGO_URI, {});\n        console.log(\"MongoDB connected\");\n    } catch (error) {\n        console.error(\"MongoDB connection error:\", error);\n        throw error;\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL19saWIvbW9uZ29kYi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsWUFBWUMsUUFBUUMsR0FBRyxDQUFDRixTQUFTO0FBRXZDLElBQUksQ0FBQ0EsV0FBVztJQUNkLE1BQU0sSUFBSUcsTUFBTTtBQUNsQjtBQUVPLE1BQU1DLFlBQVk7SUFDdkIsSUFBSUwsNERBQW1CLENBQUNPLFVBQVUsSUFBSSxHQUFHO0lBRXpDLElBQUk7UUFDRixNQUFNUCx1REFBZ0IsQ0FBQ0MsV0FBVyxDQUFDO1FBQ25DUSxRQUFRQyxHQUFHLENBQUM7SUFDZCxFQUFFLE9BQU9DLE9BQU87UUFDZEYsUUFBUUUsS0FBSyxDQUFDLDZCQUE2QkE7UUFDM0MsTUFBTUE7SUFDUjtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIi9Vc2Vycy9lai9Eb2N1bWVudHMvQ29kaW5nL1Byb2plY3RzL2xvY2FsYm9zcy9Gcm9udGVuZC9hcHAvYXBpL19saWIvbW9uZ29kYi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IE1PTkdPX1VSSSA9IHByb2Nlc3MuZW52Lk1PTkdPX1VSSSBhcyBzdHJpbmc7XG5cbmlmICghTU9OR09fVVJJKSB7XG4gIHRocm93IG5ldyBFcnJvcihcIlBsZWFzZSBkZWZpbmUgdGhlIE1PTkdPX1VSSSBpbiAuZW52LmxvY2FsXCIpO1xufVxuXG5leHBvcnQgY29uc3QgY29ubmVjdERCID0gYXN5bmMgKCkgPT4ge1xuICBpZiAobW9uZ29vc2UuY29ubmVjdGlvbi5yZWFkeVN0YXRlID49IDEpIHJldHVybjtcblxuICB0cnkge1xuICAgIGF3YWl0IG1vbmdvb3NlLmNvbm5lY3QoTU9OR09fVVJJLCB7fSk7XG4gICAgY29uc29sZS5sb2coXCJNb25nb0RCIGNvbm5lY3RlZFwiKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiTW9uZ29EQiBjb25uZWN0aW9uIGVycm9yOlwiLCBlcnJvcik7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJNT05HT19VUkkiLCJwcm9jZXNzIiwiZW52IiwiRXJyb3IiLCJjb25uZWN0REIiLCJjb25uZWN0aW9uIiwicmVhZHlTdGF0ZSIsImNvbm5lY3QiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/_lib/mongodb.ts\n");

/***/ }),

/***/ "(rsc)/./app/api/_models/User.ts":
/*!*********************************!*\
  !*** ./app/api/_models/User.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0__.Schema({\n    username: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: {\n        type: String,\n        required: true\n    },\n    phone: {\n        type: String\n    },\n    profilePic: {\n        type: String\n    },\n    cart: [\n        {\n            id: Number,\n            name: String,\n            price: Number,\n            quantity: Number,\n            image: String\n        }\n    ],\n    paymentInfo: {\n        cardName: String,\n        cardNumber: String,\n        expiry: String,\n        zipCode: String\n    },\n    reviews: [\n        {\n            productId: Number,\n            review_text: String,\n            rating: Number,\n            date: String\n        }\n    ],\n    pastOrders: [\n        {\n            date: String,\n            totalAmount: Number,\n            items: [\n                {\n                    id: Number,\n                    name: String,\n                    price: Number,\n                    quantity: Number,\n                    image: String\n                }\n            ]\n        }\n    ],\n    createdAt: {\n        type: Date,\n        default: Date.now\n    }\n});\nconst User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", UserSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL19tb2RlbHMvVXNlci50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0Q7QUEyQ3RELE1BQU1FLGFBQXFCLElBQUlELDRDQUFNQSxDQUFDO0lBQ3BDRSxVQUFVO1FBQUVDLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUN6Q0MsT0FBTztRQUFFSCxNQUFNQztRQUFRQyxVQUFVO1FBQU1FLFFBQVE7SUFBSztJQUNwREMsVUFBVTtRQUFFTCxNQUFNQztRQUFRQyxVQUFVO0lBQUs7SUFDekNJLE9BQU87UUFBRU4sTUFBTUM7SUFBTztJQUN0Qk0sWUFBWTtRQUFFUCxNQUFNQztJQUFPO0lBQzNCTyxNQUFNO1FBQ0o7WUFDRUMsSUFBSUM7WUFDSkMsTUFBTVY7WUFDTlcsT0FBT0Y7WUFDUEcsVUFBVUg7WUFDVkksT0FBT2I7UUFDVDtLQUNEO0lBQ0RjLGFBQWE7UUFDWEMsVUFBVWY7UUFDVmdCLFlBQVloQjtRQUNaaUIsUUFBUWpCO1FBQ1JrQixTQUFTbEI7SUFDWDtJQUNBbUIsU0FBUztRQUNQO1lBQ0VDLFdBQVdYO1lBQ1hZLGFBQWFyQjtZQUNic0IsUUFBUWI7WUFDUmMsTUFBTXZCO1FBQ1I7S0FDRDtJQUNEd0IsWUFBWTtRQUNWO1lBQ0VELE1BQU12QjtZQUNOeUIsYUFBYWhCO1lBQ2JpQixPQUFPO2dCQUNMO29CQUNFbEIsSUFBSUM7b0JBQ0pDLE1BQU1WO29CQUNOVyxPQUFPRjtvQkFDUEcsVUFBVUg7b0JBQ1ZJLE9BQU9iO2dCQUNUO2FBQ0Q7UUFDSDtLQUNEO0lBQ0QyQixXQUFXO1FBQUU1QixNQUFNNkI7UUFBTUMsU0FBU0QsS0FBS0UsR0FBRztJQUFDO0FBQzdDO0FBRUEsTUFBTUMsT0FBT3BDLHdEQUFlLENBQUNvQyxJQUFJLElBQUlwQyxxREFBYyxDQUFRLFFBQVFFO0FBRW5FLGlFQUFla0MsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL2VqL0RvY3VtZW50cy9Db2RpbmcvUHJvamVjdHMvbG9jYWxib3NzL0Zyb250ZW5kL2FwcC9hcGkvX21vZGVscy9Vc2VyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSwgeyBTY2hlbWEsIERvY3VtZW50IH0gZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmludGVyZmFjZSBDYXJ0SXRlbSB7XG4gIGlkOiBudW1iZXI7XG4gIG5hbWU6IHN0cmluZztcbiAgcHJpY2U6IG51bWJlcjtcbiAgcXVhbnRpdHk6IG51bWJlcjtcbiAgaW1hZ2U6IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFJldmlldyB7XG4gIHByb2R1Y3RJZDogbnVtYmVyO1xuICByZXZpZXdfdGV4dDogc3RyaW5nO1xuICByYXRpbmc6IG51bWJlcjtcbiAgZGF0ZTogc3RyaW5nO1xufVxuXG5pbnRlcmZhY2UgUGFzdE9yZGVyIHtcbiAgZGF0ZTogc3RyaW5nO1xuICB0b3RhbEFtb3VudDogbnVtYmVyO1xuICBpdGVtczogQ2FydEl0ZW1bXTtcbn1cblxuaW50ZXJmYWNlIFBheW1lbnRJbmZvIHtcbiAgY2FyZE5hbWU6IHN0cmluZztcbiAgY2FyZE51bWJlcjogc3RyaW5nO1xuICBleHBpcnk6IHN0cmluZztcbiAgemlwQ29kZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElVc2VyIGV4dGVuZHMgRG9jdW1lbnQge1xuICB1c2VybmFtZTogc3RyaW5nO1xuICBlbWFpbDogc3RyaW5nO1xuICBwYXNzd29yZDogc3RyaW5nO1xuICBwaG9uZT86IHN0cmluZztcbiAgcHJvZmlsZVBpYz86IHN0cmluZztcbiAgY2FydDogQ2FydEl0ZW1bXTtcbiAgcGF5bWVudEluZm8/OiBQYXltZW50SW5mbztcbiAgcmV2aWV3czogUmV2aWV3W107XG4gIHBhc3RPcmRlcnM6IFBhc3RPcmRlcltdO1xuICBjcmVhdGVkQXQ6IERhdGU7XG59XG5cbmNvbnN0IFVzZXJTY2hlbWE6IFNjaGVtYSA9IG5ldyBTY2hlbWEoe1xuICB1c2VybmFtZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gIGVtYWlsOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUsIHVuaXF1ZTogdHJ1ZSB9LFxuICBwYXNzd29yZDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gIHBob25lOiB7IHR5cGU6IFN0cmluZyB9LFxuICBwcm9maWxlUGljOiB7IHR5cGU6IFN0cmluZyB9LFxuICBjYXJ0OiBbXG4gICAge1xuICAgICAgaWQ6IE51bWJlcixcbiAgICAgIG5hbWU6IFN0cmluZyxcbiAgICAgIHByaWNlOiBOdW1iZXIsXG4gICAgICBxdWFudGl0eTogTnVtYmVyLFxuICAgICAgaW1hZ2U6IFN0cmluZyxcbiAgICB9LFxuICBdLFxuICBwYXltZW50SW5mbzoge1xuICAgIGNhcmROYW1lOiBTdHJpbmcsXG4gICAgY2FyZE51bWJlcjogU3RyaW5nLFxuICAgIGV4cGlyeTogU3RyaW5nLFxuICAgIHppcENvZGU6IFN0cmluZyxcbiAgfSxcbiAgcmV2aWV3czogW1xuICAgIHtcbiAgICAgIHByb2R1Y3RJZDogTnVtYmVyLFxuICAgICAgcmV2aWV3X3RleHQ6IFN0cmluZyxcbiAgICAgIHJhdGluZzogTnVtYmVyLFxuICAgICAgZGF0ZTogU3RyaW5nLFxuICAgIH0sXG4gIF0sXG4gIHBhc3RPcmRlcnM6IFtcbiAgICB7XG4gICAgICBkYXRlOiBTdHJpbmcsXG4gICAgICB0b3RhbEFtb3VudDogTnVtYmVyLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGlkOiBOdW1iZXIsXG4gICAgICAgICAgbmFtZTogU3RyaW5nLFxuICAgICAgICAgIHByaWNlOiBOdW1iZXIsXG4gICAgICAgICAgcXVhbnRpdHk6IE51bWJlcixcbiAgICAgICAgICBpbWFnZTogU3RyaW5nLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICBdLFxuICBjcmVhdGVkQXQ6IHsgdHlwZTogRGF0ZSwgZGVmYXVsdDogRGF0ZS5ub3cgfSxcbn0pO1xuXG5jb25zdCBVc2VyID0gbW9uZ29vc2UubW9kZWxzLlVzZXIgfHwgbW9uZ29vc2UubW9kZWw8SVVzZXI+KFwiVXNlclwiLCBVc2VyU2NoZW1hKTtcblxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcbiJdLCJuYW1lcyI6WyJtb25nb29zZSIsIlNjaGVtYSIsIlVzZXJTY2hlbWEiLCJ1c2VybmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImVtYWlsIiwidW5pcXVlIiwicGFzc3dvcmQiLCJwaG9uZSIsInByb2ZpbGVQaWMiLCJjYXJ0IiwiaWQiLCJOdW1iZXIiLCJuYW1lIiwicHJpY2UiLCJxdWFudGl0eSIsImltYWdlIiwicGF5bWVudEluZm8iLCJjYXJkTmFtZSIsImNhcmROdW1iZXIiLCJleHBpcnkiLCJ6aXBDb2RlIiwicmV2aWV3cyIsInByb2R1Y3RJZCIsInJldmlld190ZXh0IiwicmF0aW5nIiwiZGF0ZSIsInBhc3RPcmRlcnMiLCJ0b3RhbEFtb3VudCIsIml0ZW1zIiwiY3JlYXRlZEF0IiwiRGF0ZSIsImRlZmF1bHQiLCJub3ciLCJVc2VyIiwibW9kZWxzIiwibW9kZWwiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/_models/User.ts\n");

/***/ }),

/***/ "(rsc)/./app/api/login/route.ts":
/*!********************************!*\
  !*** ./app/api/login/route.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"(rsc)/./node_modules/jsonwebtoken/index.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_models/User */ \"(rsc)/./app/api/_models/User.ts\");\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_lib/mongodb */ \"(rsc)/./app/api/_lib/mongodb.ts\");\n\n\n\n\n\nconst SECRET_KEY = process.env.SECRET_KEY;\nasync function POST(req) {\n    try {\n        await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_4__.connectDB)();\n        const { email, password } = await req.json();\n        const user = await _models_User__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findOne({\n            email\n        });\n        if (!user) return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            message: \"Invalid credentials\"\n        }, {\n            status: 400\n        });\n        const validPassword = await bcryptjs__WEBPACK_IMPORTED_MODULE_2__[\"default\"].compare(password, user.password);\n        if (!validPassword) return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            message: \"Invalid credentials\"\n        }, {\n            status: 400\n        });\n        const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign({\n            id: user._id,\n            email: user.email\n        }, SECRET_KEY, {\n            expiresIn: \"7d\"\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            token,\n            user\n        });\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            message: \"Internal Server Error\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2xvZ2luL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBK0I7QUFDWTtBQUNiO0FBQ0s7QUFDUztBQUU1QyxNQUFNSyxhQUFhQyxRQUFRQyxHQUFHLENBQUNGLFVBQVU7QUFFbEMsZUFBZUcsS0FBS0MsR0FBWTtJQUNyQyxJQUFJO1FBQ0YsTUFBTUwsdURBQVNBO1FBQ2YsTUFBTSxFQUFFTSxLQUFLLEVBQUVDLFFBQVEsRUFBRSxHQUFHLE1BQU1GLElBQUlHLElBQUk7UUFDMUMsTUFBTUMsT0FBTyxNQUFNVixvREFBSUEsQ0FBQ1csT0FBTyxDQUFDO1lBQUVKO1FBQU07UUFFeEMsSUFBSSxDQUFDRyxNQUFNLE9BQU9aLHFEQUFZQSxDQUFDVyxJQUFJLENBQUM7WUFBRUcsU0FBUztRQUFzQixHQUFHO1lBQUVDLFFBQVE7UUFBSTtRQUV0RixNQUFNQyxnQkFBZ0IsTUFBTWYsd0RBQWMsQ0FBQ1MsVUFBVUUsS0FBS0YsUUFBUTtRQUNsRSxJQUFJLENBQUNNLGVBQWUsT0FBT2hCLHFEQUFZQSxDQUFDVyxJQUFJLENBQUM7WUFBRUcsU0FBUztRQUFzQixHQUFHO1lBQUVDLFFBQVE7UUFBSTtRQUUvRixNQUFNRyxRQUFRbkIsd0RBQVEsQ0FBQztZQUFFcUIsSUFBSVIsS0FBS1MsR0FBRztZQUFFWixPQUFPRyxLQUFLSCxLQUFLO1FBQUMsR0FBR0wsWUFBWTtZQUFFa0IsV0FBVztRQUFLO1FBQzFGLE9BQU90QixxREFBWUEsQ0FBQ1csSUFBSSxDQUFDO1lBQUVPO1lBQU9OO1FBQUs7SUFDekMsRUFBRSxPQUFPVyxPQUFPO1FBQ2QsT0FBT3ZCLHFEQUFZQSxDQUFDVyxJQUFJLENBQUM7WUFBRUcsU0FBUztRQUF3QixHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUMvRTtBQUNGIiwic291cmNlcyI6WyIvVXNlcnMvZWovRG9jdW1lbnRzL0NvZGluZy9Qcm9qZWN0cy9sb2NhbGJvc3MvRnJvbnRlbmQvYXBwL2FwaS9sb2dpbi9yb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgand0IGZyb20gXCJqc29ud2VidG9rZW5cIjtcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcbmltcG9ydCBVc2VyIGZyb20gXCIuLi9fbW9kZWxzL1VzZXJcIjtcbmltcG9ydCB7IGNvbm5lY3REQiB9IGZyb20gXCIuLi9fbGliL21vbmdvZGJcIjtcblxuY29uc3QgU0VDUkVUX0tFWSA9IHByb2Nlc3MuZW52LlNFQ1JFVF9LRVkgYXMgc3RyaW5nO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXE6IFJlcXVlc3QpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBjb25uZWN0REIoKTtcbiAgICBjb25zdCB7IGVtYWlsLCBwYXNzd29yZCB9ID0gYXdhaXQgcmVxLmpzb24oKTtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgZW1haWwgfSk7XG5cbiAgICBpZiAoIXVzZXIpIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6IFwiSW52YWxpZCBjcmVkZW50aWFsc1wiIH0sIHsgc3RhdHVzOiA0MDAgfSk7XG4gICAgXG4gICAgY29uc3QgdmFsaWRQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKHBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKTtcbiAgICBpZiAoIXZhbGlkUGFzc3dvcmQpIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IG1lc3NhZ2U6IFwiSW52YWxpZCBjcmVkZW50aWFsc1wiIH0sIHsgc3RhdHVzOiA0MDAgfSk7XG4gICAgXG4gICAgY29uc3QgdG9rZW4gPSBqd3Quc2lnbih7IGlkOiB1c2VyLl9pZCwgZW1haWw6IHVzZXIuZW1haWwgfSwgU0VDUkVUX0tFWSwgeyBleHBpcmVzSW46IFwiN2RcIiB9KTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyB0b2tlbiwgdXNlciB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiBcIkludGVybmFsIFNlcnZlciBFcnJvclwiIH0sIHsgc3RhdHVzOiA1MDAgfSk7XG4gIH1cbn0iXSwibmFtZXMiOlsiand0IiwiTmV4dFJlc3BvbnNlIiwiYmNyeXB0IiwiVXNlciIsImNvbm5lY3REQiIsIlNFQ1JFVF9LRVkiLCJwcm9jZXNzIiwiZW52IiwiUE9TVCIsInJlcSIsImVtYWlsIiwicGFzc3dvcmQiLCJqc29uIiwidXNlciIsImZpbmRPbmUiLCJtZXNzYWdlIiwic3RhdHVzIiwidmFsaWRQYXNzd29yZCIsImNvbXBhcmUiLCJ0b2tlbiIsInNpZ24iLCJpZCIsIl9pZCIsImV4cGlyZXNJbiIsImVycm9yIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/login/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Flogin%2Froute&page=%2Fapi%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flogin%2Froute.ts&appDir=%2FUsers%2Fej%2FDocuments%2FCoding%2FProjects%2Flocalboss%2FFrontend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fej%2FDocuments%2FCoding%2FProjects%2Flocalboss%2FFrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Flogin%2Froute&page=%2Fapi%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flogin%2Froute.ts&appDir=%2FUsers%2Fej%2FDocuments%2FCoding%2FProjects%2Flocalboss%2FFrontend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fej%2FDocuments%2FCoding%2FProjects%2Flocalboss%2FFrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_ej_Documents_Coding_Projects_localboss_Frontend_app_api_login_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/login/route.ts */ \"(rsc)/./app/api/login/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/login/route\",\n        pathname: \"/api/login\",\n        filename: \"route\",\n        bundlePath: \"app/api/login/route\"\n    },\n    resolvedPagePath: \"/Users/ej/Documents/Coding/Projects/localboss/Frontend/app/api/login/route.ts\",\n    nextConfigOutput,\n    userland: _Users_ej_Documents_Coding_Projects_localboss_Frontend_app_api_login_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZsb2dpbiUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGbG9naW4lMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZsb2dpbiUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmVqJTJGRG9jdW1lbnRzJTJGQ29kaW5nJTJGUHJvamVjdHMlMkZsb2NhbGJvc3MlMkZGcm9udGVuZCUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZlaiUyRkRvY3VtZW50cyUyRkNvZGluZyUyRlByb2plY3RzJTJGbG9jYWxib3NzJTJGRnJvbnRlbmQmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQzZCO0FBQzFHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvZWovRG9jdW1lbnRzL0NvZGluZy9Qcm9qZWN0cy9sb2NhbGJvc3MvRnJvbnRlbmQvYXBwL2FwaS9sb2dpbi9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvbG9naW4vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9sb2dpblwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvbG9naW4vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvZWovRG9jdW1lbnRzL0NvZGluZy9Qcm9qZWN0cy9sb2NhbGJvc3MvRnJvbnRlbmQvYXBwL2FwaS9sb2dpbi9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Flogin%2Froute&page=%2Fapi%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flogin%2Froute.ts&appDir=%2FUsers%2Fej%2FDocuments%2FCoding%2FProjects%2Flocalboss%2FFrontend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fej%2FDocuments%2FCoding%2FProjects%2Flocalboss%2FFrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/bcryptjs","vendor-chunks/semver","vendor-chunks/jsonwebtoken","vendor-chunks/jws","vendor-chunks/ecdsa-sig-formatter","vendor-chunks/safe-buffer","vendor-chunks/ms","vendor-chunks/lodash.once","vendor-chunks/lodash.isstring","vendor-chunks/lodash.isplainobject","vendor-chunks/lodash.isnumber","vendor-chunks/lodash.isinteger","vendor-chunks/lodash.isboolean","vendor-chunks/lodash.includes","vendor-chunks/jwa","vendor-chunks/buffer-equal-constant-time"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Flogin%2Froute&page=%2Fapi%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Flogin%2Froute.ts&appDir=%2FUsers%2Fej%2FDocuments%2FCoding%2FProjects%2Flocalboss%2FFrontend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fej%2FDocuments%2FCoding%2FProjects%2Flocalboss%2FFrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();