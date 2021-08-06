package seleniumtest.steps;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;
import org.mozilla.javascript.regexp.RegExpImpl;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import seleniumtest.page.*;
import seleniumtest.utils.DriverUtils;
import seleniumtest.utils.WebDriverFactory;

import java.sql.Driver;
import java.util.ArrayList;
import java.util.List;

public class HomepageSteps {
    private static HomePage homepage;
    private static LoginPage loginPage;
    private static RegisterPage registerPage;
    private static LoggedInPage loggedInPage;
    private static XiaomiPhones xiaomiPhones;
    private static ShoppingCard shoppingCard;
    private static ChangeInformation changeInformation;
    private static Shop shop;
    private static Product product;
    private static WebDriverWait wait = new WebDriverWait(WebDriverFactory.getInstance().getDriver(), 3);

    public HomepageSteps() {
        homepage = new HomePage();
        loginPage=new LoginPage();
        registerPage=new RegisterPage();
        loggedInPage=new LoggedInPage();
        xiaomiPhones=new XiaomiPhones();
        shoppingCard=new ShoppingCard();
        changeInformation=new ChangeInformation();
        shop = new Shop();
        product=new Product();
    }

    @Given("^main page is opened$")
    public void thePageWithUrlIsOpened() {
        homepage.navigateToHomePage();
    }

    @Then("^check that the following links are shown$")
    public void checkThatTheFollowingLinksAreShown(DataTable dataTable) {
        List<String> expectedResults = dataTable.asList(String.class);

        List<String> actualResults = new ArrayList<>();

        wait.until(ExpectedConditions.visibilityOfAllElements(homepage.navbarLinks));
        List<WebElement> list = homepage.navbarLinks;

        for (int i = 0; i < list.size(); i++) {
            actualResults.add(list.get(i).getText().replace(" ",""));
        }

        System.out.println(actualResults);
        System.out.println(expectedResults);

        for (int i = 0; i < expectedResults.size(); i++) {
            Assert.assertEquals(expectedResults.get(i), actualResults.get(i));
        }

        Assert.assertEquals(expectedResults.size(), actualResults.size());

    }

    @Then("^check that the following categories are shown$")
    public void checkThatTheFollowingCategoriesAreShown(DataTable dataTable) {
        List<String> expectedResults = dataTable.asList(String.class);

        List<String> actualResults = new ArrayList<>();

        wait.until(ExpectedConditions.visibilityOfAllElements(homepage.navbarLinks));
        List<WebElement> list = homepage.categories;

        for (int i = 0; i < list.size(); i++) {
            actualResults.add(list.get(i).getText().replace(" ",""));
        }

        System.out.println(actualResults);
        System.out.println(expectedResults);

        for (int i = 0; i < expectedResults.size(); i++) {
            Assert.assertEquals(expectedResults.get(i), actualResults.get(i));
        }

        Assert.assertEquals(expectedResults.size(), actualResults.size()-2);

    }

    @When("^we click '(.+?)' button from home page$")
    public void clickButtonFromHomepage(String s)  {
        homepage.clickButton(s);
    }


    @And("^we click 'Register' button from login page$")
    public void weClickLogInButtonFromLoginPage() {
        loginPage.registerButton.click();
    }

    @And("^we type '(.+?)' in the '(.+?)' register input field$")
    public void typeInRegisterInputField(String keys, String input) {
        registerPage.sendKeystoInputForm(keys, input);
    }

    @And("^we type '(.+?)' in the '(.+?)' login input field$")
    public void typeInLoginInputField(String keys, String input) {
        registerPage.sendKeystoInputForm(keys, input);
    }

    @Then ("^check if registration is successful$")
    public void checkIfRegistrationIsSuccessful(){
        registerPage.checkRegistrationSuccess();
    }

    @And ("^we click '(.+?)' in the register page$")
    public void acceptTerms(String s){
        registerPage.clickButton(s);
    }

    @When("^we click 'Log in' button from login page$")
    public void login(){
        loginPage.loginButton.click();
    }

    @And ("^click logout in the Logged In page$")
    public void logout(){
        loggedInPage.logoutButton.click();
    }

    @Then("^check if the login is successful$")
    public void succesfulLogin(){
        loginPage.checkLoginSuccess();
    }

    @Then("^we check the registration data$")
    public void checkRegistrationData(DataTable dataTable){
        List<String> expectedResults = dataTable.asList(String.class);
        List<String> actualResults=loggedInPage.returnData();

        System.out.println(actualResults);
        System.out.println(expectedResults);

        for (int i = 0; i < expectedResults.size(); i++) {
            Assert.assertEquals(expectedResults.get(i), actualResults.get(i));
        }

        Assert.assertEquals(expectedResults.size(), actualResults.size());

    }

    @Then("^we change the registration data$")
    public void changeRegistrationData(DataTable dataTable){
        List<String> list = dataTable.asList(String.class);
        loggedInPage.changeData();
        changeInformation.changeData(list);
    }

    @And("^we hover at the '(.+?)' category in homepage$")
    public void homepageHover(String s){
        homepage.hover(s);
    }

    @And("^we select Xiaomi subcategory in homepage$")
    public void click() {
        homepage.clickSubCategory("Xiaomi");
    }

    @And("^we check shopping Cart Counter$")
    public void checkShoppingCartCounter(){
        xiaomiPhones.checkCounter();
    }

    @And ("^we add elements to Cart$")
    public void addToCart(DataTable dataTable){
        List<String> array = dataTable.asList(String.class);
        for(int i=0;i<array.size();i++){
            int n=Integer.parseInt(array.get(i).replace(" ",""));
            xiaomiPhones.addToCart(n);
        }
    }

    @And("^we hover to shoppingCartButton$")
    public void hoverToShoppingCartButton(){
        xiaomiPhones.hoverToShoppingCart();
    }

    @And("^we check shopping Cart buttons$")
    public void checkShoppingCartButtons(){
        xiaomiPhones.checkButtons();
    }

    @And("^we click shopping Cart button after hover$")
    public void clickShoppingCartAfterHover(){
        xiaomiPhones.ViewShoppingCart();
    }

    @Then("^we check shopping card total price$")
    public void weCheckShoppingCardTotalPrice() {
        shoppingCard.checkPrices();
    }

    @And("^we '(.+?)' the quantity of first element$")
    public void weIncrementTheQuantityOfFirstElement(String s) {
        shoppingCard.UpdateQuantity(s);
    }

    @And("^we click First Item$")
    public void weClickFirstItem() {
        shop.clickFirstItem();
    }

    @And("^we click Reviews$")
    public void weClickReviews() {
        product.reviewsButton.click();
    }

    @And("^we type '(.+?)' in the '(.+?)' product input field$")
    public void sendKeysToReview(String keys, String input){
        product.sendKeystoInputForm(keys, input);
    }

    @And("^We choose 5 stars$")
    public void fiveStars(){
        product.fiveStarReview.click();
    }

    @And("^we click 'Send review' button from product page$")
    public void sendReview(){
        product.addReviewButton.click();
    }

    @Then("^we check if review was successful$")
    public void weCheckIfReviewWasSuccessful() {
        product.reviewSuccess();
    }

    @Then("^we close browser$")
    public void weCloseBrowser() {
        DriverUtils.getDriver().quit();
    }
}
