module.exports = {
    resolve: {
        fallback: { process: require.resolve('process/browser') },
        fallback: { crypto: false },
        

    },
    target: 'node'
};