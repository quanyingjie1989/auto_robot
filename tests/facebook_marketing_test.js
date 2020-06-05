import faceBookPage from '../pages/faceBook/facebook-page.js';
const facebookpage = new faceBookPage();
import commonAction from '../pages/utils/common-action.js';
const commonaction = new commonAction();
const common = require('../pages/utils/facebook-global.js')

fixture`facebook_marketing`
  .beforeEach(async t => {
    await t.navigateTo("https://www.facebook.com/login");
    //t.ctx.Msg_1 = await commonaction.strRandom(10);
    t.ctx.Msg1 = await commonaction.strReplace(facebook_Msg_1);
    t.ctx.Msg2 = await commonaction.strReplace(facebook_Msg_2);
    t.ctx.Msg3 = await commonaction.strReplace(facebook_Msg_3);
    t.ctx.Msg4 = await commonaction.strReplace(facebook_Msg_4);
    t.ctx.Msg5 = await commonaction.strReplace(facebook_Msg_5);
    t.ctx.Msg6 = await commonaction.strReplace(facebook_Msg_6);
    t.ctx.Msg7 = await commonaction.strReplace(facebook_Msg_7);
    t.ctx.Msg8 = await commonaction.strReplace(facebook_Msg_8);
    t.ctx.Msg9 = await commonaction.strReplace(facebook_Msg_9);
    t.ctx.Msg10 = await commonaction.strReplace(facebook_Msg_10);
  })

  .afterEach(async t => {

  })

test('facebook1', async t => {
  console.log("발송 내용 1번 : " + facebook_Msg_1)
  await facebookpage.faceBookLogin(facebook_Id_1, facebook_pW_1);
  const faceBookCheckId = await facebookpage.faceBookCheckId(facebook_Id_1)
  if (faceBookCheckId) { return; }
  await facebookpage.faceBookPushMsg(t.ctx.Msg1);
  await facebookpage.faceBookPushButton();
  await facebookpage.faceBookPushMsgCheck(facebook_Msg_1);
  // await t.wait(60 * 1000 * 35)
})

test('facebook2', async t => {
  console.log("발송 내용 2번 : " + facebook_Msg_2)
  await facebookpage.faceBookLogin(facebook_Id_2, facebook_pW_2);
  const faceBookCheckId = await facebookpage.faceBookCheckId(facebook_Id_2)
  if (faceBookCheckId) { return; }
  await facebookpage.faceBookPushMsg(t.ctx.Msg2);
  await facebookpage.faceBookPushButton();
  await facebookpage.faceBookPushMsgCheck(facebook_Msg_2);
  //await t.wait(60 * 1000 * 35)
})


test('facebook3', async t => {
  console.log("발송 내용 3번 : " + facebook_Msg_3)
  await facebookpage.faceBookLogin(facebook_Id_3, facebook_pW_3);
  const faceBookCheckId = await facebookpage.faceBookCheckId(facebook_Id_3)
  if (faceBookCheckId) { return; }
  await facebookpage.faceBookPushMsg(t.ctx.Msg3);
  await facebookpage.faceBookPushButton();
  await facebookpage.faceBookPushMsgCheck(facebook_Msg_3);
  //await t.wait(60 * 1000 * 35)
})

test('facebook4', async t => {
  console.log("발송 내용 4번 : " + facebook_Msg_4)
  await facebookpage.faceBookLogin(facebook_Id_4, facebook_pW_4);
  const faceBookCheckId = await facebookpage.faceBookCheckId(facebook_Id_4)
  if (faceBookCheckId) { return; }
  await facebookpage.faceBookPushMsg(t.ctx.Msg4);
  await facebookpage.faceBookPushButton();
  await facebookpage.faceBookPushMsgCheck(facebook_Msg_4);
  //await t.wait(60 * 1000 * 35)
})

test('facebook5', async t => {
  console.log("발송 내용 5번 : " + facebook_Msg_5)
  await facebookpage.faceBookLogin(facebook_Id_5, facebook_pW_5);
  const faceBookCheckId = await facebookpage.faceBookCheckId(facebook_Id_5)
  if (faceBookCheckId) { return; }
  await facebookpage.faceBookPushMsg(t.ctx.Msg5);
  await facebookpage.faceBookPushButton();
  await facebookpage.faceBookPushMsgCheck(facebook_Msg_5);
  //await t.wait(60 * 1000 * 35)
})


test('facebook6', async t => {
  console.log("발송 내용 6번 : " + facebook_Msg_6)
  await facebookpage.faceBookLogin(facebook_Id_6, facebook_pW_6);
  const faceBookCheckId = await facebookpage.faceBookCheckId(facebook_Id_6)
  if (faceBookCheckId) { return; }
  await facebookpage.faceBookPushMsg(t.ctx.Msg6);
  await facebookpage.faceBookPushButton();
  await facebookpage.faceBookPushMsgCheck(facebook_Msg_6);
  // await t.wait(60 * 1000 * 35)
})

test('facebook7', async t => {
  console.log("발송 내용 7번 : " + facebook_Msg_7)
  await facebookpage.faceBookLogin(facebook_Id_7, facebook_pW_7);
  const faceBookCheckId = await facebookpage.faceBookCheckId(facebook_Id_7)
  if (faceBookCheckId) { return; }
  await facebookpage.faceBookPushMsg(t.ctx.Msg7);
  await facebookpage.faceBookPushButton();
  await facebookpage.faceBookPushMsgCheck(facebook_Msg_7);
  //await t.wait(60 * 1000 * 35)
})


test('facebook8', async t => {
  console.log("발송 내용 8번 : " + facebook_Msg_8)
  await facebookpage.faceBookLogin(facebook_Id_8, facebook_pW_8);
  const faceBookCheckId = await facebookpage.faceBookCheckId(facebook_Id_8)
  if (faceBookCheckId) { return; }
  await facebookpage.faceBookPushMsg(t.ctx.Msg8);
  await facebookpage.faceBookPushButton();
  await facebookpage.faceBookPushMsgCheck(facebook_Msg_8);
  //await t.wait(60 * 1000 * 35)
})

test('facebook9', async t => {
  console.log("발송 내용 9번 : " + facebook_Msg_9)
  await facebookpage.faceBookLogin(facebook_Id_9, facebook_pW_9);
  const faceBookCheckId = await facebookpage.faceBookCheckId(facebook_Id_9)
  if (faceBookCheckId) { return; }
  await facebookpage.faceBookPushMsg(t.ctx.Msg9);
  await facebookpage.faceBookPushButton();
  await facebookpage.faceBookPushMsgCheck(facebook_Msg_9);
  //await t.wait(60 * 1000 * 35)
})

test('facebook10', async t => {
  console.log("발송 내용 10번 : " + facebook_Msg_10)
  await facebookpage.faceBookLogin(facebook_Id_10, facebook_pW_10);
  const faceBookCheckId = await facebookpage.faceBookCheckId(facebook_Id_10)
  if (faceBookCheckId) { return; }
  await facebookpage.faceBookPushMsg(t.ctx.Msg10);
  await facebookpage.faceBookPushButton();
  await facebookpage.faceBookPushMsgCheck(facebook_Msg_10);
  //await t.wait(60 * 1000 * 35)
})
