ace.define("ace/mode/mrk_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"], function(acequire, exports, module) {
  'use strict';
  var oop = acequire("../lib/oop");
  var TextHighlightRules = acequire("./text_highlight_rules").TextHighlightRules;

  var MrkHighlightRules = function() {
    this.$rules = {
      "start" : [{
          token: "support.function",
          regex: "^=LDR"
      }, {
          token : "support.function",
          regex : "^=0{2}\\d"
      }, {
        token : ["support.function", "text", "string"],
        regex : "(^=(?!00)\\d{2}\\d)(\\s\\s)(.{2})"
      }, {
        token: "keyword",
        regex: "\\$."
      }]
    };
  };
  oop.inherits(MrkHighlightRules, TextHighlightRules);
  exports.MrkHighlightRules = MrkHighlightRules;
});

ace.define("ace/mode/mrk",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/mrk_highlight_rules","ace/range"], function(acequire, exports, module) {
  "use strict";
  var oop = acequire("../lib/oop");
  var TextMode = acequire("./text").Mode;
  var MrkHighlightRules = acequire("./mrk_highlight_rules").MrkHighlightRules;

  var Mode = function() {
      this.HighlightRules = MrkHighlightRules;
  };
  oop.inherits(Mode, TextMode);

  (function() {
      this.$id = "ace/mode/mrk";
  }).call(Mode.prototype);

  exports.Mode = Mode;
});
