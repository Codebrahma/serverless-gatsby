/**
 * Segment.io script in head
 */

let customerIO = '<!-- customerIO script here in prod -->' /* noOp for local dev */

if (process.env.NODE_ENV === "production") { // eslint-disable-line
  customerIO = `<script type="text/javascript">
var _cio = _cio || [];
(function() {
  var a,b,c;a=function(f){return function(){_cio.push([f].
  concat(Array.prototype.slice.call(arguments,0)))}};b=["load","identify",
  "sidentify","track","page"];for(c=0;c<b.length;c++){_cio[b[c]]=a(b[c])};
  var t = document.createElement('script'),
      s = document.getElementsByTagName('script')[0];
  t.async = true;
  t.id    = 'cio-tracker';
  t.setAttribute('data-site-id', '${process.env.GATSBY_CUSTOMER_IO_KEY}');
  t.src = 'https://assets.customer.io/assets/track.js';
  s.parentNode.insertBefore(t, s);
})();</script>`
}
module.exports = customerIO
