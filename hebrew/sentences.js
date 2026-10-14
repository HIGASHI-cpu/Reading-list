/*
  暗唱用の例文（各課の単語を使った短い文）

  書式（1行1文）:
    ヘブライ語 | 読み（ローマ字） | 日本語
  id は vocab.js の課の id と同じにする。
*/
window.SENTENCE_UNITS = [

{ id: "y2", text: `
הִנֵּה הַיֶּלֶד. | hine ha-yeled. | ほら、男の子だ。
הַיַּלְדָּה מִיִּשְׂרָאֵל. | ha-yalda mi-yisrael. | その女の子はイスラエル出身だ。
מֵאַיִן הָאִישׁ? הָאִישׁ מֵאַנְגְלִיָּה. | me-ayin ha-ish? ha-ish me-anglia. | その男性はどこから？—イングランドからだ。
הַתַּלְמִידָה גַּם מִגֶּרְמַנְיָה. | ha-talmida gam mi-germanya. | その女子生徒もドイツ出身だ。
הִנֵּה הַשֶּׁמֶשׁ! | hine ha-shemesh! | ほら、太陽だ！
הַגְּלִידָה שֶׁל הַיַּלְדָּה. | ha-glida shel ha-yalda. | その女の子のアイスクリーム。
` },

{ id: "y3", text: `
שָׁלוֹם, אֲנִי לוֹמֵד אַנְגְּלִית. | shalom, ani lomed anglit. | こんにちは、僕は英語を学んでいます。
הֵם גָּרִים שָׁם. | hem garim sham. | 彼らはそこに住んでいる。
זֶה לֶחֶם אוֹ חַלָּה? | ze lechem o chala? | これはパン？それともハラー？
הַמּוֹרָה שָׁרָה שִׁיר. | ha-mora shara shir. | 先生（女性）が歌を歌っている。
אַתֶּם לוֹמְדִים גֶּרְמָנִית? לֹא, אֲנַחְנוּ לוֹמְדִים רוֹמָנִית. | atem lomdim germanit? lo, anachnu lomdim romanit. | 君たちはドイツ語を学んでいるの？—いいえ、ルーマニア語です。
תּוֹדָה, לְהִתְרָאוֹת! | toda, lehitraot! | ありがとう、またね！
` },

{ id: "y4", text: `
מַה נִּשְׁמָע? מְצוּיָּן! | ma nishma? metsuyan! | 調子どう？—最高！
אֲנִי רוֹצָה מִיץ וְעוּגָה. | ani rotsa mits ve-uga. | 私（女性）はジュースとケーキが欲しい。
לְאָן אַתֶּם רוֹצִים? אוּלַי לְטוֹקְיוֹ. | le-an atem rotsim? ulay le-tokyo. | 君たちはどこへ行きたい？—たぶん東京へ。
הוּא שׁוֹתֶה קוֹקָה קוֹלָה עִם סָלָט. | hu shote koka kola im salat. | 彼はサラダと一緒にコカ・コーラを飲む。
נָעִים מְאוֹד, אֲנִי סְטוּדֶנְטִית. | naim meod, ani studentit. | はじめまして、私は大学生です。
סְלִיחָה, רַק רֶגַע! | slicha, rak rega! | すみません、ちょっと待って！
` },

{ id: "y5", text: `
אֲנִי מְדַבֵּר יַפָּנִית וּקְצָת עִבְרִית. | ani medaber yapanit u-ktsat ivrit. | 僕は日本語と少しヘブライ語を話す。
יֵשׁ מוּזֵיאוֹן לְיַד הַבַּיִת. | yesh muzeon leyad ha-bayit. | 家のそばに博物館がある。
אֵין סוּכָּר בַּבַּיִת. | eyn sukar ba-bayit. | 家に砂糖がない。
הַמִּשְׁפָּחָה שֶׁל אַבָּא גָּרָה בִּבְרָזִיל. | ha-mishpacha shel aba gara bi-vrazil. | 父の家族はブラジルに住んでいる。
הַכֹּל בְּסֵדֶר? כֵּן, הַכֹּל בְּסֵדֶר. | ha-kol be-seder? ken, ha-kol be-seder. | 大丈夫？—うん、全部大丈夫。
בָּאוּלְפָּן מְדַבְּרִים עַל פּוֹלִיטִיקָה. | ba-ulpan medabrim al politika. | ウルパンでは政治について話している。
` },

{ id: "y6", text: `
בּוֹקֶר טוֹב! מַה שְּׁלוֹמְךָ? | boker tov! ma shlomcha? | おはよう！元気？（男性に）
אֵיפֹה הָאוּנִיבֶרְסִיטָה? | eifo ha-universita? | 大学はどこですか？
אֲנִי אוֹהֶבֶת מוּזִיקָה, אֲבָל הוּא אוֹהֵב סְפָרִים. | ani ohevet muzika, aval hu ohev sfarim. | 私は音楽が好きだけど、彼は本が好き。
הִיא כּוֹתֶבֶת מִכְתָּב בַּעֲרָבִית. | hi kotevet michtav be-aravit. | 彼女はアラビア語で手紙を書いている。
אֲנַחְנוּ הוֹלְכִים לַבַּנְק עַכְשָׁיו. | anachnu holchim la-bank achshav. | 私たちは今、銀行へ行く。
קָפֶה עִם חָלָב, בְּבַקָּשָׁה. | kafe im chalav, bevakasha. | ミルク入りのコーヒーをください。
בְּרוּכִים הַבָּאִים לְחֵיפָה! | bruchim ha-baim le-cheifa! | ハイファへようこそ！
` },

{ id: "y7", text: `
מַה הַשָּׁעָה? הַשָּׁעָה שְׁתַּיִם וָחֵצִי. | ma ha-shaa? ha-shaa shtayim va-chetsi. | 何時？—2時半です。
אַתָּה יוֹדֵעַ מַה הַשָּׁעָה? | ata yodea ma ha-shaa? | 何時か知ってる？
הַשָּׁעָה חָמֵשׁ וָרֶבַע. | ha-shaa chamesh va-reva. | 5時15分です。
אֲנִי רוֹצֶה סֶנְדְוִויץ' וְצִ'יפְּס עִם קֶטְשׁוֹפּ. | ani rotse sendvich ve-chips im ketshop. | サンドイッチとケチャップ付きのポテトが欲しい。
אֵיזֶה מַזָּל! יֵשׁ קוֹנְצֶ'רְטוֹ לְצֶ'לוֹ. | eize mazal! yesh koncherto le-chelo. | なんて幸運！チェロ協奏曲がある。
בְּשָׁעָה שֶׁבַע יֵשׁ חֲדָשׁוֹת. | be-shaa sheva yesh chadashot. | 7時にニュースがある。
` },

{ id: "pz1", text: `
הֶחָבֵר שֶׁלִּי גָּר בְּקִיבּוּץ. | ha-chaver sheli gar be-kibuts. | 僕の友達はキブツに住んでいる。
בְּשַׁבָּת כּוּלָּם בַּבַּיִת. | be-shabat kulam ba-bayit. | 安息日にはみんな家にいる。
הִיא לוֹמֶדֶת תַּלְמוּד וּמִשְׁנָה. | hi lomedet talmud u-mishna. | 彼女はタルムードとミシュナを学んでいる。
אֲנַחְנוּ עוֹשִׂים יוֹגָה וּמֶדִיטַצְיָה. | anachnu osim yoga u-meditatsya. | 私たちはヨガと瞑想をする。
הַתַּנַ"ךְ: תּוֹרָה, נְבִיאִים, כְּתוּבִים. | ha-tanach: tora, neviim, ktuvim. | タナハとは、律法・預言者・諸書のこと。
` },

{ id: "s1", text: `
סְלִיחָה, אֵיפֹה הַשֵּׁירוּתִים? יָשָׁר וְאָז יָמִינָה. | slicha, eifo ha-sherutim? yashar ve-az yamina. | すみません、トイレはどこ？—まっすぐ行って右です。
מָתַי אַתָּה עוֹבֵד? בַּבּוֹקֶר וּבָעֶרֶב. | matay ata oved? ba-boker u-va-erev. | いつ働いてるの？—朝と晩です。
אֲנִי לֹא מֵבִין. מָה אַתָּה אוֹמֵר? | ani lo mevin. ma ata omer? | わからない。何て言ってるの？
כַּמָּה לַחְמָנִיּוֹת אַתְּ קוֹנָה? שְׁתֵּי לַחְמָנִיּוֹת. | kama lachmaniyot at kona? shtey lachmaniyot. | ロールパンをいくつ買うの？—2つ。
אֵיךְ נוֹסְעִים לַסִּפְרִיָּה? בְּאוֹטוֹבּוּס. | eich nosim la-sifriya? be-otobus. | 図書館へはどうやって行くの？—バスで。
אֲנִי מִצְטַעֵר. אֵין דָּבָר! | ani mitstaer. eyn davar! | ごめんなさい。—気にしないで！
` },

{ id: "s2", text: `
הַדִּירָה קְטַנָּה, אֲבָל הַמִּטְבָּח גָּדוֹל. | ha-dira ktana, aval ha-mitbach gadol. | アパートは小さいけど、台所は大きい。
אֵיזֶה צִיּוּר יָפֶה! | eize tsiyur yafe! | なんてきれいな絵！
בַּסָּלוֹן יֵשׁ שׁוּלְחָן יָשָׁן וּמְיוּחָד. | ba-salon yesh shulchan yashan u-meyuchad. | 居間には古くて特別なテーブルがある。
אֵיזוֹ מַחְבֶּרֶת אַתָּה רוֹצֶה? | eizo machberet ata rotse? | どのノートが欲しい？
לִפְעָמִים אֲנַחְנוּ שׁוֹמְעִים מוּזִיקָה קְלַאסִית. | lifamim anachnu shomim muzika klasit. | 私たちはときどきクラシック音楽を聴く。
הַבָּחוּר הַזֶּה נֶחְמָד מְאוֹד. | ha-bachur ha-ze nechmad meod. | この若者はとても感じがいい。
` },

{ id: "s3", text: `
כַּמָּה עוֹלָה פִּיתָּה עִם חוּמוּס? חֲמִישָּׁה שְׁקָלִים. | kama ola pita im chumus? chamisha shkalim. | フムス入りのピタはいくら？—5シェケル。
אֲנַחְנוּ מְטַיְּילִים שְׁלוֹשָׁה יָמִים בְּיִשְׂרָאֵל. | anachnu metaylim shlosha yamim be-yisrael. | 私たちはイスラエルを3日間旅行する。
הוּא יוֹשֵׁב עַל כִּיסֵּא וְאוֹכֵל מַשֶּׁהוּ. | hu yoshev al kise ve-ochel mashehu. | 彼は椅子に座って何か食べている。
זֶה מָקוֹם בְּשָׂרִי אוֹ חֲלָבִי? | ze makom besari o chalavi? | ここは肉料理の店？それとも乳製品の店？
כָּל יוֹם אֲנִי לוֹמֵד עֶשֶׂר מִילִּים חֲדָשׁוֹת. | kol yom ani lomed eser milim chadashot. | 毎日、新しい単語を10個覚える。
רַק עוֹד דַּקָּה! | rak od daka! | あと1分だけ！
` },

{ id: "s4", text: `
אֲנִי מְחַפֵּשׂ אֶת הַפַּסְפּוֹרְט שֶׁלִּי. | ani mechapes et ha-pasport sheli. | 僕のパスポートを探している。
אַתָּה מַכִּיר אֶת הַדּוֹדָה שֶׁלִּי? | ata makir et ha-doda sheli? | 僕のおばさんを知ってる？
מָחָר אֲנַחְנוּ פּוֹגְשִׁים אֶת הַחֲבֵרִים לְיַד הַכּוֹתֶל. | machar anachnu pogshim et ha-chaverim leyad ha-kotel. | 明日、嘆きの壁のそばで友達と会う。
הַיּוֹם יוֹם רִאשׁוֹן, וּמָחָר יוֹם שֵׁנִי. | ha-yom yom rishon, u-machar yom sheni. | 今日は日曜日で、明日は月曜日だ。
הָעִיתּוֹן זוֹל, רַק חֲמִישָּׁה שְׁקָלִים. | ha-iton zol, rak chamisha shkalim. | 新聞は安い、たった5シェケルだ。
אַהֲלָן! מַה נִּשְׁמָע? | ahalan! ma nishma? | やあ！調子どう？
` },

{ id: "s6", text: `
בַּבּוֹקֶר אֲנִי קָם בְּשָׁעָה שֶׁבַע. | ba-boker ani kam be-shaa sheva. | 朝は7時に起きる。
הַיְּלָדִים מְשַׂחֲקִים בַּהַפְסָקָה. | ha-yeladim mesachakim ba-hafsaka. | 子どもたちは休み時間に遊ぶ。
לָמָּה אַתְּ לֹא אוֹכֶלֶת? כִּי אֲנִי בְּדִיאֶטָה. | lama at lo ochelet? ki ani be-dieta. | どうして食べないの？—ダイエット中だから。
בְּעֶרֶב שַׁבָּת כָּל הַמִּשְׁפָּחָה אוֹכֶלֶת יַחַד. | be-erev shabat kol ha-mishpacha ochelet yachad. | 金曜の夜は家族みんなで一緒に食べる。
עֶשְׂרִים וְעוֹד שְׁלוֹשִׁים הֵם חֲמִישִּׁים. | esrim ve-od shloshim hem chamishim. | 20足す30は50。
הַטִּיּוּל מְעַנְיֵין וְנָעִים. | ha-tiyul meanyen ve-naim. | そのハイキングは面白くて心地いい。
` },

{ id: "s7", text: `
אֲנִי רוֹצֶה לִהְיוֹת מַדְרִיךְ. | ani rotse lihyot madrich. | 僕はガイドになりたい。
יֵשׁ בְּחִינָה בְּיוֹם חֲמִישִׁי? אֵין בְּעָיָה! | yesh bchina be-yom chamishi? eyn beaya! | 木曜に試験があるの？—問題ないよ！
הוּא עוֹלֶה חָדָשׁ מֵרוּסְיָה. | hu ole chadash me-rusya. | 彼はロシアからの新移民だ。
דַּי! מַסְפִּיק! | day! maspik! | もうやめて！十分だ！
אֲנִי בְּיִשְׂרָאֵל מִיָּנוּאָר עַד יוּלִי. | ani be-yisrael mi-yanuar ad yuli. | 私は1月から7月までイスラエルにいる。
זֶה סִיפּוּר מְשׁוּגָּע! | ze sipur meshuga! | それはとんでもない話だ！
אֲנַחְנוּ עוֹלִים לִירוּשָׁלַיִם. | anachnu olim li-yerushalayim. | 私たちはエルサレムへ上る。
` },

{ id: "s8", text: `
מֶלְצַר, אֶת הַחֶשְׁבּוֹן בְּבַקָּשָׁה! | meltsar, et ha-cheshbon bevakasha! | ウェイターさん、お会計をお願いします！
בַּחוֹרֶף קַר בִּירוּשָׁלַיִם. | ba-choref kar bi-yerushalayim. | 冬のエルサレムは寒い。
הַנּוֹף מֵהַחַלּוֹן יָפֶה מְאוֹד. | ha-nof me-ha-chalon yafe meod. | 窓からの景色はとてもきれいだ。
הַתַּרְגִּיל קָשֶׁה, אֲבָל לֹא מְשַׁעֲמֵם. | ha-targil kashe, aval lo meshaamem. | その練習問題は難しいけど、退屈じゃない。
מַה פִּתְאוֹם! אֲנִי כְּבָר לֹא חוֹלֶה. | ma pitom! ani kvar lo chole. | とんでもない！もう病気じゃないよ。
תַּגִּידִי, אַתְּ רוֹצָה פִּיצָה? בְּכֵיף! | tagidi, at rotsa pitsa? be-kef! | ねえ、ピザ食べたい？—喜んで！
אֲנַחְנוּ חוֹזְרִים הַבַּיְתָה בְּעוֹד שָׁבוּעַ. | anachnu chozrim ha-bayta be-od shavua. | 私たちは1週間後に家に帰る。
` },

{ id: "s9", text: `
בַּת כַּמָּה אַתְּ? אֲנִי בַּת עֶשְׂרִים. | bat kama at? ani bat esrim. | 何歳？—20歳です。
בֶּן כַּמָּה הַיֶּלֶד? הוּא בֶּן שְׁלוֹשׁ עֶשְׂרֵה. | ben kama ha-yeled? hu ben shlosh esre. | その子は何歳？—13歳です。
בְּסוֹף הַשָּׁבוּעַ אֲנַחְנוּ קוֹנִים פֵּירוֹת וִירָקוֹת בַּשּׁוּק. | be-sof ha-shavua anachnu konim perot vi-yerakot ba-shuk. | 週末、市場で果物と野菜を買う。
אֲנִי רוֹצֶה לְשַׁלֵּם בְּצֶ'ק. | ani rotse leshalem be-chek. | 小切手で払いたい。
פֵּירוֹת בְּרִיאִים וּמְתוּקִים. | perot briim u-metukim. | 果物は体によくて甘い。
בְּהַצְלָחָה בַּבְּחִינָה! | be-hatslacha ba-bchina! | 試験がんばって！
הוּא שָׂם אֶת הַגְּבִינָה עַל הַשּׁוּלְחָן. | hu sam et ha-gvina al ha-shulchan. | 彼はチーズをテーブルの上に置く。
` },

{ id: "s10", text: `
מַה קָּרָה? אַתָּה מַרְגִּישׁ טוֹב? כָּכָה כָּכָה. | ma kara? ata margish tov? kacha kacha. | どうしたの？気分はいい？—まあまあ。
הַמּוֹרֶה מַסְבִּיר, וְהַתַּלְמִידִים מְבִינִים. | ha-more masbir, ve-ha-talmidim mevinim. | 先生が説明して、生徒たちは理解する。
אֲנַחְנוּ מַזְמִינִים אֶת כָּל הַמִּשְׁפָּחָה לַמְּסִיבָּה. | anachnu mazminim et kol ha-mishpacha la-mesiba. | 家族みんなをパーティーに招待する。
בַּקַּיִץ אֲנִי מַתְחִיל לַעֲבוֹד בְּעִיתּוֹן. | ba-kayits ani matchil laavod be-iton. | 夏に新聞社で働き始める。
אַחֲרֵי הַשִּׁיעוּר אֲנַחְנוּ הוֹלְכִים לַגַּן. | acharey ha-shiur anachnu holchim la-gan. | 授業のあと、公園へ行く。
הוּא מְסַפֵּר סִיפּוּר נֶהְדָּר. | hu mesaper sipur nehedar. | 彼はすばらしい話をする。
` },

{ id: "s11", text: `
אֲנִי שׁוֹלֵחַ חֲבִילָה בְּדוֹאַר אֲוִויר. | ani sholeach chavila be-doar avir. | 航空便で小包を送る。
הַיּוֹם יוֹם הַהוּלֶדֶת שֶׁלִּי, וַאֲנִי שָׂמֵחַ מְאוֹד. | ha-yom yom ha-huledet sheli, va-ani sameach meod. | 今日は僕の誕生日で、とてもうれしい。
כַּמָּה עוֹלֶה בּוּל לְיַפָּן? | kama ole bul le-yapan? | 日本までの切手はいくら？
תֵּן לִי אֶת הַמַּעֲטָפָה, בְּבַקָּשָׁה. | ten li et ha-maatafa, bevakasha. | 封筒をください。
הַשְּׁאֵלָה פְּשׁוּטָה, אֲבָל הַתְּשׁוּבָה לֹא פְּשׁוּטָה. | ha-sheela pshuta, aval ha-tshuva lo pshuta. | 質問は簡単だが、答えは簡単じゃない。
מֶזֶג הָאֲוִויר הַיּוֹם יָפֶה. | mezeg ha-avir ha-yom yafe. | 今日は天気がいい。
` },

{ id: "s12", text: `
הֵם מִתְחַתְּנִים בַּקַּיִץ. | hem mitchatnim ba-kayits. | 彼らは夏に結婚する。
הַכַּלָּה מִתְרַגֶּשֶׁת לִפְנֵי הַחֲתוּנָּה. | ha-kala mitrageshet lifney ha-chatuna. | 花嫁は結婚式の前にどきどきしている。
אֲנִי מְבַקֶּשֶׁת עוֹד קָפֶה, בְּבַקָּשָׁה. | ani mevakeshet od kafe, bevakasha. | コーヒーをもう一杯お願いします。
הוּא מִתְפַּלֵּל בְּבֵית הַכְּנֶסֶת כָּל בּוֹקֶר. | hu mitpalel be-beyt ha-kneset kol boker. | 彼は毎朝シナゴーグで祈る。
יֵשׁ גֶּשֶׁם, אֲבָל אֲנַחְנוּ מַמְשִׁיכִים לָלֶכֶת. | yesh geshem, aval anachnu mamshichim lalechet. | 雨が降っているけど、私たちは歩き続ける。
קַר נוֹרָא הַיּוֹם! | kar nora ha-yom! | 今日はひどく寒い！
הוּא מִתְכַּתֵּב עִם חָבֵר מִיַּפָּן. | hu mitkatev im chaver mi-yapan. | 彼は日本の友達と文通している。
` },

{ id: "s13", text: `
בְּשַׁבָּת אֲנַחְנוּ נָחִים. | be-shabat anachnu nachim. | 安息日には休む。
מָחָר אֲנִי טָס לְטוֹקְיוֹ. | machar ani tas le-tokyo. | 明日、飛行機で東京へ行く。
הֵם שׁוֹמְרִים שַׁבָּת. | hem shomrim shabat. | 彼らは安息日を守っている。
הַדָּג הַזֶּה טָעִים מְאוֹד! | ha-dag ha-ze taim meod! | この魚はとてもおいしい！
הַכְּפָר קָרוֹב לְמֶרְכַּז הָעִיר. | ha-kfar karov le-merkaz ha-ir. | その村は町の中心に近い。
אַמְהָרִית הִיא שָׂפָה שֵׁמִית. | amharit hi safa shemit. | アムハラ語はセム系の言語だ。
אֵיזֶה כֵּיף! | eize kef! | 楽しい！
` },

{ id: "s14", text: `
הֶחָתָן נוֹתֵן לַכַּלָּה טַבַּעַת. | he-chatan noten la-kala tabaat. | 花婿は花嫁に指輪を渡す。
בְּעֶרֶב שַׁבָּת אַבָּא מְקַדֵּשׁ. | be-erev shabat aba mekadesh. | 金曜の夜、父がキドゥーシュ（聖別の祈り）を唱える。
הַבֵּן וְהַבַּת עוֹמְדִים לְיַד הַמְּכוֹנִית הָאֲדוּמָּה. | ha-ben ve-ha-bat omdim leyad ha-mechonit ha-aduma. | 息子と娘が赤い車のそばに立っている。
זֶה מִנְהָג מַצְחִיק. | ze minhag matschik. | それはおかしな習慣だ。
מַזָּל טוֹב! | mazal tov! | おめでとう！
הוּא נוֹעֵל נַעֲלַיִים שְׁחוֹרוֹת. | hu noel naalayim shchorot. | 彼は黒い靴を履いている。
"שׁוּלְחָן" הוּא שֵׁם עֶצֶם, זָכָר, יָחִיד. | shulchan hu shem etsem, zachar, yachid. | 「シュルハン」は名詞・男性・単数だ。
` },

{ id: "s15", text: `
יֵשׁ לִי שְׁאֵלָה. | yesh li sheela. | 質問があります。
אֵין לִי כֶּסֶף. | eyn li kesef. | お金がない。
לַיַּלְדָּה יֵשׁ שֵׂעָר אָרוֹךְ וְעֵינַיִים כְּחוּלּוֹת. | la-yalda yesh sear aroch ve-eynayim kchulot. | その女の子は長い髪と青い目をしている。
הַיֶּלֶד פּוֹחֵד מֵהַזְּאֵב. | ha-yeled poched me-ha-zeev. | 男の子は狼を怖がっている。
הִיא מְצַיֶּירֶת עִיגּוּל וְקַו. | hi metsayeret igul ve-kav. | 彼女は円と線を描く。
הוּא לֹא שָׂם לֵב. | hu lo sam lev. | 彼は気づいていない。
אֲנִי בְּיִשְׂרָאֵל כְּבָר שְׁנָתַיִים. | ani be-yisrael kvar shnatayim. | 私はもう2年イスラエルにいる。
` },

{ id: "s17", text: `
נוֹלַדְתִּי בְּטוֹקְיוֹ. | noladti be-tokyo. | 私は東京で生まれた。
הוּא מָצָא אוֹצָר בַּמְּעָרָה. | hu matsa otsar ba-meara. | 彼は洞窟で宝を見つけた。
כָּתַבְתִּי מִכְתָּב לְחָבֵר. | katavti michtav le-chaver. | 友達に手紙を書いた。
הִיא עָזְרָה לִי הַרְבֵּה. | hi azra li harbe. | 彼女はたくさん手伝ってくれた。
אֲנִי עָיֵיף, אֲנִי רוֹצֶה לָנוּחַ. | ani ayef, ani rotse lanuach. | 疲れた、休みたい。
הַמּוֹרָה כָּעֲסָה עַל הַתַּלְמִידִים. | ha-mora kaasa al ha-talmidim. | 先生は生徒たちに怒った。
הַהִיסְטוֹרְיוֹן חוֹקֵר אֶת בֵּית הַמִּקְדָּשׁ. | ha-historyon choker et beyt ha-mikdash. | その歴史家はエルサレム神殿を研究している。
הָלַכְנוּ בָּרֶגֶל לַחוֹף. | halachnu ba-regel la-chof. | 私たちは歩いて海岸へ行った。
` },

{ id: "s18", text: `
זֶה הַבַּיִת שֶׁלָּנוּ. | ze ha-bayit shelanu. | これは私たちの家だ。
הַסַּבְתָּא שֶׁלִּי עוֹשָׂה מָרָק טָעִים. | ha-savta sheli osa marak taim. | 僕のおばあちゃんはおいしいスープを作る。
אַתְּ בְּטוּחָה? כֵּן, אֲנִי בְּטוּחָה. | at betucha? ken, ani betucha. | 本当に？—ええ、確かよ。
אָחִי נָשׂוּי, וַאֲחוֹתִי לֹא נְשׂוּאָה. | achi nasuy, va-achoti lo nesua. | 兄（弟）は結婚しているが、姉（妹）はしていない。
יָשַׁנְתִּי שְׁעָתַיִים. | yashanti shaatayim. | 2時間寝た。
הֵם צָחֲקוּ הַרְבֵּה. | hem tsachaku harbe. | 彼らはたくさん笑った。
הַחוּלְצָה שֶׁלְּךָ יָפָה. | ha-chultsa shelcha yafa. | 君のシャツ、すてきだね。
גָּמַרְנוּ לֶאֱכוֹל. | gamarnu leechol. | 食べ終わった。
` },

{ id: "s19", text: `
תּוֹדָה! אֵין בְּעַד מָה. | toda! eyn be-ad ma. | ありがとう！—どういたしまして。
בְּגַן הַחַיּוֹת יֵשׁ אַרְיֵה, קוֹף וְג'ִירָפָה. | be-gan ha-chayot yesh arye, kof ve-jirafa. | 動物園にはライオン、猿、キリンがいる。
צָרִיךְ סַבְלָנוּת. | tsarich savlanut. | 忍耐が必要だ。
קוֹדֶם אֲנַחְנוּ אוֹכְלִים, אַחַר כָּךְ יוֹצְאִים. | kodem anachnu ochlim, achar kach yotsim. | まず食べて、それから出かける。
הַשָּׁכֵן פּוֹתֵחַ אֶת הַשַּׁעַר. | ha-shachen poteach et ha-shaar. | 隣の人が門を開ける。
עוֹד מְעַט הַתּוֹכְנִית מַתְחִילָה. | od meat ha-tochnit matchila. | もうすぐ番組が始まる。
הִיא בָּדְקָה אֶת הַצְּמָחִים. | hi badka et ha-tsmachim. | 彼女は植物を調べた。
` },

{ id: "s20", text: `
אֲנִי זוֹכֵר שֶׁהוּא גָּר בְּחֵיפָה. | ani zocher she-hu gar be-cheifa. | 彼がハイファに住んでいることを覚えている。
שָׁכַחְתִּי אֶת הַפַּסְפּוֹרְט בַּבַּיִת! | shachachti et ha-pasport ba-bayit! | パスポートを家に忘れた！
הַשָּׁבוּעַ יֵשׁ שְׁבִיתָה. | ha-shavua yesh shvita. | 今週はストライキがある。
הִיא סָגְרָה אֶת הַחַלּוֹן. | hi sagra et ha-chalon. | 彼女は窓を閉めた。
אֲנִי רָעֵב! | ani raev! | お腹すいた！
רֹאשׁ הַמֶּמְשָׁלָה פּוֹגֵשׁ אֶת הַנָּשִׂיא. | rosh ha-memshala pogesh et ha-nasi. | 首相が大統領と会う。
הוּא אָמַר שֶׁהוּא חַיָּיל. | hu amar she-hu chayal. | 彼は自分は兵士だと言った。
` },

{ id: "s21", text: `
אֲנִי יָכוֹל לַעֲזוֹר לְךָ? | ani yachol laazor lecha? | 手伝おうか？
הוּא לֹא יָכוֹל לָבוֹא הַיּוֹם. | hu lo yachol lavo ha-yom. | 彼は今日来られない。
אֵיךְ מַגִּיעִים לַתַּחֲנָה הַמֶּרְכָּזִית? | eich magiim la-tachana ha-merkazit? | 中央バスターミナルへはどう行けばいい？
הַנֶּהָג פּוֹנֶה שְׂמֹאלָה. | ha-nehag pone smola. | 運転手は左に曲がる。
זֶה רַעְיוֹן טוֹב! | ze rayon tov! | それはいい考えだ！
זְהִירוּת, יֵשׁ כָּאן טָעוּת! | zehirut, yesh kan taut! | 気をつけて、ここに間違いがある！
תּוֹדָה! עַל לֹא דָּבָר. | toda! al lo davar. | ありがとう！—どういたしまして。
אֲנִי רוֹצֶה לְהַכִּיר אֶת הַמִּשְׁפָּחָה שֶׁלְּךָ. | ani rotse lehakir et ha-mishpacha shelcha. | 君の家族と知り合いたい。
` },

{ id: "s22", text: `
קַר הַיּוֹם, לָכֵן אֲנִי לוֹקֵחַ מְעִיל. | kar ha-yom, lachen ani lokeach meil. | 今日は寒いから、コートを持っていく。
חֲבָל! אַף אֶחָד לֹא בַּבַּיִת. | chaval! af echad lo ba-bayit. | 残念！誰も家にいない。
הַשִּׂמְלָה הַזֹּאת נוֹחָה מְאוֹד. | ha-simla ha-zot nocha meod. | このワンピースはとても着心地がいい。
בַּחוּפְשָׁה אֲנִי לוֹקֵחַ בֶּגֶד יָם. | ba-chufsha ani lokeach beged yam. | 休暇には水着を持っていく。
יֵשׁ פִּתְרוֹן לַבְּעָיָה. | yesh pitaron la-beaya. | その問題には解決策がある。
הַלֶּחֶם טָרִי, וַאֲנִי מְאוּשָּׁר. | ha-lechem tari, va-ani meushar. | パンは焼きたてで、僕は幸せだ。
הוּא מוֹרִיד אֶת הַמְּעִיל. | hu morid et ha-meil. | 彼はコートを脱ぐ。
` },

{ id: "s23", text: `
מַה הַמַּצָּב? | ma ha-matsav? | 調子はどう？
יְרוּשָׁלַיִם הִיא עִיר קְדוֹשָׁה. | yerushalayim hi ir kdosha. | エルサレムは聖なる町だ。
הַבַּיִת רָחוֹק מֵהָעִיר. | ha-bayit rachok me-ha-ir. | その家は町から遠い。
עוֹד פַּעַם, בְּבַקָּשָׁה. | od paam, bevakasha. | もう一度お願いします。
אֲנִי חוֹלֵם עַל בַּיִת גָּדוֹל. | ani cholem al bayit gadol. | 大きな家を夢見ている。
מִזְּמַן לֹא רָאִיתִי אוֹתְךָ! | mi-zman lo raiti otcha! | 久しぶり！（ずっと会っていなかったね）
מִסָּבִיב לָעִיר הָעַתִּיקָה יֵשׁ חוֹמָה. | misaviv la-ir ha-atika yesh choma. | 旧市街の周りには城壁がある。
` },

{ id: "s24", text: `
כּוֹאֵב לִי הָרֹאשׁ. | koev li ha-rosh. | 頭が痛い。
יֵשׁ לוֹ חוֹם, הוּא שׁוֹכֵב בַּמִּיטָּה. | yesh lo chom, hu shochev ba-mita. | 彼は熱があって、ベッドで寝ている。
אֲנִי לֹא מַאֲמִין! | ani lo maamin! | 信じられない！
מַה הַכְּתוֹבֶת שֶׁלְּךָ? | ma ha-ktovet shelcha? | 君の住所は？
הָעֶרֶב אֲנִי חוֹפְשִׁי. | ha-erev ani chofshi. | 今晩は空いている。
כׇּל הַכָּבוֹד! | kol ha-kavod! | よくやった！
הַשּׁוֹטֵר עוֹמֵד בֵּין הַמְּכוֹנִיּוֹת. | ha-shoter omed beyn ha-mechoniyot. | 警察官が車の間に立っている。
הֵם עָזְבוּ אֶת הָעִיר. | hem azvu et ha-ir. | 彼らは町を去った。
` },

{ id: "s25", text: `
אֲנִי מְטַלְפֵן לְבֶן הַדּוֹד שֶׁלִּי. | ani metalfen le-ben ha-dod sheli. | いとこに電話する。
הִיא מְלַמֶּדֶת עִבְרִית בָּאוּנִיבֶרְסִיטָה. | hi melamedet ivrit ba-universita. | 彼女は大学でヘブライ語を教えている。
זֶה הַמָּקוֹם הֲכִי יָפֶה בָּעוֹלָם. | ze ha-makom hachi yafe ba-olam. | ここは世界で一番きれいな場所だ。
בְּדִיּוּק! | bediyuk! | そのとおり！
שְׁטוּיּוֹת! | shtuyot! | ばかばかしい！
הַיֶּלֶד שָׁבַר אֶת הַחַלּוֹן. | ha-yeled shavar et ha-chalon. | 男の子が窓を割った。
הַסַּבָּא שֶׁלִּי זָקֵן, אֲבָל חָזָק. | ha-saba sheli zaken, aval chazak. | 祖父は年をとっているが、元気だ。
` },

{ id: "s26", text: `
הוּא לֹא מְעַשֵּׁן. | hu lo meashen. | 彼はタバコを吸わない。
נִכְנַסְנוּ לַכְּנֵסִיָּה. | nichnasnu la-knesiya. | 私たちは教会に入った。
נִפְגָּשִׁים מוּל הַמִּסְגָּד? | nifgashim mul ha-misgad? | モスクの向かいで会おうか？
בַּקַּיִץ אֲנַחְנוּ שׂוֹחִים בַּיָּם. | ba-kayits anachnu sochim ba-yam. | 夏は海で泳ぐ。
אֲנִי נִשְׁאָר בַּבַּיִת הָעֶרֶב. | ani nishar ba-bayit ha-erev. | 今晩は家にいる。
הָאוֹטוֹבּוּס עוֹצֵר לְיַד הַטַּיֶּילֶת. | ha-otobus otser leyad ha-tayelet. | バスは遊歩道のそばに止まる。
הוּא גָּדַל בְּקִיבּוּץ. | hu gadal be-kibuts. | 彼はキブツで育った。
אֵיזֶה נוּדְנִיק! | eize nudnik! | なんてしつこいやつ！
` },

];
