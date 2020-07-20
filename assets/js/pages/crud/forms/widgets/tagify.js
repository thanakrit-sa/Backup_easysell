// Class definition
var KTTagifyDemos = function() {
    // Private functions

    var keyword_tag = function() {
        // Init autocompletes
        var toEl = document.getElementById('keyword_tag');
        var tagifyTo = new Tagify(toEl, {
            delimiters: ", ", // add new tags when a comma or a space character is entered
            // maxTags: 10,
            // blacklist: ["fuck", "shit", "pussy"],
            keepInvalidTags: true, // do not remove invalid tags (but keep them marked as invalid)
            transformTag: function(tagData) {
                tagData.class = 'tagify__tag tagify__tag-light--warning';
            }
        });
    }

    var keyword_tag1 = function() {
        // Init autocompletes
        var toEl = document.getElementById('keyword_tag1');
        var tagifyTo = new Tagify(toEl, {
            delimiters: ", ", // add new tags when a comma or a space character is entered
            // maxTags: 10,
            // blacklist: ["fuck", "shit", "pussy"],
            keepInvalidTags: true, // do not remove invalid tags (but keep them marked as invalid)
            transformTag: function(tagData) {
                tagData.class = 'tagify__tag tagify__tag-light--warning';
            }
        });
    }

    var keyword_tag2 = function() {
        // Init autocompletes
        var toEl = document.getElementById('keyword_tag2');
        var tagifyTo = new Tagify(toEl, {
            delimiters: ", ", // add new tags when a comma or a space character is entered
            // maxTags: 10,
            // blacklist: ["fuck", "shit", "pussy"],
            keepInvalidTags: true, // do not remove invalid tags (but keep them marked as invalid)
            transformTag: function(tagData) {
                tagData.class = 'tagify__tag tagify__tag-light--warning';
            }
        });
    }

    var keyword_tag3 = function() {
        // Init autocompletes
        var toEl = document.getElementById('keyword_tag3');
        var tagifyTo = new Tagify(toEl, {
            delimiters: ", ", // add new tags when a comma or a space character is entered
            // maxTags: 10,
            // blacklist: ["fuck", "shit", "pussy"],
            keepInvalidTags: true, // do not remove invalid tags (but keep them marked as invalid)
            transformTag: function(tagData) {
                tagData.class = 'tagify__tag tagify__tag-light--warning';
            }
        });
    }

    var keyword_tag4 = function() {
        // Init autocompletes
        var toEl = document.getElementById('keyword_tag4');
        var tagifyTo = new Tagify(toEl, {
            delimiters: ", ", // add new tags when a comma or a space character is entered
            // maxTags: 10,
            // blacklist: ["fuck", "shit", "pussy"],
            keepInvalidTags: true, // do not remove invalid tags (but keep them marked as invalid)
            transformTag: function(tagData) {
                tagData.class = 'tagify__tag tagify__tag-light--warning';
            }
        });
    }

    return {
        // public functions
        init: function() {
            keyword_tag();
            keyword_tag1();
            keyword_tag2();
            keyword_tag3();
            keyword_tag4();
        }
    };
}();

jQuery(document).ready(function() {
    KTTagifyDemos.init();
});
