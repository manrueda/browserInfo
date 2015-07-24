var test = require('tape');
var browserInfo = require('../browserInfo.js');

test('Windows7-chrome-x64 US', function (t) {
  var bi = new browserInfo({navigator:{userAgent: 'Mozilla/5.0 (Windows NT 6.0; WOW64) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.963.66 Safari/535.11'}});
  t.ok(bi.windows, 'The UA is Windows');
  t.notOk(bi.linux, 'The UA isn\'t Linux');
  t.notOk(bi.osx, 'The UA isn\'t OSX');

  t.notOk(bi.osVersion.w2000, 'The UA isn\'t Windows 2000');
  t.notOk(bi.osVersion.wxp, 'The UA isn\'t Windows XP');
  t.ok(bi.osVersion.wvista, 'The UA is Windows Vista');
  t.notOk(bi.osVersion.w7, 'The UA isn\'t Windows 7');
  t.notOk(bi.osVersion.w8, 'The UA isn\'t Windows 8');
  t.notOk(bi.osVersion.w81, 'The UA isn\'t Windows 8.1');
  t.notOk(bi.osVersion.w10, 'The UA isn\'t Windows 10');

  t.ok(bi.osArch.x64, 'The UA is x64');
  t.notOk(bi.osArch.x84, 'The UA isn\'t x84');
  t.notOk(bi.osArch.PowerPC, 'The UA isn\'t PowerPC');

  t.notOk(bi.ie, 'The UA isn\'t ie');
  t.ok(bi.chrome, 'The UA is chrome');
  t.notOk(bi.firefox, 'The UA isn\'t firefox');
  t.notOk(bi.opera, 'The UA isn\'t opera');
  t.notOk(bi.safari, 'The UA isn\'t safari');
  t.notOk(bi.chromium, 'The UA isn\'t chromium');

  t.equal(bi.browserVersion, 17, 'The Browser version is 17.0');

  t.end();
});


test('Linux-chrome-x64 US', function (t) {
  var bi = new browserInfo({navigator:{userAgent: 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/43.0.2357.134 Safari/537.36'}});
  t.notOk(bi.windows, 'The UA isn\'t Windows');
  t.ok(bi.linux, 'The UA is Linux');
  t.notOk(bi.osx, 'The UA isn\'t OSX');

  t.notOk(bi.osVersion.w2000, 'The UA isn\'t Windows 2000');
  t.notOk(bi.osVersion.wxp, 'The UA isn\'t Windows XP');
  t.notOk(bi.osVersion.wvista, 'The UA isn\'t Windows Vista');
  t.notOk(bi.osVersion.w7, 'The UA isn\'t Windows 7');
  t.notOk(bi.osVersion.w8, 'The UA isn\'t Windows 8');
  t.notOk(bi.osVersion.w81, 'The UA isn\'t Windows 8.1');
  t.notOk(bi.osVersion.w10, 'The UA isn\'t Windows 10');

  t.ok(bi.osArch.x64, 'The UA is x64');
  t.notOk(bi.osArch.x84, 'The UA isn\'t x84');
  t.notOk(bi.osArch.PowerPC, 'The UA isn\'t PowerPC');

  t.notOk(bi.ie, 'The UA isn\'t ie');
  t.ok(bi.chrome, 'The UA is chrome');
  t.notOk(bi.firefox, 'The UA isn\'t firefox');
  t.notOk(bi.opera, 'The UA isn\'t opera');
  t.notOk(bi.safari, 'The UA isn\'t safari');
  t.notOk(bi.chromium, 'The UA isn\'t chromium');

  t.equal(bi.browserVersion, 43, 'The Browser version is 43.0');

  t.end();
});
