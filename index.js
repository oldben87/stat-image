import puppeteer from "puppeteer"
import fs from "fs"

const app = async ({ height = 300, width = 400 }) => {
  console.log("Making Browser")
  const browser = await puppeteer.launch({ headless: false })

  const page = await browser.newPage()
  await page.setViewport({ height, width })
  await page.setContent("<html><head><p>Howdy</p></head></html>")

  const path = "output"
  try {
    await page.screenshot({ path: `${path}/example.png` })
  } catch {
    fs.mkdirSync(path)
    await page.screenshot({ path: `${path}/example.png` })
  }
}

app({}).then(() => {
  process.exit(0)
})
