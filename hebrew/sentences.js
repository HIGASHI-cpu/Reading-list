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
הָאִשָּׁה מִתֵּימָן. | ha-isha mi-teyman. | その女性はイエメン出身だ。
הַיֶּלֶד מִנְּתַנְיָה. | ha-yeled mi-netanya. | その男の子はネタニヤ出身だ。
מֵאַיִן הַתַּלְמִיד? מִיַּרְדֵּן. | me-ayin ha-talmid? mi-yarden. | その生徒はどこから？—ヨルダンから。
הִנֵּה הַדֶּגֶל שֶׁל יִשְׂרָאֵל. | hine ha-degel shel yisrael. | ほら、イスラエルの旗だ。
הָהָר שָׁם. | ha-har sham. | 山はあそこだ。
הַשִּׁיר שֶׁל הַיַּלְדָּה. | ha-shir shel ha-yalda. | その女の子の歌。
` },

{ id: "y3", text: `
שָׁלוֹם, אֲנִי לוֹמֵד אַנְגְּלִית. | shalom, ani lomed anglit. | こんにちは、僕は英語を学んでいます。
הֵם גָּרִים שָׁם. | hem garim sham. | 彼らはそこに住んでいる。
זֶה לֶחֶם אוֹ חַלָּה? | ze lechem o chala? | これはパン？それともハラー？
הַמּוֹרָה שָׁרָה שִׁיר. | ha-mora shara shir. | 先生（女性）が歌を歌っている。
אַתֶּם לוֹמְדִים גֶּרְמָנִית? לֹא, אֲנַחְנוּ לוֹמְדִים רוֹמָנִית. | atem lomdim germanit? lo, anachnu lomdim romanit. | 君たちはドイツ語を学んでいるの？—いいえ、ルーマニア語です。
תּוֹדָה, לְהִתְרָאוֹת! | toda, lehitraot! | ありがとう、またね！
אֲנִי גָּרָה בְּלוֹנְדּוֹן. | ani gara be-london. | 私（女性）はロンドンに住んでいる。
הֵן לוֹמְדוֹת יִידִישׁ. | hen lomdot yidish. | 彼女たちはイディッシュ語を学んでいる。
זֹאת מוֹרָה, וְזֶה מוֹרֶה. | zot mora, ve-ze more. | こちらは女性の先生で、こちらは男性の先生だ。
אַתֶּן שָׁרוֹת? כֵּן, אֲנַחְנוּ שָׁרוֹת. | aten sharot? ken, anachnu sharot. | 君たち（女性）は歌ってるの？—うん、歌ってる。
יַם הַמֶּלַח וְהַגּוֹלָן בְּיִשְׂרָאֵל. | yam ha-melach ve-ha-golan be-yisrael. | 死海とゴラン高原はイスラエルにある。
שָׁלוֹם, מוֹרָה! שָׁלוֹם, תַּלְמִידִים! | shalom, mora! shalom, talmidim! | こんにちは、先生！—こんにちは、生徒たち！
` },

{ id: "y4", text: `
מַה נִּשְׁמָע? מְצוּיָּן! | ma nishma? metsuyan! | 調子どう？—最高！
אֲנִי רוֹצָה מִיץ וְעוּגָה. | ani rotsa mits ve-uga. | 私（女性）はジュースとケーキが欲しい。
לְאָן אַתֶּם רוֹצִים? אוּלַי לְטוֹקְיוֹ. | le-an atem rotsim? ulay le-tokyo. | 君たちはどこへ行きたい？—たぶん東京へ。
הוּא שׁוֹתֶה קוֹקָה קוֹלָה עִם סָלָט. | hu shote koka kola im salat. | 彼はサラダと一緒にコカ・コーラを飲む。
נָעִים מְאוֹד, אֲנִי סְטוּדֶנְטִית. | naim meod, ani studentit. | はじめまして、私は大学生です。
סְלִיחָה, רַק רֶגַע! | slicha, rak rega! | すみません、ちょっと待って！
מָה אַתְּ עוֹשָׂה? | ma at osa? | 何してるの？（女性に）
הוּא רוֹצֶה רַק שׁוֹקוֹלָד. | hu rotse rak shokolad. | 彼はチョコレートだけ欲しがっている。
הִיא שׁוֹתָה מִיץ עִם הַסְּטוּדֶנְטִים. | hi shota mits im ha-studentim. | 彼女は大学生たちとジュースを飲む。
אֲנִי לוֹמֵד מָתֵמָטִיקָה וְאֶלֶקְטְרוֹנִיקָה. | ani lomed matematika ve-elektronika. | 僕は数学と電子工学を学んでいる。
יְרוּשָׁלַיִם עִיר, וּמִצְרַיִם אֶרֶץ. | yerushalayim ir, u-mitsrayim erets. | エルサレムは町で、エジプトは国だ。
קְצָת עוּגָה? אוֹ קֵיי! | ktsat uga? okey! | ケーキ少しどう？—オーケー！
` },

{ id: "y5", text: `
אֲנִי מְדַבֵּר יַפָּנִית וּקְצָת עִבְרִית. | ani medaber yapanit u-ktsat ivrit. | 僕は日本語と少しヘブライ語を話す。
יֵשׁ מוּזֵיאוֹן לְיַד הַבַּיִת. | yesh muzeon leyad ha-bayit. | 家のそばに博物館がある。
אֵין סוּכָּר בַּבַּיִת. | eyn sukar ba-bayit. | 家に砂糖がない。
הַמִּשְׁפָּחָה שֶׁל אַבָּא גָּרָה בִּבְרָזִיל. | ha-mishpacha shel aba gara bi-vrazil. | 父の家族はブラジルに住んでいる。
הַכֹּל בְּסֵדֶר? כֵּן, הַכֹּל בְּסֵדֶר. | ha-kol be-seder? ken, ha-kol be-seder. | 大丈夫？—うん、全部大丈夫。
בָּאוּלְפָּן מְדַבְּרִים עַל פּוֹלִיטִיקָה. | ba-ulpan medabrim al politika. | ウルパンでは政治について話している。
יֵשׁ גָּמָל לְיַד הַבַּיִת! | yesh gamal leyad ha-bayit! | 家のそばにラクダがいる！
אֵין תַּפּוּזִים בַּסּוּפֶּרְמַרְקֶט. | eyn tapuzim ba-supermarket. | スーパーにオレンジがない。
הַתֵּאַטְרוֹן לְיַד הַמּוּזֵיאוֹן. | ha-teatron leyad ha-muzeon. | 劇場は博物館のそばにある。
בַּכִּיתָּה מְדַבְּרִים עִבְרִית. | ba-kita medabrim ivrit. | 教室ではヘブライ語を話す。
יֵשׁ הַרְבֵּה תְּמָרִים בְּיִשְׂרָאֵל. | yesh harbe tmarim be-yisrael. | イスラエルにはナツメヤシがたくさんある。
פֹּה בְּסֵדֶר? כֵּן, פֹּה בְּסֵדֶר. | po be-seder? ken, po be-seder. | ここでいい？—うん、ここでいいよ。
` },

{ id: "y6", text: `
בּוֹקֶר טוֹב! מַה שְּׁלוֹמְךָ? | boker tov! ma shlomcha? | おはよう！元気？（男性に）
אֵיפֹה הָאוּנִיבֶרְסִיטָה? | eifo ha-universita? | 大学はどこですか？
אֲנִי אוֹהֶבֶת מוּזִיקָה, אֲבָל הוּא אוֹהֵב סְפָרִים. | ani ohevet muzika, aval hu ohev sfarim. | 私は音楽が好きだけど、彼は本が好き。
הִיא כּוֹתֶבֶת מִכְתָּב בַּעֲרָבִית. | hi kotevet michtav be-aravit. | 彼女はアラビア語で手紙を書いている。
אֲנַחְנוּ הוֹלְכִים לַבַּנְק עַכְשָׁיו. | anachnu holchim la-bank achshav. | 私たちは今、銀行へ行く。
קָפֶה עִם חָלָב, בְּבַקָּשָׁה. | kafe im chalav, bevakasha. | ミルク入りのコーヒーをください。
בְּרוּכִים הַבָּאִים לְחֵיפָה! | bruchim ha-baim le-cheifa! | ハイファへようこそ！
מַה שְּׁלוֹמֵךְ? טוֹב מְאוֹד, תּוֹדָה. | ma shlomech? tov meod, toda. | 元気？（女性に）—とても元気、ありがとう。
הוּא קוֹרֵא סֵפֶר בְּצָרְפָתִית. | hu kore sefer be-tsarfatit. | 彼はフランス語で本を読んでいる。
אֵיפֹה בֵּית הַמָּלוֹן? בְּתֵל-אָבִיב. | eifo beyt ha-malon? be-tel aviv. | ホテルはどこ？—テルアビブ。
אֲנִי אוֹהֵב פָלָאפֶל, אֲבָל לֹא אָבוֹקָדוֹ. | ani ohev falafel, aval lo avokado. | ファラフェルは好きだけど、アボカドは好きじゃない。
הַפְּרוֹפֶסוֹר בָּא לַשִּׁיעוּר. | ha-profesor ba la-shiur. | 教授が授業に来る。
עֶרֶב טוֹב! יוֹפִי, אַתָּה פֹּה! | erev tov! yofi, ata po! | こんばんは！よかった、来てたんだ！
דְּרִישַׁת שָׁלוֹם לַמִּשְׁפָּחָה! | drishat shalom la-mishpacha! | 家族によろしく！
` },

{ id: "y7", text: `
מַה הַשָּׁעָה? הַשָּׁעָה שְׁתַּיִם וָחֵצִי. | ma ha-shaa? ha-shaa shtayim va-chetsi. | 何時？—2時半です。
אַתָּה יוֹדֵעַ מַה הַשָּׁעָה? | ata yodea ma ha-shaa? | 何時か知ってる？
הַשָּׁעָה חָמֵשׁ וָרֶבַע. | ha-shaa chamesh va-reva. | 5時15分です。
אֲנִי רוֹצֶה סֶנְדְוִויץ' וְצִ'יפְּס עִם קֶטְשׁוֹפּ. | ani rotse sendvich ve-chips im ketshop. | サンドイッチとケチャップ付きのポテトが欲しい。
אֵיזֶה מַזָּל! יֵשׁ קוֹנְצֶ'רְטוֹ לְצֶ'לוֹ. | eize mazal! yesh koncherto le-chelo. | なんて幸運！チェロ協奏曲がある。
בְּשָׁעָה שֶׁבַע יֵשׁ חֲדָשׁוֹת. | be-shaa sheva yesh chadashot. | 7時にニュースがある。
הַשָּׁעָה אַחַת עֶשְׂרֵה. | ha-shaa achat esre. | 11時です。
אֵיפֹה הַשָּׁעוֹן שֶׁלִּי? | eifo ha-shaon sheli? | 僕の時計はどこ？
אֲנִי לֹא יוֹדַעַת. | ani lo yodaat. | 知らない（女性）。
אָז אַתְּ רוֹצָה סֶנְדְוִויץ'? | az at rotsa sendvich? | じゃあ、サンドイッチ欲しい？
הִיא לוֹמֶדֶת סִינִית וְצֶ'כִית. | hi lomedet sinit ve-chechit. | 彼女は中国語とチェコ語を学んでいる。
בְּבַקָּשָׁה, שֶׁקֶט! | bevakasha, sheket! | 静かにしてください！
` },

{ id: "pz1", text: `
הֶחָבֵר שֶׁלִּי גָּר בְּקִיבּוּץ. | ha-chaver sheli gar be-kibuts. | 僕の友達はキブツに住んでいる。
בְּשַׁבָּת כּוּלָּם בַּבַּיִת. | be-shabat kulam ba-bayit. | 安息日にはみんな家にいる。
הִיא לוֹמֶדֶת תַּלְמוּד וּמִשְׁנָה. | hi lomedet talmud u-mishna. | 彼女はタルムードとミシュナを学んでいる。
אֲנַחְנוּ עוֹשִׂים יוֹגָה וּמֶדִיטַצְיָה. | anachnu osim yoga u-meditatsya. | 私たちはヨガと瞑想をする。
הַתַּנַ"ךְ: תּוֹרָה, נְבִיאִים, כְּתוּבִים. | ha-tanach: tora, neviim, ktuvim. | タナハとは、律法・預言者・諸書のこと。
הַחֲבֵרָה שֶׁלִּי בְּהוֹדּוּ. | ha-chavera sheli be-hodu. | 僕の彼女はインドにいる。
אֲנַחְנוּ עוֹשִׂים פִּיקְנִיק בַּגָּלִיל. | anachnu osim piknik ba-galil. | 私たちはガリラヤでピクニックをする。
כּוּלָּם בַּקָּפֶטֶרְיָה. | kulam ba-kafeterya. | みんなカフェテリアにいる。
הוּא לוֹמֵד פִילוֹסוֹפְיָה בִּבְאֵר שֶׁבַע. | hu lomed filosofya bi-veer sheva. | 彼はベエルシェバで哲学を学んでいる。
שַׁבַּת שָׁלוֹם! | shabat shalom! | 良い安息日を！
` },

{ id: "s1", text: `
סְלִיחָה, אֵיפֹה הַשֵּׁירוּתִים? יָשָׁר וְאָז יָמִינָה. | slicha, eifo ha-sherutim? yashar ve-az yamina. | すみません、トイレはどこ？—まっすぐ行って右です。
מָתַי אַתָּה עוֹבֵד? בַּבּוֹקֶר וּבָעֶרֶב. | matay ata oved? ba-boker u-va-erev. | いつ働いてるの？—朝と晩です。
אֲנִי לֹא מֵבִין. מָה אַתָּה אוֹמֵר? | ani lo mevin. ma ata omer? | わからない。何て言ってるの？
כַּמָּה לַחְמָנִיּוֹת אַתְּ קוֹנָה? שְׁתֵּי לַחְמָנִיּוֹת. | kama lachmaniyot at kona? shtey lachmaniyot. | ロールパンをいくつ買うの？—2つ。
אֵיךְ נוֹסְעִים לַסִּפְרִיָּה? בְּאוֹטוֹבּוּס. | eich nosim la-sifriya? be-otobus. | 図書館へはどうやって行くの？—バスで。
אֲנִי מִצְטַעֵר. אֵין דָּבָר! | ani mitstaer. eyn davar! | ごめんなさい。—気にしないで！
אֲנִי שׁוֹמֵעַ מוּזִיקָה בָּאוֹטוֹבּוּס. | ani shomea muzika ba-otobus. | バスで音楽を聴く。
מָה הַמִּסְפָּר שֶׁל הַמּוֹדִיעִין? | ma ha-mispar shel ha-modiin? | 番号案内の番号は何？
הָלוֹ? כֵּן, נָכוֹן. | halo? ken, nachon. | もしもし？—はい、そうです。
הַחֲנוּת בָּרְחוֹב הַזֶּה, שְׂמֹאלָה. | ha-chanut ba-rechov ha-ze, smola. | その店はこの通りの左側だ。
הִיא עוֹבֶדֶת בַּלַּיְלָה. | hi ovedet ba-layla. | 彼女は夜に働く。
בֶּטַח! גַּם אֲנִי וְגַם אַתָּה. | betach! gam ani ve-gam ata. | もちろん！僕も君も。
הוּא דּוֹקְטוֹר לְהִיסְטוֹרְיָה. | hu doktor le-historya. | 彼は歴史学の博士だ。
` },

{ id: "s2", text: `
הַדִּירָה קְטַנָּה, אֲבָל הַמִּטְבָּח גָּדוֹל. | ha-dira ktana, aval ha-mitbach gadol. | アパートは小さいけど、台所は大きい。
אֵיזֶה צִיּוּר יָפֶה! | eize tsiyur yafe! | なんてきれいな絵！
בַּסָּלוֹן יֵשׁ שׁוּלְחָן יָשָׁן וּמְיוּחָד. | ba-salon yesh shulchan yashan u-meyuchad. | 居間には古くて特別なテーブルがある。
אֵיזוֹ מַחְבֶּרֶת אַתָּה רוֹצֶה? | eizo machberet ata rotse? | どのノートが欲しい？
לִפְעָמִים אֲנַחְנוּ שׁוֹמְעִים מוּזִיקָה קְלַאסִית. | lifamim anachnu shomim muzika klasit. | 私たちはときどきクラシック音楽を聴く。
הַבָּחוּר הַזֶּה נֶחְמָד מְאוֹד. | ha-bachur ha-ze nechmad meod. | この若者はとても感じがいい。
יֵשׁ גִּינָּה קְטַנָּה לְיַד הַדִּירָה. | yesh gina ktana leyad ha-dira. | アパートのそばに小さな庭がある。
הַחֶדֶר שֶׁלִּי חָדָשׁ וְיָפֶה. | ha-cheder sheli chadash ve-yafe. | 僕の部屋は新しくてきれいだ。
יֵשׁ חֲנוּכִּיָּה עַל הַשּׁוּלְחָן. | yesh chanukiya al ha-shulchan. | テーブルの上にハヌキヤがある。
הָאַרְמוֹן עַתִּיק וּמְיוּחָד. | ha-armon atik u-meyuchad. | その宮殿は古くて特別だ。
אֵילוּ צִיּוּרִים אַתְּ אוֹהֶבֶת? | eilu tsiyurim at ohevet? | どの絵が好き？
הָרְחוֹב עַל שֵׁם הֶרְצְל. | ha-rechov al shem hertsl. | その通りはヘルツルにちなんで名付けられた。
אֲנִי אוֹהֵב מוּזִיקָה קְלַאסִית, לְמָשָׁל מוֹצַרְט. | ani ohev muzika klasit, lemashal motsart. | クラシック音楽が好きだ、たとえばモーツァルト。
` },

{ id: "s3", text: `
כַּמָּה עוֹלָה פִּיתָּה עִם חוּמוּס? חֲמִישָּׁה שְׁקָלִים. | kama ola pita im chumus? chamisha shkalim. | フムス入りのピタはいくら？—5シェケル。
אֲנַחְנוּ מְטַיְּילִים שְׁלוֹשָׁה יָמִים בְּיִשְׂרָאֵל. | anachnu metaylim shlosha yamim be-yisrael. | 私たちはイスラエルを3日間旅行する。
הוּא יוֹשֵׁב עַל כִּיסֵּא וְאוֹכֵל מַשֶּׁהוּ. | hu yoshev al kise ve-ochel mashehu. | 彼は椅子に座って何か食べている。
זֶה מָקוֹם בְּשָׂרִי אוֹ חֲלָבִי? | ze makom besari o chalavi? | ここは肉料理の店？それとも乳製品の店？
כָּל יוֹם אֲנִי לוֹמֵד עֶשֶׂר מִילִּים חֲדָשׁוֹת. | kol yom ani lomed eser milim chadashot. | 毎日、新しい単語を10個覚える。
רַק עוֹד דַּקָּה! | rak od daka! | あと1分だけ！
בָּאַכְסַנְיָה יֵשׁ מִיטָּה וְכִיסֵּא. | ba-achsanya yesh mita ve-kise. | ホステルにはベッドと椅子がある。
הַבֶּדוּאִים גָּרִים בְּאוֹהָלִים. | ha-beduim garim be-ohalim. | ベドウィンはテントに住んでいる。
אֵיפֹה הַכַּסְפּוֹמָט? | eifo ha-kaspomat? | ATMはどこ？
הַשָּׁטִיחַ עוֹלֶה אֶלֶף שְׁקָלִים. | ha-shatiach ole elef shkalim. | そのじゅうたんは1000シェケルする。
אֲנִי רוֹצֶה עוֹד פִּיתָּה, בְּבַקָּשָׁה. | ani rotse od pita, bevakasha. | ピタをもう一つください。
בַּמִּשְׁפָּחָה יֵשׁ אַרְבָּעָה יְלָדִים. | ba-mishpacha yesh arbaa yeladim. | その家族には子どもが4人いる。
אַתָּה רוֹצֶה מַשֶּׁהוּ אַחֵר? | ata rotse mashehu acher? | 何か別のものが欲しい？
` },

{ id: "s4", text: `
אֲנִי מְחַפֵּשׂ אֶת הַפַּסְפּוֹרְט שֶׁלִּי. | ani mechapes et ha-pasport sheli. | 僕のパスポートを探している。
אַתָּה מַכִּיר אֶת הַדּוֹדָה שֶׁלִּי? | ata makir et ha-doda sheli? | 僕のおばさんを知ってる？
מָחָר אֲנַחְנוּ פּוֹגְשִׁים אֶת הַחֲבֵרִים לְיַד הַכּוֹתֶל. | machar anachnu pogshim et ha-chaverim leyad ha-kotel. | 明日、嘆きの壁のそばで友達と会う。
הַיּוֹם יוֹם רִאשׁוֹן, וּמָחָר יוֹם שֵׁנִי. | ha-yom yom rishon, u-machar yom sheni. | 今日は日曜日で、明日は月曜日だ。
הָעִיתּוֹן זוֹל, רַק חֲמִישָּׁה שְׁקָלִים. | ha-iton zol, rak chamisha shkalim. | 新聞は安い、たった5シェケルだ。
אַהֲלָן! מַה נִּשְׁמָע? | ahalan! ma nishma? | やあ！調子どう？
אֲנִי רוֹאֶה אֶת הַמּוֹכֶרֶת. | ani roe et ha-mocheret. | 店員（女性）が見える。
בְּיוֹם שְׁלִישִׁי אֲנִי עוֹשֶׂה טַאי צִ'י. | be-yom shlishi ani ose tay chi. | 火曜日に太極拳をする。
הַדּוֹד שֶׁלִּי קוֹנֶה סִיגַרְיוֹת בְּדְיוּטִי פְרִי. | ha-dod sheli kone sigaryot be-dyuti fri. | おじは免税店でタバコを買う。
כַּמָּה כֶּסֶף יֵשׁ בַּתִּיק? | kama kesef yesh ba-tik? | かばんにいくらお金が入ってる？
אֲנִי קוֹרֵא אֶת הָעִיתּוֹן כָּל יוֹם. | ani kore et ha-iton kol yom. | 毎日新聞を読む。
יוֹם רְבִיעִי, יוֹם חֲמִישִׁי, יוֹם שִׁישִּׁי, וְאָז שַׁבָּת! | yom revii, yom chamishi, yom shishi, ve-az shabat! | 水曜、木曜、金曜、そして安息日！
פִּיתָּה עִם טְחִינָה? זֶהוּ? | pita im tchina? zehu? | タヒーナ入りのピタ？それだけ？
` },

{ id: "s6", text: `
בַּבּוֹקֶר אֲנִי קָם בְּשָׁעָה שֶׁבַע. | ba-boker ani kam be-shaa sheva. | 朝は7時に起きる。
הַיְּלָדִים מְשַׂחֲקִים בַּהַפְסָקָה. | ha-yeladim mesachakim ba-hafsaka. | 子どもたちは休み時間に遊ぶ。
לָמָּה אַתְּ לֹא אוֹכֶלֶת? כִּי אֲנִי בְּדִיאֶטָה. | lama at lo ochelet? ki ani be-dieta. | どうして食べないの？—ダイエット中だから。
בְּעֶרֶב שַׁבָּת כָּל הַמִּשְׁפָּחָה אוֹכֶלֶת יַחַד. | be-erev shabat kol ha-mishpacha ochelet yachad. | 金曜の夜は家族みんなで一緒に食べる。
עֶשְׂרִים וְעוֹד שְׁלוֹשִׁים הֵם חֲמִישִּׁים. | esrim ve-od shloshim hem chamishim. | 20足す30は50。
הַטִּיּוּל מְעַנְיֵין וְנָעִים. | ha-tiyul meanyen ve-naim. | そのハイキングは面白くて心地いい。
הַהוֹרִים שֶׁלִּי חוֹזְרִים בָּעֶרֶב. | ha-horim sheli chozrim ba-erev. | 両親は夕方に帰ってくる。
בְּלִי אוֹכֶל אֵין טִיּוּל! | bli ochel eyn tiyul! | 食べ物なしにハイキングはない！
הַשְּׁאֵלָה קַלָּה. | ha-sheela kala. | その質問は簡単だ。
לְפִי הַמּוֹרָה, הַשִּׁיעוּר מְעַנְיֵין. | lefi ha-mora, ha-shiur meanyen. | 先生によれば、その授業は面白い。
אֲנַחְנוּ רוֹקְדִים יַחַד. | anachnu rokdim yachad. | 私たちは一緒に踊る。
מֵאָה פָּחוֹת שִׁבְעִים הֵם שְׁלוֹשִׁים. | mea pachot shivim hem shloshim. | 100引く70は30。
הִיא מִתְנַדֶּבֶת בְּבֵית סֵפֶר. | hi mitnadevet be-veyt sefer. | 彼女は学校でボランティアをしている。
` },

{ id: "s7", text: `
אֲנִי רוֹצֶה לִהְיוֹת מַדְרִיךְ. | ani rotse lihyot madrich. | 僕はガイドになりたい。
יֵשׁ בְּחִינָה בְּיוֹם חֲמִישִׁי? אֵין בְּעָיָה! | yesh bchina be-yom chamishi? eyn beaya! | 木曜に試験があるの？—問題ないよ！
הוּא עוֹלֶה חָדָשׁ מֵרוּסְיָה. | hu ole chadash me-rusya. | 彼はロシアからの新移民だ。
דַּי! מַסְפִּיק! | day! maspik! | もうやめて！十分だ！
אֲנִי בְּיִשְׂרָאֵל מִיָּנוּאָר עַד יוּלִי. | ani be-yisrael mi-yanuar ad yuli. | 私は1月から7月までイスラエルにいる。
זֶה סִיפּוּר מְשׁוּגָּע! | ze sipur meshuga! | それはとんでもない話だ！
אֲנַחְנוּ עוֹלִים לִירוּשָׁלַיִם. | anachnu olim li-yerushalayim. | 私たちはエルサレムへ上る。
הֵם בּוֹנִים בַּיִת חָדָשׁ. | hem bonim bayit chadash. | 彼らは新しい家を建てている。
אֵיפֹה הַכַּרְטִיס? | eifo ha-kartis? | チケットはどこ？
הַמַּדְרִיכָה עִם כּוֹבַע טֶמְבֶּל. | ha-madricha im kova tembel. | そのガイド（女性）はテンベル帽をかぶっている。
שׁוּם דָּבָר! | shum davar! | 何も！
בְּאוֹגוּסְט אֲנַחְנוּ בְּיִשְׂרָאֵל. | be-ogust anachnu be-yisrael. | 8月に私たちはイスラエルにいる。
הוּא אַשְׁכְּנַזִּי, וְהִיא סְפָרַדִּיָּה. | hu ashkenazi, ve-hi sfaradiya. | 彼はアシュケナジーで、彼女はスファラディだ。
יֵשׁ פֶסְטִיבָל בַּסִּינֵמָטֵק בְּיוּלִי. | yesh festival ba-sinematek be-yuli. | 7月にシネマテークでフェスティバルがある。
` },

{ id: "s8", text: `
מֶלְצַר, אֶת הַחֶשְׁבּוֹן בְּבַקָּשָׁה! | meltsar, et ha-cheshbon bevakasha! | ウェイターさん、お会計をお願いします！
בַּחוֹרֶף קַר בִּירוּשָׁלַיִם. | ba-choref kar bi-yerushalayim. | 冬のエルサレムは寒い。
הַנּוֹף מֵהַחַלּוֹן יָפֶה מְאוֹד. | ha-nof me-ha-chalon yafe meod. | 窓からの景色はとてもきれいだ。
הַתַּרְגִּיל קָשֶׁה, אֲבָל לֹא מְשַׁעֲמֵם. | ha-targil kashe, aval lo meshaamem. | その練習問題は難しいけど、退屈じゃない。
מַה פִּתְאוֹם! אֲנִי כְּבָר לֹא חוֹלֶה. | ma pitom! ani kvar lo chole. | とんでもない！もう病気じゃないよ。
תַּגִּידִי, אַתְּ רוֹצָה פִּיצָה? בְּכֵיף! | tagidi, at rotsa pitsa? be-kef! | ねえ、ピザ食べたい？—喜んで！
אֲנַחְנוּ חוֹזְרִים הַבַּיְתָה בְּעוֹד שָׁבוּעַ. | anachnu chozrim ha-bayta be-od shavua. | 私たちは1週間後に家に帰る。
אֲנִי כְּבָר בַּדֶּרֶךְ! | ani kvar ba-derech! | もう向かってるよ！
הַתַּיָּירִים בַּמִּדְבָּר. | ha-tayarim ba-midbar. | 観光客たちは砂漠にいる。
לִבְרִיאוּת! | livriut! | お大事に！（くしゃみのあと）
הַקָּפֶה קַר! | ha-kafe kar! | コーヒーが冷めてる！
הַמִּסְעָדָה כְּשֵׁרָה? | ha-misada kshera? | そのレストランはコシェル？
אַחְלָה פִּיצָה! | achla pitsa! | 最高のピザ！
הִיא תָּמִיד שְׁקֵטָה. | hi tamid shketa. | 彼女はいつも静かだ。
פִּתְאוֹם הוּא בָּא. | pitom hu ba. | 突然彼が来る。
` },

{ id: "s9", text: `
בַּת כַּמָּה אַתְּ? אֲנִי בַּת עֶשְׂרִים. | bat kama at? ani bat esrim. | 何歳？—20歳です。
בֶּן כַּמָּה הַיֶּלֶד? הוּא בֶּן שְׁלוֹשׁ עֶשְׂרֵה. | ben kama ha-yeled? hu ben shlosh esre. | その子は何歳？—13歳です。
בְּסוֹף הַשָּׁבוּעַ אֲנַחְנוּ קוֹנִים פֵּירוֹת וִירָקוֹת בַּשּׁוּק. | be-sof ha-shavua anachnu konim perot vi-yerakot ba-shuk. | 週末、市場で果物と野菜を買う。
אֲנִי רוֹצֶה לְשַׁלֵּם בְּצֶ'ק. | ani rotse leshalem be-chek. | 小切手で払いたい。
פֵּירוֹת בְּרִיאִים וּמְתוּקִים. | perot briim u-metukim. | 果物は体によくて甘い。
בְּהַצְלָחָה בַּבְּחִינָה! | be-hatslacha ba-bchina! | 試験がんばって！
הוּא שָׂם אֶת הַגְּבִינָה עַל הַשּׁוּלְחָן. | hu sam et ha-gvina al ha-shulchan. | 彼はチーズをテーブルの上に置く。
אֲנִי שָׂם אֶת הַפְּרָחִים עַל הַשּׁוּלְחָן. | ani sam et ha-prachim al ha-shulchan. | 花をテーブルの上に置く。
הַגַּנָּן מְקַבֵּל מִכְתָּב. | ha-ganan mekabel michtav. | 庭師は手紙を受け取る。
יֵשׁ מְסִיבָּה בְּסוֹף הַשָּׁבוּעַ. | yesh mesiba be-sof ha-shavua. | 週末にパーティーがある。
אֲנִי אוֹהֵב סָלָט עִם עַגְבָנִיּוֹת וְזֵיתִים. | ani ohev salat im agvaniyot ve-zeytim. | トマトとオリーブ入りのサラダが好きだ。
לֹא חָשׁוּב! | lo chashuv! | 気にしないで！
הַקַּנְיוֹן גָּדוֹל מְאוֹד. | ha-kanyon gadol meod. | そのショッピングモールはとても大きい。
סַבָּא בֶּן תִּשְׁעִים. | saba ben tishim. | おじいちゃんは90歳だ。
` },

{ id: "s10", text: `
מַה קָּרָה? אַתָּה מַרְגִּישׁ טוֹב? כָּכָה כָּכָה. | ma kara? ata margish tov? kacha kacha. | どうしたの？気分はいい？—まあまあ。
הַמּוֹרֶה מַסְבִּיר, וְהַתַּלְמִידִים מְבִינִים. | ha-more masbir, ve-ha-talmidim mevinim. | 先生が説明して、生徒たちは理解する。
אֲנַחְנוּ מַזְמִינִים אֶת כָּל הַמִּשְׁפָּחָה לַמְּסִיבָּה. | anachnu mazminim et kol ha-mishpacha la-mesiba. | 家族みんなをパーティーに招待する。
בַּקַּיִץ אֲנִי מַתְחִיל לַעֲבוֹד בְּעִיתּוֹן. | ba-kayits ani matchil laavod be-iton. | 夏に新聞社で働き始める。
אַחֲרֵי הַשִּׁיעוּר אֲנַחְנוּ הוֹלְכִים לַגַּן. | acharey ha-shiur anachnu holchim la-gan. | 授業のあと、公園へ行く。
הוּא מְסַפֵּר סִיפּוּר נֶהְדָּר. | hu mesaper sipur nehedar. | 彼はすばらしい話をする。
הִיא מַפְסִיקָה לְדַבֵּר. | hi mafsika ledaber. | 彼女は話すのをやめる。
הוּא מַצְלִיחַ בְּכָל דָּבָר. | hu matsliach be-chol davar. | 彼は何でもうまくいく。
הָעִיתּוֹנָאִית מְדַבֶּרֶת בַּפֶּלֶאפוֹן. | ha-itonait medaberet ba-pelefon. | 記者（女性）が携帯で話している。
זֶה הַחוֹדֶשׁ הָאַחֲרוֹן שֶׁל הַקַּיִץ. | ze ha-chodesh ha-acharon shel ha-kayits. | これは夏の最後の月だ。
הַפִילוֹסוֹף הַיְּוָונִי חָשׁוּב מְאוֹד. | ha-filosof ha-yevani chashuv meod. | そのギリシャの哲学者はとても重要だ。
כָּךְ אֲנַחְנוּ לוֹמְדִים עִבְרִית. | kach anachnu lomdim ivrit. | こうやって私たちはヘブライ語を学ぶ。
אַחֲרֵי הָעֲבוֹדָה אֲנִי עוֹשֶׂה גִ'וֹגִינְג. | acharey ha-avoda ani ose joging. | 仕事のあとジョギングをする。
` },

{ id: "s11", text: `
אֲנִי שׁוֹלֵחַ חֲבִילָה בְּדוֹאַר אֲוִויר. | ani sholeach chavila be-doar avir. | 航空便で小包を送る。
הַיּוֹם יוֹם הַהוּלֶדֶת שֶׁלִּי, וַאֲנִי שָׂמֵחַ מְאוֹד. | ha-yom yom ha-huledet sheli, va-ani sameach meod. | 今日は僕の誕生日で、とてもうれしい。
כַּמָּה עוֹלֶה בּוּל לְיַפָּן? | kama ole bul le-yapan? | 日本までの切手はいくら？
תֵּן לִי אֶת הַמַּעֲטָפָה, בְּבַקָּשָׁה. | ten li et ha-maatafa, bevakasha. | 封筒をください。
הַשְּׁאֵלָה פְּשׁוּטָה, אֲבָל הַתְּשׁוּבָה לֹא פְּשׁוּטָה. | ha-sheela pshuta, aval ha-tshuva lo pshuta. | 質問は簡単だが、答えは簡単じゃない。
מֶזֶג הָאֲוִויר הַיּוֹם יָפֶה. | mezeg ha-avir ha-yom yafe. | 今日は天気がいい。
הַפָּקִיד עוֹבֵד בַּמִּשְׂרָד. | ha-pakid oved ba-misrad. | 事務員は事務所で働いている。
אֲנִי עָצוּב הַיּוֹם. | ani atsuv ha-yom. | 今日は悲しい。
הַכֶּלֶב שֶׁלִּי קָטָן וְשָׂמֵחַ. | ha-kelev sheli katan ve-sameach. | 僕の犬は小さくて陽気だ。
אֵיפֹה תֵּיבַת הַדּוֹאַר? | eifo teyvat ha-doar? | ポストはどこ？
הַבַּקְבּוּק יָקָר מְאוֹד. | ha-bakbuk yakar meod. | その瓶はとても高い。
אֲנַחְנוּ עוֹשִׂים שִׁיעוּרֵי בַּיִת. | anachnu osim shiurey bayit. | 私たちは宿題をしている。
הוּא בְּבֵית חוֹלִים. | hu be-veyt cholim. | 彼は病院にいる。
תְּנִי לִי, בְּבַקָּשָׁה! | tni li, bevakasha! | ちょうだい、お願い！（女性に）
` },

{ id: "s12", text: `
הֵם מִתְחַתְּנִים בַּקַּיִץ. | hem mitchatnim ba-kayits. | 彼らは夏に結婚する。
הַכַּלָּה מִתְרַגֶּשֶׁת לִפְנֵי הַחֲתוּנָּה. | ha-kala mitrageshet lifney ha-chatuna. | 花嫁は結婚式の前にどきどきしている。
אֲנִי מְבַקֶּשֶׁת עוֹד קָפֶה, בְּבַקָּשָׁה. | ani mevakeshet od kafe, bevakasha. | コーヒーをもう一杯お願いします。
הוּא מִתְפַּלֵּל בְּבֵית הַכְּנֶסֶת כָּל בּוֹקֶר. | hu mitpalel be-beyt ha-kneset kol boker. | 彼は毎朝シナゴーグで祈る。
יֵשׁ גֶּשֶׁם, אֲבָל אֲנַחְנוּ מַמְשִׁיכִים לָלֶכֶת. | yesh geshem, aval anachnu mamshichim lalechet. | 雨が降っているけど、私たちは歩き続ける。
קַר נוֹרָא הַיּוֹם! | kar nora ha-yom! | 今日はひどく寒い！
הוּא מִתְכַּתֵּב עִם חָבֵר מִיַּפָּן. | hu mitkatev im chaver mi-yapan. | 彼は日本の友達と文通している。
הִיא מִתְלַבֶּשֶׁת וְהוֹלֶכֶת לַחֲתוּנָּה. | hi mitlabeshet ve-holechet la-chatuna. | 彼女は服を着て結婚式へ行く。
הֶחָתָן צָעִיר מְאוֹד. | he-chatan tsair meod. | 花婿はとても若い。
הוּא לוֹמֵד בִּישִׁיבָה. | hu lomed bi-yeshiva. | 彼はイェシヴァで学んでいる。
יֵשׁ מְזוּזָה עַל הַדֶּלֶת. | yesh mezuza al ha-delet. | ドアにメズザがある。
חַג שָׂמֵחַ! | chag sameach! | 祝日おめでとう！
אֲנִי רוֹחֵץ אֶת הַיָּדַיִים. | ani rochets et ha-yadayim. | 手を洗う。
הַפְּסִיכוֹלוֹגִית אִינְטֶלִיגֶנְטִית מְאוֹד. | ha-psichologit inteligentit meod. | その心理学者（女性）はとても聡明だ。
` },

{ id: "s13", text: `
בְּשַׁבָּת אֲנַחְנוּ נָחִים. | be-shabat anachnu nachim. | 安息日には休む。
מָחָר אֲנִי טָס לְטוֹקְיוֹ. | machar ani tas le-tokyo. | 明日、飛行機で東京へ行く。
הֵם שׁוֹמְרִים שַׁבָּת. | hem shomrim shabat. | 彼らは安息日を守っている。
הַדָּג הַזֶּה טָעִים מְאוֹד! | ha-dag ha-ze taim meod! | この魚はとてもおいしい！
הַכְּפָר קָרוֹב לְמֶרְכַּז הָעִיר. | ha-kfar karov le-merkaz ha-ir. | その村は町の中心に近い。
אַמְהָרִית הִיא שָׂפָה שֵׁמִית. | amharit hi safa shemit. | アムハラ語はセム系の言語だ。
אֵיזֶה כֵּיף! | eize kef! | 楽しい！
אֲנִי לֹא זָז! | ani lo zaz! | 僕は動かないぞ！
בְּיוֹם כִּיפּוּר הַרְבֵּה אֲנָשִׁים צָמִים. | be-yom kipur harbe anashim tsamim. | ヨム・キプールには多くの人が断食する。
יֵשׁ חוֹר בַּכְּבִישׁ. | yesh chor ba-kvish. | 道路に穴がある。
הַמֶּלֶךְ וְהַמַּלְכָּה בָּאַרְמוֹן. | ha-melech ve-ha-malka ba-armon. | 王と女王は宮殿にいる。
זֶה סִימָן טוֹב. | ze siman tov. | それはいいしるしだ。
הוּא עוֹשֶׂה סְפּוֹרְט בַּפַּארְק. | hu ose sport ba-park. | 彼は公園でスポーツをする。
הַחֲלוֹם שֶׁלִּי: מָרָתוֹן בְּטוֹקְיוֹ! | ha-chalom sheli: maraton be-tokyo! | 僕の夢：東京でマラソン！
` },

{ id: "s14", text: `
הֶחָתָן נוֹתֵן לַכַּלָּה טַבַּעַת. | he-chatan noten la-kala tabaat. | 花婿は花嫁に指輪を渡す。
בְּעֶרֶב שַׁבָּת אַבָּא מְקַדֵּשׁ. | be-erev shabat aba mekadesh. | 金曜の夜、父がキドゥーシュ（聖別の祈り）を唱える。
הַבֵּן וְהַבַּת עוֹמְדִים לְיַד הַמְּכוֹנִית הָאֲדוּמָּה. | ha-ben ve-ha-bat omdim leyad ha-mechonit ha-aduma. | 息子と娘が赤い車のそばに立っている。
זֶה מִנְהָג מַצְחִיק. | ze minhag matschik. | それはおかしな習慣だ。
מַזָּל טוֹב! | mazal tov! | おめでとう！
הוּא נוֹעֵל נַעֲלַיִים שְׁחוֹרוֹת. | hu noel naalayim shchorot. | 彼は黒い靴を履いている。
"שׁוּלְחָן" הוּא שֵׁם עֶצֶם, זָכָר, יָחִיד. | shulchan hu shem etsem, zachar, yachid. | 「シュルハン」は名詞・男性・単数だ。
הוּא נוֹפֵל בָּרְחוֹב. | hu nofel ba-rechov. | 彼は通りで転ぶ。
הָאַבָּא קוֹרֵא לַבֵּן. | ha-aba kore la-ben. | 父は息子を呼ぶ。
הַזּוּג הַצָּעִיר בַּחוֹפֶשׁ. | ha-zug ha-tsair ba-chofesh. | その若いカップルは休暇中だ。
תַּפּוּחַ בִּדְבַשׁ, שָׁנָה טוֹבָה! | tapuach bi-dvash, shana tova! | はちみつにリンゴを、良い一年を！
הַטֶּקֶס מַתְחִיל בְּשָׁעָה שֶׁבַע. | ha-tekes matchil be-shaa sheva. | 式は7時に始まる。
הַבַּת שֶׁלִּי אוֹהֶבֶת מִשְׂחָקִים. | ha-bat sheli ohevet mischakim. | 娘はゲームが好きだ。
הָאוֹת הָרִאשׁוֹנָה הִיא אָלֶף. | ha-ot ha-rishona hi alef. | 最初の文字はアレフだ。
` },

{ id: "s15", text: `
יֵשׁ לִי שְׁאֵלָה. | yesh li sheela. | 質問があります。
אֵין לִי כֶּסֶף. | eyn li kesef. | お金がない。
לַיַּלְדָּה יֵשׁ שֵׂעָר אָרוֹךְ וְעֵינַיִים כְּחוּלּוֹת. | la-yalda yesh sear aroch ve-eynayim kchulot. | その女の子は長い髪と青い目をしている。
הַיֶּלֶד פּוֹחֵד מֵהַזְּאֵב. | ha-yeled poched me-ha-zeev. | 男の子は狼を怖がっている。
הִיא מְצַיֶּירֶת עִיגּוּל וְקַו. | hi metsayeret igul ve-kav. | 彼女は円と線を描く。
הוּא לֹא שָׂם לֵב. | hu lo sam lev. | 彼は気づいていない。
אֲנִי בְּיִשְׂרָאֵל כְּבָר שְׁנָתַיִים. | ani be-yisrael kvar shnatayim. | 私はもう2年イスラエルにいる。
יֵשׁ לָהּ עֵינַיִים יָפוֹת. | yesh la eynayim yafot. | 彼女はきれいな目をしている。
יֵשׁ לוֹ לֵב טוֹב. | yesh lo lev tov. | 彼は心が優しい。
הוּא לוֹקֵחַ אֶת הַתִּיק. | hu lokeach et ha-tik. | 彼はかばんを取る。
אֲנִי עוֹנָה עַל הַשְּׁאֵלָה. | ani ona al ha-sheela. | 私（女性）は質問に答える。
זֹאת הָאֱמֶת! | zot ha-emet! | それが本当のことだ！
יֵשׁ לָנוּ צָרָה. | yesh lanu tsara. | 困ったことになった。
הִיא כּוֹתֶבֶת בַּיּוֹמָן כָּל עֶרֶב. | hi kotevet ba-yoman kol erev. | 彼女は毎晩日記を書く。
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
הִיא נוֹלְדָה בְּחֵיפָה. | hi nolda be-cheifa. | 彼女はハイファで生まれた。
מָצָאתִי אֶת הַפַּסְפּוֹרְט! | matsati et ha-pasport! | パスポートを見つけた！
סִידַּרְנוּ אֶת הַחֶדֶר. | sidarnu et ha-cheder. | 私たちは部屋を片付けた。
לָמַדְתִּי עִבְרִית בָּאוּלְפָּן. | lamadti ivrit ba-ulpan. | ウルパンでヘブライ語を学んだ。
הוּא לֹא רַע, הוּא עָיֵיף. | hu lo ra, hu ayef. | 彼は意地悪なんじゃなくて、疲れているんだ。
הַמְּגִילּוֹת בַּמְּעָרָה. | ha-megilot ba-meara. | 巻物は洞窟にある。
הָיְתָה לָנוּ פְּגִישָׁה טוֹבָה. | hayta lanu pgisha tova. | いい会合だった。
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
אֲנִי יָשֵׁן שְׁמוֹנֶה שָׁעוֹת. | ani yashen shmone shaot. | 8時間寝る。
אֵיפֹה הַצַּלַּחַת שֶׁלְּךָ? | eifo ha-tsalachat shelcha? | 君のお皿はどこ？
הַנֶּכֶד שֶׁלָּהּ סְפּוֹרְטַאי מְפוּרְסָם. | ha-neched shela sportay mefursam. | 彼女の孫は有名なスポーツ選手だ。
הֵם מְרַכְלִים עַל הַשְּׁכֵנִים. | hem merachlim al ha-shchenim. | 彼らは近所の人のうわさ話をしている。
בְּפוּרִים כּוּלָּם צוֹחֲקִים. | be-purim kulam tsochakim. | プーリムにはみんな笑っている。
כָּאן הַבַּיִת שֶׁל הָרַבִּי. | kan ha-bayit shel ha-rabi. | ここがラビの家だ。
הִיא מְנַקָּה אֶת הַבַּיִת כָּל שָׁבוּעַ. | hi menaka et ha-bayit kol shavua. | 彼女は毎週家を掃除する。
יֵשׁ לִי אָח וּשְׁתֵּי אֲחָיוֹת. | yesh li ach u-shtey achayot. | 兄弟が1人と姉妹が2人いる。
` },

{ id: "s19", text: `
תּוֹדָה! אֵין בְּעַד מָה. | toda! eyn be-ad ma. | ありがとう！—どういたしまして。
בְּגַן הַחַיּוֹת יֵשׁ אַרְיֵה, קוֹף וְג'ִירָפָה. | be-gan ha-chayot yesh arye, kof ve-jirafa. | 動物園にはライオン、猿、キリンがいる。
צָרִיךְ סַבְלָנוּת. | tsarich savlanut. | 忍耐が必要だ。
קוֹדֶם אֲנַחְנוּ אוֹכְלִים, אַחַר כָּךְ יוֹצְאִים. | kodem anachnu ochlim, achar kach yotsim. | まず食べて、それから出かける。
הַשָּׁכֵן פּוֹתֵחַ אֶת הַשַּׁעַר. | ha-shachen poteach et ha-shaar. | 隣の人が門を開ける。
עוֹד מְעַט הַתּוֹכְנִית מַתְחִילָה. | od meat ha-tochnit matchila. | もうすぐ番組が始まる。
הִיא בָּדְקָה אֶת הַצְּמָחִים. | hi badka et ha-tsmachim. | 彼女は植物を調べた。
אֲנִי צָרִיךְ לִבְדּוֹק אֶת זֶה. | ani tsarich livdok et ze. | これを確認しなきゃ。
הַקּוֹף אוֹכֵל בָּנָנָה. | ha-kof ochel banana. | 猿がバナナを食べている。
הִיא יָצְאָה מֵהַבַּיִת. | hi yatsa me-ha-bayit. | 彼女は家を出た。
הוּא פּוֹתֵחַ אֶת הַדֶּלֶת. | hu poteach et ha-delet. | 彼はドアを開ける。
בַּסָּלָט יֵשׁ גֶּזֶר, בָּצָל וְשֶׁמֶן זַיִת. | ba-salat yesh gezer, batsal ve-shemen zayit. | サラダにはにんじん、玉ねぎ、オリーブオイルが入っている。
הַקְּבוּצָה שֶׁלָּנוּ גְּדוֹלָה. | ha-kvutsa shelanu gdola. | 私たちのグループは大きい。
יֵשׁ הָמוֹן אֲנָשִׁים בְּגַן הַחַיּוֹת. | yesh hamon anashim be-gan ha-chayot. | 動物園にはものすごく人がいる。
` },

{ id: "s20", text: `
אֲנִי זוֹכֵר שֶׁהוּא גָּר בְּחֵיפָה. | ani zocher she-hu gar be-cheifa. | 彼がハイファに住んでいることを覚えている。
שָׁכַחְתִּי אֶת הַפַּסְפּוֹרְט בַּבַּיִת! | shachachti et ha-pasport ba-bayit! | パスポートを家に忘れた！
הַשָּׁבוּעַ יֵשׁ שְׁבִיתָה. | ha-shavua yesh shvita. | 今週はストライキがある。
הִיא סָגְרָה אֶת הַחַלּוֹן. | hi sagra et ha-chalon. | 彼女は窓を閉めた。
אֲנִי רָעֵב! | ani raev! | お腹すいた！
רֹאשׁ הַמֶּמְשָׁלָה פּוֹגֵשׁ אֶת הַנָּשִׂיא. | rosh ha-memshala pogesh et ha-nasi. | 首相が大統領と会う。
הוּא אָמַר שֶׁהוּא חַיָּיל. | hu amar she-hu chayal. | 彼は自分は兵士だと言った。
הַחַיָּיל עוֹמֵד לְיַד הַשַּׁעַר. | ha-chayal omed leyad ha-shaar. | 兵士が門のそばに立っている。
אַתָּה זוֹכֵר אוֹתִי? | ata zocher oti? | 僕のこと覚えてる？
אֲנִי רוֹצֶה לְהַגִּיד לְךָ מַשֶּׁהוּ. | ani rotse lehagid lecha mashehu. | 君に言いたいことがある。
אֵין לִי כּוֹחַ. | eyn li koach. | 気力がない（疲れた）。
הֵם סוֹגְרִים אֶת הַחֲנוּת בְּשָׁעָה שֶׁבַע. | hem sogrim et ha-chanut be-shaa sheva. | 彼らは7時に店を閉める。
רֹאשׁ הָעִיר מְדַבֵּר בַּטֶּלֶוִויזְיָה. | rosh ha-ir medaber ba-televizya. | 市長がテレビで話している。
פַּעַם גַּרְתִּי בִּירוּשָׁלַיִם. | paam garti bi-yerushalayim. | かつてエルサレムに住んでいた。
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
אֲנַחְנוּ מַגִּיעִים בְּעוֹד שָׁעָה. | anachnu magiim be-od shaa. | 1時間後に着く。
הִיא יְכוֹלָה לָבוֹא מָחָר. | hi yechola lavo machar. | 彼女は明日来られる。
אֵין כְּלוּם בַּבַּיִת. | eyn klum ba-bayit. | 家に何もない。
בַּסָּלָט יֵשׁ חַסָּה וּפֶטְרוֹזִילְיָה. | ba-salat yesh chasa u-petrozilya. | サラダにはレタスとパセリが入っている。
יֵשׁ לָנוּ תַּרְנְגוֹלוֹת וְעִיזִּים. | yesh lanu tarnegolot ve-izim. | うちには雌鶏とヤギがいる。
הוּא נָבִיא? לֹא, הוּא נֶהָג! | hu navi? lo, hu nehag! | 彼は預言者？—いや、運転手だ！
זֶה עוֹלֶה עֲשָׂרָה דּוֹלָר. | ze ole asara dolar. | それは10ドルする。
` },

{ id: "s22", text: `
קַר הַיּוֹם, לָכֵן אֲנִי לוֹקֵחַ מְעִיל. | kar ha-yom, lachen ani lokeach meil. | 今日は寒いから、コートを持っていく。
חֲבָל! אַף אֶחָד לֹא בַּבַּיִת. | chaval! af echad lo ba-bayit. | 残念！誰も家にいない。
הַשִּׂמְלָה הַזֹּאת נוֹחָה מְאוֹד. | ha-simla ha-zot nocha meod. | このワンピースはとても着心地がいい。
בַּחוּפְשָׁה אֲנִי לוֹקֵחַ בֶּגֶד יָם. | ba-chufsha ani lokeach beged yam. | 休暇には水着を持っていく。
יֵשׁ פִּתְרוֹן לַבְּעָיָה. | yesh pitaron la-beaya. | その問題には解決策がある。
הַלֶּחֶם טָרִי, וַאֲנִי מְאוּשָּׁר. | ha-lechem tari, va-ani meushar. | パンは焼きたてで、僕は幸せだ。
הוּא מוֹרִיד אֶת הַמְּעִיל. | hu morid et ha-meil. | 彼はコートを脱ぐ。
אֵין חַשְׁמַל! | eyn chashmal! | 停電だ！
הַמִּכְנָסַיִים הָאֵלֶּה נוֹחִים. | ha-michnasayim ha-ele nochim. | このズボンは履き心地がいい。
הִיא קוֹנָה חֲצָאִית וּסְוֶודֶר בַּבּוּטִיק. | hi kona chatsait u-sveder ba-butik. | 彼女はブティックでスカートとセーターを買う。
כָּתַבְתִּי לְךָ פֶּתֶק. | katavti lecha petek. | 君にメモを書いた。
הוּא אוֹפְּטִימִי, וְהִיא פֶּסִימִית. | hu optimi, ve-hi pesimit. | 彼は楽観的で、彼女は悲観的だ。
אֲנִי גָּר בְּמוֹשָׁב בַּגָּלִיל. | ani gar be-moshav ba-galil. | 僕はガリラヤのモシャブに住んでいる。
הַיְּרָקוֹת טְרִיִּים. | ha-yerakot triyim. | 野菜が新鮮だ。
` },

{ id: "s23", text: `
מַה הַמַּצָּב? | ma ha-matsav? | 調子はどう？
יְרוּשָׁלַיִם הִיא עִיר קְדוֹשָׁה. | yerushalayim hi ir kdosha. | エルサレムは聖なる町だ。
הַבַּיִת רָחוֹק מֵהָעִיר. | ha-bayit rachok me-ha-ir. | その家は町から遠い。
עוֹד פַּעַם, בְּבַקָּשָׁה. | od paam, bevakasha. | もう一度お願いします。
אֲנִי חוֹלֵם עַל בַּיִת גָּדוֹל. | ani cholem al bayit gadol. | 大きな家を夢見ている。
מִזְּמַן לֹא רָאִיתִי אוֹתְךָ! | mi-zman lo raiti otcha! | 久しぶり！（ずっと会っていなかったね）
מִסָּבִיב לָעִיר הָעַתִּיקָה יֵשׁ חוֹמָה. | misaviv la-ir ha-atika yesh choma. | 旧市街の周りには城壁がある。
הִיא חוֹלָה. | hi chola. | 彼女は病気だ。
הַבִּנְיָין הַזֶּה עַתִּיק. | ha-binyan ha-ze atik. | この建物は古い。
הַתְחָלָה טוֹבָה! | hatchala tova! | いいスタートだ！
מַה הַמַּצָּב שֶׁל סַבָּא? | ma ha-matsav shel saba? | おじいちゃんの具合はどう？
הַתְּמוּנָה הַזֹּאת שֶׁל אוֹמָן מְפוּרְסָם. | ha-tmuna ha-zot shel oman mefursam. | この絵は有名な芸術家のものだ。
אֲנַחְנוּ נוֹסְעִים הָעִירָה. | anachnu nosim ha-ira. | 私たちは町へ行く。
יֵשׁ תְּנַאי אֶחָד. | yesh tnay echad. | 条件が一つある。
הוּא סִימְפָּטִי מְאוֹד. | hu simpati meod. | 彼はとても感じがいい。
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
כּוֹאֵב לִי הַגַּב. | koev li ha-gav. | 背中が痛い。
שָׁכַבְתִּי כָּל הַיּוֹם בַּמִּיטָּה. | shachavti kol ha-yom ba-mita. | 一日中ベッドで寝ていた。
יֵשׁ לִי כְּאֵב רֹאשׁ. | yesh li keev rosh. | 頭痛がする。
אֵיפֹה הַמִּזְוָודָה שֶׁלִּי? | eifo ha-mizvada sheli? | 僕のスーツケースはどこ？
הִיא מְשׁוֹרֶרֶת, וְהוּא שׁוֹטֵר. | hi meshoreret, ve-hu shoter. | 彼女は詩人で、彼は警察官だ。
מַה הַתַּאֲרִיךְ הַיּוֹם? | ma ha-taarich ha-yom? | 今日は何日？
הוּא לוֹמֵד רְפוּאָה. | hu lomed refua. | 彼は医学を学んでいる。
בֵּין שְׁתַּיִם לְשָׁלוֹשׁ. | beyn shtayim le-shalosh. | 2時から3時の間。
` },

{ id: "s25", text: `
אֲנִי מְטַלְפֵן לְבֶן הַדּוֹד שֶׁלִּי. | ani metalfen le-ben ha-dod sheli. | いとこに電話する。
הִיא מְלַמֶּדֶת עִבְרִית בָּאוּנִיבֶרְסִיטָה. | hi melamedet ivrit ba-universita. | 彼女は大学でヘブライ語を教えている。
זֶה הַמָּקוֹם הֲכִי יָפֶה בָּעוֹלָם. | ze ha-makom hachi yafe ba-olam. | ここは世界で一番きれいな場所だ。
בְּדִיּוּק! | bediyuk! | そのとおり！
שְׁטוּיּוֹת! | shtuyot! | ばかばかしい！
הַיֶּלֶד שָׁבַר אֶת הַחַלּוֹן. | ha-yeled shavar et ha-chalon. | 男の子が窓を割った。
הַסַּבָּא שֶׁלִּי זָקֵן, אֲבָל חָזָק. | ha-saba sheli zaken, aval chazak. | 祖父は年をとっているが、元気だ。
מִי מְלַמֵּד אוֹתְךָ עִבְרִית? | mi melamed otcha ivrit? | 誰がヘブライ語を教えてくれるの？
יֵשׁ בְּרֵיכָה בַּמָּלוֹן? | yesh breycha ba-malon? | ホテルにプールはある？
הָיָה וִיכּוּחַ גָּדוֹל. | haya vikuach gadol. | 大げんかになった。
הַתּוֹשָׁבִים שֶׁל הָעִיר שׁוֹנִים מְאוֹד. | ha-toshavim shel ha-ir shonim meod. | その町の住民はとてもさまざまだ。
הִיא לוֹקַחַת תְּרוּפָה. | hi lokachat trufa. | 彼女は薬を飲む。
טִלְפַנְתִּי אֵלֶיךָ! | tilfanti eleycha! | 君に電話したよ！
זֶה הַסֵּפֶר הֲכִי מְעַנְיֵין. | ze ha-sefer hachi meanyen. | これが一番面白い本だ。
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
הַיְּלָדִים גְּדֵלִים. | ha-yeladim gdelim. | 子どもたちは成長している。
אֲנִי מְחַמֵּם אֶת הָאוֹכֶל. | ani mechamem et ha-ochel. | 食べ物を温める。
נִפְגַּשְׁנוּ בַּטַּיֶּילֶת. | nifgashnu ba-tayelet. | 私たちは遊歩道で会った。
הוּא נִשְׁאַר בְּיִשְׂרָאֵל. | hu nishar be-yisrael. | 彼はイスラエルに残った。
יֵשׁ מִסְגָּד בַּצַּד הַזֶּה, וּכְנֵסִיָּה בַּצַּד הַשֵּׁנִי. | yesh misgad ba-tsad ha-ze, u-chnesiya ba-tsad ha-sheni. | こちら側にモスクがあり、反対側に教会がある。
הָאוֹטוֹבּוּס לֹא עוֹצֵר כָּאן. | ha-otobus lo otser kan. | バスはここには止まらない。
סַבָּא שֶׁלִּי מְשַׂחֵק דַּמְקָה. | saba sheli mesachek damka. | 祖父はチェッカーをする。
זֶה מָקוֹם טִבְעִי וְיָפֶה. | ze makom tivi ve-yafe. | ここは自然のままの美しい場所だ。
` },

{ id: "s27", text: `
בַּחֲנוּכָּה מַדְלִיקִים אֶת הַחֲנוּכִּיָּה. | ba-chanuka madlikim et ha-chanukiya. | ハヌカにはハヌキヤに火をともす。
הַיְּלָדִים מְשַׂחֲקִים בִּסְבִיבוֹן. | ha-yeladim mesachakim bi-svivon. | 子どもたちはコマで遊ぶ。
נֵס גָּדוֹל הָיָה שָׁם. | nes gadol haya sham. | 大きな奇跡がそこで起きた。（ハヌカのコマの言葉）
אֲנִי לֹא מַסְכִּים אִתְּךָ. | ani lo maskim itcha. | 君には同意しない。
כְּדַאי לָלֶכֶת לִישׁוֹן מוּקְדָּם. | kedai lalechet lishon mukdam. | 早く寝たほうがいい。
סוֹף-סוֹף הֶחְלַטְנוּ! | sof-sof hechlatnu! | ついに決めた！
רוֹב הַחֶבְרֶה בָּאִים לְסֵדֶר פֶּסַח. | rov ha-chevre baim le-seder pesach. | 仲間のほとんどがセデルに来る。
יֵשׁ לִי שַׁפַּעַת. | yesh li shapaat. | インフルエンザにかかっている。
הוּא מַקְשִׁיב לַמּוֹרֶה בְּמֶשֶׁךְ כָּל הַשִּׁיעוּר. | hu makshiv la-more be-meshech kol ha-shiur. | 彼は授業のあいだずっと先生の話を聞いている。
הִיא מַחְלִיטָה לִלְמוֹד רְפוּאָה. | hi machlita lilmod refua. | 彼女は医学を学ぶことにする。
רוֹב הָאֲנָשִׁים פֹּה חִילּוֹנִיִּים. | rov ha-anashim po chiloniyim. | ここのほとんどの人は世俗派だ。
הַבּוֹס שֶׁלִּי לֹא מַקְשִׁיב לִי. | ha-bos sheli lo makshiv li. | 上司は僕の話を聞かない。
הוּא עוֹבֵד בְּמָכוֹן לְמֶחְקָר. | hu oved be-machon le-mechkar. | 彼は研究所で働いている。
חֲנוּכָּה שָׂמֵחַ! | chanuka sameach! | ハヌカおめでとう！
פָּחוֹת מֵעֲשָׂרָה אָחוּז. | pachot me-asara achuz. | 10パーセント未満。
כְּדַאי לְךָ לָקַחַת וִיטָמִינִים. | kedai lecha lakachat vitaminim. | ビタミンを摂ったほうがいいよ。
` },

{ id: "s28", text: `
אֲנִי מַבְטִיחַ לְךָ! | ani mavtiach lecha! | 約束するよ！
הוּא הִתְאַהֵב בָּהּ מִיָּד. | hu hitahev ba miyad. | 彼はすぐに彼女に恋をした。
אֲנִי מְנַסֶּה לְדַבֵּר רַק עִבְרִית. | ani menase ledaber rak ivrit. | ヘブライ語だけで話そうとしている。
אֲנִי מִשְׁתַּמֵּשׁ בַּמַּחְשֵׁב כָּל יוֹם. | ani mishtamesh ba-machshev kol yom. | 毎日コンピューターを使う。
הִיא מִסְתַּכֶּלֶת עַל הַשָּׁמַיִם. | hi mistakelet al ha-shamayim. | 彼女は空を眺めている。
הַתַּרְבּוּת מַשְׁפִּיעָה עַל הַשָּׂפָה. | ha-tarbut mashpia al ha-safa. | 文化は言語に影響を与える。
הוּא מִתְנַדֵּב בְּלֵב שָׁלֵם. | hu mitnadev be-lev shalem. | 彼は心からボランティアをしている。
יֵשׁ שְׁגִיאָה בַּמִּכְתָּב. | yesh sgia ba-michtav. | 手紙に誤りがある。
בַּמַּחֲזֶה יֵשׁ לִי תַּפְקִיד קָטָן. | ba-machaze yesh li tafkid katan. | その劇で僕は小さな役をもらっている。
הוּא מַבְטִיחַ לָבוֹא מִיָּד. | hu mavtiach lavo miyad. | 彼はすぐ来ると約束する。
נִיסִּיתִי, אֲבָל לֹא הִצְלַחְתִּי. | nisiti, aval lo hitslachti. | やってみたけど、うまくいかなかった。
הִיא קִיבְּלָה מַחְמָאָה מֵהַמּוֹרֶה. | hi kibla machmaa me-ha-more. | 彼女は先生から褒め言葉をもらった。
הַתַּרְבּוּת הַזָּרָה מְעַנְיֶינֶת. | ha-tarbut ha-zara meanyenet. | 外国の文化は面白い。
אֲנִי לוֹמֵד בְּבֵית סֵפֶר תִּיכוֹן. | ani lomed be-veyt sefer tichon. | 僕は高校で学んでいる。
הָאֲוִויר נָקִי כָּאן. | ha-avir naki kan. | ここは空気がきれいだ。
הַשּׁוֹטְרִים תָּפְסוּ אוֹתוֹ. | ha-shotrim tafsu oto. | 警察官たちが彼を捕まえた。
זֶה סִיפּוּר אֲמִיתִי. | ze sipur amiti. | これは実話だ。
` },

];
