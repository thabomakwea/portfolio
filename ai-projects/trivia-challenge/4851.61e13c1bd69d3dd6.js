"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4851],{4851:(x,u,n)=>{n.r(u),n.d(u,{HomePageModule:()=>y});var g=n(6895),r=n(4556),h=n(433),l=n(2598),p=n(655),c=n(1427),t=n(8256),d=n(2079),m=n(5813);const f=["app"];function k(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"ion-content")(1,"div",31)(2,"div",32)(3,"div",33),t._uU(4," Statistics"),t.qZA(),t.TgZ(5,"div",34)(6,"p")(7,"span"),t._uU(8,"Games Played:"),t.qZA(),t._uU(9),t.qZA(),t.TgZ(10,"p")(11,"span"),t._uU(12,"Incorrect answers:"),t.qZA(),t._uU(13),t.qZA(),t.TgZ(14,"p")(15,"span"),t._uU(16,"Balance:"),t.qZA(),t._uU(17),t.qZA(),t.TgZ(18,"p")(19,"span"),t._uU(20,"Timeouts:"),t.qZA(),t._uU(21),t.qZA(),t.TgZ(22,"p")(23,"span"),t._uU(24,"Jackpots:"),t.qZA(),t._uU(25),t.qZA(),t.TgZ(26,"p")(27,"span"),t._uU(28,"Luck button "),t._UZ(29,"ion-icon",35),t._uU(30,":"),t.qZA(),t._uU(31),t.qZA(),t.TgZ(32,"p")(33,"span"),t._uU(34,"Luck button "),t._UZ(35,"ion-icon",36),t._uU(36,":"),t.qZA(),t._uU(37),t.qZA(),t.TgZ(38,"p")(39,"span"),t._uU(40,"Lucky button "),t._UZ(41,"ion-icon",37),t._uU(42,":"),t.qZA(),t._uU(43),t.qZA(),t.TgZ(44,"p")(45,"span"),t._uU(46,"Correct answers:"),t.qZA(),t._uU(47),t.qZA()(),t.TgZ(48,"a",38),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.closeStatsModal())}),t._UZ(49,"ion-icon",39),t._uU(50," Back "),t.qZA()()()()}if(2&o){const e=t.oxw();t.xp6(9),t.Oqu(e.gameCount),t.xp6(4),t.Oqu(e.incorrectAnswersCount),t.xp6(4),t.Oqu(e.balance),t.xp6(4),t.Oqu(e.timeouts),t.xp6(4),t.Oqu(e.jackpot),t.xp6(6),t.Oqu(e.luckky_button),t.xp6(6),t.Oqu(e.luckky_buttonOne),t.xp6(6),t.Oqu(e.luckky_buttonTwo),t.xp6(4),t.Oqu(e.correctAnswersCount)}}const _=[{path:"",component:(()=>{class o{constructor(e,a){this.soundManager=e,this.storage=a,this.store={},this.gameCount=0,this.incorrectAnswersCount=0,this.balance=0,this.timeouts=0,this.jackpot=0,this.luckky_button=0,this.luckky_buttonOne=0,this.luckky_buttonTwo=0,this.correctAnswersCount=0,this.showStatsModal=!1,this.initialize(),this.createStatistics()}ngOnInit(){this.createStorage(),this.preloadAudio()}createStorage(){null===localStorage.getItem("trivia")?(localStorage.setItem("trivia",JSON.stringify({balance:0,games_played:0,Jackpots:0,correct_answers:0,incorrect_answers:0,timeouts:0,lucky_button_1:0,lucky_button_2:0,lucky_button:0,walk_aways:0})),this.store=JSON.parse(JSON.stringify(localStorage.getItem("trivia")))):this.store=JSON.parse(JSON.stringify(localStorage.getItem("trivia"))),console.log("this.store:",JSON.parse(JSON.stringify(this.store)).timeouts)}preloadAudio(){this.soundManager.preloadAudio("background","https://thabomakwea.github.io/portfolio/ai-projects/trivia-challenge/assets/sounds/background1.mp3"),this.soundManager.preloadAudio("complete","https://thabomakwea.github.io/portfolio/ai-projects/trivia-challenge/assets/sounds/complete.mp3"),this.soundManager.playAudio("background",!0)}playAudio(e){console.log("soundName:",e),this.soundManager.playAudio(e)}createStatistics(){this.gameCount=this.storage.getGameCount(),this.correctAnswersCount=this.storage.getCorrectAnswers(),this.incorrectAnswersCount=this.storage.getIncorrectAnswers(),this.balance=this.storage.getBalance(),this.jackpot=this.storage.getJackpot(),this.timeouts=this.storage.getTimeouts(),this.luckky_button=this.storage.getLuckyButton(),this.luckky_buttonOne=this.storage.getLuckyButtonOne(),this.luckky_buttonTwo=this.storage.getLuckyButtonTwo()}closeStatsModal(){this.showStatsModal=!1}showStatistics(){this.showStatsModal=!0,this.gameCount=this.storage.getGameCount(),this.correctAnswersCount=this.storage.getCorrectAnswers(),this.incorrectAnswersCount=this.storage.getIncorrectAnswers(),this.balance=this.storage.getBalance(),this.jackpot=this.storage.getJackpot(),this.timeouts=this.storage.getTimeouts(),this.luckky_button=this.storage.getLuckyButton(),this.luckky_buttonOne=this.storage.getLuckyButtonOne(),this.luckky_buttonTwo=this.storage.getLuckyButtonTwo(),console.log("gameCount: ",this.storage.getGameCount()),console.log("correctAnswersCount: ",this.storage.getCorrectAnswers()),console.log("incorrectAnswersCount: ",this.storage.getIncorrectAnswers()),console.log("balance: ",this.storage.getBalance()),console.log("jackpot: ",this.storage.getJackpot()),console.log("timeouts: ",this.storage.getTimeouts()),console.log("luckky_button: ",this.storage.getLuckyButton()),console.log("luckky_buttonOne: ",this.storage.getLuckyButtonOne()),console.log("luckky_buttonTwo: ",this.storage.getLuckyButtonTwo())}initialize(){return(0,p.mG)(this,void 0,void 0,function*(){yield c.TQ.trackingAuthorizationStatus(),c.TQ.initialize({requestTrackingAuthorization:!0,testingDevices:[""],initializeForTesting:!0}),yield this.showBanner()})}showBanner(){return(0,p.mG)(this,void 0,void 0,function*(){const e={adId:"",adSize:c.ci.ADAPTIVE_BANNER,position:c.N4.BOTTOM_CENTER,isTesting:!0,margin:0};yield c.TQ.showBanner(e)})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(d.S),t.Y36(m.V))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-home"]],viewQuery:function(e,a){if(1&e&&t.Gf(f,5),2&e){let s;t.iGM(s=t.CRH())&&(a.app=s.first)}},decls:47,vars:9,consts:[[3,"fullscreen"],["id","container",1,"background"],["app",""],[1,"balances"],[1,"question-header"],["name","wallet-outline",1,"icon-balance"],[1,"questions"],["xmlns","http://www.w3.org/2000/svg",0,"xmlns","xlink","http://www.w3.org/1999/xlink","version","1.1","id","Layer_1","x","0px","y","0px","viewBox","0 0 423 409",0,"xml","space","preserve",2,"enable-background","new 0 0 423 409"],["type","text/css"],["x","-24","y","-21","width","549","height","490",1,"st0"],["d","M278.6,190.8c0.1-35.9-29.1-65.2-65-65.3c-35.7,0-64.7,28.9-65,64.8c-0.3,35.8,28.9,65.3,64.8,65.4   C249.2,255.9,278.5,226.8,278.6,190.8z M319.6,138.2c35.8-0.1,65.3-29.7,65-65.3C384.4,37.1,355.2,8.1,319.6,8   c-35.7-0.1-65.2,29.4-65.2,65.2C254.4,108.9,283.8,138.3,319.6,138.2z M87.9,20.1c0,13.9,0,27.3,0,41c-13.8,0-27,0-40.5,0   c0,8,0,15.7,0,23.8c13.6,0,27,0,40.8,0c0,13.9,0,27.3,0,40.8c8.2,0,15.9,0,24,0c0-13.6,0-26.9,0-40.7c13.8,0,27.3,0,41.1,0   c0-8.2,0-15.8,0-24c-13.7,0-27.2,0-41.2,0c0-13.9,0-27.3,0-40.8C103.9,20.1,96.3,20.1,87.9,20.1z",1,"st1"],["d","M8.8,278.2c2.1-6.4,3.4-13.2,6.4-19.1c16.1-31.9,56.2-41.3,84.9-20.1c16.1,12,33,22.5,52,29.2   c26.7,9.4,54,12.7,82.2,9.5c27.7-3.2,53.3-12.2,76.8-27.4c5.6-3.6,10.9-7.7,16.3-11.6c25.5-18.5,60.2-13.4,79.5,11.7   c18.7,24.3,14.4,59.2-10,78.7c-41.8,33.3-89.2,53.7-142.1,61c-64.2,8.9-125-2.1-181.9-33C57.9,349.1,44,339,30.3,328.9   c-11.6-8.5-18.2-20.6-20.7-34.9c-0.2-1-0.5-2-0.8-3C8.8,286.7,8.8,282.5,8.8,278.2z M208.9,369.3c41.7,0.1,80.2-8,114.4-23.1   c21.2-9.4,40.9-21.3,58.9-35.9c11.4-9.2,15-23.2,9.9-37.5c-4.2-12-17.1-20.8-30.3-21.1c-9-0.2-16.5,3.4-23.5,8.7   c-16,12.4-33.5,22.2-52.5,29.3c-34.5,13-69.9,16.5-106.1,10.4c-26.4-4.4-51.2-13.6-73.8-28c-7.5-4.8-14.6-10.2-22.1-15.2   c-7.5-5-15.8-6.5-24.4-4.6c-13.9,3.2-22.8,12-25.8,25.8c-3,13.6,2,24.7,12.8,33.1C95.4,349.8,151.3,368.5,208.9,369.3z",1,"st2"],["d","M278.6,190.8c-0.1,36-29.4,65.1-65.2,64.9c-35.9-0.2-65.1-29.6-64.8-65.4c0.3-35.9,29.4-64.9,65-64.8   C249.5,125.6,278.7,155,278.6,190.8z M254.7,190.6c-0.1-22.5-18.9-41.2-41.3-41.1c-22.3,0.1-40.8,18.7-40.9,41.1   c-0.1,22.6,18.5,41.2,41.1,41.2C236.2,231.8,254.8,213.1,254.7,190.6z",1,"st2"],["d","M319.6,138.2c-35.8,0.1-65.2-29.3-65.2-65.1c0-35.8,29.5-65.3,65.2-65.2c35.7,0.1,64.8,29.2,65.1,64.9   C384.9,108.5,355.4,138.1,319.6,138.2z M319.7,114.2c22.3-0.1,40.9-18.7,41-41c0.1-22.3-18.8-41.3-41.2-41.3   c-22.4,0-41.2,18.8-41.2,41.3C278.4,95.7,297.1,114.3,319.7,114.2z",1,"st2"],["d","M87.9,20.1c8.4,0,16.1,0,24.2,0c0,13.6,0,26.9,0,40.8c14,0,27.5,0,41.2,0c0,8.2,0,15.8,0,24   c-13.8,0-27.3,0-41.1,0c0,13.8,0,27.1,0,40.7c-8,0-15.8,0-24,0c0-13.5,0-26.9,0-40.8c-13.8,0-27.2,0-40.8,0c0-8.1,0-15.8,0-23.8   c13.4,0,26.7,0,40.5,0C87.9,47.4,87.9,34,87.9,20.1z",1,"st2"],["d","M208.9,369.3c-57.6-0.8-113.5-19.5-162.5-58c-10.7-8.4-15.7-19.5-12.8-33.1c3-13.9,11.9-22.7,25.8-25.8   c8.7-2,17-0.4,24.4,4.6c7.4,4.9,14.5,10.4,22.1,15.2c22.6,14.4,47.4,23.6,73.8,28c36.2,6,71.7,2.5,106.1-10.4   c19-7.1,36.4-16.9,52.5-29.3c6.9-5.3,14.4-8.9,23.5-8.7c13.2,0.3,26.1,9.2,30.3,21.1c5.1,14.3,1.5,28.3-9.9,37.5   c-18,14.6-37.7,26.5-58.9,35.9C289.1,361.3,250.6,369.3,208.9,369.3z M58.9,294.1c95.6,76.3,227.3,66.8,307.6,1.1   c-4.8-6.1-9.6-12.3-14.6-18.5c-41.4,31.6-87.8,47.5-139.3,47.3c-51.6-0.2-97.9-16.8-138.9-48.4C68.6,281.9,63.8,287.9,58.9,294.1z",1,"st2"],["d","M254.7,190.6c0.1,22.5-18.5,41.2-41.1,41.2c-22.6,0-41.2-18.7-41.1-41.2c0.1-22.4,18.6-41,40.9-41.1   C235.8,149.4,254.6,168.1,254.7,190.6z",1,"st2"],["d","M319.7,114.2c-22.6,0.1-41.3-18.5-41.3-41.1c0-22.5,18.8-41.3,41.2-41.3c22.3,0,41.3,19,41.2,41.3   C360.6,95.5,341.9,114.2,319.7,114.2z M319.4,88.9c5.3-5.3,10.8-10.8,15.8-15.7c-5.3-5.3-10.8-10.8-15.7-15.7   c-5.2,5.2-10.6,10.6-15.8,15.8C308.9,78.3,314.3,83.8,319.4,88.9z",1,"st3"],["d","M319.4,88.9c-5.1-5.1-10.6-10.6-15.6-15.6c5.1-5.1,10.6-10.6,15.8-15.8c4.9,4.9,10.4,10.4,15.7,15.7   C330.2,78.2,324.7,83.6,319.4,88.9z",1,"st3"],[1,"question-title"],[1,"stars"],[1,"ready-text"],["href","https://thabomakwea.github.io/portfolio/ai-projects/trivia-challenge/#/trivia",1,"trivia-button","ribbon-outset","border",3,"click"],["name","game-controller-outline"],[1,"trivia-button","ribbon-outset","border",3,"click"],["name","stats-chart-outline"],["href","https://thabomakwea.github.io/portfolio/ai-projects/trivia-challenge/",1,"trivia-button"],["name","share-social-outline"],["href","https://thabomakwea.github.io/portfolio/ai-projects/",1,"trivia-button","ribbon-outset","border"],["name","power-outline"],[3,"showBackdrop","animated","keyboardClose","mode","isOpen"],[1,"background"],[1,"modal-container"],[1,"stats-header"],[1,"questions","stats"],["name","gift-outline"],["name","ice-cream-outline"],["name","megaphone-outline"],[1,"trivia-button",3,"click"],["name","exit-outline"]],template:function(e,a){1&e&&(t.TgZ(0,"ion-content",0)(1,"div",1,2)(3,"div",3)(4,"div",4),t._uU(5," Game "),t.TgZ(6,"span"),t._uU(7,"Tub"),t.qZA()(),t.TgZ(8,"div"),t._UZ(9,"ion-icon",5),t._uU(10),t.ALo(11,"currency"),t.qZA()(),t.TgZ(12,"div",6),t.O4$(),t.TgZ(13,"svg",7)(14,"style",8),t._uU(15," .st0{display:none;} .st1{fill:rgb(251, 4, 90);} .st2{fill:#FFFFFF;} .st3{fill:none;}\n"),t.qZA(),t._UZ(16,"rect",9),t.TgZ(17,"g"),t._UZ(18,"path",10)(19,"path",11)(20,"path",12)(21,"path",13)(22,"path",14)(23,"path",15)(24,"path",16)(25,"path",17)(26,"path",18),t.qZA()(),t.kcU(),t.TgZ(27,"div",19),t._uU(28,"Trivia Challenge"),t.qZA(),t.TgZ(29,"p",20),t._uU(30,"\u2605 \u2605 \u2605 \u2605 \u2605"),t.qZA()(),t.TgZ(31,"p",21),t._uU(32,"Ready for the next challenge?"),t.qZA(),t.TgZ(33,"a",22),t.NdJ("click",function(){return a.playAudio("complete")}),t._UZ(34,"ion-icon",23),t._uU(35," New Game"),t.qZA(),t.TgZ(36,"a",24),t.NdJ("click",function(){return a.showStatistics()}),t._UZ(37,"ion-icon",25),t._uU(38," Statistics"),t.qZA(),t.TgZ(39,"a",26),t._UZ(40,"ion-icon",27),t._uU(41," Share"),t.qZA(),t.TgZ(42,"a",28),t._UZ(43,"ion-icon",29),t._uU(44," Exit Game"),t.qZA()()(),t.TgZ(45,"ion-modal",30),t.YNc(46,k,51,9,"ng-template"),t.qZA()),2&e&&(t.Q6J("fullscreen",!0),t.xp6(10),t.Oqu(t.lcZ(11,7,a.balance)),t.xp6(35),t.Q6J("showBackdrop",!1)("animated",!0)("keyboardClose",!1)("mode","ios")("isOpen",a.showStatsModal))},dependencies:[r.W2,r.gu,r.ki,g.H9],styles:[".background[_ngcontent-%COMP%]{background-color:#1f1838;background-image:linear-gradient(45deg,rgb(45,37,79) 25%,transparent 25%,transparent 75%,rgb(45,37,79) 75%,rgb(45,37,79)),linear-gradient(45deg,rgb(45,37,79) 25%,transparent 25%,transparent 75%,rgb(45,37,79) 75%,rgb(45,37,79));min-height:100vh}.questions[_ngcontent-%COMP%]{display:flex;height:250px;background-color:#0f0935;flex-direction:column;justify-content:center;text-align:center;border:4px solid #fff;border-radius:10px;margin:0 10px}.questions[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]{width:25%;margin:18px auto}.questions.stats[_ngcontent-%COMP%]{margin-top:20px;height:initial;justify-content:flex-start;color:#fff;align-items:start;padding:15px 25px;font-weight:700;font-size:18px}.questions.stats[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin:7px 0;color:#fb045a;font-family:youre_goneregular;font-weight:400}.questions.stats[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:10px;color:#fff}.stats-header[_ngcontent-%COMP%]{color:#fff;font-family:super_mario_256regular;text-align:center;font-size:30px;padding:20px 0}.ready-text[_ngcontent-%COMP%]{text-align:center;color:#fff;font-family:youre_goneregular}.icon-balance[_ngcontent-%COMP%]{margin-right:8px;font-weight:700;font-size:20px;font-family:prismaregular}.stars[_ngcontent-%COMP%]{margin:0;color:#fb045a}.face[_ngcontent-%COMP%]{width:81px;height:105px;background-image:url(face.3824fdd34b0e9165.png);margin:20px auto}.face.scared[_ngcontent-%COMP%]{background-position-x:-299px;background-position-y:-109px}.question-title[_ngcontent-%COMP%]{text-align:center;font-size:20px;color:#0f0935;font-family:super_mario_256regular;background-color:#fff;display:inline-block;width:70%;margin:10px auto;border-radius:10px;border:1px solid #fff;padding:7px}.question-header[_ngcontent-%COMP%]{text-align:center;font-size:20px;color:#fff;font-weight:700;margin-bottom:10px;font-family:super_mario_256regular}.question-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{border:2px solid #fff;padding:3px 10px;border-radius:5px;background-color:#080011;font-family:super_mario_256regular}.balances[_ngcontent-%COMP%]{color:#fff;text-align:center;padding:10px 0;font-family:prismaregular;display:flex;justify-content:space-around}.trivia-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-right:10px}"]}),o})()}];let b=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[l.Bz.forChild(_),l.Bz]}),o})(),y=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[g.ez,h.u5,r.Pc,b]}),o})()}}]);