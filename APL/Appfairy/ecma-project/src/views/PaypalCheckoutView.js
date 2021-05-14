/* eslint-disable */

import React from 'react'
import { createScope, map, transformProxies } from './helpers'

const scripts = [
  { loading: fetch("https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=60102a2749591852098043e8").then(body => body.text()), isAsync: false },
  { loading: fetch("js/test-workflow-with-cms.js").then(body => body.text()), isAsync: false },
]

let Controller

class PaypalCheckoutView extends React.Component {
  static get Controller() {
    if (Controller) return Controller

    try {
      Controller = require('..\controllers/PaypalCheckoutController')
      Controller = Controller.default || Controller

      return Controller
    }
    catch (e) {
      if (e.code == 'MODULE_NOT_FOUND') {
        Controller = PaypalCheckoutView

        return Controller
      }

      throw e
    }
  }

  componentDidMount() {
    const htmlEl = document.querySelector('html')
    htmlEl.dataset['wfPage'] = '60102a28f50756e482c05b97'
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
    const proxies = PaypalCheckoutView.Controller !== PaypalCheckoutView ? transformProxies(this.props.children) : {

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
                    <a href="index.html" className="af-class-brand w-nav-brand"><img src="images/logo.svg" alt="Acme Outdoors Logo" /></a>
                    <div className="af-class-cart-nav-wrapper">
                      <nav role="navigation" className="af-class-nav-menu w-nav-menu">
                        <a href="index.html" className="af-class-nav-link w-nav-link">Home</a>
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
            <div className="af-class-page-title-section">
              <div className="af-class-container">
                <h1 className="af-class-page-title">Checkout</h1>
              </div>
            </div>
            <div className="af-class-content-section">
              <div data-node-type="commerce-paypal-checkout-form-container" data-wf-checkout-query data-wf-page-link-href-prefix className="w-commerce-commercepaypalcheckoutformcontainer af-class-paypal-checkout-form">
                <div className="w-commerce-commercelayoutcontainer af-class-container-checkout w-container">
                  <div className="w-commerce-commercelayoutmain">
                    <form data-node-type="commerce-checkout-shipping-methods-wrapper" className="w-commerce-commercecheckoutshippingmethodswrapper">
                      <div className="w-commerce-commercecheckoutblockheader af-class-block-header">
                        <h4>Shipping Method</h4>
                      </div>
                      <fieldset>
                        <div data-node-type="commerce-checkout-shipping-methods-list" className="w-commerce-commercecheckoutshippingmethodslist" data-wf-collection="database.commerceOrder.availableShippingMethods" data-wf-template-id="wf-template-5e853c3379b34f2bd3675eec000000000012"><label className="w-commerce-commercecheckoutshippingmethoditem"><input type="radio" required name="shipping-method-choice" />
                            <div className="w-commerce-commercecheckoutshippingmethoddescriptionblock">
                              <div className="w-commerce-commerceboldtextblock" />
                              <div />
                            </div>
                            <div />
                          </label></div>
                        <div data-node-type="commerce-checkout-shipping-methods-empty-state" style={{display: 'none'}} className="w-commerce-commercecheckoutshippingmethodsemptystate">
                          <div>No shipping methods are available for the address given.</div>
                        </div>
                      </fieldset>
                    </form>
                    <div className="w-commerce-commercecheckoutcustomerinfosummarywrapper">
                      <div className="w-commerce-commercecheckoutsummaryblockheader af-class-block-header">
                        <h4>Customer Information</h4>
                      </div>
                      <fieldset className="w-commerce-commercecheckoutblockcontent af-class-block-content">
                        <div className="w-commerce-commercecheckoutrow">
                          <div className="w-commerce-commercecheckoutcolumn">
                            <div className="w-commerce-commercecheckoutsummaryitem"><label className="w-commerce-commercecheckoutsummarylabel">Email</label>
                              <div />
                            </div>
                          </div>
                          <div className="w-commerce-commercecheckoutcolumn">
                            <div className="w-commerce-commercecheckoutsummaryitem"><label className="w-commerce-commercecheckoutsummarylabel">Shipping Address</label>
                              <div />
                              <div />
                              <div />
                              <div className="w-commerce-commercecheckoutsummaryflexboxdiv">
                                <div className="w-commerce-commercecheckoutsummarytextspacingondiv" />
                                <div className="w-commerce-commercecheckoutsummarytextspacingondiv" />
                                <div className="w-commerce-commercecheckoutsummarytextspacingondiv" />
                              </div>
                              <div />
                            </div>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                    <div className="w-commerce-commercecheckoutpaymentsummarywrapper">
                      <div className="w-commerce-commercecheckoutsummaryblockheader af-class-block-header">
                        <h4>Payment Info</h4>
                      </div>
                      <fieldset className="w-commerce-commercecheckoutblockcontent af-class-block-content">
                        <div className="w-commerce-commercecheckoutrow">
                          <div className="w-commerce-commercecheckoutcolumn">
                            <div className="w-commerce-commercecheckoutsummaryitem"><label className="w-commerce-commercecheckoutsummarylabel">Payment Info</label>
                              <div className="w-commerce-commercecheckoutsummaryflexboxdiv">
                                <div className="w-commerce-commercecheckoutsummarytextspacingondiv" />
                              </div>
                            </div>
                          </div>
                          <div className="w-commerce-commercecheckoutcolumn">
                            <div className="w-commerce-commercecheckoutsummaryitem"><label className="w-commerce-commercecheckoutsummarylabel">Billing Address</label>
                              <div />
                              <div />
                              <div />
                              <div className="w-commerce-commercecheckoutsummaryflexboxdiv">
                                <div className="w-commerce-commercecheckoutsummarytextspacingondiv" />
                                <div className="w-commerce-commercecheckoutsummarytextspacingondiv" />
                                <div className="w-commerce-commercecheckoutsummarytextspacingondiv" />
                              </div>
                              <div />
                            </div>
                          </div>
                        </div>
                      </fieldset>
                    </div>
                    <div className="w-commerce-commercecheckoutorderitemswrapper">
                      <div className="w-commerce-commercecheckoutsummaryblockheader af-class-block-header">
                        <h4>Items in Order</h4>
                      </div>
                      <fieldset className="w-commerce-commercecheckoutblockcontent af-class-block-content">
                        <div className="w-commerce-commercecheckoutorderitemslist" data-wf-collection="database.commerceOrder.userItems" data-wf-template-id="wf-template-5e853c3379b34f2bd3675eec000000000050" />
                      </fieldset>
                    </div>
                  </div>
                  <div className="w-commerce-commercelayoutsidebar">
                    <div className="w-commerce-commercecheckoutordersummarywrapper">
                      <div className="w-commerce-commercecheckoutsummaryblockheader af-class-block-header">
                        <h4>Order Summary</h4>
                      </div>
                      <fieldset className="w-commerce-commercecheckoutblockcontent af-class-block-content">
                        <div className="w-commerce-commercecheckoutsummarylineitem">
                          <div>Subtotal</div>
                          <div />
                        </div>
                        <div className="w-commerce-commercecheckoutordersummaryextraitemslist" data-wf-collection="database.commerceOrder.extraItems" data-wf-template-id="wf-template-5e853c3379b34f2bd3675eec00000000006a">
                          <div className="w-commerce-commercecheckoutordersummaryextraitemslistitem">
                            <div />
                            <div />
                          </div>
                        </div>
                        <div className="w-commerce-commercecheckoutsummarylineitem">
                          <div>Total</div>
                          <div className="w-commerce-commercecheckoutsummarytotal" />
                        </div>
                      </fieldset>
                    </div>
                    <a href="#" value="Place Order" data-node-type="commerce-checkout-place-order-button" className="w-commerce-commercecheckoutplaceorderbutton af-class-btn" data-loading-text="Placing Order...">Place Order</a>
                    <div data-node-type="commerce-checkout-error-state" style={{display: 'none'}} className="w-commerce-commercepaypalcheckouterrorstate">
                      <div className="w-checkout-error-msg" data-w-info-error="There was an error processing your customer info.  Please try again, or contact us if you continue to have problems." data-w-shipping-error="Sorry. We can’t ship your order to the address provided." data-w-billing-error="Your payment could not be completed with the payment information provided.  Please make sure that your card and billing address information is correct, or try a different payment card, to complete this order.  Contact us if you continue to have problems." data-w-payment-error="There was an error processing your payment.  Please try again, or contact us if you continue to have problems." data-w-pricing-error="The prices of one or more items in your cart have changed. Please refresh this page and try again." data-w-extras-error="A merchant setting has changed that impacts your cart. Please refresh and try again." data-w-product-error="One or more of the products in your cart have been removed. Please refresh the page and try again." data-w-invalid-discount-error="This discount is invalid." data-w-expired-discount-error="This discount is no longer available." data-w-usage-reached-discount-error="This discount is no longer available." data-w-requirements-not-met-error="Your order does not meet the requirements for this discount.">There was an error processing your customer info. Please try again, or contact us if you continue to have problems.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="af-class-footer">
              <div className="af-class-container">
                <div className="af-class-footer-wrapper">
                  <div className="af-class-footer-logo-column">
                    <a href="index.html" className="w-inline-block"><img src="images/logo.svg" alt="Acme Outdoors Logo" /></a>
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

export default PaypalCheckoutView

/* eslint-enable */