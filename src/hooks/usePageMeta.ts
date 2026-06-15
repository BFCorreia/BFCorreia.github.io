import { useEffect } from 'react';

export const usePageMeta = (title: string, iconUrl?: string) => {
  useEffect(() => {
    // Save original values
    const originalTitle = document.title;
    const faviconLink = document.querySelector("link[rel*='icon']") as HTMLLinkElement;
    const originalIcon = faviconLink ? faviconLink.href : '';

    // Set new values
    document.title = title;
    if (iconUrl && faviconLink) {
      faviconLink.href = iconUrl;
    }

    // Cleanup on unmount
    return () => {
      document.title = originalTitle;
      if (iconUrl && faviconLink) {
        faviconLink.href = originalIcon;
      }
    };
  }, [title, iconUrl]);
};
