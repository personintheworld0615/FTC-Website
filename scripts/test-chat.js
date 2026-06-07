async function testGemini() {
  const url = "https://raw.githubusercontent.com/jungcookgf/valentines-day/main/cute-lofi.mp3";
  console.log("Fetching: " + url);
  try {
    let response = await fetch(url, { method: "HEAD" });
    if (!response.ok) {
      // Try master branch
      const fallbackUrl = "https://raw.githubusercontent.com/jungcookgf/valentines-day/master/cute-lofi.mp3";
      console.log("Main branch failed, trying master: " + fallbackUrl);
      response = await fetch(fallbackUrl, { method: "HEAD" });
    }
    
    console.log("Response Status: " + response.status);
    if (response.ok) {
      console.log("Success! The direct cute-lofi.mp3 link is valid.");
    } else {
      console.error("Failed to load file. Status: " + response.status);
    }
  } catch (error) {
    console.error("Fetch request failed:", error);
  }
}

testGemini();
