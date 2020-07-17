import BasePage from "./BasePage";

class registerPage extends BasePage{
    open(path) {
        return super.open('https://stage.localcoding.us/user/register');
        browser.pause(5000);
    }
}
export default new registerPage();