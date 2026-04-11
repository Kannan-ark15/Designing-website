/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedWork from './components/FeaturedWork';
import Categories from './components/Categories';
import ProjectSpotlight from './components/ProjectSpotlight';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <FeaturedWork />
        <Categories />
        <ProjectSpotlight />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

