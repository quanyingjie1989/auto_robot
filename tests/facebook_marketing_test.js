import faceBookPage from '../pages/faceBook/facebook-page.js';
const facebookpage = new faceBookPage();
import commonAction from '../pages/utils/common-action.js';
const commonaction = new commonAction();
const common = require('../pages/utils/global.js')

fixture`facebook_marketing`
  .beforeEach(async t => {
    await t.navigateTo("https://www.facebook.com/login");
    t.ctx.Msg_1 = await commonaction.strRandom(10);
    t.ctx.Msg_2 = await commonaction.strRandom(20);
    t.ctx.Msg_3 = await commonaction.strRandom(30);
    t.ctx.Msg_4 = await commonaction.strRandom(40);
    t.ctx.Msg_5 = await commonaction.strRandom(50);
    t.ctx.Msg1 = await commonaction.strReplace(t.ctx.Msg_1);
    t.ctx.Msg2 = await commonaction.strReplace(t.ctx.Msg_2);
    t.ctx.Msg3 = await commonaction.strReplace(t.ctx.Msg_3);
    t.ctx.Msg4 = await commonaction.strReplace(t.ctx.Msg_4);
    t.ctx.Msg5 = await commonaction.strReplace(t.ctx.Msg_5);
  })

  .afterEach(async t => {

  })

test('facebook1', async t => {
  console.log("발송 내용 1번 : " + t.ctx.Msg_1)
  await facebookpage.faceBookLogin(global_Id_1, global_pW_1);
  await facebookpage.faceBookPushMsg(t.ctx.Msg1);
  await facebookpage.faceBookPushButton();
  await facebookpage.faceBookPushMsgCheck(t.ctx.Msg_1);
  // await t.wait(60 * 1000 * 35)
})

test('facebook2', async t => {
  console.log("발송 내용 2번 : " + t.ctx.Msg_2)
  await facebookpage.faceBookLogin(global_Id_2, global_pW_2);
  await facebookpage.faceBookPushMsg(t.ctx.Msg2);
  await facebookpage.faceBookPushButton();
  await facebookpage.faceBookPushMsgCheck(t.ctx.Msg_2);
  //await t.wait(60 * 1000 * 35)
})


test('facebook3', async t => {
  console.log("발송 내용 3번 : " + t.ctx.Msg_3)
  await facebookpage.faceBookLogin(global_Id_3, global_pW_3);
  await facebookpage.faceBookPushMsg(t.ctx.Msg3);
  await facebookpage.faceBookPushButton();
  await facebookpage.faceBookPushMsgCheck(t.ctx.Msg_3);
  //await t.wait(60 * 1000 * 35)
})

test('facebook4', async t => {
  console.log("발송 내용 4번 : " + t.ctx.Msg_4)
  await facebookpage.faceBookLogin(global_Id_4, global_pW_4);
  await facebookpage.faceBookPushMsg(t.ctx.Msg4);
  await facebookpage.faceBookPushButton();
  await facebookpage.faceBookPushMsgCheck(t.ctx.Msg_4);
  //await t.wait(60 * 1000 * 35)
})

test('facebook5', async t => {
  console.log("발송 내용 5번 : " + t.ctx.Msg_5)
  await facebookpage.faceBookLogin(global_Id_5, global_pW_5);
  await facebookpage.faceBookPushMsg(t.ctx.Msg5);
  await facebookpage.faceBookPushButton();
  await facebookpage.faceBookPushMsgCheck(t.ctx.Msg_5);
  //await t.wait(60 * 1000 * 35)
})


test('facebook6', async t => {
  console.log("발송 내용 1번 : " + t.ctx.Msg_1)
  await facebookpage.faceBookLogin(global_Id_6, global_pW_6);
  await facebookpage.faceBookPushMsg(t.ctx.Msg1);
  await facebookpage.faceBookPushButton();
  await facebookpage.faceBookPushMsgCheck(t.ctx.Msg_1);
  // await t.wait(60 * 1000 * 35)
})

test('facebook7', async t => {
  console.log("발송 내용 2번 : " + t.ctx.Msg_2)
  await facebookpage.faceBookLogin(global_Id_7, global_pW_7);
  await facebookpage.faceBookPushMsg(t.ctx.Msg2);
  await facebookpage.faceBookPushButton();
  await facebookpage.faceBookPushMsgCheck(t.ctx.Msg_2);
  //await t.wait(60 * 1000 * 35)
})


test('facebook8', async t => {
  console.log("발송 내용 3번 : " + t.ctx.Msg_3)
  await facebookpage.faceBookLogin(global_Id_8, global_pW_8);
  await facebookpage.faceBookPushMsg(t.ctx.Msg3);
  await facebookpage.faceBookPushButton();
  await facebookpage.faceBookPushMsgCheck(t.ctx.Msg_3);
  //await t.wait(60 * 1000 * 35)
})

test('facebook9', async t => {
  console.log("발송 내용 4번 : " + t.ctx.Msg_4)
  await facebookpage.faceBookLogin(global_Id_9, global_pW_9);
  await facebookpage.faceBookPushMsg(t.ctx.Msg4);
  await facebookpage.faceBookPushButton();
  await facebookpage.faceBookPushMsgCheck(t.ctx.Msg_4);
  //await t.wait(60 * 1000 * 35)
})

test('facebook10', async t => {
  console.log("발송 내용 5번 : " + t.ctx.Msg_5)
  await facebookpage.faceBookLogin(global_Id_10, global_pW_10);
  await facebookpage.faceBookPushMsg(t.ctx.Msg5);
  await facebookpage.faceBookPushButton();
  await facebookpage.faceBookPushMsgCheck(t.ctx.Msg_5);
  //await t.wait(60 * 1000 * 35)
})
