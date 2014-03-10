(function() {
  var hangoutEvent = getHangoutEvent();
  clickHangoutEvent(hangoutEvent);
  var bubble = document.querySelector('.bubble');
  var hangoutLink = getHangoutLink(bubble);
  window.location = hangoutLink;
  return hangoutLink;

  function getHangoutEvent() {
    var today = document.querySelector('.tg-col-today');
    var events = today.querySelectorAll('dl span');

    for (var i = 0; i < events.length; i++) {
      if (events[i].innerHTML === 'Hangout of the Day') {
        return events[i].parentNode;
      }
    }
  }

  function clickHangoutEvent(hangout) {
    var click = new MouseEvent('click');
    click.initMouseEvent('click', true, true, window, 1,
      screen.width / 2, screen.height / 2,
      window.innerWidth / 2, window.innerHeight / 2,
      false, false, false, false,
      0, null);
    hangout.dispatchEvent(click);
  }

  function getHangoutLink(bubble) {
    return bubble.querySelector("a.eb-rtc").href;
  }
}).call({});
