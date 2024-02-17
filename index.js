import puppeteer from "puppeteer"

const app = async ({ height = 300, width = 400 }) => {
  console.log("Making Browser")
  const browser = await puppeteer.launch({ headless: false })

  const page = await browser.newPage()
  await page.setViewport({ height, width })
  await page.setContent("<html><head><p>Howdy</p></head></html>")
  await page.screenshot({ path: "/output/example.png" })
}

app({}).then(() => {
  process.exit(0)
})
