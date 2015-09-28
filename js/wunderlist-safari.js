(function (WL) {

  if (window.top === window) {

    var overlayPort = PortWrapper(safari.self, "overlay");
    overlayPort.on("wunderlist_click", function (postData) {
      // safari will inject into every iframe on a page!
      if (window.top === window) {

        WL.showOverlay(postData);
      }
    });
  }

})(window.WL);