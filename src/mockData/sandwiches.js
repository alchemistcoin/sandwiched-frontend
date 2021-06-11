// curl -N http://api.sandwiched.wtf/sandwiches/<wallet-addr>

// No Sandwiches
// {
//   "message": "Fetching transactions..."
// }
// {
//   "message": "Found 3 uniswapV2 swaps. Now searching for sandwiches around these swaps.",
//   "count": 3
// }
// {
//   "message": "Did not find any uniswapV2 sandwiches."
// }

//// Lots of sandwiches
// ~/dev/sandwiched-backend  main !1 ?1  curl -N http://api.sandwiched.wtf/sandwiches/0xb1adceddb2941033a090dd166a462fe1c2029484
// curl -N http://localhost:3000/sandwiches/0xb1adceddb2941033a090dd166a462fe1c2029484
// {
//   "message": "Fetching transactions..."
// }
// {
//   "message": "Found 428 uniswapV2 swaps. Now searching for sandwiches around these swaps.",
//   "count": 428
// }
// {
//   "message": "Sandwich found",
//   "openTx": "0x05cf57cf65ea19451931b52e2f067ffdc082036ef982d4d4d0c928ed4194eb40",
//   "targetTx": "0x3f889547e6dc2e57dbdc56d9d9995b26210e03e81ebef49d84f6b957595c0315",
//   "closeTx": "0x8f0881dac783395b288cbdf60601d312da746f8353e5101a50314933fef592c7",
//   "profit": "0.37010359054625494",
//   "profitCurrency": "WETH",
//   "pool": "WETH - WAR"
// }
// {
//   "message": "Sandwich found",
//   "openTx": "0x4967c7d98636b04c3f9e9b0e29fdc39d269fb74eadcd426fff1359d56deca772",
//   "targetTx": "0xbf94ad6d5338bce85afed7eaac6223ba9f8902c2988ebcc72429ddd895fd7f7c",
//   "closeTx": "0x3f14216cd7c7b1f93ae3153e7a283099eec6bcf2b19061527485a2f8424701ba",
//   "profit": "0.634667753818027982",
//   "profitCurrency": "WETH",
//   "pool": "WETH - WAR"
// }
// {
//   "message": "Sandwich found",
//   "openTx": "0x76084f2608995e6ccdcfd196ef1111ecd517d6e29b0a19deb5e8f187ac6f0967",
//   "targetTx": "0x8e6e1d8b112774f88941054d25e71468c87e2cc250856e5e513b8c4802c3a9ef",
//   "closeTx": "0x59cae29c1126bbb24a77d4053d87dad01bc90cf8a3a11bc927bb58887dde4539",
//   "profit": "0.02786780180780531",
//   "profitCurrency": "WETH",
//   "pool": "DPI - WETH"
// }
// {
//   "message": "Sandwich found",
//   "openTx": "0x7037eea9e61346485c66c6dcf2f5058ff07aa4b8dc507be547b2c6bca4ffb49e",
//   "targetTx": "0xde51379ac298873af3a0e41538c4ef6e565ab44afee6f9d0defc7cbb263d1ea1",
//   "closeTx": "0x5e3a885e010f062b0ee46071a0f640c70b3c0ce3c3b899c8da84f30fe6aae07a",
//   "profit": "1.295136004620135744",
//   "profitCurrency": "WETH",
//   "pool": "WETH - AMPL"
// }
// {
//   "message": "Sandwich found",
//   "openTx": "0x07d7d870cc35c6a420c31f02a0d3233baa86d052281c1f2f3ead5393519f19c1",
//   "targetTx": "0x786f06afe8c2d964044deb54803174a3b7112f322d490b0f5d48a664bbef380c",
//   "closeTx": "0x9f7a1eb35ec4e017869548658123bd20d6fa5d101cd4e4d96c8931fe439fc868",
//   "profit": "943.393018",
//   "profitCurrency": "USDC",
//   "pool": "ESD - USDC"
// }
// {
//   "message": "Sandwich found",
//   "openTx": "0x54a10f39f402a006c47c4e99f01e62f1e7693d250cc7eac2c8eeb32cee9d5ced",
//   "targetTx": "0xddc68e9518231f607a4fb6dfa48d6bce059a955f5a7195bcf59576a93cb7dd25",
//   "closeTx": "0x1f3ccb7c63b9b79b024371690efdac51412667c3cfc616263e1f112674454fea",
//   "profit": "3051.480773",
//   "profitCurrency": "USDC",
//   "pool": "BOND - USDC"
// }
// {
//   "message": "Sandwich found",
//   "openTx": "0x7e924be4ae19ade8bc166ae7e029cd363ad9f5502dddb757a7d19860f3e7a2d8",
//   "targetTx": "0x82a138745fe6bc845f6b9d83c8faf03bd9b30da042786377b6998f8cbea7e3cc",
//   "closeTx": "0x12710bd53ede6386f64762e168fa54ffdd422473fe1e583858977b9af34f6e99",
//   "profit": "-0.192076261629451644",
//   "profitCurrency": "WETH",
//   "pool": "sUSD - WETH"
// }
// {
//   "message": "Sandwich found",
//   "openTx": "0x335ca1ffc486b5a4ae156f4c336f45f056ba8def57420b2507a31f408ab1f208",
//   "targetTx": "0x117be3f9814713f8372af0b70079c49fa15317c35ec1476d12d3f4f83583bb70",
//   "closeTx": "0x07170b72b1a00b0b2c9d69e797fcfdaa70293a93a531be7e5f5f0191731ac4c6",
//   "profit": "0.0",
//   "profitCurrency": "BAS",
//   "pool": "DAI - BAS"
// }
// {
//   "message": "Sandwich found",
//   "openTx": "0xc239e609f0d6133ea64889b8b826e3ecdf9770e1a0994bdc9dc59e0bef19f5d4",
//   "targetTx": "0x02cd34e03941639b4dcc83049d1f8ac1d623bf5946f12235f376cee68d7a81b0",
//   "closeTx": "0xe1ff021f95b2c12464307bbf69a288b25406a9e58997aee9f45f159fdbcdff22",
//   "profit": "3344.067039",
//   "profitCurrency": "USDC",
//   "pool": "USDC - DSD"
// }
// {
//   "message": "Sandwich found",
//   "openTx": "0x46bea49416f46d8dca03f189a828b4f0d22e7778a174710923fda32271835c11",
//   "targetTx": "0x1b59317afd6243b8f28cd0fd028096994bbb7ad5fa53a5f6e78ea878a8c7c5d5",
//   "closeTx": "0xe80a4f6e6ff6543dbbdc6bf517456042f2f5e55de6145426809efc759c178e89",
//   "profit": "0.592746666764276801",
//   "profitCurrency": "WETH",
//   "pool": "WETH - WAR"
// }
// {
//   "message": "Sandwich found",
//   "openTx": "0xdbd49e222008df2acd7752fe47f2a36806711a24dc1c5adabd2afa6f3a6e08bb",
//   "targetTx": "0xef3363d82651e123d726452dc5b73a05d2a0344fc22c0c2eb9d47a8dca17331d",
//   "closeTx": "0x7dc027968ce5cde0ed25b63a6b82af03c23f01965c683045bbd8abe0697fde4f",
//   "profit": "0.192975736922162081",
//   "profitCurrency": "WETH",
//   "pool": "WETH - stETH"
// }
// {
//   "message": "Sandwich found",
//   "openTx": "0xe1f01378c5e9e825bd428cd755e68e01f46314a0d7926c940cd9218578a12139",
//   "targetTx": "0x68dd28d3ce2a5ef90680f5b4e3b86af2501973d2107b642f0f075d92131a56c5",
//   "closeTx": "0x5a54f6726c168aedf1171ce686dd5d05d03bb99de212e30d5da05ea316bdec64",
//   "profit": "1.026020662373103583",
//   "profitCurrency": "ibETH",
//   "pool": "ibETH - ALPHA"
// }
// {
//   "message": "Sandwich found",
//   "openTx": "0x21604c155e12c64775895946e46873d1a6bd8cec9476ade5950f771798291422",
//   "targetTx": "0x51fcf0710c505b2636c91022b6f85d678872b98cfe9f781f418accb07096c64d",
//   "closeTx": "0x27bc8e296b0ccf6d314b712bc61948aa8c3f9c6672b5a313084264ab29084e92",
//   "profit": "0.082421392445176694",
//   "profitCurrency": "WETH",
//   "pool": "SOCKS - WETH"
// }
// {
//   "message": "Sandwich found",
//   "openTx": "0x9b513c223fd574b445b7e5e4b6b103d0a5b95977407a31e04c5ad0170d1c4f36",
//   "targetTx": "0x57d8913a1cf7d29ab00439a50b270d5982357c0407dd295965b5b7be8c8e9da7",
//   "closeTx": "0x049ca7debf3f93c51d514e98c5c4b49d6c72df6565d482497d9cdcfafc4137dc",
//   "profit": "2.62632155651405937",
//   "profitCurrency": "WETH",
//   "pool": "WETH - B20"
// }
// {
//   "message": "Sandwich found",
//   "openTx": "0xaeac1c632acd63e662f7bf3cfcce0aa95aec7e4ed32d8a028050fb5aa57901d8",
//   "targetTx": "0xf1568c8591211b0e2b75374446e40cf432498c8cd6ac77bb5df8b1a00d3c4d7a",
//   "closeTx": "0x27ea8253432686ee63d43ba1e288e627afec49da910cf3c9209ca0ef615e0830",
//   "profit": "6.855924928029338244",
//   "profitCurrency": "WETH",
//   "pool": "WETH - B20"
// }
// {
//   "message": "Sandwich found",
//   "openTx": "0xf059e20d2a16693501faf5ba1a31e6e0c10a20634b7e9fb8798e26adae064cbc",
//   "targetTx": "0xf3fcd212f5db76181c3bb8f9ba7f381d8011463c591f18a2b7f443e6c7d7c711",
//   "closeTx": "0x4c4b87e053a1bf0e3b21b18d8892b4d6a6e5f551c9c5af3ad713137f3868fd9a",
//   "profit": "2.279749053077478013",
//   "profitCurrency": "WETH",
//   "pool": "WETH - B20"
// }
// {
//   "message": "Sandwich found",
//   "openTx": "0x699de2603b40fea219afeccf388ea6c66b36758d89ab1eebb3324239ee442378",
//   "targetTx": "0xd82a86f8324fba7e0d374b461d6faf0c39a0d53fde06505d6c2cb8447609c617",
//   "closeTx": "0x62fedc4df9aebe7cdf7965fe1e35de7d657c94db2c55551c1954eb823a0351b6",
//   "profit": "14.320954423950744728",
//   "profitCurrency": "WETH",
//   "pool": "FARM - WETH"
// }
// {
//   "message": "Sandwich found",
//   "openTx": "0xdf62a20b6a8cb87231a3f30d6856904e0200c704ea18a857737f142eebe64813",
//   "targetTx": "0x852fec26f3ef1503ff29694f516076c5cd6a1b4e0ceb0869c84cb10a7d90f858",
//   "closeTx": "0x0a0a28fb75b59f3207435c70b7094ed0dabcc4bc853cc41832e77cc961aa2cad",
//   "profit": "0.128048512336962075",
//   "profitCurrency": "WETH",
//   "pool": "LST - WETH"
// }
// {
//   "message": "Sandwich found",
//   "openTx": "0x45f17be3474fdc6c9690fea880179986e8eed197e987a7d8cfab517123e77c34",
//   "targetTx": "0x852fec26f3ef1503ff29694f516076c5cd6a1b4e0ceb0869c84cb10a7d90f858",
//   "closeTx": "0x3c22be76143f1f4b8ab144a1fe3d8916b984e360e51cd19fc37c41e536acb7d0",
//   "profit": "1.21808712279187822",
//   "profitCurrency": "WETH",
//   "pool": "LST - WETH"
// }
// {
//   "message": "Sandwich found",
//   "openTx": "0xaa73f9e16e809399b6a8a2446c67658405512d3177a7b08b8da73a3dadb7a966",
//   "targetTx": "0x7a42a625d760216d8633371ee14e0a2f7179f941bc330c5a389b571dfa3dcec5",
//   "closeTx": "0xe5af622f020bcd0171ef20803af56a5f19390fff109afdac37c21057cfd00f2e",
//   "profit": "2.068103045680899697",
//   "profitCurrency": "WETH",
//   "pool": "LST - WETH"
// }
// {
//   "message": "Sandwich found",
//   "openTx": "0x135e085d203ba0f5f94dbf30e1a0ef02e55335e64df6ea2f270a1c0dc58d4ada",
//   "targetTx": "0x1ba84d96039a0e9932a33c62f0eb643f5927feaac6e87ce81a497393ab1d2299",
//   "closeTx": "0xec91d2236d6d399bd70ea687d4aed02b2770f46a8854f10443d295184fd20771",
//   "profit": "6.366921336473370749",
//   "profitCurrency": "WETH",
//   "pool": "WETH - B20"
// }
// {
//   "message": "Sandwich found",
//   "openTx": "0xd428f9f8639d74a93824805f82bea7b0bfcb8b213a78fe97e03bb857fb7411ea",
//   "targetTx": "0x3f10804742d1daa4c5178765eec63054cfa52cf26cc9d05c61d32b7c34aa0145",
//   "closeTx": "0xf37e3404079a6aadc524d56bb1bda3eaa11343bbb62e4fea17e30012d01cc39b",
//   "profit": "4.530798416489231252",
//   "profitCurrency": "WETH",
//   "pool": "LST - WETH"
// }
// {
//   "message": "Sandwich found",
//   "openTx": "0x4bfb2cf7b5d1d1769f38c02416a4675a45911a8b35974b4c105c6ee3a4468342",
//   "targetTx": "0xde369ebaf9e2f05b058417e9293412e07621058054b4f6378801b698f4202ed3",
//   "closeTx": "0xc34a9d90d307d041828fd41dc9bc739c9b6eea5bfd83f3f5a8585df94894e2f6",
//   "profit": "-1.064331330238059611",
//   "profitCurrency": "INV",
//   "pool": "INV - WETH"
// }
// {
//   "message": "Sandwich found",
//   "openTx": "0x1fd063fb31f124a3f95c15284f6cd8628363dabab5b6360a5c129e24d62ee625",
//   "targetTx": "0x0496836a65e527aa512770d391c95be753074a1497fa2e4f3f5a6fdec60ecb61",
//   "closeTx": "0xbb534965c9c87ee043b3055b947077e2dea378740b14300e521ba4936f618700",
//   "profit": "0.469605555178889956",
//   "profitCurrency": "WETH",
//   "pool": "INV - WETH"
// }
// {
//   "message": "Sandwich found",
//   "openTx": "0xa9859fd2edc4f852e7cb5cfdd48559f70c54140af3880a6af2f180a66bca2c77",
//   "targetTx": "0xccb3b482ec126bb0e1a1a9d74b1e78386699953f098bd381720b709904f284f2",
//   "closeTx": "0xffac77959af726434e2a26a9380f33d30b4794ad47e1762400c2493686228d78",
//   "profit": "1.995803418746152116",
//   "profitCurrency": "WETH",
//   "pool": "MVI - WETH"
// }
// {
//   "message": "Sandwich found",
//   "openTx": "0x052181071ac780d1a76d677968214aad5def5894700bcc9a201c786d6859829b",
//   "targetTx": "0xcf62dd87c79006faeb681c8a3eea1aaa632f19ebca5f09ad00cfd0ce115e6f99",
//   "closeTx": "0x970ed4be4f172d8358396ca71d598e370310f347e62d5ef9a90305e112c4bb7d",
//   "profit": "4.642376787793060822",
//   "profitCurrency": "WETH",
//   "pool": "MVI - WETH"
// }
// {
//   "message": "Sandwich found",
//   "openTx": "0x9988029806644e7165352577308ade2c223c7de26293072ac57513f77c2cde7c",
//   "targetTx": "0x054ea8f28e67db317ff02f21abbb5c13f26359dc24ec7fce616625f86b2038d7",
//   "closeTx": "0xd2621530db49a7259161da2b8de92c40594f35ff8e9e4c05dd8b8dd1c1232e14",
//   "profit": "4.621142231151747847",
//   "profitCurrency": "WETH",
//   "pool": "MVI - WETH"
// }
// {
//   "message": "Sandwich found",
//   "openTx": "0xd0738f4254f635806d22221966e2e248a8ff97b2e51a20c2d07327950ca2f3bf",
//   "targetTx": "0x27dcac0be6c3b21847ab85c27cb9b3f4d10a0642147c570f8a9d9bb05074456f",
//   "closeTx": "0xfde825afc473a365f83d5840e1ea1113239a69e2c336d6b20cd16d43667f95de",
//   "profit": "2.710432111507750755",
//   "profitCurrency": "WETH",
//   "pool": "MVI - WETH"
// }
// {
//   "message": "Sandwich found",
//   "openTx": "0x0bcd7d7fd9895023002c5181d39e5de167ee179813dc63c385d5e64d26758ec1",
//   "targetTx": "0x320fbc4a1de7324a39278aa8213f392364a6dd0546b62fd45f2ccb84558598bf",
//   "closeTx": "0x53d2e9170eb2a21330ddbfc5a4e9e02e31de3e76738cd1659946256abcb417f7",
//   "profit": "1.770266036457971241",
//   "profitCurrency": "WETH",
//   "pool": "WETH - B20"
// }
// {
//   "message": "Found 29 uniswapV2 sandwiches. Yum!",
//   "count": 29
// }
