$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/leads/leads.feature");
formatter.feature({
  "line": 2,
  "name": "Leads Creation",
  "description": "As a Test Engineer I want to test Leads Creation functionality.",
  "id": "leads-creation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Leads"
    }
  ]
});
formatter.before({
  "duration": 17717466500,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User should be on Home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on the Login page URL \"http://localhost:8888/index.php?\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter username as \"admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter password as \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I sould see application homepage",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8888/index.php?",
      "offset": 28
    }
  ],
  "location": "loginPageStepDefinitions.i_am_on_the_Login_page_URL(String)"
});
formatter.result({
  "duration": 18654954800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    }
  ],
  "location": "loginPageStepDefinitions.i_enter_username_as(String)"
});
formatter.result({
  "duration": 124749200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "loginPageStepDefinitions.i_enter_password_as(String)"
});
formatter.result({
  "duration": 185132500,
  "status": "passed"
});
formatter.match({
  "location": "loginPageStepDefinitions.click_on_login_button()"
});
formatter.result({
  "duration": 22685941600,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinitions.i_sould_see_application_homepage()"
});
formatter.result({
  "duration": 262289700,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Create Leads",
  "description": "",
  "id": "leads-creation;create-leads",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 12,
      "name": "@sanity"
    },
    {
      "line": 12,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I click on leads link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on leads plus button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select First Name title as \"Mr.\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter First Name \"auto_firstName\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter last name \"auto_lastName\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter Company name \"auto_company\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter Title \"auto_company\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select Lead Source \"Employee\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select Industry \"Banking\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter Annual Revenue \"100\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter No Of Employees \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter Secondary Email \"info.test@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter Street \"7535 Torrey Santa Fe Road\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter Postal Code \"92129\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter Country \"US\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter Description \"auto_Description\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter Phone \"9999999999\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter Mobile \"9999999999\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter Fax \"Fax details\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter Email \"info.test@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enetr Website \"auto_website\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select Lead Status \"Attempted to Contact\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I select Assigned To \"Administrator\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on Save button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I should see lead creation success message",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "I should verify leads information",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageStepDefinitions.i_click_on_leads_link()"
});
formatter.result({
  "duration": 19753182500,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageStepDefinitions.i_click_on_leads_plus_button()"
});
formatter.result({
  "duration": 3339942200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr.",
      "offset": 30
    }
  ],
  "location": "LeadsPageStepDefinitions.i_select_First_Name_title_as(String)"
});
formatter.result({
  "duration": 623134100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_firstName",
      "offset": 20
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_First_Name(String)"
});
formatter.result({
  "duration": 264949100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_lastName",
      "offset": 19
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_last_name(String)"
});
formatter.result({
  "duration": 165378700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_company",
      "offset": 22
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Company_name(String)"
});
formatter.result({
  "duration": 159227000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_company",
      "offset": 15
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Title(String)"
});
formatter.result({
  "duration": 120131800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Employee",
      "offset": 22
    }
  ],
  "location": "LeadsPageStepDefinitions.i_select_Lead_Source(String)"
});
formatter.result({
  "duration": 104961600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Banking",
      "offset": 19
    }
  ],
  "location": "LeadsPageStepDefinitions.i_select_Industry(String)"
});
formatter.result({
  "duration": 112921900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 24
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Annual_Revenue(String)"
});
formatter.result({
  "duration": 76885800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 25
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_No_Of_Employees(String)"
});
formatter.result({
  "duration": 78491200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "info.test@gmail.com",
      "offset": 25
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Secondary_Email(String)"
});
formatter.result({
  "duration": 213267000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7535 Torrey Santa Fe Road",
      "offset": 16
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Street(String)"
});
formatter.result({
  "duration": 131586500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "92129",
      "offset": 21
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Postal_Code(String)"
});
formatter.result({
  "duration": 82531900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "US",
      "offset": 17
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Country(String)"
});
formatter.result({
  "duration": 66140100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_Description",
      "offset": 21
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Description(String)"
});
formatter.result({
  "duration": 90613500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9999999999",
      "offset": 15
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Phone(String)"
});
formatter.result({
  "duration": 108990500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9999999999",
      "offset": 16
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Mobile(String)"
});
formatter.result({
  "duration": 115754600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fax details",
      "offset": 13
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Fax(String)"
});
formatter.result({
  "duration": 120354100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "info.test@gmail.com",
      "offset": 15
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Email(String)"
});
formatter.result({
  "duration": 196858500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_website",
      "offset": 17
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enetr_Website(String)"
});
formatter.result({
  "duration": 154527000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Attempted to Contact",
      "offset": 22
    }
  ],
  "location": "LeadsPageStepDefinitions.i_select_Lead_Status(String)"
});
formatter.result({
  "duration": 126563500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Administrator",
      "offset": 22
    }
  ],
  "location": "LeadsPageStepDefinitions.i_select_Assigned_To(String)"
});
formatter.result({
  "duration": 78078100,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageStepDefinitions.i_click_on_Save_button()"
});
formatter.result({
  "duration": 6733200500,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageStepDefinitions.i_should_see_lead_creation_success_message()"
});
formatter.result({
  "duration": 125137000,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageStepDefinitions.i_should_verify_leads_information()"
});
formatter.result({
  "duration": 207890200,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 1300592500,
  "status": "passed"
});
formatter.uri("features/leads/leadsWithParameters.feature");
formatter.feature({
  "line": 2,
  "name": "Leads Creation",
  "description": "As a Test Engineer I want to test Leads Creation functionality.",
  "id": "leads-creation",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@LeadsWithParameters"
    }
  ]
});
formatter.scenarioOutline({
  "line": 13,
  "name": "Create Leads",
  "description": "",
  "id": "leads-creation;create-leads",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@sanity"
    },
    {
      "line": 12,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I click on leads link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on leads plus button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select First Name title as \"\u003ctitle\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter First Name \"\u003cfirstName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter last name \"\u003clastName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter Company name \"\u003ccompanyName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter Title \"auto_company\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select Lead Source \"Employee\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select Industry \"Banking\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter Annual Revenue \"\u003cannualRevenue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter No Of Employees \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter Secondary Email \"info.test@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter Street \"7535 Torrey Santa Fe Road\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter Postal Code \"92129\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter Country \"\u003cCountry\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter Description \"auto_Description\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter Phone \"9999999999\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter Mobile \"9999999999\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter Fax \"Fax details\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter Email \"info.test@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enetr Website \"auto_website\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select Lead Status \"Attempted to Contact\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I select Assigned To \"Administrator\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on Save button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I should see lead creation success message",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "I should verify leads information",
  "keyword": "And "
});
formatter.examples({
  "line": 41,
  "name": "",
  "description": "",
  "id": "leads-creation;create-leads;",
  "rows": [
    {
      "cells": [
        "title",
        "firstName",
        "lastName",
        "companyName",
        "annualRevenue",
        "Country"
      ],
      "line": 42,
      "id": "leads-creation;create-leads;;1"
    },
    {
      "cells": [
        "Mr.",
        "auto_firstName1",
        "auto_lastName1",
        "companyName1",
        "1000",
        "US"
      ],
      "line": 43,
      "id": "leads-creation;create-leads;;2"
    },
    {
      "cells": [
        "Mr.",
        "auto_firstName2",
        "auto_lastName2",
        "companyName2",
        "2000",
        "US"
      ],
      "line": 44,
      "id": "leads-creation;create-leads;;3"
    },
    {
      "cells": [
        "Mr.",
        "auto_firstName3",
        "auto_lastName3",
        "companyName3",
        "3000",
        "US"
      ],
      "line": 45,
      "id": "leads-creation;create-leads;;4"
    },
    {
      "cells": [
        "Mr.",
        "auto_firstName3",
        "auto_lastName3",
        "companyName3",
        "3000",
        "US"
      ],
      "line": 46,
      "id": "leads-creation;create-leads;;5"
    },
    {
      "cells": [
        "Mr.",
        "auto_firstName3",
        "auto_lastName3",
        "companyName3",
        "200",
        "US"
      ],
      "line": 47,
      "id": "leads-creation;create-leads;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3942909200,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User should be on Home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on the Login page URL \"http://localhost:8888/index.php?\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter username as \"admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter password as \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I sould see application homepage",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8888/index.php?",
      "offset": 28
    }
  ],
  "location": "loginPageStepDefinitions.i_am_on_the_Login_page_URL(String)"
});
formatter.result({
  "duration": 2101764500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    }
  ],
  "location": "loginPageStepDefinitions.i_enter_username_as(String)"
});
formatter.result({
  "duration": 57062800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "loginPageStepDefinitions.i_enter_password_as(String)"
});
formatter.result({
  "duration": 74228500,
  "status": "passed"
});
formatter.match({
  "location": "loginPageStepDefinitions.click_on_login_button()"
});
formatter.result({
  "duration": 4150053900,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinitions.i_sould_see_application_homepage()"
});
formatter.result({
  "duration": 593046900,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Create Leads",
  "description": "",
  "id": "leads-creation;create-leads;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@LeadsWithParameters"
    },
    {
      "line": 12,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I click on leads link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on leads plus button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select First Name title as \"Mr.\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter First Name \"auto_firstName1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter last name \"auto_lastName1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter Company name \"companyName1\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter Title \"auto_company\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select Lead Source \"Employee\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select Industry \"Banking\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter Annual Revenue \"1000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter No Of Employees \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter Secondary Email \"info.test@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter Street \"7535 Torrey Santa Fe Road\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter Postal Code \"92129\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter Country \"US\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter Description \"auto_Description\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter Phone \"9999999999\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter Mobile \"9999999999\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter Fax \"Fax details\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter Email \"info.test@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enetr Website \"auto_website\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select Lead Status \"Attempted to Contact\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I select Assigned To \"Administrator\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on Save button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I should see lead creation success message",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "I should verify leads information",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageStepDefinitions.i_click_on_leads_link()"
});
formatter.result({
  "duration": 10311039700,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageStepDefinitions.i_click_on_leads_plus_button()"
});
formatter.result({
  "duration": 2416096000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr.",
      "offset": 30
    }
  ],
  "location": "LeadsPageStepDefinitions.i_select_First_Name_title_as(String)"
});
formatter.result({
  "duration": 404233600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_firstName1",
      "offset": 20
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_First_Name(String)"
});
formatter.result({
  "duration": 163817300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_lastName1",
      "offset": 19
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_last_name(String)"
});
formatter.result({
  "duration": 151605500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "companyName1",
      "offset": 22
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Company_name(String)"
});
formatter.result({
  "duration": 122083900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_company",
      "offset": 15
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Title(String)"
});
formatter.result({
  "duration": 134999400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Employee",
      "offset": 22
    }
  ],
  "location": "LeadsPageStepDefinitions.i_select_Lead_Source(String)"
});
formatter.result({
  "duration": 96427600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Banking",
      "offset": 19
    }
  ],
  "location": "LeadsPageStepDefinitions.i_select_Industry(String)"
});
formatter.result({
  "duration": 111145000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 24
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Annual_Revenue(String)"
});
formatter.result({
  "duration": 134893200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 25
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_No_Of_Employees(String)"
});
formatter.result({
  "duration": 63945200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "info.test@gmail.com",
      "offset": 25
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Secondary_Email(String)"
});
formatter.result({
  "duration": 200980600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7535 Torrey Santa Fe Road",
      "offset": 16
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Street(String)"
});
formatter.result({
  "duration": 121271700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "92129",
      "offset": 21
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Postal_Code(String)"
});
formatter.result({
  "duration": 112625500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "US",
      "offset": 17
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Country(String)"
});
formatter.result({
  "duration": 70548800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_Description",
      "offset": 21
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Description(String)"
});
formatter.result({
  "duration": 110179600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9999999999",
      "offset": 15
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Phone(String)"
});
formatter.result({
  "duration": 116103000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9999999999",
      "offset": 16
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Mobile(String)"
});
formatter.result({
  "duration": 117244500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fax details",
      "offset": 13
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Fax(String)"
});
formatter.result({
  "duration": 136964100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "info.test@gmail.com",
      "offset": 15
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Email(String)"
});
formatter.result({
  "duration": 169897900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_website",
      "offset": 17
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enetr_Website(String)"
});
formatter.result({
  "duration": 126460700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Attempted to Contact",
      "offset": 22
    }
  ],
  "location": "LeadsPageStepDefinitions.i_select_Lead_Status(String)"
});
formatter.result({
  "duration": 100699900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Administrator",
      "offset": 22
    }
  ],
  "location": "LeadsPageStepDefinitions.i_select_Assigned_To(String)"
});
formatter.result({
  "duration": 74268500,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageStepDefinitions.i_click_on_Save_button()"
});
formatter.result({
  "duration": 4771630900,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageStepDefinitions.i_should_see_lead_creation_success_message()"
});
formatter.result({
  "duration": 101995900,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageStepDefinitions.i_should_verify_leads_information()"
});
formatter.result({
  "duration": 161415100,
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 1438803000,
  "status": "passed"
});
formatter.before({
  "duration": 3228462500,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User should be on Home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on the Login page URL \"http://localhost:8888/index.php?\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter username as \"admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter password as \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I sould see application homepage",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8888/index.php?",
      "offset": 28
    }
  ],
  "location": "loginPageStepDefinitions.i_am_on_the_Login_page_URL(String)"
});
formatter.result({
  "duration": 2935906300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    }
  ],
  "location": "loginPageStepDefinitions.i_enter_username_as(String)"
});
formatter.result({
  "duration": 73265400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "loginPageStepDefinitions.i_enter_password_as(String)"
});
formatter.result({
  "duration": 100519900,
  "status": "passed"
});
formatter.match({
  "location": "loginPageStepDefinitions.click_on_login_button()"
});
formatter.result({
  "duration": 6033976600,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinitions.i_sould_see_application_homepage()"
});
formatter.result({
  "duration": 312434200,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Create Leads",
  "description": "",
  "id": "leads-creation;create-leads;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@LeadsWithParameters"
    },
    {
      "line": 12,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I click on leads link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on leads plus button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select First Name title as \"Mr.\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter First Name \"auto_firstName2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter last name \"auto_lastName2\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter Company name \"companyName2\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter Title \"auto_company\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select Lead Source \"Employee\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select Industry \"Banking\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter Annual Revenue \"2000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter No Of Employees \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter Secondary Email \"info.test@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter Street \"7535 Torrey Santa Fe Road\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter Postal Code \"92129\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter Country \"US\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter Description \"auto_Description\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter Phone \"9999999999\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter Mobile \"9999999999\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter Fax \"Fax details\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter Email \"info.test@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enetr Website \"auto_website\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select Lead Status \"Attempted to Contact\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I select Assigned To \"Administrator\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on Save button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I should see lead creation success message",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "I should verify leads information",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageStepDefinitions.i_click_on_leads_link()"
});
formatter.result({
  "duration": 11280012800,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageStepDefinitions.i_click_on_leads_plus_button()"
});
formatter.result({
  "duration": 2016014000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr.",
      "offset": 30
    }
  ],
  "location": "LeadsPageStepDefinitions.i_select_First_Name_title_as(String)"
});
formatter.result({
  "duration": 129658400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_firstName2",
      "offset": 20
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_First_Name(String)"
});
formatter.result({
  "duration": 155103600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_lastName2",
      "offset": 19
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_last_name(String)"
});
formatter.result({
  "duration": 155144000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "companyName2",
      "offset": 22
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Company_name(String)"
});
formatter.result({
  "duration": 144642000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_company",
      "offset": 15
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Title(String)"
});
formatter.result({
  "duration": 127679400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Employee",
      "offset": 22
    }
  ],
  "location": "LeadsPageStepDefinitions.i_select_Lead_Source(String)"
});
formatter.result({
  "duration": 101129800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Banking",
      "offset": 19
    }
  ],
  "location": "LeadsPageStepDefinitions.i_select_Industry(String)"
});
formatter.result({
  "duration": 101637900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000",
      "offset": 24
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Annual_Revenue(String)"
});
formatter.result({
  "duration": 88089200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 25
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_No_Of_Employees(String)"
});
formatter.result({
  "duration": 60129000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "info.test@gmail.com",
      "offset": 25
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Secondary_Email(String)"
});
formatter.result({
  "duration": 176234300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7535 Torrey Santa Fe Road",
      "offset": 16
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Street(String)"
});
formatter.result({
  "duration": 121834000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "92129",
      "offset": 21
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Postal_Code(String)"
});
formatter.result({
  "duration": 96469600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "US",
      "offset": 17
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Country(String)"
});
formatter.result({
  "duration": 67438500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_Description",
      "offset": 21
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Description(String)"
});
formatter.result({
  "duration": 107122400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9999999999",
      "offset": 15
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Phone(String)"
});
formatter.result({
  "duration": 120507000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9999999999",
      "offset": 16
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Mobile(String)"
});
formatter.result({
  "duration": 124206700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fax details",
      "offset": 13
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Fax(String)"
});
formatter.result({
  "duration": 122207700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "info.test@gmail.com",
      "offset": 15
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Email(String)"
});
formatter.result({
  "duration": 217746800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_website",
      "offset": 17
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enetr_Website(String)"
});
formatter.result({
  "duration": 124088400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Attempted to Contact",
      "offset": 22
    }
  ],
  "location": "LeadsPageStepDefinitions.i_select_Lead_Status(String)"
});
formatter.result({
  "duration": 101359900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Administrator",
      "offset": 22
    }
  ],
  "location": "LeadsPageStepDefinitions.i_select_Assigned_To(String)"
});
formatter.result({
  "duration": 68550900,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageStepDefinitions.i_click_on_Save_button()"
});
formatter.result({
  "duration": 5740654500,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageStepDefinitions.i_should_see_lead_creation_success_message()"
});
formatter.result({
  "duration": 162936500,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageStepDefinitions.i_should_verify_leads_information()"
});
formatter.result({
  "duration": 215102000,
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 1322108700,
  "status": "passed"
});
formatter.before({
  "duration": 3571479000,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User should be on Home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on the Login page URL \"http://localhost:8888/index.php?\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter username as \"admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter password as \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I sould see application homepage",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8888/index.php?",
      "offset": 28
    }
  ],
  "location": "loginPageStepDefinitions.i_am_on_the_Login_page_URL(String)"
});
formatter.result({
  "duration": 2560843200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    }
  ],
  "location": "loginPageStepDefinitions.i_enter_username_as(String)"
});
formatter.result({
  "duration": 108543400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "loginPageStepDefinitions.i_enter_password_as(String)"
});
formatter.result({
  "duration": 445733000,
  "status": "passed"
});
formatter.match({
  "location": "loginPageStepDefinitions.click_on_login_button()"
});
formatter.result({
  "duration": 7770510900,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinitions.i_sould_see_application_homepage()"
});
formatter.result({
  "duration": 213081100,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Create Leads",
  "description": "",
  "id": "leads-creation;create-leads;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@LeadsWithParameters"
    },
    {
      "line": 12,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I click on leads link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on leads plus button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select First Name title as \"Mr.\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter First Name \"auto_firstName3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter last name \"auto_lastName3\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter Company name \"companyName3\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter Title \"auto_company\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select Lead Source \"Employee\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select Industry \"Banking\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter Annual Revenue \"3000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter No Of Employees \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter Secondary Email \"info.test@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter Street \"7535 Torrey Santa Fe Road\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter Postal Code \"92129\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter Country \"US\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter Description \"auto_Description\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter Phone \"9999999999\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter Mobile \"9999999999\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter Fax \"Fax details\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter Email \"info.test@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enetr Website \"auto_website\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select Lead Status \"Attempted to Contact\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I select Assigned To \"Administrator\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on Save button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I should see lead creation success message",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "I should verify leads information",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageStepDefinitions.i_click_on_leads_link()"
});
formatter.result({
  "duration": 16178342800,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageStepDefinitions.i_click_on_leads_plus_button()"
});
formatter.result({
  "duration": 9135759900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr.",
      "offset": 30
    }
  ],
  "location": "LeadsPageStepDefinitions.i_select_First_Name_title_as(String)"
});
formatter.result({
  "duration": 159627600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_firstName3",
      "offset": 20
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_First_Name(String)"
});
formatter.result({
  "duration": 282290600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_lastName3",
      "offset": 19
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_last_name(String)"
});
formatter.result({
  "duration": 189207500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "companyName3",
      "offset": 22
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Company_name(String)"
});
formatter.result({
  "duration": 193494100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_company",
      "offset": 15
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Title(String)"
});
formatter.result({
  "duration": 183576700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Employee",
      "offset": 22
    }
  ],
  "location": "LeadsPageStepDefinitions.i_select_Lead_Source(String)"
});
formatter.result({
  "duration": 129351800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Banking",
      "offset": 19
    }
  ],
  "location": "LeadsPageStepDefinitions.i_select_Industry(String)"
});
formatter.result({
  "duration": 136731700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3000",
      "offset": 24
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Annual_Revenue(String)"
});
formatter.result({
  "duration": 114645800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 25
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_No_Of_Employees(String)"
});
formatter.result({
  "duration": 85654200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "info.test@gmail.com",
      "offset": 25
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Secondary_Email(String)"
});
formatter.result({
  "duration": 351223500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7535 Torrey Santa Fe Road",
      "offset": 16
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Street(String)"
});
formatter.result({
  "duration": 338201100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "92129",
      "offset": 21
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Postal_Code(String)"
});
formatter.result({
  "duration": 135994500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "US",
      "offset": 17
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Country(String)"
});
formatter.result({
  "duration": 97260400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_Description",
      "offset": 21
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Description(String)"
});
formatter.result({
  "duration": 133017600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9999999999",
      "offset": 15
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Phone(String)"
});
formatter.result({
  "duration": 200560300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9999999999",
      "offset": 16
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Mobile(String)"
});
formatter.result({
  "duration": 164551100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fax details",
      "offset": 13
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Fax(String)"
});
formatter.result({
  "duration": 240692900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "info.test@gmail.com",
      "offset": 15
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Email(String)"
});
formatter.result({
  "duration": 344027500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_website",
      "offset": 17
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enetr_Website(String)"
});
formatter.result({
  "duration": 281707900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Attempted to Contact",
      "offset": 22
    }
  ],
  "location": "LeadsPageStepDefinitions.i_select_Lead_Status(String)"
});
formatter.result({
  "duration": 208390300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Administrator",
      "offset": 22
    }
  ],
  "location": "LeadsPageStepDefinitions.i_select_Assigned_To(String)"
});
formatter.result({
  "duration": 86120300,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageStepDefinitions.i_click_on_Save_button()"
});
formatter.result({
  "duration": 8658195700,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageStepDefinitions.i_should_see_lead_creation_success_message()"
});
formatter.result({
  "duration": 107408500,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageStepDefinitions.i_should_verify_leads_information()"
});
formatter.result({
  "duration": 150174400,
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 1250008500,
  "status": "passed"
});
formatter.before({
  "duration": 3177276800,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User should be on Home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on the Login page URL \"http://localhost:8888/index.php?\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter username as \"admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter password as \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I sould see application homepage",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8888/index.php?",
      "offset": 28
    }
  ],
  "location": "loginPageStepDefinitions.i_am_on_the_Login_page_URL(String)"
});
formatter.result({
  "duration": 2979821200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    }
  ],
  "location": "loginPageStepDefinitions.i_enter_username_as(String)"
});
formatter.result({
  "duration": 62524900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "loginPageStepDefinitions.i_enter_password_as(String)"
});
formatter.result({
  "duration": 85989200,
  "status": "passed"
});
formatter.match({
  "location": "loginPageStepDefinitions.click_on_login_button()"
});
formatter.result({
  "duration": 3742713000,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinitions.i_sould_see_application_homepage()"
});
formatter.result({
  "duration": 518183800,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Create Leads",
  "description": "",
  "id": "leads-creation;create-leads;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@LeadsWithParameters"
    },
    {
      "line": 12,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I click on leads link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on leads plus button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select First Name title as \"Mr.\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter First Name \"auto_firstName3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter last name \"auto_lastName3\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter Company name \"companyName3\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter Title \"auto_company\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select Lead Source \"Employee\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select Industry \"Banking\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter Annual Revenue \"3000\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter No Of Employees \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter Secondary Email \"info.test@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter Street \"7535 Torrey Santa Fe Road\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter Postal Code \"92129\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter Country \"US\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter Description \"auto_Description\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter Phone \"9999999999\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter Mobile \"9999999999\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter Fax \"Fax details\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter Email \"info.test@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enetr Website \"auto_website\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select Lead Status \"Attempted to Contact\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I select Assigned To \"Administrator\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on Save button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I should see lead creation success message",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "I should verify leads information",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageStepDefinitions.i_click_on_leads_link()"
});
formatter.result({
  "duration": 8045047000,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageStepDefinitions.i_click_on_leads_plus_button()"
});
formatter.result({
  "duration": 2468910000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr.",
      "offset": 30
    }
  ],
  "location": "LeadsPageStepDefinitions.i_select_First_Name_title_as(String)"
});
formatter.result({
  "duration": 181743500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_firstName3",
      "offset": 20
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_First_Name(String)"
});
formatter.result({
  "duration": 261032400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_lastName3",
      "offset": 19
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_last_name(String)"
});
formatter.result({
  "duration": 265326800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "companyName3",
      "offset": 22
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Company_name(String)"
});
formatter.result({
  "duration": 187569000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_company",
      "offset": 15
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Title(String)"
});
formatter.result({
  "duration": 248756200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Employee",
      "offset": 22
    }
  ],
  "location": "LeadsPageStepDefinitions.i_select_Lead_Source(String)"
});
formatter.result({
  "duration": 142740700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Banking",
      "offset": 19
    }
  ],
  "location": "LeadsPageStepDefinitions.i_select_Industry(String)"
});
formatter.result({
  "duration": 132052900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3000",
      "offset": 24
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Annual_Revenue(String)"
});
formatter.result({
  "duration": 139600100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 25
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_No_Of_Employees(String)"
});
formatter.result({
  "duration": 93826900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "info.test@gmail.com",
      "offset": 25
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Secondary_Email(String)"
});
formatter.result({
  "duration": 323552300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7535 Torrey Santa Fe Road",
      "offset": 16
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Street(String)"
});
formatter.result({
  "duration": 244442400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "92129",
      "offset": 21
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Postal_Code(String)"
});
formatter.result({
  "duration": 121567000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "US",
      "offset": 17
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Country(String)"
});
formatter.result({
  "duration": 159878300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_Description",
      "offset": 21
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Description(String)"
});
formatter.result({
  "duration": 199912300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9999999999",
      "offset": 15
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Phone(String)"
});
formatter.result({
  "duration": 149223300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9999999999",
      "offset": 16
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Mobile(String)"
});
formatter.result({
  "duration": 261407400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fax details",
      "offset": 13
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Fax(String)"
});
formatter.result({
  "duration": 471862100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "info.test@gmail.com",
      "offset": 15
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Email(String)"
});
formatter.result({
  "duration": 298848500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_website",
      "offset": 17
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enetr_Website(String)"
});
formatter.result({
  "duration": 213193700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Attempted to Contact",
      "offset": 22
    }
  ],
  "location": "LeadsPageStepDefinitions.i_select_Lead_Status(String)"
});
formatter.result({
  "duration": 233962400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Administrator",
      "offset": 22
    }
  ],
  "location": "LeadsPageStepDefinitions.i_select_Assigned_To(String)"
});
formatter.result({
  "duration": 197431100,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageStepDefinitions.i_click_on_Save_button()"
});
formatter.result({
  "duration": 4514915500,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageStepDefinitions.i_should_see_lead_creation_success_message()"
});
formatter.result({
  "duration": 121271700,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageStepDefinitions.i_should_verify_leads_information()"
});
formatter.result({
  "duration": 250455600,
  "status": "passed"
});
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "duration": 1258766900,
  "status": "passed"
});
formatter.before({
  "duration": 3516850900,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "User should be on Home page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on the Login page URL \"http://localhost:8888/index.php?\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter username as \"admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter password as \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I sould see application homepage",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8888/index.php?",
      "offset": 28
    }
  ],
  "location": "loginPageStepDefinitions.i_am_on_the_Login_page_URL(String)"
});
formatter.result({
  "duration": 3177074100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    }
  ],
  "location": "loginPageStepDefinitions.i_enter_username_as(String)"
});
formatter.result({
  "duration": 57905200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "loginPageStepDefinitions.i_enter_password_as(String)"
});
formatter.result({
  "duration": 91934400,
  "status": "passed"
});
formatter.match({
  "location": "loginPageStepDefinitions.click_on_login_button()"
});
formatter.result({
  "duration": 6751428500,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinitions.i_sould_see_application_homepage()"
});
formatter.result({
  "duration": 559956800,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Create Leads",
  "description": "",
  "id": "leads-creation;create-leads;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 12,
      "name": "@regression"
    },
    {
      "line": 1,
      "name": "@LeadsWithParameters"
    },
    {
      "line": 12,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "I click on leads link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I click on leads plus button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select First Name title as \"Mr.\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter First Name \"auto_firstName3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter last name \"auto_lastName3\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter Company name \"companyName3\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter Title \"auto_company\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select Lead Source \"Employee\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select Industry \"Banking\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter Annual Revenue \"200\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter No Of Employees \"2\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter Secondary Email \"info.test@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter Street \"7535 Torrey Santa Fe Road\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter Postal Code \"92129\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter Country \"US\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter Description \"auto_Description\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter Phone \"9999999999\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I enter Mobile \"9999999999\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter Fax \"Fax details\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter Email \"info.test@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enetr Website \"auto_website\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select Lead Status \"Attempted to Contact\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I select Assigned To \"Administrator\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on Save button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I should see lead creation success message",
  "keyword": "Then "
});
formatter.step({
  "line": 39,
  "name": "I should verify leads information",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageStepDefinitions.i_click_on_leads_link()"
});
formatter.result({
  "duration": 8107942000,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageStepDefinitions.i_click_on_leads_plus_button()"
});
formatter.result({
  "duration": 2410844100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mr.",
      "offset": 30
    }
  ],
  "location": "LeadsPageStepDefinitions.i_select_First_Name_title_as(String)"
});
formatter.result({
  "duration": 175139500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_firstName3",
      "offset": 20
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_First_Name(String)"
});
formatter.result({
  "duration": 497555100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_lastName3",
      "offset": 19
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_last_name(String)"
});
formatter.result({
  "duration": 254900400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "companyName3",
      "offset": 22
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Company_name(String)"
});
formatter.result({
  "duration": 174889500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_company",
      "offset": 15
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Title(String)"
});
formatter.result({
  "duration": 139442000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Employee",
      "offset": 22
    }
  ],
  "location": "LeadsPageStepDefinitions.i_select_Lead_Source(String)"
});
formatter.result({
  "duration": 124714800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Banking",
      "offset": 19
    }
  ],
  "location": "LeadsPageStepDefinitions.i_select_Industry(String)"
});
formatter.result({
  "duration": 139526300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 24
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Annual_Revenue(String)"
});
formatter.result({
  "duration": 84798200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 25
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_No_Of_Employees(String)"
});
formatter.result({
  "duration": 81756800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "info.test@gmail.com",
      "offset": 25
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Secondary_Email(String)"
});
formatter.result({
  "duration": 265643200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7535 Torrey Santa Fe Road",
      "offset": 16
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Street(String)"
});
formatter.result({
  "duration": 182662000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "92129",
      "offset": 21
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Postal_Code(String)"
});
formatter.result({
  "duration": 98186900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "US",
      "offset": 17
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Country(String)"
});
formatter.result({
  "duration": 101942600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_Description",
      "offset": 21
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Description(String)"
});
formatter.result({
  "duration": 116899000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9999999999",
      "offset": 15
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Phone(String)"
});
formatter.result({
  "duration": 160740100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9999999999",
      "offset": 16
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Mobile(String)"
});
formatter.result({
  "duration": 139706500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fax details",
      "offset": 13
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Fax(String)"
});
formatter.result({
  "duration": 163562100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "info.test@gmail.com",
      "offset": 15
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enter_Email(String)"
});
formatter.result({
  "duration": 313559700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "auto_website",
      "offset": 17
    }
  ],
  "location": "LeadsPageStepDefinitions.i_enetr_Website(String)"
});
formatter.result({
  "duration": 274071000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Attempted to Contact",
      "offset": 22
    }
  ],
  "location": "LeadsPageStepDefinitions.i_select_Lead_Status(String)"
});
formatter.result({
  "duration": 114139800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Administrator",
      "offset": 22
    }
  ],
  "location": "LeadsPageStepDefinitions.i_select_Assigned_To(String)"
});
formatter.result({
  "duration": 103584000,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageStepDefinitions.i_click_on_Save_button()"
});
formatter.result({
  "duration": 5411919700,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageStepDefinitions.i_should_see_lead_creation_success_message()"
});
formatter.result({
  "duration": 85405700,
  "status": "passed"
});
formatter.match({
  "location": "LeadsPageStepDefinitions.i_should_verify_leads_information()"
});
formatter.result({
  "duration": 157048000,
  "status": "passed"
});
formatter.embedding("image/png", "embedded5.png");
formatter.after({
  "duration": 1108274200,
  "status": "passed"
});
formatter.uri("features/login/login.feature");
formatter.feature({
  "line": 2,
  "name": "Sign In",
  "description": "As an employee of the company\nI want to login to application with my credentails\r\nIn order to use the application features.",
  "id": "sign-in",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.before({
  "duration": 3505448800,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "User navigates to Application URL",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on the Login page URL \"http://localhost:8888/index.php?\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I should see Log In Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8888/index.php?",
      "offset": 28
    }
  ],
  "location": "loginPageStepDefinitions.i_am_on_the_Login_page_URL(String)"
});
formatter.result({
  "duration": 1607442500,
  "status": "passed"
});
formatter.match({
  "location": "loginPageStepDefinitions.i_should_see_Log_In_Page()"
});
formatter.result({
  "duration": 31283300,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Sign In with valid credential",
  "description": "",
  "id": "sign-in;sign-in-with-valid-credential",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "I enter username as \"admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter password as \"password\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I sould see application homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "I sould see administrator text message on home Page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    }
  ],
  "location": "loginPageStepDefinitions.i_enter_username_as(String)"
});
formatter.result({
  "duration": 88547600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "loginPageStepDefinitions.i_enter_password_as(String)"
});
formatter.result({
  "duration": 295608600,
  "status": "passed"
});
formatter.match({
  "location": "loginPageStepDefinitions.click_on_login_button()"
});
formatter.result({
  "duration": 4782506600,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinitions.i_sould_see_application_homepage()"
});
formatter.result({
  "duration": 758015100,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinitions.i_sould_see_administrator_text_message_on_home_Page()"
});
formatter.result({
  "duration": 25794100,
  "status": "passed"
});
formatter.embedding("image/png", "embedded6.png");
formatter.after({
  "duration": 1545939300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 20,
  "name": "Sign In with valid credentials",
  "description": "",
  "id": "sign-in;sign-in-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 19,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I enter username as \"\u003cuserName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I enter password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I sould see application homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I sould see administrator text message on home Page",
  "keyword": "And "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "sign-in;sign-in-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "userName",
        "password"
      ],
      "line": 28,
      "id": "sign-in;sign-in-with-valid-credentials;;1"
    },
    {
      "cells": [
        "admin",
        "password"
      ],
      "line": 29,
      "id": "sign-in;sign-in-with-valid-credentials;;2"
    },
    {
      "cells": [
        "admin",
        "password1"
      ],
      "line": 30,
      "id": "sign-in;sign-in-with-valid-credentials;;3"
    },
    {
      "cells": [
        "admin",
        "password"
      ],
      "line": 31,
      "id": "sign-in;sign-in-with-valid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7813130400,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "User navigates to Application URL",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on the Login page URL \"http://localhost:8888/index.php?\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I should see Log In Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8888/index.php?",
      "offset": 28
    }
  ],
  "location": "loginPageStepDefinitions.i_am_on_the_Login_page_URL(String)"
});
formatter.result({
  "duration": 1377463200,
  "status": "passed"
});
formatter.match({
  "location": "loginPageStepDefinitions.i_should_see_Log_In_Page()"
});
formatter.result({
  "duration": 27230600,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Sign In with valid credentials",
  "description": "",
  "id": "sign-in;sign-in-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 19,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I enter username as \"admin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I enter password as \"password\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I sould see application homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I sould see administrator text message on home Page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    }
  ],
  "location": "loginPageStepDefinitions.i_enter_username_as(String)"
});
formatter.result({
  "duration": 116769000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "loginPageStepDefinitions.i_enter_password_as(String)"
});
formatter.result({
  "duration": 196557500,
  "status": "passed"
});
formatter.match({
  "location": "loginPageStepDefinitions.click_on_login_button()"
});
formatter.result({
  "duration": 6696464500,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinitions.i_sould_see_application_homepage()"
});
formatter.result({
  "duration": 749195200,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinitions.i_sould_see_administrator_text_message_on_home_Page()"
});
formatter.result({
  "duration": 157394400,
  "status": "passed"
});
formatter.embedding("image/png", "embedded7.png");
formatter.after({
  "duration": 2049072800,
  "status": "passed"
});
formatter.before({
  "duration": 4039519900,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "User navigates to Application URL",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on the Login page URL \"http://localhost:8888/index.php?\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I should see Log In Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8888/index.php?",
      "offset": 28
    }
  ],
  "location": "loginPageStepDefinitions.i_am_on_the_Login_page_URL(String)"
});
formatter.result({
  "duration": 2198884000,
  "status": "passed"
});
formatter.match({
  "location": "loginPageStepDefinitions.i_should_see_Log_In_Page()"
});
formatter.result({
  "duration": 25996900,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Sign In with valid credentials",
  "description": "",
  "id": "sign-in;sign-in-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 19,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I enter username as \"admin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I enter password as \"password1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I sould see application homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I sould see administrator text message on home Page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    }
  ],
  "location": "loginPageStepDefinitions.i_enter_username_as(String)"
});
formatter.result({
  "duration": 121923900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password1",
      "offset": 21
    }
  ],
  "location": "loginPageStepDefinitions.i_enter_password_as(String)"
});
formatter.result({
  "duration": 123175900,
  "status": "passed"
});
formatter.match({
  "location": "loginPageStepDefinitions.click_on_login_button()"
});
formatter.result({
  "duration": 1817805500,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinitions.i_sould_see_application_homepage()"
});
formatter.result({
  "duration": 102236581700,
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d73.0.3683.86)\n  (Driver info: chromedriver\u003d2.38.552522 (437e6fbedfa8762dec75e2c5b3ddb86763dc9dcb),platform\u003dWindows NT 10.0.17763 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-55MS72K\u0027, ip: \u0027192.168.0.102\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_171\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.38.552522 (437e6fbedfa876..., userDataDir: C:\\Users\\supra\\AppData\\Loca...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 73.0.3683.86, webStorageEnabled: true}\nSession ID: daef380284d39c0d48ea2745d3a67a24\n*** Element info: {Using\u003dxpath, value\u003d//span[contains(text(),\u0027 Administrator\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:319)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:421)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:311)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:315)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$100(ExpectedConditions.java:44)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:301)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:298)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:248)\r\n\tat com.cucumberFramework.helper.WaitHelper.WaitForElement(WaitHelper.java:29)\r\n\tat com.cucumberFramework.pageObjects.HomePage.getAdministrator(HomePage.java:61)\r\n\tat com.cucumberFramework.stepdefinitions.HomePageStepDefinitions.i_sould_see_application_homepage(HomePageStepDefinitions.java:25)\r\n\tat ✽.Then I sould see application homepage(features/login/login.feature:24)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "HomePageStepDefinitions.i_sould_see_administrator_text_message_on_home_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 4607316700,
  "status": "passed"
});
formatter.before({
  "duration": 5788102200,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "User navigates to Application URL",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 8,
  "name": "I am on the Login page URL \"http://localhost:8888/index.php?\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I should see Log In Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "http://localhost:8888/index.php?",
      "offset": 28
    }
  ],
  "location": "loginPageStepDefinitions.i_am_on_the_Login_page_URL(String)"
});
formatter.result({
  "duration": 3431609100,
  "status": "passed"
});
formatter.match({
  "location": "loginPageStepDefinitions.i_should_see_Log_In_Page()"
});
formatter.result({
  "duration": 31310100,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Sign In with valid credentials",
  "description": "",
  "id": "sign-in;sign-in-with-valid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    },
    {
      "line": 19,
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "I enter username as \"admin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I enter password as \"password\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I sould see application homepage",
  "keyword": "Then "
});
formatter.step({
  "line": 25,
  "name": "I sould see administrator text message on home Page",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 21
    }
  ],
  "location": "loginPageStepDefinitions.i_enter_username_as(String)"
});
formatter.result({
  "duration": 53954300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "loginPageStepDefinitions.i_enter_password_as(String)"
});
formatter.result({
  "duration": 62469200,
  "status": "passed"
});
formatter.match({
  "location": "loginPageStepDefinitions.click_on_login_button()"
});
formatter.result({
  "duration": 3945509900,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinitions.i_sould_see_application_homepage()"
});
formatter.result({
  "duration": 599023700,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDefinitions.i_sould_see_administrator_text_message_on_home_Page()"
});
formatter.result({
  "duration": 24836300,
  "status": "passed"
});
formatter.embedding("image/png", "embedded8.png");
formatter.after({
  "duration": 1466552900,
  "status": "passed"
});
});