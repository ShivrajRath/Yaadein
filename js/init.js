(function (exports) {
  'use strict';

  var cacheManager = exports.cacheManager;

  var devKey = 'AIzaSyBxmOqTjbZDQ1s4oPv15_ShOpuaBGv73fk';

  function getChannels() {
    var channels = [{
        id: "PLqtVCj5iilH5umSYIeEfdOAapk6kwb4Rl",
        title: "Apna Apna Asmaan"
      }, {
        id: "PLqtVCj5iilH6tyP9fYHgxIOQR8ixiqWZx",
        title: "Aarohan"
      }, {
        id: "PLqtVCj5iilH4AYhqR-AkTA2tWp9moOTy6",
        title: "Apradhi Kaun"
      },
      {
        id: "PL1EG23oYcaFu6SNAiofd0uco0sD0JeVji",
        title: "Bharat Ek Khoj"
      }, {
        id: "PLUiMfS6qzIMxiHu2N2Px1ISp5vxCm3PMo",
        title: "Byomkesh Bakshi",
        "reversePlaylist": true
      },
      {
        id: "PLqtVCj5iilH7G7AoAogDl22lwT2JZQjgg",
        title: "Circus"
      },
      {
        id: "PLOpLlW0eyZlbAWJOEdVCcxRPecVy2nd32",
        title: "Chanakya"
      }, {
        id: "PLqtVCj5iilH7UJbUp42ZrZhloFAq0ZrIM",
        title: "Chandamama"
      }, {
        id: "PLqtVCj5iilH7f_jEK3ibcJdRHgspApzLJ",
        title: "Chekhov Ki Duniya"
      }, {
        id: "PLqtVCj5iilH79-ag2kArFQ9TboMFb_jfZ",
        title: "Chunni"
      },
      {
        id: "PL736648C2016C16F9",
        title: "Dekh Bhai Dekh"
      }, {
        id: "PLqtVCj5iilH4uFW4f66saz0knpLxhXnf6",
        title: "Doosra Keval"
      }, {
        id: "PLqtVCj5iilH79TUWnqdYUjtytP_4fmm2Z",
        title: "Ek Prem Katha"
      }, {
        id: "PL4394F067A668CE1B",
        title: "Farman"
      }, {
        id: "PLimqN_U88-tuzyiULOGk64ttu2Yhpxxy8",
        title: "Flop Show"
      }, {
        id: "PLMymQAN3VhbRehibo2vmOsxwzJIMRVbzf",
        title: "Idhar Udhar"
      }, {
        id: "ELi374o_6uYmtgytSSlq2uZA",
        title: "Indradhanush"
      }, {
        id: "PLqtVCj5iilH7CTXQLb5DCmNtB0yzOY9pB",
        title: "Karan the Detective"
      }, {
        id: "PLcDuwjtEYAxrUbBR9F98OWVBIsa2Tfj5a",
        title: "Kirdaar"
      }, {
        id: "PLqtVCj5iilH6T19AOHcxCurzIPNBNDG62",
        title: "Mashaal"
      }, {
        id: "PL_c7L8RcICKpLCrTT_ZlyBlooup2aHBjT",
        title: "Malgudi Days"
      }, {
        id: "PLqtVCj5iilH6yI2Lfb8S0D2ilPqMDE_kg",
        title: "Mullah Nasruddin"
      },
      {
        id: "PLqtVCj5iilH7vhn3syf1_l4xyY7-hnnbr",
        title: "Peecha Karo"
      },
      {
        id: "PLfrc4Vx9Ts72_SyNbg_8kVQ0xaos_8PhG",
        title: "Phatichar"
      },
      {
        id: "PLqtVCj5iilH7fo-XO0su0CfKffdYGbSpC",
        title: "Sanjha Chulha",
        "reversePlaylist": true
      },
      {
        id: "PLqtVCj5iilH4LUrqO8QL8OMaLfPzNc6F0",
        title: "Shershah Suri"
      },
      {
        id: "PLqtVCj5iilH4DhRwlVvhbv_RIS2t6f7Wd",
        title: "Shrikant"
      },
      {
        id: "PL8EBAB6A11AE34A2D",
        title: "Tehkikaat"
      }, {
        id: "PL9lLGTVFeSH90VNAgeESzZhBsBd6WpCoS",
        title: "Tenali Rama"
      },
      {
        id: "PLXOohAx7Vj6ebhoa4nPWtPIVNrd_MAH_3",
        title: "Udaan"
      },
      {
        id: "PLqtVCj5iilH58Pzmqx2ZfP64KUjU5j1Yy",
        title: "Ved Vyas ke Pote"
      },
      {
        id: "PL5_hRTe2yBxo7yGgNifcco5nP0KxTEDr0",
        title: "Vikram Aur Betaal"
      }, {
        id: "PLD58L7yXrnpX4PkYiTaN4pB93iMQmGVsp",
        title: "Wagle ki Duniya"
      }
    ];

    // var channels_archive = [{
    //
    //     id: "PL0CaUqi81mPl2HCNflNuzo3UtuDMsfA4a",
    //     title: "Fauji"
    //   }, {
    //
    //     id: "PLOE6GX8a2ENkfFgLO1yf_HokKtVqAfvVD",
    //     title: "Katha Sagar"
    //   }, {
    //
    //     id: "PL058KYRnhLpdDaoTKKBznoXaDN8Vlxv8f",
    //     title: "Nukkad",
    //     "reversePlaylist": true
    //   }, {
    //
    //     id: "PLT3JklPII0JBFRXBPptTibXVzNjXWNiN9",
    //     title: "Shriman Shrimati"
    //   }, {
    //
    //     id: "PLFFKZZGAlUGzNs0KC_mIOStDICfbYYqr1",
    //     title: "Ye Duniya Gazab Ki"
    //   },
    //   {
    //
    //     id: "PL058KYRnhLpcREVEhJmVzAcsbRmZ5wUc0",
    //     title: "Yeh Jo Hai Zindagi",
    //     reversePlaylist: true
    //   }, {
    //   id: "PL6Rtnh6YJK7Y3MNMPgRhp70sZNqF9DcOl",
    //   title: "Office Office",
    //   "reversePlaylist": true
    // }
    // ];

    // Get cached channels for last access times
    var chachedChannels = cacheManager.getCache(devKey, 'channels') || [];

    try {
      var totalChannels = channels.length;

      channels = channels.map(function (channel) {
        channel.type = channel.type || 'playlist';
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