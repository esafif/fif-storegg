/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/order */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable react/function-component-definition */
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import styles from "../styles/Home.module.css";
import AOS from "aos";
import Navbar from "../components/organisms/Navbar";
import MainBanner from "../components/organisms/MainBanner";
import TransactionStep from "../components/organisms/TransactionStep";
import FeaturedGame from "../components/organisms/FeaturedGame";
import Reached from "../components/organisms/Reached";
import Story from "../components/organisms/StoryGame";
import Footer from "../components/organisms/Footer";

export default function Home() {
  useEffect(() => {
    AOS.init();
  });
  return (
    <>
      <Head>
        <title>StoreGG - Get a new experience with Fif gaming</title>
        <meta name="description" content="Get a new experience Fif gaming" />
        <meta
          property="og:title"
          content="StoreGG - Get a new experience with Fif gaming"
        />
        <meta
          property="og:description"
          content="Get a new experience Fif gaming"
        />
        <meta
          property="og:image"
          content="https://storegg.com/static/images/logo.png"
        />
        <meta property="og:url" content="https://storegg.com/" />
      </Head>
      <Navbar />
      <MainBanner />
      <TransactionStep />
      <FeaturedGame />
      <Reached />
      <Story />
      <Footer />
    </>
  );
}
