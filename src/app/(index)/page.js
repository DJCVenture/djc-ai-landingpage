import HomeView from 'src/sections/_home/view/home-view';

// ----------------------------------------------------------------------

export const metadata = {
  title: 'DJC AI',
  description:
    'With powerful AI capabilities, DJC System empowers your businesses to harness the full potential of automation and data analytics, transforming the way you connect with customers and accelerate your success.',
  robots: 'index,follow',
  googlebot: 'index,follow',
  keywords: [
    'whatsapp',
    'blasting',
    'lead',
    'lead management',
    'find lead',
    'AI',
    'ai chatbot',
    'ai assistant',
    'whatsapp blasting',
    'email marketing',
    'sales funnel',
    'funnel',
    'landing page',
    'landing page builder',
    'AI automation',
    'automation',
  ],
  category: 'sales',
  alternates: {
    canonical: 'https://djc.ai',
    languages: {
      'en': {
        href: 'https://djc.ai/', // English Global
        hreflang: 'en',
      },
      'zh': {
        href: 'https://djc.ai/cn', // Chinese Global
        hreflang: 'zh',
      },
      'x-default': {
        href: 'https://djc.ai/', // Default English Global
        hreflang: 'x-default',
      },
    },
  },
  openGraph: {
    type: 'website',
    // url: arrListing.domain+'/agent/'+arrListing.userId.replace(/[^\w\s]/gi, '') +'/listing/'+params.listId+"/",
    url: 'https://djc.ai',
    title: 'DJC System',
    description:
      'With powerful AI capabilities, DJC System empowers your businesses to harness the full potential of automation and data analytics, transforming the way you connect with customers and accelerate your success.',
    images: [
      {
        url: 'https://firebasestorage.googleapis.com/v0/b/facebook-api-59e5c.appspot.com/o/files%2Fdjcventure6%40gmail.com%2FDJC-Hero2-edited.png?alt=media&token=5f443ae7-21d9-4b97-9ee6-4aa5e4cbe4ea',
        width: 1200,
        height: 630,
        alt: 'DJC System',
      },
    ],
  },
  schemaOrgJSONLD: [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url: 'https://djc.ai',
      name: 'DJC System',
      alternateName: 'DJC AI',
      description:
        'With powerful AI capabilities, DJC System empowers your businesses to harness the full potential of automation and data analytics, transforming the way you connect with customers and accelerate your success.',
    },
  ],
};

export default function HomePage() {
  return <HomeView />;
}
