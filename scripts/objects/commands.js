/*
 * Commands database
 *
 * Keeps all the possible commands for bot-chan. Basically just a big database.
 */
(function() {
  "use strict";

  window.Commands = {
    /*
     * Searches for a command that matches the input
     */
    search: function(text) {
      for(var a = 0; a < this.database.length; a++) {
        var regexes = this.database[a].regex;
        for(var b = 0; b < regexes.length; b++) {
          var regex = new RegExp(regexes[b], 'gi');
          if(regex.test(text)) {
            return this.database[a];
          }
        }
      }
      return false;
    },

    /*
     * Edits a page on the wikia.
     */
    send: function(data, method, callback) {
      data['format'] = 'json';
      $.ajax({
        data: data,
        dataType: 'json',
        url: wgScriptPath + '/api.php',
        type: method,
        success: function(response) {
          if(response.error) showError('API error: ' + response.error.info);
          else callback(response);
        },
        error: function(xhr, error) {
          console.log('AJAX error.');
          console.log(error);
        }
      });
    },

    /*
     * Each command has 4 parts:
       * Regex: Regular expression matched against the input text. It's given as an array so
         multiple regexes can work for the same action.
       * Description: The part that automates the help page.
       * Weight: How much this action costs. Default maximum is 3 per person.
       * Action: The response if the regex matches. Always a function.
     */
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
        description: 'Text: Personality-based',
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
        description: 'Text: https://www.youtube.com/watch?v=ocDB5zxSrgQ',
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
        description: 'Text: [[Recent Updates]]',
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
      {
        regex: ['^(who is|who\'?s) your (wife|waifu)'],
        description: 'Outputs a random kanmusu name.',
        weight: 3,
        action: function() {
          var shiplist = ["Mutsuki", "Kisaragi", "Yayoi", "Uzuki", "Satsuki", "Fumizuki", "Nagatsuki", "Kikuzuki", "Mikazuki", "Mochizuki",
          "Fubuki", "Shirayuki", "Hatsuyuki", "Miyuki", "Murakumo", "Isonami", "Ayanami", "Shikinami", "Oboro", "Akebono",
          "Sazanami", "Ushio", "Akatsuki", "Hibiki/Верный", "Ikazuchi", "Inazuma", "Hatsuharu", "Nenohi", "Wakaba", "Hatsushimo",
          "Shiratsuyu", "Shigure", "Murasame", "Yuudachi", "Harusame", "Samidare", "Suzukaze", "Asashio", "Ooshio", "Michishio",
          "Arashio", "Yamagumo", "Asagumo", "Arare", "Kasumi", "Kagerou", "Shiranui", "Kuroshio", "Hatsukaze", "Yukikaze",
          "Amatsukaze", "Tokitsukaze", "Urakaze", "Isokaze", "Hamakaze", "Tanikaze", "Nowaki", "Maikaze", "Akigumo", "Yuugumo",
          "Makigumo", "Naganami", "Takanami", "Asashimo", "Hayashimo", "Kiyoshimo", "Akizuki", "Shimakaze", "Z1", "Z3",
          "Tenryuu", "Tatsuta", "Kuma", "Tama", "Kitakami", "Ooi", "Kiso", "Nagara", "Isuzu", "Yura",
          "Natori", "Kinu", "Abukuma", "Yuubari", "Sendai", "Jintsuu", "Naka", "Agano", "Noshiro", "Yahagi",
          "Sakawa", "Ooyodo", "Furutaka", "Kako", "Aoba", "Kinugasa", "Myoukou", "Nachi", "Ashigara", "Haguro",
          "Takao", "Atago", "Maya", "Choukai", "Prinz Eugen", "Mogami", "Mikuma", "Suzuya", "Tone", "Kongou",
          "Hiei", "Haruna", "Kirishima", "Nagato", "Mutsu", "Yamato", "Musashi", "Bismarck", "Littorio/Italia", "Roma",
          "Fusou", "Yamashiro", "Ise", "Houshou", "Ryuujou", "Ryuuhou", "Hiyou", "Jun'you", "Shouhou", "Zuihou",
          "Akagi", "Kaga", "Souryuu", "Hiryuu", "Shoukaku", "Zuikaku", "Taihou", "Unryuu", "Amagi", "Katsuragi",
          "I-168", "I-8", "I-19", "I-58", "I-401", "Maruyu", "U-511/Ro-500", "Chitose", "Chiyoda", "Akitsushima",
          "Taigei", "Akashi", "Katori", "Akitsu Maru", "Kawakaze", "Umikaze", "Littorio", "Kazagumo", "Teruzuki", "Mizuho",
          "Kashima", "Graf Zeppelin", "Hagikaze", "Arashi"];

          var rand = Math.floor(Math.random() * shiplist.length);
          this.say(shiplist[rand] + ".");
        },
      },
      {
        regex: ['(who is|who\'?s) my (wife|waifu)'],
        description: 'Outputs a random Abyssal name.',
        weight: 3,
        action: function() {
          var shiplist = ['Tsu-Class Light Cruiser', 'Ri-Class Heavy Cruiser', 'Ne-Class Heavy Cruiser', 'Wo-chan', 'Ru-Class Battleship',
          'Ta-Class Battleship', 'Re-Class Battleship', 'Armored Carrier Demon', 'Armored Carrier Princess', 'Anchorage Demon',
          'Anchorage Princess', 'Southern Demon', 'Southern War Demon', 'Southern War Princess', 'Airfield Princess',
          'Battleship Princess', 'Seaport-chan', 'Isolated Island Demon', 'Hoppou', 'Aircraft Carrier Demon',
          'Midway Princess', 'Aircraft Carrier Princess', 'Destroyer Princess', 'Aircraft Carrier Water Demon', 'Light Cruiser Demon',
          'Battleship Water Demon', 'Harbour Water Demon', 'Anchorage Water Demon', 'Seaplane Tender Princess', 'Air Defense Princess',
          'Light Cruiser Princess', 'Submarine Princess', 'Destroyer Water Demon'];

          if(name == 'TScript' || name == 'Epicureanpancake') shiplist = ['I-Class Destroyer'];
          if(name == 'Ebisuisei') shiplist = ['Anchorage Water Demon'];
          if(name == 'AbsoluteLuck') shiplist = ['Air Defense Princess'];
          var rand = Math.floor(Math.random() * shiplist.length);
          this.say(shiplist[rand] + ".");
        },
      },
      {
        regex: ['^pick', '^choose'],
        description: 'Picks between options. Options must be separated by " or ".\nExample: Yuki, pick yes or no.',
        weight: 3,
        action: function() {
          this.text = this.text.split(' or ');
          var rand = Math.floor(Math.random() * this.text.length);
          this.text = this.text[rand];
          this.say(this.text_only + '.');
        },
      },
      {
        regex: ['^latest links', '^recent link'],
        description: 'Returns the 5 latest links posted in chat.',
        weight: 3,
        action: function() {
          this.say('Latest links (WARNING: May contain NSFW links):\n' + Data.latest_links.join('\n'));
        },
      },
      {
        regex: ['^kick me', 'do you want to see my ship\\s?list', 'i\'?m kuso', '^kill me', '^sink me', '^chat\\s?nuke'],
        description: 'Kicks the invoker.',
        weight: 1,
        action: function() {
          this.kick(this.user);
        },
      },
      {
        regex: ['^kick', '^sink', '^terminate', '^exterminate', '^slap', '^punch', '^nuke', '^rekt', '^grate', '^torpedo', '^cut-in'],
        description: 'Sinks the user given.\nExample: Yuki, kick KowaretaGuze.',
        weight: 0,
        action: function() {
          if(this.auth) {
            var short = {'JWT': 'JustWastingTime', 'TS': 'TScript'};
            if(short[this.text_only]) this.text = short[this.text_only];
            this.say(Personality.line('kick'));
            this.kick(this.text);
          }
        },
      },
      {
        regex: ['^reset games'],
        description: 'Resets the game cooldowns so they may be played immediately following this command\'s invocation.',
        weight: 0,
        action: function() {
          if(this.auth == 3) {
            Data.reset_games();
            this.say('Game cooldowns reset!');
          }
        },
      },
      {
        regex: ['^reset all', '^reset cooldowns'],
        description: 'Resets all weights on all individuals (even those not present).',
        weight: 0,
        action: function() {
          if(this.auth == 3) {
            Data.reset_cooldowns();
            this.say('All cooldowns reset!');
          }
        },
      },
      {
        regex: ['^reset'],
        description: 'Resets all weights on the specified individual.\nExample: Yuki, reset CDRW.',
        weight: 0,
        action: function() {
          if(this.auth == 3) {
            Data.reset_cooldown(this.text);
            this.say('Cooldowns reset for ' + this.text + '!');
          }
        },
      },
      {
        regex: ['^silence left'],
        description: 'Checks how much longer the bot is silenced for.',
        weight: 0,
        action: function() {
          if(this.auth) {
            if(!Data.silence) Data.set_silence(0);
            this.say(parseInt((Data.silence - new Date().getTime()) / 60000) + ' minutes remaining.');
          }
        },
      },
      {
        regex: ['^silence'],
        description: 'Silences the bot for X minutes.\nExample: Yuki, silence 5.',
        weight: 0,
        action: function() {
          if(this.auth) {
            Data.set_silence = new Date().getTime() + (parseInt(this.text_only) * 60000);
          }
        },
      },
      {
        regex: ['^add explosion'],
        description: 'Adds the given name to the explosion list.\nExample: Yuki, add explosion Akios.',
        weight: 0,
        action: function() {
          if(this.auth) {
            this.text = this.text.substr(10);
            Data.add_explosion(this.text_only);
            this.say(this.text_only + ' has been added to the list of explosion targets!');
          }
        },
      },
      {
        regex: ['^remove explosion'],
        description: 'Removes the given name from the explosion list.\nExample: Yuki, remove explosion Akios.',
        weight: 0,
        action: function() {
          if(authority) {
            this.text = this.text.substr(10);
            var index = Data.remove_explosion(this.text_only);
          }
        },
      },
      {
        regex: ['^list explosion'],
        description: 'Lists all individuals in the explosion list.',
        weight: 0,
        action: function() {
          if(this.auth) {
            this.say('Current possible targets: ' + Data.explosions.join(', '));
          }
        },
      },
      {
        regex: ['^clear explosion'],
        description: 'Resets the explosion list to just Akios.',
        weight: 0,
        action: function() {
          if(this.auth) {
            Data.reset_explosion();
            this.say('Explosion list reset!');
          }
        },
      },
      {
        regex: ['^i (wanna|want to) play'],
        description: 'The speaker joins the list of people playing russian roulette or reverse roulette.',
        weight: 2,
        action: function() {
          Data.add_player(this.user);
        },
      },
      {
        regex: ['^i quit'],
        description: 'The speaker leaves the list of people playing russian roulette or reverse roulette.',
        weight: 0,
        action: function() {
          Data.quit_player(this.user);
        },
      },
      {
        regex: ['^russian roulette'],
        description: 'Invoke russian roulette. Removes one person from the list at random and kicks them from chat.',
        weight: 0,
        action: function() {
          if(Data.players.length < 2) {
            this.say('We need at least two people.');
          } else {
            var rand = Math.floor(Math.random() * Data.players.length);
            var loser = Data.players[rand];
            this.kick(loser);
            if(loser != this.user) Data.add_cooldown(loser, 2, 15 * 60000);
            Data.add_cooldown(this.user, 2, 15 * 60000);
            this.players.splice(rand, 1);
          }
        },
      },
      {
        regex: ['^reverse roulette'],
        description: 'Invoke reverse roulette. Removes players until there\'s only one left.',
        weight: 0,
        action: function() {
          if(!Data.game_cds.reverse_roulette) Data.set_game_cd('reverse_roulette', 0);
          if(Data.game_cds.reverse_roulette > new Date().getTime()) return;
          if(Data.players.indexOf(this.user) == -1) return;
          
          if(Data.players.length < 2) {
            this.say('We need at least two people.');
          } else {
            while(Data.players.length > 1) {
              var rand = Math.floor(Math.random() * Data.players.length);
              this.kick(Data.players[rand]);
              Data.add_epeen(this.players[rand], -5);
              Data.remove_player(this.players[rand]);
            }

            var winner = Data.players.pop();
            Data.reset_cooldown(winner);
            Data.add_epeen(winner, 10);
            this.say(winner + ' is the winner! Their cooldowns have been reset and they have been awarded 10 e-peen points! All losers lose 5 e-peen points!');
            Data.set_game_cd('reverse_roulette', new Date().getTime() + 1000 * 60 * 30);
          }
        },
      },
      {
        regex: ['^rps'],
        description: 'Invokes rock-paper-scissors. Playing is done by saying rock, paper or scissors to bot-chan. The timeout is one minute.',
        weight: 0,
        action: function() {
          if(!Data.game_cds.rps) Data.set_game_cd('rps', 0);
          if(Data.game_cds.rps > new Date().getTime()) return;
          if(Data.flags['rps']) return;
          
          this.say('Rock, Paper, Scissors is starting! Say "rock", "paper", or "scissors" to me to play!');
          Data.set_flag('rps', true);
          this.rps_timer = setTimeout($.proxy(function() {
            clearTimeout(this.rps_timer);
            Data.set_flag('rps', false);

            var hands = ['rock', 'paper', 'scissors', 'rock', 'paper', 'scissors', 'rock', 'paper', 'scissors', 'rock', 'paper', 'scissors', 'rock', 'paper', 'scissors', 'rock', 'paper', 'scissors', 'rock', 'paper', 'scissors', 'rock', 'paper', 'scissors', 'rock', 'paper', 'scissors', 'rock', 'paper', 'scissors'];
            var chosen = Math.floor(Math.random() * hands.length);
            var winner = hands[(chosen + 1) % 30];
            var loser = hands[(chosen + 2) % 30];
            chosen = hands[chosen];

            if(Data.rps_players[winner] && Data.rps_players[winner].length == 0) {
              this.say("I chose " + chosen + "! Nobody won!");
            } else {
              this.say("I chose " + chosen + "! Winners: " + Data.rps_players[winner].join(', ') + ". They gain 2 e-peen!");
              for(var i = 0; i < Data.rps_players[winner].length; i++) {
                Data.add_epeen(Data.rps_players[winner][i], 2);
              }
            }
            if(Data.rps_players[loser] && Data.rps_players[loser].length == 0) {
              this.say("No losers this round!");
            } else {
              this.say("The losers are: " + Data.rps_players[loser].join(', ') + ". They lose 1 e-peen!");
              for(var i = 0; i < Data.rps_players[loser].length; i++) {
                Data.add_epeen(Data.rps_players[loser][i], -1);
              }
            }
            Data.reset_rps_players();
            Data.set_game_cd('rps', new Date().getTime() + 1000 * 60 * 30);
          }, this), 60000);
        },
      },
      {
        regex: ['^rock'],
        description: 'Rock-paper-scissors command.',
        weight: 0,
        action: function() {
          Data.add_rps_player('rock', this.user);
        },
      },
      {
        regex: ['^paper'],
        description: 'Rock-paper-scissors command.',
        weight: 0,
        action: function() {
          Data.add_rps_player('paper', this.user);
        },
      },
      {
        regex: ['^scissors'],
        description: 'Rock-paper-scissors command.',
        weight: 0,
        action: function() {
          Data.add_rps_player('scissors', this.user);
        },
      },
      {
        regex: ['^my e-?peen'],
        description: 'Returns the speaker\'s current e-peen length.',
        weight: 1,
        action: function() {
          var epeen = Data.epeen[this.user] || 0;
          this.say("Your e-peen is " + epeen + " falukorv long!");
        },
      },
      {
        regex: ['^e-?peen leaders?'],
        description: 'Returns the current leaderboards for e-peen length.',
        weight: 1,
        action: function() {
          var string = "E-peen leaders: ";
          var sorted = Object.keys(Data.epeen).sort(function(a, b) { return Data.epeen[a] - Data.epeen[b]; })
          sorted.reverse();
          for(var i = 0; i < 5; i++) {
            if(sorted[i] == undefined) break;
            string += "[" + (i + 1) + "] " + sorted[i] + " (" + Data.epeen[sorted[i]] + "), ";
          }
          string = string.slice(0, -2);
          this.say(string);
        },
      },
      {
        regex: ['^lady leaders'],
        description: 'Returns the current leaderboards for ladyness.',
        weight: 1,
        action: function() {
          var string = "Lady leaders: ";
          var sorted = Object.keys(Data.epeen).sort(function(a, b) { return Data.epeen[b] - Data.epeen[a]; })
          sorted.reverse();
          for(var i = 0; i < 5; i++) {
            if(sorted[i] == undefined) break;
            string += "[" + (i + 1) + "] " + sorted[i] + " (" + Data.epeen[sorted[i]] + "), ";
          }
          string = string.slice(0, -2);
          this.say(string);
        },
      },
      {
        regex: ['(who\'?s|who is) playing'],
        description: 'Returns the current list of players playing russian roulette or reverse roulette.',
        weight: 1,
        action: function() {
          if(Data.players.length > 0) {
            this.say('Players: ' + Data.players.join(', '));
          } else {
            this.say('Nobody is playing at the moment.');
          }
        },
      },
      {
        regex: ['^who am i'],
        description: 'Returns the speaker\'s name.',
        weight: 3,
        action: function() {
          this.say(this.user + '.');
        },
      },
      {
        regex: ['^who'],
        description: 'Returns a random user from within the chat list.\nExample: Yuki, who faps too much?',
        weight: 3,
        action: function() {
          var rand = Math.floor(Math.random() * this.user_list.length);
          this.say(this.user_list[rand] + '.');
        },
      },
      {
        regex: ['^register'],
        description: 'Creates an infobit.\nExample: Yuki, register Koai = Ass.',
        weight: 0,
        action: function() {
          var test = this.text;
          test = test.split(' = ');
          if(test.length == 1) {
            this.say("Invalid format.");
            return;
          } else if(test[1].length > 75 && this.auth < 2) {
            this.say("Input string cannot be longer than 75 characters. Last input was " + test[1].length + " characters.");
            return;
          }

          Data.add_infobit(test[0], test[1]);
          this.say('"' + test[0] + '" has been registered with value "' + test[1] + '".');

          // Upload the values to a page on the wikia
          var self = this;
          var values = '<pre>\n';
          var keys = Object.keys(Data.infobits);
          for(var i = 0; i < keys.length; i++) {
            values += keys[i] + '\n';
            values += '=' + Data.infobits[keys[i]] + '\n';
          }
          values += '</pre>';

          var data = {
            'action'      : 'query',
            'prop'        : 'info|revisions',
            'intoken'     : 'edit',
            'titles'      : 'Project:Bot/Registered_Values',
            'rvprop'      : 'content',
            'rvlimit'     : '1',
            'indexpageids': 'true',
          };

          this.send(data, 'GET', function(response) {
            var page = response.query.pages[response.query.pageids[0]];
            var content = typeof(page['revisions']) != 'undefined' ? page.revisions[0]['*'] : '';

            var data = {
              'minor'        : 'no',
              'bot'          : 'yes',
              'summary'      : 'Updating registered values.',
              'action'       : 'edit',
              'title'        : 'Project:Bot/Registered_Values',
              'startimestamp': page.starttimestamp,
              'token'        : page.edittoken,
              'text'         : values,
            };

            self.send(data, 'POST', function(response) {
              console.log("Registered values updated.");
            });
          });
        },
      },
      {
        regex: ['^recall'],
        description: 'Returns the registered value, if it exists.\nExample: Yuki, recall Koai.',
        weight: 0,
        action: function() {
          if(Data.infobits[this.text_only] != undefined) {
            this.say(this.text_only + ': ' + Data.infobits[this.text_only]);
          }
        },
      },
      {
        regex: ['^fortune'],
        description: 'Returns a random fortune.',
        weight: 3,
        action: function() {
          var fortunes = [
            "Compass-chan will take you for a ride ride ride~",
            "A lot of (salt) is in your future.",
            "You will have BEAVER LEVELS of luck.",
            "That Bw4 quest of yours will take 50 more sorties.",
            "/me attaches a falukorv magnet onto your back.",
            "Beware of Ru, she's related to Re.",
            "Warning: (CATDIVE) is imminent.",
            "You are Hoss' most likely next (HAMMER) victim.",
            "You are now registered for Rise's explosion list. (ARA) Have a good day!",
            "You will get a (TAIHA) first node, next sortie :v",
            "You will have two level 1s and four 99s in your pvp list next reset.",
            "RNG will almost be nice to you, you will redirect away from the boss node.",
            "YOU ARE NOW ROMA-CURSED with whatever ship you -truly- want.",
            "(falukorv)",
            "Oscar will let you through.",
            "(YASEN) BEST SENDAI!",
            "Poi?",
            "FUSOU will visit your next 3 LSCs ([[User:Kazami Yuuka|Click here]] to negate this)!",
            "You might one-shot your next LSC target.",
            "You will KUSO next event. LSC 7/7/7/7 100 to avoid this.",
            "A Nagamon will come for your best DDs.",
            "You will get Akbar'd unless you give Nanamin your soul.",
            "Swear at AbsoluteLuck to have some of his luck.",
            "Want to be RNG besties? Go exceed Nanamin's fleet.",
            "You will grow up to be an elephant (LADY)",
            "Many (bucket)s will be used.",
            "You will last dance for 8 and 1/2 days. More or less.",
            "Echo already married your shipfu. Unless she's Umikaze.",
            "Your waifu will have an event-limited CG in the future.",
            "Stream your runs. Salt is best shared to everyone.",
            "Bot-chan best grill.",
            "You will have great fortune, if you can make a new fortune up.",
            "(NANODESU) (NANODESU) (NANODESU)",
            "Fortune? I threw that away for you. (IRUJANAI) You have me don't you?",
            "No. (AMAGI)",
            "*Your fortune slip turns to ashes as you hold it.*  (FUSOU)",
            "(LOADING)",
            "OM NOM NOM NOM! Akagi just ate 30k of your bauxite. https://danbooru.donmai.us/posts/1568866",
            "(screw)s will be wasted at your next attempt.",
            "(BAIT) MPs are coming!!!",
            "There is no KanColle Anime.",
            "Hiei's curry is waiting for you at your office.",
            "Haruna is NOT Daijoubu.",
            "Kirishima needs a new mic to check. She keeps DROPPING them.",
            "Tea time for Kongou is srs bsns. (DEESU)",
            "2-4-11 is a form of love too!",
            "You have just inherited Nana's Summer E-7 salt.",
            "Today, everyone will compliment you. Specifically, your ass.",
            "You will be as lucky as AL if you can dance the dance (y)",
            "Yuki will pick on you for the rest of today.",
            "Your waifu's next remodel will require a blueprint, a protopault, an experimental plane, and 100 souls of the damned.",
          ];
          var rand = Math.floor(Math.random() * fortunes.length);
          this.say(fortunes[rand]);
        },
      },
      {
        regex: ['^set personality', '^load personality'],
        description: 'Changes the current personality',
        weight: 0,
        action: function() {
          if(this.auth == 3) {
            this.shift();
            this.say("Personality set to \"" + this.text_only + "\"!");
            Personality.change_to(this.text_only);
          }
        },
      },
      {
        regex: ['^set mode'],
        description: 'Changes the current mode. Modes determine which commands are available.',
        weight: 0,
        action: function() {
          if(this.auth == 3) {
            this.shift();
            Data.set_mode(this.text_only);
          }
        },
      },
      {
        regex: ['^remaining time'],
        description: 'Returns the time remaining to the set time. Must be manually set.',
        weight: 0,
        action: function() {
          var time_left = (Data.event_end - new Date().getTime()) / 1000;

          var days = Math.floor(time_left / (60 * 60 * 24));
          time_left %= 60 * 60 * 24;

          var hours = Math.floor(time_left / 3600);
          time_left %= 3600;
          if(hours < 10) hours = "0" + hours;

          var minutes = Math.floor(time_left / 60);
          time_left %= 60;
          if(minutes < 10) minutes = "0" + minutes;

          if(time_left < 10) time_left = "0" + Math.floor(time_left);
          else time_left = Math.floor(time_left);

          this.say(days + " days and " + hours + ":" + minutes + ":" + time_left + " remaining.");
        },
      },
      {
        regex: ['^set event'],
        description: 'Sets the new time for the countdown.',
        weight: 0,
        action: function() {
          this.shift();
          Data.set_event_end(this.text_only);
        },
      },
    ],
  };
})();
