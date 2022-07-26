const {Builder, Capabilities, By} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:5500/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})



test('step1: creating a movie',async()=>{
    await driver.findElement(By.xpath('//input')).sendKeys('superman\n')
    await driver.sleep(2000)
})

test('get the title', async() => {
    let title =  await driver.getTitle()
    console.log('Title is ' + title) 
})

test('get the text from id', async() => {
    await driver.findElement(By.id('superman')).getText()
})