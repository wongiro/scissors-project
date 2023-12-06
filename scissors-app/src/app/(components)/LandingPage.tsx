"use client";
import React, { useState } from "react";
import Link from "next/link";

type Props = {};

const LandingPage = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [urlToShorten, setUrlToShorten] = useState('');
  const [shortenedUrls, setShortenedUrls] = useState([]);
  
  const handleShorten = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  
    // Regular expression for URL validation
    const urlRegex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
  
    // Check if the input URL is valid
    if (!urlRegex.test(urlToShorten)) {
      alert("Invalid URL! Please enter a valid URL.");
      return;
    }
  
    try {
      // Your URL shortening logic here.
      const response = await fetch('/api/shorten', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: urlToShorten }),
      });
  
      if (response.ok) {
        const data = await response.json();
        const shortenedUrl = data?.shortenedUrl; // Replace with the actual field in your response
        setShortenedUrls([shortenedUrl, ...shortenedUrls.slice(0, 4)]);
        setUrlToShorten('');
        console.log("Url shortened");
      } else {
        console.error('Failed to shorten URL');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  const handleCopyToClipboard = (url: string) => {
    // Create a temporary textarea element to copy the URL to the clipboard
    const tempTextarea = document.createElement('textarea');
    tempTextarea.value = url;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
  
    try {
      // Copy the selected text to the clipboard using the Clipboard API
      document.execCommand('copy');
      document.execCommand('cut');
      console.log('URL copied to clipboard');
    } catch (error) {
      console.error('Failed to copy URL to clipboard:', error);
    }
  
    document.body.removeChild(tempTextarea);
  };
  


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      email,
      password,
    };

    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Form submitted successfully:", data);
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <section className="flex flex-row justify-center items-center order-1 grow-0 p-0 h-screen mx-auto shadow-md overflow-hidden md:flex">
      <div className="backGround bg-no-repeat bg-cover w-full border-4 border-blue-500 m-6 rounded-lg h-full md:h-full md:w-full">
        <div className="flex flex-col mt-[15%] items-center h-screen md:shrink-0">
          <h1 className="text-xxl font-bold text-[#000] flex flex-col items-center text-center">
            Optimize Your Online Experience with Our Advanced
            <span className="bg-gradient-to-l text-sky-600">
              URL Shortening
            </span>
            Solution.
          </h1>
          <p className="gap-6 text-black  mt-[5%] flex flex-col items-center justify-center p-5 ">
            Personalize your shortened URLs to align with your brand identity.
            Utilize custom slugs, branded links, and domain customization
            options to reinforce your brand presence and enhance user
            engagement.
          </p>
          <button className="bg-blue-700 text-[#FFF] text-lg font-bold py-3 px-6 gap-3 rounded-lg w-[250px] h-[50px] mt-[10%] flex flex-col items-center justify-center p-5">
            <Link href="/SignUp" className="text-xl font-bold text-[#FFF]">
              Get Started
            </Link>
          </button>
        </div>
      </div>

      <div className="backGround bg-no-repeat bg-cover w-full rounded-lg h-full">
        <div className="flex flex-col items-center mt-40 ">
          <input
            type="text"
            placeholder="Enter your URL to shorten"
            className="p-3 w-96 rounded-lg border border-gray-300 outline-none"
            value={urlToShorten}
            onChange={(e) => setUrlToShorten(e.target.value)}
          />
          <button
            className="mt-4 bg-blue-700 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-800 cursor-pointer"
            onClick={handleShorten}
          >
            Shorten URL
          </button>
        </div>

        <div className="flex flex-col items-center mt-8">
          <h2 className="text-xl font-semibold">Your Shortened URLs:</h2>
          <ul>
            {shortenedUrls.map((url, index) => (
              <li key={index} className="flex items-center mt-2">
                <span className="break-words">{url}</span>
                <button
                  onClick={() => handleCopyToClipboard(url)}
                  className="ml-2 bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-1 px-2 rounded cursor-pointer"
                >
                  Copy
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
