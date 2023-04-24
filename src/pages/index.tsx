import React from 'react';
import Layout from '@theme/Layout';

import HeroSection from '../components/homepage/HeroSection';
import SDKsSection from '../components/homepage/SDKsSection';
import APIReferenceSection from '../components/homepage/APIReferenceSection';
import CommunitySection from '../components/homepage/CommunitySection';
import HomeFooter from '../components/homepage/HomeFooter';
import ResourcesSection from '../components/homepage/ResourcesSection';
import HelpSection from '../components/homepage/HelpSection';
import Head from '@docusaurus/Head';
// import './index.module.css'

export default function Homepage() {
  return (
    <Layout
      description="Real-time audio & video SDKs, ready to launch 🚀"
      wrapperClassName="homepage flex flex-col"
      noFooter
    >
      <Head>
        <link rel="prefetch" href="/assets/css/elements.min.css" />
      </Head>
      <HeroSection />
      <SDKsSection />
      <div className="relative">
        <APIReferenceSection />
        <div className="absolute bottom-0 top-1/2 -z-10 w-full bg-secondary-800 dark:bg-secondary-900"></div>
        <div className="absolute bottom-1/2 top-0 -z-10 w-full bg-secondary-1000"></div>
      </div>

      <div className="z-0 bg-secondary-800 dark:bg-secondary-900">
        <ResourcesSection />
        <HelpSection className="-mb-48" />
      </div>

      <CommunitySection />
      <HomeFooter />
    </Layout>
  );
}
