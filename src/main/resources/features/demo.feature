Feature: German Computers Page

  Background:
    Given main page is opened

  @Input
  Scenario: Check navigation buttons
    Then check that the following links are shown
      | Contact | Compare(0) | LogIn |

  @Input
  Scenario: Check categories
    Then check that the following categories are shown
      | Telefona            |
      | Tableta             |
      | Laptope             |
      | Kompjutera          |
      | Monitore&Projektore |
      | Periferike          |
      | Hardware            |
      | Printer&POS         |
      | Networking          |

  @Input
  Scenario Outline: Register user
    And we click 'Log in' button from home page
    And we click 'Register' button from login page
    And we type '<firstName>' in the 'First Name' register input field
    And we type '<lastName>' in the 'Last Name' register input field
    And we type '<email>' in the 'Email' register input field
    And we type 'Greisi123' in the 'Password' register input field
    And we type 'Greisi123' in the 'Confirm Password' register input field
    And we click 'Accept policy' in the register page
    And we click 'Register' in the register page
    Then check if registration is successful
    Examples:
      | firstName | lastName    | email             |
      | Greisi    | Kertuka     | ioansad@gmail.com |
      | Robert    | Lewandowski | efdja@gmail.com   |
      | Cristiano | Ronaldo     | earsadv@gmail.com |

  @Input
  Scenario Outline: Log in as user
    And we click 'Log in' button from home page
    And we type '<email>' in the 'Email' login input field
    And we type 'Greisi123' in the 'Password' login input field
    When we click 'Log in' button from login page
    Then check if the login is successful
    And click logout in the Logged In page
    Examples:
      | email             |
      | ioansad@gmail.com |
      | efdja@gmail.com   |
      | earsadv@gmail.com |

  @Input
  Scenario: Check login data
    And we click 'Log in' button from home page
    And we type 'ioansad@gmail.com' in the 'Email' login input field
    And we type 'Greisi123' in the 'Password' login input field
    And we click 'Log in' button from login page
    Then we check the registration data
      | Greisi            |
      | Kertuka           |
      | ioansad@gmail.com |
    And click logout in the Logged In page

  @Input
  Scenario: Change login data
    And we click 'Log in' button from home page
    And we type 'ioansad@gmail.com' in the 'Email' login input field
    And we type 'Greisi123' in the 'Password' login input field
    And we click 'Log in' button from login page
    Then we change the registration data
      | Wout              |
      | Weghorst          |
      | ioansad@gmail.com |
    And we check the registration data
      | Wout              |
      | Weghorst          |
      | ioansad@gmail.com |
    And click logout in the Logged In page

  @Input
  Scenario: Check shopping cart items
    And we hover at the 'Telefona' category in homepage
    And we select Xiaomi subcategory in homepage
    * we add elements to Cart
      | 1 | 2 |
    And we check shopping Cart Counter

  @Input
  Scenario: Check Shopping Cart Buttons
    And we hover at the 'Telefona' category in homepage
    And we select Xiaomi subcategory in homepage
    * we add elements to Cart
      | 1 | 2 |
    And we hover to shoppingCartButton
    And we check shopping Cart buttons

  @Input
  Scenario: Check Shopping Cart Price
    And we hover at the 'Telefona' category in homepage
    And we select Xiaomi subcategory in homepage
    * we add elements to Cart
      | 1 | 2 |
    And we hover to shoppingCartButton
    And we click shopping Cart button after hover
    Then we check shopping card total price

  @Input
  Scenario: Try Shopping Cart Update button
    And we hover at the 'Telefona' category in homepage
    And we select Xiaomi subcategory in homepage
    * we add elements to Cart
      | 1 | 2 |
    And we hover to shoppingCartButton
    And we click shopping Cart button after hover
    And we 'increment' the quantity of first element

  @Input
  Scenario: Send feedback
    And we click 'Dyqani' button from home page
    And we click First Item
    And we click Reviews
    * We choose 5 stars
    * we type 'Greisi' in the 'Name' product input field
    * we type 'Super produkt' in the 'Comment' product input field
    * we click 'Send review' button from product page
    Then we check if review was successful
