// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('CP010-Validación de Campos en Login', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('CP010-Validación de Campos en Login', async function() {
    // Test name: CP010-Validación de Campos en Login
    // Step # | name | target | value
    // 1 | open | https://test-qa.inlaze.com/auth/sign-in | 
    await driver.get("https://test-qa.inlaze.com/auth/sign-in")
    // 2 | setWindowSize | 1528x808 | 
    await driver.manage().window().setRect({ width: 1528, height: 808 })
    // 3 | click | id=email | 
    await driver.findElement(By.id("email")).click()
    // 4 | type | id=email | monicag.3221@gmail.com
    await driver.findElement(By.id("email")).sendKeys("monicag.3221@gmail.com")
    // 5 | click | css=.flex:nth-child(2) | 
    await driver.findElement(By.css(".flex:nth-child(2)")).click()
  })
})
