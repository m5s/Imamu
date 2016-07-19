(function() {

  var HomeController = function($scope, ngNotify) {

     $scope.userAction = userAction
     $scope.trackEvent = trackEvent
     $scope.path = window.location.pathname
     $scope.pathArray = window.location.hash.split( '/' );
     $scope.isSelected = isSelected

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
      ngNotify.set('Awesome! We\'ll reach out soon.', {
          position: 'top',
          sticky: true
      });
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

     function isSelected(linkId) {
      var path = $scope.pathArray[1] 
      if (path == ""&& linkId == 'home') {
        return true
      } else if (path == linkId) {
        return true
      } else {
        return false
      }

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
      cheese.rating = 4
      cheese.testimonial = {
        name: "Bridget  C",
        text: "Amazingly easy to get started. My first batch of cheese was creamy and actually tasted healthy!"
      }

      cider = {}
      cider.name = "Cider"
      cider.large_image = "images/p-cider.jpg"
      cider.additional_images = ["images/p-box.jpg", "images/p-cider-bottles.jpg", "images/p-tubing.jpg" ,"images/p-packet.jpg"]
      cider.title = "Imamu Cider Starter Kit"
      cider.contains = ["Two packets of wine yeasts (Lalvin 71B)", "4 Bottles Ideal for Cider", "5 Gallon Plastic Bucket, Spigot, Lid and Airlock", "5 feet of food-grade plastic tubing", "Stainless steel spoon", "Recipe and instruction booklet" ]
      cider.product_description = "Our cider start kit is a wonderful way to start your own fermenting your own cider. Ideal for use with any local apple cider and sugar or honey. Sparkling, sweet, dry, strong ... it's up to you to craft your perfect batch!"
      cider.price = "$70"
      cider.other_kits = [
        {title: "Kombucha", url: "#/products/kombucha", image: "images/pl-kombucha.jpg"},
        {title: "Pickles", url: "#/products/pickles", image: "images/pl-pickles.jpg"},
        {title: "Cheese", url: "#/products/cheese", image: "images/pl-cheese.jpg"}
      ]
      cider.rating = 4
      cider.testimonial = {
        name: "Herman S",
        text: "Have tried a couple different flavors by adding different amounts of spices (cinnamon, allspice, etc...). Makes a lot of cider!"
      }

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
      kefir.rating = 4
      kefir.testimonial = {
        name: "Samuel W",
        text: "Makes awesome kefir, definitely try it with raw milk."
      }

      kimchi = {}
      kimchi.name = "Kimchi"
      kimchi.large_image = "images/p-kimchi.jpg"
      kimchi.additional_images = ["images/p-box.jpg", "images/p-largejar.jpg","images/p-packet.jpg"]
      kimchi.title = "Imamu Kimchi Starter Kit"
      kimchi.contains = ["Two packets of kimichi paste", "Kimchi glass jar", "Fermentation lock lid", "Recipe and instruction booklet"]
      kimchi.product_description = "Our traditional Kimchi starter is a wonderful introduction to the pleasure of kimchi crafting. You can experiment to create your own levels of sour and spice. With no starter to maintain this culture a great choice for beginners."
      kimchi.price = "$70"
      kimchi.other_kits = [
        {title: "Kombucha", url: "#/products/kombucha", image: "images/pl-kombucha.jpg"},
        {title: "Pickles", url: "#/products/pickles", image: "images/pl-pickles.jpg"},
        {title: "Cheese", url: "#/products/cheese", image: "images/pl-cheese.jpg"}
      ]
      kimchi.rating = 5
      kimchi.testimonial = {
        name: "Elena  P",
        text: "If you've never made your own kimchi before, you really should. So easy to make delicious kimchi with the Imamu starter kit!"
      }

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
      kombucha.rating = 4
      kombucha.testimonial = {
        name: "Kelli  R",
        text: "Easy to get started, I am going to experiment with different flavors."
      }

      pickles = {}
      pickles.name = "Pickles"
      pickles.large_image = "images/p-pickles.jpg"
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
      pickles.rating = 5
      pickles.testimonial = {
        name: "Jeremy P",
        text: "Made a batch of spicy dill peppers with black peppercorns, red pepper flakes, garlic, and a bunch of dill. Amazing!"
      }

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
      sauerkraut.rating = 5
      sauerkraut.testimonial = {
        name: "Gabriel  S",
        text: "So easy! We have keep finding new ways to use sauerkraut because we love making it so much!"
      }

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
      tempeh.rating = 4
      tempeh.testimonial = {
        name: "Candace  H",
        text: "This starter kit made a very smooth tempeh with a great nutty flavor!"
      }

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
      yogurt.rating = 5
      yogurt.testimonial = {
        name: "Lorraine C",
        text: "Easy to follow recipe. Great consistency and good flavor."
      }
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


     }



  };

  HomeController.$inject = ['$scope', 'ngNotify'];

  angular.module('imamuApp')
    .controller('HomeController', HomeController);

}());

