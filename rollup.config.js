const babel = require('rollup-plugin-babel');
const { terser } = require('rollup-plugin-terser');

module.exports = {
    input: 'lib/index.js',
    output: {
        format: 'umd',
        name: 'ProMarkdown',
        file: 'dist/promarkdown.min.js',
        globals: {
            react: "React"
        }
    },
    plugins: [
        babel({
            exclude: 'node_modules/**'
        }),
        terser()
    ]
}