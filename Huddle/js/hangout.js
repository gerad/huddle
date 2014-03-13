(function() {
  return join(function() {
    clickButton("Mute microphone");
    clickButton("Turn camera off");
    stillHere();
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

  function stillHere() {
    var h1 = findByText(document.querySelectorAll('.d-fg-Tg h1'), 'Are you still there?');

    if (h1) {
      var popup = closest(h1, '.d-fg-Tg');
      var button = findByText(popup.querySelectorAll('div[role=button]'), 'Yes');
      click(button);
    }

    setTimeout(stillHere, 5 * 1000)
  }

  function findByText(elements, text) {
    for (var i = 0, l = elements.length; i < l; i++) {
      var innerText = elements[i].innerText;

      if (innerText && innerText.trim() === text) {
        return elements[i];
      }
    }
  }

  function closest(el, selector) {
    if (!el || matches(el, selector)) { return el; }
    return closest(el.parentNode, selector);
  }

  function matches(el, selector) {
    return el.webkitMatchesSelector(selector);
  }

})();
