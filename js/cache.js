/**
 * Caches youtube api calls and playlist last viewed
 */
(function (exports) {

    var ls = localStorage;

    var cacheManager = {
        /**
         * Clear all local storage
         */
        clear: function () {
            ls.clear();
        },

        /**
         * Sets data to local storage
         */
        setLs: function (key, str) {
            ls.setItem(this.encode(key), this.encode(JSON.stringify({
                data: str
            })));
        },

        /**
         * String encode
         */
        encode: function (str) {
            return window.btoa(unescape(encodeURIComponent(str)));
        },

        /**
         * String decode
         */
        decode: function (str) {
            return decodeURIComponent(escape(window.atob(str)));
        },

        /**
         * Clears cache if dev key has changed
         */
        clearCacheIfNewDevKey: function (devKey) {
            var cachedDevKey = ls.getItem('devKey');

            // If dev key is not set, then set
            if (!cachedDevKey) {
                ls.setItem('devKey', devKey);
                // If dev key has changed, then clear all the cache
            } else if (cachedDevKey !== devKey) {
                this.clear();
            }
        },

        /**
         * Gets data from local storage
         */
        getCache: function (devKey, storageKey) {
            try {
                this.clearCacheIfNewDevKey(devKey);
                return JSON.parse(JSON.parse(this.decode((ls.getItem(this.encode(storageKey)) || 'eyJkYXRhIjp7fX0='))).data);
            } catch (ex) {
                return;
            }
        },

        /**
         * Cache data to local storage
         */
        setCache: function (devKey, storageKey, data) {

            this.clearCacheIfNewDevKey(devKey);

            // Set the data to local storage
            if (typeof data === 'object') {
                this.setLs(storageKey, JSON.stringify(data));
            } else if (typeof data === 'string') {
                this.setLs(storageKey, data);
            }
        }
    };

    exports.cacheManager = cacheManager;

})(window);