// todo => use a key to track the current video, or just pass the video in as a ref to the function and grab its source

var vm = new Vue({
  el: "#app",

  data: {

    // mock up the user - this well eventually come from the database UMS (user management system)
    user:{
      isAdmin: true,
      avatar: 'thor.png', //falsie value
      isLoggedIn: true
    },


    // this data would also come from the database, but we'll just mock it up for now
    videodata: [
      { name: "Star Wars The Force Awakens", thumb: "forceawakens.jpg", vidsource: "forceawakens.mp4", description: "yet another star wars movie" },
      { name: "Stranger Things", thumb: "strangerthings.jpg", vidsource: "strangerthings.mp4", description: "don't get lost in the upside down" },
      { name: "Marvel's The Avengers", thumb: "avengers.jpg", vidsource: "avengers.mp4", description: "will they make black widow action figures this time?" }
    ],
    videotitle: "video title goes here",
    vidsource: "",
    videodescription: "video description here",
    showDetails: false
  },

  methods: {
    setUserPrefs() {
      //this is the preferences control, hit the api when ready (or use a components)
      console.log('set user prefs here');
    },

    userLogin() {
      //call the login route, and/or load the login compontent
      console.log('do login /logout on click');
     // this a ternary statement -> shorthand for if / else
     // the wxpression evauates the true of ralse 0 if it's frue, set the value equal to
     // the left of the colon. if it's false, set the value equal to the right.
      this.user.isLoggedIn = (this.user.isLoggedIn) ? false : true;
    },
    showMovieDetails({name, vidsource, description}){
      //console.log('show these details: ', movie);
      this.videotitle = name;
      this.vidsource = vidsource;
      this.videodescription = description;

      //make the moive details visible
      this.showDetails = true;
    }
  }
});
