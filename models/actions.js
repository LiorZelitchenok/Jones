const elements = require("./register.elements");
module.exports = {
  setNameInput: async (name) => {
    await page.type(elements.nameInput, name);
  },
  setEmailInput: async (email) => {
    await page.type(elements.emailInput, email);
  },
  setCompanyInput: async (company) => {
    await page.type(elements.comnpanyInput, company);
  },
  setPhoneInput: async (phone) => {
    await page.type(elements.phoneInput, phone);
  },
  selectNumberOfEmployeesDropdown: async (numberOfEmployees) => {
    await page.select(elements.employeesDropdown, numberOfEmployees);
  },
  clickSubmitButton: async () => {
    await page.click(elements.submitButton);
  },
};
