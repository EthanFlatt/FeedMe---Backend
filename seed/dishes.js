const db = require('../db')
const { Country, Dish } = require('../models') 

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const main = async () => {

    const nigeria = await Country.findOne({name: 'nigeria'})
    const morocco = await Country.findOne({name: 'morocco'})
    const egypt = await Country.findOne({name: 'egypt'})
    const ethiopia = await Country.findOne({name: 'ethiopia'})
    const kenya = await Country.findOne({name: 'kenya'})
    const china = await Country.findOne({name: 'china'})
    const taiwan = await Country.findOne({name: 'taiwan'})
    const japan = await Country.findOne({name: 'japan'})
    const southKorea = await Country.findOne({name: 'south korea'})
    const singapore = await Country.findOne({name: 'singapore'})
    const indonesia = await Country.findOne({name: 'indonesia'})
    const india = await Country.findOne({name: 'india'})
    const iran = await Country.findOne({name: 'iran'})
    const greece = await Country.findOne({name: 'greece'})
    const italy = await Country.findOne({name: 'italy'})
    const spain = await Country.findOne({name: 'spain'})
    const france = await Country.findOne({name: 'france'})
    const unitedKingdom = await Country.findOne({name: 'united kingdom'})
    const unitedStates = await Country.findOne({name: 'united states'})
    const canada = await Country.findOne({name: 'canada'})
    const mexico = await Country.findOne({name: 'mexico'})
    const brazil = await Country.findOne({name: 'brazil'})
    const argentina = await Country.findOne({name: 'argentina'})
    const peru = await Country.findOne({name: 'peru'})
    const chile = await Country.findOne({name: 'chile'})
    const colombia = await Country.findOne({name: 'colombia'})
    const australia = await Country.findOne({name: 'australia'})
    const newZealand = await Country.findOne({name: 'new zealand'})

    const dishes = [

        {
            name: 'jollof rice',
            ingredients: ['onions', 'tomatoes', 'chicken', 'rice', 'olive oil', 'salt', 'tomato paste', 'pepper', 'cayenne', 'red pepper flakes', 'worcestershire sauce', 'rosemary', 'carrots', 'beans', 'nutmeg'],
            instructions: 'Pour oil into large saucepan. Cook onion in oil over medium-low heat until translucent. Stir in stewed tomatoes and tomato paste, and season with salt, black pepper, cayenne pepper, red pepper flakes, Worcestershire sauce and rosemary. Cover, and bring to a boil. Reduce heat, stir in water, and add chicken pieces. Simmer for 30 minutes. Stir in rice, carrots, and green beans, and season with nutmeg. Bring to a boil, then reduce heat to low. Cover, and simmer until the chicken is fork-tender and the rice is cooked, 25 to 30 minutes.',
            photo: 'https://www.allrecipes.com/thmb/L4yaP94i4hAJPcLZWZAwvYF0YeE=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2):format(webp)/Jollof-Rice-Kim-6fd3244d2fa24e8784f5f5e9783de58e.jpg',
            country: nigeria._id
        },
        {
            name: 'moroccan couscous',
            ingredients: ['onions', ' bell peppers', 'zucchini', 'beans', 'broth', 'ginger', 'cumin', 'cloves', 'cayenne', 'cardamom', 'coriander', 'allspice', 'olive oil', 'raisins', 'salt', 'orange', 'orange juice', 'couscous', 'mint'],
            instructions: 'Place a large, heavy bottomed pot over medium heat. Stir in the cumin, ginger, cloves, cayenne, cardamom, coriander, and allspice; gently toast until fragrant, about 2 to 3 minutes. Stir in oil and onion, cook until softened. Stir in the bell pepper, and zucchini; cook for 5 minutes. Stir in the raisins, salt, zest, and garbanzos. Place a large, heavy bottomed pot over medium heat. Stir in the cumin, ginger, cloves, cayenne, cardamom, coriander, and allspice; gently toast until fragrant, about 2 to 3 minutes. Stir in oil and onion, cook until softened. Stir in the bell pepper, and zucchini; cook for 5 minutes. Stir in the raisins, salt, zest, and garbanzos.',
            photo: 'https://www.allrecipes.com/thmb/8YHtPOL3wJechyrfRn089hb-ZI8=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2):format(webp)/9249075-moroccan-couscous-Deb-Knisley-4x3-1-ea884bab1d6944739e751adedcb6a90d.jpg',
            country: morocco._id
        },
        {
            name: 'hummus',
            ingredients: ['beans', 'olive oil', 'garlic', 'salt', 'lemon juice', 'cumin', 'sesame oil'],
            instructions: 'Blend garbanzo beans, lemon juice, olive oil, garlic, cumin, salt, and sesame oil in a food processor; stream reserved bean liquid into the mixture as it blends until desired consistency is achieved.',
            photo: 'https://www.allrecipes.com/thmb/QK4Erdz8ICKEfzQKiGn5h066aoI=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2):format(webp)/232962-super-easy-hummus-ddmfs-3X4-0314-7a98966c532646769f91a51812e50e41.jpg',
            country: egypt._id
        },
        {
            name: 'doro wat',
            ingredients: ['butter', 'onions', 'tomatoes', 'garlic', 'ginger', 'chicken', 'wine', 'pepper', 'eggs', 'tomato paste', 'berber seasoning', 'cardamom'],
            instructions: 'Heat 1/2 cup butter in a skillet over medium-low heat. Cook and stir onion until translucent, 5 to 6 minutes. Add 1/2 cup water and tomato paste; stir until hot, about 2 minutes. Stir in remaining butter, berbere, garlic, and ginger. Adjust heat to low and cook until mixture thickens to paste consistency, 20 to 30 minutes. Stir remaining water into berbere paste; add chicken. Simmer until thickened to sauce consistency, about 45 minutes. Stir white wine, cardamom, and black pepper into the sauce; add hard-boiled eggs. Cook until sauce is reduced slightly, about 15 minutes more.',
            photo: 'https://www.allrecipes.com/thmb/CEubc5hIpvkVO1cp481ja0v5tfo=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(479x0:481x2):format(webp)/3428959-12fbdce36ed04b59bf44e17e8f9451cc.jpg',
            country: ethiopia._id
        },
        {
            name: 'nairobi chocolate cake',
            ingredients: ['flour', 'sugar', 'salt', 'cocoa', 'eggs', 'baking soda', 'baking powder', 'vegetable oil', 'vanilla extract'],
            instructions: 'Preheat an oven to 350 degrees F (175 degrees C). Grease and flour two 9-inch cake pans or line them with parchment paper. Combine the flour, baking soda, baking powder, sugar, salt, cocoa powder, 3/4 cup water, and vegetable oil in a mixing bowl. Beat with an electric mixer on medium speed for 2 minutes. Add the eggs, vanilla extract, and 1/2 cup water and beat for another 2 minutes. Pour the batter into the prepared cake pans. Bake in the preheated oven until the surface of the cake springs back when lightly pressed and a toothpick inserted into the center comes out clean, about 30 minutes. Cool in the pans for 10 minutes before removing to cool completely on a wire rack.',
            photo: 'https://www.allrecipes.com/thmb/xEzmuqPZs-syFHBTN_MJXvsX1GM=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(124x0:126x2):format(webp)/918422-3fc75378783c4e38bb23d77a7be00e7a.jpg',
            country: kenya._id
        },
        {
            name: 'dumplings',
            ingedients: ['pork', 'ginger', 'garlic', 'green onion', 'soy sauce', 'cabbage', 'sesame oil', 'eggs', 'wonton'],
            instructions: "Mix the pork, ginger, garlic, green onion, soy sauce, sesame oil, egg, and cabbage in a large bowl. Place a teaspoon of filling onto each wonton skin, then moisten the edges with water and fold diagonally to create a triangle. Roll the edges to seal in the filling. Transfer the dumplings to a lightly floured surface until you're ready to cook. Arrange the pork dumplings in a steamer so that they're not touching. Steam until the pork is cooked through.",
            photo: 'https://www.allrecipes.com/thmb/W8VMNgnFgRqZYQ19JMtdJc-_zEU=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(1999x0:2001x2):format(webp)/14759-pork-dumplings-DDMFS-4x3-f87c9459ec73475f9dcab4cc651c46d3.jpg',
            country: china._id
        },
        {
            name: 'potstickers',
            ingredients: ['shrimp', 'beef', 'ginger', 'shallot', 'green onion', 'cabbage', 'soy sauce', 'salt', 'sugar', 'sesame oil', 'sesame oil', 'pepper', 'potsticker wrappers', 'vegetable oil'],
            instructions: "Place the shrimp in the work bowl of a food processor, and process until the shrimp are finely ground. Set aside in a large bowl. Working in batches, process the ground beef to a fine grind, and set aside with the shrimp. Combine the shrimp and ground beef with ginger, shallot, green onions, napa cabbage, soy sauce, sesame oil, salt and pepper, and white sugar, and mix the ingredients until thoroughly combined. To fill the pot stickers, place a wrapper on a work surface in front of you, and place a scant teaspoon of filling in the center. With a wet finger, dampen the edges of the wrapper. Fold the dough into a half-moon shape, enclosing the filling, and press and seal to remove extra air and tightly seal the edges together. It's nice to fold several small pleats in the top half of the wrapper for a traditional look before you seal in the filling. Refrigerate the filled wrappers on a parchment-lined baking sheet while you finish filling and sealing the pot stickers. Heat the oil in a large nonstick skillet with a lid over medium heat. Place pot stickers into the hot oil, flat sides down, without crowding, and let fry until the bottoms are golden brown, 1 to 2 minutes. Turn the dumplings over, and pour the water over them. Cover the pan with a lid and let the dumplings steam until the water has nearly evaporated and the dumplings have begun to fry in oil again, 5 to 7 minutes. Uncover the skillet, and let the pot stickers cook until all the water is evaporated and the wrapper has shrunk down tightly onto the filling, another 2 to 3 minutes.",
            photo: 'https://www.allrecipes.com/thmb/iS6sVh5u1k8sxorCqhwjgSmcIZ8=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(499x0:501x2):format(webp)/692888-potstickers-chinese-dumplings-LZakaria-1x1-1-745d59650b2243ccb96f2017267de296.jpg',
            country: taiwan._id
        },
        {
            name: 'ramen',
            ingredients: ['chicken', 'scallops', 'shrimp', 'ginger', 'daishi', 'soy sauce', 'sake', 'green onions', 'sugar', 'garlic', 'anchovies', 'bonito flakes', 'mirin'],
            instructions: "Place chicken, scallops, anchovies, shrimp, bonito flakes, half the ginger, and kombu in an electric pressure cooker. Add water; close and lock the lid. Select the Soup setting; set timer for 90 minutes according to manufacturer's instructions. Allow 10 to 15 minutes for pressure to build. Release pressure using the natural-release method according to manufacturer's instructions, 10 to 40 minutes. Strain broth through a colander or fine-mesh sieve. Skim the fatty oil off the top of the broth. Combine soy sauce, mirin, sake, green onions, bonito flakes, sugar, garlic, and kombu in a medium saucepan over high heat. Bring to a boil. Reduce heat to low and simmer until flavors blend, about 10 minutes. Strain tare sauce through a fine-mesh sieve into a bowl. Pour 2 tablespoons of tare sauce into a large bowl. Ladle in about 2 cups of broth. Add 1/6 of the ramen noodles. Repeat with remaining tare, broth, and ramen.",
            photo: 'https://www.allrecipes.com/thmb/jt3nkcl-UbNEq3WNGrOqGoMZ7y4=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(479x0:481x2):format(webp)/4533930-a162b982f75a4437b289e3492ab4c8c2.jpg',
            country: japan._id
        },
        {
            name: 'beef bulgogi',
            ingredients: ['steak', 'soy sauce', 'sugar', 'green onion', 'garlic', 'sesame seeds', 'sesame oil', 'pepper'],
            instructions: "Place the flank steak in a shallow bowl. In a separate bowl, combine the rest of the ingredients and whisk until blended. Pour the marinade over the steak — make sure the meat is completely covered. Cover the bowl and allow the beef to marinate in the fridge for about an hour. On a lightly oiled grill set to high heat, cook the beef until it's charred and completely cooked through. This should take about 1 or 2 minutes on each side.",
            photo: 'https://www.allrecipes.com/thmb/xSygOSrITYE5CJ9OHHnh_QQf92k=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(1999x0:2001x2):format(webp)/100606-beef-bulgogi-DDMFS-4x3-b59a31e8b94f4c7091e333847bf0c406.jpg',
            country: southKorea._id
        },
        {
            name: 'chili crab',
            ingredients: ['ketchup', 'broth', 'eggs', 'soy sauce', 'garlic', 'oyster sauce', 'tamarind', 'shallot', 'garlic', 'vegetable oil', 'ginger', 'crab', 'cilantro', 'green onion', 'fish sauce', 'palm sugar', 'serrano pepper', 'dungeness crab'],
            instructions: 'Whisk ketchup, chicken broth, egg, soy sauce, chile-garlic sauce, oyster sauce, tamarind paste, fish sauce, and palm sugar together in a bowl. Stir shallots, garlic, oil, ginger, and serrano pepper together in a pot over medium-high heat. Saute until sizzling, about 2 minutes. Add crab to pot, cover the pot with a lid, and shake until crab is completely coated in shallot mixture. Remove lid and cook and stir until heated through, about 3 minutes. Pour ketchup mixture into pot, reduce heat to medium, and cook and stir until sauce thickens and crab is hot about 5 minutes. Remove from heat; stir in cilantro and green onions.',
            photo: 'https://www.allrecipes.com/thmb/04GbRaur0q-YsZfN1vlPh_QeAUQ=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(479x0:481x2):format(webp)/3590674-8362699eba984d1fa50c4b6adbca7708.jpg',
            country: singapore._id
        },
        {
            name: 'nasi goreng',
            ingredients: ['eggs', 'vegetable oil', 'onions', 'leeks', 'bell peppers', 'garlic', 'chicken', 'shrimp', 'coriander', 'cumin', 'rice', 'soy sauce'],
            instructions: 'Heat a large nonstick skillet over medium heat. Coat with nonstick cooking spray. Pour eggs into the hot skillet and cook until the edges begin to set. Lift the edges to allow any uncooked egg to flow onto the hot pan, about 1 minute. Flip omelet in one piece and cook until fully set, about 30 seconds. Transfer omelet to a cutting board and slice into 1/2-inch strips. Set aside. Heat vegetable oil in a wok or large frying pan over high heat. Stir in onion, leek, chile peppers, and garlic. Cook and stir until onion is soft, 3 to 5 minutes. Stir in chicken, shrimp, coriander, and cumin; mix well. Cook and stir for about 5 minutes. Mix in cooked rice, sweet soy sauce, and omelet strips; cook until rice is heated through and chicken is no longer pink in the center, 3 to 5 minutes.',
            photo: 'https://www.allrecipes.com/thmb/TTPcYeb6OVJiZ97w4TBEmDhCyIo=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(479x0:481x2):format(webp)/2839070-1ad40e4543aa4139a6d3a15d8c0a82b1.jpg',
            country: indonesia._id
        },
        {
            name: 'chicken curry',
            ingredients: ['olive oil', 'onions', 'garlic', 'curry powder', 'cinnamon', 'paprika', 'ginger', 'sugar', 'salt', 'chicken', 'tomatoes', 'yogurt', 'coconut milk', 'cayenne', 'bay leaves', 'tomato paste', 'lemon'],
            instructions: 'Heat olive oil in a skillet over medium heat. Sauté onion until lightly browned. Stir in garlic, curry powder, cinnamon, paprika, bay leaf, ginger, sugar, and salt. Continue stirring for 2 minutes. Add chicken pieces, tomato paste, yogurt, and coconut milk. Bring to a boil, reduce heat, and simmer for 20 to 25 minutes. Remove bay leaf, and stir in lemon juice and cayenne pepper. Simmer 5 more minutes. Serve hot and enjoy!',
            photo: 'https://www.allrecipes.com/thmb/xKum1weEKo-HECoi1XgHRl_egLY=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2):format(webp)/46822-indian-chicken-curry-ii-DDMFS-4x3-39160aaa95674ee395b9d4609e3b0988.jpg',
            country: india._id
        },
        {
            name: 'kebab',
            ingredients: ['onions', 'lamb', 'beef', 'salt', 'pepper', 'turmeric', 'eggs', 'cheesecloth', 'baking powder', 'sumac powder'],
            instructions: 'Shave onions with a grater into a fine mesh strainer. Gently press pulp into the strainer to remove juices. Place pulp into the center of the cheesecloth and gently press until no further juice drips out. Place lamb and beef in a pot. Add green onion and onion pulp; mix until thoroughly combined. Mix in baking powder, salt, pepper, sumac, and turmeric. Add eggs and mix thoroughly. Cover the pot and place in the refrigerator until flavors have melded, at least 30 minutes. Preheat an outdoor grill for medium heat and lightly oil the grate. Mold meat mixture onto the skewers. Cook on the preheated grill, rotating every minute, until nicely browned on all sides, and meat is no longer pink in the center, about 25 minutes.',
            photo: 'https://www.allrecipes.com/thmb/euoBMLTRP6C3ylMk2j62RV8EqhU=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(2072x0:2074x2):format(webp)/7603269-d484d711628244f8bef413617bd2dc60.jpg',
            country: iran._id
        }, 
        {
            name: 'beef gyro',
            ingredients: ['yogurt', 'cucumbers', 'olive oil', 'dill', 'lemon', 'garlic', 'salt', 'pepper', 'steak', 'pita bread', 'tomatoes', 'onions', 'feta cheese', 'lettuce', 'olives', 'beef'],
            instructions: 'Blend yogurt, cucumbers, 2 tablespoons olive oil, dill, lemon juice, garlic, salt, and pepper in a blender until tzatziki sauce is evenly combined. Heat remaining 1 tablespoon olive oil in a large skillet over medium heat; cook and stir steak in the hot skillet until no longer pink, 5 to 10 minutes. Layer 1/2 of each pita with steak, tomato, onion, feta cheese, lettuce, olives, and tzatziki sauce. Bring the edge of each pita over the filling and secure with a toothpick.',
            photo: 'https://www.allrecipes.com/thmb/IE1k7sBR_IGLS3oKyyWxnj9QhMY=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(479x0:481x2):format(webp)/1042829-2dfd295853a44999a5dc54f5c9e5d896.jpg',
            country: greece._id
        },
        {
            name: 'spaghetti',
            ingredients: ['beef', 'onions', 'garlic', 'bell peppers', 'tomatoes', 'oregano', 'basil', 'salt', 'pepper', 'tomato sauce', 'tomato paste'],
            instructions: 'Combine ground beef, onion, garlic, and green pepper in a large saucepan over medium-high heat. Cook and stir until meat is browned and crumbly and vegetables are tender, 5 to 7 minutes. Drain grease. Stir diced tomatoes, tomato sauce, and tomato paste into the pan. Season with oregano, basil, salt, and pepper. Simmer spaghetti sauce for 1 hour, stirring occasionally.',
            photo: 'https://www.allrecipes.com/thmb/WiU8Iv9K5TBQkGzd2KzP80C60oM=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(1999x0:2001x2):format(webp)/158140-Spaghetti-sauce-with-ground-beef-DDMFS-4x3-ce598bcb0b304eed966c81f95e24d57b.jpg',
            country: italy._id
        },
        {
            name: 'paella',
            ingredients: ['chicken', 'chorizo', 'shrimp', 'rice', 'onions', 'pepper', 'chicken stock', 'saffron', 'red pepper flakes', 'lemon zest', 'oregano', 'paprika', 'salt', 'pepper'],
            instructions: 'Allow the chicken to marinate in olive oil, paprika, oregano, salt, and pepper in the fridge for a few hours (or overnight). Heat olive oil in a paella pan and stir in garlic, red pepper flakes, and rice. Add saffron, bay leaf, parsley, chicken stock, and lemon zest. Simmer rice for 20 minutes. Cook chicken, onion, bell pepper, chorizo, and shrimp until done. Then add to the rice mixture.',
            photo: 'https://www.allrecipes.com/thmb/mJE_ZZDdzwo9fF1dMo3do9U6UCg=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():focal(1999x0:2001x2):format(webp)/84137-easy-paella-DDMFS-4x3-08712e61e7dc453d94673f65f9eca7d2.jpg',
            country: spain._id
        },
        {
            name: 'pain au chocolat',
            ingredients: ['flour', 'milk', 'sugar', 'salt', 'butter', 'yeast', 'eggs', 'chocolate'],
            instructions: 'Pour water into a bread machine pan; add flour. Sprinkle milk powder over flour. Place sugar, salt, and 2 tablespoons of softened butter into the corners of the pan. Make a small indent in the top of the dry ingredients and place yeast in the indent. Run the bread machine on the basic dough setting. Meanwhile, lay out a sheet of waxed or parchment paper. Shape the remaining 1/2 cup of butter into a 3x5-inch rectangle on the waxed paper; wrap and chill until ready to use. Remove butter from the refrigerator and allow to soften while you roll out dough. Turn dough out onto a lightly floured surface; roll into a 8x12-inch rectangle. Place butter on half of the dough, leaving a 1/2-inch border of dough on 3 sides. Fold the other half of dough over butter and press the edges firmly to seal. Roll the dough out to a 6x14-inch rectangle. Fold the dough in thirds from the long ends, as you would fold a business letter. Cover dough loosely with plastic wrap and refrigerate for 20 minutes. Remove the dough from the refrigerator. Place it onto a lightly floured surface so that the folded edge faces you. Roll the dough out again into a 6x14-inch rectangle, and fold into thirds. Cover with plastic and chill for 20 minutes. Repeat, then chill the dough for 30 minutes. In a small bowl, beat together the egg yolk and milk; set aside. Grease two baking sheets. Roll dough out into a 12x21-inch rectangle. Cut dough into thirds in both directions, to make 9 rectangles. Divide chocolate among the rectangles. Lightly brush egg yolk mixture around the edges of each piece. Starting at a short end, roll each piece of dough around the chocolate; press the edges together to seal. Place the croissants onto the prepared baking sheets; cover with greased plastic wrap and allow to rise in a warm place until they have doubled in size, about 30 minutes. Preheat oven to 400 degrees F (200 degrees C). Brush the top of the pastries with the remaining egg yolk mixture. Bake in the preheated oven until golden brown, about 15 minutes. Cool for 5 minutes on the baking sheets, then transfer croissants to wire racks. Serve warm or at room temperature.',
            photo: 'https://www.allrecipes.com/thmb/zgzZVW2xUoQUL4VrVvMxAlWTl4U=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(479x0:481x2):format(webp)/3170763-b5236d48b16844f2b56e910436aa88a3.jpg',
            country: france._id
        },
        {   
            name: 'fish and chips',
            ingredients: ['potatoes', 'flour', 'baking powder', 'salt', 'pepper', 'milk', 'eggs', 'vegetable oil', 'cod'],
            instructions: 'Make the chips by slicing and frying the potatoes. Make the batter by mixing the flour, baking powder, seasonings, milk, and egg.Dredge the fish in batter. Fry the fish until golden brown. Fry the potatoes a second time, then serve alongside the fried fish.',
            photo: 'https://www.allrecipes.com/thmb/M9a5PCE_zxTiwzkrY6WVOlcIa88=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(479x0:481x2):format(webp)/970421-bcadd7fdfea848f59ccbb23b7f1ce30b.jpg',
            country: unitedKingdom._id
        },
        {
            name: 'grilled cheese',
            ingredients: ['bread', 'cheese', 'butter'],
            instructions: 'Butter the bread on one side and place the bread butter-side down on a hot skillet. Top with cheese, then place another slice of bread on top (butter-side up). Cook until the bottom slice is lightly browned, then flip. Continue cooking until the cheese is melted.',
            photo: 'https://www.allrecipes.com/thmb/QlC1mph3zlrz_yq89_oWIz5TsP8=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(479x0:481x2):format(webp)/2206436-d0018545bcb545b6b98c1a23659777cf.jpg',
            country: unitedStates._id
        },
        {
            name: 'Poutine',
            ingredients: ['vegetable oil', 'beef gravy', 'potatoes', 'cheese curds'],
            instructions: 'Heat oil in a deep fryer or deep heavy skillet to 365 degrees F (185 degrees C). While the oil is heating, begin to warm gravy. Place fries into the hot oil, and cook until light brown, 8 to 10 minutes. Cook fries in batches if necessary to allow them room to move a little in the oil. Remove to a paper towel-lined plate to drain. Place fries on a serving platter, and sprinkle cheese over them. Ladle warmed gravy over the fries and cheese, and serve immediately.',
            photo: 'https://www.allrecipes.com/thmb/9rHqQJWsC2tE9CCUpJW783oAGrQ=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(1999x0:2001x2):format(webp)/79300-real-poutine-DDMFS-4x3-0d8e5e37f35e4e61bffe0b6c0fc85a63.jpg',
            country: canada._id
        },
        {
            name: 'fish tacos',
            ingredients: ['beer batter', 'white sauce', 'vegetable oil', 'cod', 'flour', 'tortilas', 'cabbage'],
            instructions: 'Make beer batter: Combine flour, cornstarch, baking powder, and salt in a large bowl. Blend beer and egg in a separate bowl, then quickly stir into flour mixture until combined with a few lumps remaining. Make white sauce: Mix together yogurt and mayonnaise in a medium bowl. Gradually stir in fresh lime juice until consistency is slightly runny. Season with jalapeño, capers, cayenne, oregano, cumin, and dill. Start fish tacos: Heat oil in a deep-fryer to 375 degrees F (190 degrees C). Dust fish pieces lightly with flour. Set aside. Dip floured fish pieces into beer batter. Set aside. Fry in hot oil until crisp and golden brown. Drain on paper towels. Lightly fry tortillas in hot oil until just crisped, but not too crisp. Drain on paper towels. Place fried fish in tortillas; top with shredded cabbage and white sauce.',
            photo: 'https://www.allrecipes.com/thmb/2AB5iqGNp0EbWAgrlPLM_gHIzlM=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(1999x0:2001x2):format(webp)/53729-fish-tacos-DDMFS-4x3-b5547c67c6f0432da06ad8f905e82c1e.jpg',
            country: mexico._id
        },
        {
            name: 'feijoada',
            ingredients: ['olive oil', 'onions', 'green onions', 'garlic', 'beans', 'ham', 'bacon', 'bay leaves', 'coriander', 'salt', 'pepper', 'cilantro', 'parsley'],
            instructions: 'Heat oil in a large pot or Dutch oven. Add 3/4 cup chopped onion, green onions, and garlic; cook and stir until softened, about 4 minutes. Pour in soaked beans and fill with enough water to cover beans by 3 inches. Bring to a boil, then reduce heat to medium-low, and simmer uncovered for 2 hours, or until tender. While beans are cooking, place ham hocks in a smaller pot with 1/4 cup chopped onion. Cover with water and simmer until meat pulls off of the bone easily, about 1 hour. Drain and add to beans. Meanwhile, preheat the oven to 375 degrees F (190 degrees C). Place ham, bacon, and remaining onion in a baking dish. Bake until mixture is crispy, 15 minutes. Drain bacon and ham mixture and add to beans. Season with bay leaves, coriander, salt, and pepper. Simmer, uncovered, 30 minutes more. Stir in chopped cilantro and parsley just before serving.',
            photo: 'https://www.allrecipes.com/thmb/bbXV_SDLAbFrWgsYnF9rtNPpsqM=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(479x0:481x2):format(webp)/351366-feijoada-brazilian-black-bean-stew-Melissa-Goff-4x3-1-0fb041cc43234fedb23d171172e65a10.jpg',
            country: brazil._id
        },
        {
            name: 'beef empanadas',
            ingredients: ['potatoes', 'butter', 'onions', 'green onions', 'red bell peppers', 'beef', 'paprika', 'cayenne', 'salt', 'green olives', 'eggs', 'olive oil'],
            instructions: 'Place potatoes in a large pot and cover with water; bring to a boil. Reduce heat to medium-low and simmer until barely tender, about 8 minutes. Drain. Once cool enough to handle, peel and cut into cubes. Set aside. Meanwhile, melt butter in a large skillet and cook onion and green onions until softened, about 5 minutes. Add bell pepper and cook for 3 minutes. Add ground beef; cook and stir until beef is browned, about 5 minutes. Season with paprika, cayenne pepper, and salt. Remove beef mixture from heat; add potatoes and olives. Stir in chopped hard-cooked eggs; set filling aside to cool, about 20 minutes. Preheat the oven to 425 degrees F (220 degrees C). Line 2 baking sheets with aluminum foil and lightly grease with olive oil. Place an empanada pastry round on a flat surface and lightly wet the edges with warm water. Put a large tablespoon of cooled filling in the center and fold dough over. Seal edges by pressing with a fork. Repeat with remaining rounds and filling. Transfer empanadas to the prepared baking sheets and brush with beaten egg. Bake in the preheated oven until golden brown, 15 to 20 minutes.',
            photo: 'https://www.allrecipes.com/thmb/2IdvxlvciSYiPYx3ph2JRkVy7k8=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():focal(852x0:854x2):format(webp)/5589810-24a65aa048624838b65a8dc996d57e2f.jpg',
            country: argentina._id
        },
        {
            name: 'ceviche',
            ingredients: ['scallops', 'limes', 'celery', 'tomatoes', 'green bell peppers', 'green onions', 'parsley', 'cilantro', 'olive oil', 'pepper'],
            instructions: 'Rinse scallops and place in a medium bowl. Pour lime juice over scallops; scallops should be completely immersed in lime juice. Cover and chill in the refrigerator until scallops are opaque, 8 hours to overnight. Discard 1/2 of the lime juice from the bowl. Add celery, tomatoes, bell pepper, green onions, parsley, cilantro, olive oil, and black pepper; stir gently until combined.',
            photo: 'https://www.allrecipes.com/thmb/HPh6RYQCx29XOsqNzQo0rsLhgMo=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(999x0:1001x2):format(webp)/4537188-1c4bb9948d814cadb21d3210389801f9.jpg',
            country: peru._id
        },
        {
            name: 'ajiaco',
            ingredients: ['canola oil', 'shallots', 'garlic', 'red bell peppers', 'chile powder', 'cumin', 'roast beef', 'potatoes', 'broth', 'oregano', 'salt', 'pepper', 'parsley', 'eggs'],
            instructions: 'Heat the canola oil in a Dutch oven over medium heat. Stir in shallots, garlic, and red pepper; cook until the shallot has softened and turned translucent, about 4 minutes. Sprinkle in the chipotle powder and cumin; cook 30 seconds until fragrant. Add the roast beef and red potatoes, pour in the water and beef broth. Bring to a boil over high heat, then reduce heat to medium-low, cover, and simmer until the potatoes are tender, about 30 minutes. Stir in the oregano, and season to taste with salt and pepper. Stir in chopped parsley before serving. Garnish each bowl with a few slices of hard-cooked egg.',
            photo: 'https://www.allrecipes.com/thmb/KDegTL_hwA0-dOp4lZVqNduy2Tg=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(479x0:481x2):format(webp)/7673553-74c68b1d78dd4ff9b445058eefb1f089.jpg',
            country: chile._id
        },
        {
            name: 'arepas',
            ingredients: ['salt', 'cornmeal', 'vegetable oil'],
            instructions: 'Stir water and salt together in a medium bowl; gradually stir in cornmeal with your fingers until the mixture forms a soft, moist, malleable dough. Form dough into eight 2-inch diameter balls; pat each ball to flatten into a 3/8-inch-thick arepa patty. Heat oil in a large skillet over medium heat; fry arepas in batches until golden brown, about 4 to 5 minutes per side. Transfer cooked arepas to a paper towel-lined plate to drain until cool enough to handle. Slice halfway through each arepa horizontally with a thin serrated knife to form a pita-like pocket.',
            photo: 'https://www.allrecipes.com/thmb/bQQPOmoCkMnWlN91x0C9oP6iP70=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(479x0:481x2):format(webp)/4387883-homemade-arepas-Buckwheat-Queen-4x3-f0ac376415794768aa110e517fe3ef89.jpg',
            country: colombia._id
        },
        {
            name: 'pavlova',
            ingredients: ['egg whites', 'sugar', 'cornstarch', 'vanilla extract', 'lemon juice', 'heavy cream', 'kiwis'],
            instructions: 'Make the meringue: Beat the egg whites and sugar, then fold in the cornstarch, vanilla, and lemon juice. Bake the meringue: Spoon the meringue onto a prepared baking sheet following the detailed instructions. Bake the meringue until it is dry and sounds hollow when tapped. Make the whipped cream: Beat the heavy cream until stiff peaks form. Assemble the pavlova: Fill the meringue with the whipped cream, then topped with the kiwi slices.',
            photo: 'https://www.allrecipes.com/thmb/1fIZpLqC5QB1ABuF-hb1PpnkJ2I=/282x188/filters:no_upscale():max_bytes(150000):strip_icc():focal(1999x0:2001x2):format(webp)/12126-easy-pavlova-DDMFS-4x3-a751c2b63d2a4393ac2dab4c608a12d5.jpg',
            country: australia._id
        },
        {
            name: 'sausage rolls',
            ingredients: ['pork', 'onions', 'garlic', 'bread crumbs', 'salt', 'pepper', 'coriander', 'thyme', 'cayenne', 'nutmeg', 'eggs', 'sesame seeds'],
            instructions: "Place ground pork, onions, garlic, sage, bread crumbs, salt, pepper, coriander, thyme, cayenne pepper, and nutmeg in a mixing bowl. Mix with a fork until ingredients are evenly distributed, 2 to 3 minutes. Divide mixture in half and place each half on a length of plastic wrap. Use your damp fingers to shape each half into a cylinder, approximately the same length as the puff pastry. Roll up in the plastic and form into a round roll. Refrigerate until ready to use. Whisk egg with water to make the egg wash. Separate the semi-frozen puff pastry dough into thirds. Halve one of the thirds lengthwise. Bring pastry to room temperature. Brush a 2-inch strip of egg wash along 1 long edge of the 2 larger pastry pieces. Place the narrower pieces on the egg wash strip, overlapping about 1 inch, to make a wider piece of pastry dough. Press lightly to form 2 wide lengths of pastry dough. Transfer 2 sheets of dough to a lightly floured piece of parchment paper; dust tops lightly with flour. Cover with another sheet of parchment. Roll gently to achieve an even thickness. Remove top sheet of parchment. Flatten the longs edges of the dough slightly about 1 inch wide so that when the roll-up is completed, the seam side won't be thicker than the rest of the dough. Place a sausage log at the end of a pastry sheet. Begin to roll the sausage log in the pastry, brushing the far edge with egg wash before sealing the edges together. Place seam side down on parchment and place on a dish. Repeat with 2nd sausage roll. Freeze until dough firms up, about 10 minutes. Preheat oven to 375 degrees F (190 degrees C). Line a baking sheet with a silicone mat. Place rolls on a lightly floured surface. Lightly brush top and sides with egg wash. Cut each roll into 8 pieces. Sprinkle with sesame seeds. Place on prepared baking sheet seam-side down (standing up). Lightly press each roll to flatten it slightly so they don't fall over when baking. Place in preheated oven; bake until nicely browned, pastry is cooked through, and bottoms are browned, about 30 minutes.",
            photo: 'https://www.allrecipes.com/thmb/qG5cvOYWEadUFSQ5qMO-C81uwXQ=/364x242/filters:no_upscale():max_bytes(150000):strip_icc():focal(399x0:401x2):format(webp)/4551797-chef-johns-sausage-rolls-Chef-John-1x1-1-204445030c9d425da09bb65c505d73b7.jpg',
            country: newZealand._id
        },
       

        
        

    ]
    await Dish.deleteMany()
    await Dish.insertMany(dishes)
    console.log('Dishes created')

}

const run = async () => {
    await main()
    db.close()
}

run()