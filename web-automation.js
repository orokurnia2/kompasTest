const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    args: [
      "--disable-web-security",
      "--disable-features=IsolateOrigins,site-per-process",
      "--start-maximized",
    ],
    defaultViewport: null,
    timeout: 0,
  });
  const page = await browser.newPage();
  // await page.setViewport({ width: 1920, height: 1080 });
  await page.goto("https://www.kompas.id/");
  await page.screenshot({ path: "screenshot/homepage.png" });
  await page.click(
    "a[href$='https://login.kompas.id/login?next=https%3A%2F%2Fwww.kompas.id%2F%3Fstatus%3Dsukses_login%26utm_source%3Dkompasid%26utm_medium%3Dlogin_paywall%26utm_campaign%3Dlogin%26utm_content%3Dhttps%3A%2F%2Fwww.kompas.id%2F']"
  );

  await page.screenshot({ path: "screenshot/loginpage.png" });
  await page.click("a[href$='/register']");

  await page.screenshot({ path: "screenshot/registerpage.png" });

  // await page.$eval(
  //   "input[name=firstName]",
  //   (el, value) => (el.value = value),
  //   "Some random first nname"
  // );

  await page.focus("input[name=firstName]");
  await page.keyboard.type("test54");

  await page.$eval(
    "input[name=lastName]",
    (el, value) => (el.value = value),
    "Cool last name"
  );

  await page.$eval(
    "input[name=email]",
    (el, value) => (el.value = value),
    "72a8bb8546@emailnax.com"
  );
  await page.$eval(
    "input[name=password]",
    (el, value) => (el.value = value),
    "thisisastrongpasswordlol"
  );

  // await page.click("iframe[title$=reCAPTCHA]");
  await page.screenshot({
    path: "screenshot/fill-user-registration-form.png",
  });
  // await page.click("button#daftar.button-submit");
  // await page.keyboard.press("Enter");
  // await page.screenshot({ path: "screenshot/after-register.png" });

  await browser.close();
})();
