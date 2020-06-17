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

test('twitter1', async t => {
  console.log("Msg No.1 : " + twitter_Msg_1)
  await twitterpage.twitterLogin(twitter_Id_1, twitter_pW_1);
  const twitterCheckId = await twitterpage.twitterCheckId(twitter_Id_1)
  if (twitterCheckId) { return; }
  await twitterpage.twitterPushMsg(t.ctx.Msg1);
  await twitterpage.twitterPushButton();
})

test('twitter2', async t => {
  console.log("Msg No.2 : " + twitter_Msg_2)
  await twitterpage.twitterLogin(twitter_Id_2, twitter_pW_2);
  const twitterCheckId = await twitterpage.twitterCheckId(twitter_Id_2)
  if (twitterCheckId) { return; }
  await twitterpage.twitterPushMsg(t.ctx.Msg1);
  await twitterpage.twitterPushButton();
})

test('twitter3', async t => {
  console.log("Msg No.3 : " + twitter_Msg_3)
  await twitterpage.twitterLogin(twitter_Id_3, twitter_pW_3);
  const twitterCheckId = await twitterpage.twitterCheckId(twitter_Id_3)
  if (twitterCheckId) { return; }
  await twitterpage.twitterPushMsg(t.ctx.Msg1);
  await twitterpage.twitterPushButton();
})

test('twitter4', async t => {
  console.log("Msg No.3 : " + twitter_Msg_4)
  await twitterpage.twitterLogin(twitter_Id_4, twitter_pW_4);
  const twitterCheckId = await twitterpage.twitterCheckId(twitter_Id_4)
  if (twitterCheckId) { return; }
  await twitterpage.twitterPushMsg(t.ctx.Msg1);
  await twitterpage.twitterPushButton();
})

test('twitter5', async t => {
  console.log("Msg No.3 : " + twitter_Msg_5)
  await twitterpage.twitterLogin(twitter_Id_5, twitter_pW_5);
  const twitterCheckId = await twitterpage.twitterCheckId(twitter_Id_5)
  if (twitterCheckId) { return; }
  await twitterpage.twitterPushMsg(t.ctx.Msg1);
  await twitterpage.twitterPushButton();
})

test('twitter6', async t => {
  console.log("Msg No.3 : " + twitter_Msg_6)
  await twitterpage.twitterLogin(twitter_Id_6, twitter_pW_6);
  const twitterCheckId = await twitterpage.twitterCheckId(twitter_Id_6)
  if (twitterCheckId) { return; }
  await twitterpage.twitterPushMsg(t.ctx.Msg1);
  await twitterpage.twitterPushButton();
})

test('twitter7', async t => {
  console.log("Msg No.3 : " + twitter_Msg_7)
  await twitterpage.twitterLogin(twitter_Id_7, twitter_pW_7);
  const twitterCheckId = await twitterpage.twitterCheckId(twitter_Id_7)
  if (twitterCheckId) { return; }
  await twitterpage.twitterPushMsg(t.ctx.Msg1);
  await twitterpage.twitterPushButton();
})

test('twitter8', async t => {
  console.log("Msg No.3 : " + twitter_Msg_8)
  await twitterpage.twitterLogin(twitter_Id_8, twitter_pW_8);
  const twitterCheckId = await twitterpage.twitterCheckId(twitter_Id_8)
  if (twitterCheckId) { return; }
  await twitterpage.twitterPushMsg(t.ctx.Msg1);
  await twitterpage.twitterPushButton();
})

test('twitter9', async t => {
  console.log("Msg No.3 : " + twitter_Msg_9)
  await twitterpage.twitterLogin(twitter_Id_9, twitter_pW_9);
  const twitterCheckId = await twitterpage.twitterCheckId(twitter_Id_9)
  if (twitterCheckId) { return; }
  await twitterpage.twitterPushMsg(t.ctx.Msg1);
  await twitterpage.twitterPushButton();
})

test('twitter10', async t => {
  console.log("Msg No.3 : " + twitter_Msg_10)
  await twitterpage.twitterLogin(twitter_Id_10, twitter_pW_10);
  const twitterCheckId = await twitterpage.twitterCheckId(twitter_Id_10)
  if (twitterCheckId) { return; }
  await twitterpage.twitterPushMsg(t.ctx.Msg1);
  await twitterpage.twitterPushButton();
})



