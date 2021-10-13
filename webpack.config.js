module.exports = {
  // main file
  entry: './app/app.ts',
  // source map should be used inline with final bundle
  devtool: 'inline-source-map',
  mode: 'development',
  // configures add-on package named ts-loader
  // takes care of running typescript compiler
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  // tells webpack what files to use for module resolution
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  // specifies name of bundle file webpack will produce
  output: {
    filename: 'bundle.js'
  },
  // stop browser from reloading every time a new bundle is produced
  devServer: {
    inline: false
  }
};
