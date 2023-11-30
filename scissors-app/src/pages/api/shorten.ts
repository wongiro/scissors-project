import { NextApiRequest, NextApiResponse } from 'next';
import { nanoid } from 'nanoid';

// In-memory storage for URL mappings
const urlDatabase = new Map<string, string>();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      // Extract the URL to be shortened from the request body
      const { url } = req.body;

      // Check if the URL is already in the database
      if (urlDatabase.has(url)) {
        res.status(200).json({ shortenedUrl: urlDatabase.get(url) });
      } else {
        // Generate a unique short URL
        const shortUrl = nanoid(6); // You can customize the length

        // Store the mapping of short URL to original URL in the database
        urlDatabase.set(url, shortUrl);

        // Respond with the shortened URL
        res.status(200).json({ shortenedUrl: shortUrl });
      }
    } catch (error) {
      console.error('Error shortening URL:', error);
      res.status(500).json({ error: 'An error occurred while shortening the URL.' });
    }
  } else {
    res.status(405).end(); // Method Not Allowed
  }
};
