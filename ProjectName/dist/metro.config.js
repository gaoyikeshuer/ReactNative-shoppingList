"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { getDefaultConfig } = require('metro-config');
module.exports = (() => __awaiter(void 0, void 0, void 0, function* () {
    const { resolver: { sourceExts, assetExts }, } = yield getDefaultConfig();
    return {
        transformer: {
            getTransformOptions: () => __awaiter(void 0, void 0, void 0, function* () {
                return ({
                    transform: {
                        experimentalImportSupport: false,
                        inlineRequires: true,
                    },
                });
            }),
            babelTransformerPath: require.resolve('react-native-svg-transformer'),
        },
        resolver: {
            assetExts: assetExts.filter(ext => ext !== 'svg'),
            sourceExts: [...sourceExts, 'svg', 'cjs'],
        },
    };
}))();
//# sourceMappingURL=metro.config.js.map