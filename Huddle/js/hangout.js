(function() {
  return join(function() {
    clickButton("Mute microphone");
    clickButton("Turn camera off");
  });

  function join(next) {
    var button = document.querySelector('.videopreview-anchored .d-Dc-m div[role=button]');
    if (!button) { return setTimeout(function() { join(next) }, 500); }
    click(button);
    next();
  }

  function clickButton(label) {
    var button = document.querySelector('div[role=button][data-tooltip="' + label + '"]');
    if (button) { click(button); }
  }

  function click(element) {
    'mouseover mousedown mouseup mouseout'.split(/\s+/).forEach(function(eventType) {
      var event = new MouseEvent(eventType);
      event.initMouseEvent(eventType, true, true, document.defaultView, 1,
        screen.width / 2, screen.height / 2,
        window.innerWidth / 2, window.innerHeight / 2,
        false, false, false, false,
        0, null);
      element.dispatchEvent(event);
    });
  }
})();
