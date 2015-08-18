(function (root, factory) {
  if (typeof define === 'function') {
    // RequireJS
    return define(function() {
        return factory();
    });
  } else if (typeof module === 'object' && module.exports) {
    // like Node.
    module.exports = factory();
  } else {
    // Browser globals
    root.BrowserInfo = factory();
  }
}(this, function () {

  function BrowserInfo(_window){
    this.windows = false;
    this.linux = false;
    this.osx = false;
    this.osArch = {
      x86: false,
      x64: false,
      PowerPC: false
    };
    this.osVersion = {
      w2000: false,
      wxp: false,
      wvista: false,
      w7: false,
      w8: false,
      w81: false,
      w10: false,
    };

    this.ie = false;
    this.edge = false;
    this.chrome = false;
    this.firefox = false;
    this.opera = false;
    this.safari = false;
    this.chromium = false;

    this.browserVersion = -1;

    var systemStr = (_window ||window).navigator.userAgent;

    //Detenct OS
    this.windows = (systemStr.indexOf('Windows NT') !== -1);
    this.linux = (systemStr.indexOf('Linux') !== -1);
    this.osx = (systemStr.indexOf('Max OS') !== -1);


    if (this.windows){
      //Detect Windows version
      this.osVersion.w2000 = (systemStr.indexOf('Windows NT 5.0') !== -1);
      this.osVersion.wxp = (systemStr.indexOf('Windows NT 5.1') !== -1);
      this.osVersion.wvista = (systemStr.indexOf('Windows NT 6.0') !== -1);
      this.osVersion.w7 = (systemStr.indexOf('Windows NT 6.1') !== -1);
      this.osVersion.w8 = (systemStr.indexOf('Windows NT 6.2') !== -1);
      this.osVersion.w81 = (systemStr.indexOf('Windows NT 6.3') !== -1);
      this.osVersion.w10 = (systemStr.indexOf('Windows NT 10') !== -1);

      //Detect Windows Architecture
      this.osArch.x86 = (systemStr.indexOf('Win64') === -1 && systemStr.indexOf('x64') === -1 && systemStr.indexOf('WOW64') === -1);
      this.osArch.x64 = (systemStr.indexOf('Win64') !== -1 || systemStr.indexOf('x64') !== -1 || systemStr.indexOf('WOW64') !== -1);
    }

    if (this.linux) {
      //Detect Windows Architecture
      this.osArch.x86 = (systemStr.indexOf('i686') !== -1);
      this.osArch.x64 = (systemStr.indexOf('x86_64') !== -1);
    }

    if (this.osx) {
      //Detect Windows Architecture
      this.osArch.PowerPC = (systemStr.indexOf('PPC Mac OS') !== -1);
    }

    //Detect browser
    this.firefox = (systemStr.indexOf('Firefox/') !== -1 && systemStr.indexOf('Seamonkey/') === -1);
    this.chrome = (systemStr.indexOf('Chrome/') !== -1 && systemStr.indexOf('Chromium/') === -1 && systemStr.indexOf('Edge/') === -1);
    this.chromium = (systemStr.indexOf('Chromium/') !== -1);
    this.safari = (systemStr.indexOf('Safari/') !== -1 && systemStr.indexOf('Chromium/') === -1 && systemStr.indexOf('Chrome/') === -1 && systemStr.indexOf('Edge/') === -1);
    this.safari = (systemStr.indexOf('OPR/') !== -1 || systemStr.indexOf('Opera/') !== -1);
    this.ie = (systemStr.indexOf('MSIE') !== -1 || (systemStr.indexOf('Trident/') !== -1 && systemStr.indexOf('rv:') !== -1));
    this.edge = (systemStr.indexOf('Edge/') !== -1);

    //Detect browser version
    this.browserVersion = getVersion(systemStr, this);
    if (this.browserVersion != -1 ){
      if (this.browserVersion.split('.').length > 0){
        this.browserVersion = Number(this.browserVersion.split('.')[0] + '.' + this.browserVersion.split('.')[1]);
      }else{
        this.browserVersion = Number(this.browserVersion);
      }
    }

    function getVersion(ua, BI){
      var version = /(OPR\/|Opera\/|Edge\/|Chrome\/|Firefox\/|Chromium\/|Safari\/|MSIE |rv:).*?(?=$| |;|\n|\))/.exec(ua)[0].replace(' ', ':').replace('/', ':').split(':')[1];

      //This fix the Edge userAgent that contains the version of many browsers.
      if (BI.edge){
        version = /(Edge\/).*?(?=$| |;|\n|\))/.exec(ua)[0].replace(' ', ':').replace('/', ':').split(':')[1];
      }
      return version;
    }

    return this;
  }
  return BrowserInfo;

}));
