/**
 * Renders random ad text on ad tags
 */

(function (exports) {
    var _$ = {
        adIndex: 0,
        adList: [
            "For delicious indian recipies visit COOKSPAN.COM",
            "Twitter / Github: @shivrajrath"
        ],
        getNextAd: function () {
            if (this.adIndex > this.adList.length - 1) {
                this.adIndex = 0;
            }

            return this.adList[this.adIndex++];
        }
    };

    var adEngine = {
        getAd: function () {
            return _$.getNextAd();
        }
    };

    exports.adEngine = adEngine;
})(window);