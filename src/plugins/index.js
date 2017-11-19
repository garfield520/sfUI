//  Global style - less
import './less/index.less'

//  InstanceMethods
import instanceMethods from './instanceMethods'
//  Components
import Components from './components'

const install = (Vue, options = {}) => {
  //  Load instance methods
  Object.assign(Vue.prototype, instanceMethods)

  //  Add components to Vue
  Components.map(component => {
    Vue.component(component.name, component)
  })
}

export default install
