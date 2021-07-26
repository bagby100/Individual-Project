import { NEWS_API_KEY } from "./config";

export const getNBAArticles = async () => {
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=NBAPlayoffs&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`
  );
  const json = { "status": "ok", "totalResults": 31, "articles": [{ "source": { "id": null, "name": "SLAM Online" }, "author": "Jared Ebanks", "title": "CP3 Moves Up to 10th All-Time Playoff Assists, Passes Kobe Bryant", "description": "Game 2 of the 2021 NBA Finals saw Phoenix Suns leader Chris Paul take yet another step toward cementing himself as the Point God, as Paul surpassed Los Angeles Lakers-great Kobe Bryant for 10th-most assists during the playoffs. Inches away from the baseline, …", "url": "https://www.slamonline.com/nba/cp3-moves-up-to-10th-all-time-playoff-assists-passes-kobe-bryant/", "urlToImage": "https://d1l5jyrrh5eluf.cloudfront.net/wp-content/uploads/2021/07/GettyImages-1233879677.jpg", "publishedAt": "2021-07-09T17:33:27Z", "content": "Game 2 of the 2021 NBA Finals saw Phoenix Suns leader Chris Paul take yet another step toward cementing himself as the Point God, as Paul surpassed Los Angeles Lakers-great Kobe Bryant for 10th-most … [+835 chars]" }, { "source": { "id": null, "name": "The Sports Daily" }, "author": "Nick Earnshaw", "title": "What direction will Sixers decide to pursue after postseason collapse?", "description": "After yet, another second-round exit in the NBA playoffs, this time to the Atlanta Hawks, the Philadelphia 76ers find themselves with difficult decisions to make this upcoming offseason. In the sec…", "url": "https://thesportsdaily.com/2021/07/05/sixers-postseason-collapse-atlanta-hawks-ben-simmons-doc-rivers-tsl11/", "urlToImage": "https://thesportsdaily.com/wp-content/uploads/sites/95/2021/07/USATSI_16255128.jpg?w=1024&h=576&crop=1", "publishedAt": "2021-07-05T19:35:10Z", "content": "After yet, another second-round exit in the NBA playoffs, this time to the Atlanta Hawks, the Philadelphia 76ers find themselves with difficult decisions to make this upcoming offseason.\r\nIn the seco… [+9257 chars]" }, { "source": { "id": "bleacher-report", "name": "Bleacher Report" }, "author": "Paul Kasabian", "title": "Bucks Beat Trae Young, Hawks to Advance to NBA Finals as Giannis Sits with Injury", "description": "The Bucks led 47-45 early in the third quarter after a Clint Capela layup, but Middleton went on a personal 13-0 run to give Milwaukee a 60-45 edge. The Bucks...", "url": "https://bleacherreport.com/articles/10007027-bucks-beat-trae-young-hawks-to-advance-to-nba-finals-as-giannis-sits-with-injury", "urlToImage": "https://media.bleacherreport.com/image/upload/x_0,y_88,w_1611,h_1075,c_crop/v1625367453/xyunvwjeazrs6hos7sma.jpg", "publishedAt": "2021-07-04T03:09:26Z", "content": "AP Photo/John Bazemore\r\nKhris Middleton scored 23 third-quarter points en route to 32 overall as the Milwaukee Bucks advanced to the NBA Finals with a 118-107 win over the host Atlanta Hawks in Game … [+5200 chars]" }, { "source": { "id": null, "name": "Elcomercio.com" }, "author": "Carlos Augusto Rojas, Agencia EFE", "title": "Los Bucks están a una victoria de la final de la NBA contra los Suns", "description": "Los Bucks derrotaron a los Hawks por 123-112, lo que les adelanta por 3-2 en la final de la Conferencia Este y deja al equipo de Milwaukee a una victoria de la final de la NBA", "url": "https://www.elcomercio.com/deportes/baloncesto/bucks-victoria-hawks-final-nba-suns-baloncesto.html", "urlToImage": "https://www.elcomercio.com/wp-content/uploads/2021/07/nbad.jpg", "publishedAt": "2021-07-02T03:49:46Z", "content": "Los Bucks derrotaron a los Hawks por 123-112, lo que les adelanta por 3-2 en la final de la Conferencia Este y deja al equipo de Milwaukee a una victoria de la final de la NBA frente a los Phoenix Su… [+5134 chars]" }, { "source": { "id": null, "name": "Tvn24.pl" }, "author": "TVN24", "title": "Słońca się doczekały. Mają wielki finał NBA", "description": "28 lat i wystarczy. Koszykarze Phoenix Suns po zwycięstwie w Konferencji Zachodniej ponownie zagrają w finale ligi NBA. Ich rywalem będzie Atlanta Hawks lub Milwaukee Bucks.", "url": "https://eurosport.tvn24.pl/koszykowka,117/nba-phoenix-suns-w-wielkim-finale-po-raz-pierwszy-od-1993-roku-wynik-meczu-z-los-angeles-clippers-i-relacja,1067067.html", "urlToImage": "https://r-scale-40.dcs.redcdn.pl/scale/o2/tvn/web-content/m/p1/i/3b92d18aa7a6176dd37d372bc2f1eb71/01535ee3-79ea-43dc-819d-4f2d69f8a25e.jpg?type=1&srcmode=4&srcx=0/1&srcy=0/1&srcw=640&srch=2000&dstw=640&dsth=2000&quality=90", "publishedAt": "2021-07-01T08:26:00Z", "content": "W rod zespó Suns pokona na wyjedzie Los Angeles Clippers 130:103 i w rywalizacji do czterech zwycistw triumfowa 4-2. Bohaterem spotkania by rozgrywajcy Chris Paul, który uzyska 41 punktów dla Soc. 36… [+2018 chars]" }, { "source": { "id": null, "name": "SB Nation" }, "author": "James Dator", "title": "Clint Capela brought H.O.R.S.E to the playoffs with this shot", "description": "Soooo pretty.", "url": "https://www.sbnation.com/nba/2021/6/30/22557329/clint-capelas-over-backboard-shot-hawks", "urlToImage": "https://cdn.vox-cdn.com/thumbor/oGriBHpfPxYXPdXQEgNHzR5Y6Y8=/0x0:1371x718/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22691382/Screen_Shot_2021_06_30_at_11.09.58_AM.png", "publishedAt": "2021-06-30T15:22:50Z", "content": "Soooo pretty. When you think of players making ludicrously impossible shots in the NBA Playoffs you probably don’t think of Clint Capela, but here we are. Hey, it’s been a weird season, okay?\n\n\nHOW, … [+810 chars]" }, { "source": { "id": null, "name": "AZCentral" }, "author": "Arizona Republic, Bill Goodykoontz, Arizona Republic", "title": "Lil Wayne shows up for the Phoenix Suns' loss to the LA Clippers, ending celebrity drought", "description": "Celebrity sightings have been few during the NBA Western Conference Finals between the Phoenix Suns and the LA Clippers. Lil Wayne showed up Monday.", "url": "https://www.azcentral.com/story/entertainment/media/2021/06/29/lil-wayne-suns-clippers-game/7796584002/", "urlToImage": "https://www.gannett-cdn.com/presto/2021/06/29/PPHX/e65b278f-0089-40c2-bd3f-eeafba356185-lilwayne.jpg?auto=webp&crop=1383,778,x0,y71&format=pjpg&width=1200", "publishedAt": "2021-06-29T17:14:27Z", "content": "Hello Lil Wayne.\r\nOr finally, a famous person in the stands at the NBA Western Conference Finals.\r\nIn fairness, it's possible the Phoenix Suns Arena might be swimming with celebrities during the home… [+2029 chars]" }, { "source": { "id": null, "name": "AZCentral" }, "author": "Arizona Republic, Bill Goodykoontz, Arizona Republic", "title": "'Words matter': Why Phoenix Suns Twitter roasted ESPN's Jeff Van Gundy and Mark Jackson", "description": "Jeff Van Gundy was trending on Twitter as the Clippers beat the Phoenix Suns in Game 5. And Mark Jackson got schooled, too, during the live broadcast.", "url": "https://www.azcentral.com/story/entertainment/media/2021/06/29/phoenix-suns-twitter-jeff-van-gundy-mark-jackson-espn/7792407002/", "urlToImage": "https://www.gannett-cdn.com/presto/2021/06/27/PPHX/90251ac0-5250-43cb-a079-13579952301f-cent02-7gejlqjyp7dt0jxe837_original.jpg?auto=webp&crop=3439,1935,x0,y90&format=pjpg&width=1200", "publishedAt": "2021-06-29T13:00:55Z", "content": "Hell hath no fury like Phoenix Suns fans tweeting about Jeff Van Gundy.\r\nThe Los Angeles Clippers smothered the Suns Monday, 116-102, which means not only did the Suns not close out the Western Confe… [+3348 chars]" }, { "source": { "id": null, "name": "Terra.com.br" }, "author": "Gazeta Esportiva", "title": "Clippers vencem quinto confronto com Suns e mantém esperança de classificação", "description": "Longe de seus domínios, o Los Angeles Clippers venceu o Phoenix Suns por 116 a 102, na noite desta segunda-feira, e se mantém vivo na final da Conferência ...", "url": "https://www.terra.com.br/esportes/basquete/clippers-vencem-quinto-confronto-com-suns-e-mantem-esperanca-de-classificacao,0e474fca03c37a281be4327277260c20tx51ecey.html", "urlToImage": "https://p2.trrsf.com/image/fget/cf/1200/628/middle/s1.trrsf.com/atm/3/core/_img/terra-logo-white-bg-v3.jpg", "publishedAt": "2021-06-29T11:53:25Z", "content": "Longe de seus domínios, o Los Angeles Clippers venceu o Phoenix Suns por 116 a 102, na noite desta segunda-feira, e se mantém vivo na final da Conferência Oeste. Este foi o quinto confronto da série.… [+922 chars]" }, { "source": { "id": null, "name": "Elperiodico.com" }, "author": null, "title": "Paul George insufla vida a los Clippers en la final del Oeste", "description": "Los Angeles Clippers continúan vivos en la final de la Conferencia Oeste, aunque todavía en desventaja frente a Phoenix Suns (3-2), tras llevarse el quinto capítulo de la eliminatoria (102-116) gracias a la actuación estelar de Paul George.En su primera noche…", "url": "https://www.elperiodico.com/es/deportes/20210629/baloncesto-nba-paul-george-impulsa-clippers-victoria-suns-11866278", "urlToImage": "https://estaticos-cdn.elperiodico.com/clip/2e24141c-ec0f-43cc-83d1-99401373c429_source-aspect-ratio_default_0.jpg", "publishedAt": "2021-06-29T09:01:55Z", "content": "Los Angeles Clippers continúan vivos en la final de la Conferencia Oeste, aunque todavía en desventaja frente a Phoenix Suns (3-2), tras llevarse el quinto capítulo de la eliminatoria (102-116) graci… [+1281 chars]" }, { "source": { "id": null, "name": "NBCSports.com" }, "author": "Kurt Helin", "title": "Paul George answers critics with 41, Clippers beat Suns to stay alive, force Game 6", "description": "Paul George came up big when the Clippers needed him most.", "url": "https://nba.nbcsports.com/2021/06/29/paul-george-answers-critics-with-41-clippers-beat-suns-to-stay-alive-force-game-6/", "urlToImage": "https://nba.nbcsports.com/wp-content/uploads/sites/12/2021/06/GettyImages-1233710021-e1624945292149.jpg", "publishedAt": "2021-06-29T05:49:12Z", "content": "Segments of NBA Twitter seem to lie in wait for Paul George, ready to pounce on the slightest mistakes.\r\nDeMarcus Cousins has George’s back.\r\nI dont know where this trolling bulls*** comes from where… [+4129 chars]" }, { "source": { "id": null, "name": "SLAM Online" }, "author": "Ronald Agers", "title": "Deandre Ayton on Chris Paul: ‘He was the Best Thing That Happened to My Career’", "description": "After the Phoenix Suns took control of the Western Conference Finals, beating the Los Angeles Clippers on Saturday night, Deandre Ayton again played outstanding basketball under the radar scoring 19 points while grabbing 22 rebounds and blocking four shots. D…", "url": "https://www.slamonline.com/nba/deandre-ayton-says-chris-paul-is-the-best-thing-that-happened-to-my-career/", "urlToImage": "https://d1l5jyrrh5eluf.cloudfront.net/wp-content/uploads/2021/06/deandre-ayton-chris-paul.jpg", "publishedAt": "2021-06-28T14:42:39Z", "content": "After the Phoenix Suns took control of the Western Conference Finals, beating the Los Angeles Clippers on Saturday night, Deandre Ayton again played outstanding basketball under the radar scoring 19 … [+1570 chars]" }, { "source": { "id": null, "name": "Heat.com" }, "author": "Yash Matange", "title": "NBA Playoffs 2021: Suns outlast Clippers in gritty Game 4 win to take commanding 3-1 series lead - NBA CA", "description": "<ol><li>NBA Playoffs 2021: Suns outlast Clippers in gritty Game 4 win to take commanding 3-1 series lead  NBA CA\r\n</li><li>After years of playoff heartbreak, Paul on verge of first Finals with Suns  Sportsnet.ca\r\n</li><li>Suns outlast Clippers, take 3-1 lead …", "url": "https://ca.nba.com/news/nba-playoffs-2021-phoenix-suns-outlast-la-clippers-game-4-win-take-commanding-3-1-series-lead/1rpdqgiu7clsp16mcbcthydlq7", "urlToImage": "https://images.daznservices.com/di/library/NBA_Global_CMS_image_storage/d3/5c/paulpaul_13eumx2kb6h851xqq5lwticrms.jpeg?t=1283494298&quality=100", "publishedAt": "2021-06-27T12:00:00Z", "content": "The Phoenix Suns are one win away from the NBA Finals. They outlasted the Clippers in a gritty, old-school, defence-first contest to win Game 4 and take a commanding 3-1 series lead.\r\nDevin Booker le… [+4978 chars]" }, { "source": { "id": null, "name": "Tvn24.pl" }, "author": "TVN24", "title": "Phoenix Suns o krok od wielkiego finału", "description": "Nie takiego meczu spodziewali się kibice w Los Angeles. Miejscowi Clippers przegrali z Phoenix Suns 80:84 w czwartym spotkaniu finału Konferencji Zachodniej ligi NBA. Słońca w rywalizacji do czterech zwycięstw prowadzą już 3-1 i potrzebują tylko jednej wygran…", "url": "https://eurosport.tvn24.pl/koszykowka,117/nba-26-czerwca-los-angeles-clippers-phoenix-suns-wynik-meczu-i-relacja-koszykowka,1066491.html", "urlToImage": "https://r-scale-a0.dcs.redcdn.pl/scale/o2/tvn/web-content/m/p1/i/a012869311d64a44b5a0d567cd20de04/9e510c3d-1b02-44e8-8875-3ae8f06bcfe3.jpg?type=1&srcmode=4&srcx=0/1&srcy=0/1&srcw=640&srch=2000&dstw=640&dsth=2000&quality=90", "publishedAt": "2021-06-27T07:44:00Z", "content": "czytaj dalej »\r\nTo by mecz, w którym obie ekipy raziy nieskutecznoci. Clippers trafili 32,5 proc. rzutów z gry, a Suns niewiele wicej - 36 proc.\r\nGocie mieli dobr pierwsz poow, po której prowadzili 5… [+1743 chars]" }, { "source": { "id": "bleacher-report", "name": "Bleacher Report" }, "author": "Blake Schuster", "title": "Suns' Chris Paul on Deandre Ayton Contract: He's 'Gonna Get Him a Bag This Summer'", "description": "Fresh off leading the Phoenix Suns to an 84-80 victory over the Los Angeles Clippers in Game 4 of the Western Conference Finals, Chris Paul transitioned from...", "url": "https://bleacherreport.com/articles/10006574-suns-chris-paul-on-deandre-ayton-contract-hes-gonna-get-him-a-bag-this-summer", "urlToImage": "https://media.bleacherreport.com/image/upload/x_0,y_0,w_5397,h_3601,c_crop/v1624768836/sj62fqrbtzz34teippjk.jpg", "publishedAt": "2021-06-27T05:07:11Z", "content": "Adam Pantozzi/NBAE via Getty Images\r\nFresh off leading the Phoenix Suns to an 84-80 victory over the Los Angeles Clippers in Game 4 of the Western Conference Finals, Chris Paul transitioned from poin… [+2805 chars]" }, { "source": { "id": "usa-today", "name": "USA Today" }, "author": "USA TODAY, Jeff Zillgitt, USA TODAY", "title": "Did Bucks find the answer to slowing Hawks' Trae Young in Eastern Conference finals?", "description": "Trae Young and the Hawks will make adjustments, but the Bucks may have found some long-term answers to slowing Young during their Game 2 rout.", "url": "https://www.usatoday.com/story/sports/nba/columnist/jeff-zillgitt/2021/06/26/bucks-defensive-game-plan-slow-down-trae-young-hawks/5354965001/", "urlToImage": "https://www.gannett-cdn.com/presto/2021/06/26/USAT/273d6a9f-0b92-4794-8069-e3c8a5c9c819-2021-06-25_Trae_Young.jpg?crop=2399,1349,x0,y227&width=1600&height=800&fit=bounds", "publishedAt": "2021-06-26T06:06:16Z", "content": "SportsPulse: Jim Owczarski of the Milwaukee Journal Sentinel breaks down the Bucks' defensive game plan against the Hawks' Trae Young in the Eastern Conference finals.\r\nUSA TODAY\r\nMILWAUKEE — In the … [+4870 chars]" }, { "source": { "id": null, "name": "El Universal" }, "author": "Universal Deportes y AFP", "title": "Los Bucks aplastaron a los Hawks y empataron la serie", "description": "Giannis Antetokounmpo comandó con 25 puntos y 9 rebotes la paliza de los Bucks", "url": "https://www.eluniversal.com.mx/universal-deportes/mas-deportes/nba-los-bucks-aplastaron-los-hawks-y-empataron-la-serie", "urlToImage": "https://www.eluniversal.com.mx/sites/default/files/2021/06/25/nba.jpg", "publishedAt": "2021-06-26T03:40:34Z", "content": "Tras caer en su cancha en el primer juego del miércoles, los Milwaukee Bucks avasallaron este viernes a los Atlanta Hawks por 125-91 y empataron 1-1 esta final de la Conferencia Este de la NBA.\r\nEl g… [+1062 chars]" }, { "source": { "id": "bleacher-report", "name": "Bleacher Report" }, "author": "Blake Schuster", "title": "Giannis Shines as Bucks Cruise Past Trae Young, Hawks for 34-Point Game 2 Win", "description": "<b>BUCKS WIN</b> The Milwaukee Bucks bounced back from a stunning Game 1 loss to the Atlanta Hawks to notch a XX-XX victory of Game 2 of the Eastern Conference...", "url": "https://bleacherreport.com/articles/10006521-giannis-shines-as-bucks-cruise-past-trae-young-hawks-for-34-point-game-2-win", "urlToImage": "https://media.bleacherreport.com/image/upload/x_48,y_77,w_5058,h_3378,c_crop/v1624668573/dvfhy2mypw8c3ydfbwvx.jpg", "publishedAt": "2021-06-26T03:05:35Z", "content": "Gary Dineen/NBAE via Getty Images\r\nThe Milwaukee Bucks bounced back from a stunning Game 1 loss to the Atlanta Hawks to notch a 125-91 victory of Game 2 of the Eastern Conference Finals and even the … [+6569 chars]" }, { "source": { "id": "usa-today", "name": "USA Today" }, "author": "USA TODAY, Mark Medina, USA TODAY", "title": "Clippers' Game 3 adjustments vs. Suns started with Tyronn Lue calling players after plane ride", "description": "After falling behind 2-0 yet again, Clippers coach Ty Lue called his key players with some motivation.", "url": "https://www.usatoday.com/story/sports/nba/columnist/mark-medina/2021/06/25/clippers-tyronn-lue-adjustments-suns-western-conference-finals/5340844001/", "urlToImage": "https://www.gannett-cdn.com/presto/2021/06/25/USAT/65f323c8-c0c8-46d2-9732-4fba2665820d-2021-06-24_Ty_Lue.jpg?crop=4403,2477,x1039,y297&width=3200&height=1680&fit=bounds", "publishedAt": "2021-06-25T06:26:54Z", "content": "SportsPulse: USA TODAY Sports' Mark Medina breaks down how Paul George can step up to the challenge of leading the Clippers in the absence of Kawhi Leonard during the Western Conference finals.\r\nUSA … [+6556 chars]" }, { "source": { "id": null, "name": "NBCSports.com" }, "author": "Kurt Helin", "title": "Clippers get defensive, top Suns in another dramatic Game 3 showing", "description": "Booker and CP3 combined to shoot 10-of-40 on the night.", "url": "https://nba.nbcsports.com/2021/06/25/clippers-get-defensive-top-suns-in-another-dramatic-game-3-showing/", "urlToImage": "https://nba.nbcsports.com/wp-content/uploads/sites/12/2021/06/GettyImages-1325326656-e1624597721602.jpg", "publishedAt": "2021-06-25T05:15:12Z", "content": "LOS ANGELES From the opening tip, two things were in Devin Booker‘s face.\r\nOne was the mask, something he wore to help protect the nose that he broke the game before. It clearly bothered Booker all g… [+4371 chars]" }] };
  
  return json;

}



