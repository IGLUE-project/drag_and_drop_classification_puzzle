//Copy this file to config.js and specify your own settings

export let ESCAPP_APP_SETTINGS = {
  //Settings that can be specified by the authors
  skin: "STANDARD", //skin can be "STANDARD", "RETRO" or "FUTURISTIC".
  // backgroundImg: "NONE", //backgroundImg can be "NONE" or a URL.
  actionAfterSolve: "SHOW_MESSAGE", //actionAfterSolve can be "NONE" or "SHOW_MESSAGE".
  //message: "Custom message",

  leftTitle: "Left title",
  rightTitle: "Right title",
  // confirmationText: "Confirm",

  initialImages: JSON.stringify([
    { id: 1, title: "Item 1" },
    { id: 2, title: "Item 2" },
    { id: 3, title: "Item 3" },
    { id: 4, title: "Item 4"}
  ]),

  // initialImages: JSON.stringify([
  //   { id: 1, title: "Wine",  src: "https://github.com/sonsoleslp/balticsea2025/blob/main/docs/food/images/food/wine.png?raw=true" },
  //   { id: 2, title: "Candy", src: "https://github.com/sonsoleslp/balticsea2025/blob/main/docs/food/images/food/candy.png?raw=true"  },
  //   { id: 3, title: "Fish", src: "https://github.com/sonsoleslp/balticsea2025/blob/main/docs/food/images/food/fish.png?raw=true"  },
  //   { id: 4, title: "Banana", src: "https://github.com/sonsoleslp/balticsea2025/blob/main/docs/food/images/food/banana.png?raw=true"  },
  //   { id: 5, title: "Cherry jam", src: "https://github.com/sonsoleslp/balticsea2025/blob/main/docs/food/images/food/jam.png?raw=true"  },
  //   { id: 6, title: "Bread", src: "https://github.com/sonsoleslp/balticsea2025/blob/main/docs/food/images/food/bread.png?raw=true"  },
  //   { id: 7, title: "Café espresso macchiato", src: "https://github.com/sonsoleslp/balticsea2025/blob/main/docs/food/images/food/coffee.png?raw=true"  },
  //   { id: 9, title: "Tomato"}
  // ]),

  //Settings that will be automatically specified by the Escapp server
  locale:"es",
   
  escappClientSettings: {
    endpoint:"https://escapp.es/api/escapeRooms/id",
    linkedPuzzleIds: [1],
    rtc: false,
    preview: false
  },
};