var username = "";
angular.module('starter.controllers', [])
// .controller('Search', function($scope){
// 	$scope.items = ['Closer - The Chainsmokers feat. Halsey','Shape of You - Ed Sheeran', 'Brave','7 Years - Lucas Graham', 'At my Best - MGK feat. Hailee Steinfield', "We're waiting 4 you - MY FIRST STORY"];
// })
// .controller('TodoController', function($scope){
// 	$scope.saved = localStorage.getItem('musics');
// 	$scope.musics = (localStorage.getItem('musics')!=null)? JSON.parse($scope.saved) : [{title:'', done:false}];

// 	localStorage.setItem('musics', JSON.stringify($scope.musics));

// 	$scope.addMusic = function(){
// 		var music = $scope.musicTitle;
// 			$scope.musics.push({
// 					title: $scope.musicTitle,
// 					done: false
// 			});
// 			$scope.musicTitle='';
// 			localStorage.setItem('musics', JSON.stringify($scope.musics));
// 	};
// 	$scope.remove = function(index,data){
// 		var oldmusic = [];
// 		angular.forEach(oldmusic,function(music){
// 			if(!music.done)
// 				$scope.musics.push(music);
// 		});
// 		$scope.musics.splice(index, 1);
// 		localStorage.setItem('musics', JSON.stringify($scope.musics));
// 	};
// })
// .controller('tipsController', function($scope, $rootScope){
// 	$rootScope.tips = [
// 	{title: 'Need to plant', id: 1, content: '<h3><i class = "icon ion-android-restaurant"> Food:</h3> Everything we eat comes directly or indirectly from plants. Throughout human history, approximately 7,000 different plant species have been used as food by people.</i><br><h3><i class = "icon icon ion-waterdrop"> Water:</h3> Plants regulate the water cycle: they help distribute and purify the planets water. They also help move water from the soil to the atmosphere through a process called transpiration.</i><br><h3><i class = "icon icon ion-ios-medkit"> Medicine:</h3> One-quarter of all prescription drugs come directly from or are derivatives of plants. Additionally, four out of five people around the world today rely on plants for primary health care.</i><br><h3><i class = "icon icon ion-ios-cloud"> Air:</h3> Oxygen is brought to you by plants, as a byproduct of photosynthesis.</i><br><h3><i class = "icon icon ion-earth"> Habitat:</h3> Of course, aside from humans myriad uses, plants make up the backbone of all habitats. Other species of fish and wildlife also depend on plants for food and shelter.</i><br><h3><i class = "icon icon ion-ios-partlysunny"> Climate:</h3> Plants store carbon, and have helped keep much of the carbon dioxide produced from the burning of fossil fuels out of the atmosphere.</i><br>&nbsp;<br><div align="center"><img src ="img/about.gif" width="350px"></div>'},
// 	{title: 'Needs of plants', id: 2,  content: '<h3><i class = "icon ion-leaf"> Water & Nutrients</i></h3> Like humans and animals, plants need both water and nutrients (food) to survive. Most all plants use water to carry moisture and nutrients back and forth between the roots and leaves. Water, as well as nutrients, is normally taken up through the roots from the soil. This is why it’s important to water plants when the soil becomes dry.<br><br>Fertilizer also provides plants with nutrients and is usually given to plants when watering. The most important nutrients for plants growing needs are nitrogen (N), phosphorus (P), and potassium (K). Nitrogen is necessary for making green leaves, phosphorus is needed for making big flowers and strong roots, and potassium helps the plants fight off disease.<br><br>Too little or too much water or nutrients can also be harmful.<br><h3><i class = "icon icon ion-leaf"> Air and Soil:</i></h3>What helps plants grow besides water and nutrients? Fresh, clean air and healthy soil. Dirty air caused by smoke, gases, and other pollutants can be harmful to plants, limiting their ability to take in carbon dioxide from the air for making food (photosynthesis). It can also block out sunlight, which is also necessary for healthy plant growth.<br><br>Healthy soil is extremely vital to plants. In addition to essential nutrients found in soil (from organic matter and micro-organisms), soil provides an anchor for plant roots and helps support the plants.<br><h3><i class = "icon ion-leaf"> Light and Temperature:</i></h3>Plants also need sunlight to grow. Light is used as energy for making food, a process called photosynthesis. Too little light can make plants weak and leggy looking. They will also have fewer flowers and fruits.<br><br>Temperature is important too. Most plants prefer cooler nighttime temps and warmer daytime temperatures. Too hot and they may burn, too cold and they will freeze.<br><h3><i class = "icon ion-leaf"> Space and Time:</i></h3> Space is yet another factor to consider when growing plants. Both the roots and foliage (leaves) need room to grow. Without enough room, plants can become stunted or too small. Overcrowded plants are also more likely to suffer from diseases since airflow may be limited.<br><br>Finally, plants require time. They do not grow overnight. It takes time and patience to grow plants, some more so than others. Most plants require a particular number of days, months, or even years to produce flowers and fruit.<br><br><div align="center"><img src ="img/about.gif" width="350px"></div>'},
// 	{title: 'Plant Propagation', id: 3,  content: '<h3><i class = "icon icon ion-leaf"> Plant propagation</h3> is the process of creating new plants from a variety of sources: seeds, cuttings, bulbs and other plant parts. Plant propagation can also refer to the artificial or natural dispersal of plants.</i><br><h4><i class = "icon icon ion-leaf"> Sexual propagation</h4> Seeds and spores can be used for reproduction (through e.g. sowing). Seeds are typically produced from sexual reproduction within a species, because genetic recombination has occurred. A plant grown from seeds may have different characteristics from its parents. Some species produce seeds that require special conditions to germinate, such as cold treatment. The seeds of many Australian plants and plants from southern Africa and the American west require smoke or fire to germinate. Some plant species, including many trees do not produce seeds until they reach maturity, which may take many years. Seeds can be difficult to acquire and some plants do not produce seed at all. Some plants (like certain Plants modified using genetic use restriction technology may produce seed, but not fertile seed. In certain cases, this is done to prevent the accidental spreading of these plants, for example by birds and other animals.</i><br><h4><i class = "icon icon ion-leaf"> Asexual propagation</h4> Plants have a number of mechanisms for asexual or vegetative reproduction. Some of these have been taken advantage of by horticulturists and gardeners to multiply or clone plants rapidly. Humans may utilize these processes as propagation methods, such as tissue culture and grafting. Plants are produced using material from a single parent and as such there is no exchange of genetic material, therefore vegetative propagation methods almost always produce plants that are identical to the parent. Vegetative reproduction uses plants parts such as roots, stems and leaves. In some plants seeds can be produced without fertilization and the seeds contain only the genetic material of the parent plant. Therefore, propagation via asexual seeds or apomixis is asexual reproduction but not vegetative propagation.</i><br>&nbsp;<br><div align="center"><img src ="img/about.gif" width="350px"></div>'},
// 	{title: 'Seed Propagation', id: 4, content: '<h3><i class = "icon icon ion-leaf"> Seeds</i></h3> Sexual propagation involves the union of the pollen (male) with the egg (female) to produce a seed. The seed is made up of three main parts: the outer seed coat, which protects the seed; a food reserve (e.g., the endosperm); and the embryo, which is the young plant itself. When a seed is mature and put in a favorable environment, it will germinate, or begin active growth. In the following section, seed germination and transplanting of seeds will be discussed.<br><h3><i class="icon icon ion-leaf"> Flower and Vegetable Seed</i></h3> To obtain quality plants, start with good quality seed from a reliable dealer. Select varieties to provide the size, color, and habit of growth desired. Choose varieties adapted to your area which will reach maturity before an early frost. Many new vegetable and flower varieties are hybrids, which cost a little more than open pollinated types. However, hybrid plants usually have more vigor, more uniformity, and better production than nonhybrids and sometimes have specific disease resistance or other unique cultural characteristics.<br><br>Although some seeds will keep for several years if stored properly, it is advisable to purchase only enough seed for the current years use. Good seed will not contain seed of any other crop, weeds, or other debris. Printing on the seed packet usually indicates essential information about the variety, the year for which the seeds were packaged, germination percentage you may typically expect, and notes of any chemical seed treatment. If seeds are obtained well in advance of the actual sowing date or are stored surplus seeds, keep them in a cool, dry place. Laminated foil packets help ensure dry storage. Paper packets are best kept in tightly closed containers and maintained around 40°F in a low humidity environment.<br><br>Some gardeners save seed from their own gardens; however, if such seed are the result of random pollination by insects or other natural agents, they may not produce plants typical of the parents. This is especially true of the many hybrid varieties. Most seed companies take great care in handling seeds properly. Generally, do not expect more than 65 to 80% of the seeds to germinate. From those germinating, expect about 60 to 75% to produce satisfactory, vigorous, sturdy seedlings.<h3><i class = "icon icon ion-leaf"> Seed Germination</i></h3> After the seed has made it to a new location and is covered with dirt, it can begin germination. Germination is the process of seeds developing into new plants. First, environmental conditions must trigger the seed to grow. Usually, this is determined by how deep the seed is planted, water availability, and temperature. When water is plentiful, the seed fills with water in a process called imbibition. The water activates special proteins, called enzymes, that begin the process of seed growth. First the seed grows a root to access water underground. Next, the shoots, or growth above ground, begin to appear. The seed sends a shoot towards the surface, where it will grow leaves to harvest energy from the sun. The leaves continue to grow towards the light source in a process called photomorphogenesis.<br>&nbsp;<br><div align="center"><img src ="img/about.gif" width="350px"></div>'},
// 	{title: 'Marcotting', id: 5,  content: '<h2><i class = "icon icon ion-leaf"> Marcotting</h2> Marcotting or air layering, an asexual or vegetative method of plant propagation, can be easily performed with less skill. Air layering is just slightly different from other methods of layering such as tip layering, simple layering, compound or serpentine layering, etc. In all these methods, the induction of root development is usually done by wounding the part of the plant to be rooted.<br><br>In this layering method, roots are induced to form on the part of the plant while it remains aerial (aboveground), hence the term air layering. But in other layering methods, the same plant part is rooted on the ground with stem usually by bending it downward.</i><br><h3><i class="icon icon ion-leaf"> Common Procedures</i></h3><h4>1. Plant and Shoot Selection</h4> A shoot with plenty of leaves is chosen from a healthy plant. The size of the stem at the part to be rooted is generally about that of an ordinary pencil, but this is not essential. Both the thickness and length of the stem vary depending on the plant part to be layered (trunk, branch or twig), the intended size of the air layer to be produced, and the plant species.<br><br>In roses, the stems used in marcotting are normally thinner. In comparison, in herbaceous plants like aglaonema and dieffenbachia, the stems are thick.<br><br><h4>2. Girdling and Scraping</h4> This is unique in marcotting. However, this procedure is skipped in bamboo and herbaceous plants. For trees, shrubs and semi-woody plants, a strip of bark is first removed from around the portion of the stem to be rooted. This involves pressing of a sharp knife against the bark preferably as close as possible below a node, moving the knife in circular motion around the stem. A similar cut is made generally about 2 cm to 5 cm below the first cut, but it can be wider with larger stems. The two cuts are then connected by a straight cut and the bark is pried loose and removed.<br><br>The debarked portion of the stem is then scraped to remove the phloem and cambium, that slippery coating on the wood, to prevent the wound from healing and the upper and lower barks from reconnecting.<br><br><h4>3. Slitting and Wedging</h4> In herbaceous plants, an inward cut is made starting from below a node and slightly upward. The cut has to traverse the horizontal line that marks the node at the point about halfway of the thickness of the stem and terminate above the same node.<br><br><div id="contentimg" align="center"><img src="img/m1.jpg" width="200px" length="200px"><p><i>Slithing and Wedging</i></p></div> In other words, this slanting cut must be able to severe the horizontal connection of the node.Coir dust, sphagnum moss or a piece of wood or any other suitable material is then inserted into the wound to serve as wedge. The purpose of this wedge is to keep the upper and lower cut surfaces apart and prevent healing just like in girdling and scraping.<br><br><h4>4. Placing and Securing the Rooting Medium</h4> A slightly moistened sphagnum moss or coconut coir dust is placed around the debarked stem and wrapped with a piece of plastic sheet. A transparent plastic sheet is preferred to be able to see later if roots have developed. In many plant species, however, the stems can be marcotted even with pure soil.<br><br>The rooting medium may be as thick as 1 inch (2.5 cm) from side to side or bigger depending on the earliness to develop roots and size of the stem. The longer is the time required to induce rooting and the bigger is the stem, the thicker should be the rooting medium.<br><br><div id="contentimg" align="center"><img src="img/m2.jpg" width="200px" length="200px"><br><p>Placing and Securing the Rooting Medium</p></div>Both ends of the plastic sheet are gathered and tied securely against the stem, with one end just under the bottom part of the debarked stem (lower cut) and the other a short distance above the upper part (upper cut). It is important that the upper cut should be covered with the rooting medium because it is from this cut that roots form.<br><br>As an alternative, the plastic sheet may be placed first on the stem with one end tied just below the lower cut. The rooting medium is then inserted gradually and the upper end of the plastic wrapping is tied securely to the stem. This technique is more convenient and applies with any rooting medium which crumbles if not held by the hand.<br><br>To prevent breaking of the stem with big and heavy rooting medium, it is tied to another branch or to a stick attached to the parent plant.<br><br>In stems which are more or less erect, the rooting medium can be held by any container such as broken or halved pots, cans or plastic cups with open top. For big containers, a support is needed to prevent them from dropping.<br><br>A container can be made also with a relatively thick plastic sheet with the bottom gathered and tied just below the lower cut and the top is expanded to form a shape like that of a funnel. The sides are overlapped and stapled.<br><br>In plants which easily root like Ficus and croton or san francisco (Codiaeum variegatum), this funnel-shaped container can be made out of some thick leaves. The sides are secured in place by piercing with a stick. The container is then filled with rooting medium which is kept moist by regular watering.<br><br><h4>5. Separation of the Air Layer or Marcot From the Parent Plant</h4>The rooted shoots are severed from the parent plant when plenty of roots have developed. At this time the rooting medium becomes hard and rough when touched. New shoots will also have sprouted from the portion of the stem immediately below the rooting medium. In many plant species this occurs at least 15 days from marcotting.<br><br><h4>6. Potting</h4> The marcotted shoot is immediately potted into suitable container. The intensity of care that will ensure the successful establishment of the layers will depend on various factors such as size of the shoot, size of the rooting medium, and profuseness of roots. For maximum survival, the newly potted layers are kept under partial shade and high humidity.<br>&nbsp;<br><div align="center"><img src ="img/about.gif" width="350px"></div>'},
// 	{title: 'Grafting', id: 6,  content: '<h2><i class = "icon icon ion-leaf"> Grafting</h2> Plant grafting is a procedure in which parts of plants are joined together with the ultimate intention of making them unite and continue growing as one plant. A grafted plant, therefore, is a composite of parts derived from two or more plants.<br><br>Grafting generally applies to the dicots and to the gymnosperms because of the presence of a continuous vascular cambium between the xylem and the phloem. But in the monocots that have no vascular cambium, successful grafts are rare and difficult.<br><br>Grafting generally applies to the dicots and to the gymnosperms because of the presence of a continuous vascular cambium between the xylem and the phloem. But in the monocots that have no vascular cambium, successful grafts are rare and difficult.<br><br>Two terms are common in grafting: rootstock and scion. These terms are always used in reference to what is grafting rather than in other methods of plant propagation.<br><br>The rootstock, also called understock or simply stock, is the lower part having roots and usually consists also of a stem that is to become the lowermost part of the shoot of the grafted plant. The rootstock provides anchorage as well as support to the upper parts of the plant.<br><br>The scion, or cion, is the upper part that is joined to the rootstock and is the main component of the plant shoot when the plant is fully developed. It usually consists of the primary stem (trunk) and branches except the portion that belongs to the rootstock. The scion determines the characteristics of the plant as to leaves, flowers, fruits and seeds, and thus needs to be chosen with care.<br><br>In plant propagation by grafting, the scion to be joined to the rootstock consists of a portion of stem, usually small twigs, with multiple number of buds. The apical bud is usually included, but other species can be readily grafted using scions with only axillary buds. Where the scion consists of a single bud, the grafting method is especially termed budding.<br><br><div align="center"><img src ="img/about.gif" width="350px"></div>'},
// 	{title: 'Budding', id: 7,  content: '<h2><i class = "icon icon ion-leaf"> Budding</h2> Budding, oftenly called bud grafting, is an artificial method of asexual or vegetative propagation in plants. Like grafting, this method is employed to convert one plant (the rootstock) into another plant type with desirable characteristics. Similarly, the resulting plants in general have shortened stature and maturity as compared to plants propagated from seed.<br><br>This method of plant propagation has the advantage of producing numerous clones from a single piece of stem or twig, each node being a potential source of one-budded scion. But in grafting, this same piece of stem may account for only a single scion.<br><br>It is therefore advantageous where there is limited source of plant cuttings or scions for grafting. Likewise, the necessity of transporting bulky scions is eliminated. However, the clones produced take longer time to develop into the right sizes for outplanting than grafted seedlings.<br><br>Various techniques are used, mostly applicable to young plants in active growth with stems in which the bark is easily separable from the wood.<br><h3><i class="icon icon ion-leaf"> Basically, the procedure in budding consists of the following steps:</i></h3><h4>1. Preparation of the rootstock.</h4>Rootstocks about the size of an ordinary pencil (~0.8cm) and up to ~1.5 cm in diameter are commonly used but there are no hard rules. Chip budding is applied in citrus ~1/2 cm or 5mm in diameter while other methods can apply to rootstocks up to ~2.5cm (1 in) or even thicker. Potted seedlings are widely used but, similar to grafting, established trees may be top-budded. The specific techniques used in preparing the portion of the stem where union is intended vary;<br><h4>2. Preparation of the bud-scion.</h4>This consists of a prominent axillary bud (a plant organ which serves as growing point) on a section of bark, with or without a small piece of wood attached. This piece of bark is often termed as either a bud patch, chip, or shield piece. They are also referred to as single-bud scions.Budsticks, small stems or twigs having multiple number of nodes from which the bud-containing barks are to be prepared, are obtained from well selected vigorous, disease-free mother plants having desirable characteristics and immediately defoliated. As in rootstocks, the preparation techniques are numerous;<h4>3. Insertion of the prepared bud-scion.</h4>The prepared patch, chip or shield piece is inserted into the part of the stem of the rootstock to replace the piece of bark that is removed or where cuts are made to allow union. Correct polarity should be observed, that is, the patch of bark is oriented upward.<h4>4. Tying or wrapping.</h4>The stem-bud union is tied or wrapped to hold the components firmly together but generally leaving the growing point exposed. If also wrapped, it must be opened about 15 days later or at the time when the rootstock is cut back. There are various ready-to-use wrapping materials. A specialized wrapping strip made of rubber expands as the rootstock grows and naturally deteriorates after several weeks. But for practical usage, a thin, transparent polypropylene (PP) plastic bag can be cut into strips about 2-3 cm wide. These plastic strips have to be elastic and do not easily break when stretched;<h4>5. Cut back of the rootstock.</h4> The rootstock must be decapitated, preferably with the use of a pruning shear, at the part of the stem immediately above the union to eliminate apical dominance. As a result, a new shoot will emerge from the growing point on the inserted bark which will then acquire apical dominance.<br><br>Cut back is done when it becomes certain that there is union which may take 15 days or more. The inserted patch of bark will remain green or otherwise brownish depending on the natural color of the budstick. If union is not successful, it will turn black and rot; and<h4>6. Care of clones.</h4>This involves activities that are normally performed to hasten rapid growth of nursery plants and trees. It also includes debudding and desuckering, the removal of offshoots that may emerge from the stem below the union. These are done to ensure that the propagated plants will exhibit only the characters of the mother plant. Likewise, wrapping materials that take time to deteriorate, like PP plastic strips, must be removed at the earliest time possible to prevent strangling effect.<br>&nbsp;<br><div align="center"><img src ="img/about.gif" width="350px"></div>'},
// 	];
// })
// .controller('tipController', function($scope, $stateParams, $rootScope){
// 	var id = $stateParams.tipsId;
// 	$scope.content = "";
// 	$scope.title = "";
// 	$scope.text ="";

