import express from "express";
import gplay from "google-play-scraper";
import appstore from "app-store-scraper";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 5001;

// Cache
const cache = new Map();
const CACHE_TTL = 3600000; // 1 hour

app.use(cors());

// Utility functions
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const retryFetch = async (fn, maxRetries = 3) => {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i === maxRetries - 1) throw error;
      console.log(`  Retry ${i + 1}/${maxRetries - 1}...`);
      await sleep(1000 * (i + 1));
    }
  }
};

// Health check
app.get("/health", (req, res) => {
  res.json({ status: "ok", port: PORT });
});

// Play Store
app.get("/api/play-store/:appId", async (req, res) => {
  const { appId } = req.params;
  const cacheKey = `play-${appId}`;

  console.log(`[Play Store] Request: ${appId}`);

  try {
    // Check cache
    if (cache.has(cacheKey)) {
      const { data, timestamp } = cache.get(cacheKey);
      if (Date.now() - timestamp < CACHE_TTL) {
        console.log(`[Play Store] Cache hit`);
        return res.json(data);
      } else {
        cache.delete(cacheKey);
      }
    }

    console.log(`[Play Store] Fetching...`);
    const appData = await retryFetch(() =>
      gplay.app({ appId, lang: "en", country: "fr" })
    );
    console.log(appData);

    const data = {
      rating: appData.score,
      ratingsCount: appData.ratings,
      icon: appData.icon,
      title: appData.title,
    };

    cache.set(cacheKey, { data, timestamp: Date.now() });
    console.log(
      `[Play Store] ✓ ${data.title} - ${data.rating}⭐ (${data.ratingsCount} reviews)`
    );
    res.json(data);
  } catch (error) {
    console.error(`[Play Store] ✗ Error: ${error.message}`);
    res.status(500).json({ error: error.message });
  }
});

// App Store
app.get("/api/app-store/:appId", async (req, res) => {
  const { appId } = req.params;
  const cacheKey = `app-${appId}`;

  console.log(`[App Store] Request: ${appId}`);

  try {
    // Check cache
    if (cache.has(cacheKey)) {
      const { data, timestamp } = cache.get(cacheKey);
      if (Date.now() - timestamp < CACHE_TTL) {
        console.log(`[App Store] Cache hit`);
        return res.json(data);
      } else {
        cache.delete(cacheKey);
      }
    }

    console.log(`[App Store] Fetching...`);
    const appData = await retryFetch(() =>
      appstore.app({ id: appId, lang: "en", country: "fr" })
    );
    console.log(appData);

    const data = {
      rating: appData.score,
      ratingsCount: appData.ratings,
      icon: appData.icon,
      title: appData.title,
    };

    cache.set(cacheKey, { data, timestamp: Date.now() });
    console.log(
      `[App Store] ✓ ${data.title} - ${data.rating}⭐ (${data.ratingsCount} reviews)`
    );
    res.json(data);
  } catch (error) {
    console.error(`[App Store] ✗ Error: ${error.message}`);
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`\n✓ Rating server running on port ${PORT}`);
  console.log(`  Health: http://localhost:${PORT}/health\n`);
});
