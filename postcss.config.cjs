module.exports = {
    plugins: {
        autoprefixer: {
            // autoprefixer自动补齐CSS3前缀
            overrideBrowserslist: [
                "Android 4.1",
                "iOS 7.1",
                "Chrome > 31",
                "ff > 31",
                "ie >= 8",
                "last 10 versions"
            ]
        },
        "postcss-pxtorem": {
            rootValue({ file }) {
                return 16; // 设计稿宽度为1080px，基准值分别为108和216
            },
            remUnit: 149.5,
            propList: ["*"],    // 需要转换的css属性，默认*全部
        }
    }
}
