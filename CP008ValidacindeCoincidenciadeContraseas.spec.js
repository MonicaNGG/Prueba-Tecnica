// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('CP008-Validación de Coincidencia de Contraseñas', function() {
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
  it('CP008-Validación de Coincidencia de Contraseñas', async function() {
    // Test name: CP008-Validación de Coincidencia de Contraseñas
    // Step # | name | target | value
    // 1 | open | /auth/sign-in | 
    await driver.get("https://test-qa.inlaze.com/auth/sign-in/auth/sign-in")
    // 2 | setWindowSize | 1528x808 | 
    await driver.manage().window().setRect({ width: 1528, height: 808 })
    // 3 | click | linkText=Sign up | 
    await driver.findElement(By.linkText("Sign up")).click()
    // 4 | click | id=full-name | 
    await driver.findElement(By.id("full-name")).click()
    // 5 | type | id=full-name | Monica Gallego
    await driver.findElement(By.id("full-name")).sendKeys("Monica Gallego")
    // 6 | click | id=email | 
    await driver.findElement(By.id("email")).click()
    // 7 | type | id=email | monicag.3221@gmail.com
    await driver.findElement(By.id("email")).sendKeys("monicag.3221@gmail.com")
    // 8 | click | css=.w-full > #password | 
    await driver.findElement(By.css(".w-full > #password")).click()
    // 9 | type | css=.w-full > #password | Mni0305*
    await driver.findElement(By.css(".w-full > #password")).sendKeys("Mni0305*")
    // 10 | click | css=.w-full > #confirm-password | 
    await driver.findElement(By.css(".w-full > #confirm-password")).click()
    // 11 | click | css=#password .btn | 
    await driver.findElement(By.css("#password .btn")).click()
    // 12 | click | css=.w-full > #confirm-password | 
    await driver.findElement(By.css(".w-full > #confirm-password")).click()
    // 13 | type | css=.w-full > #confirm-password | Monica1234
    await driver.findElement(By.css(".w-full > #confirm-password")).sendKeys("Monica1234")
    // 14 | assertText | css=.label-text-alt | Passwords do not match
    assert(await driver.findElement(By.css(".label-text-alt")).getText() == "Passwords do not match")
  })
})
