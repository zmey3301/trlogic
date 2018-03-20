// Here you can store configs for all components and plugins
module.exports.styleImports = {
  stylus: [
    '@assets/styl/core/variables.styl',
    '@assets/styl/core/mixins.styl',
    '@assets/styl/core/sprite-coords.styl',
  ]
}
module.exports.adaptive = {
  'desktop:wide': {
    rem: 10,
    from: {
      width: 1352
    }
  },
  'desktop:thin': {
    k: .75,
    from: {
      width: 1008
    },
    base: {
      width: 1008
    },
    to: {
      width: 1351
    },
  },
  'tablet': {
    rem: 10,
    from: {
      width: 752
    },
    to: {
      width: 1008
    }
  },
  'mobile': {
    rem: 10,
    from: {
      width: 305
    },
    to: {
      width: 751
    }
  }
}

