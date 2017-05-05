function buildConfig(env) {
    return require('./configs/webpack/' + env + '.js')({ env: env })
}

module.exports = buildConfig;
