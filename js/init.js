(function (exports) {
    'use strict';

    var cacheManager = exports.cacheManager;

    var devKey = 'AIzaSyBwGt74xF1lwsuzP1iueYr4SJ_QukuSlqI';

    function getChannels() {
        var channels = [{
                type: "playlist",
                id: "PL1EG23oYcaFu6SNAiofd0uco0sD0JeVji",
                title: "Bharat Ek Khoj"
            }, {
                type: "playlist",
                id: "PLUiMfS6qzIMxiHu2N2Px1ISp5vxCm3PMo",
                title: "Byomkesh Bakshi",
                "reversePlaylist": true
            },
            {
                type: "playlist",
                id: "PLOpLlW0eyZlbAWJOEdVCcxRPecVy2nd32",
                title: "Chanakya"
            },
            {
                type: "playlist",
                id: "PL736648C2016C16F9",
                title: "Dekh Bhai Dekh"
            }, {
                type: "playlist",
                id: "PLqtVCj5iilH4uFW4f66saz0knpLxhXnf6",
                title: "Doosra Keval"
            }, {
                type: "playlist",
                id: "PL4394F067A668CE1B",
                title: "Farman"
            }, {
                type: "playlist",
                id: "PL0CaUqi81mPl2HCNflNuzo3UtuDMsfA4a",
                title: "Fauji"
            }, {
                type: "playlist",
                id: "PLimqN_U88-tuzyiULOGk64ttu2Yhpxxy8",
                title: "Flop Show"
            }, {
                type: "playlist",
                id: "PLMymQAN3VhbRehibo2vmOsxwzJIMRVbzf",
                title: "Idhar Udhar"
            }, {
                type: "playlist",
                id: "ELi374o_6uYmtgytSSlq2uZA",
                title: "Indradhanush"
            }, {
                type: "playlist",
                id: "PLOE6GX8a2ENkfFgLO1yf_HokKtVqAfvVD",
                title: "Katha Sagar"
            }, {
                type: "playlist",
                id: "PLcDuwjtEYAxrUbBR9F98OWVBIsa2Tfj5a",
                title: "Kirdaar"
            }, {
                type: "playlist",
                id: "PL_c7L8RcICKpLCrTT_ZlyBlooup2aHBjT",
                title: "Malgudi Days"
            }, {
                type: "playlist",
                id: "PL058KYRnhLpdDaoTKKBznoXaDN8Vlxv8f",
                title: "Nukkad",
                "reversePlaylist": true
            }, {
                type: "playlist",
                id: "PLfrc4Vx9Ts72_SyNbg_8kVQ0xaos_8PhG",
                title: "Phatichar"
            }, {
                type: "playlist",
                id: "PLT3JklPII0JBFRXBPptTibXVzNjXWNiN9",
                title: "Shriman Shrimati"
            }, {
                type: "playlist",
                id: "PL8EBAB6A11AE34A2D",
                title: "Tehkikaat"
            }, {
                type: "playlist",
                id: "PLFFKZZGAlUGxBkIc9Ib_ZHUBxJaiMb98a",
                title: "Tenali Rama"
            },
            {
                type: "playlist",
                id: "PLXOohAx7Vj6ebhoa4nPWtPIVNrd_MAH_3",
                title: "Udaan"
            },
            {
                type: "playlist",
                id: "PL5_hRTe2yBxo7yGgNifcco5nP0KxTEDr0",
                title: "Vikram Aur Betaal"
            }, {
                type: "playlist",
                id: "PLD58L7yXrnpX4PkYiTaN4pB93iMQmGVsp",
                title: "Wagle ki Duniya"
            },
            {
                type: "playlist",
                id: "PLFFKZZGAlUGzNs0KC_mIOStDICfbYYqr1",
                title: "Ye Duniya Gazab Ki"
            },
            {
                type: "playlist",
                id: "PL058KYRnhLpcREVEhJmVzAcsbRmZ5wUc0",
                title: "Yeh Jo Hai Zindagi",
                reversePlaylist: true
            }
        ];

        // Get cached channels for last access times
        var chachedChannels = cacheManager.getCache(devKey, 'channels') || [];

        try {
            var totalChannels = channels.length;

            channels = channels.map(function (channel) {
                channel = chachedChannels.find(function (cachedChannel) {
                    return channel.id === cachedChannel.id;
                }) || channel;

                channel.lastAccessedTime = channel.lastAccessedTime || totalChannels--;

                return channel;
            });

            /**
             * Sort channels by the last accessed time
             */
            channels.sort(function (ca, cb) {
                return cb.lastAccessedTime - ca.lastAccessedTime;
            });

        } catch (ex) {}

        return channels;
    }

    var settings = {
        Model: YouTubeAPIModel,
        PlayerView: YouTubePlayerView,
        PlaylistView: PlaylistPlayerView,
        showSearch: false,
        skipLength: 30,
        controlsHideTime: 3000,
        user: "shivrajrath",
        devKey: devKey,
        showLatestChannel: true,
        channels: getChannels(),
        displayButtons: false
    };

    exports.app = new App(settings);
}(window));