import { Selector, t } from 'testcafe';

export default class twitterPage {

  async twitterLogin (twitterId, twitterPw) {
    await t
      .typeText(Selector('input[name="session[username_or_email]"]'), twitterId)
      .typeText(Selector('input[name="session[password]"]'), twitterPw)
      .click(Selector('span').withExactText("ログイン"))
      .wait(3000)
  }

  async twitterPushMsg (msg) {
    await t
      .doubleClick(Selector('.public-DraftEditorPlaceholder-inner').withExactText("What’s happening?"))
      .pressKey(msg).wait(3000)
  }

  async twitterImgUpload (Img) {

  }

  async twitterPushButton () {
    await t.click(Selector('span').withExactText("Tweet").nth(1)).wait(3000)
  }

  async twitterPushMsgCheck (msg1) {

  }



}