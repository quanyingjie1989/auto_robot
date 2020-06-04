import { Selector, t } from 'testcafe';

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
  }

  async faceBookPushMsg (msg) {
    var Num = await this.intRandom();
    const comentInto = await Selector('span').withExactText("라이브 방송").parent(3)
    const comentInto2 = await Selector('h2').withExactText("게시물 만들기").parent(2)
    await t.click(comentInto.find('div').withText("님, 무슨 생각을 하고 계신가요?")).wait(5000)
      .click(comentInto2.find('div').withText("님, 무슨 생각을 하고 계신가요?"))
      .pressKey(msg).wait(1000 * Num)
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
    var Num = await this.intRandom();
    await t.click(Selector('div').withExactText("게시")).wait(1000 * Num)
  }

  async faceBookPushMsgCheck (msg1) {
    var Num = await this.intRandom();
    await t.expect(Selector('p').withExactText(msg1).exists).ok().wait(1000 * Num)
  }

  async faceBookRun (msg1, msg2, msg3, msg4, msg5) {
    await t.navigateTo("https://www.facebook.com/login");
    await this.faceBookPushMsg(msg1)
    await this.faceBookPushButton()
    // await t.wait(5000)
    await t.wait(3000 + 1000 * await this.intRandom())

    await t.navigateTo("https://www.facebook.com/login");
    //await this.faceBookLogin(ID, Pw);
    await this.faceBookPushMsg(msg2)
    await this.faceBookPushButton()
    //await t.wait(5000)
    await t.wait(3000 + 1000 * await this.intRandom())

    await t.navigateTo("https://www.facebook.com/login");
    //await this.faceBookLogin(ID, Pw);
    await this.faceBookPushMsg(msg3)
    await this.faceBookPushButton()
    //await t.wait(5000)
    await t.wait(3000 + 1000 * await this.intRandom())

    await t.navigateTo("https://www.facebook.com/login");
    //await this.faceBookLogin(ID, Pw);
    await this.faceBookPushMsg(msg4)
    await this.faceBookPushButton()
    //await t.wait(5000)
    await t.wait(3000 + 1000 * await this.intRandom())

    await t.navigateTo("https://www.facebook.com/login");
    //await this.faceBookLogin(ID, Pw);
    await this.faceBookPushMsg(msg5)
    await this.faceBookPushButton()
    //await t.wait(5000)
    await t.wait(3000 + 1000 * await this.intRandom())
    await this.faceBookRun(msg2, msg3, msg4, msg5, msg1)
  }

  async intRandom () {
    var Num = Math.floor(Math.random() * 9 + 1);
    return Num;
  }
}