import Layout from '../components/Layout';
import Head from 'next/head';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Insightful AI Strategies</title>
      </Head>
      <div className="flex flex-col items-center justify-center space-y-8 py-12">
        <motion.div 
          className="flex space-x-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="w-40 h-40 bg-white rounded-lg shadow-lg"></div>
          <div className="w-40 h-40 bg-white rounded-lg shadow-lg"></div>
        </motion.div>
        <motion.div
          className="w-96 h-48 bg-white rounded-lg shadow-lg"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        ></motion.div>
      </div>
    </Layout>
  );
}

