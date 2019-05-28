import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

export const registerBaseComponents = () => {
  const requireComponent = require.context(
  './components/Base',
  false,
  /Base[\w-]+\.vue$/
  )
  requireComponent.keys().forEach(fileName => {
    const componentConfig = requireComponent(fileName)
    const componentName = upperFirst(camelCase(fileName.replace(/^\.\//, '').replace(/\.\w+$/, '')))
    Vue.component(componentName, componentConfig.default || componentConfig)
  })
}
