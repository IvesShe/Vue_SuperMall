module.exports = {
    configureWebpack: {
        resolve: {
            alias: {
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views',
            }
        }
    },
    // devServer: {
    //     overlay: {
    //       warnings: false, //不显示警告
    //       errors: false	//不显示错误
    //     }
    //   },
    lintOnSave:false //關閉eslint檢查
}