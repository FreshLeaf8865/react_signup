/**
 * Created by Jens on 05.05.2017.
 */
function buildConfig(env) {
    return require('./configs/webpack/' + env + '.js')({ env: env })
}

module.exports = buildConfig;
