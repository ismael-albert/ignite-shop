module.exports = {
    /* 1° part: */
    presets: [
        '@babel/preset-env',
        /*configuração pro preset importar o react nos arquivos */
        ['@babel/preset-react', { runtime: 'automatic' }]
    ]
}