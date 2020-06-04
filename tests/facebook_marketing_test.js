import faceBookPage from '../pages/faceBook/facebook-page.js';
const facebookpage = new faceBookPage();



fixture`facebook_marketing`
  .beforeEach(async t => {
    await t.navigateTo("https://www.facebook.com/login");
    await facebookpage.faceBookLogin("quan_yingjie@nhn-st.com", "quantaihao1-24");
    t.ctx.Msg1 = "수+정+완+료+하+였+습+니+다+" + await facebookpage.intRandom() + "+"
    t.ctx.Msg2 = "수+정+완+료+하+였+습+니+다+수+정+완+료+하+였+습+니+다+" + await facebookpage.intRandom() + "+"
    t.ctx.Msg3 = "수+정+완+료+하+였+습+니+다+정+완+료+하+였+습+니+다+" + await facebookpage.intRandom() + "+"
    t.ctx.Msg4 = "수+정+완+료+하+였+습+니+다+수+완+료+하+였+습+니+다+" + await facebookpage.intRandom() + "+"
    t.ctx.Msg5 = "수+정+완+료+하+였+습+니+다+수+정+완+하+였+습+니+다+" + await facebookpage.intRandom() + "+"
  })

  .afterEach(async t => {

  })

test('facebook1', async t => {
  //await facebookpage.faceBookRun(Msg1, Msg2, Msg3, Msg4, Msg5);
  // await facebookpage.faceBookImgUpload(Img);

  await facebookpage.faceBookPushMsg(t.ctx.Msg1);
  await facebookpage.faceBookPushButton();
  // await facebookpage.faceBookPushMsgCheck(Msg);
})

test('facebook2', async t => {
  //await facebookpage.faceBookRun(Msg1, Msg2, Msg3, Msg4, Msg5);
  // await facebookpage.faceBookImgUpload(Img);

  await facebookpage.faceBookPushMsg(t.ctx.Msg2);
  await facebookpage.faceBookPushButton();
  // await facebookpage.faceBookPushMsgCheck(Msg);
})


test('facebook3', async t => {
  //await facebookpage.faceBookRun(Msg1, Msg2, Msg3, Msg4, Msg5);
  // await facebookpage.faceBookImgUpload(Img);

  await facebookpage.faceBookPushMsg(t.ctx.Msg3);
  await facebookpage.faceBookPushButton();
  // await facebookpage.faceBookPushMsgCheck(Msg);
})

test('facebook4', async t => {
  //await facebookpage.faceBookRun(Msg1, Msg2, Msg3, Msg4, Msg5);
  // await facebookpage.faceBookImgUpload(Img);

  await facebookpage.faceBookPushMsg(t.ctx.Msg4);
  await facebookpage.faceBookPushButton();
  // await facebookpage.faceBookPushMsgCheck(Msg);
})

test('facebook4', async t => {
  //await facebookpage.faceBookRun(Msg1, Msg2, Msg3, Msg4, Msg5);
  // await facebookpage.faceBookImgUpload(Img);

  await facebookpage.faceBookPushMsg(t.ctx.Msg5);
  await facebookpage.faceBookPushButton();
  // await facebookpage.faceBookPushMsgCheck(Msg);
})