import { Selector, t } from 'testcafe';

export default class twitterPage {

  async twitterLogin (twitterId, twitterPw) {
    await t
      .typeText(Selector('input[name="session[username_or_email]"]'), twitterId)
      .typeText(Selector('input[name="session[password]"]'), twitterPw)
      .click(Selector('span').withExactText("ログイン"))
      .wait(10 * 3000)
    console.log("트위터 로그인 성공했습니다")
  }

  async twitterPushMsg (msg) {
    await t
      .doubleClick(Selector('.public-DraftEditorPlaceholder-inner').withExactText("What’s happening?"))
      .pressKey(msg).wait(3000)
    console.log("트위터 내용 입력 했습니다")
  }

  async twitterImgUpload (Img) {

  }

  async twitterPushButton () {
    await t.click(Selector('span').withExactText("Tweet").nth(1)).wait(3000)
  }

  async twitterPushMsgCheck (msg1) {

  }

  async twitterCheckId (ID) {
    const boolean = await Selector('div').withExactText("We've temporarily limited some of your account features").exists
    if (boolean) {
      console.log("ID : " + ID + "   -> 계정이 비활성화되여 사용할수 없습니다 ")
      return true;
    }
    return false;
  }


}