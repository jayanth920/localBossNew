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
exports.id = "app/api/cart/remove/route";
exports.ids = ["app/api/cart/remove/route"];
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

/***/ "(rsc)/./app/api/cart/remove/route.ts":
/*!**************************************!*\
  !*** ./app/api/cart/remove/route.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_lib/mongodb */ \"(rsc)/./app/api/_lib/mongodb.ts\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_models/User */ \"(rsc)/./app/api/_models/User.ts\");\n\n\n\nasync function POST(req) {\n    try {\n        await (0,_lib_mongodb__WEBPACK_IMPORTED_MODULE_1__.connectDB)();\n        const { userId, itemId } = await req.json();\n        const user = await _models_User__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findById(userId);\n        if (!user) return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: \"User not found\"\n        }, {\n            status: 404\n        });\n        const item = user.cart.find((i)=>i.id === itemId);\n        if (item) {\n            if (item.quantity > 1) {\n                item.quantity -= 1; // Decrease quantity by 1\n            } else {\n                user.cart = user.cart.filter((i)=>i.id !== itemId); // Remove item if quantity is 1\n            }\n            await user.save();\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(user.cart);\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            message: \"Internal Server Error\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2NhcnQvcmVtb3ZlL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBd0Q7QUFDVDtBQUNUO0FBRS9CLGVBQWVHLEtBQUtDLEdBQWdCO0lBQ3pDLElBQUk7UUFDRixNQUFNSCx1REFBU0E7UUFDZixNQUFNLEVBQUVJLE1BQU0sRUFBRUMsTUFBTSxFQUFFLEdBQUcsTUFBTUYsSUFBSUcsSUFBSTtRQUN6QyxNQUFNQyxPQUFPLE1BQU1OLG9EQUFJQSxDQUFDTyxRQUFRLENBQUNKO1FBRWpDLElBQUksQ0FBQ0csTUFBTSxPQUFPUixxREFBWUEsQ0FBQ08sSUFBSSxDQUFDO1lBQUVHLFNBQVM7UUFBaUIsR0FBRztZQUFFQyxRQUFRO1FBQUk7UUFFakYsTUFBTUMsT0FBT0osS0FBS0ssSUFBSSxDQUFDQyxJQUFJLENBQUMsQ0FBQ0MsSUFBV0EsRUFBRUMsRUFBRSxLQUFLVjtRQUVqRCxJQUFJTSxNQUFNO1lBQ1IsSUFBSUEsS0FBS0ssUUFBUSxHQUFHLEdBQUc7Z0JBQ3JCTCxLQUFLSyxRQUFRLElBQUksR0FBRyx5QkFBeUI7WUFDL0MsT0FBTztnQkFDTFQsS0FBS0ssSUFBSSxHQUFHTCxLQUFLSyxJQUFJLENBQUNLLE1BQU0sQ0FBQyxDQUFDSCxJQUFXQSxFQUFFQyxFQUFFLEtBQUtWLFNBQVMsK0JBQStCO1lBQzVGO1lBQ0EsTUFBTUUsS0FBS1csSUFBSTtRQUNqQjtRQUVBLE9BQU9uQixxREFBWUEsQ0FBQ08sSUFBSSxDQUFDQyxLQUFLSyxJQUFJO0lBQ3BDLEVBQUUsT0FBT08sT0FBTztRQUNkLE9BQU9wQixxREFBWUEsQ0FBQ08sSUFBSSxDQUFDO1lBQUVHLFNBQVM7UUFBd0IsR0FBRztZQUFFQyxRQUFRO1FBQUk7SUFDL0U7QUFDRiIsInNvdXJjZXMiOlsiL1VzZXJzL2VqL0RvY3VtZW50cy9Db2RpbmcvUHJvamVjdHMvbG9jYWxib3NzL0Zyb250ZW5kL2FwcC9hcGkvY2FydC9yZW1vdmUvcm91dGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuaW1wb3J0IHsgY29ubmVjdERCIH0gZnJvbSBcIi4uLy4uL19saWIvbW9uZ29kYlwiO1xuaW1wb3J0IFVzZXIgZnJvbSBcIi4uLy4uL19tb2RlbHMvVXNlclwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXE6IE5leHRSZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgY29ubmVjdERCKCk7XG4gICAgY29uc3QgeyB1c2VySWQsIGl0ZW1JZCB9ID0gYXdhaXQgcmVxLmpzb24oKTtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgVXNlci5maW5kQnlJZCh1c2VySWQpO1xuXG4gICAgaWYgKCF1c2VyKSByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBtZXNzYWdlOiBcIlVzZXIgbm90IGZvdW5kXCIgfSwgeyBzdGF0dXM6IDQwNCB9KTtcblxuICAgIGNvbnN0IGl0ZW0gPSB1c2VyLmNhcnQuZmluZCgoaTogYW55KSA9PiBpLmlkID09PSBpdGVtSWQpO1xuXG4gICAgaWYgKGl0ZW0pIHtcbiAgICAgIGlmIChpdGVtLnF1YW50aXR5ID4gMSkge1xuICAgICAgICBpdGVtLnF1YW50aXR5IC09IDE7IC8vIERlY3JlYXNlIHF1YW50aXR5IGJ5IDFcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHVzZXIuY2FydCA9IHVzZXIuY2FydC5maWx0ZXIoKGk6IGFueSkgPT4gaS5pZCAhPT0gaXRlbUlkKTsgLy8gUmVtb3ZlIGl0ZW0gaWYgcXVhbnRpdHkgaXMgMVxuICAgICAgfVxuICAgICAgYXdhaXQgdXNlci5zYXZlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHVzZXIuY2FydCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHsgbWVzc2FnZTogXCJJbnRlcm5hbCBTZXJ2ZXIgRXJyb3JcIiB9LCB7IHN0YXR1czogNTAwIH0pO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiY29ubmVjdERCIiwiVXNlciIsIlBPU1QiLCJyZXEiLCJ1c2VySWQiLCJpdGVtSWQiLCJqc29uIiwidXNlciIsImZpbmRCeUlkIiwibWVzc2FnZSIsInN0YXR1cyIsIml0ZW0iLCJjYXJ0IiwiZmluZCIsImkiLCJpZCIsInF1YW50aXR5IiwiZmlsdGVyIiwic2F2ZSIsImVycm9yIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/cart/remove/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcart%2Fremove%2Froute&page=%2Fapi%2Fcart%2Fremove%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcart%2Fremove%2Froute.ts&appDir=%2FUsers%2Fej%2FDocuments%2FCoding%2FProjects%2Flocalboss%2FFrontend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fej%2FDocuments%2FCoding%2FProjects%2Flocalboss%2FFrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcart%2Fremove%2Froute&page=%2Fapi%2Fcart%2Fremove%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcart%2Fremove%2Froute.ts&appDir=%2FUsers%2Fej%2FDocuments%2FCoding%2FProjects%2Flocalboss%2FFrontend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fej%2FDocuments%2FCoding%2FProjects%2Flocalboss%2FFrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_ej_Documents_Coding_Projects_localboss_Frontend_app_api_cart_remove_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/cart/remove/route.ts */ \"(rsc)/./app/api/cart/remove/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/cart/remove/route\",\n        pathname: \"/api/cart/remove\",\n        filename: \"route\",\n        bundlePath: \"app/api/cart/remove/route\"\n    },\n    resolvedPagePath: \"/Users/ej/Documents/Coding/Projects/localboss/Frontend/app/api/cart/remove/route.ts\",\n    nextConfigOutput,\n    userland: _Users_ej_Documents_Coding_Projects_localboss_Frontend_app_api_cart_remove_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZjYXJ0JTJGcmVtb3ZlJTJGcm91dGUmcGFnZT0lMkZhcGklMkZjYXJ0JTJGcmVtb3ZlJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGY2FydCUyRnJlbW92ZSUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmVqJTJGRG9jdW1lbnRzJTJGQ29kaW5nJTJGUHJvamVjdHMlMkZsb2NhbGJvc3MlMkZGcm9udGVuZCUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZlaiUyRkRvY3VtZW50cyUyRkNvZGluZyUyRlByb2plY3RzJTJGbG9jYWxib3NzJTJGRnJvbnRlbmQmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ21DO0FBQ2hIO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvZWovRG9jdW1lbnRzL0NvZGluZy9Qcm9qZWN0cy9sb2NhbGJvc3MvRnJvbnRlbmQvYXBwL2FwaS9jYXJ0L3JlbW92ZS9yb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvY2FydC9yZW1vdmUvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9jYXJ0L3JlbW92ZVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvY2FydC9yZW1vdmUvcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCIvVXNlcnMvZWovRG9jdW1lbnRzL0NvZGluZy9Qcm9qZWN0cy9sb2NhbGJvc3MvRnJvbnRlbmQvYXBwL2FwaS9jYXJ0L3JlbW92ZS9yb3V0ZS50c1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcart%2Fremove%2Froute&page=%2Fapi%2Fcart%2Fremove%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcart%2Fremove%2Froute.ts&appDir=%2FUsers%2Fej%2FDocuments%2FCoding%2FProjects%2Flocalboss%2FFrontend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fej%2FDocuments%2FCoding%2FProjects%2Flocalboss%2FFrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fcart%2Fremove%2Froute&page=%2Fapi%2Fcart%2Fremove%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fcart%2Fremove%2Froute.ts&appDir=%2FUsers%2Fej%2FDocuments%2FCoding%2FProjects%2Flocalboss%2FFrontend%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fej%2FDocuments%2FCoding%2FProjects%2Flocalboss%2FFrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();