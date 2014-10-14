angular.module('App', ['Goats', 'ngMockE2E'])
    .run(['$httpBackend', function($httpBackend) {
        var goats = [
            {
                name: 'Alpine',
                image: '//upload.wikimedia.org/wikipedia/commons/thumb/9/91/Chevres_alpines_au_paturage_en_region_Centre.jpg/85px-Chevres_alpines_au_paturage_en_region_Centre.jpg',
                alt: '---',
                origin: 'French Alps',
                purpose: 'Milk'
            },
            {
                name: 'Altai Mountain',
                image: '---',
                alt: '---',
                origin: 'Altai Republic',
                purpose: 'Fiber'
            },
            {
                name: 'American Lamancha',
                image: '//upload.wikimedia.org/wikipedia/en/thumb/7/7e/Tortuga_ADGA_Natl_Show_2006.jpg/85px-Tortuga_ADGA_Natl_Show_2006.jpg',
                alt: 'Lamancha, LaMancha',
                origin: 'Oregon',
                purpose: 'Milk'
            },
            {
                name: 'Anatolian Black Goat',
                image: '---',
                alt: '---',
                origin: 'Turkey',
                purpose: 'Milk'
            },
            {
                name: 'Anglo-Nubian',
                image: '//upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Nubische_geiten.jpg/85px-Nubische_geiten.jpg',
                alt: 'Nubian',
                origin: 'Great Britain',
                purpose: 'Fur and Milk'
            },
            {
                name: 'Angora',
                image: '//upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Quebec_angora_goat.jpg/85px-Quebec_angora_goat.jpg',
                alt: '---',
                origin: 'Central Anatolia Region',
                purpose: 'Fiber'
            },
            {
                name: 'Appenzell Goat',
                image: '//upload.wikimedia.org/wikipedia/commons/thumb/a/af/Appenzell_Goat_%28552849728%29.jpg/85px-Appenzell_Goat_%28552849728%29.jpg',
                alt: '---',
                origin: 'Switzerland',
                purpose: 'Milk'
            },
            {
                name: 'Arapawa',
                image: '//upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Arapawa_dairy_goat.jpg/85px-Arapawa_dairy_goat.jpg',
                alt: '---',
                origin: 'Arapawa Island'
            },
            {
                name: 'Argentata of Etna',
                image: '---',
                alt: '---',
                origin: 'Sicily',
                purpose: 'Milk'
            },
            {
                name: 'Auckland Island',
                image: '---',
                alt: '---',
                origin: 'Auckland Island',
                purpose: 'Meat'
            },
            {
                name: 'Australian Cashmere',
                image: '//upload.wikimedia.org/wikipedia/en/thumb/c/c3/Australain_cashmere_goat.png/85px-Australain_cashmere_goat.png',
                alt: '---',
                origin: 'Australia',
                purpose: 'Fiber'
            },
            {
                name: 'Australian Miniature',
                image: '---',
                alt: '---',
                origin: 'Australia'
            },
            {
                name: 'Bagot',
                image: '---',
                alt: '---',
                origin: 'Rhone'
            },
            {
                name: 'Banatian White',
                image: '---',
                alt: '---',
                origin: 'Banat'
            },
            {
                name: 'Barbari',
                image: '---',
                alt: '---',
                origin: 'Pakistan',
                purpose: 'Meat'
            },
            {
                name: 'Beetal',
                image: '---',
                alt: '---',
                origin: 'Punjab region',
                purpose: 'Milk'
            },
            {
                name: 'Belgian Fawn',
                image: '---',
                alt: '---',
                origin: 'Belgium',
                purpose: 'Milk'
            },
            {
                name: 'Benadir',
                image: '---',
                alt: '---',
                origin: 'Southern Somalia',
                purpose: 'Milk'

            },
            {
                name: 'Bhuj',
                image: '---',
                alt: '---',
                origin: 'Northeastern Brazil',
                purpose: 'Milk'

            },
            {
                name: 'Bilberry',
                image: '//upload.wikimedia.org/wikipedia/commons/thumb/8/80/Bilberry_Goat_resting_%28bad_quality%29.JPG/85px-Bilberry_Goat_resting_%28bad_quality%29.JPG',
                alt: '---',
                origin: 'Waterford'
            },
            {
                name: 'Bionda dell Adamello',
                image: '---',
                alt: '',
                origin: 'Lombardy',
                purpose: 'Milk'
            },
            {
                name: 'Black Bengal',
                image: '',
                alt: '---',
                origin: 'Bangladesh',
                purpose: 'Skin'
            },
            {
                name: 'Boer',
                image: '//upload.wikimedia.org/wikipedia/commons/thumb/9/90/Boerbok.jpg/85px-Boerbok.jpg',
                alt: '---',
                origin: 'South Africa',
                purpose: 'Reproduction'
            },
            {
                name: 'Booted',
                image: '---',
                alt: '---',
                origin: 'Switzerland',
                purpose: 'Milk'
            },
            {
                name: 'British Alpine',
                image: '//upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Goat_at_Offley_-_geograph.org.uk_-_245154.jpg/85px-Goat_at_Offley_-_geograph.org.uk_-_245154.jpg',
                alt: '---',
                origin: 'England',
                purpose: 'Milk'
            },
            {
                name: 'Brown Shorthair',
                image: '---',
                alt: '---',
                origin: 'Czech Republic',
                purpose: 'Milk'
            },
            {
                name: 'Canary Island',
                image: '---',
                alt: '---',
                origin: 'Canary Islands',
                purpose: 'Milk'
            },
            {
                name: 'Canindé',
                image: '---',
                alt: '---',
                origin: 'Northeastern Brazil',
                purpose: 'Meat'
            },
            {
                name: 'Carpathian',
                image: '---',
                alt: '---',
                origin: 'Southeast Europe',
                purpose: 'Milk'
            },
            {
                name: 'Chyangra',
                image: '',
                alt: '---',
                origin: 'Nepal (High mountains) Himalayas',
                purpose: 'Wool, meat'
            },
            {
                name: 'Chamois Colored',
                image: '',
                alt: 'Chamoisee',
                origin: 'Switzerland',
                purpose: 'Milk'
            },
            {
                name: 'Changthangi',
                image: '//upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Pashmina_goats.jpg/85px-Pashmina_goats.jpg',
                alt: 'Pashmina',
                origin: 'Tibet',
                purpose: 'Meat'
            },
            {
                name: 'Chappar',
                image: '---',
                alt: '---',
                origin: 'Sindh',
                purpose: 'Meat'
            },
            {
                name: 'Charnequeira',
                image: '---',
                alt: '---',
                origin: 'Portugal',
                purpose: 'Milk'
            },
            {
                name: 'Chengde Polled',
                image: '---',
                alt: '---',
                origin: 'Northern Hebei',
                purpose: 'Meat'
            },
            {
                name: 'Chengdu Brown',
                image: '---',
                alt: '---',
                origin: 'Sichuan',
                purpose: 'Milk'
            },
            {
                name: 'Chigu',
                image: '---',
                alt: '---',
                origin: 'India',
                purpose: 'Meat'
            },
            {
                name: 'Chué',
                image: '---',
                alt: '---',
                origin: 'Northeastern Brazil',
                purpose: 'Meat'
            },
            {
                name: 'Corsican',
                image: '---',
                alt: '---',
                origin: 'Corsica',
                purpose: 'Milk'
            },
            {
                name: 'Dera Din Panah',
                image: '---',
                alt: '---',
                origin: 'Pakistan',
                purpose: 'Milk'
            },
            {
                name: 'Damani',
                image: '---',
                alt: '---',
                origin: 'Pakistan',
                purpose: 'Milk'
            },
            {
                name: 'Damascus',
                image: '---',
                alt: 'Aleppo, Baladi, Chami, Damascene, Halep, Shami',
                origin: 'Syria',
                purpose: 'Milk'
            },
            {
                name: 'Danish Landrace',
                image: '---',
                alt: '---',
                origin: 'Denmark',
                purpose: 'Milk'
            },
            {
                name: 'Don',
                image: '---',
                alt: '---',
                origin: 'Don River',
                purpose: 'Fiber'
            },
            {
                name: 'Duan',
                image: '---',
                alt: '---',
                origin: 'Guangxi',
                purpose: 'Meat'
            },
            {
                name: 'Dutch Landrace',
                image: '//upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Nederlandse_Landgeit_Bok2.jpg/85px-Nederlandse_Landgeit_Bok2.jpg',
                alt: '---',
                origin: 'Netherlands',
                purpose: 'Milk'
            },
            {
                name: 'Dutch Toggenburg',
                image: '---',
                alt: '---',
                origin: 'Netherlands',
                purpose: 'Milk'
            },
            {
                name: 'Erzgebirge',
                image: '//upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Erzgebirgsziege_mit_Kitz.JPG/85px-Erzgebirgsziege_mit_Kitz.JPG',
                alt: '---',
                origin: 'Saxony',
                purpose: 'Milk'
            },
            {
                name: 'Fainting',
                image: '//upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Fainted.jpg/85px-Fainted.jpg',
                alt: 'Myotonic',
                origin: 'United States',
                purpose: 'Meat'
            },
            {
                name: 'Finnish Landrace',
                image: '//upload.wikimedia.org/wikipedia/commons/thumb/3/30/Finnish_Landrace_goat_in_winter.jpg/85px-Finnish_Landrace_goat_in_winter.jpg',
                alt: '---',
                origin: 'Finland',
                purpose: 'Milk'
            },
            {
                name: 'Garganica',
                image: '---',
                alt: '---',
                origin: 'Gargano',
                purpose: 'Skin'
            },
            {
                name: 'Girgentana',
                image: '//upload.wikimedia.org/wikipedia/commons/thumb/7/7c/GirgentanaZiegen_04.jpg/85px-GirgentanaZiegen_04.jpg',
                alt: '---',
                origin: 'Northern Kashmir',
                purpose: 'Milk'
            },
            {
                name: 'Göingeget',
                image: '---',
                alt: '---',
                origin: 'Sweden'
            },
            {
                name: 'Golden Guernsey',
                image: '//upload.wikimedia.org/wikipedia/commons/thumb/5/51/Golden_Guernsey_goats_eat_pumpkin.jpg/85px-Golden_Guernsey_goats_eat_pumpkin.jpg',
                alt: '---',
                origin: 'Guernsey',
                purpose: 'Milk'
            },
            {
                name: 'Grisons Striped',
                image: '---',
                alt: '---',
                origin: 'Switzerland',
                purpose: 'Milk'
            },
            {
                name: 'Guddi',
                image: '---',
                alt: '---',
                origin: 'Himalayas'
            },
            {
                name: 'Hailun',
                image: '---',
                alt: '---',
                origin: 'Heilongjiang',
                purpose: 'Milk'
            },
            {
                name: 'Haimen',
                image: '---',
                alt: '---',
                origin: 'Zhejiang',
                purpose: 'Meat'
            },
            {
                name: 'Hasi',
                image: '---',
                alt: '---',
                origin: 'Northeastern Albania',
                purpose: 'Milk'
            },
            {
                name: 'Hejazi',
                image: '---',
                alt: '---',
                origin: 'Arabian Peninsula',
                purpose: 'Meat'
            },
            {
                name: 'Hexi Cashmere',
                image: '---',
                alt: '---',
                origin: 'Northern Gansu',
                purpose: 'Fiber'
            },
            {
                name: 'Hongtong',
                image: '---',
                alt: '---',
                origin: 'Hongdong County',
                purpose: 'Milk'
            },
            {
                name: 'Huaipi',
                image: '---',
                alt: '---',
                origin: 'Henan',
                purpose: 'Meat'
            },
            {
                name: 'Huaitoutala',
                image: '---',
                alt: '---',
                origin: 'Qinghai',
                purpose: 'Animal fiber'
            },
            {
                name: 'Hungarian Improved',
                image: '---',
                alt: '---',
                origin: 'Hungary',
                purpose: 'Milk'
            },
            {
                name: 'Icelandic',
                image: '//upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Icelandic_goats.jpg/85px-Icelandic_goats.jpg',
                alt: 'Settlement',
                origin: 'Norway',
                purpose: 'Pet'
            },
            {
                name: 'Irish',
                image: '//upload.wikimedia.org/wikipedia/commons/thumb/3/39/Irish_Goat.jpg/85px-Irish_Goat.jpg',
                alt: '---',
                origin: 'Ireland',
                purpose: 'Milk'
            },
            {
                name: 'Jamnapari',
                image: '---',
                alt: 'Jamunapari',
                origin: 'Indian subcontinent',
                purpose: 'Milk'
            },
            {
                name: 'Jining Grey',
                image: '---',
                alt: '---',
                origin: 'Shandong',
                purpose: 'Skin'
            },
            {
                name: 'Jonica',
                image: '---',
                alt: '---',
                origin: 'Province of Taranto',
                purpose: 'Milk'
            },
            {
                name: 'Kaghani',
                image: '---',
                alt: '---',
                origin: 'Hazara',
                purpose: 'Meat'
            },
            {
                name: 'Kalahari Red',
                image: '//upload.wikimedia.org/wikipedia/commons/thumb/0/00/Dikkes_-Original_Resolution-.jpg/85px-Dikkes_-Original_Resolution-.jpg',
                alt: '---',
                origin: 'South Africa',
                purpose: 'Meat'
            },
            {
                name: 'Kamori',
                image: '---',
                alt: '---',
                origin: 'Sindh',
                purpose: 'Milk'
            },
            {
                name: 'Kinder',
                image: '//upload.wikimedia.org/wikipedia/commons/thumb/d/da/Kinder_Goat_Herd.jpg/85px-Kinder_Goat_Herd.jpg',
                alt: '---',
                origin: 'United States',
                purpose: 'Milk'
            },
            {
                name: 'Kiko',
                image: '---',
                alt: '---',
                origin: 'New Zealand',
                purpose: 'Meat'
            },
            {
                name: 'Korean Black Goat',
                image: '---',
                alt: '---',
                origin: 'Korea',
                purpose: 'Meat'
            },
            {
                name: 'Kri-kri',
                image: '//upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Kri_kri.jpg/85px-Kri_kri.jpg',
                alt: 'Cretan, Agrimi, or Cretan Ibex',
                origin: 'Eastern Mediterranean',
                purpose: 'Meat'
            },
            {
                name: 'La Mancha',
                image: '---',
                alt: '---',
                origin: 'La Mancha',
                purpose: 'Milk'
            },
            {
                name: 'Laoshan',
                image: '---',
                alt: '---',
                origin: 'Shandong',
                purpose: 'Milk'
            },
            {
                name: 'Majorera',
                image: '---',
                alt: 'Fuerteventura',
                origin: 'Canary Islands',
                purpose: 'Milk'
            },
            {
                name: 'Maltese',
                image: '---',
                alt: '---',
                origin: 'Malta',
                purpose: 'Milk'
            },
            {
                name: 'Massif Central',
                image: '---',
                alt: '---',
                origin: 'France',
                purpose: 'Meat'
            },
            {
                name: 'Messinese',
                image: '//upload.wikimedia.org/wikipedia/commons/thumb/2/2d/MessineseGoatBuck.JPG/85px-MessineseGoatBuck.JPG',
                alt: 'Nebrodi',
                origin: 'Province of Messina',
                purpose: 'Milk'
            },
            {
                name: 'Mini Oberhasli',
                image: '//upload.wikimedia.org/wikipedia/commons/thumb/9/94/Aberdeen-door.jpg/85px-Aberdeen-door.jpg',
                alt: 'Oberian, Miniature Oberhasli',
                origin: 'Pacific Northwest US',
                purpose: 'Milk'
            },
            {
                name: 'Mountain Goat',
                image: '',
                alt: 'Moxotó',
                origin: 'Northeastern Brazil',
                purpose: 'Meat'
            },
            {
                name: 'Murcia-Granada',
                image: '---',
                alt: 'Murciano Granadina',
                origin: 'Southeastern Spain',
                purpose: 'Milk'
            },
            {
                name: 'Murciana',
                image: '---',
                alt: 'Murcian, Murcien, Murciene, Royal Murciana',
                origin: 'Murcia',
                purpose: 'Milk'
            },
            {
                name: 'Nachi',
                image: '---',
                alt: '---',
                origin: 'Punjab region',
                purpose: 'Meat'
            },
            {
                name: 'Nigerian Dwarf',
                image: '//upload.wikimedia.org/wikipedia/commons/thumb/a/ac/NigerianDwarfDairyGoat.jpg/85px-NigerianDwarfDairyGoat.jpg',
                alt: '---',
                origin: 'West Africa',
                purpose: 'Milk'
            },
            {
                name: 'Nigora goat',
                image: '//upload.wikimedia.org/wikipedia/commons/thumb/7/77/EARLY_ANGBA_NIGORA_GOATS.jpg/85px-EARLY_ANGBA_NIGORA_GOATS.jpg',
                alt: '---',
                origin: 'United States',
                purpose: 'Milk'
            },
            {
                name: 'Norwegian',
                image: '---',
                alt: '---',
                origin: 'Norway',
                purpose: 'Milk'
            },
            {
                name: 'Oberhasli',
                image: '//upload.wikimedia.org/wikipedia/commons/thumb/5/59/Oberhasli_Goat_face.jpg/85px-Oberhasli_Goat_face.jpg',
                alt: 'Swiss Alpine',
                origin: 'Oberhasli',
                purpose: 'Milk'
            },
            {
                name: 'Orobica',
                image: '---',
                alt: '---',
                origin: 'Bergamo Alps',
                purpose: 'Milk'
            },
            {
                name: 'Peacock',
                image: '---',
                alt: '---',
                origin: 'Switzerland',
                purpose: 'Milk'
            },
            {
                name: 'Philippine',
                image: '---',
                alt: '---',
                origin: 'Philippines',
                purpose: 'Meat'
            },
            {
                name: 'Poitou',
                image: '//upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Poitou.jpg/85px-Poitou.jpg',
                alt: '---',
                origin: 'Western France',
                purpose: 'Milk'
            },
            {
                name: 'Pygmy',
                image: '//upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Pygmy_Goats_Seattle_Zoo.jpg/85px-Pygmy_Goats_Seattle_Zoo.jpg',
                alt: '---',
                origin: 'Cameroon',
                purpose: 'Pet'
            },
            {
                name: 'Pygora',
                image: '//upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Oregon_Zoo_White_Goat.jpg/85px-Oregon_Zoo_White_Goat.jpg',
                alt: '---',
                origin: 'Oregon City',
                purpose: 'Fiber'
            },
            {
                name: 'Pyrenean',
                image: '//upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Ch%C3%A8vre_Pyr%C3%A9n%C3%A9enne.JPG/85px-Ch%C3%A8vre_Pyr%C3%A9n%C3%A9enne.JPG',
                alt: '---',
                origin: 'Spain',
                purpose: 'Milk'
            },
            {
                name: 'Qinshan',
                image: '---',
                alt: '---',
                origin: 'Jining',
                purpose: 'Skin'
            },
            {
                name: 'Red Boer',
                image: '---',
                alt: '---',
                origin: 'South Africa',
                purpose: 'Pet'
            },
            {
                name: 'Red Mediterranean',
                image: '---',
                alt: '---',
                origin: 'Syria',
                purpose: 'Milk'
            },
            {
                name: 'Repartida',
                image: '---',
                alt: '---',
                origin: 'Northeastern Brazil',
                purpose: 'Meat'
            },
            {
                name: 'Rove',
                image: '//upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Chevres_Rove_BdRhone.jpg/85px-Chevres_Rove_BdRhone.jpg',
                alt: '---',
                origin: 'France',
                purpose: 'Meat'
            },
            {
                name: 'Russian White',
                image: '---',
                alt: '---',
                origin: 'Russia',
                purpose: 'Milk'
            },
            {
                name: 'Saanen',
                image: '//upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Saanenziege.jpg/85px-Saanenziege.jpg',
                alt: '---',
                origin: 'Saanen',
                purpose: 'Milk'
            },
            {
                name: 'Sable Saanen',
                image: '---',
                alt: '---',
                origin: 'United States',
                purpose: 'Milk'
            },
            {
                name: 'Sahelian',
                image: '---',
                alt: '---',
                origin: 'West Africa',
                purpose: 'Milk'
            },
            {
                name: 'San Clemente Island',
                image: '//upload.wikimedia.org/wikipedia/commons/thumb/7/75/San_Clemente_goat_kids.jpg/85px-San_Clemente_goat_kids.jpg',
                alt: '---',
                origin: 'San Clemente Island'
            },
            {
                name: 'Sarda',
                image: '---',
                alt: '---',
                origin: 'Sardinia',
                purpose: 'Milk'
            },
            {
                name: 'Swedish Landrace',
                image: '---',
                alt: '---',
                origin: 'Northern Sweden',
                purpose: 'Milk'
            },
            {
                name: 'Somali',
                image: '//upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Somgts1.jpg/85px-Somgts1.jpg',
                alt: '---',
                origin: 'Kenya',
                purpose: 'Skin'
            },
            {
                name: 'Spanish',
                image: '//upload.wikimedia.org/wikipedia/commons/thumb/a/ae/U_Wash_-_goats_04.jpg/85px-U_Wash_-_goats_04.jpg',
                alt: 'Brush, scrub',
                origin: 'Spain',
                purpose: 'Meat'
            },
            {
                name: 'Stiefelgeiss',
                image: '//upload.wikimedia.org/wikipedia/commons/thumb/1/18/Stiefelgeiss.jpg/85px-Stiefelgeiss.jpg',
                alt: '---',
                origin: 'St. Gallen',
                purpose: 'Meat'
            },
            {
                name: 'Surati',
                image: '---',
                alt: '---',
                origin: 'Maharashtra'
            },
            {
                name: 'Tauernsheck',
                image: '//upload.wikimedia.org/wikipedia/commons/thumb/3/33/Tauernschecken_St%C3%BCbing_062.jpg/85px-Tauernschecken_St%C3%BCbing_062.jpg',
                alt: '---',
                origin: 'Austria',
                purpose: 'Milk'
            },
            {
                name: 'Thuringian',
                image: '//upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Thueringerwaldziege.jpg/85px-Thueringerwaldziege.jpg',
                alt: '---',
                origin: 'Thuringia',
                purpose: 'Milk'
            },
            {
                name: 'Toggenburg',
                image: '//upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Toggenburger.jpg/85px-Toggenburger.jpg',
                alt: '---',
                origin: 'Toggenburg',
                purpose: 'Milk'
            },
            {
                name: 'Uzbek Black',
                image: '---',
                alt: '---',
                origin: 'Uzbekistan',
                purpose: 'Fiber'
            },
            {
                name: 'Valais Blackneck',
                image: '//upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Wallische_bok.jpg/85px-Wallische_bok.jpg',
                alt: '---',
                origin: 'Southern Switzerland',
                purpose: 'Milk'
            },
            {
                name: 'Verata',
                image: '---',
                alt: '---',
                origin: 'Vera',
                purpose: 'Milk'
            },
            {
                name: 'West African Dwarf',
                image: '//upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Kabala_goats.jpg/85px-Kabala_goats.jpg',
                alt: '---',
                origin: 'Central Africa'
            },
            {
                name: 'White Shorthaired',
                image: '---',
                alt: '---',
                origin: 'Czech Republic',
                purpose: 'Milk'
            },
            {
                name: 'Xinjiang',
                image: '---',
                alt: '---',
                origin: 'Xinjiang',
                purpose: 'Milk'
            },
            {
                name: 'Xuhai',
                image: '---',
                alt: '---',
                origin: 'Jiangsu',
                purpose: 'Meat'
            },
            {
                name: 'Yemen Mountain',
                image: '---',
                alt: '---',
                origin: 'Yemen'
            },
            {
                name: 'Zalawadi',
                image: '---',
                alt: 'Tara bakari',
                origin: 'Gujarat',
                purpose: 'Milk'
            },
            {
                name: 'Zhiwulin Black',
                image: '---',
                alt: '---',
                origin: 'Shaanxi',
                purpose: 'Meat'
            },
            {
                name: 'Zhongwei',
                image: '---',
                alt: '---',
                origin: 'China',
                purpose: 'Skin'
            }
        ];

        $httpBackend.whenGET(/views.*/).passThrough();

        $httpBackend.whenGET('/goats').respond(goats);

        $httpBackend.whenGET(/goat\/.*/).respond(function(method, url, data) {
            var name = url.split('/')[2];

            return [200, _.find(goats, {name: name})];
        });

        $httpBackend.whenGET(/\/goats\/search\/.*/)
            .respond(function(method, url, data) {
                var query = url.substr(14);

                var result = _.filter(goats, function(goat) {
                    return _.contains((goat.name + goat.alt + goat.origin + goat.purpose).toUpperCase(), query.toUpperCase());
                });

                return [200, result];
            });

        $httpBackend.whenPOST('/goats').respond(function(method, url, data) {
            data = angular.fromJson(data);

            _.each(goats, function(goat, index) {
                if (goat.name != data.name) return true;

                _.extend(goats[index], data);

                return false;
            });

            return [200, goats, {}];
        });
    }]);
