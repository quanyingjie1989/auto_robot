import twitterPage from '../pages/twitter/twitter-page.js';
const twitterpage = new twitterPage();
import commonAction from '../pages/utils/common-action.js';
const commonaction = new commonAction();
const common = require('../pages/utils/twitter-global.js')

fixture`twitter_marketing`

  .beforeEach(async t => {
    await t.navigateTo("https://twitter.com/login");
    //t.ctx.Msg_1 = await commonaction.strRandom(10);
    t.ctx.Msg1 = await commonaction.strReplace(twitter_Msg_1);
    t.ctx.Msg2 = await commonaction.strReplace(twitter_Msg_2);
    t.ctx.Msg3 = await commonaction.strReplace(twitter_Msg_3);
    t.ctx.Msg4 = await commonaction.strReplace(twitter_Msg_4);
    t.ctx.Msg5 = await commonaction.strReplace(twitter_Msg_5);
    t.ctx.Msg6 = await commonaction.strReplace(twitter_Msg_6);
    t.ctx.Msg7 = await commonaction.strReplace(twitter_Msg_7);
    t.ctx.Msg8 = await commonaction.strReplace(twitter_Msg_8);
    t.ctx.Msg9 = await commonaction.strReplace(twitter_Msg_9);
    t.ctx.Msg10 = await commonaction.strReplace(twitter_Msg_10);
  })

  .afterEach(async t => {

  })

test('twitter', async t => {
  console.log("발송 내용 1번 : " + twitter_Msg_1)
  await twitterpage.twitterLogin(twitter_Id_1, twitter_pW_1);
  await twitterpage.twitterPushMsg(t.ctx.Msg1);
  await twitterpage.twitterPushButton();
})



