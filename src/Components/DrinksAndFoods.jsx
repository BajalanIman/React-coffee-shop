const newDrinksAndFoods = [
  {
    id: 1,
    catagory: "COCKTAILS",
    catagoryImage: "https://www.drinkstuff.com/productimg/39620_large.jpg",
    // https://www.drinkstuff.com/productimg/39620_large.jpg
    options: [
      {
        name: "Cosmopolitan",
        image: "https://www.hangoverweekends.co.uk/uploads/images/cosmo.jpg",
        price: 4.23,
        discription:
          "The tangy concoction of vodka, triple sec, lime juice and cranberry juice has managed to leapfrog the venerable screwdriver as many vodka drinkers prefer the Cosmopolitan’s cleaner and slightly tart taste. The keys to the preparation of a Cosmopolitan are a good brand of cranberry juice and Cointreau Triple Sec, two essential elements to the drink.",
        Ingredients: `2 oz Vodka
        1 oz Cointreau
        1/2 oz Cranberry juice
        1/2 oz Fresh sour mix
        Lemon twist for garnish`,
      },
      {
        name: "Mojito",
        image: "https://www.hangoverweekends.co.uk/uploads/images/mojito.jpg",
        price: 3.45,
        discription: `The Mojito complimenting summer perfectly with a fresh minty taste. The mixture of white rum, mint, lime juice, sugar and soda water is crisp and clean with a relatively low alcohol content, the soda water can be replaced with sprite or 7-up. When preparing a mojito always crush the mint leaves as opposed to dicing to unlock oils that will assist with enhancing the minty flavour.`,
      },
      {
        name: "Mai Tai",
        image:
          "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F19%2F2017%2F11%2F10%2Fmai-tai-1-cl-2000.jpg",
        price: 1.99,
        discription:
          "The Mai Tai is a Polynesian-style cocktail that has a fruity tropical taste sweet and vibrant. The mixture of light and dark rum, orange curacao, orgeat syrup and lime juice has been a symbol of Tahitian culture ever since the drink was first created.",
        Ingredients: ``,
      },
      {
        name: "Mint Julep",
        image:
          "https://www.hangoverweekends.co.uk/uploads/images/bulleitmintjulep_l.jpg",
        price: 4.11,
        discription:
          "The concoction of Bourbon, a little bit of water, powdered and granulated sugar and plenty of mint has long been a very popular way to drink a cocktail. Simple yet refined.",
        Ingredients: `1/2 cup water.
        1/2 cup white sugar.
        2 tablespoons roughly sliced fresh mint leaves.
        1 cup Kentucky bourbon.
        2 sprigs fresh mint leaves for garnish`,
      },
      {
        name: "Caipirinha",
        image:
          "https://www.hangoverweekends.co.uk/uploads/images/caipirinha-cocktail.jpg",
        price: 1.78,
        discription:
          "Originally based on a remedy to cure Spanish flu, the national drink of Brazil is made with cachaca (spirit from a sugar cane) or white rum/vodka, brown sugar and lime juice.",
        Ingredients: `2 oz Cachaca (Rum)
        1 lime
        1 tsp sugar`,
      },
      {
        name: "Margarita",
        image:
          "https://www.hangoverweekends.co.uk/uploads/images/margarita.jpg",
        price: 5.99,
        discription:
          "The simple mixture of tequila, triple sec and lime juice is often blended with ice but is traditionally served on the rocks. The cocktail is generally presented in a salt rimmed glass. Various fruity versions have been adapted from the traditional lime, such as raspberry, peach and strawberry.",
        Ingredients: `1 (6 ounces) can frozen limeade concentrate,
        6 fluid ounces tequila,
        1 oz Cointreau orange liqueur,
        2 fluid ounces triple sec,`,
      },
      {
        name: "Pina Colada",
        image:
          "https://www.hangoverweekends.co.uk/uploads/images/pina_colada_cocktail.jpg",
        price: 8.65,
        discription:
          "The classic tropical cocktail, with a distinctive look and taste. More of a smoothie as opposed to an alcoholic beverage. The modest yet perfect blend of coconut milk, rum and pineapple juice has been a firm favourite throughout the years.",
        Ingredients: `2 oz Captain Morgan Original Spiced Rum,
        1 Maraschino cherries,
        6 oz pina colada mix,
        2 oz pineapple juice,
        1 pineapple quartered and sliced,`,
      },
      {
        name: "Californication",
        image:
          "https://i0.wp.com/www.dandana.ae/wp-content/uploads/2020/03/Orange-Juice-1.jpg?fit=900%2C600&ssl=1",
        price: 5.5,
        discription:
          "Californication as used by the Red Hot Chili Peppers means the mixing of different cultures. The cocktail reflects this with the various spirits used within the cocktail from all over the world. A mixture of run, vodka, tequila and gin finished with orange liqueur, lemon juice and orange juice to mask the various spirits used throughout. Strong and yet sweet. The cocktail is finished with either a slice of orange or a twisted peel of orange rind.",
        Ingredients: `1/2 oz of vodka, gin, white rum and tequila
        Freshly squeezed lemon juice
        1 oz Orange liqueur
        3 oz’s fresh squeezed orange juice
        Garnish with slice of fresh cut orange`,
      },
      {
        name: "Island Iced Tea",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1VNh1Vm226Cf15y5YaWwn2nkhlMxR0e3iag&usqp=CAU",
        price: 3.72,
        discription:
          "A cocktail that never seems to go out of style. The potent concoction of rum, tequila, vodka, gin and triple sec finished with a mixture of sweet and sour cola and lemon juice. Tea isn't actually an addition to the drink, but the ingredients used predominantly the cola, provide the profile of tea with much more flavour.",
        Ingredients: `1/2 oz vodka
        1/2 oz gin
        1/2 oz light rum
        1/4 oz tequila
        1/2 oz triple sec
        1 Tbsp. fresh lemon juice or possibly to taste
        6 oz cola or potentially to fill broken ice`,
      },
      {
        name: "Apple Martini",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyGeJeOwXCRWvvwmX5oPd8nETKRuZRlbUbcg&usqp=CAU",
        price: 3.38,
        discription:
          "The Apple Martini or “Appletini” adds a twist to the typical dry martini. Vodka is used as opposed to gin as the basis of the cocktail and apple schnapps is added for a sweet but slightly sour twist. The cocktail is usually finished with lemon juice and garnished with a slice of apple, simple but tasty.",
        Ingredients: `2 oz vodka,
        1 oz apple Schnapps splash of Cointreau thin apple piece for garnish sour apple martini,
        2 oz vodka,
        1 oz apple Schnapps with big squeeze of fresh lime juice thin apple slice for garnish`,
      },
    ],
  },
  {
    id: 2,
    catagory: "Coffee",
    catagoryImage:
      "https://img.freepik.com/free-vector/realistic-cup-black-brewed-coffee-saucer-vector-illustration_1284-66002.jpg",

    options: [
      {
        name: "Maple Bacon Latte",
        image:
          "https://lepremier.gr/wp-content/uploads/2020/12/cappuccino-late-lepremier-athens.jpg",
        price: 3.35,
        discription: `Move over pumpkin spice––make room for this maple bacon latte! Sweet with a hint of salty, this easy DIY pick-me-up screams sweater weather. Just when you thought you weren’t a morning person, this latte might change your mind.`,
      },
      {
        name: "Cafecito de Olla",
        image:
          "https://cdn.shopify.com/s/files/1/0564/6214/7744/products/S-Cafedeolla_512x.png?v=1648080804",
        price: 2.93,
        discription: `Café de olla is a staple of a traditional Mexican breakfast. Have a little sip of Mexico every morning while leaving your home smelling amazing!`,
      },
      {
        name: "Musketeers",
        image:
          "https://musketeerscoffee.sg/wp-content/uploads/2020/08/Musketeers-Coffee-Logo-2.gif",
        price: 9.99,
        discription:
          "The 3 Musketeers--marshmallows, espresso, and chocolate–combine to make this hot, frothy delight.",
      },
      {
        name: "Whipped Coffee",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI_hyfe2uHFmXeRUQ_gczjVARO5BFV7BvzT-aPLFsu-x8K5BUXicptXHNgKGsy7GtVZC8&usqp=CAU",
        price: 4.23,
        discription:
          "This coffee drink recipe, which went viral at the onset of the pandemic in 2020, achieves its iconic whipped cream by whisking together hot water, instant coffee powder, and sugar until the mixture is light and fluffy. It helped all of us get through a dark period of life, and it continues to get me excited about my mornings.",
      },
      {
        name: "Honey Almond",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR0qHfQjpk6ZoBj8LYghw00kQNIIIno61oF9cvT_-cw5P123I7ywsi_MwdIlFvpnIq428&usqp=CAU",
        price: 3.73,
        discription:
          "A flat white is a smaller version of a latte that contains virtually no foam. It's perfect for those days when you want a milky caffeinated drink to sip on, but need the boost of caffeine pronto!",
      },
      {
        name: "Pumpkin Spice",
        image:
          "https://www.wholesomeyum.com/wp-content/uploads/2019/10/wholesomeyum-healthy-keto-pumpkin-spice-latte-recipe-1.jpg",
        price: 5.55,
        discription:
          "If pumpkin spiced-flavored coffees can carry an entire season on their back, then I'm pretty sure they've got your afternoons covered.",
      },
      {
        name: "Smoothie",
        image:
          "https://media.istockphoto.com/id/1313644815/photo/strawberry-smoothie.jpg?b=1&s=170667a&w=0&k=20&c=trgpTNh2ffKmIOPMnvR2p5adPvEk_ToV0Ja0X9R4_Fo=",
        price: 3.8,
        discription:
          "Made with oats, yogurt, a banana, and a cup of coffee, this beverage is half smoothie, half coffee. Because sometimes even your morning caffeine has to multitask.",
      },
      {
        name: "Frozen Irish Coffee",
        image:
          "https://media.istockphoto.com/id/497861650/photo/irish-coffee-in-mug.jpg?s=612x612&w=0&k=20&c=SMv4Vwmw5IiNMFD98V4emMogWYDFr_FHARF1bEcfbn0=",
        price: 4.45,
        discription:
          "I'm so happy I live in a world where we can combine a few of the greatest libations in life — Irish whiskey, coffee, and chocolate — into a single drink. Cheers!",
      },
      {
        name: "Mocha Blended",
        image:
          "https://olo-images-live.imgix.net/4a/4aaaaaadb6ce4eeebee890bc60e97939.jpg?auto=format%2Ccompress&q=60&cs=tinysrgb&w=524&h=350&fit=crop&fm=png32&s=510744b376bc0ea2a360482b430d0014",
        price: 5,
        discription:
          "For a stronger mocha flavor, try using just half a banana and blending with a tablespoon of sugar. ",
      },
      {
        name: "Vietnamese Coffee",
        image:
          "https://espressocoffeeguide.com/wp-content/uploads/2017/03/coconut-egg-coffee-finished.jpg",
        price: 7,
        discription:
          "Many Vietnamese coffee drinks recommend using Café Du Monde or Trung Nguyen to make this coffee, as both products have a rich color and deep coffee flavor and are widely used in Vietnamese communities. Top with a few large ice cubes for a refreshing treat. ",
      },
      {
        name: "Espresso Martini",
        image:
          "https://images.squarespace-cdn.com/content/v1/59c3feb149fc2b152179e47e/1632487036422-7DNH8SDJKGJ84A4D6AK4/Tia+Espresso+martini+alto.jpg?format=1000w",
        price: 4,
        discription:
          "Coffee makes an appearance at happy hour with this espresso martini recipe — a drink that satisfies that uniquely 21st-century desire to feel both relaxed yet stimulated.",
      },
    ],
  },
  {
    id: 3,
    catagory: "Beers",
    catagoryImage:
      "data:image/jpeg;base64,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",
    options: [
      {
        name: "Altbier",
        image:
          "data:image/jpeg;base64,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",
        price: 28,
        discription: `Altbier, meaning old beer, is a German beer style which originated in Düsseldorf. The style falls somewhere between a lager and an ale—the beers are fermented warm like ales but are then aged cool like lagers. The name altbier, which originated in the 1880s, refers to the traditional brewing process of using top-fermenting yeasts.
        The name arose to distinguish traditional brews from the new lagers that were mainly produced in Bavaria. Before that, it was simply known as bier. These full-bodied beers are typically malty, clean and crisp, while their color may range from copper to amber.`,
      },
      {
        name: "Doppelbock",
        image:
          "https://amihopfen.com/media/image/product/2072/lg/braupaket-doppelbock.jpg",
        price: 17.58,
        discription: `Doppelbock is a German beer style that was first brewed in Munich by Paulaner monks. As the name might suggest—doppel translates as double—this style developed as a slightly stronger version of traditional German bock style.
        Doppelbock beers are usually medium-bodied with a color that ranges from golden to dark brown. They are rich and smooth with a distinctive malt sweetness that is balanced with subtle hop bitterness. Typical aromas include bread and toasty notes that can be accompanied by subtle hints of caramel.`,
      },
      {
        name: "Bock",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr1mcMkwx2wmvd9qdmaeM15kUo4aygHzGaJJx2EpDw6gysGjH7SFd1LdGC5Slesfn0lAg&usqp=CAU",
        price: 14,
        discription: `Bock beer is a German bottom fermenting lager that nowadays comes in a wide range of sub-styles. Traditional versions may range from golden to amber, and sometimes even dark brown. They are typically lightly hopped, rich, creamy, smooth, and malty, with toasty and occasionally caramel notes.
        Alcohol content falls within the ABV range of 6.3 to 7.6%, and the beer is traditionally served in a tulip glass. Its origin dates back to the fourteenth century and the city of Einbeck where the beer was brewed by certified master brewers who followed a unique set of quality standards which were established by the city council. `,
      },
      {
        name: "German Pilsner",
        image:
          "https://www.deutschesbier.com/wp-content/uploads/2016/01/Schoefferhofer-Hefeweizen-Glass-Packshot.jpg",
        price: 15,
        discription: `German Pilsner is a light, clean-tasting lager that was modeled on the namesake Czech variety. It is brewed from barley malt, and it typically has a flowery, herbal, and spicy hop bitterness that is balanced with a moderately malty backbone.

        First brews that were branded as German Pilsner were introduced in the 1870s, and though pilsner as a style first appeared in the Czech city Plzeň (Pilsen), it was created by a Bavarian Josef Groll. It is generally said that a separate German version was perfected following WWII and the introduction of modern brewing techniques as well as using local hops. `,
      },
      {
        name: "Rauchbier",
        image:
          "https://www.spajzamartin.sk/user/categories/orig/rauchbier-beer.jpg",
        price: 24,
        discription: `Rauchbier is a German beer style that is associated with Franconia and the city of Bamberg. Translated as smoked beer, the style is made with smoked malt, and it initially appeared in the 14th century. At the time, using smoked malt was the standard, but the invention of drum kiln, which allowed for the malt to be dried without the exposure to the open flame, became the preferred technique in the 1880s.

        However, the tradition remained in Bamberg, where the brewers stuck to the old tradition of producing beers with distinctive smoky elements. Nowadays, the style is almost synonymous with two Bamberg-based breweries: Schlenkerla and Spezial. These amber lagers are usually clean and clear with medium hop bitterness, while the aromas and flavors include a combination of smoke and malt.`,
      },
      {
        name: "Kölsch",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbMmUe83dlr80qQQL1abyw-hLq9MwsInFNfITq0H52cK_AzzG7xT17aH5kzvpIj1w923c&usqp=CAU",
        price: 64,
        discription: `Kölsch (the Low German name for Cologne) is a specialty beer brewed only in Cologne. A document known as the Kölsch Convention was signed in 1986 by the directors of two dozen Kölsch breweries, ensuring that Kölsch beer can only be brewed in Cologne and its surrounding area, and nowhere else in the world.

        The guidelines stipulated that Kölsch is not only a type of beer, but also a designation of origin. They specify that true Kölsch beer is a pale yellow, clear, highly fermented, fully-rounded ale, brewed according to the German Beer Purity Law of 1516. `,
      },
      {
        name: "Weissbier",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ymuk64DwpwKDstlIN2c15WJEJeBOb5YBnBu4xXUjZSi2oWLTXVEcj3Yt2urjK3nJL_g&usqp=CAU",
        price: 12,
        discription: `Weissbier is a classic Bavarian wheat ale that is top-fermented and characterized by its mousse-like foam and cloudy appearance—which is a result of a large proportion of wheat and a small amount of barley malt used in its production.

        German weissbier has to be made with at least 50% malted wheat, but most producers use more than the minimum. These beers are fermented with yeast strains that provide typical clove, banana, smoke, and occasionally even bubble gum aroma. Weissbiers are typically malty and subtly bitter, and though they are traditionally fermented in the bottle, this practice has become rare.`,
      },
      {
        name: "Dunkel",
        image:
          "https://www.mrbeer.com/media/catalog/product/cache/b17ec3654cdd01479bd70b44a351f4a3/u/n/uncle-monkeys-dunkel-beer_logo-600x600.jpg",
        price: 18,
        discription: `Dunkel is a German dark lager that is mostly associated with Bavaria and Munich. This dark beer, which can range from copper to dark brown, is mainly brewed from Munich malt which gives the beer its typical caramel-like and toasty character.

        The beers that fall under this category will typically be smooth, medium-bodied, easy-drinking, subtly sweet, and not too heavy. Typical toasty notes may be accompanied by caramel, toffee, and nut aromas, while hop character can be present but should remain subtle. `,
      },
      {
        name: "Helles",
        image:
          "https://www.gifts.co.uk/media/catalog/product/cache/6/image/1104x/040ec09b1e35df139433887a97daa66f/b/i/bierglas-helles-glas-0-5l-siegel-gifts-co-uk_3605-53d72b84.jpg",
        price: 33,
        discription: `Helles is a German-style lager that first appeared in Munich in 1894. It was a Bavarian answer to light Czech pilsner. Although Bavaria heavily relied on strong and dark lagers, the popularity of crisp and golden pilsner beers influenced Bavarian brewers to start producing a similar style.

        Traditional Helles is typically more malt-forward and has a firmer body than pilsner and other lager styles, but still remains soft and medium-bodied. It is clean, easy-drinking, refined, fresh, and dry, with light hop bitterness and subtle malt sweetness.`,
      },
      {
        name: "lager",
        image:
          "https://as1.ftcdn.net/v2/jpg/01/10/34/26/1000_F_110342682_9YPrDH4WOY088BbiAZvzjF701VXPVciU.jpg",
        price: 24.18,
        discription: `Along with ale, lager is one of the two main beer categories, and in terms of production, it is the most common beer style in the world. The main distinction between lagers and ales depends on the type of yeast. Lagers use Saccharomyces pastorianus, generally known as bottom-fermenting yeasts, which ferment more slowly and at cooler temperatures than ale yeasts.

        However, there are several exceptions to the rule, and some beer styles don’t necessarily fit in one category. Lagers come in a wide variety of styles, which differ in color, alcohol content, and flavors, but they tend to have a cleaner and crispier character than ales.`,
      },
    ],
  },
  {
    id: 4,
    catagory: "Tea",
    catagoryImage:
      "https://media.istockphoto.com/id/1303180361/de/vektor/tasse-schwarzer-tee.jpg?s=612x612&w=0&k=20&c=qFH3hDKW9gysjHOX4eyzDjrJ0GdNDOncLfGRqpnR9DE=",
    options: [
      {
        name: "Black tea",
        image:
          "https://sweet-coffee.de/images/product_images/original_images/cayeks%204.jpg",
        price: 2,
        discription: `Black tea is a large and diverse category, and what differentiates it from other tea varieties is heavy oxidation—in the process, the tea leaves of the Camellia sinensis plant attain their distinctive dark color and develop earthy notes.

        When brewed, black tea will usually have a typical amber or brownish hue and stronger flavors and aromas, which may range from savory to sweet and include typical earthy, malty, nutty, and fruity nuances. However, since there are numerous variations and blends available, the final taste profile may significantly vary. `,
      },
      {
        name: "Matcha",
        image:
          "https://cdn.shopify.com/s/files/1/0836/1991/articles/b1_large_3f37437b-c70a-4e12-95f1-c895ee61050f_300x.jpg?v=1512497638",
        price: 3.5,
        discription: `Matcha is a Chinese green tea variety that is unique for its harvesting, processing, and preparation methods. Three or four weeks before the harvest, the bush (Camellia sinensis) is covered to prevent direct sunlight, allowing the leaves to grow in the shade.

        After the harvest, the leaves are cleaned from stems and veins and are then processed into a fine powder. Unlike most tea varieties, matcha always comes in a powdered form—the practice was first introduced in China, but it remained a standard in Japan. `,
      },
      {
        name: "Green tea",
        image:
          "https://www.shutterstock.com/image-photo/cup-tea-green-leaves-isolated-260nw-615600329.jpg",
        price: 5,
        discription: `Green tea is a non-oxidized tea that is characterized by its bright green color and fresh herbaceous notes. It is produced with the tea leaves of the evergreen tea shrub (Camellia sinensis) that are involved in a process known as kill green—in which the leaves are heated (by steaming or pan-frying) to stop oxidation.

        Nowadays, several varieties of green tea are available. They may differ in cultivation, harvesting, origin, and the technique used in their production. Green tea is also commonly flavored or used in blends. Because of the large number of available varieties, the final flavor profile of green tea can differ, but it typically has fresh, vegetal, grassy, and floral nuances.`,
      },
      {
        name: "Oolong",
        image:
          "https://cdn.shopify.com/s/files/1/0053/1719/7935/products/DT105-GaiwanTeaGlass.14litreDistinctlyTeaInc._dac11f5f-6127-4b39-863c-5eed827caa54.jpg?v=1623278816",
        price: 3,
        discription: `Oolong is a semi-oxidized tea that can vary depending on the leaf style, level of oxidation, color, and the roasting degree. Falling somewhere between green and black teas, it is one of the most complex varieties regarding production, and it can take on a wide variety of flavors and aromas.

        Their color can vary from pale green or yellow to dark orange, while the aromas often include notes of melons, apricots, wood, orchids, or spices. The level of oxidation can vary anywhere from 10-80%. The less oxidized styles resemble green teas, while more oxidized varieties, typically over 50% percent, share more characteristics with black teas.`,
      },
      {
        name: "White tea",
        image:
          "https://kitchenwareking.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/f/h/fh-3442yx2_brown_1.jpg",
        price: 1.5,
        discription: `White tea is a category of Chinese tea that has a somewhat vague classification. Still, it is generally considered that this variety is lighter in color and has a more delicate flavor than green or black tea varieties. Although there are several variations, white tea is harvested from the tea plant (Camellia sinensis) when the tea leaves are not fully opened, and the buds are covered in tender white hairs—a trait that gave the tea its name.

        Usually, white tea is non-oxidized, or it is just lightly oxidized, which helps to preserve its delicate character. When brewed, the tea is usually subtly sweet with a light straw color and subtle aromas and flavors that are often reminiscent of flowers, fruit, honey, vanilla, herbs, or citrus fruit.`,
      },
      {
        name: "vintage tea",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTycR6GhaYISw7PuatIVpZ8uoCQv-xC9130iSbMbB5hG-_we6P7qsViui5zHiqZ93km3R0&usqp=CAU",
        price: 2.25,
        discription: `Pu erh, also known as aged or vintage tea is a renowned tea produced exclusively in the Yunnan province of China. There are two main varieties: raw, non-fermented pu erh, called pu erh sheng, and ripe, fermented pu erh, known as pu erh shu.

        The raw version has a very fresh, vegetal flavor with hints of bitterness and a sweet aftertaste, while the ripe one has a mild, yet distinctive and earthy flavor achieved by the fermentation process. For both varieties, the leaves can be left loose or compressed into brick tea (Juan Cha), cake tea (Beeng Cha), bell-shaped tea (Toa Cha), or mushroom-shaped tea (Maw Gu Toaw).`,
      },
      {
        name: "English breakfast",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfzMM_e7kuF6HjnODRycH-sAndmNKVrKUxgw&usqp=CAU",
        price: 2,
        discription: `English breakfast tea is one of the most popular tea varieties in the UK and the world. It is a blend typically made with Assam, Ceylon, Chinese, and Kenyan black tea. Its birthplace—as well as the origin of its name—is quite vague and often disputed.

        One theory claims that the blend was invented in 1892 by a Scottish tea master Drysdale. Allegedly, this version was favored by Queen Victoria—who promoted the blend, and it is believed that the tea was then given its current name. Another theory credits Richard Davies for the invention of the name and the blend. `,
      },
      {
        name: "Darjeeling",
        image:
          "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61CKMO20OFL._AC_SX466_.jpg",
        price: 1.7,
        discription: `This prestigious tea was named after the Indian city of Darjeeling, the center of Bengali tea cultivation and once the starting point of a caravan route to Tibet. Even today this ancient city is still best known for the very best quality tea of the same name.

        The tea cultivation in the West Bengal Darjeeling district goes back to Englishman Arthur Campbell (1805-1874) who experimented with different types of tea in his private garden in the wider Darjeeling area. This led to establishing the Darjeeling Company in 1864 which was renamed in 1896 to Darjeeling Consolidated Tea Company. `,
      },
      {
        name: "Hōjicha",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTblofT57LwfhdzPNPLnXIOvyEWPHDaSlsipikqcxZTqBgv3YuB05VdmZcqBHA9mL2eKOk&usqp=CAU",
        price: 2,
        discription: `Hōjicha is a Japanese roasted green tea. It is made with bancha or sencha green tea that is roasted over high heat. During roasting, the tea attains a distinctive reddish-brown color. Brewed hōjicha will result in a light brown tea with a slightly warmer character than traditional green tea.

        Instead of typical green and vegetal aroma, hōjicha usually has roast-like notes reminiscent of coffee, cocoa, and caramel. The flavor is earthy and subtly sweet, with roasted notes that are typically not overpowering. Hōjicha has less caffeine and tannins than other green teas. `,
      },
      {
        name: "Ceylon tea",
        image:
          "https://sc04.alicdn.com/kf/H89957860884f4737ad33f6130624806bf.jpg",
        price: 3,
        discription: `Ceylon tea is a name given to tea produced in Sri Lanka. Ceylon is the former name for Sri Lanka that is still used in the tea trade. The tea gardens are spread throughout the island, and the favorable climate allows an all-year harvest.

        Most production is oriented towards black tea, and the best examples of Ceylon black tea come from higher elevation tea gardens located in the center of the island. Altitude has the most significant effect on the final character of Ceylon teas. Low-grown teas are mostly used in blends and provide a firm body and good strength.
        
        Mid-grown teas—typically cultivated between 2,000 and 3,500 feet—are full-bodied and have a rich and complex flavor. `,
      },
    ],
  },
  {
    id: 5,
    catagory: "Wine",
    catagoryImage:
      "https://i.pinimg.com/originals/0e/fc/4b/0efc4b1101a24984f90ab335710a5cc1.jpg",
    options: [
      {
        name: "Sine Qua Non",
        image:
          "https://cdn.luxe.digital/media/2020/07/06143759/best-wine-sine-qua-non-luxe-digital%402x.jpg.webp",
        price: 35,
        discription: `An extremely highly-rated wine, Sine Qua Non proved its expertise again with its 2006 Syrah. This is one of the most premium wines produced in California and comes with the price tag to match. Its popularity stems from its incredibly velvety tannins and dense, layered flavors. A Shot in the Dark is composed of 96.5% Syrah and 3.5% Viognier from the 11 Confessions Vineyard and is a rich and intense red wine with plenty of character.

        Only 442 cases of this wine were produced and it’s one that’s best held onto for at least a few more years. It offers an aroma of blueberry pie, blackberries, Asian spices and forest floor with a hint of chocolate when sipped. It spent 32 months aging in barrels before being bottled and is a stunning wine from start to finish. `,
      },
      {
        name: "Grgich Hills Estate",
        image:
          "https://cdn.luxe.digital/media/2020/07/06143718/best-wine-grgich-hills-estate-chardonnay-luxe-digital%402x.jpg.webp",
        price: 43,
        discription: `Fresh and balanced, Grgich Hills produces distinctive wines and its 2016 Chardonnay is just that at an accessible price. A creamy and flavorful medium-bodied wine, it’s full and well-rounded with plenty of intense, fruity notes. It’s produced using biodynamically grown grapes and is beautifully structured with pear, apple, pineapple, peach and honey flavors. 

        The 2016 is one to open now, with a crisp acidity that’s balanced through from the first sip to the last. Aged in stainless steel barrels, it’s a classic vintage Chardonnay that’s known for being one of the best and relatively easy to get hold of. Enjoy each of its tropical layers to really get a feel for the structure that makes up this bottle.`,
      },
      {
        name: "Screaming Eagle",
        image:
          "https://cdn.luxe.digital/media/2020/05/07134053/best-wine-screaming-eagle-cabernet-sauvignon-luxe-digital%402x.jpg.webp",
        price: 25,
        discription: `Screaming Eagle is a name you’ll hear again and again when talking about high-quality wine and takes the top spot for producing premium quality Cabernet Sauvignon. It’s an incredibly full-bodied wine, boasting a dark red color with an entire bouquet of flavors. It’s produced on a limited basis, with the brand only selling between 400 and 600 cases of the wine each year. But if you can get hold of a bottle, it’s worth holding onto. 

        This opulent wine is a vintage worth talking about, with a range of firm, deep and rich flavors like spring flowers, graphite, creme de cassis, kirsch and liquorice. It’s aged in 65 percent new French oak barrels for almost two years before being bottled and sold and is one of the finest on the market. `,
      },
      {
        name: "Heitz Cellar",
        image:
          "https://cdn.luxe.digital/media/2020/07/06143722/best-wine-heitz-cellar-martha-vineyard-cabernet-sauvignon-luxe-digital%402x.jpg.webp",
        price: 21,
        discription: `Martha’s Vineyard is known for its unique microclimate and 2014 was an especially strong year for its grapes. This Cabernet Sauvignon is one of the best that money can buy; known for its aroma of bay leaf, mint, anise and dark chocolate and its distinctive palate. 

        This wine spent three years aging in new French oak barrels, one in neutral oak and an additional year in bottle before being released on the market. With its strong flavors of sweet black fruit, fresh red plum and a touch of warm vanilla, it’s a smooth and classic red wine that’s a true pleasure to taste. Expect a crispness of red fruit and orange peel combined with a ripeness that’s only deepened over time.`,
      },
      {
        name: "Masseto",
        image:
          "https://cdn.luxe.digital/media/2020/07/06143739/best-wine-masseto-luxe-digital%402x.jpg.webp",
        price: 51,
        discription: `Think of a good Merlot and Masseto should come to mind. If it doesn’t, then it probably will once you’ve sampled the brand. Its 2016 release is a seamless wine that’s super concentrated without being overbearing. It’s dark, sumptuous and expressive; perfect for those who enjoy a dark red wine with an intense aroma. The 2016 combines rich and silky tannins with notes of dark fruit, spice, sweet tobacco and black cherry.

        A solid wine, it’s reminiscent of Masseto’s 2001 release and is best held onto until 2023 to enjoy the wide range of flavors. This 100 percent Merlot was aged for two years in oak barrels and is polished on the nose with a delicious finish. It’s a wine with plenty of structure with a bright and vibrant acidity. `,
      },
      {
        name: "Wayfarer",
        image:
          "https://cdn.luxe.digital/media/2020/07/06143814/best-wine-wayfarer-golden-mean-pinot-noir-luxe-digital%402x.jpg.webp",
        price: 40,
        discription: `A good Pinot Noir is typically light to medium-bodied and fruit-forward and Wayfarer’s 2014 Golden Mean offers exactly that. A complex wine filled with earthiness and exotic Asian spice, it’s one to sip slowly to really take in each and every note. It’s an elegant wine that really comes through with a wide range of fruity and perfume hints, like raspberry, peach, violet and red cherries.

        A further sip will reveal notes of pomegranate, cinnamon stick and toast, making this compelling wine one to enjoy slowly. Over time, it promises to develop more spicy notes, making it a bottle that’s enjoyable now or even more so if left to age further. `,
      },
      {
        name: "Ramey",
        image:
          "https://cdn.luxe.digital/media/2020/07/06143747/best-wine-ramey-rochioli-vineyard-chardonnay-luxe-digital%402x.jpg.webp",
        price: 15,
        discription: `The 2016 Rochioli Vineyard Chardonnay is a favorite wine for many; beautifully crafted with a wide range of dancing flavors and aromas. It’s a wine that’s both elegant and powerful, combining classic notes of white flowers, citrus and orchard fruits with spicy and buttery hints for a unique finish. 

        Its standout texture blends perfectly with its crisp acidity, offering a medium to full body and an ever-growing foundation of flavors as it’s enjoyed. Some of this stems from its aging process: this wine was aged in 21 percent new French oak for 20 months and offers subtle flavors of integrated oak as a result. It’s a creamy wine with enough savory hints to make it a top choice for those looking for a strong Chardonnay. `,
      },
      {
        name: "Cloudy Bay",
        image:
          "https://cdn.luxe.digital/media/2020/07/06143714/best-wine-cloudy-bay-sauvignon-blanc-luxe-digital%402x.jpg.webp",
        price: 20,
        discription: `Cloudy Bay has made a name for its fresh and intense wines and a favorite among lovers of the brand is its 2019 Sauvignon Blanc. It’s made up of complex layers of guava, gooseberry, tropical fruits and fresh herbs, coming together to create a delicious fruity white wine. 

        It’s a vibrant and expressive bottle, with a bright aroma bursting with tropical fruits and acidity. One to drink now, this white wine is easy to enjoy and goes down smoothly, promising a refreshing palate that’s perfect for summer. It’s a wine that might just cause your mouth to water after sampling, thanks to its sweet, concentrated notes and impressively long finish. `,
      },
      {
        name: "Family Vineyards",
        image:
          "https://cdn.luxe.digital/media/2020/07/06143803/best-wine-terlato-family-vineyards-friuli-pinot-grigio-luxe-digital%402x.jpg.webp",
        price: 25,
        discription: `The Friuli Colli Orientali region in Northeastern Italy is famed for its extraordinary wines and one of its unmissable bottles is Terlato Family Vineyards’ 2018 Friuli Pinot Grigio. A tangy white wine, it offers floral flavors of peach and pear mixed with aromas of stone fruit and honeysuckle. It’s medium-bodied and has a complexity far beyond its price point. 

        Its appellation is widely recognized as one of the best regions for luxury Pinot Grigio in the world and this wine in particular pays homage to that fact with its expressive character. Its accessible price makes this wine an easy choice for a summer evening dinner. Pair it with seafood or subtle chicken dishes for best results.`,
      },
      {
        name: "Robert Weil",
        image:
          "https://cdn.luxe.digital/media/2020/07/06143751/best-wine-robert-weil-kiedrich-grafenberg-riesling-spatlese-luxe-digital%402x.jpg.webp",
        price: 33,
        discription: `Riesling is one of the top white grapes in the world and the best bottles usually come from Germany. Usually known for its strong floral aroma, it’s a wine that’s best enjoyed sparingly, sip by sip. Robert Weil’s 2018 offering is an intensely rich and creamy Riesling, stuffed to the brim with ripe mandarin orange, papaya and mango flavors to produce a classic of its variation.

        This Riesling has an aroma of spring flowers and is worth every penny for its price. Don’t disregard it for its sweetness, because this dessert wine cleverly ends up maintaining a slight dryness and a long finish. It’s fermented entirely in stainless-steel tanks and combines acidity with clean flavors and a lasting intensity. `,
      },
      {
        name: "Penfolds",
        image:
          "https://cdn.luxe.digital/media/2020/07/06143743/best-wine-penfolds-st-henri-shiraz-luxe-digital%402x.jpg.webp",
        price: 15,
        discription: `This 2016 Shiraz is famed for its bold, earthy flavors and dry palate. It’s a wine with class, offering a brick-red core and plenty of rich tannins. The 2016 is a blend of 95 percent Shiraz and 5 percent Cabernet Sauvignon; full-bodied and incredibly powerful. It’s mostly made up from black fruit notes but promises a huge range of flavors when delving deeper through each sip. 

        It’s a powerful wine with an impressively long finish, drawing out hints of star anise and savory spices with oak, chocolate and vanilla to end. An elegant bottle, it promises creaminess on the palate and a stunning fruitiness with every mouthful. `,
      },
      {
        name: "Carlisle",
        image:
          "https://cdn.luxe.digital/media/2020/07/06143702/best-wine-carlisle-papera-ranch-zinfandel-luxe-digital%402x.jpg.webp",
        price: 18,
        discription: `A powerhouse of a bottle, Carlisle’s 2017 Papera Ranch is an excellent Zinfandel with plenty of depth and character. It’s extraordinarily deep and features a wide range of dark, jammy flavors with a long, dry finish. This is a wine to pair with a range of strong-tasting dishes to really bring out each and every element of its personality. Expect fruit-forward notes, typical of a Zinfandel, with an earthy, herbal structure. 

        It’s an example of everything a good Zinfandel should be, combined with remarkable fruit flavors, a deep ruby-purple coloring and a dash of acidity to round it off. This is a dynamic wine that’s ready to be enjoyed on a relaxing weekend.`,
      },
      {
        name: "Chateau Latour",
        image:
          "https://cdn.luxe.digital/media/2020/07/06143710/best-wine-chateau-latour-luxe-digital%402x.jpg.webp",
        price: 1200,
        discription: `The 2006 Chateau Latour has a great potential to increase with value over time. Currently sold for around $1,500, it’s an impressively deep, dark red wine made up of 77 percent Cabernet Sauvignon, 16 percent Merlot, 4 percent Cabernet Franc and 3 percent Petit Verdot. It’s broad, savory and rich with a unique finesse in the fruit and full of complex tannins.

        In 2016, Chateau Latour released the last of its prestigious 2000 batch—a welcomed decision as all previously released bottles were quickly snapped up. This is a wine that, while best to mature for a while yet, promises to dance on your tastebuds when finally opened and enjoyed. Save it, and count down the days until you finally give in and open it. `,
      },
      {
        name: "Château d’Yquem",
        image:
          "https://cdn.luxe.digital/media/2020/07/06143706/best-wine-chateau-d-yquem-sauternes-luxe-digital%402x.jpg.webp",
        price: 63,
        discription: `Sauternes wines get their character from their grapes, which come from the Sauternes region of Bordeaux and have been affected by Botrytis cinerea, which you might know as “noble rot”. This results in distinct and concentrated flavors, of which Château d’Yquem’s 2005 promises plenty. 

        This wine is a brilliant, golden color with fresh acidity and notes of honeycomb, orange blossoms and saffron. It’s a bottle for the impatient; perfect for drinking in 2021. While it begins as a subtle wine, it’s one that grows with each sip, with a concentrated nose of apricot, honey and marzipan and earthy notes of dried citrus. It’s well-rounded and medium-sweet with a velvety texture. `,
      },
      //   {
      //     name: "",
      //     image: "",
      //     price: "",
      //     discription: "",
      //   },
    ],
  },
];

export default newDrinksAndFoods;
