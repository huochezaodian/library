// 1.拦截生成swig模板
// 2.嵌入swig文件对应的js和css
const pluginName = 'HtmlAfterWebpackPlugin';
const assetsHelp = data => {
    let js = [];
    let css = [];
    const dir = {
        js: item => `<script src="${item}"></script>`,
        css: item => `<link rel="stylesheet" href="${item}">`
    };
    for (let jsitem of data.js) {
        js.push(dir.js(jsitem));
    }
    for (let cssitem of data.css) {
        css.push(dir.css(cssitem));
    }
    return {
        js,
        css
    };
};

class HtmlAfterWebpackPlugin {
    apply (compiler) {
        compiler.hooks.compilation.tab(pluginName, compilation => {
            compilation.hooks.htmlWebpackPluginAfterHtmlProcessing.tab(pluginName, htmlPluginData => {
                let _html = htmlPluginData.html;
                const result = assetsHelp(htmlPluginData.assets);
                _html = _.html.replace(/pages:/g, "../../");
                _html = _.html.replace(/components:/g, "../../../components/");
                _html = _html.replace("<!--injectjs-->", result.js.join(""));
                _html = _html.replace("<!--injectcss-->", result.css.join(""));
                htmlPluginData.html = _html;
            })
        })
    }
}

module.exports = HtmlAfterWebpackPlugin;