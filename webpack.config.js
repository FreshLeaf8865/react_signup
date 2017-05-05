/**
 * Created by Artyom on 11.02.2017.
 */
function buildConfig(env) {
    return require('./configs/webpack/' + env + '.js')({ env: env })
}

module.exports = buildConfig;
