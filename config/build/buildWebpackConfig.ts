import { type BuildOptions } from './types/config'
import type webpack from 'webpack'
import { buildLoaders } from './buildLoaders'
import { buildResolvers } from './buildResolvers'
import { buildPlugins } from './buildPlugins'
import { buildDevServer } from './buildDevServer'

export function buildWebpackConfig (options: BuildOptions): webpack.Configuration {
  const { paths, mode, isDev } = options

  return {
    mode,
    entry: paths.entry,
    module: {
      rules: buildLoaders(options)
    },
    devtool: isDev ? 'inline-source-map' : undefined,
    resolve: buildResolvers(options),
    plugins: buildPlugins(options),
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true
    },
    devServer: isDev ? buildDevServer(options) : undefined
  }
}
