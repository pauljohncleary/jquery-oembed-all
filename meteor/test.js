//simple test to check that the plugin has instantiated correctly
Tinytest.add('jquery-oembed-all.is', function (test) {
  var anchor = document.createElement('a');
  var mc = new Hammer(div);
  test.instanceOf(mc, Hammer.Manager, 'Instantiation OK');
});
