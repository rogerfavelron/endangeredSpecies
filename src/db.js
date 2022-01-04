import hornbill from './Assets/hornbill1.png';
import armadillo from './Assets/armadillo10.png';
import birdwing from './Assets/birdwing19.png';
import diademedsifaka from './Assets/dieademedsifaka23.png';
import fijiiguana from './Assets/fijiiguana8.png';
import goldenfrog from './Assets/goldenfrog4.png';
import knysnaseahorse from './Assets/knysnaseahorse9.png';
import lynx from './Assets/lynx24.png';
import malayantapir from './Assets/malayantapir22.png';
import rainbowparrotship from './Assets/rainbowparrotship17.png';
import sunbear from './Assets/sunbear16.png';
import threetoedsloth from './Assets/3toedsloth11.png';


   const animals = {
        "1": {
            "backgroundColor":"#a5a58d",
            "image": hornbill,
            "name": "Helmeted Hornbill",
            "scientificName": "Rhinoplax vigil",
            "range": "Indonesia / Malaysia",
            "description-one": "This glorious hornbill uplisted 3 levels from Near Threatened to !Critically endangered! in late 2015.",
            "description-two": "Its highly-prized casque is unique in that it is almost completely solid and !rich in ivory* - leading to excessive hunting in recent years which is set to increase, with China the largest consumer of the casque. ",
            "description-three": "Logging and agricultural conversion is contributing to the ominous pressure of hunting, and restoration is complicated further by the hornbill's !slow reproductive cycle!."
        },
        "2": {
            "backgroundColor":"#9787ea",
            "image": sunbear,
            "name": "Sun Bear",
            "scientificName": "Helarctos malayanus",
            "range": "Southeast Asia",
            "description-one": "Sun Bears have a delightful necklace pattern accompanied by a long tongue but their existence may unfortunately be a lot shorter.",
            "description-two": "Hunting and deforestation impact to varying degrees depending on the range, with !forest fires, developments and logging* all contributing to lost habitat.",
            "description-three": "Hunting is actually illegal in all of the Bear's range but unfortunately as is so often the case uncontrolled, where some areas have !seen populations* halve in over two decades."
        },
        "3": {
            "backgroundColor":"#ccc5e3",
            "image": rainbowparrotship,
            "name": "Rainbow Parrotfish",
            "scientificName": "Scarus guacamaia",
            "range": "Carribean / Bermuda",
            "description-one": "A gorgeous array of colours spreads over this large fish but it's this size which helps place it under threat of overfishing.",
            "description-two": "This fish coasts into shallow water which increases the risk of being caught by fisherman, but its !habitat has also declined* rapidly over the past 25 years.",
            "description-three": "The quality of conditions of habitat which remains - especially !coral reefs* - is also declining, which Parrotfish use for food and shelter."
        },
        "4": {
            "backgroundColor":"#fec54f",
            "image": malayantapir,
            "name": "Malayan Tapir",
            "scientificName": "Tapirus indicus",
            "range": "Sumatra / Malaysia / Thailand",
            "description-one": "This interesting snouty specimen is yet another unfortunate victim of deforestation and hunting.",
            "description-two": "Much of the !range is uncontrolled*, allowing illegal logging to continue, and in Sumatra - its stronghold range - it suffers similar issues to other Sumatra-based species from consistent, relentless !loss of forestry*.",
            "description-three": "Hunting pressure has increased by the decline of other hunted species within the range still left, though is currently a secondary threat."
        },
        "5": {
            "backgroundColor":"#f4c3c5",
            "image": lynx,
            "name": "Iberian Lynx",
            "scientificName": "Lynx pardinus",
            "range": "Iberian Peninsula",
            "description-one": "The Iberian Lynx is the world's rarest cat species and could be the first to become extinct since the Sabre-toothed Tiger.",
            "description-two": "!The Lynx's story is tragic*. Rabbits declined dramatically, taking away the most important food storage - !Myxomotosis* spread far and wide through France and Australia, introduced in 1952 by a French gardener attempting to control pests.",
            "description-three": "Little did they know the disastrous effect this would have on such a tremendous species."
        },
        "6": {
            "backgroundColor":"#a8dadc",
            "image": knysnaseahorse,
            "name": "Knysna Seahorse",
            "scientificName": "Hippocampus capensis",
            "range": "South Africa",
            "description-one": "Unlike many of the species in pieces, the Knysna Seahorse's endangerment is !not linked* to human activity.",
            "description-two": "This seahorse rather, resides in such a limited range that events occurring to these estuaries would be catastrophic for the seahorse.",
            "description-three": "!Floods occur* within some of the 3 estuaries - the Knysna, Swatvlei and Keurbooms - and mis-management continues these kind of occurrences could lead to !total extinction*."
        },
        "7": {
            "backgroundColor":"#785ebb",
            "image": goldenfrog,
            "name": "Golden Poison Frog",
            "scientificName": "Phyllobates terribilis",
            "range": "Colombia",
            "description-one": "This vivid dart frog is the !most poisonous species*, but it finds itself under considerable threat.",
            "description-two": "Deforestation in the name of agricultural development, humans settling in the frog's range, logging, and planting as well as spraying for crops have all had a combined effect.",
            "description-three": "Only one !Snake predator* is unaffected by its toxin and terrible taste, but this hasn't deterred international trade, though sparse"
        },
        "8": {
            "backgroundColor":"#f6d860",
            "image": fijiiguana,
            "name": "Fiji Crested Iguana",
            "scientificName": "Brachylophus vitiensis ",
            "range": "Fiji",
            "description-one": "Fiji is a fresh paradise for an array of natural wonders such as one of the only !colour-morphing* Iguanas, the Fiji Crested.",
            "description-two": "However, these forests have undergone consistent and intense degradation through burning, grazing, human settlement and tourism development meaning forestry and beach loss have cost the Iguana dearly.",
            "description-three": "Their small frame signals !easy prey* for beasts such as Black Rats and feral Cats, who also utilise Iguana eggs."
        },
        "9": {
            "backgroundColor":"#ff4d6d",
            "image": diademedsifaka,
            "name": "Diademed Sifaka",
            "scientificName": "Propithecus diadema",
            "range": "Eastern Madagascar",
            "description-one": "This critically endangered Sifaka is under threat from hunting for food, but also primarily !loss of the rain forest* in its range.",
            "description-two": "Despite in theory providing protection, national parks are away from governmental areas meaning that encroaching within the range from local peoples is unmanaged.",
            "description-three": "When hunted, its fur is used for trade and the meat being used for food."
        },
        "10": {
            "backgroundColor":"#74c69d",
            "image": birdwing,
            "name": "Wallace's Birdwing",
            "scientificName": "Ornithoptera croesus",
            "range": "Maluku, Indonesia",
            "description-one": "Named after !Alfred R. Wallace*, this butterfly's struggles would sadden the great naturalist.",
            "description-two": "Located mainly in the Maluku Islands, the lowland areas of forest where the Butterfly resides has been greatly reduced by logging. The deforestation continues today within commercial context.",
            "description-three": "Mosquitos in the area have also posed a problem indirectly - as they are fought off !by insecticides* which also affect this beautiful Birdwing."
        },
        "11": {
            "backgroundColor":"#adb5bd",
            "image": threetoedsloth,
            "name": "Pygmy 3-toed Sloth",
            "scientificName": "Bradypus pygmaeus",
            "range": "Isla Escudo de Veraguas, Panama",
            "description-one": "The Pygmy Three-toed Sloths are situated on a lone uninhabited, protected island of Panama.",
            "description-two": "However, the lack of residents on the island unfortunately doesn't stop visitors and plans to develop tourism on the island causes problems for the Sloth's habitat. ",
            "description-three": "This sloth has become something of a !flagship species*, resulting in interested humans visiting the island to capture them !for captivity*."
        },
        "12": {
            "backgroundColor":"#edb948",
            "image": armadillo,
            "name": "Brazilian Armadillo",
            "scientificName": "Tolypeutes tricinctus ",
            "range": "Brazil",
            "description-one": "The Three Banded Armadillo of Brazil is a hard nut to crack - with only Pumas and Jaguars powerful enough to be a predatory threat.",
            "description-two": "But this species finds itself vulnerable from the !loss of habitat* to allow space for livestock and hunting for food.",
            "description-three": "The armadillo was the mascot of the !2014 World Cup in Brazil*, yet only 3% of its range lies within protected areas."
        }
    }
export default animals;