import { useEffect } from "react";

const siteUrl = "https://www.sncevik.com";

function setMeta(selector, attr, value) {
  let tag = document.head.querySelector(selector);

  if (!tag) {
    tag = document.createElement("meta");
    const nameMatch = selector.match(/\[name="([^"]+)"\]/);
    const propertyMatch = selector.match(/\[property="([^"]+)"\]/);

    if (nameMatch) tag.setAttribute("name", nameMatch[1]);
    if (propertyMatch) tag.setAttribute("property", propertyMatch[1]);
    document.head.appendChild(tag);
  }

  tag.setAttribute(attr, value);
}

function setCanonical(url) {
  let canonical = document.head.querySelector('link[rel="canonical"]');

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.setAttribute("rel", "canonical");
    document.head.appendChild(canonical);
  }

  canonical.setAttribute("href", url);
}

function Seo({ title, description, path = "/" }) {
  useEffect(() => {
    const canonicalUrl = `${siteUrl}${path}`;

    document.title = title;
    setCanonical(canonicalUrl);
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", canonicalUrl);
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
  }, [description, path, title]);

  return null;
}

export default Seo;
