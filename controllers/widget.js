var args = arguments[0];
var isContentBoxOpen = false;
var contentBoxHeight = args.contentBoxHeight || (Ti.Platform.displayCaps.platformHeight / 3);
var contentBoxBottom = (contentBoxHeight + 15) * -1;

hideOverLay();
$.Overlay.addEventListener('click', hideContentBox);
$.ContentBox.addEventListener('swipe', expandContentBox);
initViews();

function initViews() {
  $.ContentBox.height = contentBoxHeight;
  $.ContentBox.bottom = contentBoxBottom;
  var children;
  if (args.children) {
    children = args.children || [];
    for (var i = 0, j = children.length; i < j; i++) {
      $.ContentBoxHolder.add(children[i]);
    }
  }
}

function expandContentBox(e) {
  if (e.direction === 'up') {
    var animation = Ti.UI.createAnimation({
      duration: 200,
      height: Ti.UI.FILL,
      borderRadius: 0
    });
    $.ContentBox.animate(animation, function() {
      $.ContentBox.borderRadius = 0;
    });
  } else if (e.direction === 'down') {
    hideContentBox();
  }
}

function hideContentBox() {
  var animation = Ti.UI.createAnimation({
    duration: 300,
    bottom: contentBoxBottom,
    height: contentBoxHeight,
  });
  hideOverLay();
  $.ContentBox.animate(animation, function() {
    $.ContentBox.borderRadius = 15;
    $.ButtomSheetView.width = 0;
    $.ButtomSheetView.height = 0;
    $.ButtomSheetView.fireEvent('closed');
  });
}

function showContentBox() {
  $.ButtomSheetView.width = Ti.UI.FILL;
  $.ButtomSheetView.height = Ti.UI.FILL;
  var animation = Ti.UI.createAnimation({
    duration: 300,
    bottom: -15,
  });
  showOverLay();
  $.ContentBox.animate(animation, function() {
    $.ButtomSheetView.fireEvent('opened');
  });
}

function hideOverLay() {
  var animation = Ti.UI.createAnimation({
    duration: 300,
    opacity: 0
  });
  $.Overlay.animate(animation, function() {
    $.Overlay.height = 0;
    $.Overlay.opacity = 0;
    $.Overlay.hide();
  })
}

function showOverLay() {
  $.Overlay.height = Ti.UI.FILL;
  $.Overlay.opacity = 0;
  $.Overlay.show();
  var animation = Ti.UI.createAnimation({
    duration: 300,
    opacity: 0.3
  });
  $.Overlay.animate(animation)
}


$.setContentBoxHeight = function() {
  contentBoxHeight;
}

$.addEventListener = function(event, callback) {
  $.ButtomSheetView.addEventListener(event, callback);
};

$.setViews = function(views) {
  for (var i = 0, j = views.length; i < j; i++) {
    $.ContentBoxHolder.add(views[i]);
  }
};

$.clearViews = function() {
  $.ContentBoxHolder.removeAllChildren();
};

$.expand = function() {
  expandContentBox()
};

$.show = function() {
  showContentBox();
};

$.hide = function() {
  hideContentBox();
};