// 	for(var i=0; i < $rootScope.tips.length; i++){
		
// 		if(id == $rootScope.tips[i].id){
// 			$scope.content = $rootScope.tips[i].content;
// 			$scope.title = $rootScope.tips[i].title;
// 			$scope.text = $rootScope.tips[i].text;
			
			
// 		}

// 	}
// })
.controller('homeController', function($scope, $http, $interval){
    var tick = function() {
    	$scope.date = Date.now();
    }
    tick();
    $interval(tick, 1000);
	
    $http({
  		method: 'GET',
  		url: 'http://api.openweathermap.org/data/2.5/weather?q=Olongapo&appid=cc182696d24dab070b4cca559d7e5e63'
		}).then(function(response) {
  	console.log(response);
  	$scope.temp = response.data.main.temp - 273.15;
  	$scope.temps = $scope.temp.toFixed(1);
  	$scope.place = response.data.name;
  	$scope.desc = response.data.weather[0].description;
  	$scope.icon = "<img src='http://openweathermap.org/img/w/"+response.data.weather[0].icon+".png' width='60px'height='60px' alt='apis image'>";
  		});

	$scope.username = username;
	var status = 'dry';
	if(status == 'dry'){
		$("#logo").html("<img class='redbeat' src='img/logo3.png' width='270px' height='250px'/>");
		$('#alert').html('Your Plant is Dying!');
		$('#water').css('display','block');
	}
	if(status == 'moist'){
		$("#logo").html("<img class='yellowbeat' src='img/logo2.png' width='270px' height='250px'/>");
		$('#alert').html('Your Plant need Water');
		$('#water').css('display','block');
	}
})
.controller('aboutusController', function($scope) {
   $scope.nextSlide = function() {
      $ionicSlideBoxDelegate.next();
   }
})
.controller('tipsController', function($scope,$ionicScrollDelegate,$location) {
 	$scope.scrollTo = function(target){
    $location.hash(target);
    var handle = $ionicScrollDelegate.$getByHandle('myPageDelegate');
    handle.anchorScroll(true);
      };

})
.controller('logsController', function($scope) {
	$scope.date = new Date();
	$scope.nextSlide = function() {
      $ionicSlideBoxDelegate.next();
   }
})
.controller('loginController', function($scope, $state, $ionicHistory, $ionicViewService) {
	$scope.login = {};
	$scope.loginform = function (){

		// alert($scope.login.username +  $scope.login.password);
	$ionicHistory.nextViewOptions({
            disableBack: true
        });
	$ionicViewService.nextViewOptions({
  disableBack: true
		});
	username = $scope.login.username;
	$state.go('app.home');
	
	}

	$scope.signup = function (){
		$state.go('signup');
	}

})
.controller('signupController', function($scope, $state) {
	$scope.back = function (){

	$state.go('login');
	}

});
