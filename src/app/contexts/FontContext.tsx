import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface FontOption {
  id: string;
  name: string;
  displayName: string;
  bodyFont: string;
  headingFont: string;
  importUrl: string;
}

// Top 10 professional fonts used on luxury/professional websites
export const fontOptions: FontOption[] = [
  {
    id: 'playfair-inter',
    name: 'Playfair Display & Inter',
    displayName: 'Playfair & Inter (Current)',
    bodyFont: 'Inter',
    headingFont: 'Playfair Display',
    importUrl: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&display=swap"
  },
  {
    id: 'montserrat',
    name: 'Montserrat',
    displayName: 'Montserrat',
    bodyFont: 'Montserrat',
    headingFont: 'Montserrat',
    importUrl: "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap"
  },
  {
    id: 'roboto',
    name: 'Roboto',
    displayName: 'Roboto',
    bodyFont: 'Roboto',
    headingFont: 'Roboto',
    importUrl: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap"
  },
  {
    id: 'lato',
    name: 'Lato',
    displayName: 'Lato',
    bodyFont: 'Lato',
    headingFont: 'Lato',
    importUrl: "https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap"
  },
  {
    id: 'open-sans',
    name: 'Open Sans',
    displayName: 'Open Sans',
    bodyFont: 'Open Sans',
    headingFont: 'Open Sans',
    importUrl: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap"
  },
  {
    id: 'raleway',
    name: 'Raleway',
    displayName: 'Raleway',
    bodyFont: 'Raleway',
    headingFont: 'Raleway',
    importUrl: "https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500;600;700;800&display=swap"
  },
  {
    id: 'poppins',
    name: 'Poppins',
    displayName: 'Poppins',
    bodyFont: 'Poppins',
    headingFont: 'Poppins',
    importUrl: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap"
  },
  {
    id: 'cormorant-inter',
    name: 'Cormorant Garamond & Inter',
    displayName: 'Cormorant & Inter',
    bodyFont: 'Inter',
    headingFont: 'Cormorant Garamond',
    importUrl: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
  },
  {
    id: 'merriweather',
    name: 'Merriweather',
    displayName: 'Merriweather',
    bodyFont: 'Merriweather',
    headingFont: 'Merriweather',
    importUrl: "https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700;900&display=swap"
  },
  {
    id: 'nunito',
    name: 'Nunito Sans',
    displayName: 'Nunito Sans',
    bodyFont: 'Nunito Sans',
    headingFont: 'Nunito Sans',
    importUrl: "https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800;900&display=swap"
  },
  {
    id: 'bodoni-moda',
    name: 'Bodoni Moda',
    displayName: 'Bodoni Moda',
    bodyFont: 'Bodoni Moda',
    headingFont: 'Bodoni Moda',
    importUrl: "https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@400;500;600;700;800;900&display=swap"
  },
  {
    id: 'cinzel',
    name: 'Cinzel',
    displayName: 'Cinzel',
    bodyFont: 'Cinzel',
    headingFont: 'Cinzel',
    importUrl: "https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&display=swap"
  },
  {
    id: 'crimson-text',
    name: 'Crimson Text',
    displayName: 'Crimson Text',
    bodyFont: 'Crimson Text',
    headingFont: 'Crimson Text',
    importUrl: "https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&display=swap"
  },
  {
    id: 'libre-baskerville',
    name: 'Libre Baskerville',
    displayName: 'Libre Baskerville',
    bodyFont: 'Libre Baskerville',
    headingFont: 'Libre Baskerville',
    importUrl: "https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap"
  },
  {
    id: 'josefin-sans',
    name: 'Josefin Sans',
    displayName: 'Josefin Sans',
    bodyFont: 'Josefin Sans',
    headingFont: 'Josefin Sans',
    importUrl: "https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600;700&display=swap"
  }
];

interface FontContextType {
  currentFont: FontOption;
  setFont: (fontId: string) => void;
}

const FontContext = createContext<FontContextType | undefined>(undefined);

export const FontProvider = ({ children }: { children: ReactNode }) => {
  const [currentFont, setCurrentFont] = useState<FontOption>(() => {
    const savedFontId = localStorage.getItem('selectedFont');
    return fontOptions.find(f => f.id === savedFontId) || fontOptions[0];
  });

  useEffect(() => {
    // Remove existing font import link if any
    const existingLink = document.getElementById('dynamic-font-import');
    if (existingLink) {
      existingLink.remove();
    }

    // Add new font import link
    const link = document.createElement('link');
    link.id = 'dynamic-font-import';
    link.rel = 'stylesheet';
    link.href = currentFont.importUrl;
    document.head.appendChild(link);

    // Apply fonts to document
    document.documentElement.style.setProperty('--font-body', currentFont.bodyFont);
    document.documentElement.style.setProperty('--font-heading', currentFont.headingFont);

    // Save to localStorage
    localStorage.setItem('selectedFont', currentFont.id);
  }, [currentFont]);

  const setFont = (fontId: string) => {
    const font = fontOptions.find(f => f.id === fontId);
    if (font) {
      setCurrentFont(font);
    }
  };

  return (
    <FontContext.Provider value={{ currentFont, setFont }}>
      {children}
    </FontContext.Provider>
  );
};

export const useFont = () => {
  const context = useContext(FontContext);
  if (!context) {
    throw new Error('useFont must be used within FontProvider');
  }
  return context;
};