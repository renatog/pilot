function phonegapdemo(){
  var $wnd_0 = window, $doc_0 = document, $stats = $wnd_0.__gwtStatsEvent?function(a){
    return $wnd_0.__gwtStatsEvent(a);
  }
  :null, $sessionId_0 = $wnd_0.__gwtStatsSessionId?$wnd_0.__gwtStatsSessionId:null, scriptsDone, loadDone, bodyDone, base = '', metaProps = {}, values = [], providers = [], answers = [], softPermutationId = 0, onLoadErrorFunc, propertyErrorFunc;
  $stats && $stats({moduleName:'phonegapdemo', sessionId:$sessionId_0, subSystem:'startup', evtGroup:'bootstrap', millis:(new Date).getTime(), type:'begin'});
  if (!$wnd_0.__gwt_stylesLoaded) {
    $wnd_0.__gwt_stylesLoaded = {};
  }
  if (!$wnd_0.__gwt_scriptsLoaded) {
    $wnd_0.__gwt_scriptsLoaded = {};
  }
  function isHostedMode(){
    var result = false;
    try {
      var query = $wnd_0.location.search;
      return (query.indexOf('gwt.codesvr=') != -1 || (query.indexOf('gwt.hosted=') != -1 || $wnd_0.external && $wnd_0.external.gwtOnLoad)) && query.indexOf('gwt.hybrid') == -1;
    }
     catch (e) {
    }
    isHostedMode = function(){
      return result;
    }
    ;
    return result;
  }

  function maybeStartModule(){
    if (scriptsDone && loadDone) {
      var iframe = $doc_0.getElementById('phonegapdemo');
      var frameWnd = iframe.contentWindow;
      if (isHostedMode()) {
        frameWnd.__gwt_getProperty = function(name_0){
          return computePropValue(name_0);
        }
        ;
      }
      phonegapdemo = null;
      frameWnd.gwtOnLoad(onLoadErrorFunc, 'phonegapdemo', base, softPermutationId);
      $stats && $stats({moduleName:'phonegapdemo', sessionId:$sessionId_0, subSystem:'startup', evtGroup:'moduleStartup', millis:(new Date).getTime(), type:'end'});
    }
  }

  function computeScriptBase(){
    function getDirectoryOfFile(path){
      var hashIndex = path.lastIndexOf('#');
      if (hashIndex == -1) {
        hashIndex = path.length;
      }
      var queryIndex = path.indexOf('?');
      if (queryIndex == -1) {
        queryIndex = path.length;
      }
      var slashIndex = path.lastIndexOf('/', Math.min(queryIndex, hashIndex));
      return slashIndex >= 0?path.substring(0, slashIndex + 1):'';
    }

    function ensureAbsoluteUrl(url){
      if (url.match(/^\w+:\/\//)) {
      }
       else {
        var img = $doc_0.createElement('img');
        img.src = url + 'clear.cache.gif';
        url = getDirectoryOfFile(img.src);
      }
      return url;
    }

    function tryMetaTag(){
      var metaVal = __gwt_getMetaProperty('baseUrl');
      if (metaVal != null) {
        return metaVal;
      }
      return '';
    }

    function tryNocacheJsTag(){
      var scriptTags = $doc_0.getElementsByTagName('script');
      for (var i = 0; i < scriptTags.length; ++i) {
        if (scriptTags[i].src.indexOf('phonegapdemo.nocache.js') != -1) {
          return getDirectoryOfFile(scriptTags[i].src);
        }
      }
      return '';
    }

    function tryMarkerScript(){
      var thisScript;
      if (typeof isBodyLoaded == 'undefined' || !isBodyLoaded()) {
        var markerId = '__gwt_marker_phonegapdemo';
        var markerScript;
        $doc_0.write('<script id="' + markerId + '"><\/script>');
        markerScript = $doc_0.getElementById(markerId);
        thisScript = markerScript && markerScript.previousSibling;
        while (thisScript && thisScript.tagName != 'SCRIPT') {
          thisScript = thisScript.previousSibling;
        }
        if (markerScript) {
          markerScript.parentNode.removeChild(markerScript);
        }
        if (thisScript && thisScript.src) {
          return getDirectoryOfFile(thisScript.src);
        }
      }
      return '';
    }

    function tryBaseTag(){
      var baseElements = $doc_0.getElementsByTagName('base');
      if (baseElements.length > 0) {
        return baseElements[baseElements.length - 1].href;
      }
      return '';
    }

    var tempBase = tryMetaTag();
    if (tempBase == '') {
      tempBase = tryNocacheJsTag();
    }
    if (tempBase == '') {
      tempBase = tryMarkerScript();
    }
    if (tempBase == '') {
      tempBase = tryBaseTag();
    }
    if (tempBase == '') {
      tempBase = getDirectoryOfFile($doc_0.location.href);
    }
    tempBase = ensureAbsoluteUrl(tempBase);
    base = tempBase;
    return tempBase;
  }

  function processMetas(){
    var metas = document.getElementsByTagName('meta');
    for (var i = 0, n = metas.length; i < n; ++i) {
      var meta = metas[i], name_0 = meta.getAttribute('name'), content_0;
      if (name_0) {
        name_0 = name_0.replace('phonegapdemo::', '');
        if (name_0.indexOf('::') >= 0) {
          continue;
        }
        if (name_0 == 'gwt:property') {
          content_0 = meta.getAttribute('content');
          if (content_0) {
            var value, eq = content_0.indexOf('=');
            if (eq >= 0) {
              name_0 = content_0.substring(0, eq);
              value = content_0.substring(eq + 1);
            }
             else {
              name_0 = content_0;
              value = '';
            }
            metaProps[name_0] = value;
          }
        }
         else if (name_0 == 'gwt:onPropertyErrorFn') {
          content_0 = meta.getAttribute('content');
          if (content_0) {
            try {
              propertyErrorFunc = eval(content_0);
            }
             catch (e) {
              alert('Bad handler "' + content_0 + '" for "gwt:onPropertyErrorFn"');
            }
          }
        }
         else if (name_0 == 'gwt:onLoadErrorFn') {
          content_0 = meta.getAttribute('content');
          if (content_0) {
            try {
              onLoadErrorFunc = eval(content_0);
            }
             catch (e) {
              alert('Bad handler "' + content_0 + '" for "gwt:onLoadErrorFn"');
            }
          }
        }
      }
    }
  }

  function __gwt_getMetaProperty(name_0){
    var value = metaProps[name_0];
    return value == null?null:value;
  }

  function unflattenKeylistIntoAnswers(propValArray, value){
    var answer = answers;
    for (var i = 0, n = propValArray.length - 1; i < n; ++i) {
      answer = answer[propValArray[i]] || (answer[propValArray[i]] = []);
    }
    answer[propValArray[n]] = value;
  }

  function computePropValue(propName){
    var value = providers[propName](), allowedValuesMap = values[propName];
    if (value in allowedValuesMap) {
      return value;
    }
    var allowedValuesList = [];
    for (var k in allowedValuesMap) {
      allowedValuesList[allowedValuesMap[k]] = k;
    }
    if (propertyErrorFunc) {
      propertyErrorFunc(propName, allowedValuesList, value);
    }
    throw null;
  }

  var frameInjected;
  function maybeInjectFrame(){
    if (!frameInjected) {
      frameInjected = true;
      var iframe = $doc_0.createElement('iframe');
      iframe.src = "javascript:''";
      iframe.id = 'phonegapdemo';
      iframe.style.cssText = 'position:absolute;width:0;height:0;border:none';
      iframe.tabIndex = -1;
      $doc_0.body.appendChild(iframe);
      $stats && $stats({moduleName:'phonegapdemo', sessionId:$sessionId_0, subSystem:'startup', evtGroup:'moduleStartup', millis:(new Date).getTime(), type:'moduleRequested'});
      iframe.contentWindow.location.replace(base + initialHtml);
    }
  }

  providers['mgwt.os'] = function(){
    {
      var ua = window.navigator.userAgent.toLowerCase();
      if (ua.indexOf('android') != -1) {
        if (ua.indexOf('mobile') != -1) {
          return 'android';
        }
         else {
          return 'android_tablet';
        }
      }
      if (ua.indexOf('ipad') != -1) {
        return 'ipad';
      }
      if (ua.indexOf('iphone') != -1) {
        if (window.devicePixelRatio >= 2) {
          return 'retina';
        }
        return 'iphone';
      }
      if (ua.indexOf('blackberry') != -1) {
        return 'blackberry';
      }
      return 'desktop';
    }
  }
  ;
  values['mgwt.os'] = {android:0, android_tablet:1, blackberry:2, desktop:3, ipad:4, iphone:5, retina:6};
  providers['mobile.user.agent'] = function(){
    {
      var ua = window.navigator.userAgent.toLowerCase();
      if (ua.indexOf('android') != -1) {
        return 'mobilesafari';
      }
      if (ua.indexOf('iphone') != -1) {
        return 'mobilesafari';
      }
      if (ua.indexOf('ipad') != -1) {
        return 'mobilesafari';
      }
      if (ua.indexOf('blackberry') != -1) {
        return 'not_mobile';
      }
      return 'not_mobile';
    }
  }
  ;
  values['mobile.user.agent'] = {mobilesafari:0, not_mobile:1};
  providers['phonegap.env'] = function(){
    {
      var ua = window.navigator.userAgent.toLowerCase();
      if (ua.indexOf('android') != -1 || (ua.indexOf('ipad') != -1 || (ua.indexOf('iphone') != -1 || ua.indexOf('blackberry') != -1))) {
        var url = document.location.href;
        if (url.indexOf('file://') === 0) {
          return 'yes';
        }
      }
      return 'no';
    }
  }
  ;
  values['phonegap.env'] = {no:0, yes:1};
  providers['user.agent'] = function(){
    var ua = navigator.userAgent.toLowerCase();
    var makeVersion = function(result){
      return parseInt(result[1]) * 1000 + parseInt(result[2]);
    }
    ;
    if (function(){
      return ua.indexOf('opera') != -1;
    }
    ())
      return 'opera';
    if (function(){
      return ua.indexOf('webkit') != -1 || function(){
        if (ua.indexOf('chromeframe') != -1) {
          return true;
        }
        if (typeof window['ActiveXObject'] != 'undefined') {
          try {
            var obj = new ActiveXObject('ChromeTab.ChromeFrame');
            if (obj) {
              obj.registerBhoIfNeeded();
              return true;
            }
          }
           catch (e) {
          }
        }
        return false;
      }
      ();
    }
    ())
      return 'safari';
    if (function(){
      return ua.indexOf('msie') != -1 && $doc_0.documentMode >= 9;
    }
    ())
      return 'ie9';
    if (function(){
      return ua.indexOf('msie') != -1 && $doc_0.documentMode >= 8;
    }
    ())
      return 'ie8';
    if (function(){
      var result = /msie ([0-9]+)\.([0-9]+)/.exec(ua);
      if (result && result.length == 3)
        return makeVersion(result) >= 6000;
    }
    ())
      return 'ie6';
    if (function(){
      return ua.indexOf('gecko') != -1;
    }
    ())
      return 'gecko1_8';
    return 'unknown';
  }
  ;
  values['user.agent'] = {gecko1_8:0, ie6:1, ie8:2, ie9:3, opera:4, safari:5};
  phonegapdemo.onScriptLoad = function(){
    if (frameInjected) {
      loadDone = true;
      maybeStartModule();
    }
  }
  ;
  phonegapdemo.onInjectionDone = function(){
    scriptsDone = true;
    $stats && $stats({moduleName:'phonegapdemo', sessionId:$sessionId_0, subSystem:'startup', evtGroup:'loadExternalRefs', millis:(new Date).getTime(), type:'end'});
    maybeStartModule();
  }
  ;
  processMetas();
  computeScriptBase();
  var strongName;
  var initialHtml;
  if (isHostedMode()) {
    if ($wnd_0.external && ($wnd_0.external.initModule && $wnd_0.external.initModule('phonegapdemo'))) {
      $wnd_0.location.reload();
      return;
    }
    initialHtml = 'hosted.html?phonegapdemo';
    strongName = '';
  }
  $stats && $stats({moduleName:'phonegapdemo', sessionId:$sessionId_0, subSystem:'startup', evtGroup:'bootstrap', millis:(new Date).getTime(), type:'selectingPermutation'});
  if (!isHostedMode()) {
    try {
      unflattenKeylistIntoAnswers(['retina', 'not_mobile', 'yes', 'gecko1_8'], '05082A1DF84C345C63DADBC97D77D9F0');
      unflattenKeylistIntoAnswers(['blackberry', 'not_mobile', 'no', 'opera'], '0DA442D213B461597B1CD6AD6FBF2F9B');
      unflattenKeylistIntoAnswers(['android_tablet', 'not_mobile', 'no', 'ie8'], '0F76106BF407385593A7A6F7419549A6');
      unflattenKeylistIntoAnswers(['retina', 'not_mobile', 'yes', 'safari'], '1128631F9DE10C389C52315881F07ED9');
      unflattenKeylistIntoAnswers(['desktop', 'not_mobile', 'yes', 'opera'], '12100B4937DBD1D85B134043FEDDA83B');
      unflattenKeylistIntoAnswers(['android', 'not_mobile', 'yes', 'ie6'], '13A37B2EF021E60BB102E970C77CAC9D');
      unflattenKeylistIntoAnswers(['blackberry', 'not_mobile', 'no', 'safari'], '19CAF99A3EF99E63AD84D8B8F86DC43C');
      unflattenKeylistIntoAnswers(['desktop', 'mobilesafari', 'yes', 'safari'], '1C7BAF85F999338441248872C7563BF0');
      unflattenKeylistIntoAnswers(['android', 'not_mobile', 'no', 'ie6'], '222AA25CE781D5BDA84339BA14AE1032');
      unflattenKeylistIntoAnswers(['retina', 'not_mobile', 'yes', 'ie6'], '23315FE33913E5F515E88689BC757EFE');
      unflattenKeylistIntoAnswers(['android', 'not_mobile', 'yes', 'ie8'], '2488AEBD7D71E077602AB11D39F42519');
      unflattenKeylistIntoAnswers(['android', 'not_mobile', 'yes', 'safari'], '2580C11ACD834013F8372BB79FA55E4B');
      unflattenKeylistIntoAnswers(['blackberry', 'not_mobile', 'yes', 'ie8'], '2791D684B2EE6E7812935C0C5227B1D6');
      unflattenKeylistIntoAnswers(['blackberry', 'not_mobile', 'yes', 'gecko1_8'], '29264E36A4D14AE1086F21E55A3EBF21');
      unflattenKeylistIntoAnswers(['android_tablet', 'not_mobile', 'no', 'opera'], '2AAD76F243276469D404AC835F96F367');
      unflattenKeylistIntoAnswers(['ipad', 'not_mobile', 'yes', 'ie6'], '2B4DBD777515C7C176B91B4187AC23A6');
      unflattenKeylistIntoAnswers(['blackberry', 'not_mobile', 'yes', 'ie6'], '2D41CB0CD7B4374AB10CB3D1DE6AB766');
      unflattenKeylistIntoAnswers(['iphone', 'not_mobile', 'no', 'gecko1_8'], '3027B15139E7EF119988DBD3037508CE');
      unflattenKeylistIntoAnswers(['desktop', 'not_mobile', 'no', 'ie8'], '31DD9057501C38F909F7113F84790E2B');
      unflattenKeylistIntoAnswers(['ipad', 'not_mobile', 'no', 'opera'], '34C2373F684C81064C0A9A4ED07DDC04');
      unflattenKeylistIntoAnswers(['desktop', 'mobilesafari', 'no', 'safari'], '37FA51E89C8584CFD2F406B04C628423');
      unflattenKeylistIntoAnswers(['ipad', 'not_mobile', 'yes', 'safari'], '3AB0C54FDFFB6239228D4774620B4233');
      unflattenKeylistIntoAnswers(['blackberry', 'not_mobile', 'yes', 'ie9'], '3CDC586DACB2DA1D82D4F18E01252290');
      unflattenKeylistIntoAnswers(['blackberry', 'not_mobile', 'yes', 'safari'], '3D399299DA2C6B1E05513F3789A03A9B');
      unflattenKeylistIntoAnswers(['ipad', 'not_mobile', 'yes', 'opera'], '411379AC6F6B83D7A57C826D2AB7B37D');
      unflattenKeylistIntoAnswers(['android', 'not_mobile', 'yes', 'ie9'], '4927A812FA3F0E8CDC317E5BC4C02E6B');
      unflattenKeylistIntoAnswers(['android_tablet', 'mobilesafari', 'yes', 'safari'], '5231ACC063C19251E76AF2B67A3F130A');
      unflattenKeylistIntoAnswers(['retina', 'not_mobile', 'no', 'safari'], '52648903C048A60ECC7D934604BC8522');
      unflattenKeylistIntoAnswers(['retina', 'not_mobile', 'yes', 'ie8'], '554995DDEEA2574D568B132A55B63A2F');
      unflattenKeylistIntoAnswers(['retina', 'not_mobile', 'no', 'opera'], '5706C79F2FD91CE92212FC7F401ACBC0');
      unflattenKeylistIntoAnswers(['android', 'not_mobile', 'no', 'ie9'], '57DC3833167A6AD6B39E0D3C235674CF');
      unflattenKeylistIntoAnswers(['iphone', 'not_mobile', 'no', 'ie6'], '5904A33036B1A935409AF906141EDBFB');
      unflattenKeylistIntoAnswers(['ipad', 'not_mobile', 'no', 'safari'], '5CBBB3DA1E00C219B6CB6771E57E9E96');
      unflattenKeylistIntoAnswers(['desktop', 'not_mobile', 'no', 'ie6'], '5E587368966AB50A79CF8EC067C35B52');
      unflattenKeylistIntoAnswers(['android_tablet', 'not_mobile', 'yes', 'ie9'], '5FA86109667776C655299C4FD34EB941');
      unflattenKeylistIntoAnswers(['ipad', 'not_mobile', 'no', 'ie8'], '5FCA38C8175FA41981606A2B51D3B504');
      unflattenKeylistIntoAnswers(['iphone', 'not_mobile', 'no', 'ie8'], '60ECFF77D5AC71CA55708A92C0671A5F');
      unflattenKeylistIntoAnswers(['blackberry', 'not_mobile', 'yes', 'opera'], '63B031553A2ADED89C17ED6B460BF709');
      unflattenKeylistIntoAnswers(['android', 'not_mobile', 'yes', 'opera'], '67E6934D29B157282E0817641CE34A74');
      unflattenKeylistIntoAnswers(['android', 'not_mobile', 'no', 'gecko1_8'], '69AE9AF7213ABFD9C99D691420321C73');
      unflattenKeylistIntoAnswers(['android_tablet', 'not_mobile', 'yes', 'safari'], '6B76858416DC3C2630312B2BB56AFB98');
      unflattenKeylistIntoAnswers(['android', 'not_mobile', 'no', 'safari'], '6F11C2647E6BF988582C75A4AB8A0FAC');
      unflattenKeylistIntoAnswers(['retina', 'not_mobile', 'no', 'gecko1_8'], '6FFC3DA5AD497AE985DC792288BAB433');
      unflattenKeylistIntoAnswers(['iphone', 'not_mobile', 'yes', 'ie9'], '75AFD087A744084324F427B48DA9EBAA');
      unflattenKeylistIntoAnswers(['ipad', 'mobilesafari', 'yes', 'safari'], '7C091433EDF32A3B3A683B2785A75803');
      unflattenKeylistIntoAnswers(['retina', 'not_mobile', 'no', 'ie9'], '7F59C89FC9F9839795DCAF3BFDC3EA89');
      unflattenKeylistIntoAnswers(['iphone', 'not_mobile', 'no', 'safari'], '83A6083F98598CBAFE653EBB42F69DD8');
      unflattenKeylistIntoAnswers(['android', 'mobilesafari', 'no', 'safari'], '84D654E37D9060DEFE1DB942ADDCA525');
      unflattenKeylistIntoAnswers(['android_tablet', 'mobilesafari', 'no', 'safari'], '861D318FEE20F995AF77C59CD1BCA705');
      unflattenKeylistIntoAnswers(['android_tablet', 'not_mobile', 'yes', 'ie6'], '8B66A4C21937545AF696EF9934D2FCBA');
      unflattenKeylistIntoAnswers(['desktop', 'not_mobile', 'yes', 'ie6'], '8C66913DADB784CF129CD59E8FF3197C');
      unflattenKeylistIntoAnswers(['ipad', 'not_mobile', 'yes', 'gecko1_8'], '8C7A73439CEC04FE02ACAAFF27287FF8');
      unflattenKeylistIntoAnswers(['blackberry', 'mobilesafari', 'yes', 'safari'], '9235C486E515AE24E325E24D3BB9E7E6');
      unflattenKeylistIntoAnswers(['android_tablet', 'not_mobile', 'no', 'ie9'], '92539BD34BEB081C79CCBBBB5A42A301');
      unflattenKeylistIntoAnswers(['desktop', 'not_mobile', 'no', 'ie9'], '982BE6B3148E48600E848034CCE1007E');
      unflattenKeylistIntoAnswers(['desktop', 'not_mobile', 'no', 'opera'], '9BF41DD49955F63385EB76CF8206197D');
      unflattenKeylistIntoAnswers(['iphone', 'mobilesafari', 'no', 'safari'], '9C2C14E9AE4C86B584BD0A0E4F952A16');
      unflattenKeylistIntoAnswers(['android', 'not_mobile', 'no', 'ie8'], '9C55A9DA5637FA7DE05AEB8364FBE246');
      unflattenKeylistIntoAnswers(['android_tablet', 'not_mobile', 'yes', 'ie8'], 'A2A1A20AE7E661EFD2C710DB05BCBEC5');
      unflattenKeylistIntoAnswers(['android', 'not_mobile', 'no', 'opera'], 'A78E48C54CD9C1EBEF390D1B6A4155B4');
      unflattenKeylistIntoAnswers(['iphone', 'not_mobile', 'yes', 'opera'], 'AA70BD366C10311C5BE4B30E6AC0A9DB');
      unflattenKeylistIntoAnswers(['android_tablet', 'not_mobile', 'yes', 'gecko1_8'], 'AAE56070C10D3BAF994B4AE84094B6B0');
      unflattenKeylistIntoAnswers(['retina', 'mobilesafari', 'yes', 'safari'], 'AE62336F550FDD66FD3FB1FDD5260C28');
      unflattenKeylistIntoAnswers(['android', 'not_mobile', 'yes', 'gecko1_8'], 'B20BE9E068CAD13C9B2963DECEDB7CC4');
      unflattenKeylistIntoAnswers(['iphone', 'not_mobile', 'yes', 'safari'], 'B37EB67A1CA0297B4580C80B137CABA5');
      unflattenKeylistIntoAnswers(['android_tablet', 'not_mobile', 'no', 'safari'], 'B5D3B33114CEFCEE144A8BD4280ABF23');
      unflattenKeylistIntoAnswers(['iphone', 'not_mobile', 'yes', 'ie6'], 'B6DDC0F0DDDCF72D44C249DB112ECDF6');
      unflattenKeylistIntoAnswers(['retina', 'not_mobile', 'yes', 'ie9'], 'B6EABDAB8A7EAD11AC8D6F61D8B3A49A');
      unflattenKeylistIntoAnswers(['android_tablet', 'not_mobile', 'no', 'ie6'], 'B7640A4C75CAEA229F9E5626D77BBE88');
      unflattenKeylistIntoAnswers(['iphone', 'mobilesafari', 'yes', 'safari'], 'BA36B8D148E1EBCB04CCF2D861D6B057');
      unflattenKeylistIntoAnswers(['retina', 'not_mobile', 'no', 'ie8'], 'BB338DC585513C97FDCBA9D28E6E7F9D');
      unflattenKeylistIntoAnswers(['desktop', 'not_mobile', 'no', 'gecko1_8'], 'BBDC543D4BFC7F3184D89F6D70DD3760');
      unflattenKeylistIntoAnswers(['ipad', 'not_mobile', 'no', 'gecko1_8'], 'BCA2ECF0893A80DF3596598F0A9DFD5E');
      unflattenKeylistIntoAnswers(['ipad', 'not_mobile', 'yes', 'ie8'], 'BF668574EE39927D863FEF61733D9230');
      unflattenKeylistIntoAnswers(['blackberry', 'not_mobile', 'no', 'gecko1_8'], 'CD1E7B2CAF3D43EF88C581067852F571');
      unflattenKeylistIntoAnswers(['desktop', 'not_mobile', 'yes', 'ie8'], 'CDA6C8D2D2CFEAB99012E62D4909E041');
      unflattenKeylistIntoAnswers(['iphone', 'not_mobile', 'no', 'opera'], 'D2B62DD6AFCE4C8C174A2B281144A4DF');
      unflattenKeylistIntoAnswers(['blackberry', 'not_mobile', 'no', 'ie8'], 'D32654EEA6A00C279F881371A8BEB254');
      unflattenKeylistIntoAnswers(['android_tablet', 'not_mobile', 'yes', 'opera'], 'D3EC51505A5025EE3586F8B7F4BFB611');
      unflattenKeylistIntoAnswers(['iphone', 'not_mobile', 'yes', 'gecko1_8'], 'D687B48D317CCD44DD011DA88B268746');
      unflattenKeylistIntoAnswers(['blackberry', 'not_mobile', 'no', 'ie9'], 'D79304926AD77546031DC5185F99E4D1');
      unflattenKeylistIntoAnswers(['android_tablet', 'not_mobile', 'no', 'gecko1_8'], 'DA97F9A0DEE0BEDE2FFFB13E50AE448A');
      unflattenKeylistIntoAnswers(['desktop', 'not_mobile', 'yes', 'gecko1_8'], 'DCFF38E95A9F66DC2AC31999BB717EBE');
      unflattenKeylistIntoAnswers(['desktop', 'not_mobile', 'yes', 'safari'], 'DDAE5543CDB0FEF7F9056DEB4E1ADC21');
      unflattenKeylistIntoAnswers(['desktop', 'not_mobile', 'no', 'safari'], 'DDF8D9FFC21A9817A9C4169A6A13010A');
      unflattenKeylistIntoAnswers(['desktop', 'not_mobile', 'yes', 'ie9'], 'DE2D7D64496263B41B5B8351AC47B62E');
      unflattenKeylistIntoAnswers(['ipad', 'not_mobile', 'no', 'ie9'], 'DF3EAACEB4776C11ED32C2A4C079DE81');
      unflattenKeylistIntoAnswers(['android', 'mobilesafari', 'yes', 'safari'], 'E153D54992929124063AEBE0566771D7');
      unflattenKeylistIntoAnswers(['ipad', 'not_mobile', 'yes', 'ie9'], 'E17207ED797AE3565E720DBEE86E9AC4');
      unflattenKeylistIntoAnswers(['iphone', 'not_mobile', 'no', 'ie9'], 'E2E52D83437C935A2A4CE2C150AF4D1E');
      unflattenKeylistIntoAnswers(['ipad', 'mobilesafari', 'no', 'safari'], 'E3ECD5B2A6E5059DFB56211035948F01');
      unflattenKeylistIntoAnswers(['ipad', 'not_mobile', 'no', 'ie6'], 'E86BDAD817E930DB8685A47371B5A7BA');
      unflattenKeylistIntoAnswers(['retina', 'not_mobile', 'yes', 'opera'], 'F45279E8DC2A74145FC8238482E784B0');
      unflattenKeylistIntoAnswers(['iphone', 'not_mobile', 'yes', 'ie8'], 'F73C9F1D4E2321A535FA327F18685CAB');
      unflattenKeylistIntoAnswers(['retina', 'not_mobile', 'no', 'ie6'], 'F76706F7981B32BC8AB9D52CD32E16DE');
      unflattenKeylistIntoAnswers(['blackberry', 'not_mobile', 'no', 'ie6'], 'F8C9881A5C65BF4713C7450DFD5FCA22');
      unflattenKeylistIntoAnswers(['retina', 'mobilesafari', 'no', 'safari'], 'FAE5BD6E9A2750F078367AEAA29C9446');
      unflattenKeylistIntoAnswers(['blackberry', 'mobilesafari', 'no', 'safari'], 'FCE26950EAD203042F983967A06FFDC0');
      strongName = answers[computePropValue('mgwt.os')][computePropValue('mobile.user.agent')][computePropValue('phonegap.env')][computePropValue('user.agent')];
      var idx = strongName.indexOf(':');
      if (idx != -1) {
        softPermutationId = Number(strongName.substring(idx + 1));
        strongName = strongName.substring(0, idx);
      }
      initialHtml = strongName + '.cache.html';
    }
     catch (e) {
      return;
    }
  }
  var onBodyDoneTimerId;
  function onBodyDone(){
    if (!bodyDone) {
      bodyDone = true;
      maybeStartModule();
      if ($doc_0.removeEventListener) {
        $doc_0.removeEventListener('DOMContentLoaded', onBodyDone, false);
      }
      if (onBodyDoneTimerId) {
        clearInterval(onBodyDoneTimerId);
      }
    }
  }

  if ($doc_0.addEventListener) {
    $doc_0.addEventListener('DOMContentLoaded', function(){
      maybeInjectFrame();
      onBodyDone();
    }
    , false);
  }
  var onBodyDoneTimerId = setInterval(function(){
    if (/loaded|complete/.test($doc_0.readyState)) {
      maybeInjectFrame();
      onBodyDone();
    }
  }
  , 50);
  $stats && $stats({moduleName:'phonegapdemo', sessionId:$sessionId_0, subSystem:'startup', evtGroup:'bootstrap', millis:(new Date).getTime(), type:'end'});
  $stats && $stats({moduleName:'phonegapdemo', sessionId:$sessionId_0, subSystem:'startup', evtGroup:'loadExternalRefs', millis:(new Date).getTime(), type:'begin'});
  $doc_0.write('<script defer="defer">phonegapdemo.onInjectionDone(\'phonegapdemo\')<\/script>');
}

phonegapdemo();
