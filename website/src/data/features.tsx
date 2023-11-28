/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import Translate, {translate} from '@docusaurus/Translate';

export type FeatureItem = {
  title: string;
  image: {
    src: string;
    width: number;
    height: number;
  };
  text: JSX.Element;
};

const FEATURES: FeatureItem[] = [
  {
    title: translate({
      message: 'Based on Kafka',
      id: 'homepage.features.powered-by-mdx.title',
    }),
    image: {
      src: '/img/undraw_typewriter.svg',
      width: 1009.54,
      height: 717.96,
    },
    text: (
      <Translate id="homepage.features.powered-by-mdx.text">
        Apache Kafka is an open-source distributed event streaming platform 
        used for high-performance data pipelines, streaming analytics, 
        data integration, and mission-critical applications.
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Powered by Ethereum',
      id: 'homepage.features.built-using-react.title',
    }),
    image: {
      src: '/img/undraw_react.svg',
      width: 1108,
      height: 731.18,
    },
    text: (
      <Translate id="homepage.features.built-using-react.text">
        Verifying the identity of participants using crypto's methods, 
        involving secp256k1 private and public key pairs. 
        Granting or denying permissions to perform specific actions, 
        handled by smart contracts with predefined rules.
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'End-to-end cryptography',
      id: 'homepage.features.ready-for-translations.title',
    }),
    image: {
      src: '/img/undraw_around_the_world.svg',
      width: 1137,
      height: 776.59,
    },
    text: (
      <Translate id="homepage.features.ready-for-translations.text">
        Obtain one shared secret through the ECDH key exchange with crypto's key. 
        Use a key derivation function to derive a symmetric key from the shared secret. 
        Choose a symmetric encryption algorithm with the derived key to encrypt messages.
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Distributed system',
      id: 'homepage.features.document-versioning.title',
    }),
    image: {
      src: '/img/undraw_version_control.svg',
      width: 1038.23,
      height: 693.31,
    },
    text: (
      <Translate id="homepage.features.document-versioning.text">
        The system consists of multiple independent nodes 
        which communicate with each other to share information and coordinate their activities. 
        If one node fails, the system should be able to continue functioning.
      </Translate>
    ),
  },
  {
    title: translate({
      message: 'Collaboration',
      id: 'homepage.features.content-search.title',
    }),
    image: {
      src: '/img/undraw_algolia.svg',
      width: 1137.97,
      height: 736.21,
    },
    text: (
      <Translate id="homepage.features.content-search.text">
        No licensing to prevent users from using the software for various purposes. 
        Encourage collaboration not only to develop software, 
        but also to build untraceable and privacy protection environment.
      </Translate>
    ),
  },
];

export default FEATURES;
