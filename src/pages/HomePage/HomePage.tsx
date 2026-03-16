import React from 'react';
import Header from '../../components/Header';
import { AboutMe, Contacts, Hero, Projects } from '../../components';

export function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <Projects />
      <Contacts />
    </>
  );
}