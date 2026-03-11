'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "4e6e299954d61454f127278380746ecf",
".git/config": "ba4235ece9efba71609c328f9f4f0d9c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "cbe4bf7588b567430c4857f22fc60937",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b7ee9e907f16c449f1318d7df4aa3971",
".git/logs/refs/heads/main": "654f98e56f8263602922e04cd43fe84c",
".git/logs/refs/remotes/origin/main": "55db940a342d385032022aabbea63eb0",
".git/objects/01/4d0808eb912e542f87e3e7434899260d6289d3": "d128d9bd58106fc6861590874f162a06",
".git/objects/02/4ef114dfe763dc5e4cb0ef31cada5d25781b74": "08dc9a27218d17b153934a50d2f30701",
".git/objects/02/6a31da68565a1cfb557f6fba307a35dfef0fe2": "07e3cd27cd6aa50f849290b637596c8f",
".git/objects/03/f05b6e1e83cef71e6cc1cd671ec3958a7332df": "f18b67141763c62c5ade3a0900df688e",
".git/objects/08/27c17254fd3959af211aaf91a82d3b9a804c2f": "360dc8df65dabbf4e7f858711c46cc09",
".git/objects/08/cb679e379b35cd36ed4a660e47bd04e6700974": "3e2a423889964f9b62da2e678b66bf17",
".git/objects/0a/8225732e65d2a7f1c97368d3303dc8dccd23e3": "216aee06f5484c5c9f84ba6356dfd50a",
".git/objects/0a/f817a892873ddbb00c3edfa0ae6529ca036b16": "a86fedef593e3c7ee600222cf0a0a615",
".git/objects/0b/11c877d64f80d70534b55f5cfa6cf46bcc4276": "7f5146dfa7a50a28550051318c2dfc0b",
".git/objects/0c/924e3ae042b94a2ba695b836ef69384919ea8f": "fa6c2839b17b726dd6a126376ed6ea02",
".git/objects/0e/3c5476fe8f2c36a8d1311a73c21228f4fcf732": "a5da08a02419a27d1518f64d00e88752",
".git/objects/0e/c74f9b1fb53889557b01d546432f162303a449": "1f1ecfa571c76f823ad575dabfea5882",
".git/objects/0e/f9c8733c707c732a91d10fe8ee05855ccc7698": "e898540c1607b8df635130245a398f83",
".git/objects/0f/17a290e17d1fe109af831502fe755f4bf03624": "1f263a3672116ca6f81717d833f531b2",
".git/objects/12/9748fb8f393ba3d63981d5119e999c01cc3a17": "9ab38e1b74a3452119762edb333f490f",
".git/objects/12/ce63d41350545813fd88010a3c51b108ee9e25": "9b1fc39f7c43f5dd76ac3a994cea6a97",
".git/objects/13/45491dc93cdef1dd7c4819834fb5a75641be1b": "780a07f419da0a628de1cf7f8f3e4341",
".git/objects/17/48124a63da2aa8f62c32983500ab6deaf3cbbc": "cca255d1b41151f37a7a210a4a4fac07",
".git/objects/17/6aa5c5fa90e93006c86bef18daf706c9c2b685": "8a07acd5611d485eb8a6cdf70720c8d1",
".git/objects/1b/aa5b85bab40ef8a3259b41903414d9182cc41a": "7c252fc25d8a5b2586f4bd5a26b1da41",
".git/objects/20/2b9d856d9569a61501062618e3af08b5c3ba13": "49601d4add7109cd334a6f4aedde7a64",
".git/objects/21/1bb51a2db1db04d59b5e09000e0ff831599648": "27d3529926599f5a59946e5bf9bb210e",
".git/objects/21/66ab58e74954479c8d92e40b4764b6af123970": "9994f0f8d0fececbea9c8400a8aa432e",
".git/objects/21/67029f0b54a4f8abe59b51811c3d1b0c559a12": "2db8e275bfffd5ad7f12616a29a3d351",
".git/objects/26/5c04c2f61f7225f45dfda83bd4ba004c70dc9d": "3dbdfd62ab94b68b1ce7acf170bc8f64",
".git/objects/26/6d97125af901c02fc45f1c995bc23c5c0ddbd2": "c64be37da76cfe107f3421b0b810421b",
".git/objects/28/0686ac26fe8daef9ed69925998f2e241462e0c": "3e6f4d461ae51eb144743bdc3c45dbe5",
".git/objects/2b/11a13d76e4fe36eec2225c98b8b6e2e461a43a": "40d77991ada17a14989351d324d9fbd4",
".git/objects/2b/a9b56074fc164dcaaf46a2c95d85fa0c61a96b": "3f9093dbb7b6ebfc4d43fa233503ba90",
".git/objects/2f/0ada215132671f6297d50f8453d76f333a4bc2": "07b3d0527dfc4a322a22b1aaeecb8f5a",
".git/objects/32/752613bdd85c449245ca35edfc7a1f3a5b7513": "631ba8f0bf84622eee858e4d59a6a120",
".git/objects/33/fbbd67be3bc797aeff4d487c24acdd47d74b20": "e67cc67e98aa7abb2b2e2c6a547088f2",
".git/objects/35/75078e5170d43deb9cdd3fd988197abcb802b0": "b1aee8a7c461778f2b44ea2cf48f2a26",
".git/objects/36/a5f9e3e0ff5e2f50e34653a666003c52095818": "8de8d2821a175f37bbe3202f80d7ffac",
".git/objects/39/8db543755b23df6c504d726820dd6dc5cc74f9": "79f119c7f69066d0f22a8453527af6c6",
".git/objects/3a/4b7de7e1a85039b18d5b8193013be327e75880": "4ac9ef3251a690c43c4157b2140fa11f",
".git/objects/3a/8cda5335b4b2a108123194b84df133bac91b23": "1636ee51263ed072c69e4e3b8d14f339",
".git/objects/3d/fe4a4d131226f0bc9189cf701e5163f0b55ef9": "cbcc593b0ae2ac33452a1edaa8e71b65",
".git/objects/3e/f34020ad619c78c7ad55b9a8667c5ca2fe6d60": "f35bb07f15163d6dc7e5ccc804a90bbb",
".git/objects/3f/06ecb16559de3e1a716d2eaff73a92dee9e324": "5674623a9bc7f0495c5a26561bbdab39",
".git/objects/42/01cbd6a3c1eb8ab9d062af4e5ef7fdb9fbbe8b": "bef5acb588abf7a50eea84708f37d986",
".git/objects/42/a493e89b21163380038b79299898dcfbeb0fa9": "6e936ac0ee6e8f3e6d05f089b1df2629",
".git/objects/44/316e0945c1d13178280937af1cbcdb496c0694": "7029e0824d4d1c8c1dfab73f63b000d1",
".git/objects/45/66483a2497106ba11d45dd2fd572e5c599450c": "676da7a7e89e1362b7f909fe23298e05",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/2530cd2c116994cccb80e56addacb24f9a2816": "57229b99feb24bc19bb9e004bf653b7a",
".git/objects/47/bb68c33d6e006c835855067644f7847e3409f9": "73eab75cc487917e3e68a99a2e879dc8",
".git/objects/48/871a82fc2dfddb5fbe9cff7b18ca5d18df70d3": "20eea833fd0c2b42fbf73c93ff061b1e",
".git/objects/4a/625d8dd7e9d7000f6b6cc7bc5a72c4214c5036": "bff0ca7fcd3a2329cc2befada7cee23b",
".git/objects/4b/da3a206bcb3970477db6475c867fddc6eb8d28": "4ce59b5f61e8f066edab5534e6dce270",
".git/objects/4d/bf86034c52f2fd848e20619150135da028fc39": "3385e3c7813e780f49a6f57945b4b037",
".git/objects/4d/c48590b9340347b1c8805da03b345cbdd2d4ad": "2c2a7e22408015cac140600b59087788",
".git/objects/4e/9c3a6aa36751d8268aef144ee330db5172aa4e": "c90d2c1b4212f703367a7c7234d2c25f",
".git/objects/4f/28abcda37c4bf09dd5cfacdc5c1551471d5aa1": "36759e2cdcab2f7a74c52dad5adbdf57",
".git/objects/4f/ef8b0431fba10aeed40553c6506957fca349b3": "9dd6c07ae39609a70eea315f0ea22b07",
".git/objects/50/d82b5b34cd14680bd178093061e93642c84748": "c4932ee4bcc082db524e6906fc6e388d",
".git/objects/50/dfbccb9975b7f9d3cf678236093aa593ce12d9": "cb36b96ab19a06a7a952435e881a9c68",
".git/objects/50/fe8fdf73d5d8e042c010891da120101392893c": "9c14331d0223e3cbb60d96988d2bb58c",
".git/objects/51/03e757c71f2abfd2269054a790f775ec61ffa4": "d437b77e41df8fcc0c0e99f143adc093",
".git/objects/51/dd44851ddca9e0703b9b9e19e3f9c270a3a294": "37c8b372d330a2d18825fbab5f11bb00",
".git/objects/53/e841a866db70b614cf2b9ed182b8d0523e3b02": "07a7c7212fb842d38e7e7295c95de2bf",
".git/objects/55/0fa22d980e2ce138549e52b7eda99ef84de8cf": "7d342ec33a4fc31cd5e5faf2901f699e",
".git/objects/5e/42e342fb14beba2ffc80582e25522f5e4c766e": "1155014393a1843a6e9295554965a811",
".git/objects/5f/1a805a4fb624c35a53a367d68efd25e3ea5733": "9604d1871f798a0c88c5c62eaf169433",
".git/objects/5f/af9edc896b99c3afdccb087c5f3adf89234e9b": "e51e9830a92b5557ff86597b039931cb",
".git/objects/60/0d20dd7e8761b1c9c99a3aea4e553cda3c7a99": "5056cea150b7bfb14cb468476f1f9269",
".git/objects/60/69a440d7e9af7a5982fa3bcc20402ff18c5503": "c96f155e5ef384700dea5db6f57d0644",
".git/objects/60/b59828048bea84eb6c72f18c2dddd6214d0383": "efab9f4724343581d11760846193304d",
".git/objects/61/d1bac547877f33ccbcd6bd4123da6e91631921": "46909a7ce02fb22e89033f9313681c3c",
".git/objects/61/e6fb2d53627985ac3423700d89b42727b10766": "fc02af3f802e73ef4678ff3cc689ae95",
".git/objects/63/14f5c13e55f4856026e9d7ba803f271b9d1e99": "82d3bda3fd4d790c48f68315dfdaa0f6",
".git/objects/63/19cfee62d7967062af0884238848e2131303ba": "a976c0152bc6f3d7dd534c0f9beb6f43",
".git/objects/63/6459e027864c890163ff771b87722eea75d458": "fc254b993535b9acc23bc487c5f2e6ed",
".git/objects/67/0c8ff7fa277ad54e71985bc9205e42326465da": "c5bf49bb3f53f68a045d2d8310cc4e12",
".git/objects/68/43fddc6aef172d5576ecce56160b1c73bc0f85": "2a91c358adf65703ab820ee54e7aff37",
".git/objects/68/a0edf1c1e1a189d6a2163a5a91f3fae4110e8f": "e0599e01065b0ed6ef9f1322ae79bf96",
".git/objects/6a/7134500db8f189381da51b7942dacce09b2788": "b35a01d61c2e33bf4954378e52663d15",
".git/objects/6b/197641fd14b2b6f586391a936c6747ead0cadf": "c4dc8a2017cc5424615e4f610a6c700c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6d/f38fab6dd65f20a9045f8f641ebd357cedab98": "7df8659d6a100515bc0265ff4e4892d8",
".git/objects/6e/a162fea8688faf947f6411c7642c8b30180f73": "a3c3ac1c2fc9a22d1355fecde2f20db5",
".git/objects/6f/7661bc79baa113f478e9a717e0c4959a3f3d27": "985be3a6935e9d31febd5205a9e04c4e",
".git/objects/70/538655d1a9ebc9ff7289515d6fed79ce7dd809": "8bc182edcfdc309fe1e2200795e6e871",
".git/objects/71/66881f9e040b05039fcaa419ea71a8b1b63539": "fdbcd999a61b0b3f8c8094de81884627",
".git/objects/73/4f4670acbf5cb445e28a459ba94a1edbf68e42": "3b76a18c3809e68332b41debb3042abe",
".git/objects/74/19d3889aaddfcfa256fb28d0f7442e3527b703": "d1d7678ce085af90901826f5bf117e2a",
".git/objects/75/3f2d716ddac37962b254fde3ca2902ed49aad8": "e8442402daad9d2b3b39a95a3e715211",
".git/objects/75/a709088ff32fee33079b9a79f7bbf6ea63a149": "cf77956f1c3a52c86338c30471de5b96",
".git/objects/75/fa68c3209f3c94bc3cad1675134195098720a2": "2a190b103a12f56f018f336e9b9255e7",
".git/objects/76/d2159bc4a9473214796c19b48fcc6269410ce4": "4f44a2c83ea66a764d013f15569fc5b6",
".git/objects/7a/9bb4494476461d4a5819079c7b4a55c38283f4": "7a8fe3a5a41a60af923aaed84e3058f6",
".git/objects/7c/3463b788d022128d17b29072564326f1fd8819": "37fee507a59e935fc85169a822943ba2",
".git/objects/7c/8dcb8a2f9a92de3e37e6063bb52ca75ab4252c": "e2f752a6eeae167591267f56e3499b7f",
".git/objects/7e/76ced2364a60503c097a438b54600c723aae8b": "16b7897c83c297698250fabef2d4bf27",
".git/objects/7e/77b3cf40d2e5899ca4611e907399de817a18a5": "c8dc356d5129efcec23d5666dcdde629",
".git/objects/7f/b04ec87d9214d47d1152606a3aa59eed299465": "cdc2adce51345d65043e713ce4379f99",
".git/objects/80/c9076f6636afdb65478d1c0a72983b6cdb9140": "fcd56689a48bd408f9e3c70ccbdc6e64",
".git/objects/84/b8ac9b822f44333fdbda9deda0cdca1e2fdbcd": "91c95cce4f22788fb5cbb57594616850",
".git/objects/85/63aed2175379d2e75ec05ec0373a302730b6ad": "997f96db42b2dde7c208b10d023a5a8e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/1e71af3b4552756bf69b89220d0c9a9bcb0d5e": "ed7faa9ec29fa642a84b0d0b534e2847",
".git/objects/8e/21753cdb204192a414b235db41da6a8446c8b4": "1e467e19cabb5d3d38b8fe200c37479e",
".git/objects/8e/6d97498dec5991f240b4f6061cfafdef7a978d": "6a0b6884baaf2ca15b3709b2e868ae85",
".git/objects/8f/4954817274790981971298de190a7088b28244": "f8fb36ff3d77d2db2a9f3022ec345f83",
".git/objects/92/4bb8d1ff4b32e393c5f9eaf2ada2a1d57cc132": "e6d6228dcfa5f01e181630a3597e0153",
".git/objects/92/a7e0f5535007bba85b9f9251a571775cb6f273": "9d212911c02a103221660f2287607f2a",
".git/objects/93/b363f37b4951e6c5b9e1932ed169c9928b1e90": "c8d74fb3083c0dc39be8cff78a1d4dd5",
".git/objects/94/f9d4c295cb2402d828a7e9ecbed53e361714d5": "b7a7220a9dbc0a19ff32c7f8ccba528d",
".git/objects/95/e0bad27e39cae7a771d5976e349dee6ea13366": "b82af9aee30f31dbc0c3a4645f043873",
".git/objects/96/980dc904342f20456e2be0e4da250d4710163a": "82397443dd23afcb7ef82ce1758c47c0",
".git/objects/99/45168c9f4096afbcb55dde161348eaf8fdc151": "4bc9cc3b8124dd85225d3a0776d39437",
".git/objects/9d/6b7552895a4fde28be1d2c7c6f1743d95693b8": "5bfd46b59045cad0201bdc9c662a7c78",
".git/objects/9e/138e2864e0b9f642b4cb631495b814bd35af3d": "6a77a7c8edd3914275077d2dd1741ea2",
".git/objects/9e/80ad0c8314982a05b63ff998b051d6b5ef7b19": "609bff673a116e52c0ee599ef9cb9277",
".git/objects/9e/86fd89d40339d6e12ac26a566ea7fbf4c2a3fc": "b9f70c96738de08ed360d15fd87ba078",
".git/objects/9e/99887cfaeb625fba209ad828096f3943068428": "0a74d08615ccf0095f84813c4ba9514e",
".git/objects/a0/a96ed6b22b9612456159c82a0f5702bd3b3d6b": "383bd4314526b016ca85ffe72435b85f",
".git/objects/a2/153d6b78d99e0649f13647690cfcdbfcfb10c1": "c88d3d349f17139d3c8ef3e21d401275",
".git/objects/a3/cf4b00a251508f39f3d1b11c0acaab83280651": "4228a8790f8265fa8b8ee1aa3cd6f61d",
".git/objects/a5/80ccc2359d7506ea7fbbdae4ede59313dfe1bf": "257c5d4fb3811a42f5b79035640f0e46",
".git/objects/a6/16bd5a710110ed9029c208690ccf3a58196dec": "2447988562442e3b768801b2a75adb6f",
".git/objects/a6/2a0d9435b11f0c0419c2b46bd0d17b93e1f843": "4be45da5e416509d0b308cf0de1ec0a5",
".git/objects/a7/3f4b23dde68ce5a05ce4c658ccd690c7f707ec": "ee275830276a88bac752feff80ed6470",
".git/objects/a7/434a115651956a20dd969a68d711bb328d3f49": "6f644a226d6f7db531d57c57a28fbe4f",
".git/objects/a8/50a5f87cead7bd360145d98b560793f727d26b": "7bbd776a491be0975ce8b320057392f4",
".git/objects/ac/86bb9d62368a426b4b066ef8b471b8e46798ca": "2a2c5531b68c39ad5328e0262e96e0c2",
".git/objects/ac/ffaff74d370937bd45fd369ecefeeff56b91aa": "88cf33b5b9dd63cdb0bda8808cbcbdab",
".git/objects/ad/ced61befd6b9d30829511317b07b72e66918a1": "37e7fcca73f0b6930673b256fac467ae",
".git/objects/ae/2f798ddddb448ea4742f59c7318af808d314e4": "68b7d6079df0399c9ebeb149563b0521",
".git/objects/b0/22ae4340d9e196850b3b5f12652a809d3e648d": "9d9a8778cef383c3059b506a52230c7f",
".git/objects/b4/a4473236462d84478a0621afa6bcf4ebe26863": "64c5aba87ccc3e37f1d9f37f83f2460d",
".git/objects/b5/0a5c432f2d6b5226c6f871dad37afe7ad22624": "f4a336e36ee58004700de79b9ab9922e",
".git/objects/b5/62f9d1018d34366318846d8da5f9b22b975efb": "e672c696948d674ea1b112b6ec5289a5",
".git/objects/b5/9017973409d82e33b32cb941b5a13e595016b9": "96868d56c315158015ac79005eba8444",
".git/objects/b5/91a41bebbce7c594273bdcb05b0ac5ff762a97": "5c723533e70f3ad84db84374229b9842",
".git/objects/b5/b59ef4c226169f728efcab9104f32b440dec3c": "dd8bc9f410d3055bc5a9b8c913628f73",
".git/objects/b5/e29c122567dd36cf647e89d28847964076d864": "d425dec8eda8a7122e69bb89b940eb46",
".git/objects/b6/01ebdabffc9f905331821224f81a7f7f12f0c8": "a3795236cbc47a94fca2dd25a1b60500",
".git/objects/b6/263446e9de5692f017305e31e1123c81b47433": "422207ea1c28672772ade9fa2ec9260e",
".git/objects/b6/7483ba38342a9ae034c22551e55830cbe3cc04": "735af6d5cf5002cb2b444efacbd2cbf1",
".git/objects/b6/944d0c78a7995678d976191a1c310807315cb2": "5d1f3af0680bd42c85d64324d25b8fec",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/5e8161f5adbacb4cb1cf030073a3151abf97c0": "56c09f05724d245c2d77be38f8d2d0d6",
".git/objects/b7/f2b1b56c439f95c2124f9fd371d394bcd3de9d": "eb19fc53f6ffed002d6f322e883efaa0",
".git/objects/b7/ff1f52f5e8e070247b0acaf726a1726242ee4f": "df79392de11448a7e55f5420d7a8e69b",
".git/objects/b9/0637eec7c38f0a18bcfcd41a74d5039d61381e": "31bf63cd88223cc650ce25d899995411",
".git/objects/b9/237bb5c7d5a15e54394eac1b1052c732966a48": "8216c0227b5f33383da678c2d0dc1b81",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/3e39bd49dfaf9e225bb598cd9644f833badd9a": "666b0d595ebbcc37f0c7b61220c18864",
".git/objects/b9/3ecce621f827155dcc8b54f56ee8ca00e020f9": "d51d11430911a72224bb53147cb00217",
".git/objects/ba/e9e0b925097cf0d2685b4dc565965bea53cf4e": "f5f06696f31f8e365a150e62bdd60463",
".git/objects/bb/876a4227ee16d1a9ff6388fd85dff1aa29ba2b": "427269ac64c9b806248e79916bae221c",
".git/objects/bd/d2fb1ccadcd2fe461eebfffa4a1e5eb9577724": "6f502e4efc226dba7b7ae16ac96e2100",
".git/objects/be/aa2a855fb4f0c845a2948bfed41c756fa54f60": "43088f2b1923f68e45682eb9669b9a5d",
".git/objects/bf/aed0718e46539a08a8e847f05b894c2cecb587": "def483fa77ab54e6b41e1569fa8c33b6",
".git/objects/c1/0fcb842580fb4f7a7f5ca93cb92f856c73089d": "e7cb02193787637df7fc653a036adaa8",
".git/objects/c2/fe1a2f82560dde1479dd217b09a2aae68cd243": "39ea0ce1e4914f96c73fff90f9d1f45b",
".git/objects/c4/0192ae2966514e68b60a740668a64c3920d804": "f0be81fd922cf7baa6ecb593a3be9996",
".git/objects/c5/7785fec6526101ac2c513de4adc6bd17c12a11": "261c8bcc3c8d9d8e1394c9109a52d247",
".git/objects/c7/3378c39c293e50e7c32b377af7f26d9adb7e3c": "572bd63ef86da7f693b1af3cb2b74821",
".git/objects/c7/d592a6776760d8e126bebb9132b33d32173c99": "0f153f41e22260a10cd3b0665d73170d",
".git/objects/c8/3af99da428c63c1f82efdcd11c8d5297bddb04": "144ef6d9a8ff9a753d6e3b9573d5242f",
".git/objects/c8/898accc16b69e96763187e4dd6cfe315d02d65": "03931736d90959489c22171943dd3ede",
".git/objects/c9/94ca4a3924fa86f04d18da34298d25f8ddea70": "da09acf2e1066a50ed54d30c78d5c39b",
".git/objects/ca/9a2338a35352b88128c53b0e93ab040720d193": "6c6f0bee5d73ed1ff0ed5421ad433955",
".git/objects/cb/a0bcaeca24e5862c168c2f3fe8284083e3d0e2": "1337158c473e35ea405b8aab29d0c732",
".git/objects/cc/6b64b779fe82be044a0fcfd5da02036d1b7b84": "5282d4840c327778b8fd4ffa498adba0",
".git/objects/cc/b9a348dc21c61094794bc488cbbfa43113dfe2": "c59190d04cf29ef68330bc18031004fe",
".git/objects/ce/939147e291371869f6b4b289b6672634d81b9e": "76265645b445ed4caf89fc2cdb50443a",
".git/objects/ce/fd54ab138c5c7bf335c69861abbf0c323dc3e6": "1ac261324ba3dd096d37f0b0eb437af6",
".git/objects/d2/b9164230af2705235b1f456aa590640657f072": "c16499f7b288d8c5d82640a655055fbc",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/09f0010819e7f48b3ff6ccbcf257b8936c3a95": "a869f88349f5f414be27bfa8695c45a5",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/5b1d3499b3b3d3989fa2a461151ba2abd92a07": "a072a09ac2efe43c8d49b7356317e52e",
".git/objects/d9/bd5cd0b7407301d79d7d3fe6b9bb6c831d6952": "83de809b2976c0a12df9aa786d2fa8ee",
".git/objects/da/5f3394f9ae55a02221785eb68338154789e71c": "0cf1bdfc889e6ca80b8edc45b7c02e40",
".git/objects/dc/0d35e76e43c304f73fa03a10026a872d951ba7": "c8c3323a26e6fedca7881d5d0661bb10",
".git/objects/de/3abb4f5f565c281b619027eb865b6c80a422eb": "be04155034782d2de6fba4e298860244",
".git/objects/de/987ff3fc799d2e1902efd0116c20bf90c6995e": "e610d45e761bd5eb4d740541ccd442b5",
".git/objects/df/e7bbb9776d7b59d026b3ff67a61dee40658588": "b812181475ef50ee3a0b3d371c00043e",
".git/objects/e0/1a0d8968e6c80a1f22af9304d3b9fb8a790532": "00921ff75b43da6cf680b8bff831f0e4",
".git/objects/e0/4a607d009477598475bfa930c502b5c5138ca9": "ccac704500b1fca208945c87edef95fc",
".git/objects/e0/dc768a20a0e6df17c5c5ec60174fea9376cf5f": "13880e5c8aa18c20c4db46373bf63042",
".git/objects/e1/c6db84c81b03fdc2e022708299c3f6bab98b7a": "0af51b3b1f8e51cb51e5b66cead4b9ca",
".git/objects/e6/3c6024dca92ec78e1a7259127916fc32759021": "0ebd2f612901935a805f673657654f35",
".git/objects/e7/f9ef65698cad85e6cba98697a4833f5f41de65": "ff9e6d3f51782b56ec4f0aa44899057a",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/01b3018f0520874c77ba2897107a7edb830549": "867c798abaa2981dad50726301da34fa",
".git/objects/eb/07c6b3badae722971df0c047d191e7b62d03be": "491e86a74220a46cff76809845851523",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/44925839bc21de6bbdb67d043a2783495318de": "6db82029cf528230b704714bb4026f9f",
".git/objects/ec/d71bf7dc1ef99188c77d9eebcd052cbce8add2": "213ba6d8424768f50ecb54eff4eb1ed2",
".git/objects/ed/f30a7394ae79d241d7e9d4ab3d13c5f13edab3": "572c8370e6f2ebf858ee30bedef0c825",
".git/objects/f3/3e0726c3581f96c51f862cf61120af36599a32": "afcaefd94c5f13d3da610e0defa27e50",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/e6c75d6f1151eeb165a90f04b4d99effa41e83": "95ea83d65d44e4c524c6d51286406ac8",
".git/objects/f7/00feda8d541bb03cfe1acc28141177dea95fa7": "119a662df4a65042912acf0c577902bb",
".git/objects/f8/29e619754bba050ab4032dec9164030c4914df": "6075bae4918273b57722715e1b5e0d9d",
".git/objects/f8/dff20996a34368ada4d980f8ca8c476a89870f": "2d08be6716b7504fb768f5773f51485a",
".git/objects/fa/063338cf858fae5d65a9086c0b2338da4d1d6a": "1dd9a169d037ef77a22c4041a474c037",
".git/objects/fd/05cfbc927a4fedcbe4d6d4b62e2c1ed8918f26": "5675c69555d005a1a244cc8ba90a402c",
".git/objects/ff/f28a73126408cd6dbadc7e88b743dfcd44f766": "470939bc7e3b6fd34d9a3ff36c22a88f",
".git/refs/heads/main": "1e6582c1cf3225e5e17ab91e5576aaa7",
".git/refs/remotes/origin/main": "1e6582c1cf3225e5e17ab91e5576aaa7",
"assets/AssetManifest.bin": "48d321359959b246039ae2ca385b8c6c",
"assets/AssetManifest.bin.json": "3bafc8f11fde0b3090df75dc886c81f6",
"assets/assets/%255D%255D.png": "1c48fa014cf27368c2041dc6f92ffce7",
"assets/assets/0.png": "ff3a8923c5fcb9a91af2df4787509ebc",
"assets/assets/000.png": "da98cc7b954de1971fef13f995c7608e",
"assets/assets/0000.png": "2184eb95ace9d32e47d40c01941ca42d",
"assets/assets/000e2fc4657fc2ea217ab171b76d6b8b5e022f10.png": "69075769b70162c17da07fd6bfcd6812",
"assets/assets/11.png": "cd1a21285178589d970c136bdc9d9b5d",
"assets/assets/12.png": "9ae0fe0dade554f8093e744a1d9fa3e0",
"assets/assets/2.png": "74a7c3ad79a3b267231a9e4495f16d49",
"assets/assets/2021_Facebook_icon%25201%2520(2).png": "9af03250a0ac6f069635f823811bb5b2",
"assets/assets/3.png": "2520f12fef684a1829ab7c5f58d80140",
"assets/assets/321.png": "4939a69cc1f358e5a0edfeb22abad5c8",
"assets/assets/34.png": "4790c824297d6b02b87763b94cb8136f",
"assets/assets/345.png": "ff68d24a516aef0b2dc98183422a6e87",
"assets/assets/44bfed5176975ff084befd8c78f5fe07fde53d70.png": "467d7f38bc5fcf50db7d64e9b7325339",
"assets/assets/5.png": "64cbf8cb5dffb7d17a876cba3a198277",
"assets/assets/6.png": "7f292050737e03e4dde59c5942d0c5be",
"assets/assets/66.png": "55e7aba0c2886cb9ab05cf34b28d1797",
"assets/assets/67.png": "75c9d83eeb0ddd18d70aba8f98de9aec",
"assets/assets/76.png": "804d064175a749bfa57a2820e90032e5",
"assets/assets/765.png": "683797f7056922089d96d7fb740b1938",
"assets/assets/777.zip": "2b2f72297eb49911aef1654f6453b70a",
"assets/assets/8.png": "e703ce17284a7aba2ea4be9e412d964d",
"assets/assets/87.png": "b30cbc2d6db715a8ebad65d82459a268",
"assets/assets/9.png": "13c95fcc83c4e85ae02b9ae87a4f64c7",
"assets/assets/98.png": "a35454775796216ba434229f120e851a",
"assets/assets/==.png": "1b9c45e890f0a4e9c7510e0ec9c19d18",
"assets/assets/aa.png": "c99982657ecaede49688ffbdc9af36f2",
"assets/assets/ara.png": "8152f71e8822d7853e8ef7bb4b7f2462",
"assets/assets/arab.png": "8152f71e8822d7853e8ef7bb4b7f2462",
"assets/assets/asd.png": "efbd62eeeca56426b8b51f82da863217",
"assets/assets/ASS.zip": "934b5709e02f56e8764693467c60de45",
"assets/assets/asse.png": "adc39ca652522ec960b107e02f8fb620",
"assets/assets/asse2.png": "b4c5587fea5d1de73f7e30038f9bfc24",
"assets/assets/audio.png": "299398ef08bc3c98b9e7be81c497a6c5",
"assets/assets/bala1.png": "69075769b70162c17da07fd6bfcd6812",
"assets/assets/bala2.png": "a60bf0875a0e16d07139d9f0f5945637",
"assets/assets/ben.png": "17a31c0adcf968f6512dd5b8ddca171d",
"assets/assets/BLOO.png": "dc156625ed1cc1ff58e76811a84472d2",
"assets/assets/book.png": "cfe253e2164d94eedaedd8085eaf61a8",
"assets/assets/botton.png": "5e18a4c7b542b3c7b2e7d07535b7b6e0",
"assets/assets/bread.png": "41d68ff030db94dc012f353018f8a88a",
"assets/assets/bread2.png": "510cf352bcf617286eca7b28f07a3ce6",
"assets/assets/buy.png": "9be79df8ac8ce3d61f91c215e1785aec",
"assets/assets/cart.png": "efeacbda70eba050fa1494e8e8dd8353",
"assets/assets/CHEK.png": "a665be3d55caebdff4b6077d444d341d",
"assets/assets/coke.png": "c8ce35c4bc71dfd98556cb37919198c8",
"assets/assets/Comment.png": "5b2580bc63f85593aa8c28210e2d2d2f",
"assets/assets/Content.png": "7866b3972d313f1bc5f79e101d254886",
"assets/assets/cook.png": "0c39a6c5cf8609d27b57f461fd45b40d",
"assets/assets/COOM.png": "8a0e99c284567f59808a95c0285c64ef",
"assets/assets/cotton.png": "117f2a26a3dc27394f2aba3d9ee75fa2",
"assets/assets/dary.png": "6b2d90961a3f9d281467e75c6b36f870",
"assets/assets/dess.png": "e1a2a7c5da9e5e657eeefa320f99ae50",
"assets/assets/dfg.png": "34b68c3e7bbeef3a2dcf6eba53c336d3",
"assets/assets/dj.png": "fcebd2869bc4f032ddf372e9c599deaa",
"assets/assets/dool.png": "b58d622385a404cc2fa6157d88cf1a05",
"assets/assets/dren.png": "764807d074bacd79183048ccf679d1b1",
"assets/assets/edit.png": "6515b64ab56229a5029efd29a674253d",
"assets/assets/eee.zip": "63cc2e7d2fff03214aef8c2d8b81903d",
"assets/assets/eng.png": "9ff13a61e7893e86cfb73fbe23b0f3db",
"assets/assets/FA.png": "9af03250a0ac6f069635f823811bb5b2",
"assets/assets/false.png": "7937ee84769376272378ccd782648c80",
"assets/assets/fara.png": "ae4af3f50ed6017df1e04ac703e0fa4c",
"assets/assets/feel.png": "2d31445f56ef7126441744a9aef2b930",
"assets/assets/feell.png": "2e6714b24638dc787ba5ecaad7d3c92c",
"assets/assets/fer.png": "f69586bbf0cce2aa0c511b1d03c61e95",
"assets/assets/ff.png": "efa341f487a57d98b696099224790d68",
"assets/assets/FIIL.png": "46e9ab8619acf578979d9e807db2fbfd",
"assets/assets/fish.png": "e1ee4807b2f1dbb72ba758885fadd567",
"assets/assets/flak.zip": "b4ced6f2ee671d2aaf4b31925b526a00",
"assets/assets/folder/car.jpg": "97089f41d4d666400e54df174497abc2",
"assets/assets/Frame%25209.png": "3cdba60fcd7c545e26525b15f613edd8",
"assets/assets/fre.png": "1fcb095bb16dedbcb626884f319561db",
"assets/assets/GAD.png": "af0a8e5c3c505910f35af64771cd03d7",
"assets/assets/garlic.png": "1e4e46fe8aca13442be2c36365241932",
"assets/assets/ger.png": "7e900c870e9250dcfdc027fe56ffde6b",
"assets/assets/goo.png": "3b9edf871982c19be8d6f12e1b174113",
"assets/assets/good.png": "7f786f53d55c805e7ab41deef3ef721f",
"assets/assets/good.zip": "0caaef745e33bf31a0d6988cee48e40c",
"assets/assets/GOROD.png": "3ac01c79d29a40ee94cc536fcb0118fa",
"assets/assets/gree.png": "2d31445f56ef7126441744a9aef2b930",
"assets/assets/Groceries%2520Funtional%2520(2).png": "f69586bbf0cce2aa0c511b1d03c61e95",
"assets/assets/Group%2520203%2520(1).png": "6830fad8c3d6402a47e444ca506e7cd6",
"assets/assets/Group%2520292.png": "3de14f1bcd0b352f188729d750a02999",
"assets/assets/Group%25206835.png": "efbd62eeeca56426b8b51f82da863217",
"assets/assets/hh.png": "ddad596d3862df5b98fb5253c945862f",
"assets/assets/hin.png": "58210dc0929b39adcd838e5ef67b4e03",
"assets/assets/house.png": "a55537febb25d954faf05ced869115ef",
"assets/assets/Icons.png": "cdbdae051ad2293f77153447655bb81b",
"assets/assets/iiii.png": "1410a2b6ecdaeceebe21f72cd6678f73",
"assets/assets/illustration%2520(3).png": "3058c118c215e538eb8550c524aae5f6",
"assets/assets/ita.png": "14058e1558f869b8dbcd7159043bdce3",
"assets/assets/japa.png": "de7e4013a8d600b929e34b9ff8c469c3",
"assets/assets/java.png": "68513a62825947507566bd229a5bf4c1",
"assets/assets/jkl.png": "e3178427da26d961a06e45d74c64fbd1",
"assets/assets/john.png": "bb19936f585c23f8b1669eea4c13919b",
"assets/assets/juk.zip": "56c78f96c26f28740de0094a0b1f86ca",
"assets/assets/kizil.png": "1d653d84d8f73d62b104c8edaf35dd16",
"assets/assets/KK.png": "a25003f8d5ae30f6ed82bce5f77fc83e",
"assets/assets/kol.png": "b4fb50cdc7729dfda50ef4b296b6da4c",
"assets/assets/kore.png": "fc4c4638ebdda8bdc7982279cfb9d598",
"assets/assets/kysyl.png": "1d653d84d8f73d62b104c8edaf35dd16",
"assets/assets/L.png": "4c6d44e1c41d40b8c891f2fba143584a",
"assets/assets/Lang.png": "46563bbeac836f4061d169b320cecde6",
"assets/assets/Like.png": "7f8fdf53e91868ab09d8002c95739c16",
"assets/assets/LKJH.zip": "e0fedfda845246f2f954a0df49783cce",
"assets/assets/ll.png": "42c37c65451b8395bc20a10d8759d6e3",
"assets/assets/LO.png": "304dac15204a3f3609c39361285ae60a",
"assets/assets/Logo%2520(4).png": "bb19936f585c23f8b1669eea4c13919b",
"assets/assets/logo.png": "facd88433d25ed7e8dbc95722d0c5590",
"assets/assets/LOKA.png": "01aa7fd2fb662e2a488feb6644dcf34d",
"assets/assets/lyl.png": "13c92a43abd7b6983f331ee32a0337a3",
"assets/assets/madi.png": "d44d1aa04e62179610735e75931227bb",
"assets/assets/madina.png": "8ae386ab8f37b80364276f8ee8fbaf13",
"assets/assets/mama.png": "64ce02fc0fca654147caf9154846960b",
"assets/assets/MAR.png": "802a9116b71004e5884bf023b45d3eb0",
"assets/assets/mara.png": "a5a645346add4619fdade8717af3898a",
"assets/assets/mdi_lock-outline%2520(2).png": "5f2b83962bd6187beb0904ae35cc8e17",
"assets/assets/mea.png": "6f6186b3f79c5597352f10a3f775dac6",
"assets/assets/mm.png": "1f4fcded8f63f91bad30751a4491d3cb",
"assets/assets/mmm.png": "d141689cc04c7fd128ec9c6bf6ba82ec",
"assets/assets/mnb.png": "26097618b5e8b34075f10983765952ef",
"assets/assets/Music.png": "64d0e0f3dbac4999541a56351c63235d",
"assets/assets/N.png": "f432f13c582248d58da1f3ec928b6639",
"assets/assets/neis.png": "ab4ba4fdebb1e75ad4d664ea8dbc9ce4",
"assets/assets/neis2.png": "5fcdd3204c26d663bc84e595bb8a7187",
"assets/assets/nn.png": "1c48fa014cf27368c2041dc6f92ffce7",
"assets/assets/ogures.png": "5ebb1cde0086e948f4174a5472961b59",
"assets/assets/ops.png": "fcebd2869bc4f032ddf372e9c599deaa",
"assets/assets/ORR.png": "b496ffacdfb617ca5f58832728cdd145",
"assets/assets/person.png": "ffc6e8ad6caefc57cb36dab98044c89b",
"assets/assets/pfpf.png": "75c9d83eeb0ddd18d70aba8f98de9aec",
"assets/assets/pic.png": "72bdb88c3f3f31e92dca3db17fea50df",
"assets/assets/poi.png": "e966144dd812d3358146d8ee602e8e2d",
"assets/assets/poin.png": "a44590a5a05f4a5f1e6780d171698d32",
"assets/assets/poll.png": "39692dd677dff8b1adec9968a51bfb61",
"assets/assets/poly.png": "11b35999c319616c2fd9fc0a56f40902",
"assets/assets/pomidor.png": "3ed963663d754bdbba3e6b699a2cb147",
"assets/assets/PONIA.png": "35ff8c3a48921e374fc14f1defec66cb",
"assets/assets/pop.jpg": "a03e2eb833a4ec9f877e2982c335b30f",
"assets/assets/PP.png": "ac2576b83644daf7563eaa6758508d13",
"assets/assets/PRO.png": "46cacf5744c89ec545cff4cff2276bfd",
"assets/assets/qq.png": "d49f4fc4525a2ee86b3fd09c1375f780",
"assets/assets/qqqq.png": "7218ee484eea85ef0b14771fef632ea9",
"assets/assets/red.png": "fe1132f8cc9abda9b0fe265a7fc5740c",
"assets/assets/rew.zip": "ade0bfa39ccb54643e23bd17337c5934",
"assets/assets/rr.png": "0798812927afa42af1963648685fea27",
"assets/assets/rus.png": "0fd1b06aefd08f17036fd33f5037c774",
"assets/assets/russs.png": "e141fe31c66674bafe6d51b8c6341e58",
"assets/assets/saikal.png": "847b4a37946196f9660acf8080b87151",
"assets/assets/SAL.png": "05dcc35cf92191bfa4dec934e9f6dcb6",
"assets/assets/salt.png": "20d443b0d37792d76aad24d7cbc7f4c0",
"assets/assets/Share.png": "c05ee22d23c0d3544c75e59dc1fc435e",
"assets/assets/shg.png": "b64d261e8dfac08b1e910c30df934679",
"assets/assets/SNE.png": "5d5c58f8b433eff1e034a3f298bfc487",
"assets/assets/spa.png": "e8900f1c60592dc08f51125ae5ab2c73",
"assets/assets/SS.png": "e76a6efc0715555d0decc5b0d4ffdb35",
"assets/assets/ST.png": "5dc008e2854ec0510a944ac48cfc83b6",
"assets/assets/sur.jpg": "54caf3b11fc667f7fa261bb2ea33306e",
"assets/assets/TEO.png": "1d5c32a40d10c28ebb9ed77f1d058875",
"assets/assets/tgb.png": "3058c118c215e538eb8550c524aae5f6",
"assets/assets/TIKTOK.jpg": "54caf3b11fc667f7fa261bb2ea33306e",
"assets/assets/titi.png": "56257b029930721d6a8933a079fb8f20",
"assets/assets/tre.png": "0c39a6c5cf8609d27b57f461fd45b40d",
"assets/assets/true.png": "efbd62eeeca56426b8b51f82da863217",
"assets/assets/tt.png": "fca770a663af7a033e5665345e95c3c1",
"assets/assets/TYTYN.png": "de75b8cc675789d64506ff69a072d8e6",
"assets/assets/TYU.png": "efbd62eeeca56426b8b51f82da863217",
"assets/assets/tyu.png.png": "d44d1aa04e62179610735e75931227bb",
"assets/assets/UNIT.png": "d8aad283472c939aee92129a69b6aeb4",
"assets/assets/ve.png": "cdbdae051ad2293f77153447655bb81b",
"assets/assets/Vector%2520(32).png": "82670515a441841c31a2b55db8cdabb9",
"assets/assets/Vector.png": "7cf1df47e9806619bbd2410c988b5ba7",
"assets/assets/ver.png": "23ab9fe32d0a511a5388c0d73f69cfc5",
"assets/assets/vertic.jpg": "54caf3b11fc667f7fa261bb2ea33306e",
"assets/assets/VVV.png": "15b8364725e7cf09c388a3616d501159",
"assets/assets/w2.png": "8ffd8f21247c13af61f2620f229d319a",
"assets/assets/wer.png": "cdae26a126900fda7fca5cd3fc665680",
"assets/assets/wifi.png": "ff4999b5b2e4c4743f0d6a874078ba9d",
"assets/assets/YU.png": "8dc9359be0a2705ec31c11def442e231",
"assets/assets/yy.png": "7e4071bd1613f1fae1df766a3df63d7d",
"assets/assets/yyy.png": "cb22e403c26ea71fa882c00cdb372d14",
"assets/assets/zz.png": "569154572db138a0b41a2fc0e7e7f139",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "b49fe77417418f785d92e01136e4983b",
"assets/NOTICES": "c096ecb69cbb0d17d0bf5243e00525f9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "1da8f94b1226a0e18ebdd35568e2df5c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2ce9a1d51ecf5a68489fe4840b33a950",
"/": "2ce9a1d51ecf5a68489fe4840b33a950",
"main.dart.js": "9d0d26d16d261c775faf49814caf3784",
"manifest.json": "1fa7295c813d0099190aac6fc4f9e5a2",
"version.json": "0bedfa78dd09d8195ea2f30bb2977997"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
