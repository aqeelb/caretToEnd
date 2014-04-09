/*
 * Author: Aqeel Bhatt,
 * Type: jQuery Plugin,
 * Plugin Name: CarretToEnd,
 * DOC: 10th - Feb - 2014
 * LUP: Aqeel 100214
 * Version: 1.0
 */
(function ($) {
    $.fn.caretToEnd = function (node) {
        node.focus();
        if (typeof window.getSelection != "undefined" && typeof document.createRange != "undefined") {
            var range = document.createRange();
            range.selectNodeContents(node);
            range.collapse(false);
            var sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
        } else if (typeof document.body.createTextRange != "undefined") {
            var textRange = document.body.createTextRange();
            textRange.moveToElementText(node);
            textRange.collapse(false);
            textRange.select();
        }
    };
}(jQuery));
