/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=60102a2749591852098043e8").then(body => body.text()), isAsync: false },
  { loading: fetch("js/test-workflow-with-cms.js").then(body => body.text()), isAsync: false },
]

let Controller

class IndexView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('..\controllers/IndexController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = IndexView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '60102a28f507566b35c05b8e'
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
    const proxies = IndexView.Controller !== IndexView ? transformProxies(this.props.children) : {

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
            <div className="af-class-menu-wrapper">
              <div className="w-dyn-list">
                <div role="list" className="w-dyn-items">
                  <div role="listitem" className="w-dyn-item">
                    <a href="#" className="af-class-banner w-inline-block">
                      <div className="af-class-container">
                        <div className="af-class-banner-content-wrapper">
                          <div className="af-class-pill af-class-primary af-class-alert-bar">Announcement</div>
                          <div />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="af-class-alert-empty w-dyn-empty" />
              </div>
              <div data-collapse="medium" data-animation="over-right" data-duration={400} role="banner" className="af-class-navbar w-nav">
                <div className="af-class-container">
                  <div className="af-class-nav-wrapper">
                    <a href="index.html" aria-current="page" className="af-class-brand w-nav-brand w--current"><img src="images/logo.svg" alt="Acme Outdoors Logo" /></a>
                    <div className="af-class-cart-nav-wrapper">
                      <nav role="navigation" className="af-class-nav-menu w-nav-menu">
                        <a href="index.html" aria-current="page" className="af-class-nav-link w-nav-link w--current">Home</a>
                        <a href="about.html" className="af-class-nav-link w-nav-link">About</a>
                        <a href="shop.html" className="af-class-nav-link w-nav-link">Shop</a>
                        <a href="donations.html" className="af-class-nav-link w-nav-link">Donate</a>
                        <a href="contact.html" className="af-class-nav-link w-nav-link">Contact</a>
                      </nav>
                      <div>
                        <div data-node-type="commerce-cart-wrapper" data-open-product data-wf-cart-type="rightSidebar" data-wf-cart-query data-wf-page-link-href-prefix className="w-commerce-commercecartwrapper af-class-cart-menu">
                          <a href="#" data-node-type="commerce-cart-open-link" className="w-commerce-commercecartopenlink af-class-cart w-inline-block"><img src="images/cart_1.svg" alt className="af-class-cart-icon" />
                            <div className="w-commerce-commercecartopenlinkcount af-class-cart-quantity-cart">0</div>
                          </a>
                          <div data-node-type="commerce-cart-container-wrapper" style={{display: 'none'}} className="w-commerce-commercecartcontainerwrapper w-commerce-commercecartcontainerwrapper--cartType-rightSidebar">
                            <div data-node-type="commerce-cart-container" className="w-commerce-commercecartcontainer">
                              <div className="w-commerce-commercecartheader">
                                <h4 className="w-commerce-commercecartheading">Your Cart</h4>
                                <a href="#" data-node-type="commerce-cart-close-link" className="w-commerce-commercecartcloselink w-inline-block"><svg width="16px" height="16px" viewBox="0 0 16 16">
                                    <g stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
                                      <g fillRule="nonzero" fill="#333333">
                                        <polygon points="6.23223305 8 0.616116524 13.6161165 2.38388348 15.3838835 8 9.76776695 13.6161165 15.3838835 15.3838835 13.6161165 9.76776695 8 15.3838835 2.38388348 13.6161165 0.616116524 8 6.23223305 2.38388348 0.616116524 0.616116524 2.38388348 6.23223305 8" />
                                      </g>
                                    </g>
                                  </svg></a>
                              </div>
                              <div className="w-commerce-commercecartformwrapper">
                                <form data-node-type="commerce-cart-form" style={{display: 'none'}} className="w-commerce-commercecartform">
                                  <div className="w-commerce-commercecartlist" data-wf-collection="database.commerceOrder.userItems" data-wf-template-id="wf-template-d0872620-da83-2e6a-1190-a6df4dad026e" />
                                  <div className="w-commerce-commercecartfooter">
                                    <div className="w-commerce-commercecartlineitem">
                                      <div>Subtotal</div>
                                      <div className="w-commerce-commercecartordervalue" />
                                    </div>
                                    <div>
                                      <div data-node-type="commerce-cart-quick-checkout-actions">
                                        <a data-node-type="commerce-cart-apple-pay-button" style={{backgroundImage: '-webkit-named-image(apple-pay-logo-white)', backgroundSize: '100% 50%', backgroundPosition: '50% 50%', backgroundRepeat: 'no-repeat'}} className="w-commerce-commercecartapplepaybutton">
                                          <div />
                                        </a>
                                        <a data-node-type="commerce-cart-quick-checkout-button" style={{display: 'none'}} className="w-commerce-commercecartquickcheckoutbutton"><svg className="w-commerce-commercequickcheckoutgoogleicon" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width={16} height={16} viewBox="0 0 16 16">
                                            <defs>
                                              <polygon id="google-mark-a" points="0 .329 3.494 .329 3.494 7.649 0 7.649" />
                                              <polygon id="google-mark-c" points=".894 0 13.169 0 13.169 6.443 .894 6.443" />
                                            </defs>
                                            <g fill="none" fillRule="evenodd">
                                              <path fill="#4285F4" d="M10.5967,12.0469 L10.5967,14.0649 L13.1167,14.0649 C14.6047,12.6759 15.4577,10.6209 15.4577,8.1779 C15.4577,7.6339 15.4137,7.0889 15.3257,6.5559 L7.8887,6.5559 L7.8887,9.6329 L12.1507,9.6329 C11.9767,10.6119 11.4147,11.4899 10.5967,12.0469" />
                                              <path fill="#34A853" d="M7.8887,16 C10.0137,16 11.8107,15.289 13.1147,14.067 C13.1147,14.066 13.1157,14.065 13.1167,14.064 L10.5967,12.047 C10.5877,12.053 10.5807,12.061 10.5727,12.067 C9.8607,12.556 8.9507,12.833 7.8887,12.833 C5.8577,12.833 4.1387,11.457 3.4937,9.605 L0.8747,9.605 L0.8747,11.648 C2.2197,14.319 4.9287,16 7.8887,16" />
                                              <g transform="translate(0 4)">
                                                <mask id="google-mark-b" fill="#fff">
                                                  <use xlinkHref="#google-mark-a" />
                                                </mask>
                                                <path fill="#FBBC04" d="M3.4639,5.5337 C3.1369,4.5477 3.1359,3.4727 3.4609,2.4757 L3.4639,2.4777 C3.4679,2.4657 3.4749,2.4547 3.4789,2.4427 L3.4939,0.3287 L0.8939,0.3287 C0.8799,0.3577 0.8599,0.3827 0.8459,0.4117 C-0.2821,2.6667 -0.2821,5.3337 0.8459,7.5887 L0.8459,7.5997 C0.8549,7.6167 0.8659,7.6317 0.8749,7.6487 L3.4939,5.6057 C3.4849,5.5807 3.4729,5.5587 3.4639,5.5337" mask="url(#google-mark-b)" />
                                              </g>
                                              <mask id="google-mark-d" fill="#fff">
                                                <use xlinkHref="#google-mark-c" />
                                              </mask>
                                              <path fill="#EA4335" d="M0.894,4.3291 L3.478,6.4431 C4.113,4.5611 5.843,3.1671 7.889,3.1671 C9.018,3.1451 10.102,3.5781 10.912,4.3671 L13.169,2.0781 C11.733,0.7231 9.85,-0.0219 7.889,0.0001 C4.941,0.0001 2.245,1.6791 0.894,4.3291" mask="url(#google-mark-d)" />
                                            </g>
                                          </svg><svg className="w-commerce-commercequickcheckoutmicrosofticon" xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16">
                                            <g fill="none" fillRule="evenodd">
                                              <polygon fill="#F05022" points="7 7 1 7 1 1 7 1" />
                                              <polygon fill="#7DB902" points="15 7 9 7 9 1 15 1" />
                                              <polygon fill="#00A4EE" points="7 15 1 15 1 9 7 9" />
                                              <polygon fill="#FFB700" points="15 15 9 15 9 9 15 9" />
                                            </g>
                                          </svg>
                                          <div>Pay with browser.</div>
                                        </a>
                                      </div>
                                      <a href="checkout.html" value="Continue to Checkout" data-node-type="cart-checkout-button" className="w-commerce-commercecartcheckoutbutton af-class-btn" data-loading-text="Hang Tight...">Continue to Checkout</a>
                                    </div>
                                  </div>
                                </form>
                                <div className="w-commerce-commercecartemptystate">
                                  <div>No items found.</div>
                                </div>
                                <div style={{display: 'none'}} data-node-type="commerce-cart-error" className="w-commerce-commercecarterrorstate af-class-alert-wrapper af-class-danger">
                                  <div className="w-cart-error-msg" data-w-cart-quantity-error="Product is not available in this quantity." data-w-cart-checkout-error="Checkout is disabled on this site." data-w-cart-general-error="Something went wrong when adding this item to the cart." data-w-cart-cart_order_min-error="The order minimum was not met. Add more items to your cart to continue.">Product is not available in this quantity.</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="af-class-nav-button w-nav-button">
                        <div className="w-icon-nav-menu" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="af-class-hero-section">
              <div className="af-class-container">
                <div className="af-class-hero-wrapper">
                  <h1 className="af-class-hero-heading">Serving you <br />since 1989.</h1>
                  <p className="af-class-hero-paragraph">Acme Outdoors is an outdoor and adventure shop located in the Boathouse District in Oklahoma City.</p>
                  <div className="af-class-hero-button-wrapper">
                    <a href="shop.html" className="af-class-btn af-class-light af-class-outline w-button">Shop Merch</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="af-class-support-section">
              <div className="af-class-container">
                <div className="af-class-support-top-wrapper">
                  <div className="af-class-support-top-left">
                    <div className="af-class-support-top-details-text">Ways to support</div>
                    <h2 className="af-class-support-top-heading">Support Acme Outdoors.</h2>
                  </div>
                  <div className="af-class-support-top-right">
                    <p>COVID-19 has forced us to close our retail space, but we need support from patrons like yourself now more than ever. Below, we’ve listed the best ways to help us through this season.</p>
                  </div>
                </div>
                <div className="af-class-support-wrapper">
                  <div className="af-class-support-column">
                    <div className="af-class-support-square">
                      <div className="af-class-support-square-number">01</div>
                      <div className="af-class-support-square-text">SHOP<br />PRODUCTS</div><img src="images/Circle.svg" alt="Circle Decoration in Shop Products Block" className="af-class-support-square-image" />
                    </div>
                    <p>Our full product line is still available online here on our site! Getting outside and hiking is still something you can do. Get your gear now!</p>
                  </div>
                  <div className="af-class-support-column">
                    <div className="af-class-support-square">
                      <div className="af-class-support-square-number">02</div>
                      <div className="af-class-support-square-text">Donate</div><img src="images/Triangle.svg" alt="Triangle Decoration in Donate Block" className="af-class-support-square-image af-class-triangle" />
                    </div>
                    <p>Since we've changed the way we operate to online only, and to ensure your safety, not all our staff is working. Donate to keep them afloat.</p>
                  </div>
                  <div className="af-class-support-column">
                    <div className="af-class-support-square">
                      <div className="af-class-support-square-number">03</div>
                      <div className="af-class-support-square-text">Buy <br />GIFT CARDS</div><img src="images/Rectangle.svg" alt="Rectangle Decoration in Buy Gift Cards Block" className="af-class-support-square-image af-class-rectangle" />
                    </div>
                    <p>Have all the outdoor gear you need for now?&nbsp;Buy a gift card and use it later or share it with friends and family. </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="af-class-safe-section">
              <div className="af-class-container">
                <div className="af-class-safe-wrapper">
                  <h2 className="af-class-safe-heading">How we're keeping you safe during COVID-19</h2>
                  <p className="af-class-safe-paragraph">As an outdoor shop, we’ve taken precautionary measures to ensure the safety of all our customers and team members.</p>
                  <div className="af-class-safe-button-wrapper">
                    <a href="/alert/how-were-responding-to-covid-19" className="af-class-btn af-class-light af-class-hero af-class-safe w-button">Read Our Statement</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="af-class-products-section">
              <div className="af-class-container">
                <div className="af-class-shop-top-wrapper">
                  <div className="af-class-support-top-left">
                    <div className="af-class-support-top-details-text">shop products</div>
                    <h2 className="af-class-support-top-heading">Open 24/7/365.</h2>
                  </div>
                  <div className="af-class-support-top-right" />
                </div>
                <div className="af-class-products-list-wrapper w-dyn-list">
                  <div role="list" className="af-class-products-list w-dyn-items">
                    <div role="listitem" className="w-dyn-item">
                      <div className="af-class-shop-item-wrapper">
                        <a href="#" className="af-class-shop-item-link-wrapper w-inline-block">
                          <div className="af-class-shop-image af-class-tumbler-1">
                            <div className="af-class-pill-2 af-class-badge af-class-primary af-class-sale">Sale</div>
                          </div>
                          <div className="af-class-shop-details-wrapper">
                            <div className="af-class-shop-details-left">
                              <div className="af-class-shop-item-name" />
                              <div className="af-class-price-wrapper">
                                <div className="af-class-shop-item-price" />
                                <div className="af-class-shop-item-price af-class-compare" />
                              </div>
                            </div>
                          </div>
                        </a>
                        <div className="af-class-shop-button-wrapper">
                          <a href="#" className="af-class-btn w-button">Details</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-dyn-empty">
                    <div>No items found.</div>
                  </div>
                </div>
                <div className="af-class-shop-more">
                  <a href="shop.html" className="af-class-btn af-class-dark w-button">View All Products</a>
                </div>
              </div>
            </div>
            <div className="af-class-shop-local-section">
              <div className="af-class-container af-class-shop-local-container">
                <div className="af-class-shop-local-wrapper">
                  <div className="af-class-shop-local-left" />
                  <div className="af-class-shop-local-right">
                    <div className="af-class-shop-local-content-wrapper">
                      <h2 className="af-class-shop-local-heading">Shop Local.</h2>
                      <p>We know that during COVID-19, a lot of folks around the city and state are feeling uneasy about the future - we’re not sure what the future holds either.</p>
                      <p>That said: we know that we love making sure you have the gear you need for your adventures, and we’re going to keep doing that - with our team - until the city tells us we can’t.</p>
                      <p>But as long as folks like yourself support small businesses around the city, then we’ll be here — every day, making sure your orders arrive on time.</p>
                      <p>-------</p>
                      <div>Jane &amp; John Doe</div>
                      <div><strong>Acme Outdoors</strong></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="af-class-footer">
              <div className="af-class-container">
                <div className="af-class-footer-wrapper">
                  <div className="af-class-footer-logo-column">
                    <a href="index.html" aria-current="page" className="w-inline-block w--current"><img src="images/logo.svg" alt="Acme Outdoors Logo" /></a>
                  </div>
                  <div>
                    <a href="https://twitter.com/webflow" target="_blank" className="af-class-social-footer-link w-inline-block"><img src="images/Twitter_Social_Icon_Rounded_Square_White.svg" width={30} alt="Twitter Logo" /></a>
                    <a href="https://www.facebook.com/webflow" className="af-class-social-footer-link w-inline-block"><img src="images/Facebook-Logo.svg" width={30} alt="Facebook Logo" /></a>
                    <a href="https://www.instagram.com/webflow/" target="_blank" className="af-class-social-footer-link w-inline-block"><img src="images/Insta.svg" width={30} alt="Instagram Logo" /></a>
                  </div>
                </div>
                <div className="af-class-footer-bottom-wrapper">
                  <div className="af-class-small af-class-footer-small">Made In <a href="https://webflow.com" target="_blank">Webflow</a>. © 2020.</div>
                </div>
              </div>
            </div>
            {/* [if lte IE 9]><![endif] */}
          </div>
        </span>
      </span>
    )
  }
}

export default IndexView

/* eslint-enable */