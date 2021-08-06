$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("demo.feature");
formatter.feature({
  "line": 1,
  "name": "German Computers Page",
  "description": "",
  "id": "german-computers-page",
  "keyword": "Feature"
});
formatter.before({
  "duration": 339000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "main page is opened",
  "keyword": "Given "
});
formatter.match({
  "location": "HomepageSteps.thePageWithUrlIsOpened()"
});
formatter.result({
  "duration": 10593254100,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "Check navigation buttons",
  "description": "",
  "id": "german-computers-page;check-navigation-buttons",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@Input"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "check that the following links are shown",
  "rows": [
    {
      "cells": [
        "Contact",
        "Compare(0)",
        "LogIn"
      ],
      "line": 9
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageSteps.checkThatTheFollowingLinksAreShown(DataTable)"
});
formatter.result({
  "duration": 397535700,
  "status": "passed"
});
formatter.after({
  "duration": 160300,
  "status": "passed"
});
formatter.before({
  "duration": 105000,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "main page is opened",
  "keyword": "Given "
});
formatter.match({
  "location": "HomepageSteps.thePageWithUrlIsOpened()"
});
formatter.result({
  "duration": 1021828000,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Check categories",
  "description": "",
  "id": "german-computers-page;check-categories",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@Input"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "check that the following categories are shown",
  "rows": [
    {
      "cells": [
        "Telefona"
      ],
      "line": 14
    },
    {
      "cells": [
        "Tableta"
      ],
      "line": 15
    },
    {
      "cells": [
        "Laptope"
      ],
      "line": 16
    },
    {
      "cells": [
        "Kompjutera"
      ],
      "line": 17
    },
    {
      "cells": [
        "Monitore\u0026Projektore"
      ],
      "line": 18
    },
    {
      "cells": [
        "Periferike"
      ],
      "line": 19
    },
    {
      "cells": [
        "Hardware"
      ],
      "line": 20
    },
    {
      "cells": [
        "Printer\u0026POS"
      ],
      "line": 21
    },
    {
      "cells": [
        "Networking"
      ],
      "line": 22
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "HomepageSteps.checkThatTheFollowingCategoriesAreShown(DataTable)"
});
formatter.result({
  "duration": 825977800,
  "status": "passed"
});
formatter.after({
  "duration": 103700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 25,
  "name": "Register user",
  "description": "",
  "id": "german-computers-page;register-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@Input"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "we click \u0027Log in\u0027 button from home page",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "we click \u0027Register\u0027 button from login page",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "we type \u0027\u003cfirstName\u003e\u0027 in the \u0027First Name\u0027 register input field",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "we type \u0027\u003clastName\u003e\u0027 in the \u0027Last Name\u0027 register input field",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "we type \u0027\u003cemail\u003e\u0027 in the \u0027Email\u0027 register input field",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "we type \u0027Greisi123\u0027 in the \u0027Password\u0027 register input field",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "we type \u0027Greisi123\u0027 in the \u0027Confirm Password\u0027 register input field",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "we click \u0027Accept policy\u0027 in the register page",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "we click \u0027Register\u0027 in the register page",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "check if registration is successful",
  "keyword": "Then "
});
formatter.examples({
  "line": 36,
  "name": "",
  "description": "",
  "id": "german-computers-page;register-user;",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "email"
      ],
      "line": 37,
      "id": "german-computers-page;register-user;;1"
    },
    {
      "cells": [
        "Greisi",
        "Kertuka",
        "ioansad@gmail.com"
      ],
      "line": 38,
      "id": "german-computers-page;register-user;;2"
    },
    {
      "cells": [
        "Robert",
        "Lewandowski",
        "efdja@gmail.com"
      ],
      "line": 39,
      "id": "german-computers-page;register-user;;3"
    },
    {
      "cells": [
        "Cristiano",
        "Ronaldo",
        "earsadv@gmail.com"
      ],
      "line": 40,
      "id": "german-computers-page;register-user;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 159500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "main page is opened",
  "keyword": "Given "
});
formatter.match({
  "location": "HomepageSteps.thePageWithUrlIsOpened()"
});
formatter.result({
  "duration": 928609500,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Register user",
  "description": "",
  "id": "german-computers-page;register-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@Input"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "we click \u0027Log in\u0027 button from home page",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "we click \u0027Register\u0027 button from login page",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "we type \u0027Greisi\u0027 in the \u0027First Name\u0027 register input field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "we type \u0027Kertuka\u0027 in the \u0027Last Name\u0027 register input field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "we type \u0027ioansad@gmail.com\u0027 in the \u0027Email\u0027 register input field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "we type \u0027Greisi123\u0027 in the \u0027Password\u0027 register input field",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "we type \u0027Greisi123\u0027 in the \u0027Confirm Password\u0027 register input field",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "we click \u0027Accept policy\u0027 in the register page",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "we click \u0027Register\u0027 in the register page",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "check if registration is successful",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Log in",
      "offset": 10
    }
  ],
  "location": "HomepageSteps.clickButtonFromHomepage(String)"
});
formatter.result({
  "duration": 1124589000,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.weClickLogInButtonFromLoginPage()"
});
formatter.result({
  "duration": 836600400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Greisi",
      "offset": 9
    },
    {
      "val": "First Name",
      "offset": 25
    }
  ],
  "location": "HomepageSteps.typeInRegisterInputField(String,String)"
});
formatter.result({
  "duration": 66027500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kertuka",
      "offset": 9
    },
    {
      "val": "Last Name",
      "offset": 26
    }
  ],
  "location": "HomepageSteps.typeInRegisterInputField(String,String)"
});
formatter.result({
  "duration": 47368700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ioansad@gmail.com",
      "offset": 9
    },
    {
      "val": "Email",
      "offset": 36
    }
  ],
  "location": "HomepageSteps.typeInRegisterInputField(String,String)"
});
formatter.result({
  "duration": 59829700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Greisi123",
      "offset": 9
    },
    {
      "val": "Password",
      "offset": 28
    }
  ],
  "location": "HomepageSteps.typeInRegisterInputField(String,String)"
});
formatter.result({
  "duration": 39682100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Greisi123",
      "offset": 9
    },
    {
      "val": "Confirm Password",
      "offset": 28
    }
  ],
  "location": "HomepageSteps.typeInRegisterInputField(String,String)"
});
formatter.result({
  "duration": 40423600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Accept policy",
      "offset": 10
    }
  ],
  "location": "HomepageSteps.acceptTerms(String)"
});
formatter.result({
  "duration": 339077800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 10
    }
  ],
  "location": "HomepageSteps.acceptTerms(String)"
});
formatter.result({
  "duration": 294091000,
  "status": "passed"
});
formatter.match({
  "location": "HomepageSteps.checkIfRegistrationIsSuccessful()"
});
formatter.result({
  "duration": 1573130900,
  "error_message": "org.openqa.selenium.WebDriverException: Failed to decode response from marionette\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-8ILM9KA\u0027, ip: \u0027192.168.74.61\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.11\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 89.0.2, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20210622155641, moz:geckodriverVersion: 0.27.0, moz:headless: false, moz:processID: 6996, moz:profile: C:\\Users\\kertu\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: a0488654-2c89-4781-adc9-36782a6e9200\n*** Element info: {Using\u003dxpath, value\u003d//div[@class\u003d\u0027alert alert-success fade in\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat seleniumtest.page.RegisterPage.checkRegistrationSuccess(RegisterPage.java:94)\r\n\tat seleniumtest.steps.HomepageSteps.checkIfRegistrationIsSuccessful(HomepageSteps.java:122)\r\n\tat ✽.Then check if registration is successful(demo.feature:35)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 158700,
  "status": "passed"
});
formatter.before({
  "duration": 127600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "main page is opened",
  "keyword": "Given "
});
formatter.match({
  "location": "HomepageSteps.thePageWithUrlIsOpened()"
});
formatter.result({
  "duration": 12022700,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Tried to run command without establishing a connection\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-8ILM9KA\u0027, ip: \u0027192.168.74.61\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.11\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 89.0.2, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20210622155641, moz:geckodriverVersion: 0.27.0, moz:headless: false, moz:processID: 6996, moz:profile: C:\\Users\\kertu\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: a0488654-2c89-4781-adc9-36782a6e9200\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteNavigation.to(RemoteWebDriver.java:857)\r\n\tat seleniumtest.page.HomePage.navigateToHomePage(HomePage.java:31)\r\n\tat seleniumtest.steps.HomepageSteps.thePageWithUrlIsOpened(HomepageSteps.java:48)\r\n\tat ✽.Given main page is opened(demo.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 39,
  "name": "Register user",
  "description": "",
  "id": "german-computers-page;register-user;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@Input"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "we click \u0027Log in\u0027 button from home page",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "we click \u0027Register\u0027 button from login page",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "we type \u0027Robert\u0027 in the \u0027First Name\u0027 register input field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "we type \u0027Lewandowski\u0027 in the \u0027Last Name\u0027 register input field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "we type \u0027efdja@gmail.com\u0027 in the \u0027Email\u0027 register input field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "we type \u0027Greisi123\u0027 in the \u0027Password\u0027 register input field",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "we type \u0027Greisi123\u0027 in the \u0027Confirm Password\u0027 register input field",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "we click \u0027Accept policy\u0027 in the register page",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "we click \u0027Register\u0027 in the register page",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "check if registration is successful",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Log in",
      "offset": 10
    }
  ],
  "location": "HomepageSteps.clickButtonFromHomepage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomepageSteps.weClickLogInButtonFromLoginPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Robert",
      "offset": 9
    },
    {
      "val": "First Name",
      "offset": 25
    }
  ],
  "location": "HomepageSteps.typeInRegisterInputField(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Lewandowski",
      "offset": 9
    },
    {
      "val": "Last Name",
      "offset": 30
    }
  ],
  "location": "HomepageSteps.typeInRegisterInputField(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "efdja@gmail.com",
      "offset": 9
    },
    {
      "val": "Email",
      "offset": 34
    }
  ],
  "location": "HomepageSteps.typeInRegisterInputField(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Greisi123",
      "offset": 9
    },
    {
      "val": "Password",
      "offset": 28
    }
  ],
  "location": "HomepageSteps.typeInRegisterInputField(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Greisi123",
      "offset": 9
    },
    {
      "val": "Confirm Password",
      "offset": 28
    }
  ],
  "location": "HomepageSteps.typeInRegisterInputField(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Accept policy",
      "offset": 10
    }
  ],
  "location": "HomepageSteps.acceptTerms(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 10
    }
  ],
  "location": "HomepageSteps.acceptTerms(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomepageSteps.checkIfRegistrationIsSuccessful()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 101400,
  "status": "passed"
});
formatter.before({
  "duration": 108500,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "main page is opened",
  "keyword": "Given "
});
formatter.match({
  "location": "HomepageSteps.thePageWithUrlIsOpened()"
});
formatter.result({
  "duration": 5465900,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Tried to run command without establishing a connection\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-8ILM9KA\u0027, ip: \u0027192.168.74.61\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.11\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 89.0.2, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20210622155641, moz:geckodriverVersion: 0.27.0, moz:headless: false, moz:processID: 6996, moz:profile: C:\\Users\\kertu\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: a0488654-2c89-4781-adc9-36782a6e9200\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteNavigation.to(RemoteWebDriver.java:857)\r\n\tat seleniumtest.page.HomePage.navigateToHomePage(HomePage.java:31)\r\n\tat seleniumtest.steps.HomepageSteps.thePageWithUrlIsOpened(HomepageSteps.java:48)\r\n\tat ✽.Given main page is opened(demo.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 40,
  "name": "Register user",
  "description": "",
  "id": "german-computers-page;register-user;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@Input"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "we click \u0027Log in\u0027 button from home page",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "we click \u0027Register\u0027 button from login page",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "we type \u0027Cristiano\u0027 in the \u0027First Name\u0027 register input field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "we type \u0027Ronaldo\u0027 in the \u0027Last Name\u0027 register input field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "we type \u0027earsadv@gmail.com\u0027 in the \u0027Email\u0027 register input field",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "we type \u0027Greisi123\u0027 in the \u0027Password\u0027 register input field",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "we type \u0027Greisi123\u0027 in the \u0027Confirm Password\u0027 register input field",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "we click \u0027Accept policy\u0027 in the register page",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "we click \u0027Register\u0027 in the register page",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "check if registration is successful",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Log in",
      "offset": 10
    }
  ],
  "location": "HomepageSteps.clickButtonFromHomepage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomepageSteps.weClickLogInButtonFromLoginPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Cristiano",
      "offset": 9
    },
    {
      "val": "First Name",
      "offset": 28
    }
  ],
  "location": "HomepageSteps.typeInRegisterInputField(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Ronaldo",
      "offset": 9
    },
    {
      "val": "Last Name",
      "offset": 26
    }
  ],
  "location": "HomepageSteps.typeInRegisterInputField(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "earsadv@gmail.com",
      "offset": 9
    },
    {
      "val": "Email",
      "offset": 36
    }
  ],
  "location": "HomepageSteps.typeInRegisterInputField(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Greisi123",
      "offset": 9
    },
    {
      "val": "Password",
      "offset": 28
    }
  ],
  "location": "HomepageSteps.typeInRegisterInputField(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Greisi123",
      "offset": 9
    },
    {
      "val": "Confirm Password",
      "offset": 28
    }
  ],
  "location": "HomepageSteps.typeInRegisterInputField(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Accept policy",
      "offset": 10
    }
  ],
  "location": "HomepageSteps.acceptTerms(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 10
    }
  ],
  "location": "HomepageSteps.acceptTerms(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomepageSteps.checkIfRegistrationIsSuccessful()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 92200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 43,
  "name": "Log in as user",
  "description": "",
  "id": "german-computers-page;log-in-as-user",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 42,
      "name": "@Input"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "we click \u0027Log in\u0027 button from home page",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "we type \u0027\u003cemail\u003e\u0027 in the \u0027Email\u0027 login input field",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "we type \u0027Greisi123\u0027 in the \u0027Password\u0027 login input field",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "we click \u0027Log in\u0027 button from login page",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "check if the login is successful",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "click logout in the Logged In page",
  "keyword": "And "
});
formatter.examples({
  "line": 50,
  "name": "",
  "description": "",
  "id": "german-computers-page;log-in-as-user;",
  "rows": [
    {
      "cells": [
        "email"
      ],
      "line": 51,
      "id": "german-computers-page;log-in-as-user;;1"
    },
    {
      "cells": [
        "ioansad@gmail.com"
      ],
      "line": 52,
      "id": "german-computers-page;log-in-as-user;;2"
    },
    {
      "cells": [
        "efdja@gmail.com"
      ],
      "line": 53,
      "id": "german-computers-page;log-in-as-user;;3"
    },
    {
      "cells": [
        "earsadv@gmail.com"
      ],
      "line": 54,
      "id": "german-computers-page;log-in-as-user;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 106600,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "main page is opened",
  "keyword": "Given "
});
formatter.match({
  "location": "HomepageSteps.thePageWithUrlIsOpened()"
});
formatter.result({
  "duration": 20236100,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Tried to run command without establishing a connection\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-8ILM9KA\u0027, ip: \u0027192.168.74.61\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.11\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 89.0.2, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20210622155641, moz:geckodriverVersion: 0.27.0, moz:headless: false, moz:processID: 6996, moz:profile: C:\\Users\\kertu\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: a0488654-2c89-4781-adc9-36782a6e9200\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteNavigation.to(RemoteWebDriver.java:857)\r\n\tat seleniumtest.page.HomePage.navigateToHomePage(HomePage.java:31)\r\n\tat seleniumtest.steps.HomepageSteps.thePageWithUrlIsOpened(HomepageSteps.java:48)\r\n\tat ✽.Given main page is opened(demo.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 52,
  "name": "Log in as user",
  "description": "",
  "id": "german-computers-page;log-in-as-user;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 42,
      "name": "@Input"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "we click \u0027Log in\u0027 button from home page",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "we type \u0027ioansad@gmail.com\u0027 in the \u0027Email\u0027 login input field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "we type \u0027Greisi123\u0027 in the \u0027Password\u0027 login input field",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "we click \u0027Log in\u0027 button from login page",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "check if the login is successful",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "click logout in the Logged In page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Log in",
      "offset": 10
    }
  ],
  "location": "HomepageSteps.clickButtonFromHomepage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ioansad@gmail.com",
      "offset": 9
    },
    {
      "val": "Email",
      "offset": 36
    }
  ],
  "location": "HomepageSteps.typeInLoginInputField(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Greisi123",
      "offset": 9
    },
    {
      "val": "Password",
      "offset": 28
    }
  ],
  "location": "HomepageSteps.typeInLoginInputField(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomepageSteps.login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomepageSteps.succesfulLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomepageSteps.logout()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 95700,
  "status": "passed"
});
formatter.before({
  "duration": 136100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "main page is opened",
  "keyword": "Given "
});
formatter.match({
  "location": "HomepageSteps.thePageWithUrlIsOpened()"
});
formatter.result({
  "duration": 8377400,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Tried to run command without establishing a connection\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-8ILM9KA\u0027, ip: \u0027192.168.74.61\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.11\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 89.0.2, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20210622155641, moz:geckodriverVersion: 0.27.0, moz:headless: false, moz:processID: 6996, moz:profile: C:\\Users\\kertu\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: a0488654-2c89-4781-adc9-36782a6e9200\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteNavigation.to(RemoteWebDriver.java:857)\r\n\tat seleniumtest.page.HomePage.navigateToHomePage(HomePage.java:31)\r\n\tat seleniumtest.steps.HomepageSteps.thePageWithUrlIsOpened(HomepageSteps.java:48)\r\n\tat ✽.Given main page is opened(demo.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 53,
  "name": "Log in as user",
  "description": "",
  "id": "german-computers-page;log-in-as-user;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 42,
      "name": "@Input"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "we click \u0027Log in\u0027 button from home page",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "we type \u0027efdja@gmail.com\u0027 in the \u0027Email\u0027 login input field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "we type \u0027Greisi123\u0027 in the \u0027Password\u0027 login input field",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "we click \u0027Log in\u0027 button from login page",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "check if the login is successful",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "click logout in the Logged In page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Log in",
      "offset": 10
    }
  ],
  "location": "HomepageSteps.clickButtonFromHomepage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "efdja@gmail.com",
      "offset": 9
    },
    {
      "val": "Email",
      "offset": 34
    }
  ],
  "location": "HomepageSteps.typeInLoginInputField(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Greisi123",
      "offset": 9
    },
    {
      "val": "Password",
      "offset": 28
    }
  ],
  "location": "HomepageSteps.typeInLoginInputField(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomepageSteps.login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomepageSteps.succesfulLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomepageSteps.logout()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 114400,
  "status": "passed"
});
formatter.before({
  "duration": 174900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "main page is opened",
  "keyword": "Given "
});
formatter.match({
  "location": "HomepageSteps.thePageWithUrlIsOpened()"
});
formatter.result({
  "duration": 19070700,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Tried to run command without establishing a connection\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-8ILM9KA\u0027, ip: \u0027192.168.74.61\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.11\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 89.0.2, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20210622155641, moz:geckodriverVersion: 0.27.0, moz:headless: false, moz:processID: 6996, moz:profile: C:\\Users\\kertu\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: a0488654-2c89-4781-adc9-36782a6e9200\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteNavigation.to(RemoteWebDriver.java:857)\r\n\tat seleniumtest.page.HomePage.navigateToHomePage(HomePage.java:31)\r\n\tat seleniumtest.steps.HomepageSteps.thePageWithUrlIsOpened(HomepageSteps.java:48)\r\n\tat ✽.Given main page is opened(demo.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 54,
  "name": "Log in as user",
  "description": "",
  "id": "german-computers-page;log-in-as-user;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 42,
      "name": "@Input"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "we click \u0027Log in\u0027 button from home page",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "we type \u0027earsadv@gmail.com\u0027 in the \u0027Email\u0027 login input field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "we type \u0027Greisi123\u0027 in the \u0027Password\u0027 login input field",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "we click \u0027Log in\u0027 button from login page",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "check if the login is successful",
  "keyword": "Then "
});
formatter.step({
  "line": 49,
  "name": "click logout in the Logged In page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Log in",
      "offset": 10
    }
  ],
  "location": "HomepageSteps.clickButtonFromHomepage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "earsadv@gmail.com",
      "offset": 9
    },
    {
      "val": "Email",
      "offset": 36
    }
  ],
  "location": "HomepageSteps.typeInLoginInputField(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Greisi123",
      "offset": 9
    },
    {
      "val": "Password",
      "offset": 28
    }
  ],
  "location": "HomepageSteps.typeInLoginInputField(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomepageSteps.login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomepageSteps.succesfulLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomepageSteps.logout()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 84000,
  "status": "passed"
});
formatter.before({
  "duration": 122400,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "main page is opened",
  "keyword": "Given "
});
formatter.match({
  "location": "HomepageSteps.thePageWithUrlIsOpened()"
});
formatter.result({
  "duration": 11792800,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Tried to run command without establishing a connection\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-8ILM9KA\u0027, ip: \u0027192.168.74.61\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.11\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 89.0.2, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20210622155641, moz:geckodriverVersion: 0.27.0, moz:headless: false, moz:processID: 6996, moz:profile: C:\\Users\\kertu\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: a0488654-2c89-4781-adc9-36782a6e9200\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteNavigation.to(RemoteWebDriver.java:857)\r\n\tat seleniumtest.page.HomePage.navigateToHomePage(HomePage.java:31)\r\n\tat seleniumtest.steps.HomepageSteps.thePageWithUrlIsOpened(HomepageSteps.java:48)\r\n\tat ✽.Given main page is opened(demo.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 57,
  "name": "Check login data",
  "description": "",
  "id": "german-computers-page;check-login-data",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 56,
      "name": "@Input"
    }
  ]
});
formatter.step({
  "line": 58,
  "name": "we click \u0027Log in\u0027 button from home page",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "we type \u0027ioansad@gmail.com\u0027 in the \u0027Email\u0027 login input field",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "we type \u0027Greisi123\u0027 in the \u0027Password\u0027 login input field",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "we click \u0027Log in\u0027 button from login page",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "we check the registration data",
  "rows": [
    {
      "cells": [
        "Greisi"
      ],
      "line": 63
    },
    {
      "cells": [
        "Kertuka"
      ],
      "line": 64
    },
    {
      "cells": [
        "ioansad@gmail.com"
      ],
      "line": 65
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 66,
  "name": "click logout in the Logged In page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Log in",
      "offset": 10
    }
  ],
  "location": "HomepageSteps.clickButtonFromHomepage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ioansad@gmail.com",
      "offset": 9
    },
    {
      "val": "Email",
      "offset": 36
    }
  ],
  "location": "HomepageSteps.typeInLoginInputField(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Greisi123",
      "offset": 9
    },
    {
      "val": "Password",
      "offset": 28
    }
  ],
  "location": "HomepageSteps.typeInLoginInputField(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomepageSteps.login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomepageSteps.checkRegistrationData(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomepageSteps.logout()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 91700,
  "status": "passed"
});
formatter.before({
  "duration": 111200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "main page is opened",
  "keyword": "Given "
});
formatter.match({
  "location": "HomepageSteps.thePageWithUrlIsOpened()"
});
formatter.result({
  "duration": 21005100,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Tried to run command without establishing a connection\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-8ILM9KA\u0027, ip: \u0027192.168.74.61\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.11\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 89.0.2, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20210622155641, moz:geckodriverVersion: 0.27.0, moz:headless: false, moz:processID: 6996, moz:profile: C:\\Users\\kertu\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: a0488654-2c89-4781-adc9-36782a6e9200\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteNavigation.to(RemoteWebDriver.java:857)\r\n\tat seleniumtest.page.HomePage.navigateToHomePage(HomePage.java:31)\r\n\tat seleniumtest.steps.HomepageSteps.thePageWithUrlIsOpened(HomepageSteps.java:48)\r\n\tat ✽.Given main page is opened(demo.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 69,
  "name": "Change login data",
  "description": "",
  "id": "german-computers-page;change-login-data",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 68,
      "name": "@Input"
    }
  ]
});
formatter.step({
  "line": 70,
  "name": "we click \u0027Log in\u0027 button from home page",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "we type \u0027ioansad@gmail.com\u0027 in the \u0027Email\u0027 login input field",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "we type \u0027Greisi123\u0027 in the \u0027Password\u0027 login input field",
  "keyword": "And "
});
formatter.step({
  "line": 73,
  "name": "we click \u0027Log in\u0027 button from login page",
  "keyword": "And "
});
formatter.step({
  "line": 74,
  "name": "we change the registration data",
  "rows": [
    {
      "cells": [
        "Wout"
      ],
      "line": 75
    },
    {
      "cells": [
        "Weghorst"
      ],
      "line": 76
    },
    {
      "cells": [
        "ioansad@gmail.com"
      ],
      "line": 77
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 78,
  "name": "we check the registration data",
  "rows": [
    {
      "cells": [
        "Wout"
      ],
      "line": 79
    },
    {
      "cells": [
        "Weghorst"
      ],
      "line": 80
    },
    {
      "cells": [
        "ioansad@gmail.com"
      ],
      "line": 81
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 82,
  "name": "click logout in the Logged In page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Log in",
      "offset": 10
    }
  ],
  "location": "HomepageSteps.clickButtonFromHomepage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "ioansad@gmail.com",
      "offset": 9
    },
    {
      "val": "Email",
      "offset": 36
    }
  ],
  "location": "HomepageSteps.typeInLoginInputField(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Greisi123",
      "offset": 9
    },
    {
      "val": "Password",
      "offset": 28
    }
  ],
  "location": "HomepageSteps.typeInLoginInputField(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomepageSteps.login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomepageSteps.changeRegistrationData(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomepageSteps.checkRegistrationData(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomepageSteps.logout()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 95600,
  "status": "passed"
});
formatter.before({
  "duration": 1310700,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "main page is opened",
  "keyword": "Given "
});
formatter.match({
  "location": "HomepageSteps.thePageWithUrlIsOpened()"
});
formatter.result({
  "duration": 24983200,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Tried to run command without establishing a connection\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-8ILM9KA\u0027, ip: \u0027192.168.74.61\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.11\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 89.0.2, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20210622155641, moz:geckodriverVersion: 0.27.0, moz:headless: false, moz:processID: 6996, moz:profile: C:\\Users\\kertu\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: a0488654-2c89-4781-adc9-36782a6e9200\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteNavigation.to(RemoteWebDriver.java:857)\r\n\tat seleniumtest.page.HomePage.navigateToHomePage(HomePage.java:31)\r\n\tat seleniumtest.steps.HomepageSteps.thePageWithUrlIsOpened(HomepageSteps.java:48)\r\n\tat ✽.Given main page is opened(demo.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 85,
  "name": "Check shopping cart items",
  "description": "",
  "id": "german-computers-page;check-shopping-cart-items",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 84,
      "name": "@Input"
    }
  ]
});
formatter.step({
  "line": 86,
  "name": "we hover at the \u0027Telefona\u0027 category in homepage",
  "keyword": "And "
});
formatter.step({
  "line": 87,
  "name": "we select Xiaomi subcategory in homepage",
  "keyword": "And "
});
formatter.step({
  "line": 88,
  "name": "we add elements to Cart",
  "rows": [
    {
      "cells": [
        "1",
        "2"
      ],
      "line": 89
    }
  ],
  "keyword": "* "
});
formatter.step({
  "line": 90,
  "name": "we check shopping Cart Counter",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Telefona",
      "offset": 17
    }
  ],
  "location": "HomepageSteps.homepageHover(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomepageSteps.click()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomepageSteps.addToCart(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomepageSteps.checkShoppingCartCounter()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 104300,
  "status": "passed"
});
formatter.before({
  "duration": 134900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "main page is opened",
  "keyword": "Given "
});
formatter.match({
  "location": "HomepageSteps.thePageWithUrlIsOpened()"
});
formatter.result({
  "duration": 10310500,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Tried to run command without establishing a connection\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-8ILM9KA\u0027, ip: \u0027192.168.74.61\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.11\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 89.0.2, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20210622155641, moz:geckodriverVersion: 0.27.0, moz:headless: false, moz:processID: 6996, moz:profile: C:\\Users\\kertu\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: a0488654-2c89-4781-adc9-36782a6e9200\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteNavigation.to(RemoteWebDriver.java:857)\r\n\tat seleniumtest.page.HomePage.navigateToHomePage(HomePage.java:31)\r\n\tat seleniumtest.steps.HomepageSteps.thePageWithUrlIsOpened(HomepageSteps.java:48)\r\n\tat ✽.Given main page is opened(demo.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 93,
  "name": "Check Shopping Cart Buttons",
  "description": "",
  "id": "german-computers-page;check-shopping-cart-buttons",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 92,
      "name": "@Input"
    }
  ]
});
formatter.step({
  "line": 94,
  "name": "we hover at the \u0027Telefona\u0027 category in homepage",
  "keyword": "And "
});
formatter.step({
  "line": 95,
  "name": "we select Xiaomi subcategory in homepage",
  "keyword": "And "
});
formatter.step({
  "line": 96,
  "name": "we add elements to Cart",
  "rows": [
    {
      "cells": [
        "1",
        "2"
      ],
      "line": 97
    }
  ],
  "keyword": "* "
});
formatter.step({
  "line": 98,
  "name": "we hover to shoppingCartButton",
  "keyword": "And "
});
formatter.step({
  "line": 99,
  "name": "we check shopping Cart buttons",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Telefona",
      "offset": 17
    }
  ],
  "location": "HomepageSteps.homepageHover(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomepageSteps.click()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomepageSteps.addToCart(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomepageSteps.hoverToShoppingCartButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomepageSteps.checkShoppingCartButtons()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 104900,
  "status": "passed"
});
formatter.before({
  "duration": 102200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "main page is opened",
  "keyword": "Given "
});
formatter.match({
  "location": "HomepageSteps.thePageWithUrlIsOpened()"
});
formatter.result({
  "duration": 22547900,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Tried to run command without establishing a connection\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-8ILM9KA\u0027, ip: \u0027192.168.74.61\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.11\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 89.0.2, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20210622155641, moz:geckodriverVersion: 0.27.0, moz:headless: false, moz:processID: 6996, moz:profile: C:\\Users\\kertu\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: a0488654-2c89-4781-adc9-36782a6e9200\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteNavigation.to(RemoteWebDriver.java:857)\r\n\tat seleniumtest.page.HomePage.navigateToHomePage(HomePage.java:31)\r\n\tat seleniumtest.steps.HomepageSteps.thePageWithUrlIsOpened(HomepageSteps.java:48)\r\n\tat ✽.Given main page is opened(demo.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 102,
  "name": "Check Shopping Cart Price",
  "description": "",
  "id": "german-computers-page;check-shopping-cart-price",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 101,
      "name": "@Input"
    }
  ]
});
formatter.step({
  "line": 103,
  "name": "we hover at the \u0027Telefona\u0027 category in homepage",
  "keyword": "And "
});
formatter.step({
  "line": 104,
  "name": "we select Xiaomi subcategory in homepage",
  "keyword": "And "
});
formatter.step({
  "line": 105,
  "name": "we add elements to Cart",
  "rows": [
    {
      "cells": [
        "1",
        "2"
      ],
      "line": 106
    }
  ],
  "keyword": "* "
});
formatter.step({
  "line": 107,
  "name": "we hover to shoppingCartButton",
  "keyword": "And "
});
formatter.step({
  "line": 108,
  "name": "we click shopping Cart button after hover",
  "keyword": "And "
});
formatter.step({
  "line": 109,
  "name": "we check shopping card total price",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Telefona",
      "offset": 17
    }
  ],
  "location": "HomepageSteps.homepageHover(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomepageSteps.click()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomepageSteps.addToCart(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomepageSteps.hoverToShoppingCartButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomepageSteps.clickShoppingCartAfterHover()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomepageSteps.weCheckShoppingCardTotalPrice()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 159100,
  "status": "passed"
});
formatter.before({
  "duration": 4937800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "main page is opened",
  "keyword": "Given "
});
formatter.match({
  "location": "HomepageSteps.thePageWithUrlIsOpened()"
});
formatter.result({
  "duration": 12387500,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Tried to run command without establishing a connection\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-8ILM9KA\u0027, ip: \u0027192.168.74.61\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.11\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 89.0.2, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20210622155641, moz:geckodriverVersion: 0.27.0, moz:headless: false, moz:processID: 6996, moz:profile: C:\\Users\\kertu\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: a0488654-2c89-4781-adc9-36782a6e9200\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteNavigation.to(RemoteWebDriver.java:857)\r\n\tat seleniumtest.page.HomePage.navigateToHomePage(HomePage.java:31)\r\n\tat seleniumtest.steps.HomepageSteps.thePageWithUrlIsOpened(HomepageSteps.java:48)\r\n\tat ✽.Given main page is opened(demo.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 112,
  "name": "Try Shopping Cart Update button",
  "description": "",
  "id": "german-computers-page;try-shopping-cart-update-button",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 111,
      "name": "@Input"
    }
  ]
});
formatter.step({
  "line": 113,
  "name": "we hover at the \u0027Telefona\u0027 category in homepage",
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "we select Xiaomi subcategory in homepage",
  "keyword": "And "
});
formatter.step({
  "line": 115,
  "name": "we add elements to Cart",
  "rows": [
    {
      "cells": [
        "1",
        "2"
      ],
      "line": 116
    }
  ],
  "keyword": "* "
});
formatter.step({
  "line": 117,
  "name": "we hover to shoppingCartButton",
  "keyword": "And "
});
formatter.step({
  "line": 118,
  "name": "we click shopping Cart button after hover",
  "keyword": "And "
});
formatter.step({
  "line": 119,
  "name": "we \u0027increment\u0027 the quantity of first element",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Telefona",
      "offset": 17
    }
  ],
  "location": "HomepageSteps.homepageHover(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomepageSteps.click()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomepageSteps.addToCart(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomepageSteps.hoverToShoppingCartButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomepageSteps.clickShoppingCartAfterHover()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "increment",
      "offset": 4
    }
  ],
  "location": "HomepageSteps.weIncrementTheQuantityOfFirstElement(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 88700,
  "status": "passed"
});
formatter.before({
  "duration": 136900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "main page is opened",
  "keyword": "Given "
});
formatter.match({
  "location": "HomepageSteps.thePageWithUrlIsOpened()"
});
formatter.result({
  "duration": 13851100,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Tried to run command without establishing a connection\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-8ILM9KA\u0027, ip: \u0027192.168.74.61\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.11\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 89.0.2, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20210622155641, moz:geckodriverVersion: 0.27.0, moz:headless: false, moz:processID: 6996, moz:profile: C:\\Users\\kertu\\AppData\\Loca..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: a0488654-2c89-4781-adc9-36782a6e9200\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteNavigation.to(RemoteWebDriver.java:857)\r\n\tat seleniumtest.page.HomePage.navigateToHomePage(HomePage.java:31)\r\n\tat seleniumtest.steps.HomepageSteps.thePageWithUrlIsOpened(HomepageSteps.java:48)\r\n\tat ✽.Given main page is opened(demo.feature:4)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 122,
  "name": "Send feedback",
  "description": "",
  "id": "german-computers-page;send-feedback",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 121,
      "name": "@Input"
    }
  ]
});
formatter.step({
  "line": 123,
  "name": "we click \u0027Dyqani\u0027 button from home page",
  "keyword": "And "
});
formatter.step({
  "line": 124,
  "name": "we click First Item",
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "we click Reviews",
  "keyword": "And "
});
formatter.step({
  "line": 126,
  "name": "We choose 5 stars",
  "keyword": "* "
});
formatter.step({
  "line": 127,
  "name": "we type \u0027Greisi\u0027 in the \u0027Name\u0027 product input field",
  "keyword": "* "
});
formatter.step({
  "line": 128,
  "name": "we type \u0027Super produkt\u0027 in the \u0027Comment\u0027 product input field",
  "keyword": "* "
});
formatter.step({
  "line": 129,
  "name": "we click \u0027Send review\u0027 button from product page",
  "keyword": "* "
});
formatter.step({
  "line": 130,
  "name": "we check if review was successful",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Dyqani",
      "offset": 10
    }
  ],
  "location": "HomepageSteps.clickButtonFromHomepage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomepageSteps.weClickFirstItem()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomepageSteps.weClickReviews()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomepageSteps.fiveStars()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Greisi",
      "offset": 9
    },
    {
      "val": "Name",
      "offset": 25
    }
  ],
  "location": "HomepageSteps.sendKeysToReview(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Super produkt",
      "offset": 9
    },
    {
      "val": "Comment",
      "offset": 32
    }
  ],
  "location": "HomepageSteps.sendKeysToReview(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomepageSteps.sendReview()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HomepageSteps.weCheckIfReviewWasSuccessful()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 93700,
  "status": "passed"
});
});