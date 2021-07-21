const puppeteer = require("puppeteer");
const actions = require("./models/actions");
const baseURL = "http://contractorsinsurancereview.com/ExampleForm/";
//
const userRegisterData = {
  name: "Lior",
  phone: "0544982738",
  email: "liornok3@gmail.com",
  company: "Jones",
  numberOfEmployees: "51-500",
};
//Runs the automation flow 
(async () => {
  const browser = await puppeteer.launch();
  global.page = await browser.newPage();
  try {
    await page.goto(baseURL);
    //Verify that we got to the right base page.
    const title = await page.title();
    if (title !== "Example Form") {
      throw new Error("Failed to nevigate to the base url.");
    }
    await automationFlow();
  } catch (err) {
    console.log("Register form failed with error :", err);
  } finally {
    await browser.close();
  }
})();

//I tried to built it in a Page ojbect model desing pattern.
const automationFlow = async () => {
  await actions.setNameInput(userRegisterData.name);
  await actions.setEmailInput(userRegisterData.email);
  await actions.setPhoneInput(userRegisterData.phone);
  await actions.setCompanyInput(userRegisterData.company);
  await actions.selectNumberOfEmployeesDropdown(
    userRegisterData.numberOfEmployees
  );
  await page.screenshot({ path: "userRegisterData.png" });
  await actions.clickSubmitButton();
  //Verify that we got to the next page after submiting the form.
  const title = await page.title();
  if (title === "Thank You") {
    console.log("Thank you!");
  }
};
