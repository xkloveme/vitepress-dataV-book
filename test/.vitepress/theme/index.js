import { Theme } from '../../../src/theme'
import register from '../../../src/core/register'

const submodules = import.meta.globEager('~/components/**/*.vue')
const stores = ()=> {}

export default {
  ...Theme,
  enhanceApp({app}) {
    register(app, submodules, stores)
  },
}

