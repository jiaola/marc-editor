ace.define("ace/mode/marctext_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"], function(acequire, exports, module) {
  'use strict';
  var oop = acequire("../lib/oop");
  var TextHighlightRules = acequire("./text_highlight_rules").TextHighlightRules;

  var MarcTextHighlightRules = function() {
    this.$rules = {
      "start" : [{
          token: "support.function",
          regex: "^LDR"
      }, {
          token : "support.function",
          regex : "^0{2}\\d"
      }, {
        token : ["support.function", "text", "string"],
        regex : "(^(?!00)\\d{2}\\d)(\\s)(.{2})"
      }, {
        token: "keyword",
        regex: "\\$."
      }]
    };
  };
  oop.inherits(MarcTextHighlightRules, TextHighlightRules);
  exports.MarcTextHighlightRules = MarcTextHighlightRules;
});

ace.define("ace/mode/marctext",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/marctext_highlight_rules","ace/range"], function(acequire, exports, module) {
  "use strict";
  var oop = acequire("../lib/oop");
  var TextMode = acequire("./text").Mode;
  var MarcTextHighlightRules = acequire("./marctext_highlight_rules").MarcTextHighlightRules;

  var Mode = function() {
      this.HighlightRules = MarcTextHighlightRules;
  };
  oop.inherits(Mode, TextMode);

  (function() {
      this.$id = "ace/mode/marctext";
  }).call(Mode.prototype);

  exports.Mode = Mode;
});
