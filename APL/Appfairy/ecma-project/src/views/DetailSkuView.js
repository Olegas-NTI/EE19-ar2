/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=60102a2749591852098043e8").then(body => body.text()), isAsync: false },
  { loading: fetch("js/test-workflow-with-cms.js").then(body => body.text()), isAsync: false },
]

let Controller

class DetailSkuView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('..\controllers/DetailSkuController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = DetailSkuView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '60102a28f50756907ec05b95'
    htmlEl.dataset['wfSite'] = '60102a2749591852098043e8'

    scripts.concat(null).reduce((active, next) => Promise.resolve(active).then((active) => {
      const loading = active.loading.then((script) => {
        new Function(`
          with (this) {
            eval(arguments[0])
          }
        `).call(window, script)

        return next
      })

      return active.isAsync ? next : loading
    }))
  }

  render() {
    const proxies = DetailSkuView.Controller !== DetailSkuView ? transformProxies(this.props.children) : {

    }

    return (
      <span>
        <style dangerouslySetInnerHTML={{ __html: `
          @import url(D:\\css\\normalize.css);
          @import url(D:\\css\\components.css);
          @import url(D:\\css\\test-workflow-with-cms.css);
        ` }} />
        <span className="af-view">
          <div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default DetailSkuView

/* eslint-enable */