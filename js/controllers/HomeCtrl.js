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

       if ($scope.pathArray[1] == "market"){
          determineMarketProduct()
       }
       if ($scope.pathArray[1] == "sub" && $scope.pathArray.length < 3) {
          $scope.trackEvent("Subscription Page Loaded")   
       } else if ($scope.pathArray[1] == "market" && $scope.pathArray.length < 3) {
          $scope.trackEvent("Market Page Loaded")   
       } 

       if ($scope.pathArray[1] =="soon") {
          $('body').addClass("soon");
          $('#ng-view').css("height", "100%");
          $scope.trackEvent("Soon Page Loaded") 
       }
       if ($scope.pathArray[1] =="gyogurt") {
          $('body').addClass("gyogurt");
          $('#ng-view').css("height", "100%");
          $scope.trackEvent("Gyogurt Page Loaded") 
       }
     }

     init();

     function userAction(user, action, source) {
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
      trackEvent(action, user_hash, source)
      pageSpecificActions()
      ngNotify.set('Thanks! We\'ll be in touch soon.', {
          position: 'top',
          sticky: true
      });
     }

     function trackEvent(action, info, source) {
        mixpanel.track(action, info)
        if (action == "Product Reserve Step One"){
          fbq('track', 'AddToCart');
        } else if (action == "Subscription ReservedWithEmail") {
          fbq(['track', 'CompleteRegistration']);
        } else if (source == "marketplace") {
          fbq(['track', 'CompleteRegistration']);
        } else if (action == "Soon Subscription Signup") {
          fbq(['track', 'CompleteRegistration']);
        } else if (action == "Modal Soon Subscription Signup") {
          fbq(['track', 'CompleteRegistration']);
        } else if (action == "Gyogurt Add To Cart") {
          fbq(['track', 'CompleteRegistration']);
        }    
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
      kimchi.price = "$40"
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
      pickles.price = "$40"
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
      tempeh.price = "$50"
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
      yogurt.price = "$40"
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

     function determineMarketProduct(){
      cheese = {}
      cheese.name = "Cheese"
      cheese.large_image = "images/p-cheese.jpg"
      cheese.additional_images = ["images/p-box.jpg", "images/p-packet.jpg"]
      cheese.title = "Joyce's Nut-tastic Cheese"
      cheese.contains = ["Starter culture", "Renet", "Cashews", "Cinnamon", "Dried Cherries"]
      cheese.product_description = "My homemade cheese is a rich blend of flavors. It is delicious. Personally, I think it is perfect when spread on gluten-free bread. I love to add hemp seeds and top it with honey but feel free to experiment!"
      cheese.price = "$5"
      cheese.amount_remaining = "7"
      cheese.other_kits = [
        {title: "Ben's Kombucha", url: "#/products/kombucha", image: "images/pl-kombucha.jpg"},
        {title: "Kirk's Cider", url: "#/products/cider", image: "images/pl-cider.jpg"},
        {title: "Sarah's Yogurt", url: "#/products/yogurt", image: "images/pl-yogurt.jpg"}
      ]
      cheese.rating = 4
      cheese.testimonials = [
        {
          profile_pic: "images/arnold.jpg",
          name: "Arnold M.",
          text: "Literally the best homemade cheese I've ever had. The handwritten letter was a nice touch, as well."
        },
        {
          profile_pic: "images/scott.jpg",
          name: "Scott  C",
          text: "I followed Joyce's lead and toped it with honey and hemp seeds. It was a celiac's heaven on earth."
        }

      ]
      cheese.seller = {
        profile_pic: "images/joyce.jpg",
        name: "Joyce",
        bio: "I first learned how to ferment my own food from my mother. We use to ferment cheese, kefir, kombucha, pickles...you name it, we did it :).",
        attributes: ["30+ years experience", "Imamu Expert"]
      }

      cider = {}
      cider.name = "Cider"
      cider.large_image = "images/p-cider.jpg"
      cider.additional_images = ["images/p-box.jpg", "images/p-cider-bottles.jpg", "images/p-tubing.jpg" ,"images/p-packet.jpg"]
      cider.title = "Kirk's Cider"
      cider.contains = ["Two packets of wine yeasts (Lalvin 71B)", "5lbs of Apples", "Cinnamon", "Brown Sugar"]
      cider.product_description = "My starter juice is from a farm just nearby my parents house in Saratoga, Springs. I take great care in my cider and I hope you enjoy it."
      cider.price = "$6"
      cider.amount_remaining = "15"
      cider.other_kits = [
        {title: "Ben's Kombucha", url: "#/products/kombucha", image: "images/pl-kombucha.jpg"},
        {title: "Mica's Pickles", url: "#/products/pickles", image: "images/pl-pickles.jpg"},
        {title: "Joyce's Cheese", url: "#/products/cheese", image: "images/pl-cheese.jpg"}
      ]
      cider.rating = 4
      cider.testimonials = [
        {
          profile_pic: "images/jessica.jpg",
          name: "Jessica S",
          text: "I've been ordering Kirk's cider for about 2 years now. It has never let me down and is always a hit at parties."
        },
        {
          profile_pic: "images/susan.jpg",
          name: "Susan  C",
          text: "I ordered Kirk's cider after my friend told me about Imamu. It was incredible. He even sent it with notes on how to heat it up to perfection."
        }

      ]
      cider.seller = {
        profile_pic: "images/kirk.jpg",
        name: "Kirk",
        bio: "I started fermenting my own food after working on a farm one summer during college. I became fascinated with environmentally conscious food preservation and production. I love it because, in addition to being wicked fun, it is incredibly healty. ",
        attributes: ["5+ years experience", "Imamu Expert"]
      }

      kefir = {}
      kefir.name = "Kefir"
      kefir.large_image = "images/p-kefir.jpg"
      kefir.additional_images = ["images/p-box.jpg", "images/p-largejar.jpg" ,"images/p-packet.jpg"]
      kefir.title = "Jeremy's Kefir"
      kefir.contains = ["2 packets of Kefir starter (grains)", "Recipe (in case you're curious", "Fresh Milk" ]
      kefir.product_description = "My kefir is like a spartan army for your body :). It has complete proteins, B vitamins, minerals, and can help prevent the growth of harmful bacteria. Give it a try!"
      kefir.price = "$5"
      kefir.amount_remaining = "8"
      kefir.other_kits = [
        {title: "Ben's Kombucha", url: "#/products/kombucha", image: "images/pl-kombucha.jpg"},
        {title: "Mica's Pickles", url: "#/products/pickles", image: "images/pl-pickles.jpg"},
        {title: "Joyce's Cheese", url: "#/products/cheese", image: "images/pl-cheese.jpg"}
      ]
      kefir.rating = 4
      kefir.testimonials = [
        {
          profile_pic: "images/michael.jpg",
          name: "Michael V",
          text: "Infusing my body with probiotic rich kefir has changed my life. Instead of purchasing expensive priobiotics, I get them naturally from Jeremy's delish Kefir."
        },
        {
          profile_pic: "images/chloe.jpg",
          name: "Chloe  C",
          text: "This was the first time I tried Kefir and it lived up to the hype! Thanks Jeremy :)"
        }

      ]
      kefir.seller = {
        profile_pic: "images/jeremy.jpg",
        name: "Jeremy",
        bio: "After reading Wild Fermentation by Sandor Katz, I was hooked. Fermenting my own food is my passion and I'm psyched Imamu can help me share it with you.",
        attributes: ["8+ years experience", "Imamu Expert"]
      }

      kimchi = {}
      kimchi.name = "Kimchi"
      kimchi.large_image = "images/p-kimchi.jpg"
      kimchi.additional_images = ["images/p-box.jpg", "images/p-largejar.jpg","images/p-packet.jpg"]
      kimchi.title = "Zoe's Kimchi"
      kimchi.contains = ["Two packets of kimichi paste", "cabbage", "pepper flakes", "sugar", "nori", "daikon", "scallions"]
      kimchi.product_description = "Our traditional Kimchi starter is a wonderful introduction to the pleasure of kimchi crafting. You can experiment to create your own levels of sour and spice. With no starter to maintain this culture a great choice for beginners."
      kimchi.price = "$4"
      kimchi.amount_remaining = "13"
      kimchi.other_kits = [
        {title: "Ben's Kombucha", url: "#/products/kombucha", image: "images/pl-kombucha.jpg"},
        {title: "Mica's Pickles", url: "#/products/pickles", image: "images/pl-pickles.jpg"},
        {title: "Joyce's Cheese", url: "#/products/cheese", image: "images/pl-cheese.jpg"}
      ]
      kimchi.rating = 5
      kimchi.testimonials = [
        {
          profile_pic: "images/phoebe.jpg",
          name: "Phoebe L",
          text: "Best Kimchi I've ever had. Zoe called the day after it shipped to make sure everything arrived okay. Great experience."
        },
        {
          profile_pic: "images/janice.jpg",
          name: "Janice W",
          text: "I was so impressed the kimchi arrived cold. Zoe has experience shipping prepared food and it showed. "
        }

      ]
      kimchi.seller = {
        profile_pic: "images/zoe.jpg",
        name: "Zoe",
        bio: "I'm a sous-chef at a french restuarant in the west village. Before that, I ran a farm upstate but I moved to NYC to pursue my dream of becoming a chef. To this day I still get my main ingredients from the exact same farm. It is my hope that those who try my food can taste the difference :)",
        attributes: ["4+ years experience", "Imamu Expert"]
      }

      kombucha = {}
      kombucha.name = "Kombucha"
      kombucha.large_image = "images/p-kombucha.jpg"
      kombucha.additional_images = ["images/p-box.jpg", "images/p-largejar.jpg", "images/p-kombucha-pack.jpg" ,"images/p-packet.jpg"]
      kombucha.title = "Ben's Kombucha"
      kombucha.contains = ["Black tea", "SCOBY (Symbiotic Colony of Yeast and Bacteria)", "½ cup of starter Kombucha"]
      kombucha.product_description = "Ben's black tea kombucha will knock your socks off. It is tart but with an underlying sweetness. Oh and it's fizzy!"
      kombucha.price = "$3"
      kombucha.amount_remaining = "8"
      kombucha.other_kits = [
        {title: "Sarah's Yogurt", url: "#/products/yogurt", image: "images/pl-yogurt.jpg"},
        {title: "Mica's Pickles", url: "#/products/pickles", image: "images/pl-pickles.jpg"},
        {title: "Joyce's Cheese", url: "#/products/cheese", image: "images/pl-cheese.jpg"}
      ]
      kombucha.rating = 4
      kombucha.testimonials = [
        {
          profile_pic: "images/aaron.jpg",
          name: "Aaron H",
          text: "Refreshingly fizzy but not too sweet. Ben's kombucha is the bomb."
        },
        {
          profile_pic: "images/alfred.jpg",
          name: "Alfred B",
          text: "Great for the gut and even better for the taste buds!"
        }

      ]
      kombucha.seller = {
        profile_pic: "images/ben.jpg",
        name: "Ben",
        bio: "I started out fermenting beer but I wanted something I could share with my children so I switched to Kombucha. They loved it! I've been doing ever it since. Hope you enjoy it",
        attributes: ["4+ years experience", "Imamu Expert"]
      }


      pickles = {}
      pickles.name = "Pickles"
      pickles.large_image = "images/p-pickles.jpg"
      pickles.additional_images = ["images/p-box.jpg", "images/p-largejar.jpg", "images/p-packet.jpg"]
      pickles.title = "Mica's Pickles"
      pickles.contains = ["½ pound  of Celtic Sea Salt (for first 4 gallons)", "Pickles", "4-6 grape leaves", "6-9 cloves garlic, peeled", "2 Large Heads of Dill", "Black Peppercorns", "Red Pepper Flakes", "Mustard seeds"]
      pickles.product_description = "Natural, salty, and seasoned with dill and garlic. Classic!"
      pickles.price = "$5"
      pickles.amount_remaining = "11"
      pickles.other_kits = [
        {title: "Ben's Kombucha", url: "#/products/kombucha", image: "images/pl-kombucha.jpg"},
        {title: "Kirk's Cider", url: "#/products/cider", image: "images/pl-cider.jpg"},
        {title: "Joyce's Cheese", url: "#/products/cheese", image: "images/pl-cheese.jpg"}
      ]
      pickles.rating = 5
      pickles.testimonials = [
        {
          profile_pic: "images/jonathan.jpg",
          name: "Jonathan F",
          text: "I'm a born and raised New Yorker so I have a high bar for pickles. Mica exceeded it!"
        },
        {
          profile_pic: "images/monica.jpg",
          name: "Monica G",
          text: "I didn't think I could love any pickle more than a Katz deli pickle...but I was wrong."
        }

      ]
      pickles.seller = {
        profile_pic: "images/mica.jpg",
        name: "Mica",
        bio: "During the day, I'm the head chef at a vegan restaurant in Soho. At night, I experiment with different pickle recipes. Most chefs don't like to cook at home but my passion for probiotics started because of my family. My daughter had pneumonia when she was younger and the only thing that seems to keep her immune system strong enough is fermented food (and probiotics). That is why I started fermenting food and I just fell in love with it. ",
        attributes: ["7+ years experience", "Imamu Expert"]
      }

      sauerkraut = {}
      sauerkraut.name = "Sauerkraut"
      sauerkraut.large_image = "images/p-sauerkraut.jpg"
      sauerkraut.additional_images = ["images/p-box.jpg", "images/p-largejar.jpg", "images/p-packet.jpg"]
      sauerkraut.title = "Luke's Sauerkraut"
      sauerkraut.contains = ["Cabbage", "Kosher Salt"]
      sauerkraut.product_description = "Classic sauerkraut made by a sauerkraut pro."
      sauerkraut.price = "$4"
      sauerkraut.amount_remaining = "9"
      sauerkraut.other_kits = [
        {title: "Ben's Kombucha", url: "#/products/kombucha", image: "images/pl-kombucha.jpg"},
        {title: "Kirk's Cider", url: "#/products/cider", image: "images/pl-cider.jpg"},
        {title: "Joyce's Cheese", url: "#/products/cheese", image: "images/pl-cheese.jpg"}
      ]
      sauerkraut.rating = 5
      sauerkraut.testimonials = [
        {
          profile_pic: "images/jennifer.jpg",
          name: "Jennifer H",
          text: "Luke's sauerkraut is one of kind."
        },
        {
          profile_pic: "images/beatrice.jpg",
          name: "Beatrice L",
          text: "I never thought I would write a review about sauerkraut but, after tasting Luke's, I felt compelled to share my thoughts with the world! It was amazing."
        }

      ]
      sauerkraut.seller = {
        profile_pic: "images/luke.jpg",
        name: "Luke",
        bio: "I first tried Sauerkraut when I was 6 years old at Yankee stadium. It was on a footlong hot dog. The next day my mom showed me how to make some at home and I've been doing it ever since.",
        attributes: ["16+ years experience", "Imamu Expert"]
      }

      tempeh = {}
      tempeh.name = "Tempeh"
      tempeh.large_image = "images/p-tempeh.jpg"
      tempeh.additional_images = ["images/p-box.jpg", "images/p-tempeh-container.jpg", "images/p-packet.jpg"]
      tempeh.title = "Megan's Tempeh"
      tempeh.contains = ["Soybeans", "Peanuts", "Cocunut Flakes", "Starter Culture (Rhizopus oligosporus)"]
      tempeh.product_description = "A rare combo of peanuts and coconut flakes. I combined two of my favorite types of tempeh (bongkrek & oncom). It is to die for."
      tempeh.price = "$4"
      tempeh.amount_remaining = "16"
      tempeh.other_kits = [
        {title: "Ben's Kombucha", url: "#/products/kombucha", image: "images/pl-kombucha.jpg"},
        {title: "Kirk's Cider", url: "#/products/cider", image: "images/pl-cider.jpg"},
        {title: "Joyce's Cheese", url: "#/products/cheese", image: "images/pl-cheese.jpg"}
      ]
      tempeh.rating = 4
      tempeh.testimonials = [
        {
          profile_pic: "images/simon.jpg",
          name: "Simon R",
          text: "I'm a bit of a tempeh snob but Megan's tempeh is on another level. The mix of peanut and coconut is an unexpected explosion of flavor."
        }
      ]
      tempeh.seller = {
        profile_pic: "images/megan.jpg",
        name: "Megan",
        bio: "I've been fermenting my own food for over a decade. After you get the hang of it, you start to experiment. These days, that is what I'm all about. I love combining common flavors to come up with something new ;)",
        attributes: ["11+ years experience", "Imamu Expert"]
      }

      yogurt = {}
      yogurt.name = "Yogurt"
      yogurt.large_image = "images/p-yogurt.jpg"
      yogurt.additional_images = ["images/p-box.jpg","images/p-yogurt-jar.jpg" ,"images/p-packet.jpg"]
      yogurt.title = "Sarah's Yogurt"
      yogurt.contains = ["Fresh Culture", "Raw Milk" ,"Organic Yogurt"]
      yogurt.product_description = "My yogurt is made with organic local raw milk from a farm about an hour outside NYC. It is a bit thicker than your average homemade yogurt (closer to the texture of Greek yogurt). I recommend mixing it with chopped nuts, seeds, coconut flakes or raw manuka honey for a delectable snack!"
      yogurt.price = "$5"
      yogurt.amount_remaining = "6"
      yogurt.other_kits = [
        {title: "Ben's Kombucha", url: "#/products/kombucha", image: "images/pl-kombucha.jpg"},
        {title: "Kirk's Cider", url: "#/products/cider", image: "images/pl-cider.jpg"},
        {title: "Joyce's Cheese", url: "#/products/cheese", image: "images/pl-cheese.jpg"}
      ]
      yogurt.rating = 5
      yogurt.testimonials = [
        {
          profile_pic: "images/alexa.jpg",
          name: "Alexa C",
          text: "Shazaam! This makes faje taste like gogurt. Also, I definitely recommend taking Sarah's advice and mixing it with fruit. Unreal."
        },
        {
          profile_pic: "images/hilary.jpg",
          name: "Hilary T",
          text: "I've tried to make it like Sarah and just couldn't replicate the delicious flavor and consistency. I've since stopped trying and order from Sarah once/week."
        }
      ]
      yogurt.seller = {
        profile_pic: "images/sarah.jpg",
        name: "Sarah",
        bio: "I'm currently the head chef at Grey's Cafe in Williamsburg. Healthy living is in my blood. I grew up milking cows on my parents farm. Some families make cookies, mine makes yogurt. Try my yogurt and I promise you won't be disappointed. It's made with love.",
        attributes: ["8+ years experience", "Imamu Expert"]
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
          $scope.proChef = true
        } else if (product_url == "kombucha") {
          $scope.product = kombucha
        } else if (product_url == "pickles") {
           $scope.product = pickles
           $scope.proChef = true
        } else if (product_url == "sauerkraut") {
           $scope.product = sauerkraut
        }  else if (product_url == "tempeh") {
           $scope.product = tempeh
        }  else if (product_url == "yogurt") {
          $scope.product = yogurt
          $scope.proChef = true
        }


     }



  };

  HomeController.$inject = ['$scope', 'ngNotify'];

  angular.module('imamuApp')
    .controller('HomeController', HomeController);

}());

