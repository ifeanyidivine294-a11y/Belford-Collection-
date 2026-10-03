import fs from 'fs';
import https from 'https';

const urls = [
  "https://postimg.cc/cgjQzM37",
  "https://postimg.cc/jw9z1QfL",
  "https://postimg.cc/5YGwrqzX",
  "https://postimg.cc/bDMQ5HnS",
  "https://postimg.cc/TLSrsqby",
  "https://postimg.cc/G8NkfJDy",
  "https://postimg.cc/YhSxS0rm",
  "https://postimg.cc/jw9z1QfH",
  "https://postimg.cc/xcdPd8fM",
  "https://postimg.cc/T5DrvLjD",
  "https://postimg.cc/1fzKzXmt",
  "https://postimg.cc/TKdv1ry0",
  "https://postimg.cc/hJJcgGBC",
  "https://postimg.cc/QVj62yhN",
  "https://postimg.cc/D8ChRGGf",
  "https://postimg.cc/5XQp5cq0",
  "https://postimg.cc/3yM1nLtT",
  "https://postimg.cc/3k09jMCZ",
  "https://postimg.cc/18VM0xcz",
  "https://postimg.cc/Vd7w2ttv",
  "https://postimg.cc/crDWP33K",
  "https://postimg.cc/d77wv0Yj",
  "https://postimg.cc/8FqDCVks",
  "https://postimg.cc/SXXkqKhr",
  "https://postimg.cc/gwfd0Pc9",
  "https://postimg.cc/0MXbsQFM",
  "https://postimg.cc/DWWnFzTY",
  "https://postimg.cc/WdVWrbYn",
  "https://postimg.cc/5YK6V0TH",
  "https://postimg.cc/2b9VD6Mj",
  "https://postimg.cc/ygpkHdty",
  "https://postimg.cc/1Vg45S1p",
  "https://postimg.cc/rRdzFT24",
  "https://postimg.cc/LYQnpXwT",
  "https://postimg.cc/xNkqTQVR",
  "https://postimg.cc/BjChC9Rd",
  "https://postimg.cc/MnYsY2gB",
  "https://postimg.cc/p9MmPrCW",
  "https://postimg.cc/qNGmGVW2",
  "https://postimg.cc/SnGZGFH6",
  "https://postimg.cc/LJVyVKGD",
  "https://postimg.cc/BjChC9RY",
  "https://postimg.cc/Z9gBXHQ2",
  "https://postimg.cc/fJ0WkZJY",
  "https://postimg.cc/FdVdWLMH",
  "https://postimg.cc/4mDfc308",
  "https://postimg.cc/BLKsbBvG",
  "https://postimg.cc/5Q5Vq9Lc",
  "https://postimg.cc/06rKtFVh",
  "https://postimg.cc/rRGkCyxL",
  "https://postimg.cc/LgkpB4LK",
  "https://postimg.cc/qzhmYB7R",
  "https://postimg.cc/BXLhyZvb",
  "https://postimg.cc/FdJKJJZG",
  "https://postimg.cc/56YPG9tN",
  "https://postimg.cc/w7yWPxB6",
  "https://postimg.cc/MvMs4ZGq",
  "https://postimg.cc/5jk7nQfJ",
  "https://postimg.cc/bdFC3Sqq",
  "https://postimg.cc/4nFLBHXk",
  "https://postimg.cc/TKRhH1d8",
  "https://postimg.cc/tsX7mJXM",
  "https://postimg.cc/yDVWrxVM",
  "https://postimg.cc/rD8zYsV2",
  "https://postimg.cc/9DWzN0mm"
];

const uniqueUrls = [...new Set(urls)];

function fetchOgImage(pageUrl) {
  return new Promise((resolve) => {
    https.get(pageUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const ogMatch = data.match(/<meta\s+property=["']og:image["']\s+content=["']([^"']+)["']/i) ||
                        data.match(/<meta\s+content=["']([^"']+)["']\s+property=["']og:image["']/i) ||
                        data.match(/id=["']direct["']\s+value=["']([^"']+)["']/i) ||
                        data.match(/https:\/\/i\.postimg\.cc\/[a-zA-Z0-9_\/.-]+/i);
        if (ogMatch) {
          resolve(ogMatch[1] || ogMatch[0]);
        } else {
          console.warn('No direct image found for:', pageUrl);
          resolve(pageUrl);
        }
      });
    }).on('error', (err) => {
      console.error('Error fetching:', pageUrl, err.message);
      resolve(pageUrl);
    });
  });
}

async function main() {
  const map = {};
  console.log(`Resolving ${uniqueUrls.length} image URLs...`);
  for (const url of uniqueUrls) {
    const direct = await fetchOgImage(url);
    map[url] = direct;
    console.log(`${url} -> ${direct}`);
  }
  fs.writeFileSync('src/config/imageMap.json', JSON.stringify(map, null, 2));
  console.log('Saved to src/config/imageMap.json');
}

main();
