(function() {
  window.Commands = {
    search: function(text) {
      for(var a = 0; a < this.database.length; a++) {
        var regexes = this.database[a].regex;
        for(var b = 0; b < regexes.length; b++) {
          var regex = new RegExp(regexes[b], 'gi');
          if(regex.test(text)) {
            return this.database[a].action;
          }
        }
      }
      return false;
    },

    database: [
      {
        regex: ['^$'],
        description: 'Text: Personality-based',
        weight: 3,
        action: function() {
          this.say(Personality.line('empty'));
        },
      },
      {
        regex: ['^o$'],
        description: 'Text: o7',
        weight: 3,
        action: function() {
          this.say('o7');
        },
      },
      {
        regex: ['^o7$'],
        description: 'Text: o/',
        weight: 3,
        action: function() {
          this.say('o/');
        },
      },
      {
        regex: ['^\\^5.?$'],
        description: 'Text: ヽ(。 ワ ﾟ)ノヽ( ﾟ ワ 。)ノ',
        weight: 3,
        action: function() {
          this.say('ヽ(。 ワ ﾟ)ノヽ( ﾟ ワ 。)ノ');
        },
      },
      {
        regex: ['^beep.?$'],
        description: 'Text: Boop.',
        weight: 3,
        action: function() {
          this.say("Boop.");
        },
      },
      {
        regex: ['^boop.?$'],
        description: 'Text: Beep.',
        weight: 3,
        action: function() {
          this.say("Beep.");
        },
      },
      {
        regex: ['^beep boop.?$'],
        description: 'Text: Boop beep.',
        weight: 3,
        action: function() {
          this.say("Boop beep.");
        },
      },
      {
        regex: ['^boop beep.?$'],
        description: 'Text: Beep boop.',
        weight: 3,
        action: function() {
          this.say("Beep boop.");
        },
      },
      {
        regex: ['^stupid question'],
        description: 'Text: (newsflash) READ THE FOCKIN\' WIKI!',
        weight: 3,
        action: function() {
          this.say("(newsflash) READ THE FOCKIN' WIKI!");
        },
      },
      {
        regex: ['^hi.?$', '^hi '],
        description: 'Text: Personality-based',
        weight: 3,
        action: function() {
          this.say(Personality.line('hi'));
        },
      },
      {
        regex: ['^hello'],
        description: 'Text: Personality-based',
        weight: 3,
        action: function() {
          this.say(Personality.line('hello'));
        },
      },
      {
        regex: ['^おはよう', '^ohayou?'],
        description: 'Text: Personality-based',
        weight: 3,
        action: function() {
          this.say(Personality.line('ohayou'));
        },
      },
      {
        regex: ['^good\\s?night'],
        description: '',
        weight: 3,
        action: function() {
          this.say(Personality.line('good night'));
        },
      },
      {
        regex: ['^bye.?bye', '^bye.?'],
        description: 'Text: Personality-based',
        weight: 3,
        action: function() {
          this.say(Personality.line('bye bye'));
        },
      },
      {
        regex: ['^good.?bye'],
        description: 'Text: Personality-based',
        weight: 3,
        action: function() {
          this.say(Personality.line('good bye'));
        },
      },
      {
        regex: ['^question.?$'],
        description: 'Text: Personality-based',
        weight: 3,
        action: function() {
          this.say(Personality.line('question?'));
        },
      },
      {
        regex: ['^may i ask a question', '^can i ask a question'],
        description: 'Text: Personality-based',
        weight: 3,
        action: function() {
          this.say(Personality.line('may i ask a question'));
        },
      },
      {
        regex: ['^what is life'],
        description: 'Text: 42.',
        weight: 3,
        action: function() {
          this.say("42.");
        },
      },
      {
        regex: ['^what is love.?$'],
        description: "Text: Baby don\'t hurt me.",
        weight: 3,
        action: function() {
          this.say("Baby don't hurt me.");
        },
      },
      {
        regex: ['^(baby\\s)?don\'?t hurt me.?$'],
        description: 'Text: NO MOAR.',
        weight: 3,
        action: function() {
          this.say("NO MOAR.");
        },
      },
      {
        regex: ['^you suck'],
        description: 'Text: Personality-based',
        weight: 3,
        action: function() {
          this.say(Personality.line('you suck'));
        },
      },
      {
        regex: ['^give me luck'],
        description: 'Text: Personality-based',
        weight: 3,
        action: function() {
          this.say(Personality('give me luck'));
        },
      },
      {
        regex: ['^can i become (a )?chat\\s?mod.?$'],
        description: 'Text: Personality-based',
        weight: 3,
        action: function() {
          this.say(Personality.line('can i become chat mod'));
        },
      },
      {
        regex: ['^fetch'],
        description: 'Text: /me grabs stick.',
        weight: 3,
        action: function() {
          this.say("/me grabs stick.");
        },
      },
      {
        regex: ['love me'],
        description: 'Text: Personality-based',
        weight: 3,
        action: function() {
          this.say(Personality.line('love me'));
        },
      },
      {
        regex: ['^what version number'],
        description: 'Text: v. Skynet',
        weight: 3,
        action: function() {
          this.say("v. Skynet");
        },
      },
      {
        regex: ['^jwt.?$'],
        description: 'Text: Kick it!',
        weight: 3,
        action: function() {
          this.say("Kick it!");
        },
      },
      {
        regex: ['^cdrw.?$'],
        description: 'Text: Daily reminder to CDRW to fire TheLenrir.',
        weight: 3,
        action: function() {
          this.say("Daily reminder to CDRW to fire TheLenrir.");
        },
      },
      {
        regex: ['^af.?$'],
        description: 'Text: http://img3.wikia.nocookie.net/__cb20150211023826/kancolle/images/a/a3/KCLcomic.jpg',
        weight: 3,
        action: function() {
          this.say("http://img3.wikia.nocookie.net/__cb20150211023826/kancolle/images/a/a3/KCLcomic.jpg");
        },
      },
      {
        regex: ['^khorosho', '^harasho.?$'],
        description: 'Text: хорошо.',
        weight: 3,
        action: function() {
          this.say("хорошо.");
        },
      },
      {
        regex: ['^hoppou?.?$'],
        description: 'Text: レップウ...オイテケ......',
        weight: 3,
        action: function() {
          this.say("レップウ...オイテケ......");
        },
      },
      {
        regex: ['roma'],
        description: 'Text: https://gyazo.com/6b5cc8aaf5158325d1052ff0187ea8c7',
        weight: 3,
        action: function() {
          this.say("https://gyazo.com/6b5cc8aaf5158325d1052ff0187ea8c7");
        },
      },
      {
        regex: ['^dechi'],
        description: 'Text: (de ) (chi )',
        weight: 3,
        action: function() {
          this.say("(de ) (chi )");
        },
      },
      {
        regex: ['^nanodesu'],
        description: 'Text: (na) (no) (de) (su)',
        weight: 3,
        action: function() {
          this.say("(na) (no) (de) (su)");
        },
      },
      {
        regex: ['^nanodeath'],
        description: 'Text: (nanodesu)',
        weight: 3,
        action: function() {
          this.say("(nanodesu)");
        },
      },
      {
        regex: ['^poi.?$'],
        description: 'Text: http://anohito.tw/poi/',
        weight: 1,
        action: function() {
          this.say("http://anohito.tw/poi/");
        },
      },
      {
        regex: ['^naka'],
        description: 'Text: https://www.youtube.com/watch?v=8l5cJBpTNQE',
        weight: 1,
        action: function() {
          this.say("https://www.youtube.com/watch?v=8l5cJBpTNQE");
        },
      },
      {
        regex: ['^yasen.?$'],
        description: "Text: https://www.youtube.com/watch?v=zvg7hHTnJVk",
        weight: 1,
        action: function() {
          this.say("https://www.youtube.com/watch?v=zvg7hHTnJVk");
        },
      },
      {
        regex: ['^kuma.?$'],
        description: 'Text: https://www.youtube.com/watch?v=yxUpJnySeCQ',
        weight: 1,
        action: function() {
          this.say("https://www.youtube.com/watch?v=yxUpJnySeCQ");
        },
      },
      {
        regex: ['^shireee'],
        description: 'https://www.youtube.com/watch?v=ocDB5zxSrgQ',
        weight: 1,
        action: function() {
          this.say("https://www.youtube.com/watch?v=ocDB5zxSrgQ");
        },
      },
      {
        regex: ['^mogu\\s?mogu.?$'],
        description: 'Text: http://www.myinstants.com/instant/mogu-mogu/',
        weight: 1,
        action: function() {
          this.say("http://www.myinstants.com/instant/mogu-mogu/");
        },
      },
      {
        regex: ['^deesu.?$'],
        description: 'Text: https://www.youtube.com/watch?v=TtlrQKOeFM8',
        weight: 3,
        action: function() {
          this.say("https://www.youtube.com/watch?v=TtlrQKOeFM8");
        },
      },
      {
        regex: ['^anthem.?$'],
        description: 'Text: https://www.youtube.com/watch?v=ocaq4c-YbwQ',
        weight: 3,
        action: function() {
          this.say("https://www.youtube.com/watch?v=ocaq4c-YbwQ");
        },
      },
      {
        regex: ['^taigei.?$', '^\\(?whale\\)?.?$'],
        description: 'Text: https://www.youtube.com/watch?v=VjdV-CSxyKc',
        weight: 1,
        action: function() {
          this.say("https://www.youtube.com/watch?v=VjdV-CSxyKc");
        },
      },
      {
        regex: ['^unlimited (cat|error) works.?$'],
        description: 'Text: http://i.imgur.com/Aa5nSof.jpg',
        weight: 1,
        action: function() {
          this.say("http://i.imgur.com/Aa5nSof.jpg");
        },
      },
      {
        regex: ['^never give up.?$'],
        description: 'Text: https://www.youtube.com/watch?v=tYzMYcUty6s',
        weight: 1,
        action: function() {
          this.say("https://www.youtube.com/watch?v=tYzMYcUty6s");
        },
      },
      {
        regex: ['^tweets.?$', '^twitter.?$', '^(staff|dev) (tweets|twitter).?$'],
        description: 'Text: https://twitter.com/kancolle_staff',
        weight: 0,
        action: function() {
          this.say("https://twitter.com/kancolle_staff");
        },
      },
      {
        regex: ['^emoticon list.?$'],
        description: 'Text: http://kancolle.wikia.com/wiki/MediaWiki:Emoticons',
        weight: 0,
        action: function() {
          this.say("http://kancolle.wikia.com/wiki/MediaWiki:Emoticons");
        },
      },
      {
        regex: ['^kc3 kai.?$'],
        description: 'Text: https://chrome.google.com/webstore/detail/kancolle-command-center-%E6%94%B9/hkgmldnainaglpjngpajnnjfhpdjkohh',
        weight: 0,
        action: function() {
          this.say("https://chrome.google.com/webstore/detail/kancolle-command-center-%E6%94%B9/hkgmldnainaglpjngpajnnjfhpdjkohh");
        },
      },
      {
        regex: ['^orel cruising'],
        description: 'Text: https://www.youtube.com/watch?v=c1-TPCwXV8s',
        weight: 1,
        action: function() {
          this.say("https://www.youtube.com/watch?v=c1-TPCwXV8s");
        },
      },
      {
        regex: ['^lsc.?$'],
        description: 'Text: https://www.youtube.com/watch?v=lw7IA1AEVVA',
        weight: 1,
        action: function() {
          this.say("https://www.youtube.com/watch?v=lw7IA1AEVVA");
        },
      },
      {
        regex: ['^help.?$'],
        description: 'Text: Documentation[3-4] PA:55, AS:123, AS+:246 on bot-chan\'s use is detailed [[User:KancolleChatlogger|here]].',
        weight: 0,
        action: function() {
          this.say("Documentation on bot-chan\'s use is detailed [[User:KancolleChatlogger|here]].");
        },
      },
      {
        regex: ['^combat.?$'],
        description: 'Text: [[Combat]]',
        weight: 0,
        action: function() {
          this.say("[[Combat]]");
        },
      },
      {
        regex: ['^aa.?$'],
        description: 'Text: [[Combat#Fleet_Anti-air_Defense]]',
        weight: 0,
        action: function() {
          this.say("[[Combat#Fleet_Anti-air_Defense]]");
        },
      },
      {
        regex: ['^los.?$'],
        description: 'Text: [[Line_of_Sight#Effective_Line_of_Sight_.28new_formula.29]]',
        weight: 0,
        action: function() {
          this.say("[[Line_of_Sight#Effective_Line_of_Sight_.28new_formula.29]]");
        },
      },
      {
        regex: ['^connect.?$'],
        description: 'Text: [[Tutorial:_Proxy_Connection]]',
        weight: 0,
        action: function() {
          this.say("[[Tutorial:_Proxy_Connection]]");
        },
      },
      {
        regex: ['^news.?$'],
        description: '[[Recent Updates]]',
        weight: 0,
        action: function() {
          this.say("[[Recent Updates]]");
        },
      },
      {
        regex: ['air\\s?calc'],
        description: 'Text: https://a4b81641afe20619f5ed716627d72ef95dcd42d1-www.googledrive.com/host/0B37L_d6zeTfUS0puRTRFVml1czA/',
        weight: 0,
        action: function() {
          this.say("https://a4b81641afe20619f5ed716627d72ef95dcd42d1-www.googledrive.com/host/0B37L_d6zeTfUS0puRTRFVml1czA/");
        },
      },
      {
        regex: ['los\\s?calc'],
        description: 'Text: http://tsoft-web.com/sub/kancolle/2-5/',
        weight: 0,
        action: function() {
          this.say("http://tsoft-web.com/sub/kancolle/2-5/");
        },
      },
      {
        regex: ['event guide'],
        description: 'Text: [[User_blog:Shinhwalee/Major_Event_Preparation_Guide_for_Admirals]]',
        weight: 0,
        action: function() {
          this.say("[[User_blog:Shinhwalee/Major_Event_Preparation_Guide_for_Admirals]]");
        },
      },
      {
        regex: ['^arsenal.?$'],
        description: 'Text: [[Akashi%27s_Improvement_Arsenal]]',
        weight: 0,
        action: function() {
          this.say("[[Akashi%27s_Improvement_Arsenal]]");
        },
      },
      {
        regex: ['^suggestion thread'],
        description: 'Text: [[Thread:233278]]',
        weight: 0,
        action: function() {
          this.say("[[Thread:233278]]");
        },
      },
      {
        regex: ['^1-5 guide'],
        description: 'Text: [[User_blog:Admiral_Mikado/Extra_Operations_for_Dummies:_1-5]]',
        weight: 0,
        action: function() {
          this.say("[[User_blog:Admiral_Mikado/Extra_Operations_for_Dummies:_1-5]]");
        },
      },
      {
        regex: ['^2-5 guide'],
        description: 'Text: [[User_blog:Admiral_Mikado/Extra_Operations_for_Dummies:_2-5]]',
        weight: 0,
        action: function() {
          this.say("[[User_blog:Admiral_Mikado/Extra_Operations_for_Dummies:_2-5]]");
        },
      },
      {
        regex: ['^3-5 guide'],
        description: 'Text: [[User_blog:Admiral_Mikado/Extra_Operations_for_Dummies:_3-5]]',
        weight: 0,
        action: function() {
          this.say("[[User_blog:Admiral_Mikado/Extra_Operations_for_Dummies:_3-5]]");
        },
      },
      {
        regex: ['^4-5 guide'],
        description: 'Text: [[User_blog:Admiral_Mikado/Extra_Operations_for_Dummies:_4-5]]',
        weight: 0,
        action: function() {
          this.say("[[User_blog:Admiral_Mikado/Extra_Operations_for_Dummies:_4-5]]");
        },
      },
      {
        regex: ['^3-2 leveling'],
        description: 'Text: [[User_blog:Shinhwalee/Guide_to_Power_Leveling_Heavy_Cruiser_%28CA%29_in_World_3-2A]]',
        weight: 0,
        action: function() {
          this.say("[[User_blog:Shinhwalee/Guide_to_Power_Leveling_Heavy_Cruiser_%28CA%29_in_World_3-2A]]");
        },
      },
      {
        regex: ['^4-3 leveling'],
        description: 'Text: [[User_blog:Shinhwalee/World_4-3_Power_Level_Guide_for_DD_%26_CL]]',
        weight: 0,
        action: function() {
          this.say("[[User_blog:Shinhwalee/World_4-3_Power_Level_Guide_for_DD_%26_CL]]");
        },
      },
      {
        regex: ['as 1-1|1-1 as'],
        description: 'Text: [1-1] No AS values on this map',
        weight: 0,
        action: function() {
          this.say("[1-1] No AS values on this map");
        },
      },
      {
        regex: ['as 1-2|1-2 as'],
        description: 'Text: [1-2] No AS values on this map',
        weight: 0,
        action: function() {
          this.say("[1-2] No AS values on this map");
        },
      },
      {
        regex: ['as 1-3|1-3 as'],
        description: 'Text: [1-3] No AS values on this map',
        weight: 0,
        action: function() {
          this.say("[1-3] No AS values on this map");
        },
      },
      {
        regex: ['as 1-4|1-4 as'],
        description: 'Text: [1-4] PA:14, AS:30, AS+:60',
        weight: 0,
        action: function() {
          this.say("[1-4] PA:14, AS:30, AS+:60");
        },
      },
      {
        regex: ['as 1-5|1-5 as'],
        description: 'Text: [1-5] No AS values on this map',
        weight: 0,
        action: function() {
          this.say("[1-5] No AS values on this map");
        },
      },
      {
        regex: ['as 1-6|1-6 as'],
        description: 'Text: [1-6] South: PA:38, AS:83, AS+:165 / North: PA:88, AS:198, AS+:396 / Node L: PA:128, AS:288, AS+:576',
        weight: 0,
        action: function() {
          this.say("[1-6] South: PA:38, AS:83, AS+:165 / North: PA:88, AS:198, AS+:396 / Node L: PA:128, AS:288, AS+:576");
        },
      },
      {
        regex: ['as 2-1|2-1 as'],
        description: 'Text: [2-1] PA:19, AS:42, AS+:84',
        weight: 0,
        action: function() {
          this.say("[2-1] PA:19, AS:42, AS+:84");
        },
      },
      {
        regex: ['as 2-2|2-2 as'],
        description: 'Text: [2-2] PA:36, AS:81, AS+:162',
        weight: 0,
        action: function() {
          this.say("[2-2] PA:36, AS:81, AS+:162");
        },
      },
      {
        regex: ['as 2-3|2-3 as'],
        description: 'Text: [2-3] PA:25, AS:56, AS+:111',
        weight: 0,
        action: function() {
          this.say("[2-3] PA:25, AS:56, AS+:111");
        },
      },
      {
        regex: ['as 2-4|2-4 as'],
        description: 'Text: [2-4] PA:55, AS:123, AS+:246',
        weight: 0,
        action: function() {
          this.say("[2-4] PA:55, AS:123, AS+:246");
        },
      },
      {
        regex: ['as 2-5|2-5 as'],
        description: 'Text: [2-5] South Heavy Fleet: PA:68, AS:153, AS+:306 / South Light Fleet: PA:16, AS:35, AS+:69',
        weight: 0,
        action: function() {
          this.say("[2-5] South Heavy Fleet: PA:68, AS:153, AS+:306 / South Light Fleet: PA:16, AS:35, AS+:69");
        },
      },
      {
        regex: ['as 3-1|3-1 as'],
        description: 'Text: [3-1] PA:48, AS:108, AS+:216',
        weight: 0,
        action: function() {
          this.say("[3-1] PA:48, AS:108, AS+:216");
        },
      },
      {
        regex: ['as 3-2|3-2 as'],
        description: 'Text: [3-2] PA:52, AS:117, AS+:234',
        weight: 0,
        action: function() {
          this.say("[3-2] PA:52, AS:117, AS+:234");
        },
      },
      {
        regex: ['as 3-3|3-3 as'],
        description: 'Text: [3-3] PA:53, AS:119, AS+:237',
        weight: 0,
        action: function() {
          this.say("[3-3] PA:53, AS:119, AS+:237");
        },
      },
      {
        regex: ['as 3-4|3-4 as'],
        description: 'Text: [3-4] PA:55, AS:123, AS+:246',
        weight: 0,
        action: function() {
          this.say("[3-4] PA:55, AS:123, AS+:246");
        },
      },
      {
        regex: ['as 3-5|3-5 as'],
        description: 'Text: [3-5] Hoppo: PA:148, AS:332, AS+:663 / Hoppo Final: PA:170, AS:381, AS+:762',
        weight: 0,
        action: function() {
          this.say("[3-5] Hoppo: PA:148, AS:332, AS+:663 / Hoppo Final: PA:170, AS:381, AS+:762");
        },
      },
      {
        regex: ['as 4-1|4-1 as'],
        description: 'Text: [4-1] PA:32, AS:72, AS+:144',
        weight: 0,
        action: function() {
          this.say("[4-1] PA:32, AS:72, AS+:144");
        },
      },
      {
        regex: ['as 4-2|4-2 as'],
        description: 'Text: [4-2] PA:50, AS:113, AS+:225',
        weight: 0,
        action: function() {
          this.say("[4-2] PA:50, AS:113, AS+:225");
        },
      },
      {
        regex: ['as 4-3|4-3 as'],
        description: 'Text: [4-3] To Boss: PA:51, AS:114, AS+:228 / To SS Nodes: PA:32, AS:72, AS+:144',
        weight: 0,
        action: function() {
          this.say("[4-3] To Boss: PA:51, AS:114, AS+:228 / To SS Nodes: PA:32, AS:72, AS+:144");
        },
      },
      {
        regex: ['as 4-4|4-4 as'],
        description: 'Text: [4-4] PA:70, AS:156, AS+:312 / Princess: PA:68, AS:153, AS+:306',
        weight: 0,
        action: function() {
          this.say("[4-4] PA:70, AS:156, AS+:312 / Princess: PA:68, AS:153, AS+:306");
        },
      },
      {
        regex: ['as 4-5|4-5 as'],
        description: 'Text: [4-5] South: PA:112, AS:252, AS+:504 / Boss: PA: 92, AS:207, AS+:414 / Final: PA:74, AS:166, AS+:332',
        weight: 0,
        action: function() {
          this.say("[4-5] South: PA:112, AS:252, AS+:504 / Boss: PA: 92, AS:207, AS+:414 / Final: PA:74, AS:166, AS+:332");
        },
      },
      {
        regex: ['as 5-1|5-1 as'],
        description: 'Text: [5-1] PA:70, AS:156, AS+:312',
        weight: 0,
        action: function() {
          this.say("[5-1] PA:70, AS:156, AS+:312");
        },
      },
      {
        regex: ['as 5-2|5-2 as'],
        description: 'Text: [5-2] Final / Cleared : PA:65, AS:146, AS+:291',
        weight: 0,
        action: function() {
          this.say("[5-2] Final / Cleared : PA:65, AS:146, AS+:291");
        },
      },
      {
        regex: ['as 5-3|5-3 as'],
        description: 'Text: [5-3] No AS values on this map',
        weight: 0,
        action: function() {
          this.say("[5-3] No AS values on this map");
        },
      },
      {
        regex: ['as 5-4|5-4 as'],
        description: 'Text: [5-4] North: PA:78, AS:174, AS+:348 / Center: PA:64, AS:144, AS+:288 / South: PA:51, AS:114, AS+:228',
        weight: 0,
        action: function() {
          this.say("[5-4] North: PA:78, AS:174, AS+:348 / Center: PA:64, AS:144, AS+:288 / South: PA:51, AS:114, AS+:228");
        },
      },
      {
        regex: ['as 5-5|5-5 as'],
        description: 'Text: [5-5] Carrier Route: PA:158, AS:356, AS+:711 / Carrier R. Final: PA:168, AS:377, AS+:753',
        weight: 0,
        action: function() {
          this.say("[5-5] Carrier Route: PA:158, AS:356, AS+:711 / Carrier R. Final: PA:168, AS:377, AS+:753");
        },
      },
      {
        regex: ['as 6-1|6-1 as'],
        description: 'Text: [6-1] PA:56, AS:126, AS+:252 / H Node: PA:120, AS:270, AS+:540',
        weight: 0,
        action: function() {
          this.say("[6-1] PA:56, AS:126, AS+:252 / H Node: PA:120, AS:270, AS+:540");
        },
      },
      {
        regex: ['as 6-2|6-2 as'],
        description: 'Text: [6-2] H Node: PA:16, AS:35, AS+:69 / I Node: PA:68, AS:153, AS+:306 / Boss: PA:56, AS:126, AS+:252',
        weight: 0,
        action: function() {
          this.say("[6-2] H Node: PA:16, AS:35, AS+:69 / I Node: PA:68, AS:153, AS+:306 / Boss: PA:56, AS:126, AS+:252");
        },
      },
      {
        regex: ['as 6-3|6-3 as'],
        description: 'Text: [6-3] No AS values on this map',
        weight: 0,
        action: function() {
          this.say("[6-3] No AS values on this map");
        },
      },
      {
        regex: ['los 1-6|1-6 los'],
        description: 'Text: [1-6] ELoS: 16.6+',
        weight: 0,
        action: function() {
          this.say("[1-6] ELoS: 16.6+");
        },
      },
      {
        regex: ['los 2-5|2-5 los'],
        description: 'Text: [2-5] ELoS: 57.2~70.4 with 70.4 having a 100% chance of passing',
        weight: 0,
        action: function() {
          this.say("[2-5] ELoS: 57.2~70.4 with 70.4 having a 100% chance of passing");
        },
      },
      {
        regex: ['los 3-5|3-5 los'],
        description: 'Text: [3-5] ELoS: 28 at HQ 90~99',
        weight: 0,
        action: function() {
          this.say("[3-5] ELoS: 28 at HQ 90~99");
        },
      },
      {
        regex: ['los 4-5|4-5 los'],
        description: 'Text: [4-5] ELoS: From J: 61.2 / From H: 41.4',
        weight: 0,
        action: function() {
          this.say("[4-5] ELoS: From J: 61.2 / From H: 41.4");
        },
      },
      {
        regex: ['los 6-1|6-1 los'],
        description: 'Text: [6-1] ELoS: 25~30 minimum',
        weight: 0,
        action: function() {
          this.say("[6-1] ELoS: 25~30 minimum");
        },
      },
      {
        regex: ['los 6-2|6-2 los'],
        description: 'Text: [6-2] ELoS: 29~30.88 to H, 31+ has chance to go I; more ELoS = more chance to go I',
        weight: 0,
        action: function() {
          this.say("[6-2] ELoS: 29~30.88 to H, 31+ has chance to go I; more ELoS = more chance to go I");
        },
      },
      {
        regex: ['los 6-3|6-3 los'],
        description: 'Text: [6-3] ELoS: 53 (only report found)',
        weight: 0,
        action: function() {
          this.say("[6-3] ELoS: 53 (only report found)");
        },
      },
    ],
  };
})();
