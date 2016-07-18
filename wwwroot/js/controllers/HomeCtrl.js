(function() {

  var HomeController = function($scope) {

     $scope.userAction = userAction
     $scope.trackEvent = trackEvent
     $scope.path = window.location.pathname
     $scope.pathArray = window.location.hash.split( '/' );

     function init() {
       if ($scope.pathArray[1] == "products"){
          determineProduct()
       }
     }

     init();

     function userAction(user, action) {
      if (!localStorage.imamuUser) {
        var distinctId = mixpanel.get_distinct_id()
        mixpanel.identify(distinctId)
        mixpanel.people.set({
            "$email": user.email
        });
        localStorage.imamuUser = true
      }
      user_hash = {}
      if ($scope.product) {
        user_hash.product = $scope.product.name
      }

      user_hash.email = user.email
      user_hash.name = user.name

      trackEvent(action, user_hash)
      pageSpecificActions()
     }

     function trackEvent(action, info) {
        mixpanel.track(action, info)
     }

     function pageSpecificActions(){
        page = $scope.pathArray[$scope.pathArray.length - 1]
        if (page == "seller" ){
          $scope.user.name = null
        }
        $scope.user.email = null
     }

     function determineProduct(){
      cheese = {}
      cheese.name = "Cheese"
      cheese.large_image = "images/p-cheese.jpg"
      cheese.additional_images = ["images/p-box.jpg", "images/p-packet.jpg"]
      cheese.title = "Imamu Cheese Starter Kit"
      cheese.contains = ["Starter culture and rennet", "Recipe and instruction booklet"]
      cheese.product_description = "The joys of healthy, homemade cheese! Our Cheese Starter kit gives you everything you need to start creating your own amazing cheeses. Included are step by step instructions with ideas and techniques to help you experiment with all kinds of textures and flavors."
      cheese.price = "$40"
      cheese.other_kits = [
        {title: "Kombucha", url: "#/products/kombucha", image: "images/pl-kombucha.jpg"},
        {title: "Cider", url: "#/products/cider", image: "images/pl-cider.jpg"},
        {title: "Yogurt", url: "#/products/yogurt", image: "images/pl-yogurt.jpg"}
      ]

      cider = {}
      cider.name = "Cider"
      cider.large_image = "images/p-cider.jpg"
      cider.additional_images = ["images/p-box.jpg", "images/p-cider-bottles.jpg", "images/p-cider-jar.jpg" ,"images/p-packet.jpg"]
      cider.title = "Imamu Cider Starter Kit"
      cider.contains = ["Two packets of wine yeasts (Lalvin 71B)", "4 Bottles Ideal for Cider", "5 Gallon Plastic Bucket, Spigot, Lid and Airlock", "5 feet of food-grade plastic tubing", "Stainless steel spoon", "Recipe and instruction booklet" ]
      cider.product_description = "Our cider start kit is a wonderful way to start your own fermenting your own cider. Ideal for use with any local apple cider and sugar or honey. Sparkling, sweet, dry, strong ... it's up to you to craft your perfect batch!"
      cider.price = "$70"
      cider.other_kits = [
        {title: "Kombucha", url: "#/products/kombucha", image: "images/pl-kombucha.jpg"},
        {title: "Pickles", url: "#/products/pickles", image: "images/pl-pickles.jpg"},
        {title: "Cheese", url: "#/products/cheese", image: "images/pl-cheese.jpg"}
      ]

      kefir = {}
      kefir.name = "Kefir"
      kefir.large_image = "images/p-kefir.jpg"
      kefir.additional_images = ["images/p-box.jpg", "images/p-largejar.jpg" ,"images/p-packet.jpg"]
      kefir.title = "Imamu Kefir Starter Kit"
      kefir.contains = ["2 packets of Kefir starter (grains)", "16 oz. Glass Jar", "Lid with containment band", "Recipe and instruction booklet" ]
      kefir.product_description = "Our kefir starter kit takes makes it easy to start your own kefir culture. Homemade kefir really has to be tried to be believed, and the variations are limited only by your imagination. With no starter to maintain this culture a great choice for beginners."
      kefir.price = "$40"
      kefir.other_kits = [
        {title: "Kombucha", url: "#/products/kombucha", image: "images/pl-kombucha.jpg"},
        {title: "Pickles", url: "#/products/pickles", image: "images/pl-pickles.jpg"},
        {title: "Cheese", url: "#/products/cheese", image: "images/pl-cheese.jpg"}
      ]

      kimchi = {}
      kimchi.name = "Kimchi"
      kimchi.large_image = "images/p-kimchi.jpg"
      kimchi.additional_images = ["images/p-box.jpg", "images/p-largejar.jpg", "images/p-cider-jar.jpg" ,"images/p-packet.jpg"]
      kimchi.title = "Imamu Kimchi Starter Kit"
      kimchi.contains = ["Two packets of kimichi paste", "Kimchi glass jar", "Fermentation lock lid", "Recipe and instruction booklet"]
      kimchi.product_description = "Our traditional Kimchi starter is a wonderful introduction to the pleasure of kimchi crafting. You can experiment to create your own levels of sour and spice. With no starter to maintain this culture a great choice for beginners."
      kimchi.price = "$70"
      kimchi.other_kits = [
        {title: "Kombucha", url: "#/products/kombucha", image: "images/pl-kombucha.jpg"},
        {title: "Pickles", url: "#/products/pickles", image: "images/pl-pickles.jpg"},
        {title: "Cheese", url: "#/products/cheese", image: "images/pl-cheese.jpg"}
      ]

      kombucha = {}
      kombucha.name = "Kombucha"
      kombucha.large_image = "images/p-kombucha.jpg"
      kombucha.additional_images = ["images/p-box.jpg", "images/p-largejar.jpg", "images/p-kombucha-pack.jpg" ,"images/p-packet.jpg"]
      kombucha.title = "Imamu Kombucha Starter Kit"
      kombucha.contains = ["3 blends of organic Green, Black, and White teas", "Kombucha Brewing Jar", "SCOBY (Symbiotic Colony of Yeast and Bacteria)", "½ cup of starter Kombucha", "Recipe and instruction booklet" ]
      kombucha.product_description = "Our Simple Kombucha Starter is everything that you need to start brewing your own kombucha. Step by step instructions so that you can brew with confidence! With three different tea varieties included, you can experiment to find your perfect flavor."
      kombucha.price = "$50"
      kombucha.other_kits = [
        {title: "Yogurt", url: "#/products/yogurt", image: "images/pl-yogurt.jpg"},
        {title: "Pickles", url: "#/products/pickles", image: "images/pl-pickles.jpg"},
        {title: "Cheese", url: "#/products/cheese", image: "images/pl-cheese.jpg"}
      ]

      pickles = {}
      pickles.name = "Pickles"
      pickles.large_image = "images/p-pickle.jpg"
      pickles.additional_images = ["images/p-box.jpg", "images/p-largejar.jpg", "images/p-packet.jpg"]
      pickles.title = "Imamu Pickles Starter Kit"
      pickles.contains = ["Perfect Pickling Jar (odorless and self-pressurizing)", "Floating Brine Cup", "Gasket Ring to activate pickling action", "Fermentation Lock", "½ pound  of Celtic Sea Salt (for first 4 gallons)", "Recipe and instruction booklet" ]
      pickles.product_description = "Our simple pickle starter is a straightforward starter kit for a variety of pickle options. Make and store your pickles in our perfect pickling jar."
      pickles.price = "$50"
      pickles.other_kits = [
        {title: "Kombucha", url: "#/products/kombucha", image: "images/pl-kombucha.jpg"},
        {title: "Cider", url: "#/products/cider", image: "images/pl-cider.jpg"},
        {title: "Cheese", url: "#/products/cheese", image: "images/pl-cheese.jpg"}
      ]

      sauerkraut = {}
      sauerkraut.name = "Sauerkraut"
      sauerkraut.large_image = "images/p-sauerkraut.jpg"
      sauerkraut.additional_images = ["images/p-box.jpg", "images/p-largejar.jpg", "images/p-packet.jpg"]
      sauerkraut.title = "Imamu Sauerkraut Starter Kit"
      sauerkraut.contains = ["Brining Crock", "Kosher Salt", "Recipe and instruction booklet"  ]
      sauerkraut.product_description = "Our Sauerkraut Starter is a tangy, almost effervescent sauerkraut that wonderfully reflects the character of your local cabbage. With our kit, you can make up to a half gallon of your own probiotic-rich sauerkraut."
      sauerkraut.price = "$30"
      sauerkraut.other_kits = [
        {title: "Kombucha", url: "#/products/kombucha", image: "images/pl-kombucha.jpg"},
        {title: "Cider", url: "#/products/cider", image: "images/pl-cider.jpg"},
        {title: "Cheese", url: "#/products/cheese", image: "images/pl-cheese.jpg"}
      ]

      tempeh = {}
      tempeh.name = "Tempeh"
      tempeh.large_image = "images/p-tempeh.jpg"
      tempeh.additional_images = ["images/p-box.jpg", "images/p-tempeh-container.jpg", "images/p-packet.jpg"]
      tempeh.title = "Imamu Tempeh Starter Kit"
      tempeh.contains = ["Soybeans", "Starter Culture (Rhizopus oligosporus)", "Vented Container", "Recipe and instruction booklet"]
      tempeh.product_description = "Ever think you could make your own tempeh? Our Tempeh Starter gives step by step instructions, so you'll be creating your own luscious probiotic-rich tempeh in just a few days. With no starter to maintain this culture a great choice for beginners."
      tempeh.price = "$40"
      tempeh.other_kits = [
        {title: "Kombucha", url: "#/products/kombucha", image: "images/pl-kombucha.jpg"},
        {title: "Cider", url: "#/products/cider", image: "images/pl-cider.jpg"},
        {title: "Cheese", url: "#/products/cheese", image: "images/pl-cheese.jpg"}
      ]

      yogurt = {}
      yogurt.name = "Yogurt"
      yogurt.large_image = "images/p-yogurt.jpg"
      yogurt.additional_images = ["images/p-box.jpg","images/p-yogurt-jar.jpg" ,"images/p-packet.jpg"]
      yogurt.title = "Imamu Yogurt Starter Kit"
      yogurt.contains = ["8 Culture Packets of Different Flavors", "Yogurt Culture Container" ,"Recipe and instruction booklet"]
      yogurt.product_description = "Our Traditional Yogurt Starter is a pleasantly tangy direct-set yogurt starter that is easy to use. Make yogurt when you need to and freeze the remaining packets for later. With no starter to maintain this culture a great choice for beginners."
      yogurt.price = "$50"
      yogurt.other_kits = [
        {title: "Kombucha", url: "#/products/kombucha", image: "images/pl-kombucha.jpg"},
        {title: "Cider", url: "#/products/cider", image: "images/pl-cider.jpg"},
        {title: "Cheese", url: "#/products/cheese", image: "images/pl-cheese.jpg"}
      ]
      // debugger;
        product_url = $scope.pathArray[2]
        if (product_url == "cheese"){
          $scope.product = cheese
        } else if (product_url == "cider") {
           $scope.product = cider
        } else if (product_url == "kefir") {
          $scope.product = kefir
        } else if (product_url == "kimchi") {
          $scope.product = kimchi
        } else if (product_url == "kombucha") {
          $scope.product = kombucha
        } else if (product_url == "pickles") {
           $scope.product = pickles
        } else if (product_url == "sauerkraut") {
           $scope.product = sauerkraut
        }  else if (product_url == "tempeh") {
           $scope.product = tempeh
        }  else if (product_url == "yogurt") {
          $scope.product = yogurt
        }


      // For Testing
      $scope.product = cheese


     }

  };

  HomeController.$inject = ['$scope'];

  angular.module('imamuApp')
    .controller('HomeController', HomeController);

}());

