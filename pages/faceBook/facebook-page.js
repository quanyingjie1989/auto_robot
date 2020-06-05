import { Selector, t } from 'testcafe';
import commonAction from '../utils/common-action.js';
const commonaction = new commonAction();

export default class faceBookPage {

  async languageChoices (languageChoices) {
    await t.click(Selector('#pageFooter').find('a').withExactText(languageChoices))

  }

  async faceBookLogin (faceBookId, faceBookPw) {
    await t
      .typeText(Selector('#email'), faceBookId)
      .typeText(Selector('#pass'), faceBookPw)
      .click(Selector('#loginbutton'))
      .wait(5000)
    console.log("페이스북 로그인 성공했습니다")
  }

  async faceBookPushMsg (msg) {
    const comentInto = await Selector('span').withExactText("라이브 방송").parent(3)
    const comentInto2 = await Selector('h2').withExactText("게시물 만들기").parent(2)
    await t
      .click(comentInto.find('div').withText("님, 무슨 생각을 하고 계신가요?")).wait(5000)
      .doubleClick(comentInto2.find('div').withText("님, 무슨 생각을 하고 계신가요?"))
      .pressKey(msg)
    console.log("페이스북 내용 입력 했습니다")
  }

  async faceBookImgUpload (Img) {
    // const m = await Selector('span').withExactText("게시물에 추가").parent(2).find('img')
    // const s = await Selector('#toolbarLabel').nextSibling().find('.hu5pjgll bixrwtb6').nth(0)
    // await t
    //   .click(Selector('div[aria-label="사진/동영상"]').find('img'))
    //   .setFilesToUpload(Selector('div[aria-label="사진/동영상"]').find('hu5pjgll bixrwtb6'), [Img]).wait(3000)
    //await t.click(Selector('div').withExactText("사진/동영상"))

    await t.setFilesToUpload(Selector('div').withExactText("사진/동영상").parent().nextSibling(), Img)

  }

  async faceBookPushButton () {
    var Num = await commonaction.intRandom();
    await t.click(Selector('div').withExactText("게시")).wait(1000 * Num);
  }

  async faceBookPushMsgCheck (msg1) {
    var Num = await commonaction.intRandom();
    await t.expect(Selector('div').withExactText(msg1).exists).ok().wait(1000 * Num)
    console.log("페이스북 내용 발송 했습니다")
  }

  async faceBookRun (msg1, msg2, msg3, msg4, msg5) {
    await t.navigateTo("https://www.facebook.com/login");
    console.log("발송 내용 : " + msg1)
    await this.faceBookPushMsg(msg1)
    await this.faceBookPushButton()
    await t.wait(3000 + 1000 * await commonaction.intRandom())

    await t.navigateTo("https://www.facebook.com/login");
    console.log("발송 내용 : " + msg2)
    await this.faceBookPushMsg(msg2)
    await this.faceBookPushButton()
    await t.wait(3000 + 1000 * await commonaction.intRandom())

    await t.navigateTo("https://www.facebook.com/login");
    console.log("발송 내용 : " + msg3)
    await this.faceBookPushMsg(msg3)
    await this.faceBookPushButton()
    await t.wait(3000 + 1000 * await commonaction.intRandom())

    await t.navigateTo("https://www.facebook.com/login");
    console.log("발송 내용 : " + msg4)
    await this.faceBookPushMsg(msg4)
    await this.faceBookPushButton()
    await t.wait(3000 + 1000 * await commonaction.intRandom())

    await t.navigateTo("https://www.facebook.com/login");
    console.log("발송 내용 : " + msg5)
    await this.faceBookPushMsg(msg5)
    await this.faceBookPushButton()
    await t.wait(3000 + 1000 * await commonaction.intRandom())
    await this.faceBookRun(msg2, msg3, msg4, msg5, msg1)
  }
}