const {defineConfig} = require('@vue/cli-service');
const packageJson = require('./package.json');

module.exports = defineConfig({
    outputDir: 'donate',
    publicPath: '/donate/',
    transpileDependencies: true,
    chainWebpack: config => {
        config
            .plugin('html')
            .tap((args) => {
                if (packageJson.description) {
                    args[0].title = packageJson.description;
                }
                return args;
            })

        // config.module.rule('images').use('url-loader').tap((options) => {
        //     const newOptions = options;
        //     newOptions.publicPath = '/donate';
        //     return newOptions;
        // });
    },
})
